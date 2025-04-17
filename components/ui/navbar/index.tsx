"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Nav from "./nav";

gsap.registerPlugin(ScrollTrigger);

export default function Navbar() {
  const [isActive, setIsActive] = useState(false);
  const pathname = usePathname();
  const buttonRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isActive && window.innerWidth <= 480) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isActive]);

  useEffect(() => {
    if (isActive) setIsActive(false);
  }, [pathname]);

  useLayoutEffect(() => {
    if (buttonRef.current) {
      gsap.set(buttonRef.current, { scale: 0 });

      ScrollTrigger.create({
        trigger: document.documentElement,
        start: "top+=300 top",
        onEnter: () => {
          gsap.to(buttonRef.current, {
            scale: 1,
            duration: 0.3,
            ease: "power1.out",
          });
        },
        onLeaveBack: () => {
          gsap.to(buttonRef.current, {
            scale: 0,
            duration: 0.3,
            ease: "power1.out",
          });
        },
      });
    }
  }, []);

  return (
    <>
      <div className="fixed top-0 right-0 z-[99] p-[30px]">
        <div
          ref={buttonRef}
          onClick={() => setIsActive(!isActive)}
          className="w-20 h-20 bg-blue-900 rounded-full cursor-pointer flex items-center justify-center"
        >
          <div
            className={`relative w-full h-[16px] transition-transform duration-300 ease-in-out`}
          >
            <span
              className={`absolute top-1/2 left-1/2 w-[40%] h-[1px] bg-white transition-transform duration-300 ease-in-out 
    ${
      isActive
        ? "rotate-45 -translate-x-1/2 -translate-y-1/2"
        : "-translate-x-1/2 -translate-y-[6px]"
    }`}
            />
            <span
              className={`absolute top-1/2 left-1/2 w-[40%] h-[1px] bg-white transition-transform duration-300 ease-in-out 
    ${
      isActive
        ? "-rotate-45 -translate-x-1/2 -translate-y-1/2"
        : "-translate-x-1/2 translate-y-[6px]"
    }`}
            />
          </div>
        </div>
      </div>

      <AnimatePresence mode="wait">{isActive && <Nav setIsActive={setIsActive}/>}</AnimatePresence>
    </>
  );
}
