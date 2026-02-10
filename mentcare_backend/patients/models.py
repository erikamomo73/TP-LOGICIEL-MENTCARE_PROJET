from django.db import models

class Patient(models.Model):

    # 🔥 Informations personnelles
    nom = models.CharField(max_length=100)
    prenom = models.CharField(max_length=100)
    age = models.IntegerField()
    sexe = models.CharField(max_length=10, blank=True)

    telephone = models.CharField(max_length=20, blank=True)
    adresse = models.TextField(blank=True)

    # 🔥 Informations médicales
    diagnostic = models.TextField(blank=True)
    risque = models.BooleanField(default=False)

    statut = models.CharField(
        max_length=20,
        choices=[
            ('stable', 'Stable'),
            ('suivi', 'Sous suivi'),
            ('critique', 'Critique')
        ],
        default='stable'
    )

    # 🔥 Informations système
    date_creation = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.nom} {self.prenom}"


class Alerte(models.Model):

    patient = models.ForeignKey(Patient, on_delete=models.CASCADE, related_name="alertes")

    message = models.TextField()

    date_alerte = models.DateTimeField(auto_now_add=True)

    resolue = models.BooleanField(default=False)

    def __str__(self):
        return f"Alerte pour {self.patient.nom} {self.patient.prenom} - {'Résolue' if self.resolue else 'Non résolue'}"
