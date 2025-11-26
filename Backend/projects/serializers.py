from rest_framework import serializers
from .models import Project, User

class ProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Project
        fields = ["id", "tenant_id", "name", "description", "created_at"]
        read_only_fields = ["id", "tenant_id", "created_at"]

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'email', 'first_name', 'last_name']