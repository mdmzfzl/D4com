# DFour-Commerce
## Your e-commerce venture starts here!

DFour-Commerce is a custom eCommerce platform built using JavaScript, React, Redux, Express & MongoDB, with full featured shopping cart with PayPal & credit/debit payments, customer management, products & orders, product rating & review system, product search & more. It was a project spanning two semesters, done for our full-stack development track offered by **IIIT Sri City** under the supervision of **Dr. Himangshu Sarma**. 

## Features
-   Full featured shopping cart
-   Product reviews and ratings
-   Top products carousel
-   Product pagination
-   Product search feature
-   User profile with orders
-   Admin product management
-   Admin user management
-   Admin order details page
-   Admin inventory visualization
-   Mark orders as delivered option
-   Checkout process (shipping, payment method and so on)
-   PayPal / credit card integration
-   Database seeding (products & users)

## Tech stack

DFour-Commerce uses a number of tech stacks to work properly:

- [ReactJS] - JS library for building user interfaces based on UI components
- [Redux] - Provides Frontend state management for applications
- [NodeJS] - Backend JavaScript runtime environment
- [ExpressJS] - Provides backend framework for Node.js
- [MongoDB] - DB used to store various information present in the application
- [Redis] - Caching DB used to improve performance
- [Docker] - Used to containerize the application

## Installation

**Note**: DFour-Commerce requires [Node.js](https://nodejs.org/) v14+ and [npm](https://www.npmjs.com/) v6+ to run properly.

**a. Clone the repository** 
```sh
git clone https://github.com/Logu-fosablanca/d4com_g33
```
**b. Set the .env variables:**
```sh
NODE_ENV = development
PORT = 5000
MONGO_URI = your mongodb uri of the Mongodb atlas (mongodb+srv://fosablanca:group33%40d4c@cluster0.9pxa8.mongodb.net/d4comm?retryWrites=true&w=majority) for this project
JWT_SECRET = 'abc123'
PAYPAL_CLIENT_ID = your paypal client id (AUqUkKRYn6jSo9rbRdtWmSIwGOEtM0UKdUzlD01oBXwWkmpY5NYIlj9VbbvLisbCXbqCqvL_29Ila5vV) for this project 
```
**c. Install all dependencies:**
```sh
npm install
cd frontend
npm install
```
**d. Run:**
```sh
# Run frontend (:3000) & backend (:5000)
npm run dev

# Run backend only
npm run server
```
## Deployment
```sh
# Create frontend prod build
cd frontend
npm run build
```
## Database Seeding
The following commands can be used to seed the database with some sample users and products data. It can be used to destroy all data as well.
```sh
# Import data
npm run data:import

# Destroy data
npm run data:destroy
```
**Sample user login information (for testing):**
```sh
admin@example.com (Admin)
123456

john@example.com (Customer)
123456

jane@example.com (Customer)
123456
```

## Live application 
The live demo of the application, which is hosted on Heroku can be found on the link:
https://d4commerce.herokuapp.com/




## Packages

DFour-Commerce is currently extended with the following packages:

### Client-side npm packages
   - axios
  - mongodb
   - react
    - react-bootstrap
    - react-dom
    - react-helmet
    - react-magnifier
    - react-paypal-button-v2
    - react-redux": "^7.2.1",
    - react-router-bootstrap
    - react-router-dom
    - react-scripts
    - recharts
    - redux
    - redux-devtools-extension
    - redux-thunk
    - url

### Server-side npm packages
- body-parser
- dotenv
- cors
- express
- express-jwt
- nodemon
- redisClient
- jsonwebtoken
- mongoose
- uuid (v4)
- morgan
- multer
- uuid
- swagger-ui-express
- yamljs


## To build react app

For production release (client side app):

```sh
npm run build
```
To run it with docker
```sh
npm run build
```


## Contributors
### Group - 33

 - Logu R (S20190010111)  
 - Romy Savin Peter ( S20190010153)  
 - Muzakkir Fazal ( S20190010121)  
 - Krushang Sirikonda ( S20190010164)  
 - Abdulrahman Syed (S20190010002)

## License
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

Copyright (c) 2022 D4C Inc.
