# ChatGPT Messenger 🤖

A modern, real-time chat application built with **Next.js**, **TailwindCSS**, **Firebase**, and **OpenAI**. This project clones the core functionality of ChatGPT with a premium, responsive interface and persistent chat history.

---

## ✨ Features

- **Real-time Chat**: Powered by Firestore for instant message updates across devices.
- **AI Integration**: Powered by OpenAI's API to provide intelligent responses.
- **Chat History**: Messages and chat sessions are stored securely in Firebase.
- **Authentication**: Secure login using Google Authentication via NextAuth.
- **Model Selection**: Switch between different OpenAI models for your chat needs.
- **Notifications**: Real-time feedback with `react-hot-toast` (e.g., when ChatGPT is thinking).
- **Responsive Design**: Mobile-friendly UI built with TailwindCSS.

---

## 🛠️ Tech Stack

- **Framework**: [Next.js 16+](https://nextjs.org/) (App Router)
- **Styling**: [TailwindCSS 4](https://tailwindcss.com/)
- **State Management**: [SWR](https://swr.vercel.app/) (Data fetching)
- **Backend / Database**: [Firebase](https://firebase.google.com/) (Firestore)
- **Authentication**: [NextAuth.js](https://next-auth.js.org/)
- **AI Engine**: [OpenAI API](https://openai.com/api/)
- **Icons**: [Heroicons](https://heroicons.com/)

---

## 🚀 Getting Started

### 1. Prerequisites
- **Node.js**: v18.17.0 or higher
- **Firebase Project**: A Firebase project with Firestore and Google Authentication enabled.
- **OpenAI Account**: An OpenAI API key.

### 2. Environment Variables
Create a `.env.local` file in the root directory and add the following keys:

```env
# OpenAI
OPENAI_API_KEY=your_openai_api_key

# Firebase Client
NEXT_PUBLIC_FIREBASE_API_KEY=...
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=...
NEXT_PUBLIC_FIREBASE_PROJECT_ID=...
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=...
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=...
NEXT_PUBLIC_FIREBASE_APP_ID=...

# NextAuth
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your_nextauth_secret
GOOGLE_ID=your_google_client_id
GOOGLE_SECRET=your_google_client_secret

# Firebase Admin (Optional, for server-side operations)
FIREBASE_SERVICE_ACCOUNT_KEY=...
```

### 3. Installation
```bash
npm install
```

### 4. Running Locally
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) to see the application.

---

## 📂 Project Structure

- `app/`: Next.js App Router pages and layouts.
- `component/`: Reusable React components (Sidebar, Chat, Login, etc.).
- `lib/`: Utility functions and shared logic.
- `pages/api/`: Server-side API routes for OpenAI integration.
- `firebase.ts`: Firebase client configuration.

---

## 📄 License
This project is open-source. Feel free to use and modify it for your own learning!
