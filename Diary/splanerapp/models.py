# from django.db import models
from django.contrib.auth import (
    authenticate,
    get_user_model)
from django.contrib.auth.models import User
from django.db import models
from django.db.models.signals import post_save
from django.dispatch import receiver

user = get_user_model()
from django.urls import reverse


class Post(models.Model):
    Users = models.ForeignKey(User, on_delete=models.CASCADE, verbose_name='people', blank=True, null=True)
    title = models.CharField('', max_length=15)
    body = models.TextField("")
    created = models.DateTimeField("", auto_now_add=True)

    # user = models.OneToOneField(User, verbose_name="Пользователь", on_delete=models.CASCADE, blank=True, null=True
    #                             )

    def __str__(self):
        return self.title
#     slug = models.SlugField("URL", max_length=50, default=''
#
#
#
#     def save(self, *args, **kwargs):
#
#         super().save(*args, **kwargs)
#         self.slug = "{}{}".format(self.user, self.title)
#
#     def get_absolute_url(self):
#
#         return reverse("post-detail", kwargs={"slug": self.user.username})
#
#     class Meta:
#         verbose_name = "Профиль"
#         verbose_name_plural = "Профиля"
#
#
# @receiver(post_save, sender=User)
# def create_user_profile(sender, instance, created, **kwargs):
#     """Создание профиля пользователя при регистрации"""
#     if created:
#         Post.objects.create(user=instance)
#
#
# @receiver
# def save_user_profile(sender, instance, **kwargs):
#     instance.profile.save()


#     -------------------------------------------------------------------
# from django.contrib.auth.models import User
# from django.db import models
# from django.db.models.signals import post_save
# from django.dispatch import receiver
# from django.urls import reverse
#

# class Profile(models.Model):
#     """Модель профиля пользователя"""
#     user = models.OneToOneField(User, verbose_name="Пользователь", on_delete=models.CASCADE)
#
#     slug = models.SlugField("URL", max_length=50, default='')
#
#
#
#     def __str__(self):
#         return self.first_name

# def save(self, *args, **kwargs):
#     super().save(*args, **kwargs)
#     self.slug = "{}{}".format(self.user_id, self.first_name)

# def get_absolute_url(self):
#     return reverse("profile-detail", kwargs={"slug": self.user.username})

# class Meta:
#     verbose_name = "Профиль"
#     verbose_name_plural = "Профиля"


# @receiver(post_save, sender=User)
# def create_user_profile(sender, instance, created, **kwargs):
#     """Создание профиля пользователя при регистрации"""
#     if created:
#         Post.objects.create(user=instance)


# @receiver
# def save_user_profile(sender, instance, **kwargs):
#     instance.profile.save()
