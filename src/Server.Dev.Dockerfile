# You should always specify a full version here to ensure all of your developers
# are running the same version of Node.
FROM node:8.11.1

# Override the base log level (info).

# Copy all local files into the image.
WORKDIR /api
COPY . .

RUN npm install nodemon @babel/cli@v7.0.0-beta.44
RUN npm install --production
RUN npm run build

ENV EXPRESS_IP 0.0.0.0
ENV EXPRESS_PORT 3200
ENV NODE_ENV development

CMD ["npm", "run", "dev"]
EXPOSE 3200
