import os
from twilio.rest import Client
from dotenv import dotenv_values

# Find your Account SID and Auth Token at twilio.com/console
# and set the environment variables. See http://twil.io/secure

config = dotenv_values(".env")
account_sid = config["TWILIO_ACCOUNT_SID"]
auth_token = config["TWILIO_AUTH_TOKEN"]

client = Client(account_sid, auth_token)

validation_request = client.validation_requests \
    .create(
        friendly_name='Third Party VOIP Number',
        status_callback='https://somefunction.twil.io/caller-id-validation-callback',
        phone_number='+12184141637'
    )


print(validation_request.friendly_name)
