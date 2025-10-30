"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="container pt-20 text-center pb-14">
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
        Je suis un développeur passionné actuellement en troisième année de bachelier en Technologies de l'Informatique à l'Ephec Louvain-La-Neuve.
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
