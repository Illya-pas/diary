from django.shortcuts import render
from allauth.account.forms import LoginForm


def registers(request):
    context = {
        'login_form': LoginForm
    }
    return render(request, 'register/signup.html', context)
