from django.apps import AppConfig


class PetmallappConfig(AppConfig):
    default_auto_field = "django.db.models.BigAutoField"
    name = "PetMallApp"
    # 后台站点管理显示的主题设置
    verbose_name = "PetMallApp 管理"
