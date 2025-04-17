"use client";
import React from "react";
import Link from "next/link";
import {
  IconHome,
  IconInfoCircle,
  IconDiscount2,
  IconMail,
  IconBrandInstagram,
  IconBrandFacebook,
  IconBrandYoutube,
  IconBrandTiktok,
} from "@tabler/icons-react";

export default function Content() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="bg-[#292929] py-8 px-6 md:px-12 w-full h-full flex flex-col justify-between">
      <div className="flex flex-col md:flex-row justify-between items-start gap-10">
        <div className="flex shrink-0 gap-20">
          <div className="flex flex-col gap-2">
            <h3 className="mb-2 uppercase text-[#ffffff80]">General</h3>
            <Link
              href="/"
              className="text-white flex items-center gap-2 hover:underline"
            >
              <IconHome size={18} />
              <span className="inline">Acasă</span>
            </Link>
            <Link
              href="/povestea-noastra"
              className="text-white flex items-center gap-2 hover:underline"
            >
              <IconInfoCircle size={18} />
              <span className="inline">Povestea noastră</span>
            </Link>
            <Link
              href="/oferte"
              className="text-white flex items-center gap-2 hover:underline"
            >
              <IconDiscount2 size={18} />
              <span className="inline">Oferte</span>
            </Link>
            <Link
              href="/contact"
              className="text-white flex items-center gap-2 hover:underline"
            >
              <IconMail size={18} />
              <span className="inline">Contact</span>
            </Link>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="mb-2 uppercase text-[#ffffff80]">Socials</h3>
            <Link
              href="https://instagram.com"
              target="_blank"
              className="text-white flex items-center gap-2 hover:underline"
            >
              <IconBrandInstagram size={18} />
              <span className="inline">Instagram</span>
            </Link>
            <Link
              href="https://facebook.com"
              target="_blank"
              className="text-white flex items-center gap-2 hover:underline"
            >
              <IconBrandFacebook size={18} />
              <span className="inline">Facebook</span>
            </Link>
            <Link
              href="https://youtube.com"
              target="_blank"
              className="text-white flex items-center gap-2 hover:underline"
            >
              <IconBrandYoutube size={18} />
              <span className="inline">YouTube</span>
            </Link>
            <Link
              href="https://tiktok.com"
              target="_blank"
              className="text-white flex items-center gap-2 hover:underline"
            >
              <IconBrandTiktok size={18} />
              <span className="inline">TikTok</span>
            </Link>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row md:justify-between items-start md:items-end gap-2 mt-10">
        <div className="flex flex-col space-y-5">
            <p className="text-[10vw] md:text-[5vw] font-bold leading-[0.8] text-white">
              Trupa Trygen
            </p>
            <p className="text-[10vw] md:text-[5vw] font-bold leading-[0.8] text-white">
              & Oana Preda
            </p>
        </div>
        <p className="text-sm text-white/60">© Trupa Trygen & Oana Preda {currentYear}.</p>
      </div>
    </div>
  );
}
