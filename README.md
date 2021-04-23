# Cypress_Repo1

## Objective
- Cypress automation 

### Installation Instructions and Prerequisites
- Download [Node js](https://nodejs.org/en/download/) and install based on your system.
- Set set Environment Variables = *Under Search type Environment Variables then click on Environment Variables under System variables click on New... (variable name *NODE_HOME*, Variable Value = *C:\Program Files\nodejs*)*.
- Download [Visual Studio Code](https://code.visualstudio.com/Download) and install based on your system. **Install with Default Configuration**
- Generate package.json for your project. (Similar to pom.xml for Maven). Open VS code then using terminal execute **npm init** and enter required details.
- Install cypress repo using **npm install cypress --save-dev** and wait for installtion.
- To open Cypress run **./node_modules/.bin/cypress open** in terminal.
- (Install mandatory dependencies)  

  ```
	$ npm install --dev mocha
	$ npm install --dev mochawesome
	$ npm install --dev mochawesome-merge

	```
- Some optional dependencies

 ```
	$ npm install -D cypress-iframe
	$ npm install cypress-xpath
	$ 

	```
 
