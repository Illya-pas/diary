from django import forms
from django.forms import ModelForm
from .models import Post
from django.contrib.auth import (
    get_user_model
)


class PostForm(ModelForm):
    class Meta:
        model = Post
        fields = ['title', 'body']

        widgets = {
            # 'Users_id': forms.ModelChoiceField(queryset=get_user_model().objects.all(), to_field_name="Users_id"),
            'title': forms.TextInput(attrs={'class': 'header_note note_in', "placeholder": "Print header"}),
            'body': forms.Textarea(attrs={'class': 'describe_notes note_in', "placeholder": "Notes..."})
        }
