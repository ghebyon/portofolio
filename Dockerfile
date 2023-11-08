FROM node:18-alpine as builder
WORKDIR /portofolio

COPY package.json package-lock.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM node:18-alpine as runner
WORKDIR /portofolio
COPY --from=builder /portofolio/package.json .
COPY --from=builder /portofolio/package-lock.json .
COPY --from=builder /portofolio/next.config.js ./
COPY --from=builder /portofolio/public ./public
COPY --from=builder /portofolio/.next/standalone ./
COPY --from=builder /portofolio/.next/static ./.next/static
EXPOSE 8080
ENTRYPOINT ["npm", "run", "start"]