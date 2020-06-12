from time import gmtime, strftime

from django.contrib.auth.models import AbstractUser
from django.shortcuts import render, redirect
from .models import Post
from .forms import PostForm
from django.contrib.auth.mixins import LoginRequiredMixin
from django.contrib.auth import authenticate


def index(request):
    if not request.user.is_authenticated:
        return redirect('/accounts/login/')
        # print(request.user.is_authenticated)
    res = None
    post = Post.objects.filter(Users=request.user.id)
    if request.method == 'POST':

        # form_data = {"Users_id": request.user.id, **request.POST}
        form = PostForm(request.POST)
        if form.is_valid:
            form = form.save()
            Post.objects.filter(id=form.id).update(Users_id=request.user.id, color=request.POST['color'])
            return redirect('/')

    else:
        if res is not None:
            print(res)
            form = PostForm(Post.objects.get(id=res))
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
