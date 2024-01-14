import requests
https://emailvalidation.abstractapi.com/v1/
? api_key = YOUR_UNIQUE_API_KEY
& email = johnsmith@gmail.com


url = "https://emailvalidation.abstractapi.com/v1"

response = requests.request("GET", url)

print(response.text)