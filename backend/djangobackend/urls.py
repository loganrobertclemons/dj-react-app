from django.contrib import admin
from django.urls import path, re_path, include
from django.views.generic import TemplateView
from char_count.views import char_count

urlpatterns = [
    path('api-auth/', include("rest_framework.urls")),
    path('admin/', admin.site.urls),
    path('api/', include('articles.api.urls')),
    path('char_count', char_count, name='char_count'),
    re_path(".*", TemplateView.as_view(template_name="index.html")),
]
