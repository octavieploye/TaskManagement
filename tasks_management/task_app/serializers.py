
from  .models import TaskItem
from django.urls import path, include
from rest_framework import routers, serializers

# import datetime

class TaskItemSerializer(serializers.ModelSerializer):
    # owner=UserSerializer()   
    categorie=serializers.CharField(source='item_categorie')
    status=serializers.CharField(source='item_status')
    description=serializers.CharField(source="item_description")    
    class Meta:
        model=TaskItem
        fields='__all__'
        fields=('id','categorie','description','descriptions','status','due_date_time','date_time_set','date_time_modified','owner')

        # "descriptions" = task user description vs "description" task view(front end)