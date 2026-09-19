from django.urls import path
from .views import *

urlpatterns = [
    path('home/',home),
    path('add/',addProd),
    path('edit/<int:id>/',editProd)
]