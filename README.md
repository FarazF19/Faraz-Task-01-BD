# Express App

This Express.js application provides a structured API framework with routing for users, students, tutors, and admins. The app includes basic CRUD operations and validation for POST requests.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Folder Structure](#folder-structure)
- [Controllers](#controllers)
- [Middlewares](#middlewares)
- [Routes](#routes)
- [Validation](#validation)
- [Error Handling](#error-handling)
- [License](#license)

## Installation

Before running the app, ensure that Node.js is installed on your system. Install the necessary dependencies by running:

```bash
npm install
```

## Usage

To start the application in development mode, use:

```bash
npm run dev
```

This command will start the server using `nodemon`, which automatically restarts the server when file changes are detected.

Alternatively, start the server in production mode using:

```bash
npm start
```

## Folder Structure

The project is organized as follows:

```
project-root/
│
├── bin/
│   └── www               # Entry point of the application
│
├── controllers/
│   ├── adminController.js   # Handles admin-related operations
│   ├── authController.js    # Handles authentication-related operations
│   ├── studentController.js # Handles student-related operations
│   └── tutorController.js   # Handles tutor-related operations
│
├── middlewares/
│   ├── admin.js             # Validation middleware for admin routes
│   ├── student.js           # Validation middleware for student routes
│   ├── tutor.js             # Validation middleware for tutor routes
│   └── validate.js          # General validation middleware
│
├── routes/
│   ├── adminRouter.js       # Routes for admin-related requests
│   ├── authRouter.js        # Routes for authentication-related requests
│   ├── studentRouter.js     # Routes for student-related requests
│   ├── tutorRouter.js       # Routes for tutor-related requests
│   ├── index.js             # Main route handler
│   └── users.js             # Routes for user-related requests
│
├── node_modules/            # Project dependencies
├── app.js                   # Main application file
├── package.json             # Project dependencies and scripts
├── package-lock.json        # Locked versions of dependencies
└── README.md                # Project documentation
```

## Controllers

### Admin Controller (`adminController.js`)

- `getAllAdmins`: Retrieve a list of all admins.
- `createAdmin`: Create a new admin.
- `deleteAdmin`: Delete an admin.

### Auth Controller (`authController.js`)

- `login`: Handle user login.
- `register`: Handle user registration.

### Student Controller (`studentController.js`)

- `getAllStudents`: Retrieve a list of all students.
- `createStudent`: Create a new student.
- `deleteStudent`: Delete a student.

### Tutor Controller (`tutorController.js`)

- `getAllTutors`: Retrieve a list of all tutors.
- `createTutor`: Create a new tutor.
- `deleteTutor`: Delete a tutor.

## Middlewares

### Validation Middleware (`validate.js`)

Validation middleware has been created for each entity (Admin, Student, Tutor) to ensure that the data passed in POST requests meets certain criteria before being processed by the controllers.

- **Admin Middleware (`admin.js`)**: Validates admin-related data.
- **Student Middleware (`student.js`)**: Validates student-related data.
- **Tutor Middleware (`tutor.js`)**: Validates tutor-related data.

## Routes

### User Routes (`users.js`)

- **GET `/users`**: Retrieve all users.
- **POST `/users`**: Create a new user (with validation).
- **DELETE `/users/:id`**: Delete a user by ID.

### Student Routes (`studentRouter.js`)

- **GET `/student`**: Retrieve all students.
- **POST `/student`**: Create a new student (with validation).
- **DELETE `/student/:id`**: Delete a student by ID.

### Tutor Routes (`tutorRouter.js`)

- **GET `/tutor`**: Retrieve all tutors.
- **POST `/tutor`**: Create a new tutor (with validation).
- **DELETE `/tutor/:id`**: Delete a tutor by ID.

### Admin Routes (`adminRouter.js`)

- **GET `/admin`**: Retrieve all admins.
- **POST `/admin`**: Create a new admin (with validation).
- **DELETE `/admin/:id`**: Delete an admin by ID.

### Authentication Routes (`authRouter.js`)

- **POST `/auth/login`**: Authenticate a user and log them in.
- **POST `/auth/register`**: Register a new user.

## Validation

POST requests for creating users, students, tutors, and admins include validation middleware that checks the validity of the incoming data (e.g., required fields, correct data types). This ensures that only valid data is passed to the controllers for processing.

## Error Handling

The application includes a default error handler that catches 404 errors and forwards them to a custom error handler.

### Catch 404

Any undefined routes will result in a 404 error, which is forwarded to the custom error handler.

### Custom Error Handler

The custom error handler will display detailed error messages during development. In production, it will only show generic error messages to the user.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more information.

```

This `README.md` file provides a detailed overview of your Express application, including its structure, the dummy APIs you've implemented, the validation in place for POST requests, and error handling. You can further customize it based on additional features or specific implementation details of your application.
```
