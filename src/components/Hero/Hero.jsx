import { motion } from 'motion/react'
import Button from '../../styles/GlobalComponents/Button'

const Hero = () => (
  <div className="flex flex-col justify-center h-full min-h-[calc(100vh-80px)] py-8">
    <motion.h1
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className="font-extrabold bg-gradient-to-br from-dark-bg to-dark-bg/70 dark:from-white dark:to-white/60 bg-clip-text text-transparent mb-4
        text-4xl leading-tight pt-6 pb-3
        md:text-5xl md:leading-[56px] md:pt-14 md:pb-4
        lg:text-[56px] lg:leading-[72px]"
    >
      Hi, I&apos;m <br />
      BlessingkeyzTheDev
    </motion.h1>

    <motion.p
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
      className="font-light text-slate-600/70 dark:text-white/50
        text-base leading-6 pb-6
        md:text-xl md:pb-8
        lg:text-2xl lg:pb-14"
    >
      I craft fast, responsive web experiences — turning ideas into elegant, production-ready products.
    </motion.p>

    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4, ease: 'easeOut' }}
    >
      <Button onClick={() => (window.location = 'https://www.linkedin.com/in/blessingkome/')}>
        Learn More
      </Button>
    </motion.div>
  </div>
)

export default Hero
