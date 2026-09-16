from django.shortcuts import render,redirect

from.models import Product

def home(request):
    Products = Product.objects.all()
    return render(request,"index.html",{"Products":Products})

def addProd(request):
    if request.method=="POST":
        name=request.POST["name"]
        price=request.POST["price"]
        qty=request.POST["qty"]
        Product.objects.create(name=name,price=price,qty=qty)
        return redirect("/inventory/home/")
    return render(request,"addproduct.html")