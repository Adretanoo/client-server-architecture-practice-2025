# Minimal Node.js Dockerfile
FROM node:24

WORKDIR /srv/app

# Install dependencies (production only)
COPY package.json .
RUN npm install --production

# Copy app source
COPY . .

EXPOSE 3000
CMD ["node", "app.js"]

