import requests
from django.shortcuts import render

def registers (request):
    return render(request, 'register/signup.html')