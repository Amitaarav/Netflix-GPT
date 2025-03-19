
## Netflix GPT

- Create a new React app with Vite and     React Router
- Configure tailwindcss/vite 4.0.14 version
- Header
- Login Form
- Sign Up Form : Converting same form ( Log In Form ) to sign up form and sign up form contain Name, Email, and Password
- Validation to big forms ie when we are given a form with multiple fields we need to validate each field for that we use Formik library but here maximum fields are 3 so we can use simple validation
     - Form validation 
        - useRef Hook to get the value of the input fields ( It lets us reference a value that's not needed fror rendering)
        - validation logic in utils folder
            - Regex for email validation
            - to store the email and password in local storage we can either use state variable or we can use reference here comes useRef hook
            -- On clicking button it is refreshing the page because it is trying to submit the form e.preventDefault() is used to prevent the default behaviour of the form..this web issue
            actually it calls on submit method of form which is refreshing the page.. Here we don't have submit method so we can use e.preventDefault() to prevent the default behaviour of the form
- Firebase setup
- Firebase deployment
- Firebase Authentication 
        - email and password authentication implemented and storing the user data using redux store then to firebase
        - redux tool kit
          npm i -D @reduxjs/toolkit react-redux
- Firebase Hosting

## Features
- login/signup page
       - sign in / sign up form
       - redirect to browse page after authentication
- Browse page (comes after authentication)
    - header
    - Main Movie
        - Trailer in Background
        - Title & Description
        - Movie Suggestions
            - MoviesLists * Number of movies
- NetflixGPT
    - Search Bar
    - Movie Suggestions
        - MoviesLists * Number of movies
