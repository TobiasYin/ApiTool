from django.db import models


# Create your models here.
class Api(models.Model):
    title = models.CharField(max_length=50)
    url = models.CharField(max_length=128)
    types = models.CharField(
        choices=(("GET", "GET"), ("POST", "POST"), ("DELETE", "DELETE"), ("PUT", "PUT"), ("PATCH", "PATCH")),
        max_length=6)
    description = models.TextField(null=True, blank=True)
    login_require = models.BooleanField(default=False)


class Send(models.Model):
    api = models.ForeignKey(Api, on_delete=models.CASCADE)
    name = models.CharField(max_length=50)
    types = models.CharField(max_length=50)


class Receive(models.Model):
    api = models.ForeignKey(Api, on_delete=models.CASCADE)
    name = models.CharField(max_length=50)
    types = models.CharField(max_length=50)
