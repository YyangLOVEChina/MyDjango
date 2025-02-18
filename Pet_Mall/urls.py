"""
URL configuration for Pet_Mall project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.conf.urls.static import static
from django.contrib import admin
from django.urls import path
# 引入视图函数文件（路径和视图函数的对应）
from PetMallApp.views import views
from Pet_Mall import settings

urlpatterns = [
    # 管理员后台函数和默认路径
    path("admin/", admin.site.urls),
    # 主页展示地址
    path("index/", views.index, name="index"),
    # 登陆界面地址
    path('login/', views.LoginView.as_view(), name="login"),

]
# 允许Django在开发模式下提供media文件的访问
if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)