"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="container pt-20 pb-14 text-center">
      <motion.h1
        className="text-4xl md:text-5xl font-extrabold tracking-tight"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Guillaume — Étudiant en informatique
      </motion.h1>

      <motion.p
        className="mt-5 max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-300 leading-relaxed"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        Je conçois des interfaces modernes, performantes et accessibles. Curieux, rigoureux, orienté expérience utilisateur.
      </motion.p>

      <motion.div
        className="mt-8 flex justify-center gap-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        <Link href="#projects" className="btn bg-[rgb(var(--brand))] text-white">Voir mes projets</Link>
        <Link href="#contact" className="btn border border-neutral-200 dark:border-neutral-700">Me contacter</Link>
      </motion.div>
    </section>
  );
}
