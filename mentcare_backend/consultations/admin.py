from django.contrib import admin
from .models import Consultation, Medecin

@admin.register(Consultation)
class ConsultationAdmin(admin.ModelAdmin):
    list_display = ['id', 'patient', 'medecin', 'date', 'risque_suicidaire']
    list_filter = ['risque_suicidaire', 'date']

admin.site.register(Medecin)
