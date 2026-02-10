from django.db import models
from patients.models import Patient
from django.contrib.auth import get_user_model

User = get_user_model()

class Medecin(models.Model):
    nom = models.CharField(max_length=50)
    prenom = models.CharField(max_length=50)

    def __str__(self):
        return f"{self.nom} {self.prenom}"

class Consultation(models.Model):
    patient = models.ForeignKey(Patient, on_delete=models.CASCADE)
    medecin = models.ForeignKey(Medecin, on_delete=models.CASCADE)
    date = models.DateTimeField(auto_now_add=True)
    note = models.TextField(blank=True, null=True)
    risque_suicidaire = models.BooleanField(default=False)

    def __str__(self):
        return f"Consultation {self.id} - {self.patient}"

