FROM node:13.12.0-alpine as build
WORKDIR /

COPY package.json ./
COPY package-lock.json ./
RUN npm ci --silent
# RUN npm install react-scripts@3.4.1 -g --silent
COPY . ./
RUN npm run build

# Production environment
FROM nginx:stable-alpine
COPY --from=build /build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]