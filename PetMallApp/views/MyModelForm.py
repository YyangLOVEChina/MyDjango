# 用于各个ModelForm表单结构的设计
from django.contrib.auth.hashers import make_password
from django.forms import ModelForm, forms
# 管理员处理函数
from hashlib import md5

from django.forms import ModelForm
from django.shortcuts import render
from django import forms

from PetMallApp import models


# 对登陆表单（生成和检验）的设计
class Formlogin(ModelForm):
    # 定义元数据
    class Meta:
        # 绑定数据表的类（以后可以根据数据表类型来生成输入框），绑定管理员表
        model = models.User
        # 属性的选取
        fields = ['email','password']  # 这里选取所有属性
        # 进行样式编写
        widgets = {
            # 账号输入框
            "email": forms.EmailInput(attrs={'class': 'form-control',
                                            'name': 'email',
                                            'placeholder':'Email',
                                            'id':'email'}),
            # 密码输入框
            "password": forms.PasswordInput(attrs={'class': 'form-control',
                                                   'name': 'password',
                                                   'placeholder': 'Password',
                                                   'id':'inputPassword'}),
        }
    # （钩子函数）对密码提交前进行处理校验
    def clean_password(self):
        password = self.cleaned_data['password']
        # 这里添加自定义密码验证
        # 检查密码长度和复杂性（不满足可以抛出错误）注册时

        # 输入密码为空时默认Django报错
        # 返回加密后的密码
        return password
# END
