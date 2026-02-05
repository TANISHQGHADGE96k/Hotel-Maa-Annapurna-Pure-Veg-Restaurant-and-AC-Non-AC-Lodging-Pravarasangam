#!/bin/sh
# Build script for static file deployment

# Create dist directory
mkdir -p dist

# Copy all necessary files to dist
cp index.html dist/
cp styles.css dist/
cp -r pages dist/
cp -r components dist/
cp -r services dist/
cp -r utils dist/
cp config.js dist/
cp app.js dist/

# Copy src directory if exists
if [ -d "src" ]; then
  cp -r src dist/
fi

echo "✓ Build complete - static files copied to dist/"
