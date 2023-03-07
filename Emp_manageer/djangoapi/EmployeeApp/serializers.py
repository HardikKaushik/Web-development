from rest_framework import serializers
from EmployeeApp.models import Departments,Employees

class DepartmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Departments
        fields= (' departmentid',
                 'departmentNames')
class EmployeeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Employees
        fields=   ('employeeid',
                   'employeeName',
                    'DepartmentName',
                    'Dateofjoinining',
                    'photo_name_emp')