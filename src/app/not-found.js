"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function Error({ error }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <section className="flex flex-col gap-6 p-1 flex-1 items-center justify-center">
      <h1 className="text-xl">Sorry, this page does not exist.</h1>
      <Link href="/" className="w-fit px-4 py-2 bg-lavender-500 text-white">
        Go home
      </Link>
    </section>
  );
}
