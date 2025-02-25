// app/user/layout.tsx

"use client";
import Sidebar from "@/components/common/sidebar/page";
import Link from "next/link";
import { useEffect } from "react";

export default function UserLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const fetchUser = async () => {
    const res = await fetch("/api/user/detail", {
      cache: "no-cache", // Adjust cache settings as needed
    });
    console.log(res);
  };
  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <div>
      <nav>
        <Sidebar />
      </nav>
      <main>{children}</main>
    </div>
  );
}
