'use client'

import { useAuth } from "../contexts/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function ChatPage() {
  const { currentUser } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!currentUser) {
      router.push("/login");
    }
  }, [currentUser, router]);

  if (!currentUser) return null; // 로그인 확인 중에는 로딩 표시

  return (
    <div>
      <h1>Chat Room</h1>
      {/* 채팅 UI와 기능 구현 */}
    </div>
  );
}
