#!/usr/bin/env bash
cd ..
docker build -t graphql/todoapi -f Dockerfile .
docker-compose up -d