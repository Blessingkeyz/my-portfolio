import { useState } from 'react'
import { motion } from 'motion/react'
import { HiX, HiExternalLink } from 'react-icons/hi'
import { SectionDivider, SectionTitle } from '../../styles/GlobalComponents'
import { projects } from '../../constants/constants'

const ProjectModal = ({ project, onClose }) => {
  if (!project) return null

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.92, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl bg-[#FAFAFA] dark:bg-dark-card shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <img src={project.image} alt={project.title} className="w-full h-56 object-cover rounded-t-2xl" />

        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute top-3 right-3 p-1.5 rounded-full bg-black/40 text-white hover:bg-black/60 transition-colors"
        >
          <HiX size="1.3rem" />
        </button>

        <div className="p-6">
          <h3 className="font-semibold text-xl text-[#1a7fa0] dark:text-[#9cc9e3] mb-3 leading-snug">{project.title}</h3>
          <hr className="w-[50px] h-[3px] mb-4 border-0 bg-[#d0bb57]" />
          <p className="text-slate-600 dark:text-slate-300 text-sm leading-7 text-justify">{project.description}</p>

          <div className="mt-6">
            <p className="text-sm font-semibold text-slate-500 dark:text-white/60 mb-2">Stack</p>
            <ul className="flex flex-wrap gap-2">
              {project.tags.map((tag, i) => (
                <li key={i} className="text-slate-500 dark:text-[#d8bfbf] text-sm">{tag}</li>
              ))}
            </ul>
          </div>

          <div className="mt-6">
            <a
              href={project.visit}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-2.5 px-5 rounded-xl bg-accent-cyan text-white text-sm font-medium hover:opacity-90 transition-opacity"
            >
              <HiExternalLink size="1rem" />
              View Project
            </a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.15, ease: 'easeOut' },
  }),
}

const Projects = () => {
  const [activeProject, setActiveProject] = useState(null)

  return (
    <section id="projects" className="max-w-content mx-auto px-4 md:px-12">
      <SectionDivider />
      <SectionTitle main>Projects</SectionTitle>
      <div className="grid grid-cols-1 gap-8 pb-12 md:grid-cols-2">
        {projects.map((project, i) => {
          const { id, image, title, description, tags, visit } = project
          return (
            <motion.div
              key={id}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              whileHover={{ y: -8, boxShadow: '0 24px 48px rgba(0,0,0,0.15)' }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              className="flex flex-col h-[680px] rounded-xl shadow-[3px_3px_20px_rgba(80,78,78,0.5)] text-center w-full bg-[#FAFAFA] dark:bg-dark-card overflow-hidden cursor-default"
            >
              <img src={image} alt={title} className="w-full h-64 object-cover flex-shrink-0" />

              <div className="flex-shrink-0 pt-4">
                <h3 className="font-medium tracking-widest text-[#1a7fa0] dark:text-[#9cc9e3] py-2 text-xl md:text-2xl">{title}</h3>
                <hr className="w-[50px] h-[3px] mx-auto my-4 border-0 bg-[#d0bb57]" />
              </div>

              <div className="flex-1 flex flex-col px-3 overflow-hidden">
                <p className="text-slate-600 dark:text-slate-300 text-sm leading-6 text-justify line-clamp-5">
                  {description}
                </p>
                <button
                  onClick={() => setActiveProject(project)}
                  className="mt-1 self-end text-xs text-[#1a7fa0] dark:text-[#9cc9e3] hover:underline"
                >
                  Read more...
                </button>
              </div>

              <div className="flex-shrink-0 mt-4">
                <p className="text-sm font-semibold text-slate-500 dark:text-white/60 mb-2">Stack</p>
                <ul className="flex flex-wrap justify-around px-4 md:px-8 py-2 gap-2">
                  {tags.map((tag, idx) => (
                    <li key={idx} className="text-slate-500 dark:text-[#d8bfbf] text-sm">{tag}</li>
                  ))}
                </ul>
              </div>

              <div className="flex-shrink-0 flex justify-center mb-8 mt-4 px-4">
                <a
                  href={visit}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-accent-cyan text-white text-sm font-medium hover:opacity-90 transition-opacity"
                >
                  <HiExternalLink size="1rem" />
                  View Project
                </a>
              </div>
            </motion.div>
          )
        })}
      </div>

      <ProjectModal project={activeProject} onClose={() => setActiveProject(null)} />
    </section>
  )
}

export default Projects
