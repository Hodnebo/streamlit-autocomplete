#!/bin/bash

# Exit on error
set -e

echo "Building Streamlit Autocomplete Component"

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "Node.js is required but not installed. Please install Node.js and npm."
    exit 1
fi

# Check if npm is installed
if ! command -v npm &> /dev/null; then
    echo "npm is required but not installed. Please install npm."
    exit 1
fi

# Navigate to the frontend directory
cd st_autocomplete/frontend

# Install dependencies
echo "Installing frontend dependencies..."
npm install

# Build the frontend
echo "Building frontend..."
# Set CI=false to prevent warnings from being treated as errors
CI=false DISABLE_ESLINT_PLUGIN=true npm run build
