import os
import uuid

from PIL import Image
from django.core.exceptions import ValidationError
from django.core.files.storage import default_storage
from django.db import models
from django.db.models.signals import post_delete, pre_save
from django.dispatch import receiver

# 定义一个全局（默认头像）图片路径变量，路径为：media/Image/user/default_avatar.jpg
DEFAULT_AVATAR_PATH = 'Image/user/default_avatar.jpg' # 前端进行判断无头像数据显示默认头像
# 引入阿里云OSS图片存储

# Create your models here.
# 用于对项目的数据库表进行设计
## 宠物售卖系统数据库构造表

# 创建用户信息表
class User(models.Model):
    # 默认存在id编号
    # 用户唯一账号标识
    userID = models.CharField(verbose_name='用户ID', max_length=30, unique=True)
    # 用户名称（可以为空）
    username = models.CharField(verbose_name='用户名称', max_length=50, null=True, blank=True)
    # 用户密码
    password = models.CharField(verbose_name='用户密码', max_length=100)
    gender_choices = (
        (1, '男'),
        (2, '女'),
        (3, '默认')
    )
    # 用户性别
    gender = models.SmallIntegerField(verbose_name='用户性别', choices=gender_choices, default=3)
    # 用户邮箱（不可以为空）
    email = models.EmailField(verbose_name='用户邮箱')
    # 账户创建时间（只存储年\月\日）创建数据的时候自增加时间属性
    created_at = models.DateField(verbose_name='用户注册时间', auto_now_add=True)
    # 用户最后登陆时间（存储年\月\日 时\分\秒）
    last_login = models.DateTimeField(verbose_name='用户最后登陆时间')
    # 用户生日（可以为空）
    birthday = models.DateTimeField(verbose_name='用户生日', blank=True, null=True)
    # 元数据编写
    class Meta:
        db_table = 'User'
        verbose_name = '用户信息'
        verbose_name_plural = '用户信息表'
    # 类实例的输出定义
    def __str__(self):
        # 只输出id+名称
        return 'ID: ' + self.userID + ' NAME: ' + self.username
#User

# 自定义用户头像的上传路径和文件名（最终保存位置为MEDIA_ROOT/Image/user）
def user_avatar_path(instance, filename):
    ext = filename.split('.')[-1]
    # 文件名用user_+用户id的形式
    return os.path.join('Image/user', f'user_{instance.user.id}.{ext}')

# 用户头像模型
class UserProfile(models.Model):
    # 用户外键（设置为用户表关联：可以通过用户表user.profile访问该表用户对应值）
    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name='profile')
    # 头像文件
    avatar = models.ImageField(verbose_name='用户头像', upload_to=user_avatar_path, blank=True, null=True)

    def has_avatar(self): # 检查本实例头像是否为空
        return bool(self.avatar and self.avatar.name.strip())

    def __str__(self):
        return f'{self.user.id}  {self.user.username} profile'

    def save(self, *args, **kwargs):
        # 调用父类的保存方法
        super(UserProfile, self).save(*args, **kwargs)

        # 如果头像存在，进行处理
        if self.avatar:
            img = Image.open(self.avatar.path)  # 打开图片
            img = img.convert("RGB")  # 转换为RGB模式，避免透明背景等问题

            # 限制图片大小为200KB
            max_size = 200 * 1024  # 200KB
            if os.path.getsize(self.avatar.path) > max_size:
                raise ValidationError("头像文件太大，最大支持200KB的图片。")

            # 动态调整头像的长和宽，限制最大宽度为200px，高度为200px
            base_width = 100
            w_percent = base_width / float(img.size[0])
            h_size = int(float(img.size[1]) * float(w_percent))
            img = img.resize((base_width, h_size), Image.LANCZOS)

            img.save(self.avatar.path)  # 保存调整后的图片
    # 元数据
    class Meta:
        db_table = 'UserProfile'
        verbose_name = '用户头像'
        verbose_name_plural = '用户头像表'
#UserProfile

# 用户头像处理监听（当用户删除头像时将文件头像也删除）
@receiver(post_delete, sender=UserProfile)
def delete_avatar_file(sender, instance, **kwargs):
    """
    删除 `UserProfile` 记录时，清理头像（不设置默认头像）
    """
    if instance.avatar:  # 仅当头像存在时删除
        instance.avatar.delete(save=False)  # 物理删除头像文件
# END

# 宠物类型表
class PetCategory(models.Model):
    # 类型名称
    name = models.CharField(verbose_name='宠物类型', max_length=10)
    # 宠物类型描述
    categurs = models.CharField(verbose_name='类型描述', max_length=255, null=True, blank=True)
    # 元数据的定义
    class Meta:
        # 设计数据库表名
        db_table = 'PetCategory'
        # 单个对象名
        verbose_name = '宠物类型'
        verbose_name_plural = '宠物类型表'
        # 默认自动排次序字段
        ordering = ['id'] # 首先按照categoryId进行排序
    # 类实例的输出定义
    def __str__(self):
        # 只输出名称
        return self.name
#PetCategory

# 宠物销售类型表
class PetType(models.Model):
    # 销售类型名称
    name = models.CharField(verbose_name='宠物销售类型', max_length=10)
    # 宠物类型描述
    type = models.CharField(verbose_name='宠物销售类型描述', max_length=255, null=True, blank=True)
    # 元数据的定义
    class Meta:
        # 设计数据库表名
        db_table = 'PetType'
        # 单个对象名
        verbose_name = '宠物销售类型'
        verbose_name_plural = '宠物销售类型表'

    # 类实例的输出定义
    def __str__(self):
        # 只输出名称
        return self.name
#PetType

# 处理图片名称


# 宠物商品表
class Pet(models.Model):
    # 宠物名
    name = models.CharField(verbose_name='宠物名', max_length=10)
    # 宠物年龄
    age = models.SmallIntegerField(verbose_name='宠物年龄', default=0)
    # 宠物类型（保证PetCategory中id=1为默认）
    petcategory = models.ForeignKey(verbose_name='宠物类型', to='PetCategory',to_field='id', on_delete=models.SET_DEFAULT, default=1)
    # 宠物销售类型（介绍小框显示，保证PetType中id=1为默认）
    ptype = models.ForeignKey(verbose_name='宠物销售类型', to='PetType',to_field='id', on_delete=models.SET_DEFAULT, default=1)
    # 宠物的创建时间（插入数据时自动创建）
    created_at = models.DateTimeField(verbose_name='宠物创建时间', auto_now_add=True)
    # 宠物预定售卖预定下架时间
    take_offtime = models.DateField(verbose_name='售卖下架时间')
    # 宠物等级（星星方式显示）
    petlevel = models.SmallIntegerField(verbose_name='宠物等级', default=0)
    # 宠物原价
    price = models.DecimalField(verbose_name='领养价格', max_digits=10, decimal_places=2)
    # 宠物特价
    special_price = models.DecimalField(verbose_name='领养特价', max_digits=10, decimal_places=2, default=0)

    # 元数据的编写
    class Meta:
        db_table = 'Pet'
        verbose_name = '宠物信息'
        verbose_name_plural = '宠物信息表'
    # 类实例的输出定义
    def __str__(self):
        # 只输出名称
        return f'宠物ID: {self.id}    宠物名: {self.name}'
#PetTable

# 宠物展示图片处理（最终保存位置为MEDIA_ROOT/Image/pet）
def pet_image_path(instance, filename):
    ext = filename.split('.')[-1]
    # 生成随机名
    unique_name = uuid.uuid4()
    return os.path.join('Image/pet', f'pet_{unique_name}.{ext}')

# 宠物图片模型
class PetProfile(models.Model):
    pet = models.OneToOneField(Pet, on_delete=models.CASCADE, related_name='profile')
    # 页面展示图
    image = models.ImageField(verbose_name='宠物展示主图', upload_to=pet_image_path)
    # 页面隐藏图1
    image_1 = models.ImageField(verbose_name='宠物展示隐藏图1', upload_to=pet_image_path, blank=True, null=True)
    def has_image_1(self): # 检查是否为空
        return bool(self.image_1 and self.image_1.name.strip())
    # 页面隐藏图2
    image_2 = models.ImageField(verbose_name='宠物展示隐藏图2', upload_to=pet_image_path, blank=True, null=True)
    def has_image_2(self): # 检查是否为空
        return bool(self.image_2 and self.image_2.name.strip())
    # 页面隐藏图2
    image_3 = models.ImageField(verbose_name='宠物展示隐藏图3', upload_to=pet_image_path, blank=True, null=True)
    def has_image_3(self): # 检查是否为空
        return bool(self.image_3 and self.image_3.name.strip())

    def __str__(self):
        return f'{self.pet.id} {self.pet.name} profile'

    def save(self, *args, **kwargs):
        # 调用父类的保存方法
        super(PetProfile, self).save(*args, **kwargs)
        # 循环调整
        # 设置列表
        imgs = [self.image, self.image_1, self.image_2]
        for img in imgs:
            # 如果商品图片存在，进行处理
            if img:
                img = Image.open(self.image.path)  # 打开图片
                img = img.convert("RGB")  # 转换为RGB模式，避免透明背景等问题
                # 限制图片大小为500KB
                max_size = 500 * 1024  # 500KB
                if os.path.getsize(self.image.path) > max_size:
                    raise ValidationError("商品图片文件太大，最大支持500KB的图片。")

                # 动态调整商品图片的长和宽，限制最大宽度为300px，高度为300px
                base_width = 300
                w_percent = base_width / float(img.size[0])
                h_size = int(float(img.size[1]) * float(w_percent))
                img = img.resize((base_width, h_size), Image.LANCZOS)

                img.save(self.image.path)  # 保存调整后的图片
    class Meta:
        # 设计数据库表名
        db_table = 'PetProfile'
        # 单个对象名
        verbose_name = '宠物展示图'
        verbose_name_plural = '宠物展示图表'
#PetProfile

# 图片的监听删除（如果数据库记录删除对应图片也要删除）
# 监听 PetProfile 的删除事件
@receiver(post_delete, sender=PetProfile)
def delete_pet_images(sender, instance, **kwargs):
    """ 当 PetProfile 对象删除时，自动删除存储的图片文件 """
    image_fields = ['image', 'image_1', 'image_2']

    for field in image_fields:
        image_file = getattr(instance, field)  # 获取字段对象
        if image_file and image_file.name:  # 确保字段有文件路径
            default_storage.delete(image_file.path)  # 删除图片文件

# 购物车表
class Cart(models.Model):
    # 关联到用户表，级联删除
    user = models.ForeignKey(to='User', to_field='userID', on_delete=models.CASCADE)
    # 关联到产品表，级联删除
    pet = models.ForeignKey(to='Pet', to_field='id', on_delete=models.CASCADE)
    # 产品数量
    quantity = models.IntegerField(verbose_name='购买宠物数量')
    # 添加到购物车的时间
    added_at = models.DateTimeField(verbose_name='添加时间', auto_now_add=True)
    # 元数据
    class Meta:
        db_table = 'Cart'
        verbose_name = '购物车记录'
        verbose_name_plural = '购物车记录共用表'
# Cart

# 收藏表
class Collection(models.Model):
    # 关联到用户表，级联删除
    user = models.ForeignKey(verbose_name='收藏用户', to='User', to_field='userID', on_delete=models.CASCADE)
    # 关联到产品表，级联删除
    pet = models.ForeignKey(verbose_name='收藏产品', to='Pet', to_field='id', on_delete=models.CASCADE)
    # 收藏的时间
    added_at = models.DateTimeField(verbose_name='添加时间', auto_now_add=True)
    # 元数据
    class Meta:
        db_table = 'Collection'
        verbose_name = '收藏记录'
        verbose_name_plural = '收藏记录表'

# Collection

# 订单表
class Order(models.Model):
    # 关联到用户表，级联删除
    user = models.ForeignKey(verbose_name='购买用户', to='User', to_field='id', on_delete=models.CASCADE)
    # 订单编号，具有唯一性
    order_number = models.CharField(verbose_name='订单编号', max_length=255, unique=True)
    # 订单总价，使用 decimal 类型，最大位数为 10，小数位数为 2
    total_price = models.DecimalField(verbose_name='订单总价', max_digits=10, decimal_places=2)
    # 订单创建时间
    created_at = models.DateTimeField(verbose_name='订单创建时间', auto_now_add=True)
    # 订单状态，如待支付、已支付、已发货、已完成、已取消等
    status = models.CharField(verbose_name='订单状态', max_length=50)
    # 元数据
    class Meta:
        db_table = 'Order'
        verbose_name = '订单'
        verbose_name_plural = '订单表'

# Order

# 订单详情表
class OrderDetail(models.Model):
    # 关联到订单表，级联删除
    order = models.ForeignKey(verbose_name='对应订单', to='Order', to_field='id', on_delete=models.CASCADE)
    # 关联到产品表，级联删除
    pet = models.ForeignKey(verbose_name='购买宠物产品', to='Pet', to_field='id', on_delete=models.CASCADE)
    # 产品数量
    quantity = models.IntegerField()
    # 产品单价，使用 decimal 类型，最大位数为 10，小数位数为 2
    price = models.DecimalField(verbose_name='订单单价', max_digits=10, decimal_places=2)
    # 元数据
    class Meta:
        db_table = 'OrderDetail'
        verbose_name = '订单详情'
        verbose_name_plural = '订单详情表'

# OrderDetail

# 博客评论表
class Review(models.Model):
    # 关联到用户表，级联删除
    user = models.ForeignKey(verbose_name='评价用户', to='User', to_field='id', on_delete=models.CASCADE)
    # 关联到产品表，级联删除
    pet = models.ForeignKey(verbose_name='被评价产品', to='Pet', to_field='id', on_delete=models.CASCADE)
    # 评分，可使用整数表示（如 1 - 5 分）
    rating = models.IntegerField(verbose_name='评分')
    # 评论内容
    comment = models.TextField(verbose_name='评论')
    # 评论创建时间
    created_at = models.DateTimeField(verbose_name='评论创建时间', auto_now_add=True)
    # 元数据
    class Meta:
        db_table = 'Review'
        verbose_name = '博客'
        verbose_name_plural = '博客表'

# Review