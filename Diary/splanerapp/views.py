from time import gmtime, strftime

from django.contrib.auth.models import AbstractUser
from django.shortcuts import render
from .models import Post
from .forms import PostForm
from django.contrib.auth.mixins import LoginRequiredMixin
from django.contrib.auth import authenticate


def index(request):
    post = Post.objects.all
    if request.method == 'POST':
        form = PostForm(request.POST)
        if form.is_valid:
            form.save()
    else:

        form = PostForm()

    return render(request, 'splanerapp/index.html', {
        'posts': post,
        'form': form
    })

#
# from django.views.generic import DetailView
# from .models import Post

# class PostDetail(DetailView):
#     model = Post
#     context_object_name = 'post_object'
#     template_name = "splanerapp/index.html"
#
#     def get_queryset(self):
#         return Post.objects.get(user__username=self.kwargs.get(), slug=self.kwargs.get("pk", None))
