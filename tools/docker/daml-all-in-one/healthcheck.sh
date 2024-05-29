#!/bin/bash
# docker exec -it eb40b692a662 /bin/bash

curl -X GET http://localhost:7575/v1/query   -H "Content-Type: application/json"   -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwczovL2RhbWwuY29tL2xlZGdlci1hcGkiOnsibGVkZ2VySWQiOiJzYW5kYm94IiwiYXBwbGljYXRpb25JZCI6ImZvb2JhciIsImFjdEFzIjpbIkFsaWNlIl19fQ.1Y9BBFH5uVz1Nhfmx12G_ECJVcMncwm-XLaWM40EHbY"

echo "DAML API Success!"