# express-library-app

An app to provide an online catalog for a small local library, where users can browse available books and manage their accounts.

The catalog consists of book definitions which have associated book instances. Books also have an associated Genre and Author. API definitions supporting the CRUD operations for these data models are:

## Book CRUD routes

| Operation      | API route        | HTTP method |
| -------------- | ---------------- | ----------- |
| Index          | /                | GET         |
| Create a book  | /book/create/    | GET         |
| Create a book  | /book/create/    | POST        |
| Delete a book  | /book/:id/delete | GET         |
| Delete a book  | /book/:id/delete | POST        |
| Update a book  | /book/:id/update | GET         |
| Update a book  | /book/:id/update | POST        |
| Fetch one book | /book/:id        | GET         |
| List all books | /books           | GET         |

## Book Instance CRUD routes

| Operation               | API route                | HTTP method |
| ----------------------- | ------------------------ | ----------- |
| Index                   | /                        | GET         |
| Create a book instance  | /bookinstance/create/    | GET         |
| Create a book instance  | /bookinstance/create/    | POST        |
| Delete a book instance  | /bookinstance/:id/delete | GET         |
| Delete a book instance  | /bookinstance/:id/delete | POST        |
| Update a book instance  | /bookinstance/:id/update | GET         |
| Update a book instance  | /bookinstance/:id/update | POST        |
| Fetch one book instance | /bookinstance/:id        | GET         |
| List all book instances | /bookinstances           | GET         |

## Author CRUD routes

| Operation        | API route          | HTTP method |
| ---------------- | ------------------ | ----------- |
| Create an author | /author/create/    | GET         |
| Create an author | /author/create/    | POST        |
| Delete an author | /author/:id/delete | GET         |
| Delete an author | /author/:id/delete | POST        |
| Update an author | /author/:id/update | GET         |
| Update an author | /author/:id/update | POST        |
| Fetch one author | /author/:id        | GET         |
| List all authors | /authors           | GET         |

## Genre CRUD routes

| Operation       | API route         | HTTP method |
| --------------- | ----------------- | ----------- |
| Create a Genre  | /genre/create/    | GET         |
| Create a Genre  | /genre/create/    | POST        |
| Delete a Genre  | /genre/:id/delete | GET         |
| Delete a Genre  | /genre/:id/delete | POST        |
| Update a Genre  | /genre/:id/update | GET         |
| Update a Genre  | /genre/:id/update | POST        |
| Fetch one Genre | /genre/:id        | GET         |
| List all Genres | /genres           | GET         |

## ToDo:

Add the following use cases with user CRUD and auth functionality implementations:

1. Sign up: Users can register by creating a new account using an email address
2. User list: Any visitor can see the list of all registered users
3. Authentication: Registered users can sign in and sign out
4. Protected user profile: Only registered users can view individual user details after signing in
5. Authorized user edit and delete: Only a registered and authenticated user can edit or remove their own user account details

## API endpoints for User CRUD operations

To enable and handle user CRUD operations on the user database, the backend will implement and expose API endpoints that the frontend can use in the views, as follows:

| Operation      | API route                | HTTP method |
| -------------- | ------------------------ | ----------- |
| Create a user  | /api/users               | POST        |
| List all users | /api/users               | GET         |
| Fetch a user   | /api/users/:userId       | GET         |
| Update a user  | /api/users/:userId       | PUT         |
| Delete a user  | /api/users/:userId       | DELETE      |
| User sign-in   | /auth/signin             | POST        |
| User sign-out  | (optional) /auth/signout | GET         |
