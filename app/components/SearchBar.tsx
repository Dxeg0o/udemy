"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SearchBar() {
  const router = useRouter();
  const [location, setLocation] = useState("");
  return (
    <div className="text-left py-3 m-auto flex justify-center">
      <input
        className="rounded text-lg mr-3 p-2 w-[450px] bg-white text-black"
        type="text"
        placeholder="State, city or town"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      ></input>
      <button
        className="rounded bg-red-600 px-9 py-2"
        onClick={() => {
          if (location === "banana") return;
          router.push("/search");
        }}
      >
        Let´s Go
      </button>
    </div>
  );
}
