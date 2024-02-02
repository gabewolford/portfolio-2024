"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import globe from "../../../public/images/globe.svg";

export default function Globe() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const scrollThreshold = 0;

      setIsScrolled(scrollY > scrollThreshold);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className="fixed left-0 right-0 bg-white z-10 border-b p-2 h-[66px]">
      <div className={`transition ease-in-out duration-[1000ms]`}>
        <div
          className={`mr-[50px] ${
            isScrolled
              ? "transition transform translate-x-full ease-in-out duration-[1500ms]"
              : "transition ease-in-out duration-[850ms]"
          }`}
        >
          <Image src={globe} alt="globe" priority={true} />
        </div>
      </div>
    </section>
  );
}
