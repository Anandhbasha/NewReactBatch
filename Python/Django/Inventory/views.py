from django.shortcuts import render

def home(request):
    context = {
        "name":"Anandh"
    }
    return render(request,"index.html",context)
