import Link from "next/link";
import { motion } from "framer-motion";
import { slide, scale } from "../../anim";
import { FC } from "react";

interface IndexProps {
  data: {
    title: string;
    href: string;
    index: number;
  };
  isActive: boolean;
  setSelectedIndicator: (href: string) => void;
  closeMenu: () => void; // 👈 new prop
}

const LinkMenu: FC<IndexProps> = ({ data, isActive, setSelectedIndicator, closeMenu }) => {
    const { title, href, index } = data;

  return (
    <motion.div
      className="relative flex items-center"
      onMouseEnter={() => setSelectedIndicator(href)}
      custom={index}
      variants={slide}
      initial="initial"
      animate="enter"
      exit="exit"
    >
      <motion.div
        variants={scale}
        animate={isActive ? "open" : "closed"}
        className="w-[10px] h-[10px] bg-white rounded-full absolute left-[-30px]"
      ></motion.div>
      <Link href={href} onClick={closeMenu} className="text-white">
        {title}
      </Link>
    </motion.div>
  );
};

export default LinkMenu;
