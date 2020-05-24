from typing import Any

from allauth.account import forms
from allauth.account.forms import LoginForm, PasswordField, BaseSignupForm
from allauth.account.templatetags import account
from django.forms import TextInput, PasswordInput, BooleanField, CharField


class YourLoginForm(LoginForm):

    remember = None
    # remember = BooleanField(label=(""),
    #                         required=False)
    password = PasswordField(label=(""))

    def __init__(self, *args, **kwargs):
        super(YourLoginForm, self).__init__(*args, **kwargs)
        self.fields['login'].widget = TextInput(
            attrs={'class': 'signin_form form', 'placeholder': 'Name'})
        self.fields['password'].widget = PasswordInput(attrs={'class': 'signin_form form', 'placeholder': 'Password'})

custom_form: Any = super(BaseSignupForm, self):
    username.label = ''