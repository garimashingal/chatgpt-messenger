"use client";
import { signIn } from "next-auth/react";
import Image from "next/image";

export default function Login() {
  return (
    <div className="flex flex-col items-center justify-center text-center min-h-screen py-2 bg-[#11a37f]">
      <Image
        src="/chatgpt-logo.png"
        alt="ChatGPT Messenger Logo"
        width={150}
        height={150}
      />
      <button
        className="text-white font-bold animate-pulse text-3xl"
        onClick={() => signIn("google")}
      >
        Sign in to ChatGPT Messenger
      </button>
    </div>
  );
}
