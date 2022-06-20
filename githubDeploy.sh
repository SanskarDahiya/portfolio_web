rm -rf gitDeploy
mkdir gitDeploy
yarn build
cd gitDeploy
cp -r ../build/. .
git init
git checkout -b git_deploy
git remote add origin https://sanskardahiya@github.com/SanskarDahiya/portfolio_web.git
git add .
git commit -m "Build Update"
git push origin git_deploy --force