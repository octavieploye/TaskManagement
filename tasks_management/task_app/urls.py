from django.urls import path
from . import views
from .views import TaskDetailView, TaskListView


urlpatterns = [
    path('<int:pk>/', TaskDetailView.as_view()),
    path('', TaskListView.as_view()),
    
    ]