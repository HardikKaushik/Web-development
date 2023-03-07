from django.contrib import admin


from .models import Departments,Employees  # import your model

admin.site.register(Departments) # actual registration
admin.site.register(Employees) # actual registration

# Register your models here.
