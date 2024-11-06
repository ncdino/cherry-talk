"use client";

import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { auth } from "@/firebase/firebase";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      setError("");
    } catch (error) {
      setError("로그인에 실패했습니다. 다시 확인해주세요");
    }
  };
  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="이메일"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="p-2 border rounded"
        />
        <input
          type="password"
          placeholder="패스워드"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </form>
    </div>
  );
}
