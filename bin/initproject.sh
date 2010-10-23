#!/bin/sh

echo "Updating git submodules"
git submodule update --init --recursive

echo "Creating static folders"
mkdir ./static/images
mkdir ./static/css

echo "Copying Markup and CSS BoilerPlate..."
cp ./lib/html5-boilerplate/404.html ./views/404.ejs
cp ./lib/html5-boilerplate/js/plugins.js ./static/js/plugins.js
cp ./lib/html5-boilerplate/css/handheld.css ./static/css/handheld.css
cp ./lib/html5-boilerplate/css/style.css ./static/css/style.css
cp ./lib/html5-boilerplate/robots.txt ./static/robots.txt

echo "Removing the stuff you dont want..."
rm -rf .git
rm -rf bin
rm README.md

echo "Initing the new git project..."
git init
git add .
git commit -m"Initial Commit"

