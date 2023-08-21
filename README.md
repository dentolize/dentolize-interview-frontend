# Fullstack Developer Task

Welcome to the Fullstack Developer Task! This is an opportunity for you to showcase your skills in creating a web application using React, TypeScript, and GraphQL.

## Overview

This repository contains a Vite React TypeScript application as the frontend and a mock GraphQL server to simulate a backend. The goal of this task is to create a simple Customer Relationship Management (CRM) Dashboard that displays customer information and their corresponding orders.

## Getting Started

### Prerequisites

- Node.js
- Yarn package manager

### Running the Project

1. Clone the repository:
   
   ```git clone <repository_url>```
   
   ```cd <repository_name>```

2. Install the required dependencies:
   
   ```yarn install```

3. Start the development servers:
   
   ```yarn dev```

4. Open a browser and visit:
   - React application: [http://localhost:3000](http://localhost:3000)
   - GraphQL server and GraphiQL playground: [http://localhost:4000](http://localhost:4000)

## Task Instructions

In this task, you will be creating a CRM Dashboard with the following features:

### Customer List

1. Display a list of customers on the main page. Each customer entry should include the customer's name, email, and phone number.

### Customer Details

2. When a user clicks on a customer in the list, navigate to a separate page that displays the selected customer's details.

3. On the customer details page, display the customer's name, email, phone number, and a list of their orders.

4. For each order, display the order number, order date, and order status.

### Routing

5. Implement routing using react-router. The application should have two routes:
   - `/:` Displays the customer list.
   - `/customer/:id` Displays the details of a specific customer based on their id.

### Add New Customer

6. Create a form that allows users to add new customers. The form should collect the following information:

   - First Name
   - Last Name
   - Email
   - Phone Number

7. Validate the form input to ensure that all fields are filled and the email format is correct.

8. When the form is submitted, send a GraphQL mutation to add the new customer to the db.json file.

### Styling

9. Style your application using styled-components. Ensure that the design is clean and user-friendly.

10. Make sure your application is responsive, and it looks good on both desktop and mobile devices.

### Coding Best Practices

11. Write clean, readable, and well-organized code. Use appropriate naming conventions and code comments.

12. Handle errors gracefully and provide helpful feedback to users when something goes wrong.

### Submission

Once you've completed the task, create a pull request on this repository with your changes. Include any necessary documentation or explanations in the pull request description.

## Evaluation Criteria

We will evaluate your submission based on the following criteria:

- Code quality and readability
- Adherence to best practices
- User interface design and responsiveness
- Proper use of GraphQL queries and mutations
- Error handling and validation
- Completion of the task requirements

We're excited to see what you come up with. Good luck!
