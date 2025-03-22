import os
import requests

def download_image(url, file_path):
    response = requests.get(url)
    if response.status_code == 200:
        os.makedirs(os.path.dirname(file_path), exist_ok=True)
        with open(file_path, 'wb') as f:
            f.write(response.content)

# Images libres de droit de Unsplash
images = {
    'client1.jpg': 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80',  # Femme professionnelle
    'client2.jpg': 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80',  # Homme d'affaires
    'client3.jpg': 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&q=80'   # Femme professionnelle
}

for filename, url in images.items():
    download_image(url, f'images/testimonials/{filename}')
