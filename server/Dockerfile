FROM golang:1.20-alpine

ADD . /app

WORKDIR /app

RUN \
  apk add --no-cache \
    bash \
    git \
    openssh \
  && go get -u github.com/minio/minio-go

CMD ["go","run","main.go"]
