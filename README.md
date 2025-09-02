# ⚡ Next.js App (Todo-app)

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app), featuring the modern **App Router**, custom layout, and Google Fonts integration.

---

## 🚀 Getting Started

To get started with this project, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

## 🔥 Firebase Setup

This project uses Firebase Authentication and Firestore for managing todos. Follow these steps carefully:

### 1. Create a Firebase Project

Go to [Firebase Console](https://console.firebase.google.com)
.

Click Add project.

Enter a project name (example: nextjs-todoapp).

(Optional) Disable Google Analytics for this project.

Click Create project and wait until it’s ready.

### 2. Register a Web App

In your Firebase project dashboard, click the Web (</>) icon to add a web app.

Enter an app nickname (example: todoapp-web).

(Optional) Check the box for Set up Firebase Hosting if you want to deploy later.

Click Register app.

Firebase will generate a configuration object containing keys like apiKey, authDomain, etc. Keep this handy for later.

### 3. Enable Authentication

In the left sidebar, click Authentication.

Click Get Started.

Go to the Sign-in method tab.

Enable the following:

Google → Enable and save.

(Optional) Email/Password → Enable if you want to allow email sign-ins.

Save your changes.

### 4. Enable Firestore Database

In the left sidebar, click Firestore Database.

Click Create database.

Choose Start in test mode (⚠️ use only for development; for production, secure the rules).

Select a region close to your location.

Click Enable.

Note: You don’t need to manually create any collections. Firestore will automatically create a todos collection when your app first writes to it.

### 5. Add Firebase Config to Next.js

In your Next.js project root, create a file called .env.local.

Paste the config values you got when registering your Firebase app:

```bash
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_auth_domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_storage_bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
```

### 6. Setup Firebase in Code

In the root of your Next.js project, create a file called firebase.js.

Add the following code:

```bash
// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
```
