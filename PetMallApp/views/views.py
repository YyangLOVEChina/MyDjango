from django.contrib import messages
from django.contrib.auth.hashers import check_password
from django.http import HttpRequest
from django.shortcuts import render
from django.views import View

from PetMallApp import models
from django.shortcuts import redirect
from functools import wraps

from PetMallApp.models import User
from PetMallApp.views.MyModelForm import Formlogin


# Create your views here.
# 实验前端函数文件
# 首先传入参数为一个HttpRequest的实例对象，里面包含了了请求所有数据【请求头&请求体】
# 首先传入参数为一个HttpResponse的实例对象，里面包含了响应所有数据【请求头&请求体】

# 访问页面时的session验证（装饰器：需要应用的视图直接应用该装饰器即可）
def session_required(view_func):
    """
    这个装饰器用于验证用户是否已经登录，未登录则跳转到登录页面。
    """
    @wraps(view_func)
    def wrapped_view(request, *args, **kwargs):
        if not request.session.get("user_id"):
            # 没有登陆状态
            return redirect("/login/")  # 跳转到登录页
        return view_func(request, *args, **kwargs)

    return wrapped_view
#session_required

# 主界面处理视图函数
def index(request: HttpRequest):
    if request.method == 'GET':
        # 进行session机制登陆的验证

        # 根据计算得出的推荐方向进行数据库的查找
        petObjectlist = models.Pet.objects.all() # 如果没有推荐直接获取全部”新品“售卖类型
        petlevelMax = [1,2,3,4,5,] # 规定等级最大
        return render(request, 'index.html', {'petObjectlist': petObjectlist,
                                              'petlevelMax': petlevelMax,
                                              })
        #
# 主界面

# 登陆处理视图类
class LoginView(View):
    def get(self, request):
        form = Formlogin(request.GET or None)
        # 如果为GET请求，返回为登陆界面
        return render(request, 'login.html', {'form': form})
    def post(self, request):
        # 用户提交的数据存放在request.POST
        form = Formlogin(request.POST)
        if form.is_valid():
            email = form.cleaned_data['email']
            password = form.cleaned_data['password']
            try:
                # 数据库中存在用户
                user = User.objects.get(email=email) #得到用户
                if password == user.password:  # 验证用户密码
                    request.session['user_email'] = user.email
                    request.session['username'] = user.username
                    # 其中message是Django自带的消息传递模块（前端可以直接访问）
                    messages.success(request, "登录成功！")
                    return redirect('/index/')  # 登录成功跳转到主页
                else:
                    messages.error(request, "密码错误，请重新输入")
            except User.DoesNotExist:
                messages.error(request, "用户不存在")
        # 表单无效也返回带表单界面
        return render(request,'login.html', {'form': form})
# END