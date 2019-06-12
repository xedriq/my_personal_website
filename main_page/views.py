from django.shortcuts import render

def home(request):
    context = {
        'title': 'Cedrick Tabares | Python Web Developer',
    }
    template_name = 'main_page/home.html'
    return render(request, template_name, context)
