# Generated by Django 3.2.9 on 2021-12-08 17:34

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('task_app', '0002_auto_20211207_1405'),
    ]

    operations = [
        migrations.AddField(
            model_name='taskitem',
            name='completed',
            field=models.BooleanField(default=False),
        ),
    ]
