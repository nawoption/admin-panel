# Use the official Node.js image
FROM node:14-alpine AS build

# Create and change to the app directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the app
RUN npm run build

# Install `serve` to serve the app
RUN npm install -g serve

# Set environment variable for port
ENV PORT=5000

# Serve the app on the specified port
CMD ["serve", "-s", "build", "-l", "5000"]

# Expose the port the app runs on
EXPOSE 5000
