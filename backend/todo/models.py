from django.db import models

# Create your models here.

# Todo 관련 모델
class Todo (models.Model):
    id = models.AutoField(primary_key=True)
    context = models.TextField()
    is_closed = models.BooleanField(blank=False, default=False)
    updated_at = models.DateTimeField(auto_now=True)