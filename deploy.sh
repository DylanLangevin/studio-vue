#!/usr/bin/env sh

set -e

npm run build

cd dist

git init
git add -A
git commit -m 'deploy'

# Correction: Push directly to the gh-pages branch
git push -f git@github.com:dylanlangevin/studio-vue.git HEAD:gh-pages

cd -