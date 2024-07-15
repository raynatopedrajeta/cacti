#!/bin/bash
# Load the environment variables from the .env file
if [ -f .env ]; then
  export $(cat .env | grep -v '#' | awk '/=/ {print $1}')
  echo "possible"
fi

set -e
curl -X GET http://localhost:7575/v1/query   -H "Content-Type: application/json"   -H "Authorization: Bearer $DAML_AUTH"

echo "DAML API Success!"