from django.contrib.auth.models import User
from django.core import serializers
from rest_framework import generics, permissions
from django_filters.rest_framework import DjangoFilterBackend
from .serializers import *
from .models import *


class UserCreate(generics.CreateAPIView):
    permission_classes = [permissions.AllowAny,]
    queryset = User.objects.all()
    serializer_class = UserSerializer

class Admin_accountView(generics.ListCreateAPIView):
    permission_classes = [permissions.AllowAny,]
    queryset = Admin_account.objects.all()
    serializer_class = Admin_accountSerializer

class Admin_accountDetailView(generics.RetrieveUpdateDestroyAPIView):
    permission_classes = [permissions.AllowAny,]
    queryset = Admin_account.objects.all()
    serializer_class = Admin_accountSerializer
