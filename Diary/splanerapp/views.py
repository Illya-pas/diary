import requests
from django.shortcuts import render
from .models import Post
from .forms import PostForm


def index(request):
    post = Post.objects.all
    if request.method == 'POST':
        form = PostForm(request.POST)
        if form.is_valid():
            form.save()
    else:

        form = PostForm()

    return render(request, 'splanerapp/index.html', {
        'posts': post,
        'form': form
    })
