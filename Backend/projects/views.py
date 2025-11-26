from rest_framework import viewsets, permissions
from rest_framework.response import Response
from .models import Project, User
from .serializers import ProjectSerializer, UserSerializer
from rest_framework.exceptions import PermissionDenied


class IsAuthenticatedTenant(permissions.IsAuthenticated):
    def has_permission(self, request, view):
        if not super().has_permission(request, view):
            return False
        if not request.user.tenant_id:
            raise PermissionDenied("User has no tenant assigned.")
        return True

class CurrentUserView(viewsets.ModelViewSet):
    serializer_class = UserSerializer
    permission_classes = [IsAuthenticatedTenant]
    http_method_names = ['get']

    def get_queryset(self):
        return User.objects.filter(id=self.request.user.id)

class ProjectViewSet(viewsets.ModelViewSet):
    serializer_class = ProjectSerializer
    permission_classes = [IsAuthenticatedTenant]

    def get_queryset(self):
        return Project.objects.filter(tenant_id=self.request.user.tenant_id)

    def perform_create(self, serializer):
        serializer.save(tenant_id=self.request.user.tenant_id)
