"use client"

import { signOut } from "next-auth/react";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between p-24">
      <button onClick={async () => await signOut()}>signout</button>
    </main>
  );
}
