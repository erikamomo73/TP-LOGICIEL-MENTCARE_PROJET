from django.contrib.auth.models import AbstractUser
from django.db import models

class User(AbstractUser):
    """
    Utilisateur du système Mentcare
    """
    ROLE_CHOICES = (
        ('admin', 'Administrateur'),
        ('medecin', 'Médecin'),
        ('clinicien', 'Clinicien'),
    )

    role = models.CharField(
        max_length=20,
        choices=ROLE_CHOICES,
        default='medecin'
    )

    def __str__(self):
        return self.username
