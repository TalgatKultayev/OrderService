## MySQL config start
1. Open MySQL as your default user
2. In your default user, on top row click File -> Open SQL Script -> your_file_system\OrderService\00-starter-files\01-create-user.sql
3. Once 01-create-user is open, click lightning button to execute the code.
4. Go back to main page of MySQL, Add new MySQL Connection with username: "springstudent" and password: "springstudent" 

5. In your new "springstudent" connection, on top row click File -> Open SQL Script -> your_file_system\OrderService\00-starter-files\02-create-database.sql
6. Click lightning button to execute script.
7. Repeat procedures 5-6 to execute script 03-create-table.sql

## MySQL config is ready

## Backend config start

8. Open backend folder in your JAVA IDE. Open pom.xml file to check if it's open as MAVEN file. If not, open pom.xml->right click->Maven-> reload file/open file.
9. Run BackendApplication.

## Backend config is ready

## Frontend config start
10. Go to cmd and type : 1) node -v
						 2) npm -v
11. install https://nodejs.org/en/blog/release/v14.18.1/ for compatibility purposes
12. Go to cmd and type : 1) node -v
						 2) npm -v
It should display version if installed correctly

13. In cmd type: npm install -g @angular/cli
This will install angular into your computer
13. open frontend folder in VSCode or IntelliJ IDEA or similar IDE.
14. Run BackendApplication from backend directory first, then run angular app as follows:
your_file_system\OrderService\frontend\angular-frontend>ng serve

## Frontend config is ready

15. In your browser enter : localhost:4200

16. That it.

## WebApp start is ready
