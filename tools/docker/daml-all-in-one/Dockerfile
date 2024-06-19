FROM docker:20.10.3-dind
USER root
# Use the official Haskell image as the base image
# FROM haskell:latest



# Install necessary dependencies

RUN apk update
RUN apk add py-pip python3-dev libffi-dev openssl-dev gcc libc-dev make
RUN apk add xdg-utils
 
# Need curl for healthchecks
RUN apk add --no-cache curl
 
# Need to run shell script run.sh for Corda CLI
RUN apk add --no-cache bash
 
# The file binary is used to inspect exectubles when debugging container image issues
RUN apk add --no-cache file
RUN apk add --no-cache ca-certificates
RUN apk add --no-cache tzdata
RUN apk add --no-cache gnupg

# Installing Zulu11 JDK(dependencies)
RUN wget -P /etc/apk/keys/ \
https://cdn.azul.com/public_keys/alpine-signing@azul.com-5d5dc44c.rsa.pub
RUN echo "https://repos.azul.com/zulu/alpine" | tee -a /etc/apk/repositories
RUN apk update
RUN apk add --no-cache zulu11-jdk

# Download and install DAML SDK
# RUN curl -sSL https://get.daml.com/ | sh && ./install.sh
RUN curl -sSL https://get.daml.com/ | sh
# Set environment variables for DAML SDK
ENV PATH="/root/.daml/bin:${PATH}"
# RUN ./install.sh

RUN daml new create-daml-app --template create-daml-app && cd create-daml-app

# Copy the DAML project into the Docker image
# COPY . /Users/raynato.c.pedrajeta/Documents/practicedaml/create-daml-app

# # Set the working directory
WORKDIR /create-daml-app
# Modify the start-navigator value in daml.yaml
RUN sed -i 's/start-navigator: false/start-navigator: true/' daml.yaml

# Build the DAML project
# COPY script.sh /script.sh
# RUN chmod +x /script.sh
# RUN daml build

# # Expose the necessary ports (adjust as needed)
EXPOSE 6865 7500

# # Start the DAML sandbox and Navigator
CMD ["daml", "start"]