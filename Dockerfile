FROM node:18
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .

RUN npm run build
RUN npm install -g serve

ARG PORT
ENV PORT=${PORT}
EXPOSE ${PORT}

CMD ["serve", "-s", "build"]
