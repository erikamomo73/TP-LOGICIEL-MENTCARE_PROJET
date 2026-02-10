"""
URL configuration for mentcare_backend project.

The `urlpatterns` list routes URLs to views. For more informationfrom django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from patients.views import PatientViewSet
from consultations.views import ConsultationViewSet, MedecinViewSet
from users.views import UserViewSet


router = routers.DefaultRouter()
router.register(r'patients', PatientViewSet)
router.register(r'consultations', ConsultationViewSet)
router.register(r'medecins', MedecinViewSet)
router.register(r'users', UserViewSet)


urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),
]
 please see:
    https://docs.djangoproject.com/en/6.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from django.http import JsonResponse
from rest_framework import routers

from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView
)

from patients.views import PatientViewSet
from consultations.views import ConsultationViewSet, MedecinViewSet
from users.views import UserViewSet


router = routers.DefaultRouter()
router.register(r'patients', PatientViewSet)
router.register(r'consultations', ConsultationViewSet)
router.register(r'medecins', MedecinViewSet)
router.register(r'users', UserViewSet)


# page racine
def home(request):
    return JsonResponse({"message": "Mentcare API fonctionne correctement"})


urlpatterns = [
    path('', home),  # ⭐ racine

    path('admin/', admin.site.urls),

    path('api/', include(router.urls)),
    path('api/reports/', include('reports.urls')),

    path('api/login/', TokenObtainPairView.as_view()),
    path('api/refresh/', TokenRefreshView.as_view()),
]



