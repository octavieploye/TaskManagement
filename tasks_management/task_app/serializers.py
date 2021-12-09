
from  .models import TaskItem
from django.urls import path, include
from rest_framework import routers, serializers

# import datetime

class TaskItemSerializer(serializers.ModelSerializer):
    # owner=UserSerializer() 
    title=serializers.CharField(source='item_title')  
    categorie=serializers.CharField(source='item_categorie')
    status=serializers.CharField(source='item_status')
    description=serializers.CharField(source="item_description")   
    completed=serializers.BooleanField
    class Meta:
        model=TaskItem
        fields='__all__'
        fields=('id','title', 'categorie','description','status','completed')

        