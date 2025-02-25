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
  return (
    <div>
      <nav>{/* <Sidebar /> */}</nav>
      {/* <main>{children}</main> */}
    </div>
  );
}
