import { motion } from 'motion/react'
import Button from '../../styles/GlobalComponents/Button'

const Hero = () => (
  <div className="flex flex-col justify-center h-full min-h-[calc(100vh-80px)] py-8">
    <motion.p
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="text-caption font-semibold tracking-widest uppercase text-accent-cyan mb-4"
    >
      Frontend Developer
    </motion.p>

    <motion.h1
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className="font-bold bg-gradient-to-br from-dark-bg to-dark-bg/70 dark:from-white dark:to-white/60 bg-clip-text text-transparent
        text-display pb-6"
    >
      Hi, I&apos;m <br />
      KomeTheDev
    </motion.h1>

    <motion.p
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
      className="max-w-2xl font-light text-slate-600 dark:text-white/60
        text-lead pb-10 lg:pb-12"
    >
      I craft fast, responsive web experiences — turning ideas into elegant, production-ready products.
    </motion.p>

    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4, ease: 'easeOut' }}
      className="flex flex-col gap-4 sm:flex-row"
    >
      <Button href="#projects">View my work</Button>
      <Button href="#contact" variant="outline">Get in touch</Button>
    </motion.div>
  </div>
)

export default Hero
