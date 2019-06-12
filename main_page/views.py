from django.shortcuts import render

def home(request):
    context = {
        'title': 'Xedriq | Python Web Developer',
        'test_text': 'hello from main page views',
    }
    template_name = 'main_page/home.html'
    return render(request, template_name, context)
