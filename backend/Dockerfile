FROM node:24-alpine

# Set the working directory
WORKDIR /backend

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Install PM2 globally for process management
RUN npm install -g pm2
   
# Copy the rest of the application code
COPY . .

# Expose the port the app runs on
EXPOSE 3200

# Start the application using PM2
CMD ["pm2-runtime", "start", "server.js", "--name", "backend"]