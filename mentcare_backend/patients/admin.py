from django.contrib import admin
from .models import Patient, Alerte

@admin.register(Patient)
class PatientAdmin(admin.ModelAdmin):
    list_display = ('nom', 'prenom', 'age', 'diagnostic', 'risque', 'date_creation')
    list_filter = ('risque', 'date_creation')
    search_fields = ('nom', 'prenom', 'diagnostic')


@admin.register(Alerte)
class AlerteAdmin(admin.ModelAdmin):
    list_display = ('patient', 'message', 'date_alerte', 'resolue')
    list_filter = ('resolue', 'date_alerte')
    search_fields = ('patient__nom', 'patient__prenom', 'message')

