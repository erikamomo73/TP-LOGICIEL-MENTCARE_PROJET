from django.urls import path
from .views import StatsView, RiskPatientsView, MonthlyReportView

urlpatterns = [
    path('stats/', StatsView.as_view()),
    path('risk-patients/', RiskPatientsView.as_view()),
    path('monthly/', MonthlyReportView.as_view()),
]
