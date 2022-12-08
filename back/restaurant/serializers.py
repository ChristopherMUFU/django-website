from collections import OrderedDict
from rest_framework import serializers
from .models import *



class Info_RestaurantSerializer(serializers.ModelSerializer):
    class Meta:
        model = Info_Restaurant
        fields = "__all__"

class CategorieSerializer(serializers.ModelSerializer):
    class Meta:
        model = Categorie
        fields = "__all__"

class ProduitSerializer(serializers.ModelSerializer):
    class Meta:
        model = Produit
        fields = "__all__"

class NonNullProduitSerializer(serializers.ModelSerializer):
    def to_representation(self, instance):
        result = super(NonNullProduitSerializer, self).to_representation(instance)
        return OrderedDict([(key, result[key]) for key in result if result[key] is not None and result[key]])
    class Meta:
        model = Produit
        fields = "__all__"

class SupplementSerializer(serializers.ModelSerializer):
    class Meta:
        model = Supplement
        fields = "__all__"
