"use client";
import React from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  MotionValue,
} from "motion/react";
import Image from "next/image";
import { Product } from "@/lib/types";
import { Header } from "./hero-parallax-desktop";

export const HeroParallaxMobile = ({
  products,
}: {
  products: ReadonlyArray<Product>;
}) => {
  const rows: Product[][] = [];
  const perRow = 2;

  for (let i = 0; i < products.length; i += perRow) {
    rows.push(products.slice(i, i + perRow));
  }

  const ref = React.useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  const translate1 = useSpring(
    useTransform(scrollYProgress, [0, 1], [-50, 70]),
    springConfig
  );
  const translate2 = useSpring(
    useTransform(scrollYProgress, [0, 1], [50, -70]),
    springConfig
  );
  const translate3 = useSpring(
    useTransform(scrollYProgress, [0, 1], [-50, 70]),
    springConfig
  );
  const translates = [translate1, translate2, translate3];
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [10, 0]),
    springConfig
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
    springConfig
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [10, 0]),
    springConfig
  );
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [-400, 200]),
    springConfig
  );

  return (
    <div
      ref={ref}
      className="h-[200vh] py-20 overflow-hidden antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]"
    >
      <Header />
      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
        className="mt-10 space-y-10"
      >
        {rows.map((row, rowIndex) => (
          <motion.div
            key={rowIndex}
            className={`flex ${
              rowIndex % 2 === 0
                ? "flex-row-reverse space-x-reverse"
                : "flex-row"
            } space-x-6 px-4 mb-10`}
          >
            {row.map((product, index) => (
              <ProductCardMobile
                product={product}
                translate={
                  translates[rowIndex] ?? translates[translates.length - 1]
                }
                key={index}
              />
            ))}
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

const ProductCardMobile = ({
  product,
  translate,
}: {
  product: Product;
  translate: MotionValue<number>;
}) => {
  const isPortrait = product.orientation === "portrait";

  return (
    <motion.div
      style={{ x: translate }}
      className={`group/product relative shrink-0 rounded-xl overflow-hidden shadow-lg ${
        isPortrait ? "aspect-[3/4] w-44" : "aspect-[4/3] w-60"
      }`}
    >
      <Image
        src={product.thumbnail}
        fill
        className="object-cover object-center absolute h-full w-full inset-0"
        alt={product.title || "poza"}
      />
      <div className="absolute inset-0 bg-black/20 pointer-events-none rounded-xl" />
      <div className="absolute bottom-2 left-2 right-2">
        <h2 className="text-white text-lg font-semibold">{product.title}</h2>
        {product.subtitle && (
          <p className="text-white text-xs">{product.subtitle}</p>
        )}
      </div>
    </motion.div>
  );
};
