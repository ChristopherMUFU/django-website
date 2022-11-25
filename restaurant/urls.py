from django.urls import path
from .views import *
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView

app_name = 'restaurantApi'

urlpatterns = [

    path('info_restaurant/', Info_RestaurantView.as_view()),
    path('info_restaurant/<int:pk>/', Info_RestaurantDetailView.as_view()),

    path('categorie/', CategorieView.as_view()),
    path('categorie/<int:pk>/', CategorieDetailView.as_view()),

    path('produit/', ProduitView.as_view()),
    path('produit/<int:pk>/', ProduitDetailsView.as_view()),

    path('supplement/', SupplementView.as_view()),
    path('supplement/<int:pk>/', SupplementDetailView.as_view()),

    path('disponibilitePlats/', UpdateProduitDisponibilte.as_view()),

]
