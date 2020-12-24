# base image
FROM node:latest as buildernp

# set working directory
WORKDIR /app

# install and cache app dependencies
COPY package.json .

RUN npm cache clean --force

RUN npm install --no-package-lock --legacy-peer-deps

RUN npm install --save typescript@3.9.2 --no-package-lock --force --legacy-peer-deps

RUN npm install -g @angular/cli --no-package-lock

# add app
COPY . .

RUN ng build --prod

FROM nginx
EXPOSE 4200
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/dist /usr/share/nginx/html