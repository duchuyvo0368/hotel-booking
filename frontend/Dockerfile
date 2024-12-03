# Use Node.js official image
FROM node:17

# Set working directory inside the container
WORKDIR /frontend

# Copy package.json and package-lock.json first to install dependencies
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files (including pages directory)
COPY . .

# Build the Next.js app
RUN npm run build

# Expose the port your app runs on
EXPOSE 3000

# Start the Next.js app in production mode
CMD ["npm", "run", "start"]
