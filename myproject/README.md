# Sweets web site

This project is a comprehensive system designed to manage a health fund for corona patients. It facilitates various actions such as adding, updating, and deleting members, as well as viewing all members' details at a glance.

## Description

The system provides the following functionalities:

#### **login and sign up**

### Manager options
1. **Adding a new sweet**: Allows adding a new sweet to the sweets system.
2. **Deleting a sweet**: Enables removing a sweet from the system.
3. **Viewing sweets**: Provides a comprehensive view of all sweets, including sweet's details.

### Register User options
1. **Shopping cart options**: Allows Managing the shopping cart by adding to the cart, deleting and the number of items.
2. **Order**: Adding the order to the database with the user's details and the address and order details.
3. **Viewing sweets**: Provides a comprehensive view of all sweets, including sweet's details.

### User options
1. **Shopping cart options**: Allows Managing the shopping cart by adding to the cart, deleting and the number of items.
2. **Viewing sweets**: Provides a comprehensive view of all sweets, including sweet's details.
## Prerequisites

## Prerequisites

Before running the project, make sure you have the following installed:

- [Node.js](https://nodejs.org)
- [MongoDB](https://www.mongodb.com)
- [React](https://react.dev/)

## Dependencies

### Frontend (React)

- **react**: A JavaScript library for building user interfaces.
- **react-dom**: React package for working with the DOM.
- **react-router-dom**: Declarative routing for React applications.
- **axios**: Promise-based HTTP client for the browser and Node.js.
- **react-hook-form**: Performant, flexible, and extensible forms with easy-to-use validation.
- **styled-components**: Visual primitives for the component age. Use the best bits of ES6 and CSS to style your apps without stress.
- **web-vitals**: Easily measure performance metrics of your website.

### UI Frameworks and Libraries

- **@mui/icons-material**: Material-UI icons as React components.
- **@mui/material**: React components that implement Google's Material Design.
- **@mui/styled-engine-sc**: A Material-UI styled engine for styled-components.
- **@emotion/react**: CSS-in-JS library designed for high performance style composition.
- **@emotion/styled**: Styled component implementation for Emotion.



### url
- **all-sweets**:http://localhost:3000/allsweets
- **sweet-details**:http://localhost:3000/allsweet/:id
- **add-sweet**:http://localhost:3000/addsweet
- **shopping-cart**:http://localhost:3000/basket
- **login**:http://localhost:3000/login
- **sign-up**:http://localhost:3000/signUp



## Backend Dependencies

- **cors**: CORS is a Node.js package for providing a Connect/Express middleware that can be used to enable CORS with various options.
- **dotenv**: Dotenv is a zero-dependency module that loads environment variables from a .env file into process.env.
- **express**: Express is a fast, unopinionated, minimalist web framework for Node.js.
- **joi**: Joi is a powerful schema description language and data validator for JavaScript.
- **mongoose**: Mongoose is a MongoDB object modeling tool designed to work in an asynchronous environment.

## Environment Variables

This project uses an `.env` file to manage environment variables. Below are the variables used and their descriptions:

- **PORT**: The port number on which the server will run. Default value is `4500`.
- **DB_NAME**: The name of the MongoDB database used by the project. Default value is `CandyKash`.
- **DB_CONNECTION**: The connection string for connecting to the MongoDB database. This should include the necessary credentials and connection details.

Make sure to create an `.env` file in the root directory of your project and populate it with the appropriate values.

## API Documentation

### CRUD Operations

| CRUD   | Response              | Description             | Method | Body | URL             | Query Params    |
|--------|-----------------------|------------------------|--------|------|-----------------|------------------|
| Create | New Sweet object    | Add a new sweet to the system | POST   | JSON Object | /api/sweet   | -----            |
| Read   | List of Sweet      | Retrieve a list of all sweets | GET    | -----        | /api/sweet   | Optional: `page`, `perPage`, `search` |
| Read   | Single Sweet by ID  | Retrieve details of a specific patient | GET    | -----        | /api/sweet/:id | 
 -----          |
| Delete | Deleted Sweet object| Delete a Sweet from the system | DELETE | -----        | /api/sweet/:id | -----          |
| Read   | Count of Sweets | Count | GET    | -----        | /api/cnt        | -----          |
| Read   | Count of All sweets | Count | GET    | -----        | /api/cntpatient | -----          |

### Additional Notes

To retrieve a patient by ID, enter the patient's ID, not the MongoDB ID.

## Request and Response Examples

### Create Sweet (POST /api/sweets)

```json
{
  
  "sweetCode": 29,
  "sweetName": "במבה",
  "sweetPrice": 3.5,
  "sweetAmount": 30,
  "__v": 0,
  "imgSweet": "https://www.pizohaizion.co.il/wp-content/uploads/2021/02/7290000066318.jpg",
  "type": "מלוחים",
  "data": "חטיף בוטנים אוסם\n80 גר"
},
```


```

### Additional Notes

To update a patient, you may enter the following fields: firstName, lastName, telephonNum, phonNum, receivingVaccineDate. If any of these fields are not filled, you may update positiveDate and recoveryDate.

## Usage

### Installation

1. Clone the repository to your local machine:

   ```bash
   git clone 
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Run the server:

   ```bash
   npm start
   ```

## Screenshots

Here are some screenshots of the project:

![All Patients](https://github.com/SaraFei/HaddassimProject/blob/master/images/allPatients.png)

![Pagination](https://github.com/SaraFei/HaddassimProject/blob/master/images/pagination.png)

![Edit](https://github.com/SaraFei/HaddassimProject/blob/master/images/edit.png)

![Validation](https://github.com/SaraFei/HaddassimProject/blob/master/images/validation%20(2).png)

![Validation](https://github.com/SaraFei/HaddassimProject/blob/master/bonusImages/%E2%80%8F%E2%80%8F%D7%A6%D7%99%D7%9C%D7%95%D7%9D%20%D7%9E%D7%A1%D7%9A%20(495).png)


![Validation](https://github.com/SaraFei/HaddassimProject/blob/master/images/validation.png)

![Validation](https://github.com/SaraFei/HaddassimProject/blob/master/images/delete%20(2).png)

![After Delete](https://github.com/SaraFei/HaddassimProject/blob/master/images/afterDeletePatient.png)

![Delete](https://github.com/SaraFei/HaddassimProject/blob/master/images/delete.png)

![Details](https://github.com/SaraFei/HaddassimProject/blob/master/images/details%20(2).png)

![Details](https://github.com/SaraFei/HaddassimProject/blob/master/images/details%20(3).png)

![Details](https://github.com/SaraFei/HaddassimProject/blob/master/images/details%20(4).png)

![Details](https://github.com/SaraFei/HaddassimProject/blob/master/images/details.png)


![coronaDetails](https://github.com/SaraFei/HaddassimProject/blob/master/bonusImages/%E2%80%8F%E2%80%8F%D7%A6%D7%99%D7%9C%D7%95%D7%9D%20%D7%9E%D7%A1%D7%9A%20(494).png)
