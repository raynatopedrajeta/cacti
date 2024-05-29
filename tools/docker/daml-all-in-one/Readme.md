# DAML Example - Sample DAML App

## Usage

## Building and running the container locally

# Run the built image with ports mapped to the host machine as you see fit
1. On the file, locate the docker-all-in-one folder via this command: `cd tools/docker/daml-all-in-one`
2. Build the docker image using this:
docker build -t daml-all-in-one .
3. Run the docker image:
docker run --privileged -p 6865:6865 -p 7575:7575 daml-all-in-one
4. Observe the logs and check for this status to confirm that DAML has successfully started:
   `[http-json-ledger-api-pekko.actor.default-dispatcher-12] INFO  com.daml.http.Endpoints - Responding to client with HTTP 200 OK,`
5. For healthcheck, check the query for DAML contract on docker logs:
   `"  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current\n                                 Dload  Upload   Total   Spent    Left  Speed\n\r  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0\r100    26    0    26    0     0     24      0 --:--:--  0:00:01 --:--:--    24\r100    26    0    26    0     0     24      0 --:--:--  0:00:01 --:--:--    24\n{\"result\":[],\"status\":200}DAML API Success!\n"`