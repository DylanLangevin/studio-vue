
set -e

npm run build

cd dist

if [ ! -d ".git" ]; then
  git init
fi


git add .


git commit -m 'deploy'


git push -f git@github.com:dylanlangevin/studio-vue.git HEAD:gh-pages

cd -