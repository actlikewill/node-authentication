# Node Authentication

## curl

```
curl -X POST localhost:3000/register -H 'Content-Type: application/json' \
    -d '{ "email": "wilsongaturu@gmail.com", "name" : "Wilson", "password": "secret123", "passwordConfirmation": "secret123" }'
```