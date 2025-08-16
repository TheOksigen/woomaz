"use client";

import React from "react";
import { motion, useScroll, useTransform, useSpring, MotionValue } from "motion/react";
import BlurText from "../text-animations/BlurText/BlurText";
import RotatingText from "../text-animations/RotatingText/RotatingText";

export const HeroParallax = ({
  products,
  dictionary,
}: {
  products: { title: string; link: string; thumbnail: string }[];
  dictionary: any;
}) => {
  const firstRow = products.slice(0, 5);
  const secondRow = products.slice(5, 10);
  const thirdRow = products.slice(10, 15);
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  const translateX = useSpring(useTransform(scrollYProgress, [0, 1], [0, 1000]), springConfig);
  const translateXReverse = useSpring(useTransform(scrollYProgress, [0, 1], [0, -1000]), springConfig);
  const rotateX = useSpring(useTransform(scrollYProgress, [0, 0.2], [15, 0]), springConfig);
  const opacity = useSpring(useTransform(scrollYProgress, [0, 0.2], [0.2, 1]), springConfig);
  const rotateZ = useSpring(useTransform(scrollYProgress, [0, 0.2], [20, 0]), springConfig);
  const translateY = useSpring(useTransform(scrollYProgress, [0, 0.2], [-700, 500]), springConfig);

  return (
    <div
      ref={ref}
      className="h-[300vh] py-40 overflow-hidden antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]"
    >
      <Header dictionary={dictionary} />
      <motion.div style={{ rotateX, rotateZ, translateY, opacity }} className="">
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20 mb-20">
          {firstRow.map((product) => (
            <ProductCard product={product} translate={translateX} key={product.title} />
          ))}
        </motion.div>
        <motion.div className="flex flex-row mb-20 space-x-20">
          {secondRow.map((product) => (
            <ProductCard product={product} translate={translateXReverse} key={product.title} />
          ))}
        </motion.div>
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20">
          {thirdRow.map((product) => (
            <ProductCard product={product} translate={translateX} key={product.title} />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

// export const Header = ({ dictionary }: { dictionary: any }) => {
//   return (
//     <div className="max-w-7xl relative mx-auto py-20 md:py-40 px-4 w-full left-0 top-0 text-center">
//       <motion.h1 className="text-2xl md:text-7xl font-bold text-white">
//         <BlurText
//           text={dictionary.hero.line1}
//           delay={100}
//           animateBy="words"
//           direction="top"
//           className="block"
//         />
//         <BlurText
//           text={dictionary.hero.line2}
//           delay={200}
//           animateBy="words"
//           direction="top"
//           className="block mt-2"
//         />
//         {dictionary.hero.animatedWords && (
//           <RotatingText
//             texts={dictionary.hero.animatedWords}
//             mainClassName="inline-block h-fit overflow-hidden text-cyan-300"
//             staggerFrom="last"
//             initial={{ y: "100%" }}
//             animate={{ y: 0 }}
//             exit={{ y: "-120%" }}
//             staggerDuration={0.025}
//             splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
//             transition={{ type: "spring", damping: 30, stiffness: 400 }}
//             rotationInterval={2000}
//           />
//         )}
//       </motion.h1>

//       <motion.p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-200 mt-8">
//         <BlurText text={dictionary.hero.subtitle} delay={20} animateBy="words" direction="top" />
//       </motion.p>

//       <div className="mt-8 flex flex-wrap justify-center gap-4">
//         <a
//           href="#get-offer"
//           className="px-6 py-3 bg-blue-900 hover:bg-cyan-500 text-white rounded-lg font-semibold"
//         >
//           {dictionary.hero.getOffer}
//         </a>
//         <a
//           href="#learn-more"
//           className="px-6 py-3 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white rounded-lg font-semibold"
//         >
//           {dictionary.hero.learnMore}
//         </a>
//       </div>
//     </div>
//   );
// };

export const Header = ({ dictionary }: { dictionary: any }) => {
  return (
    <div className="max-w-7xl relative mx-auto py-20 md:py-40 px-4 w-full left-0 top-0 text-center">
      <motion.h1 className="text-2xl md:text-7xl font-bold text-neutral-900 dark:text-white">
        <BlurText
          text={dictionary.hero.line1}
          delay={100}
          animateBy="words"
          direction="top"
          className="block md:text-7xl"
        />
        <BlurText
          text={dictionary.hero.line2}
          delay={200}
          animateBy="words"
          direction="top"
          className="block mt-2 md:text-7xl"
        />
        {dictionary.hero.animatedWords && (
          <RotatingText
            texts={dictionary.hero.animatedWords}
            mainClassName="inline-block h-fit overflow-hidden text-cyan-600 dark:text-cyan-400"
            staggerFrom="last"
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-120%" }}
            staggerDuration={0.025}
            splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
            transition={{ type: "spring", damping: 30, stiffness: 400 }}
            rotationInterval={2000}
          />
        )}
      </motion.h1>

      <motion.p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-800 dark:text-gray-200 mt-8">
        <BlurText text={dictionary.hero.subtitle} delay={20} animateBy="words" direction="top" />
      </motion.p>

      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <a
          href="#get-offer"
          className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-lg font-semibold"
        >
          {dictionary.hero.getOffer}
        </a>
        <a
          href="#learn-more"
          className="px-6 py-3 bg-gray-200 hover:bg-gray-300 text-gray-900 rounded-lg font-semibold"
        >
          {dictionary.hero.learnMore}
        </a>
      </div>
    </div>
  );
};


export const ProductCard = ({
  product,
  translate,
}: {
  product: { title: string; link: string; thumbnail: string };
  translate: MotionValue<number>;
}) => {
  return (
    <motion.div
      style={{ x: translate }}
      whileHover={{ y: -20 }}
      key={product.title}
      className="group/product h-96 w-[30rem] relative shrink-0"
    >
      <a href={product.link} className="block group-hover/product:shadow-2xl">
        <img
          src={product.thumbnail}
          height="600"
          width="600"
          className="object-cover object-left-top absolute h-full w-full inset-0"
          alt={product.title}
        />
      </a>
      <div className="absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-80 bg-black pointer-events-none"></div>
      <h2 className="absolute bottom-4 left-4 opacity-0 group-hover/product:opacity-100 text-white">
        {product.title}
      </h2>
    </motion.div>
  );
};
