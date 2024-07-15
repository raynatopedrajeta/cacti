FROM ubuntu:22.04

RUN apt update
RUN apt install curl openjdk-21-jdk -y
RUN curl -sSL https://get.daml.com/ | sh
ENV PATH="/root/.daml/bin:${PATH}"
RUN daml new create-daml-app --template create-daml-app
WORKDIR /create-daml-app

RUN apt-get update && apt-get install -y supervisor
RUN mkdir -p /var/log/supervisor
COPY supervisord.conf /etc/supervisord.conf

EXPOSE 9001

ENTRYPOINT ["/usr/bin/supervisord"]
CMD ["--configuration","/etc/supervisord.conf", "--nodaemon"]


COPY healthcheck.sh /healthcheck.sh
RUN chmod +x /healthcheck.sh

HEALTHCHECK --interval=30s --timeout=60s --start-period=100s --retries=100 CMD /healthcheck.sh