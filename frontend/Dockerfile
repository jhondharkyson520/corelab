# Use a imagem oficial do Node.js como base
FROM node:22-alpine AS build


WORKDIR /app


COPY package.json .


RUN npm install
RUN npm install typescript
RUN npm install -g vite

COPY . .

RUN npm run build

FROM nginx:alpine

COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 3000

CMD ["nginx", "-g", "daemon off;"]
