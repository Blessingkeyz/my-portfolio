import { motion } from 'motion/react'
import {
  DiReact, DiCss3, DiGit, DiHtml5, DiJavascript1,
  DiNodejs, DiMongodb, DiSass, DiPython, DiGithub,
} from 'react-icons/di'
import {
  SiNextdotjs, SiTypescript, SiTailwindcss,
  SiGithubactions, SiVuedotjs, SiExpress, SiVercel, SiPostman,
  SiAngular, SiFigma,
} from 'react-icons/si'
import { SectionDivider, SectionTitle, SectionText } from '../../styles/GlobalComponents'

const categories = [
  {
    title: 'Languages',
    icons: [DiHtml5, DiCss3, DiJavascript1, SiTypescript, DiPython],
    text: 'HTML, CSS, JavaScript, TypeScript, Python',
  },
  {
    title: 'Frontend Development',
    icons: [DiReact, SiNextdotjs, SiVuedotjs, SiAngular, SiTailwindcss, DiSass],
    text: 'React.js, Next.js, Vue.js, Angular, Tailwind CSS, Sass',
  },
  {
    title: 'Backend Development',
    icons: [DiNodejs, SiExpress, DiMongodb, SiPostman],
    text: 'Node.js, Express.js, MongoDB, Postman (basic familiarity)',
  },
  {
    title: 'Tools & Platforms',
    icons: [DiGit, DiGithub, SiVercel, SiGithubactions, SiFigma],
    text: 'Git, GitHub, GitHub Actions, Vercel, Figma',
  },
]

const Technologies = () => (
  <section id="tech" className="max-w-content mx-auto px-4 py-6 md:px-12 md:py-8">
    <SectionDivider />
    <br />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've worked with a range of frontend and backend technologies in web development.
    </SectionText>

    <ul className="grid grid-cols-1 gap-8 sm:grid-cols-2">
      {categories.map((cat, i) => (
        <motion.li
          key={cat.title}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, delay: i * 0.1, ease: 'easeOut' }}
          className="flex flex-col items-start gap-2"
        >
          <div className="flex gap-2 flex-shrink-0">
            {cat.icons.map((Icon, j) => (
              <motion.span
                key={j}
                initial={{ opacity: 0, scale: 0.6 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.3, rotate: 5 }}
                viewport={{ once: true }}
                transition={{ type: 'spring', stiffness: 400, damping: 10, delay: i * 0.1 + j * 0.05 }}
              >
                <Icon size="1.8rem" className="text-slate-700 dark:text-white" />
              </motion.span>
            ))}
          </div>
          <div>
            <h4 className="text-lg font-semibold text-slate-800 dark:text-white mb-1">{cat.title}</h4>
            <p className="text-sm text-slate-600 dark:text-white/70 md:text-base">{cat.text}</p>
          </div>
        </motion.li>
      ))}
    </ul>
  </section>
)

export default Technologies
