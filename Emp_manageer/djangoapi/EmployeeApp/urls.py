
from django.urls import path
from EmployeeApp import views

urlpatterns = [
    path('department/',views.department),
    path('department/([0-9]+)/',views.department)
]
