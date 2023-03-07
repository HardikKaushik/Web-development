from django.db import models

# Create your models here.
class Departments(models.Model):
    departmentid= models.AutoField(primary_key=True)
    departmentNames= models.CharField(max_length=100)

class Employees(models.Model):
    employeeid= models.AutoField(primary_key=True)
    employeeName= models.CharField(max_length=100)    
    DepartmentName= models.CharField(max_length=100)    
    Dateofjoinining= models.DateField()
    photo_name_emp=models.CharField(max_length=100)
    
     