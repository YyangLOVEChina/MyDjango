# 所有template文件全局可使用函数
from PetMallApp.models import UserProfile, User


# 用户的session（session的value中只存放了用户id）验证（该函数返回值在template文件夹下可用）
def user_session(request):
    # 获取登陆后用户session中存放的id
    user_email = request.session.get('user_email')
    # 先设置为默认头像
    avatar = '/media/Image/user/default_avatar.png'
    username = None
    if user_email:
        # 用户处于登陆状态（关联查询）
        user_profile = UserProfile.objects.filter(user__email = user_email).first()
        # 判断头像是否存在、
        username = User.objects.filter(email=user_email).first().username
        # 判断头像是否存在
        if user_profile.has_avatar():
            avatar = user_profile.avatar.url
    # 返回Session中用户的信息
    return{
        "user_email": user_email,
        "avatar": avatar,
        "username": username,
    }
#END

