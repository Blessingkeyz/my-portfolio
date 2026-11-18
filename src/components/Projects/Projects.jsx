import { motion } from 'motion/react'
import { HiExternalLink, HiLockClosed } from 'react-icons/hi'
import { AiFillGithub } from 'react-icons/ai'
import { SectionDivider, SectionTitle } from '../../styles/GlobalComponents'
import { projects } from '../../constants/constants'

const featured = projects.filter((p) => p.featured)
const others = projects.filter((p) => !p.featured)

const reveal = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
}

const Tags = ({ tags }) => (
  <ul className="flex flex-wrap gap-2">
    {tags.map((tag) => (
      <li
        key={tag}
        className="text-caption px-3 py-1 rounded-full border border-slate-300 text-slate-600 dark:border-white/15 dark:text-white/70"
      >
        {tag}
      </li>
    ))}
  </ul>
)

const ProjectLink = ({ href, label, ariaLabel, icon: Icon }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={`${ariaLabel} (opens in a new tab)`}
    className="inline-flex items-center gap-1.5 text-body font-semibold text-accent-cyan hover:underline underline-offset-4"
  >
    {label}
    <Icon className="w-4 h-4" />
  </a>
)

const PrivateBadge = () => (
  <span className="inline-flex items-center gap-1.5 text-small text-slate-500 dark:text-white/50">
    <HiLockClosed className="w-4 h-4" />
    Private · client work
  </span>
)

const ProjectFooter = ({ project }) => {
  const { visit, repo, title } = project
  if (!visit && !repo) return project.private ? <PrivateBadge /> : null
  return (
    <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
      {visit && <ProjectLink href={visit} label="Visit site" ariaLabel={`Visit ${title}`} icon={HiExternalLink} />}
      {repo && <ProjectLink href={repo} label="View code" ariaLabel={`View ${title} source code`} icon={AiFillGithub} />}
    </div>
  )
}

const FeaturedProject = ({ project, index }) => {
  const imageRight = index % 2 === 1
  const { title, subtitle, description, context, image, tags, visit } = project

  const screenshot = (
    <img
      src={image}
      alt={`Screenshot of ${title}`}
      loading="lazy"
      className="w-full aspect-[2880/1252] object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
    />
  )

  return (
    <motion.article
      {...reveal}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="grid gap-6 items-center md:grid-cols-12 md:gap-10"
    >
      <div className={`md:col-span-7 ${imageRight ? 'md:order-2' : ''}`}>
        {visit ? (
          <a
            href={visit}
            target="_blank"
            rel="noopener noreferrer"
            tabIndex={-1}
            aria-hidden="true"
            className="group block overflow-hidden rounded-xl border border-slate-200 dark:border-white/10 shadow-lg"
          >
            {screenshot}
          </a>
        ) : (
          <div className="overflow-hidden rounded-xl border border-slate-200 dark:border-white/10 shadow-lg">
            {screenshot}
          </div>
        )}
      </div>

      <div className={`md:col-span-5 ${imageRight ? 'md:order-1' : ''}`}>
        {context && (
          <p className="text-caption font-semibold uppercase tracking-widest text-accent-cyan mb-2">{context}</p>
        )}
        <h3 className="text-headline font-bold text-dark-bg dark:text-white">{title}</h3>
        <p className="text-lead font-light text-slate-600 dark:text-white/60 mb-4">{subtitle}</p>
        <p className="text-body text-slate-600 dark:text-white/70 mb-6">{description}</p>
        <div className="mb-6">
          <Tags tags={tags} />
        </div>
        <ProjectFooter project={project} />
      </div>
    </motion.article>
  )
}

const OtherProject = ({ project, index }) => {
  const { title, subtitle, description, context, tags } = project
  return (
    <motion.li
      {...reveal}
      transition={{ duration: 0.5, delay: (index % 3) * 0.1, ease: 'easeOut' }}
      className="flex flex-col h-full p-6 rounded-xl bg-light-card dark:bg-dark-card border border-slate-200 dark:border-white/10
        transition-colors hover:border-accent-cyan/50"
    >
      {context && (
        <p className="text-caption font-semibold uppercase tracking-widest text-accent-cyan mb-2">{context}</p>
      )}
      <h4 className="text-heading font-semibold text-dark-bg dark:text-white">{title}</h4>
      <p className="text-small text-slate-500 dark:text-white/50 mb-3">{subtitle}</p>
      <p className="text-body text-slate-600 dark:text-white/70 mb-5 flex-1">{description}</p>
      <div className="mb-5">
        <Tags tags={tags} />
      </div>
      <ProjectFooter project={project} />
    </motion.li>
  )
}

const Projects = () => (
  <section id="projects" className="max-w-content mx-auto px-4 py-6 md:px-12 md:py-8">
    <SectionDivider />
    <SectionTitle main>Projects</SectionTitle>

    <div className="flex flex-col gap-16 md:gap-24 pb-16 md:pb-24">
      {featured.map((project, i) => (
        <FeaturedProject key={project.id} project={project} index={i} />
      ))}
    </div>

    {others.length > 0 && (
      <>
        <h3 className="text-caption font-semibold uppercase tracking-widest text-slate-500 dark:text-white/50 mb-6">
          Other work
        </h3>
        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {others.map((project, i) => (
            <OtherProject key={project.id} project={project} index={i} />
          ))}
        </ul>
      </>
    )}
  </section>
)

export default Projects
