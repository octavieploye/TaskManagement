# Generated by Django 3.2.9 on 2021-12-07 13:00

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='TaskItem',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('item_title', models.CharField(max_length=20)),
                ('item_description', models.TextField(blank=True)),
                ('item_descriptions', models.CharField(max_length=200)),
                ('item_categorie', models.CharField(blank=True, max_length=20)),
                ('item_status', models.TextField(max_length=20)),
                ('due_date_time', models.DateTimeField()),
                ('date_time_set', models.DateTimeField(auto_now_add=True)),
                ('date_time_modified', models.DateTimeField(auto_now=True)),
            ],
        ),
    ]
