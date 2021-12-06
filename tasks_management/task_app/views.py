from django.shortcuts import render
from django.http import HttpResponse

#import datetime

# def index(request):
#     current_datetime = datetime.datetime.now()  
#     html = "<html><body><b>Current Date and Time Value:</b> %s</body></html>" % current_datetime
#     return HttpResponse(html)

# Create your views here.

def home(request):
  return HttpResponse('<h1>Hello ﾉ</h1>')