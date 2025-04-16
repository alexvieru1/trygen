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
import Link from "next/link";
import { Product } from "@/lib/types";

export const HeroParallaxDesktop = ({
  products,
}: {
  products: ReadonlyArray<Product>;
}) => {
  const firstRow = products.slice(0, 5);
  const secondRow = products.slice(5, 11);
  const thirdRow = products.slice(10, 16);
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 1000]),
    springConfig
  );
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -1000]),
    springConfig
  );
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [15, 0]),
    springConfig
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
    springConfig
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [20, 0]),
    springConfig
  );
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [-700, 500]),
    springConfig
  );
  return (
    <div
      ref={ref}
      className="h-[300vh] py-40 overflow-hidden  antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]"
    >
      <Header />
      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
        className=""
      >
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20 mb-20">
          {firstRow.map((product, index) => (
            <ProductCard product={product} translate={translateX} key={index} />
          ))}
        </motion.div>
        <motion.div className="flex flex-row  mb-20 space-x-20 ">
          {secondRow.map((product, index) => (
            <ProductCard
              product={product}
              translate={translateXReverse}
              key={index}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20">
          {thirdRow.map((product, index) => (
            <ProductCard product={product} translate={translateX} key={index} />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export const Header = () => {
  return (
    <div className="max-w-7xl relative mx-auto py-20 md:py-40 px-4 w-full  left-0 top-0">
      <h1 className="text-3xl md:text-7xl font-bold dark:text-white">
        Trupa Trygen <br /> & Oana Preda
      </h1>
      <p className="max-w-xl text-md font-semibold md:text-xl mt-8 dark:text-neutral-200">
        Muzica noastră transformă momentele speciale în amintiri de neuitat.{" "}
        <br />
        Fiecare acord spune o poveste — povestea ta.
      </p>
    </div>
  );
};

export const ProductCard = ({
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
      key={product.title}
      className={`group/product relative shrink-0 ${
        isPortrait ? "aspect-[3/4] w-72" : "aspect-[4/3] w-[30rem]"
      }`}
      initial="rest"
      whileHover="hover"
      animate="rest"
      variants={{
        rest: { y: 0 },
        hover: { y: -20 }, // moved here!
      }}
    >
      {product.link ? (
        <Link
          href={product.link}
          className="block group-hover/product:shadow-2xl"
        >
          <Image
            src={product.thumbnail}
            fill
            className="object-cover object-center absolute h-full w-full inset-0 rounded-xl"
            alt={product.title === "" ? "poza" : product.title}
          />
        </Link>
      ) : (
        <div className="block group-hover/product:shadow-2xl relative h-full w-full">
          <Image
            src={product.thumbnail}
            fill
            className="object-cover object-center absolute h-full w-full inset-0 rounded-xl"
            alt={product.title === "" ? "poza" : product.title}
          />
        </div>
      )}

      <div
        className={
          product.title === ""
            ? `absolute inset-0 h-full w-full opacity-0 bg-black pointer-events-none rounded-xl`
            : `absolute inset-0 h-full w-full opacity-20 bg-black pointer-events-none rounded-xl`
        }
      ></div>

      {/* Title + Subtitle block */}
      <motion.div
        className="absolute bottom-4 left-4 right-4 h-[100px] overflow-hidden"
        initial="rest"
        whileHover="hover"
        animate="rest"
        variants={{ rest: {}, hover: {} }}
      >
        {/* Title */}
        <motion.h2
          className="text-white text-4xl absolute bottom-0 left-0"
          variants={{
            rest: { y: 0 },
            hover: product.subtitle ? { y: -28 } : { y: 0 },
          }}
          transition={{ duration: 0.25, ease: "easeOut" }}
        >
          {product.title}
        </motion.h2>

        {/* Subtitle */}
        {product.subtitle && (
          <motion.h3
            className="text-white text-2xl absolute bottom-0 left-0"
            variants={{
              rest: { opacity: 0, y: 0 },
              hover: { opacity: 1, y: -2 },
            }}
            transition={{ duration: 0.25, ease: "easeOut" }}
          >
            {product.subtitle}
          </motion.h3>
        )}
      </motion.div>
    </motion.div>
  );
};
