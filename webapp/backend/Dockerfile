# Backend Dockerfile
FROM node:16

# Set working directory
WORKDIR /app

# Copy app files
COPY . .

# Install dependencies
RUN npm install

# Expose port
EXPOSE 5000

# Start the backend
CMD ["node", "server.js"]
