from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated

from patients.models import Patient
from consultations.models import Consultation

from django.utils import timezone
from datetime import timedelta


# ==============================
# STATISTIQUES GENERALES
# ==============================

class StatsView(APIView):

    permission_classes = [IsAuthenticated]

    def get(self, request):

        total_patients = Patient.objects.count()
        patients_risque = Patient.objects.filter(risque=True).count()
        total_consultations = Consultation.objects.count()

        data = {
            "total_patients": total_patients,
            "patients_risque": patients_risque,
            "total_consultations": total_consultations,
        }

        return Response(data)


# ==============================
# PATIENTS A RISQUE
# ==============================

class RiskPatientsView(APIView):

    permission_classes = [IsAuthenticated]

    def get(self, request):

        patients = Patient.objects.filter(risque=True)

        result = []

        for p in patients:
            result.append({
                "id": p.id,
                "nom": p.nom,
                "prenom": p.prenom,
                "diagnostic": p.diagnostic
            })

        return Response(result)


# ==============================
# RAPPORT MENSUEL
# ==============================

class MonthlyReportView(APIView):

    permission_classes = [IsAuthenticated]

    def get(self, request):

        today = timezone.now()
        last_30_days = today - timedelta(days=30)

        patients = Patient.objects.filter(
            date_creation__gte=last_30_days
        ).count()

        consultations = Consultation.objects.filter(
            date_creation__gte=last_30_days
        ).count()

        data = {
            "patients_last_30_days": patients,
            "consultations_last_30_days": consultations
        }

        return Response(data)
