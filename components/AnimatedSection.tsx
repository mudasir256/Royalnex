'use client'

import { motion } from 'framer-motion'

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
}

const stagger = {
  initial: {},
  whileInView: {},
  viewport: { once: true, margin: '-40px' },
  transition: { staggerChildren: 0.1, delayChildren: 0.2 },
}

export function AnimatedSection({
  children,
  className = '',
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <motion.section
      className={className}
      initial="initial"
      whileInView="whileInView"
      viewport={{ once: true, margin: '-80px' }}
      variants={stagger}
    >
      {children}
    </motion.section>
  )
}

export function FadeInUp({
  children,
  className = '',
  delay = 0,
}: {
  children: React.ReactNode
  className?: string
  delay?: number
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{
        duration: 0.7,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  )
}

export function FadeInUpStagger({
  children,
  className = '',
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <motion.div
      className={className}
      initial="initial"
      whileInView="whileInView"
      viewport={{ once: true, margin: '-60px' }}
      variants={{
        initial: {},
        whileInView: {
          transition: { staggerChildren: 0.12, delayChildren: 0.15 },
        },
      }}
    >
      {children}
    </motion.div>
  )
}

export function AnimatedItem({
  children,
  className = '',
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <motion.div
      className={className}
      variants={{
        initial: { opacity: 0, y: 35 },
        whileInView: { opacity: 1, y: 0 },
      }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}
