
from PIL import Image
import os

def crop_top(image_path, output_path, pixels_to_crop):
    try:
        img = Image.open(image_path)
        width, height = img.size
        # Crop from (0, pixels_to_crop) to (width, height)
        cropped_img = img.crop((0, pixels_to_crop, width, height))
        cropped_img.save(output_path)
        print(f"Successfully cropped {image_path} to {output_path}")
    except Exception as e:
        print(f"Error cropping {image_path}: {e}")

# Paths
base_dir = "/Users/giullianoalves/.gemini/antigravity/brain/8bdb8d22-4ed2-49d1-ae0e-591055fe7b49"
dest_dir = "/Users/giullianoalves/Documents/Projetos Antigravity/Funnels/public/assets/screenshots"
os.makedirs(dest_dir, exist_ok=True)

# 1. Dashboard (Image 0) - Crop top tabs (~140px based on visual estimate of standard browser bar + app header)
crop_top(
    f"{base_dir}/uploaded_media_0_1769645113543.png", 
    f"{dest_dir}/dashboard-clean-cropped.png", 
    160 
)

# 2. Logic Builder (Image 2) - Crop top header (~100px)
crop_top(
    f"{base_dir}/uploaded_media_2_1769645113543.png", 
    f"{dest_dir}/logic-builder-clean.png", 
    110
)
