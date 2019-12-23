from django.db import models

# Create your models here.

# YOO : Todo 관련 모델
class Todo (models.Model):
    # Todo의 id
    id = models.AutoField(primary_key=True)
    # 할일 
    context = models.TextField()
    # 할일의 완료 유무
    is_closed = models.BooleanField(blank=False, default=False)
    # 마지막 업데이트 일자 
    updated_at = models.DateTimeField(auto_now=True)