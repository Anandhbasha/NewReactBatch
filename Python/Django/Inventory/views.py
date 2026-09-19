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


def editProd(request,id):
    prod = Product.objects.get(id=id)
    if request.method == "POST":
        prod.name=request.POST["name"]
        prod.price=request.POST["price"]
        prod.qty=request.POST["qty"]

        prod.save()
        return redirect("/inventory/home/")
    return render (request,"edit.html",{"prod":prod})