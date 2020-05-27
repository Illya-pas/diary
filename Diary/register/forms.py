<<<<<<< HEAD
from django import forms
from django.contrib.auth import (
    authenticate,
    get_user_model
=======
from typing import Any

from allauth.account import forms
from allauth.account.forms import LoginForm, PasswordField, BaseSignupForm
from allauth.account.templatetags import account
from django.forms import TextInput, PasswordInput, BooleanField, CharField
>>>>>>> 52bf164295361b6a2baa4d23a2d4f59767ae10bf

)

User = get_user_model()

<<<<<<< HEAD

class UserLoginForm(forms.Form):
    username = forms.CharField(label='', widget=forms.TextInput(attrs={'class': 'in_email', 'placeholder': 'username'}))
    password = forms.CharField(label='',
                               widget=forms.PasswordInput(attrs={'class': 'password', 'placeholder': "Password"}))

    def clean(self, *args, **kwargs):
        username = self.cleaned_data.get('username')
        password = self.cleaned_data.get('password')

        if username and password:
            user = authenticate(username=username, password=password)
            if not user:
                raise forms.ValidationError('This user does not exist')
            if not user.check_password(password):
                raise forms.ValidationError('Incorrect password')
            if not user.is_active:
                raise forms.ValidationError('This user is not active')
        return super(UserLoginForm, self).clean(*args, **kwargs)


class UserRegisterForm(forms.ModelForm):
    email = forms.EmailField(label='',
                             widget=forms.TextInput(attrs={'class': 'in_email', 'placeholder': 'Email Address'}))
    email2 = forms.EmailField(label='',
                              widget=forms.TextInput(attrs={'class': 'in_email', 'placeholder': 'Confirm Email'}))
    password = forms.CharField(label='',
                               widget=forms.PasswordInput(attrs={'class': 'password', 'placeholder': "Password"}))
    helptext = None
    username = forms.CharField(label='', widget=forms.TextInput(attrs={'class': 'in_email', 'placeholder': 'username'}))
    class Meta:
        model = User
        fields = [
            'username',
            'email',
            'email2',
            'password'
        ]

    def clean(self, *args, **kwargs):
        email = self.cleaned_data.get('email')
        email2 = self.cleaned_data.get('email2')
        if email != email2:
            raise forms.ValidationError("Emails must match")
        email_qs = User.objects.filter(email=email)
        if email_qs.exists():
            raise forms.ValidationError(
                "This email has already been registered")
        return super(UserRegisterForm, self).clean(*args, **kwargs)

# from allauth.account import forms
# from allauth.account.forms import LoginForm, PasswordField
# from allauth.account.templatetags import account
# from django.forms import TextInput, PasswordInput, BooleanField, CharField
#
#
# class YourLoginForm(LoginForm):
#
#     remember = BooleanField(label=(""),
#                                   required=False)
#     password = PasswordField(label=(""))
#
#
#
#     def __init__(self, *args, **kwargs):
#         super(YourLoginForm, self).__init__(*args, **kwargs)
#         self.fields['login'].widget = TextInput(
#             attrs={'class': 'signin_form form', 'placeholder': 'Name', 'label': 'None'})
#         self.fields['password'].widget = PasswordInput(attrs={'class': 'signin_form form', 'placeholder': 'Password'})
=======
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
>>>>>>> 52bf164295361b6a2baa4d23a2d4f59767ae10bf
