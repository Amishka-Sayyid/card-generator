"use client";

import { SignUp } from "@clerk/nextjs";

export default function SignUpPage() {
  return (
    <main className="min-h-[80vh] w-full bg-gradient-to-r from-[#A9B4C2] to-[#EEF1EF] text-[#496c78] text-center flex flex-col justify-center items-center p-3">
      <h1 className="text-4xl font-semibold mb-4 drop-shadow-lg">
        Welcome to The Card Generator!
      </h1>
      <h2> Sign up, please, new user!</h2>
      <SignUp />
    </main>
  );
}
