from PIL import Image, ImageEnhance
import cStringIO

class OverlayImage:
    def __init__(self, image, watermark):
        self.image = Image.open(image).convert('RGB')
        self.watermark = Image.open(watermark)


    def _overlap(self):
        base_w = (self.image.size[0]/9) / float(self.watermark.size[0])
        base_h = (self.image.size[0]/3) / float(self.watermark.size[1])

        logo_w = int(float(self.watermark.size[0]) * float(base_h))
        logo_h = int(float(self.watermark.size[1]) * float(base_w))

        self.watermark = self.watermark.resize((logo_w, logo_h), Image.ANTIALIAS)
        #To set to top right corenr as per requirement
        offset_x = (self.image.size[0] - self.watermark.size[0]) - 10
        offset_y = 0

        self.overlay_image = Image.new('RGBA', self.image.size, (255, 255, 255, 1))
        self.overlay_image.paste(self.watermark, (offset_x, offset_y), mask=self.watermark.split()[2])
        self.composite = Image.composite(self.overlay_image, self.image, self.overlay_image)

    def convert(self):
        buffer = cStringIO.StringIO()
        self._overlap()
        self.composite.save(buffer, "PNG")
        return buffer

