# Introduction

This project is part of a technical test. It is a course management app created with React (Create React App with TypeScript) and using Bootstrap as CSS framework.
# What is the app?

As mentioned above, this is a course management demo app. It allows creations of users (either students or instructors) to consult their courses. Instructors - and only instructors - can add, edit or delete courses. A course is defined by its: name, description, category, subject, start/end date and number of students. Any user that registers to this app can consult courses. 

To register you must go to the registration form and enter your information which consists of: First name, last name, nickname, password and role (student or instructor).

## Dependencies
The project is made with several dependencies installed:
- React
- Bootstrap
- React Router DOM (for routing)

## Main functionalities
The application provide the following functionalities:
- Authentication (Register/Login and Logout)
- Add courses (for instructors)
- Consult courses (for both students and instructors)
- Search course by name (for both students and instructors)
- Search course by timeframe (for both students and instructors): if the timeframe is invalid or there were no results, it will display all courses by default.

## How the app works
for storing data (users and courses), I implemented a logic by combining two useful hooks: useReducer and useContext together to perform both read and write functions. This way I could achieve keeping up a general state of the app without the use of a database.
## How to run the app
To run the app, type the following commands
```console
$ git clone https://github.com/youssefjj/course-management-test.git # Clone repo
$ cd course-management-test # Access workdir
$ npm install # Install dependencies
$ npm start # Start React app
```

# Limitations
- As mentioned above, combining the two hooks useReducer and useContext can be beneficial when we want to implemented complex logic simply, but it is not good performance-wise(each change of state forces a re-render of nearly the entire app). We must resort to other methods such as using other React State Management libraries like the well-renowned Redux.
- The application is still not entirely made with mobile-first responsive design approach. This is largely due to time constraints.
- Validation for forms is still lackluster. Messages should be shown below every field in case of error. I only did validation on submission with an alert message for required fields.

