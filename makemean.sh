
#!/bin/bash
echo "Please specify a project name."
read project
mkdir $project
cd $project
# create the package.json file
curl -o package.json https://raw.githubusercontent.com/theaethelwulf/mean_setup/master/sources/package.json
npm cache clean
# install node modules
npm install
mkdir client
cd client
# create the index file in the root of client directory
curl -o index.html https://raw.githubusercontent.com/theaethelwulf/mean_setup/master/sources/index.html
mkdir assets
# Create css file
cd assets
curl -o style.css https://raw.githubusercontent.com/theaethelwulf/mean_setup/master/sources/style.css
cd ..
mkdir partials
cd partials
# create the main partial to be displayed on index.html
curl -o main.html https://raw.githubusercontent.com/theaethelwulf/mean_setup/master/sources/main.html
cd ..
mkdir scripts
cd scripts
# create the 3 files from generic boilerplate hosted on github
curl -o app.js https://raw.githubusercontent.com/theaethelwulf/mean_setup/master/sources/app.js
# Create factories folder and file
mkdir factories
cd factories
curl -o factory.js https://raw.githubusercontent.com/theaethelwulf/mean_setup/master/sources/clientFactory.js
cd ..
# Create controllers folder and file
mkdir controllers
cd controllers
curl -o controller.js https://raw.githubusercontent.com/theaethelwulf/mean_setup/master/sources/clientController.js
cd ../../..
# end of client side, beginning server side
curl -o server.js https://raw.githubusercontent.com/theaethelwulf/mean_setup/master/sources/server.js
mkdir server
cd server
mkdir config
mkdir controllers
mkdir models
cd config
curl -o routes.js https://raw.githubusercontent.com/theaethelwulf/mean_setup/master/sources/routes.js
#appends this line to the beginning of routes file (needs to take in variable file name)
echo "var allItems = require('../controllers/"$project"s.js');"|cat - routes.js > /tmp/out && mv /tmp/out routes.js
# Create mongoose file
curl -o mongoose.js https://raw.githubusercontent.com/theaethelwulf/mean_setup/master/sources/mongoose.js
# Replace DATABASENAME (TO DO*********************************)
echo "Please specify a database name."
read dbname
perl -pi -e "s/DATABASENAME/$dbname/g" mongoose.js
cd ../controllers
echo "Please specify a model name for the primary schema."
read model
curl -o "$model"sController.js https://raw.githubusercontent.com/theaethelwulf/mean_setup/master/sources/ServerController.js
cd ../models
curl -o $model.js https://raw.githubusercontent.com/theaethelwulf/mean_setup/master/sources/Schema.js
cd ../..
timer=.1
sleep $timer && xdg-open http://localhost:8000/ &
nodemon server.js
