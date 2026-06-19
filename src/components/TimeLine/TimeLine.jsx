import { motion } from 'motion/react'
import { SectionDivider, SectionTitle, SectionText2 } from '../../styles/GlobalComponents'
import { TimeLineData, Aboutme } from '../../constants/constants'

const Timeline = () => (
  <section id="about" className="max-w-content mx-auto px-4 py-6 md:px-12 md:py-8 overflow-hidden">
    <SectionDivider className="mb-6" />
    <SectionTitle>About Me</SectionTitle>

    {Aboutme.paragraphs.map((p, i) => (
      <motion.div
        key={i}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.5, delay: i * 0.12, ease: 'easeOut' }}
      >
        <SectionText2>{p}</SectionText2>
      </motion.div>
    ))}

    <SectionDivider className="mt-14 mb-6" />
    <SectionTitle>My Journey</SectionTitle>

    {/* Timeline */}
    <div className="relative">
      {/* Vertical center line */}
      <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-accent-cyan via-accent-purple to-accent-orange md:-translate-x-1/2" />

      <ul className="flex flex-col gap-10">
        {TimeLineData.map((item, index) => {
          const isLeft = index % 2 === 0
          return (
            <motion.li
              key={index}
              initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: index * 0.08, ease: 'easeOut' }}
              className={`relative flex items-start md:items-center
                pl-12 md:pl-0
                ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'}
              `}
            >
              {/* Dot on the line */}
              <div className="absolute left-[9px] md:left-1/2 md:-translate-x-1/2 w-[11px] h-[11px] rounded-full bg-accent-cyan border-2 border-white dark:border-dark-bg mt-1 md:mt-0 flex-shrink-0" />

              {/* Card */}
              <motion.div
                whileHover={{ y: -5, boxShadow: '0 16px 32px rgba(0,0,0,0.12)' }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className={`w-full md:w-[45%] bg-[#FAFAFA] dark:bg-dark-card rounded-xl px-5 py-4 shadow-md
                ${isLeft ? 'md:mr-auto md:ml-0' : 'md:ml-auto md:mr-0'}
              `}>
                <span className="inline-block text-xs font-bold tracking-widest uppercase text-accent-cyan mb-1">
                  {item.year}
                </span>
                <p className="text-sm leading-6 text-slate-600 dark:text-white/75">
                  {item.text}
                </p>
              </motion.div>
            </motion.li>
          )
        })}
      </ul>
    </div>

    <div className="mt-16">
      <SectionDivider />
    </div>
  </section>
)

export default Timeline
