import requests

url = 'http://127.0.0.1:8000/add'
payload = {
  'id': '2',
  'description': 'Buy things',
  'due': '2021-10-10'
  }
resp = requests.post(url=url, data=payload)
print(resp.json())