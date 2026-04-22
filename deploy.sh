#!/bin/bash

# Deploy script for remote server
# Usage: ./deploy.sh [build|deploy|rebuild]

set -e

REMOTE_HOST="raj@10.127.1.23"
REMOTE_PORT=22
DOCKER_IMAGE_NAME="sjmsom-web"
CONTAINER_PORT=5000
LOCAL_PORT=5000
PROJECT_DIR="/Users/raj/Documents/somopus4.7"

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo_info() {
  echo -e "${GREEN}[INFO]${NC} $1"
}

echo_error() {
  echo -e "${RED}[ERROR]${NC} $1"
}

echo_warn() {
  echo -e "${YELLOW}[WARN]${NC} $1"
}

build_image() {
  echo_info "Building Docker image: $DOCKER_IMAGE_NAME"
  cd "$PROJECT_DIR"
  docker build -t "$DOCKER_IMAGE_NAME:latest" .
  echo_info "Image built successfully!"
}

deploy_to_remote() {
  echo_info "Deploying to remote server: $REMOTE_HOST"

  # Create directory on remote
  echo_info "Setting up remote directory..."
  ssh "$REMOTE_HOST" "mkdir -p ~/docker-deploy"

  # Copy docker-compose and Dockerfile to remote
  echo_info "Copying Docker files to remote..."
  scp "$PROJECT_DIR/Dockerfile" "$REMOTE_HOST":~/docker-deploy/
  scp "$PROJECT_DIR/docker-compose.yml" "$REMOTE_HOST":~/docker-deploy/

  # Copy web directory, excluding node_modules
  echo_info "Copying web directory (excluding node_modules)..."
  tar -C "$PROJECT_DIR" --exclude='node_modules' --exclude='.next' -czf - web | \
    ssh "$REMOTE_HOST" "tar -C ~/docker-deploy -xzf -"

  # Run docker-compose on remote
  echo_info "Starting container on remote server..."
  ssh "$REMOTE_HOST" << 'EOF'
    cd ~/docker-deploy
    docker compose down 2>/dev/null || true
    docker compose up -d
    sleep 2
    docker compose logs
EOF

  echo_info "Deployment complete!"
  echo_info "Application should be available at http://10.127.1.23:$LOCAL_PORT"
}

check_remote_status() {
  echo_info "Checking remote container status..."
  ssh "$REMOTE_HOST" "docker compose -f ~/docker-deploy/docker-compose.yml ps"
}

stop_remote() {
  echo_info "Stopping container on remote server..."
  ssh "$REMOTE_HOST" "cd ~/docker-deploy && docker compose down"
  echo_info "Container stopped."
}

# Parse command
case "${1:-deploy}" in
  build)
    build_image
    ;;
  deploy)
    deploy_to_remote
    ;;
  rebuild)
    stop_remote
    deploy_to_remote
    ;;
  status)
    check_remote_status
    ;;
  stop)
    stop_remote
    ;;
  *)
    echo "Usage: $0 {build|deploy|rebuild|status|stop}"
    echo ""
    echo "Commands:"
    echo "  build      - Build Docker image locally"
    echo "  deploy     - Deploy to remote server (builds on remote)"
    echo "  rebuild    - Stop remote container and redeploy"
    echo "  status     - Check remote container status"
    echo "  stop       - Stop container on remote server"
    exit 1
    ;;
esac
