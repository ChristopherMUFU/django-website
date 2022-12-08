from django.db import models
from django.db.models.fields.related import ManyToManyField


# Create your models here.

class Info_Restaurant(models.Model):
    disponibilite_restaurant = models.BooleanField(default=False, null=True)
    disponibilite_livraison = models.BooleanField(default=False, null=True)

    def __str__(self):
        return self.nom


class Categorie(models.Model):  # Entrée/Plats/Dessert/
    nom = models.CharField(max_length=100)

    def __str__(self):
        return self.nom


class Produit(models.Model):
    # Champs communs pour tous les produits du restaurant
    nom = models.CharField(max_length=100, unique=True, null=True)
    description = models.TextField(null=True, blank=True)
    categorie = models.ForeignKey(Categorie, null=True, on_delete=models.CASCADE, blank=True)
    image = models.ImageField(null=True, upload_to='static/images')
    prix = models.FloatField(default=0, blank=True)
    disponibilite = models.BooleanField(default=False, null=True)
    commentaire_produit = models.TextField(null=True, blank=True)

    def __str__(self):
        return self.nom


class Supplement(models.Model): 
    nom = models.CharField(max_length=100, unique=True)
    supplements = (
        ('Pain', 'pain'),
        ('Viande', 'viande'),
        ('Sur_frite', 'sur_frite'),
        ('Sauce', 'sauce'), 
        ('Crudite', 'crudite'),
        ('Fromage', 'fromage'),
        ('Dessert', 'dessert'),
        ('Boisson', 'boisson'),
        ('TaillePizza', 'TaillePizza'),
    )
    type_supplement = models.CharField(
        choices=supplements, max_length=100, blank=True, null=True)
    prix = models.FloatField(default=0, blank=True)
    disponibilite = models.BooleanField(default=False, null=True)

    def __str__(self):
        return self.nom
