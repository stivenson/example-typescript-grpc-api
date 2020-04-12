FROM envoyproxy/envoy:v1.14.1
RUN apt-get update
COPY envoy.yaml /etc/envoy.yaml
EXPOSE 8080
CMD /usr/local/bin/envoy -c /etc/envoy.yaml
