from django.db import models
from django.contrib.auth.models import User
from django.db.models.fields.related import ManyToManyField

class Admin_account(models.Model):
    user = models.OneToOneField(User, null=True, on_delete=models.CASCADE)