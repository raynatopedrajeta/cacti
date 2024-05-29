FROM ubuntu:22.04

RUN apt update
RUN apt install curl openjdk-21-jdk -y
RUN curl -sSL https://get.daml.com/ | sh
ENV PATH="/root/.daml/bin:${PATH}"
RUN daml new create-daml-app --template create-daml-app
WORKDIR /create-daml-app

CMD ["daml", "start"]

COPY healthcheck.sh /healthcheck.sh
RUN chmod +x /healthcheck.sh

HEALTHCHECK --interval=30s --timeout=60s --start-period=100s --retries=100 CMD /healthcheck.sh