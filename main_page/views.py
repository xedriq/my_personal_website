from django.shortcuts import render
from .models import Contact

def home(request):
    context = {
        'title': 'Cedrick Tabares | Python Web Developer',
    }

    template_name = 'main_page/home.html'

    if request.method == 'POST': # check if request is POST
        name = request.POST['name']
        email = request.POST['email']
        subject = request.POST['subject']
        message = request.POST['message']
        
        # Create Contact object
        c = Contact(name=name, email=email, subject=subject, message=message)
        c.save()

        return render(request, template_name, context)
    else:
        return render(request, template_name, context)
    
    
    
    
