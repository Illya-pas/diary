# Generated by Django 3.0.6 on 2020-06-04 19:00

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('splanerapp', '0002_auto_20200514_1622'),
    ]

    operations = [
        migrations.AddField(
            model_name='post',
            name='created',
            field=models.DateTimeField(auto_now_add=True, default='2012-09-04 06:00:00.000000-08:00', verbose_name='Дата создания'),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='post',
            name='body',
            field=models.TextField(verbose_name=''),
        ),
        migrations.AlterField(
            model_name='post',
            name='title',
            field=models.CharField(max_length=15, verbose_name=''),
        ),
    ]
