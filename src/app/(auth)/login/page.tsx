"use client";
import React from "react";
import AuthLayout from "@/app/_components/(auth)/AuthLayout";
import LoginForm from "@/app/_components/(auth)/LoginForm";

export default function LoginPage() {
  const handleLogin = (email: string, password: string) => {
    // TODO: Implement actual login logic
    console.log("Login attempt:", { email, password });
  };

  return (
    <AuthLayout>
      <LoginForm onSubmit={handleLogin} />
    </AuthLayout>
  );
}
