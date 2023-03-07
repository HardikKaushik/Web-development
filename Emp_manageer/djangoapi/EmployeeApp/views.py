from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse

from EmployeeApp.models import Departments,Employees
from EmployeeApp.serializers import DepartmentSerializer,EmployeeSerializer


# Create your views here.
@csrf_exempt
def department(request,id=0):
    if request.method=='GET':
        department=Departments.objects.all()
        departments_serializer=DepartmentSerializer(department,many=True)
        return JsonResponse(departments_serializer.data,safe=False)
    
    elif request.method=='POST':
        department_data=JSONParser().parse(request)
        department_serializer=DepartmentSerializer(data=department_data)
        if department_serializer.is_valid():
            department_serializer.save()
            return JsonResponse('Successfully Added!!',safe=False)
        return JsonResponse('failed to add',safe=False)
    
    elif request.method=='PUT':
        department_data=JSONParser().parse(request)
        department=Departments.objects.all(departmentid=department_data['departmentid'])
        department_serializer=DepartmentSerializer(department,date=department_data)
        if department_serializer.is_valid():
            department_serializer.save()
            return JsonResponse('Updated Added!!',safe=False)
        return JsonResponse('failed to add',safe=False)
    
    elif request.method=='DELETE':
        department=Departments.objects.all(departmentid=id)
        department.delete()
        return JsonResponse('deleted',safe=False)
        