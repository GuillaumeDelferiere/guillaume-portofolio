"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const AnimatedShape = ({
  className,
  animate,
}: {
  className: string;
  animate: any;
}) => (
  <motion.div
    className={`absolute ${className}`}
    animate={animate}
    transition={{
      duration: Math.random() * 5 + 7,
      repeat: Infinity,
      repeatType: "reverse",
      ease: "easeInOut",
    }}
  />
);

export default function Hero() {
  return (
    <section className="container relative pt-20 overflow-hidden text-center pb-14">
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10"
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-accent/20 to-transparent" />

        <AnimatedShape
          className="rounded-full top-1/4 left-1/4 size-16 bg-primary/20"
          animate={{ x: [-20, 20], y: [-10, 10] }}
        />
        <AnimatedShape
          className="rounded-lg bottom-1/4 right-1/4 size-24 bg-secondary/30"
          animate={{ x: [10, -10], y: [20, -20], rotate: [0, 90] }}
        />
        <AnimatedShape
          className="top-1/3 right-1/3 size-20 rounded-xl bg-primary/15"
          animate={{ x: [30, -30], y: [-10, 10], rotate: [0, 45] }}
        />
        <AnimatedShape
          className="rounded-full bottom-1/2 left-1/3 size-12 bg-accent/25"
          animate={{ x: [15, -15], y: [5, -5] }}
        />
        <AnimatedShape
          className="rounded-full top-1/5 right-1/5 size-10 bg-primary/15"
          animate={{ x: [-10, 10], y: [-5, 5], rotate: [0, 180] }}
        />
        <AnimatedShape
          className="bottom-[10%] left-[10%] size-32 rounded-3xl bg-secondary/20"
          animate={{ x: [5, -5], y: [-15, 15], rotate: [0, -45] }}
        />
        <AnimatedShape
          className="top-[10%] left-[5%] size-8 rounded-full bg-accent/30"
          animate={{ x: [20, -20], y: [0, 0] }}
        />
        <AnimatedShape
          className="bottom-[5%] right-[5%] size-28 rounded-md bg-primary/20"
          animate={{ x: [-10, 10], y: [20, -20], rotate: [0, 120] }}
        />
      </div>
      
      {/* Contenu de votre Hero (inchangé) */}
      <motion.h1
        className="text-4xl font-extrabold tracking-tight md:text-5xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Guillaume Delferiere — Développeur junior full-stack
      </motion.h1>

      <motion.p
        className="max-w-2xl mx-auto mt-5 text-lg leading-relaxed text-gray-600 dark:text-gray-300"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        Je suis un développeur passionné actuellement en troisième année de
        bachelier en Technologies de l'Informatique à l'Ephec Louvain-La-Neuve.
      </motion.p>

      <motion.div
        className="flex justify-center gap-3 mt-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        <Button asChild size="lg">
          <Link href="#projects">Voir mes projets</Link>
        </Button>
        <Button asChild variant="outline" size="lg">
          <Link href="#contact">Me contacter</Link>
        </Button>
      </motion.div>
    </section>
  );
}