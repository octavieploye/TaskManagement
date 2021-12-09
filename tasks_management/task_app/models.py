from django.db import models

# Create your models here.

class TaskItem(models.Model):
    item_title = models.CharField(max_length=20,null=False, unique=False,blank=False)
    item_description = models.CharField(max_length=100, null=False, blank=True)
    item_categorie=models.CharField(max_length=20,null=False, unique=False,blank=True)
    item_status=models.CharField(max_length=20,null=False, unique=False)
    # due_date_time=models.DateTimeField(null=False)
    # # date_time_set=models.DateTimeField(auto_now_add=True)
    # date_time_modified=models.DateTimeField(auto_now=True)
    completed=models.BooleanField(default=False)
    # owner=models.ForeignKey(User, on_delete=models.CASCADE,null=False)

    def __str__(self):
        return  "TaskItem" + self.item_description