FROM node:24-alpine AS build

# Set the working directory
WORKDIR /frontend

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Set environment variables
ENV VITE_API_URL="/api"

# build the application
RUN npm run build

# Install serve to serve the built files #RUN npm install -g serve # Expose the port the app runs on #EXPOSE 3000 # Start the application using serve #CMD ["serve", "-s", "dist", "-l", "3000"]

FROM nginx:latest

# Copy the built files from the previous stage
COPY --from=build /frontend/dist /usr/share/nginx/html

# Copy the Nginx configuration file
COPY nginx.conf /etc/nginx/nginx.conf

# Set the working directory for Nginx
#WORKDIR /usr/share/nginx/html

# Expose the port Nginx will run on
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]

