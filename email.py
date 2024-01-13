import requests

url = "https://emailvalidation.abstractapi.com/v1"

response = requests.request("GET", url)

print(response.text)