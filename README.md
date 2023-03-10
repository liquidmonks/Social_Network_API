
# NOSQL Social Network API

## Description
API for a social network that uses a NoSQL database to allow website to handle large amounts of unstructured data.
when you enter the command to invoke the application, your server is started and the Mongoose models are synced to the MongoDB database then you are able to successfully create users, create and delete reactions to thoughts , add to and remove friends from a user’s friend list.

## Table of Content
- [Purpose](#purpose)
- [Installation](#installation)
- Routes
  - [Users](#users)
  - [Friends](#friends)
  - [Thoughts](#thoughts)
  - [Reactions](#reactions)
- [License](#license)
- [demo video link](https://drive.google.com/file/d/10QTfcD69THOEslE7FeXGsrXj6E-9eeps/view)
- [Contributions](#contribution)

## Features

- Allow a user to post, edit, comment, and delete content on a CMS-style blog site.
- Allow a user to sign in with a username and password.
- Allow a user to sign-up with a username and password.
- Allow a user to view timestamps on a blog post.

## Technology and Methodology

The application utilizes the model-view-controller (MVC) software architecture. It presents a user interface that sends request and solicits responses from a backend MySQL database through javascript based api controllers. 

## Usage

The user can log into a CMS-style blog to perform the following actions:

- Sign-up with a new username.
- Sign-in with an existing username.
- Navigate to the home page, dashboard, and the option to log out.
- Edit an existing blog post.
- Post a new blog post.
- Delete an existing blog post.
- Comment an existing blog post.

With this social network api,
- when you enter the command to invoke the application, your server is started and the Mongoose models are synced to the MongoDB database
- Application deletes a user's associated thoughts when the user is deleted.
- when you open API GET routes in Insomnia for users and thoughts, the data for each of these routes is displayed in a formatted JSON
- when you test API POST, PUT, and DELETE routes in Insomnia, you are able to successfully create, update, and delete users and thoughts in my database
- when you test API POST and DELETE routes in Insomnia, you are able to successfully create and delete reactions to thoughts and add and remove friends to a user’s friend list
    


## Installation

Install package.json dependencies.
- Run "npm i"

Connect connection.js script to your local SQL database editor.
- Modify database password line in .env file with that of your local SQL database editor.

Create database tables:

- Run schema.sql in your local SQL database editor.

- Seed SQL database editor
    - Run "node run seed"

Execute the program:
- Run "npm start"

### Users: 

| HTTP Method 	| Route                                   	| Description                                                                                                                                                         	|
|-------------	|-----------------------------------------	|---------------------------------------------------------------------------------------------------------------------------------------------------------------------	|
| GET         	| http://localhost:3001/api/users         	| To `GET` all users                                                                                                                                                  	|
| GET         	| http://localhost:3001/api/users/:userId 	| To `GET` a single user with that `userId`                                                                                                                           	|
| POST        	| http://localhost:3001/api/users         	| To create a new user. <br> sample Data:  <pre>{  <br>"username": "TestUserOne",  <br>"email": "TestUserOne@mail.com"  <br>}</pre>                                    	|
| PUT         	| http://localhost:3001/api/users/:userId 	| To update an existing user `userId` details. <br> sample Data:  <pre>{  <br>"username": "TestUserTwo",  <br>"email": "TestUserTwo@mail.com"  <br>}</pre> 	|
| DELETE      	| http://localhost:3001/api/users/:userId 	| To delete an existing user `userId`  and all thoughts related to the user `userId`                                                                                                                                	|                                                                                                                             	|

### Friends:

| HTTP Method 	|                           Route                           	| Description                                                                                                                                                         	|
|:-----------:	|:---------------------------------------------------------:	|---------------------------------------------------------------------------------------------------------------------------------------------------------------------	|
|     POST    	| http://localhost:3001/api/users/:userId/friends/:friendId 	| To add a friend `friendId` to a user `userId`                                                                                                                       	|
|    DELETE   	| http://localhost:3001/api/users/:userId/friends/:friendId 	| To remove a friend `friendId` from a user `userId`  friend list                                                                                                     	|

### Thoughts:

| HTTP Method 	| Route                                         	| Description                                                                                                                                                                                                                                                     	|
|:-----------:	|-----------------------------------------------	|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------	|
|     GET     	| http://localhost:3001/api/thoughts            	| To get all thoughts                                                                                                                                                                                                                                             	|
|     GET     	| http://localhost:3001/api/thoughts/:thoughtId 	| To get a single thought by its _id `thoughtId`                                                                                                                                                                                                                  	|
|     POST    	| http://localhost:3001/api/thoughts            	| Creates new thought and push the created thought's _id to the associated user's thoughts array field). <br>Sample Data:  <pre>  { <br>  "thought_text": "here's a cool thought", <br>  "username": "testUser",<br>  "userId" : "5dfghsgfhghjk435"  <br>} </pre> 	|
|     PUT     	| http://localhost:3001/api/thoughts/:thoughtId 	| To update a thought by its _id `thoughtId`                                                                                                                                                                                                                      	|
|    DELETE   	| http://localhost:3001/api/thoughts/:thoughtId 	| To delete a thought by its _id `thoughtId`                                                                                                                                                                                                                      	|

### Reactions:
| HTTP Method 	| Route                                                                               	| Description                                                             	|
|-------------	|-------------------------------------------------------------------------------------	|-------------------------------------------------------------------------	|
| POST        	| http://localhost:3001/api/thoughts/:thoughtId/reactions                             	| To create a reaction stored in a single thought's reactions array field 	|
| DELETE      	| http://localhost:3001/api/thoughts/:thoughtId/reactions?reactionId=6fdsgsgnhfdmhfdf 	| To pull and remove a reaction by the reaction's `reactionId` value      	|


## Screenshots

![App Screenshot](https://via.placeholder.com/468x300?text=App+Screenshot+Here)




## Application Demo Snippet
![blogger](https://user-images.githubusercontent.com/114820394/217341898-0a4584f5-f602-4f7a-9547-c36c68f11348.gif)

## Tech Stack


- JavaScript
- MongoDB
- Thunder Client (VSCode Extension)
- Node.js 
    - NPM (Express)
    - NPM (Mongoose)
- ES6+ Syntax


**Server:** Visual Studio Code


## Authors

- [@liquidmonks](https://www.github.com/liquidmonks)


![Logo](https://i.imgur.com/RXZyAtU.png)


## License

[MIT](https://choosealicense.com/licenses/mit/)