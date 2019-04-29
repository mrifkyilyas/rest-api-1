# rest-api
## List of user routes:

Route            | HTTP   | Request                     | Response
---------------- | ------ | --------------------------- | ----------------------------------------------------
api/register    | POST   | body(email:String, password:String) | On success a new user will be created in the                                                                    database, an error will be shown if fail
api/login       | POST   | body(email:String, password:String)       | On success a token will be generated in local                                                                   storage, an error will be shown if fail, example token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c

## List of todos routes:

|       ROUTE      	| HTTP   	| Request                                                                                                                                                                                                              	| REspond                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      	| Description                              	|
|:----------------:	|--------	|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------	|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------	|------------------------------------------	|
| `/api/todos`     	| GET    	| none                                                                                                                                                                                                                 	|   array of object from todos list  [     {         "id": <value id>,         "title": "<value title>",         "description":"<value description>",         "UserId": <value userid>,         "createdAt": "<value createdAt>",         "updatedAt": "<value updateAt>"     },     {         "id": <value id>,         "title": "<value title>",         "description":"<value description>",         "UserId": <value userid>,         "createdAt": "<value createdAt>",         "updatedAt": "<value updateAt>"     },{} ] 	| Get all user's todos                     	|
| `/api/todos/:id` 	| GET    	|  access_token (eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c)                                          	|  object from todos list {         "id": <value id>,         "title": "<value title>",         "description":"<value description> ",         "UserId": <value userid> ,         "createdAt": "<value createdAt>",         "updatedAt": "<value updateAt>"     }  ,                                                                                                                                                                                                                                                            	| Get a single todo (Owner only)           	|
|  `/api/todos`    	| POST   	| access_token (eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c ) body(title:string, description:string)   	|  object from created list   {        "id": <value id>,         "title": "<value title>",         "description":"<value description>",         "UserId": <value userid>,         "createdAt": "<value createdAt>",         "updatedAt": "<value updateAt>"     }                                                                                                                                                                                                                                                              	| Create a todo (Authenticated users only) 	|
| `/api/todos/:id` 	| DELETE 	| access_token (eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c )                                          	|  success message // unauthorize or bad request                                                                                                                                                                                                                                                                                                                                                                                                                                                                               	| Delete a todo (Owner only)               	|
| `/api/todos/:id` 	| PUT    	| access_token (eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c ) body(title:string, description:string)   	| success message // unauthorize or bad request                                                                                                                                                                                                                                                                                                                                                                                                                                                                                	| Update a todo with new info (Owner only) 	|
| `/api/todos/:id` 	| PATCH  	| access_token (eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c ) body(title:string,OR description:string) 	| success message // unauthorize or bad request                                                                                                                                                                                                                                                                                                                                                                                                                                                                                	| Update a todo with new info (Owner only) 	|                       
### Installation

requires [Node.js](https://nodejs.org/) v4+ to run.

Install the dependencies and devDependencies and start the server.

```sh
$ npm init
$n pm install sequelize pg express
$ sequelize init
$ sequelize db:create
$ sequelize db:migrate
$ npm run dev 

```


License
----

MRI


**Free Software, Hell Yeah!**
