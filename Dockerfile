# Arg BUILD_FROM is supplied by the home assistant installation environment
ARG BUILD_FROM
FROM $BUILD_FROM

ENV DENO_VERSION=1.7.1
ENV DRASH_VERSION=1.4.1
ENV LANG C.UTF-8

ARG DEBIAN_FRONTEND=noninteractive
RUN apt-get update && apt-get install -y apt-utils

# Tools & essential utils
RUN apt-get install -yq tree unzip \
 && rm -rf /var/lib/apt/lists/*

# Install deno
RUN curl -fsSL https://github.com/denoland/deno/releases/download/v${DENO_VERSION}/deno-x86_64-unknown-linux-gnu.zip \
         --output deno.zip \
 && unzip deno.zip \
 && rm deno.zip \
 && mv deno /bin/deno
ENTRYPOINT ["deno"]

# Copy data for add-on
WORKDIR /bedrock
COPY ./bedrock .
RUN /bin/deno cache bedrock.ts

CMD ["run", "--allow-all", "bedrock.ts"]

