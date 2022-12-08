from django.urls import path
from .views import *
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView

urlpatterns = [
    path('user/', UserCreate.as_view()),
    path('admin_account/', Admin_accountView.as_view()),
    path('admin_account/<int:pk>/', Admin_accountView.as_view()),

    path('token/', TokenObtainPairView.as_view()),
    path('token/refresh', TokenRefreshView.as_view()),
]
