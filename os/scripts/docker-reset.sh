#!/bin/bash

# https://gist.github.com/beeman/aca41f3ebd2bf5efbd9d7fef09eac54d

# Stop all containers
docker stop `docker ps -qa`

# Remove all containers
docker rm `docker ps -qa`

# Remove all images
docker rmi -f `docker images -qa `

# Remove all volumes
docker volume rm $(docker volume ls -qf)
docker volume prune --force

# Remove all networks
docker network rm `docker network ls -q`
docker network prune --force 

docker system prune -af
