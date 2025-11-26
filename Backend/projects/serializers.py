from rest_framework import serializers
from .models import Project

class ProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Project
        fields = ["id", "tenant_id", "name", "description", "created_at"]
        read_only_fields = ["id", "tenant_id", "created_at"]
