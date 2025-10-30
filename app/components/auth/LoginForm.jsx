'use client';
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useState } from "react";

const LoginForm = () => {
   const [password, setPassword] = useState("");
 const [email, setEmail] = useState("");
 const [error,setError] = useState("");
 const handleCredentialsLogin = async (e) => {
    e.preventDefault();
    await signIn("credentials",
       { email, password, redirect: true, callbackUrl: "/" });
  };
  return (
    <>
{error && (<div className="text-xl text-red-500 text-center" >{error}</div>)}
       <form onSubmit={handleCredentialsLogin} className="space-y-4">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full p-3 border rounded-md focus:ring-2 focus:ring-indigo-500"
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full p-3 border rounded-md focus:ring-2 focus:ring-indigo-500"
            />
            <button
              type="submit"
              className="w-full py-3 my-6 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition"
            >
              Sign In
            </button>
         

          <p className="text-gray-500 text-sm text-center py-3">
            Don't have an account?{" "}
            <Link href="/register" className="text-indigo-600 hover:underline">
              Sign up
            </Link>
          </p>
          </form>
          </>
    
  );
};

export default LoginForm;
