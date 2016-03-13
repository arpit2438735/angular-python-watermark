
from django.views.decorators.csrf import csrf_exempt
from django.http import HttpResponse

from assignment.service.overlay_image import OverlayImage
import json

@csrf_exempt
def convert(request):
    if request.method == 'POST':
        if request.FILES['image'] and request.FILES['watermark'] :
            overlay_image = OverlayImage(request.FILES['image'], request.FILES['watermark'])

            print overlay_image.convert()



    return HttpResponse(json.dumps({'foo': 'bar'}))
