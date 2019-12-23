from django.shortcuts import render
from rest_framework import status, viewsets , response

from . import models
from . import serializers

# Create your views here.

# YOO : 시리얼라이저와 restframework로 화면 출력 
class TodoViewset(viewsets.ModelViewSet):
    queryset = models.Todo.objects.all()
    serializer_class = serializers.TodoSerializer
