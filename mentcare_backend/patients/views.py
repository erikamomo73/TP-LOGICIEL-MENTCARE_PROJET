from rest_framework import viewsets
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.response import Response

from django.db.models.functions import TruncMonth
from django.db.models import Count

from .models import Patient, Alerte
from .serializers import PatientSerializer, AlerteSerializer


# ✅ PATIENT CRUD
class PatientViewSet(viewsets.ModelViewSet):

    queryset = Patient.objects.all()
    serializer_class = PatientSerializer
    permission_classes = [AllowAny]


# ✅ ALERTES
@api_view(['GET'])
@permission_classes([IsAuthenticated])
def alerts_list(request):

    alerts = Alerte.objects.all()
    serializer = AlerteSerializer(alerts, many=True)
    return Response(serializer.data)


# ✅ RAPPORT MENSUEL
@api_view(['GET'])
@permission_classes([IsAuthenticated])
def monthly_report(request):

    data = (
        Patient.objects
        .annotate(month=TruncMonth('date_creation'))
        .values('month')
        .annotate(total=Count('id'))
        .order_by('month')
    )

    return Response(data)
