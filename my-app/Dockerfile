# Use Node.js official image as base
FROM node:16

# Set working directory inside container
WORKDIR /app

# Copy package files and install dependencies
COPY package.json package-lock.json* ./
RUN npm install

# Copy application code
COPY . .

# Expose port (Cloud Run uses PORT env variable)
EXPOSE 8080

# Start the app
CMD ["npm", "start"]