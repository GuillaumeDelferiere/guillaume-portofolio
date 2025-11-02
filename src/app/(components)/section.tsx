// src/app/(components)/section.tsx

"use client";
import { motion, Variants, Transition } from 'framer-motion';
import { ReactNode } from 'react';

// 1. Définir les variants pour l'animation des lettres
const titleVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.03, // Délai entre chaque lettre
    },
  },
};

const letterTransition: Transition = {
  type: 'spring',
  stiffness: 100,
  damping: 10,
};

const letterVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: letterTransition,
  },
};

export default function Section({
  id,
  title,
  children,
}: {
  id?: string;
  title: string;
  children: ReactNode;
}) {
  // 2. Diviser le titre en lettres
  const letters = Array.from(title);

  return (
    <section id={id} className="container py-16">
      {/* 3. Appliquer les variants au conteneur h2 */}
      <motion.h2
        className="text-2xl font-semibold tracking-tight md:text-3xl"
        variants={titleVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* 4. Mapper chaque lettre dans un span animé */}
        {letters.map((letter, index) => (
          <motion.span
            key={index}
            variants ={letterVariants}
            // Gérer les espaces
            style={{ display: letter === ' ' ? 'inline' : 'inline-block' }} 
          >
            {letter}
          </motion.span>
        ))}
      </motion.h2>
      
      {/* L'animation du contenu reste la même */}
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