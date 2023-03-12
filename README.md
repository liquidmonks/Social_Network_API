
# NOSQL Social Network API

## Description
API for a social network that uses a NoSQL database to allow website to handle large amounts of unstructured data.
when you enter the command to invoke the application, your server is started and the Mongoose models are synced to the MongoDB database then you are able to successfully create users, create and delete reactions to thoughts , add to and remove friends from a user’s friend list.

## Table of Content
- [NOSQL Social Network API](#nosql-social-network-api)
  - [Description](#description)
  - [Table of Content](#table-of-content)
  - [Features](#features)
  - [Technology and Methodology](#technology-and-methodology)
  - [Installation](#installation)
    - [Users:](#users)
    - [Friends:](#friends)
    - [Thoughts:](#thoughts)
    - [Reactions:](#reactions)
  - [Screenshots](#screenshots)
  - [Application Demo Snippet](#application-demo-snippet)
  - [Tech Stack](#tech-stack)
  - [Authors](#authors)
  - [License](#license)

## Features

- Allow a user to GET all users from a MongoDB database via API routes.
- Allow a user to GET a user by user ID from a MongoDB database via API routes.
- Allow a user to update a user by user ID from a MongoDB database via API routes.
- Allow a user to DELETE a user by user ID from a MongoDB database via API routes.
- Allow a user to add a friend via a POST route in a MongoDB database via API routes.
- Allow a user to POST a thought by user ID in a MongoDB database via API routes.
- Allow a user to update a thought by thought ID from a MongoDB database via API routes.
- Allow a user to GET all user thoughts from a MongoDB database via API routes.
- Allow a user to GET a user thought byt thought ID from a MongoDB database via API routes.
- Allow a user to DELETE all user thoughts from a MongoDB database via API routes.
- Allow a user to POST a reaction from a MongoDB database via API routes.
- Allow a user to DELETE a reaction from a MongoDB database via API routes.

## Technology and Methodology

The application utilizes the MongoDB database and ES6 Javascript programming. The user interface is a REST API Client Extension that sends request and solicits responses from a backend MongoDB database through javascript based api controllers. 

## Installation

Install package.json dependencies.
- Run "npm i"

Install VSCode extensions.
- MongoDB
- Thunder Client

Install MongoDB on your local machine.

Execute the program on VSCode:
- Run "npm start"
- Open Thunder Client VSCode extension

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
|     POST    	| http://localhost:3001/api/thoughts            	| Creates new thought and push the created thought's _id to the associated user's thoughts array field). <br>Sample Data:  <pre>  { <br>  "thought_text": "This is a thought by TestUserOne", <br>  "username": "testUserOne",<br>  "userId" : "TestUserOne"  <br>} </pre> 	|
|     PUT     	| http://localhost:3001/api/thoughts/:thoughtId 	| To update a thought by its _id `thoughtId`                                                                                                                                                                                                                      	|
|    DELETE   	| http://localhost:3001/api/thoughts/:thoughtId 	| To delete a thought by its _id `thoughtId`                                                                                                                                                                                                                      	|

### Reactions:
| HTTP Method 	| Route                                                                               	| Description                                                             	|
|-------------	|-------------------------------------------------------------------------------------	|-------------------------------------------------------------------------	|
| POST        	| http://localhost:3001/api/thoughts/:thoughtId/reactions                             	| To create a reaction stored in a single thought's reactions array field 	|
| DELETE      	| http://localhost:3001/api/thoughts/:thoughtId/reactions/reactionId     	|



## Application Demo Snippet
  
Users:

https://user-images.githubusercontent.com/114820394/224566915-03971416-cdc7-41f9-b714-1509dcec17c8.mp4

Thoughts:
  
https://user-images.githubusercontent.com/114820394/224566957-9287626d-7b1e-4fdb-a53b-0dac020cbf34.mp4

Friends:
  
https://user-images.githubusercontent.com/114820394/224567244-b01a2c67-def5-438f-a979-cb90bd184a82.mp4

Reactions:
  
https://user-images.githubusercontent.com/114820394/224567288-64ee4ccb-ea34-401f-9c55-158995ecf61a.mp4

Delete User & Thought:
  
https://user-images.githubusercontent.com/114820394/224567307-4ec97e70-15fe-4430-b95f-f13281dccdc5.mp4


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
