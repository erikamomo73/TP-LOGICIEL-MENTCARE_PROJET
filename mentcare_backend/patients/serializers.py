from rest_framework import serializers
from .models import Patient, Alerte

class PatientSerializer(serializers.ModelSerializer):

    class Meta:
        model = Patient
        fields = '__all__'


class AlerteSerializer(serializers.ModelSerializer):

    class Meta:
        model = Alerte
        fields = '__all__'
