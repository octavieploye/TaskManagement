

# import datetime
# import time
from django.utils import timezone
from django.shortcuts import render
from django.http import HttpResponse
from .models import TaskItem
from .serializers import TaskItemSerializer
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

#import datetime

# def index(request):
#     current_datetime = datetime.datetime.now()  
#     html = "<html><body><b>Current Date and Time Value:</b> %s</body></html>" % current_datetime
#     return HttpResponse(html)

# Create your views here.

class TaskDetailView(APIView):

  def delete(self, request, pk):
        try:
            task = TaskItem.objects.get(id=pk)
            task.delete()
        except:
            return Response(status=status.HTTP_500_INTERNAL_SERVER_ERROR)
        return Response(status=status.HTTP_204_NO_CONTENT)

  def put(self, request, pk):
            task = TaskItem.objects.get(id=pk) # django ORM method to grab
            updated_task = TaskItemSerializer(task, data=request.data)
            if updated_task.is_valid():
                updated_task.save()
                return Response(updated_task.data, status=status.HTTP_202_ACCEPTED)
            else:
                return Response(updated_task.errors, status=status.HTTP_422_UNPROCESSABLE_ENTITY)

  def get(self, request, pk):
            task = TaskItem.objects.get(id=pk)
        
            serialized_task = TaskItemSerializer(task)
            return Response(serialized_task.data,status=status.HTTP_200_OK)

class TaskListView(APIView):
  def post (self,request):      
           task =  TaskItemSerializer(data = request.data)
           if task.is_valid():
              task.save()
              return Response(task.data, status=status .HTTP_201_CREATED)
           else:
              return Response(task.errors, status=status.HTTP_422_UNPROCESSABLE_ENTITY)       

      

  def get(self,request):
        tasks = TaskItem.objects.all()
        serialized_tasks = TaskItemSerializer(tasks, many=True)
       

        return Response(serialized_tasks.data, status=status.HTTP_200_OK)
   