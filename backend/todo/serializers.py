from rest_framework import serializers
from . import models

# YOO : 모델을 위한 시리얼라이저 생성
class TodoSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Todo
        fields = '__all__'