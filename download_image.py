import requests
import os

url = 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80'
os.makedirs('images', exist_ok=True)

try:
    response = requests.get(url, verify=False)  # Bypass SSL verification temporarily
    with open('images/hero-bg.jpg', 'wb') as f:
        f.write(response.content)
    print("Image downloaded successfully")
except Exception as e:
    print(f"Download failed: {str(e)}")
