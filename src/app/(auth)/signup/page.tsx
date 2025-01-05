"use client";
import React from "react";
import AuthLayout from "@/app/_components/(auth)/AuthLayout";
import SignupForm from "@/app/_components/(auth)/SignupForm";

export default function SignupPage() {
  const handleSignup = (email: string, password: string) => {
    // TODO: Implement actual signup logic
    console.log("Signup attempt:", { email, password });
  };

  return (
    <AuthLayout>
      <SignupForm onSubmit={handleSignup} />
    </AuthLayout>
  );
}
