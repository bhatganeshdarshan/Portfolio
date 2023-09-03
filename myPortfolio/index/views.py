from django.shortcuts import render
from .models import Contact
# Create your views here.
def home(request):
    return render(request,'index.html')
def projects(request):
    return render(request,'projects.html')
def contact(request):
    if request.method=='POST':
        name=request.POST['name']
        email=request.POST['email']
        message=request.POST['message']
        print(name,email,message)
        obj=Contact(name=name,email=email,message=message)
        obj.save()
    return render(request,'contact.html')
