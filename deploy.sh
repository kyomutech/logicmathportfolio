echo "Starting deployment..."

# Pull the latest changes from the repository
git pull origin main

# Build the project
npm run build

echo "Deployment completed!"
