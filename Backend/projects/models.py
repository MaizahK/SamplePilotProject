from django.contrib.auth.models import AbstractUser
from django.db import models
import uuid

class User(AbstractUser):
    tenant_id = models.UUIDField(default=uuid.uuid4, editable=False)


class Project(models.Model):
    tenant_id = models.UUIDField()
    name = models.CharField(max_length=255)
    description = models.TextField(blank=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name
