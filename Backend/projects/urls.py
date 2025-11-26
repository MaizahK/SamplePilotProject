from rest_framework.routers import DefaultRouter
from django.urls import path
from .views import ProjectViewSet, CurrentUserView

router = DefaultRouter()
router.register("projects", ProjectViewSet, basename="projects")

router.register("me", CurrentUserView, basename="users")

urlpatterns = router.urls
