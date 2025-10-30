"use client";
import { motion } from 'framer-motion';
import { ReactNode } from 'react';

export default function Section({
  id,
  title,
  children,
}: {
  id?: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="container py-16">
      <motion.h2
        className="text-2xl font-semibold tracking-tight md:text-3xl"
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
      >
        {title}
      </motion.h2>
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="mt-6"
      >
        {children}
      </motion.div>
    </section>
  );
}
