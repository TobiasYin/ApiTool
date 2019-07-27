"""api_initial URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.2/topics/http/urls/
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
from django.conf.urls import url
from django.contrib import admin
from django.urls import path
from django.views.static import serve

# from api_initial.settings import STATIC_ROOT
from apis.views import get_apis, add_api, change_api, delete_api, index

urlpatterns = [
    path('admin/', admin.site.urls),
    path('apis/', get_apis),
    path('add/', add_api),
    path("change/", change_api),
    path("delete/", delete_api),
    path("", index),
]
