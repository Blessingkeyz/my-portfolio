import { motion } from 'motion/react'
import { SectionDivider, SectionTitle } from '../../styles/GlobalComponents'
import { experiences } from '../../constants/constants'

const Experience = () => (
  <section id="experience" className="max-w-content mx-auto px-4 py-6 md:px-12 md:py-8">
    <SectionDivider />
    <SectionTitle>Experience</SectionTitle>

    <div className="flex flex-col gap-6">
      {experiences.map((exp, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, delay: i * 0.1, ease: 'easeOut' }}
          whileHover={{ y: -5, boxShadow: '0 16px 32px rgba(0,0,0,0.12)' }}
          className="bg-[#FAFAFA] dark:bg-dark-card rounded-xl p-6 shadow-md cursor-default"
        >
          <div className="flex flex-col gap-1 mb-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h3 className="text-lg font-semibold text-slate-800 dark:text-white">{exp.role}</h3>
              <p className="text-accent-cyan text-sm font-medium">{exp.company}</p>
            </div>
            <span className="text-xs font-semibold uppercase tracking-widest text-slate-400 dark:text-white/40 mt-1 md:mt-0">
              {exp.period}
            </span>
          </div>

          <ul className="flex flex-col gap-2">
            {exp.bullets.map((point, j) => (
              <li key={j} className="flex items-start gap-2 text-sm text-slate-600 dark:text-white/70 leading-6">
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-accent-cyan flex-shrink-0" />
                {point}
              </li>
            ))}
          </ul>
        </motion.div>
      ))}
    </div>
  </section>
)

export default Experience
