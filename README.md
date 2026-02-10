le username pour avoir accès au token login de django du superutilisateur est "momo" et le mot de passe est "erika"
 🧠MentCare – Système d’Information pour la Santé Mentale
    Présentation générale
MentCare est un système d’information destiné à la gestion des soins de santé mentale.  
Il permet le suivi des patients, des professionnels de santé, des consultations et des traitements, tout en garantissant la sécurité et la confidentialité des données médicales.

Le système est conçu sous une architecture multi-plateforme comprenant :
- un backend,
- un frontend web,
- une application mobile Android.

---
      Backend
Le backend de MentCare est développé avec Django et Django Rest Framework.

    Rôle du backend
- Gestion des patients et des dossiers médicaux
- Gestion des professionnels de santé
- Gestion des consultations et traitements
- Authentification et autorisation des utilisateurs
- Mise à disposition d’une API REST sécurisée

     Technologies utilisées
- Django  
- Django Rest Framework  
- MySQL (base de données relationnelle)  
- JWT pour l’authentification  

MySQL est utilisé afin d’assurer une gestion fiable, cohérente et structurée des données médicales
    Frontend Web
Le frontend web est développé avec Angular.

    Rôle du frontend
- Interface utilisateur pour le personnel médical et l’administration
- Consultation et gestion des dossiers patients
- Planification et suivi des consultations
- Communication avec le backend via l’API REST
 
  Technologies utilisées
- Angular  
- HTML  
- CSS  
- TypeScript  

---

   Application Mobile
L’application mobile MentCare est développée pour Android avec Kotlin.

   Rôle de l’application mobile
- Accès mobile sécurisé aux informations médicales
- Consultation des rendez-vous et dossiers patients
- Communication avec le backend via l’API REST
- Amélioration de la mobilité du personnel médical

    Technologies utilisées
- Kotlin  
- Android Studio  
- API REST (JSON)  

---
   Architecture du système
MentCare repose sur une architecture client-serveur :
- Le backend Django gère la logique métier et les données stockées dans MySQL
- Le frontend web et l’application mobile consomment l’API REST
- Cette architecture garantit la sécurité, la maintenabilité et l’évolutivité du système

---
  Objectifs du projet
- Informatiser la gestion des soins de santé mentale
- Améliorer le suivi des patients
- Sécuriser les données médicales
- Offrir un accès web et mobile
- Mettre en pratique le développement backend, frontend et mobile