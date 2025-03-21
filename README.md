
# Netflix GPT - AI-Powered Movie Discovery

NetflixGPT is an AI-driven movie browsing experience built with **React**, **Firebase**, and **Redux Toolkit**. It provides seamless authentication, personalized movie recommendations, and an intuitive UI for a next-level streaming experience.

---

## 🚀 Tech Stack
- **Frontend:** React (Vite), React Router, Tailwind CSS
- **State Management:** Redux Toolkit
- **Backend & Auth:** Firebase (Authentication, Firestore, Hosting)
- **Deployment:** Firebase Hosting
- **Movie Data:** TMDb API (Free to access)

---

## 📌 Features
### 🔹 Authentication (Sign In / Sign Up)
✅ Firebase Authentication (Email & Password) with Redux Store Integration.  
✅ Form validation using `useRef` & regex validation.  
✅ Session persistence to keep users logged in.  
✅ Prevents form auto-submission using `e.preventDefault()`.

### 🔹 Browse Page (After Authentication)
✅ Dynamic **header** with user profile & sign-out button.  
✅ **Main Movie Section** with:  
   - **Auto-playing trailers** in the background.  
   - **Movie title & description overlay**.  
✅ **Personalized movie lists** categorized by genre.

### 🔹 NetflixGPT - AI-Powered Search
✅ **Smart search bar** for instant movie discovery.  
✅ **Real-time movie recommendations** powered by AI.  

### 🔹 Deployment & Hosting
✅ **Firebase Hosting** for seamless production deployment.  
✅ **Secure & scalable backend** powered by Firebase.  

✅ **Bug fixed:** Sign up user display name and profile picture update
-- If any user is not logged in redirect /browse to login page and vice-versa

✅ **Good Practice:** powered by Firebase.  

- Unsubscribed to the onAuthStateChanged listener when the component unmounts to prevent memory leaks.

     --whenever we see string eg: photoUrl use constant variable to store it and use it later
     -- added hardcoded values to the utils/constants.js
     -- registered TMDB & created an app and got the api key and added it to the constants.js
     -- Got Data from TMDB nowplaying 
     -- put this data in Redux store and use it in the component

-  MainContainer
      --VideoBackground
      -- VideoTitle
   -- Secondary Container
      -- MovieList * n
      -- Cards * n

-- Custom hooks for now playing movie list API
-- Created movieSlice
-- update store woth movie data
- planning for mainContainer and SecondaryContainer
-- Fetch data from API and store it in Redux store
-- Embeded the Youtube video and make it autoplay and mute
-- Tailwind css to make mainContainer look awesome
---

## 📌 Installation & Setup
### 1️⃣ Clone the Repository
```sh
git clone https://github.com/yourusername/netflix-gpt.git
cd netflix-gpt
```

### 2️⃣ Install Dependencies
```sh
npm install
```

### 3️⃣ Configure Firebase
- Create a Firebase project and enable **Authentication (Email/Password)**.
- Set up **Firebase Firestore** for storing user details.
- Create a `.env` file and add your **Firebase config**:
```env
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
VITE_FIREBASE_APP_ID=your_app_id
```

### 4️⃣ Run the Project
```sh
npm run dev
```
- The app will run on `http://localhost:5173/`.

---

## 📌 Firebase Deployment
### 1️⃣ Install Firebase CLI
```sh
npm install -g firebase-tools
firebase login
```

### 2️⃣ Initialize Firebase
```sh
firebase init
```
- Select **Hosting**, choose **build folder**, and configure Firebase settings.

### 3️⃣ Deploy to Firebase
```sh
npm run build
firebase deploy
```

---

## 📌 Commands Reference (From `package.json`)
| Command | Description |
|---------|------------|
| `npm run dev` | Run the project in development mode |
| `npm run build` | Create an optimized production build |
| `firebase deploy` | Deploy the app to Firebase Hosting |

---

## 🎯 Conclusion
NetflixGPT is a **modern, AI-powered movie discovery platform** with seamless authentication, personalized recommendations, and an immersive UI. Whether you're a developer exploring **React, Firebase, and Redux** or a movie enthusiast looking for an innovative experience, this project is built for you! 🚀  

Feel free to contribute and enhance NetflixGPT! 😊🔥