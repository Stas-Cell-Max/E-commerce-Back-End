## The Scope of work
 To build the back end for an e-commerce site. You’ll take a working Express.js API and configure it to use Sequelize to interact with a MySQL database.




## User Story:
AS A manager at an internet retail company
I WANT a back end for my e-commerce website that uses the latest technologies
SO THAT my company can compete with other e-commerce companies

## Acceptance Criteria:
GIVEN a functional Express.js API
WHEN I add my database name, MySQL username, and MySQL password to an environment variable file
THEN I am able to connect to a database using Sequelize
WHEN I enter schema and seed commands
THEN a development database is created and is seeded with test data
WHEN I enter the command to invoke the application
THEN my server is started and the Sequelize models are synced to the MySQL database
WHEN I open API GET routes in Insomnia Core for categories, products, or tags
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia Core
THEN I am able to successfully create, update, and delete data in my database

##  In order to Gett Started
we’ll need to use the MySQL2Links to an external site. and SequelizeLinks to an external site. packages to connect our Express.js API to a MySQL database and the dotenv packageLinks to an external site. to use environment variables to store sensitive data, like our MySQL username, password, and database name.

Use the schema.sql file in the db folder to create the database using MySQL shell commands. Use environment variables to store sensitive data, like my MySQL username, password, and database name.

##  Database Models
our database should contain the following four models, including the requirements listed for each model:

-  Category

id

Integer

Doesn't allow null values

Set as primary key

Uses auto increment

category_name

String

Doesn't allow null values

-  Product

id

Integer

Doesn't allow null values

Set as primary key

Uses auto increment

product_name

String

Doesn't allow null values

price

Decimal

Doesn't allow null values

Validates that the value is a decimal

stock

Integer

Doesn't allow null values

Set a default value of 10

Validates that the value is numeric

category_id

Integer

References the category model's id

-  Tag

id

Integer

Doesn't allow null values

Set as primary key

Uses auto increment

tag_name

String

-  ProductTag

id

Integer

Doesn't allow null values

Set as primary key

Uses auto increment

product_id

Integer

References the product model's id

tag_id

Integer

References the tag model's id

##  Associations
we'll need to execute association methods on our Sequelize models to create the following relationships between them:

Product belongs to Category, as a category can have multiple products but a product can only belong to one category.

Category has many Product models.

Product belongs to many Tag models. Using the ProductTag through model, allow products to have multiple tags and tags to have many products.

Tag belongs to many Product models.

- Make sure you set up foreign key relationships that match the column we created in the respective models.
- Fill Out the API Routes to Perform RESTful CRUD Operations
Fill out the unfinished routes in product-routes.js, tag-routes.js, and category-routes.js to perform create, read, update, and delete operations using your Sequelize models.

- Be sure to look at our module project's code for syntax help and use your model's column definitions to figure out what req.body will be for POST and PUT routes!

##  Seed the Database
After creating the models and routes, run npm run seed to seed data to your database so that you can test your routes.

##  Sync Sequelize to the Database on Server Start
Create the code needed in server.js to sync the Sequelize models to the MySQL database on server start.

## Project Outline

1. Setup and Configuration:

Install MySQL2, Sequelize, and dotenv packages.
Create a .env file to store your MySQL username, password, and database name.
Use schema.sql to create your MySQL database.

2. Database Models:

Create four models: Category, Product, Tag, and ProductTag.
Define the required fields and characteristics for each model as specified.

3. Associations:

Set up associations between models:
Product belongs to Category.
Category has many Product models.
Product belongs to many Tag models through ProductTag.
Tag belongs to many Product models.

4. API Routes:

Complete the API routes in product-routes.js, tag-routes.js, and category-routes.js.
Implement CRUD (Create, Read, Update, Delete) operations for each route.

5. Seed the Database:

Run npm run seed to seed data into your database for testing.

6. Sync Sequelize with the Database:

Modify server.js to sync Sequelize models to the MySQL database on server start.