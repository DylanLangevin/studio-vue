#!/bin/bash


npm run build


cd dist


git init
git add -A
git commit -m "deploy"


git push -f git@github.com:DylanLangevin/studio-vue.git master:gh-pages


cd -