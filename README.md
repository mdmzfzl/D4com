# D4C eCommerce Platform
A robust and scalable e-commerce website made using the MERN(MongoDB, Express, React, and Node.js) stack, along with Redux for efficient state management. The website provides a seamless shopping experience for users, with features like a fully functional shopping cart, product reviews and ratings, and an intuitive product search capability. User profiles enable customers to track their orders, while the admin panel empowers administrators to manage products, users, and orders effectively. The integration of PayPal and credit card payment methods ensures secure and convenient transactions. Overall, the project delivers a high-quality and user-friendly e-commerce solution that caters to both customers and administrators.

## Features

- Full featured shopping cart
- Product reviews and ratings
- Top products carousel
- Product pagination
- Product search feature
- User profile with orders
- Admin product management
- Admin user management
- Admin Order details page
- Admin inventory Visualisation 
- Mark orders as delivered option
- Checkout process (shipping, payment method, etc)
- PayPal / credit card integration
- Database seeder (products & users)

## Installation Guide


### Env Variables
 Open .env file in the root directory and add the following

```
NODE_ENV = development
PORT = 5000
MONGO_URI = your mongodb url of the Mongodb atlas (mongodb+srv://fosablanca:group33%40d4c@cluster0.9pxa8.mongodb.net/d4comm?retryWrites=true&w=majority) for this project
JWT_SECRET = 'abc123'
PAYPAL_CLIENT_ID = your paypal client id (AUqUkKRYn6jSo9rbRdtWmSIwGOEtM0UKdUzlD01oBXwWkmpY5NYIlj9VbbvLisbCXbqCqvL_29Ila5vV) for this project 
```

### Install Dependencies (frontend & backend)

```
> npm install
> cd frontend
\frontend> npm install
```

### Run

```
# Run frontend (:3000) & backend (:5000)
npm run dev

# Run backend only
npm run server
```

## Build & Deploy

```
# Create frontend prod build
cd frontend
npm run build
```

### Seed Database

You can use the following commands to seed the database with some sample users and products as well as destroy all data

```
# Import data
npm run data:import

# Destroy data
npm run data:destroy
```

Sample User Logins
```
admin@example.com (Admin)
123456

john@example.com (Customer)
123456

jane@example.com (Customer)
123456
```
