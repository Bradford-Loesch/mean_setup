
#!/bin/bash
# Get setup variable names
echo "Please specify a project name."
read project
echo "Please specify a model name for the primary schema. This will be used to name your primary schema, http routes, factory and controllers."
read model
modelvar="${model,,}"
echo "Please specify a database name for mongodb."
read dbname
mkdir $project
cd $project
# create the package.json file
curl -o package.json https://raw.githubusercontent.com/theaethelwulf/mean_setup/master/sources/package.json
npm cache clean
# install node modules
npm install
mkdir client
cd client
# create the index file and replace names
curl -o index.html https://raw.githubusercontent.com/theaethelwulf/mean_setup/master/sources/index.html
perl -pi -e "s/SCHEMANAME/$model/g" index.html
mkdir assets
# Create css file
cd assets
curl -o style.css https://raw.githubusercontent.com/theaethelwulf/mean_setup/master/sources/style.css
cd ..
mkdir partials
cd partials
# create the primary partial view and replace names
curl -o main.html https://raw.githubusercontent.com/theaethelwulf/mean_setup/master/sources/main.html
perl -pi -e "s/SCHEMANAME/$model/g" main.html
perl -pi -e "s/VARIABLENAME/$modelvar/g" main.html
cd ..
mkdir scripts
cd scripts
# create the 3 files from generic boilerplate hosted on github
curl -o app.js https://raw.githubusercontent.com/theaethelwulf/mean_setup/master/sources/app.js
# Create factories folder and file
mkdir factories
cd factories
curl -o "$model"Factory.js https://raw.githubusercontent.com/theaethelwulf/mean_setup/master/sources/clientFactory.js
perl -pi -e "s/SCHEMANAME/$model/g" "$model"Factory.js
perl -pi -e "s/VARIABLENAME/$modelvar/g" "$model"Factory.js
cd ..
# Create controllers folder and file
mkdir controllers
cd controllers
curl -o controller.js https://raw.githubusercontent.com/theaethelwulf/mean_setup/master/sources/clientController.js
perl -pi -e "s/SCHEMANAME/$model/g" "$model"Controller.js
perl -pi -e "s/VARIABLENAME/$modelvar/g" "$model"Controller.js
cd ../../..
# end of client side, beginning server side
curl -o server.js https://raw.githubusercontent.com/theaethelwulf/mean_setup/master/sources/server.js
mkdir server
cd server
mkdir config
mkdir controllers
mkdir models
cd config
# Create routes file
curl -o routes.js https://raw.githubusercontent.com/theaethelwulf/mean_setup/master/sources/routes.js
# Replace names
perl -pi -e "s/SCHEMANAME/$model/g" routes.js
perl -pi -e "s/VARIABLENAME/$modelvar/g" routes.js
# Create mongoose file
curl -o mongoose.js https://raw.githubusercontent.com/theaethelwulf/mean_setup/master/sources/mongoose.js
# Replace DATABASENAME
perl -pi -e "s/DATABASENAME/$dbname/g" mongoose.js
cd ../controllers
curl -o "$model"sCtrl.js https://raw.githubusercontent.com/theaethelwulf/mean_setup/master/sources/ServerController.js
perl -pi -e "s/SCHEMANAME/$model/g" "$model"Ctrl.js
perl -pi -e "s/VARIABLENAME/$modelvar/g" "$model"Ctrl.js
cd ../models
curl -o $model.js https://raw.githubusercontent.com/theaethelwulf/mean_setup/master/sources/Schema.js
perl -pi -e "s/SCHEMANAME/$model/g" "$model".js
cd ../..
# timer=.1
# sleep $timer && xdg-open http://localhost:8000/ &
# nodemon server.js
