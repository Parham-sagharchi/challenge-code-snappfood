# Base image
FROM node:16 as build

# Set the working directory
WORKDIR /app

# Copy package.json and yarn.lock
COPY package.json yarn.lock ./

# Install dependencies
RUN yarn install

# Copy the source code
COPY . .

# Build the application
RUN yarn build

# Stage 2: Serve the built application with a lightweight web server
FROM nginx:1.21.0-alpine

# Copy the built files to the appropriate directory
COPY --from=build /app/dist /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]
