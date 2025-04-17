"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { menuSlide } from "../anim";
import LinkMenu from "./Link";
import Footer from "./Footer";
import Curve from "./Curve";

const navItems = [
  { title: "Acasă", href: "/" },
  { title: "Povestea noastră", href: "/povestea-noastra" },
  { title: "Oferte", href: "/oferte" },
  { title: "Contact", href: "/contact" },
];

export default function Nav({
  setIsActive,
}: {
  setIsActive: (val: boolean) => void;
}) {
  const pathname = usePathname();
  const [selectedIndicator, setSelectedIndicator] = useState(pathname);

  return (
    <motion.div
      variants={menuSlide}
      initial="initial"
      animate="enter"
      exit="exit"
      className="fixed inset-0 z-[90] h-screen w-full bg-[#292929] text-white md:w-[30vw] sm:right-0 sm:left-auto"
    >
      <div className="h-full flex flex-col justify-between px-[85px] py-[85px] box-border">
        <div
          className="flex flex-col text-[56px] gap-3 mt-20"
          onMouseLeave={() => setSelectedIndicator(pathname)}
        >
          <div className="hidden md:block text-[11px] uppercase border-b border-[#999] text-[#999] mb-10">
            <p>Navigation</p>
          </div>

          {navItems.map((data, index) => (
            <LinkMenu
              key={index}
              data={{ ...data, index }}
              isActive={selectedIndicator === data.href}
              setSelectedIndicator={setSelectedIndicator}
              closeMenu={() => setIsActive(false)}
            />
          ))}
        </div>

        <Footer />
      </div>

      <Curve />
    </motion.div>
  );
}
