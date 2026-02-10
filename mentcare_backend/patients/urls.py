from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import PatientViewSet, alerts_list, monthly_report

router = DefaultRouter()
router.register('patients', PatientViewSet)

urlpatterns = [

    path('', include(router.urls)),

    path('alerts/', alerts_list),
    path('reports/monthly/', monthly_report),

]
