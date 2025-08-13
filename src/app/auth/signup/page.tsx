"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useSignUpEmailPassword } from "@nhost/nextjs";

export default function SignUpPage() {
  const router = useRouter();
  const { signUpEmailPassword } = useSignUpEmailPassword();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const { isSuccess, error } = await signUpEmailPassword(email, password);
    if (isSuccess) router.push("/chat");
    else console.error(error);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <button type="submit">Sign Up</button>
    </form>
  );
}
