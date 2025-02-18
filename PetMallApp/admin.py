from django.contrib import admin

from PetMallApp.models import Pet, User, PetCategory, PetType, UserProfile, PetProfile

# 管理员站点的定义
# Register your models here.

# 导入需要管理的数据表中
admin.site.register(Pet)
admin.site.register(User)
admin.site.register(PetCategory)
admin.site.register(PetType)
admin.site.register(PetProfile)
admin.site.register(UserProfile)

