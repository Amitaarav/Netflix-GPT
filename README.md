# NetflixGPT - AI-Powered Movie Discovery

NetflixGPT is a cutting-edge, AI-driven movie browsing experience built with **React**, **Firebase**, and **Redux Toolkit**. It offers seamless authentication, personalized movie recommendations, and an intuitive UI for an immersive streaming experience.

---

## 🚀 Tech Stack
- **Frontend:** React (Vite), React Router, Tailwind CSS  
- **State Management:** Redux Toolkit  
- **Backend & Authentication:** Firebase (Authentication, Firestore, Hosting)  
- **Deployment:** Firebase Hosting  
- **Movie Data:** TMDb API  

---

## 📌 Features
### 🔹 Authentication (Sign In / Sign Up)
✅ Firebase Authentication (Email & Password) with Redux integration  
✅ Form validation using `useRef` & regex  
✅ Session persistence for auto-login  
✅ Prevents accidental form submission (`e.preventDefault()`)  

### 🔹 Browse Page (After Authentication)
✅ **Dynamic Header** with user profile & sign-out button  
✅ **Main Movie Section** with:  
   - **Auto-playing trailers** in the background  
   - **Movie title & description overlay**  
✅ **Personalized movie lists** categorized by genre  

### 🔹 NetflixGPT - AI-Powered Search
✅ **Smart search bar** for instant movie discovery  
✅ **Real-time AI-powered recommendations**  

### 🔹 Deployment & Hosting
✅ **Firebase Hosting** for seamless production deployment  
✅ **Secure & scalable backend** with Firebase  

---

## 🔧 Project Enhancements & Fixes
✅ **Fixed** sign-up user display name & profile picture update  
✅ **Redirect Handling:**  
   - If a user is **not logged in**, redirect `/browse` to the login page  
   - If a user is **logged in**, redirect `/` to `/browse`  
✅ **Performance Optimization:**  
   - **Unsubscribed** from `onAuthStateChanged` listener when the component unmounts to prevent memory leaks  
✅ **Code Improvements:**  
   - Used **constant variables** for strings like `photoUrl`  
   - Stored hardcoded values in `utils/constants.js`  
   - Registered TMDb, created an API key, and added it to `constants.js`  
   - **Fetched "Now Playing" movies** from TMDb and stored them in Redux  

### 🏗 **Component Structure**
```
- MainContainer
   ├── VideoBackground
   ├── VideoTitle
- SecondaryContainer
   ├── MovieList * n
   ├── Cards * n
```
✅ **Custom Hooks:** Fetch "Now Playing" movies  
✅ **Redux Store Update:** Created `movieSlice` for state management  
✅ **YouTube Trailer Embed:** Auto-plays & mutes trailers  
✅ **Tailwind CSS:** Styled the MainContainer beautifully  

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
- Create a **Firebase project** and enable:
  - **Authentication (Email/Password)**
  - **Firestore Database**
- Add your **Firebase config** to `.env`:
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
- The app will be available at `http://localhost:5173/`  

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
- Select **Hosting**, choose the **build folder**, and configure Firebase settings.  

### 3️⃣ Deploy to Firebase
```sh
npm run build
firebase deploy
```

---

## 📌 Command Reference
| Command | Description |
|---------|------------|
| `npm run dev` | Runs the project in development mode |
| `npm run build` | Creates an optimized production build |
| `firebase deploy` | Deploys the app to Firebase Hosting |

---

## 🎯 Conclusion
NetflixGPT is a **modern, AI-powered movie discovery platform** with seamless authentication, personalized recommendations, and an immersive UI. Whether you're a developer exploring **React, Firebase, and Redux** or a movie enthusiast looking for an innovative experience, this project is built for you! 🚀  


