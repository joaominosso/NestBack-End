This is the back-end of weef aplication that can handle Wvents information.

Configure the space:
1°->you neet to have node, vsCode and postgress installed.
2°-> run "yarn" in root folder.
3°-> whenn you are installing Postgres, it will request a password, chose one and change the "PASSWORD_DATABASE" in the ".env" file in this project(OBS: username, and port are default but you can change this on the file "app.module.ts");
4°-> oppen postgress, go to the database, and create one database called "events".
5°-> oppen the terminal and run the command "yarn start:dev"
 
 Now you application should be running in the port localhost/3000;

*** CAUTION: CORS acess is alowed, pre-flight isn't required ***
