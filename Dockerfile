# Etapa 1: Construcción de la aplicación de Angular
FROM node:22-alpine AS build
WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
RUN npx ng build --configuration production

# Etapa 2: Servir con NGINX
FROM nginx:alpine

# Copiar los archivos compilados desde la etapa anterior
COPY --from=build /app/dist/peludos-front /usr/share/nginx/html

# Copiar la plantilla de configuración de NGINX
COPY nginx.conf.template /etc/nginx/templates/default.conf.template

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]