
from django.views.decorators.csrf import csrf_exempt
from django.http import HttpResponse
from assignment.assignment.service.overlay_image import OverlayImage

import json
import base64

@csrf_exempt
def convert(request):
    if request.method == 'POST':
        if request.FILES['image'] and request.FILES['watermark'] :
            overlay_image = OverlayImage(request.FILES['image'], request.FILES['watermark'])
            return HttpResponse(base64.b64encode(overlay_image.convert().getvalue()), content_type="image/png")

    return HttpResponse(json.dumps({'error': 'Method not allowed'}))
