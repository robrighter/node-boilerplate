#!/bin/sh
echo "Creating necessary folders"
mkdir ./static
mkdir ./static/images
mkdir ./static/css
mkdir ./static/js
mkdir ./views
mkdir ./models

echo "Copying Markup and CSS BoilerPlate..."
cp ./templates/app/server.js ./server.js
cp ./templates/app/package.json ./package.json
cp ./templates/app/.gitignore ./.gitignore
curl https://raw.github.com/h5bp/html5-boilerplate/master/css/style.css > ./static/css/style.css
cp ./templates/views/500.jade ./views/500.jade
cp ./templates/views/404.jade ./views/404.jade
cp ./templates/views/index.jade ./views/index.jade
cp ./templates/views/layout.jade ./views/layout.jade
cp ./templates/js/script.js ./static/js/script.js
# TODO copy over the models

echo "Setting up the dependancies from NPM..."
npm install

echo "Removing the stuff you dont want..."
rm -rf .git
rm -rf bin
rm -rf templates
rm README.md

echo "Initing the new git project..."
git init
git add .
git commit -m"Initial Commit"

