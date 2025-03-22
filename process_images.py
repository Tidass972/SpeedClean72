import os
from PIL import Image

def process_images(input_dir='images', output_dir='images/gallery', max_size=(1200, 800), quality=80):
    # Create output directory if it doesn't exist
    os.makedirs(output_dir, exist_ok=True)
    
    # Process all JPG files in input directory
    for filename in os.listdir(input_dir):
        if filename.lower().endswith(('.jpg', '.jpeg')):
            input_path = os.path.join(input_dir, filename)
            output_path = os.path.join(output_dir, filename)
            
            try:
                with Image.open(input_path) as img:
                    # Resize while maintaining aspect ratio
                    img.thumbnail(max_size, Image.Resampling.LANCZOS)
                    
                    # Save optimized version
                    img.save(output_path, 
                            'JPEG', 
                            quality=quality, 
                            optimize=True, 
                            progressive=True)
                print(f"Processed: {filename}")
            except Exception as e:
                print(f"Error processing {filename}: {str(e)}")

if __name__ == "__main__":
    process_images(
        max_size=(800, 600),
        quality=85
    )
