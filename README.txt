This bash script will build a full MEAN project complete with Angular factory and controller.

ProjectName
├── client
│   ├── index.html
│   ├── partials
│   │   └── main.html
│   ├── scripts
│   │   ├── app.js
│   │   ├── controller.js
│   │   └── factory.js
│   └── assets
│       └── styles.css
|
├── node_modules (angular, angular-route, body-parser, express, mongoose)
|
├── package.json
|
├── server
│   ├── config
│   │   ├── mongoose.js
│   │   └── routes.js
│   ├── controllers
│   │   └── tests.js
│   └── models
│       └── test.js
└── server.js


  Under the hood:
The script handles the npm installs of the required packages.
The script will open your default browser to localhost:8000, showing the index page.

  Please note:
You must run 'mongod' independant of this script!!!

  To run this script:
Copy the script into a sibling directory of where you want the project created.
Run with ./makemean or ./makemean.sh in a bash shell

The 'test' directory in this repo is a sample of what the script builds.
