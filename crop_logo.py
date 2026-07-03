import os
from PIL import Image

def autocrop_logo_clean():
    original_path = '/Users/soyabsaifi/.gemini/antigravity-ide/brain/67305e76-e702-4787-9021-7efb347ef233/media__1783070852783.jpg'
    img_path = 'src/assets/logo.jpg'
    
    if not os.path.exists(original_path):
        print("Original logo in brain folder not found!")
        return
        
    # Copy original first to reset it
    img = Image.open(original_path)
    img.save(img_path)
    
    # Reload and crop
    img = Image.open(img_path)
    img_rgb = img.convert('RGB')
    width, height = img.size
    
    # Bounding box coordinates for the metallic symbol
    # We scan down to 555px to ensure we don't scan the text area at all
    crop_limit_y = 555
    threshold = 65
    
    min_x, min_y = width, height
    max_x, max_y = 0, 0
    
    for y in range(crop_limit_y):
        for x in range(width):
            r, g, b = img_rgb.getpixel((x, y))
            if r > threshold or g > threshold or b > threshold:
                if x < min_x: min_x = x
                if y < min_y: min_y = y
                if x > max_x: max_x = x
                if y > max_y: max_y = y
                
    if max_x <= min_x or max_y <= min_y:
        print("Using fallback bounds.")
        min_x, min_y, max_x, max_y = 154, 209, 736, 554
        
    print(f"Detected bounding box for symbol: X({min_x} to {max_x}), Y({min_y} to {max_y})")
    
    # Crop the symbol strictly with a small safety margin, but never exceed crop_limit_y
    left = max(0, min_x - 20)
    top = max(0, min_y - 20)
    right = min(width, max_x + 20)
    bottom = min(crop_limit_y, max_y + 10)  # Stop before text starts
    
    symbol_crop = img.crop((left, top, right, bottom))
    crop_w, crop_h = symbol_crop.size
    
    # Create a new square black image
    # We want a nice square format where the width of the logo has breathing room
    square_size = max(crop_w, crop_h) + 120  # Add black margin/padding around the cropped symbol
    
    # Create black canvas
    square_img = Image.new('RGB', (square_size, square_size), color=(12, 18, 32)) # Match dark background color #0c1220
    
    # Paste the cropped symbol onto the center of the black canvas
    paste_x = (square_size - crop_w) // 2
    paste_y = (square_size - crop_h) // 2
    square_img.paste(symbol_crop, (paste_x, paste_y))
    
    # Save back to src/assets/logo.jpg
    square_img.save(img_path, 'JPEG', quality=95)
    print("Logo cropped, centered on a square canvas, and saved successfully!")

if __name__ == '__main__':
    autocrop_logo_clean()
