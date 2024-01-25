FROM node:21.5-alpine3.18 AS builder
COPY . /build
WORKDIR /build
RUN yarn install
RUN yarn generate --dotenv .env.prod

FROM cgr.dev/chainguard/nginx:latest
COPY --from=builder /build/dist /usr/share/nginx/html
EXPOSE 8080
