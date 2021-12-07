# Generated by Django 3.2.9 on 2021-12-07 14:05

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('task_app', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='taskitem',
            name='item_descriptions',
        ),
        migrations.AlterField(
            model_name='taskitem',
            name='item_description',
            field=models.CharField(blank=True, max_length=100),
        ),
        migrations.AlterField(
            model_name='taskitem',
            name='item_status',
            field=models.CharField(max_length=20),
        ),
    ]