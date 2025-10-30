'use client';

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function RegistrationForm() {
  const [error, setError] = useState("");
  const router = useRouter();

  async function onSubmit(e) {
    e.preventDefault();
    setError("");

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.status === 201) {
        router.push("/login");
      } else {
        const text = await res.text();
        setError(text);
      }
    } catch (err) {
      setError(err.message);
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4 max-w-md mx-auto">
      {error && <div className="text-red-500 text-center">{error}</div>}

      <input name="name" type="text" placeholder="Name" required className="w-full p-3 border rounded" />
      <input name="phoneNo" type="text" placeholder="Phone No" required className="w-full p-3 border rounded" />
      <input name="email" type="email" placeholder="Email" required className="w-full p-3 border rounded" />
      <input name="password" type="password" placeholder="Password" required className="w-full p-3 border rounded" />

      <button type="submit" className="w-full py-3 bg-indigo-600 text-white rounded hover:bg-indigo-700">
        Register
      </button>

      <p className="text-center text-gray-500 mt-4">
        Already have an account? <Link href="/login" className="text-indigo-600 hover:underline">Login</Link>
      </p>
    </form>
  );
}
