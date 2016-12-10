This bash script build upon the Mongoose script with some minor tweaks.


ProjectName
  bower_components (are installed for you)
    angular
    angular-route

  client
    assets
    partials
		static
      styles.css
		views
			index.ejs (which is obtained from this repo)

	node_modules (are installed for you)

	server
		config
			mongoose.js
			routes.js
		controllers
			projectnames.js
		models
			projectname.js

	server.js (which is obtained from this repo)

Under the hood:
The script handles the npm and bower installs of the required packages.
It also runs nodemon for you.
  Please note:
You must run mongod independant of this script!!!

At the end of the script the browser will open at localhost:8000.
If everything worked you should see "Hello World" and
The text "I should be blue" shouldn't lie indicating the stylesheet is properly linked.

Atom editor will open the parent directory of the Project.

To run this script:
Copy the scipt and the package.json to a sibling directory of where you want the project created.
Run with ./makemeangit add

Located in this repo is a demo of what the script builds.
Enjoy!
