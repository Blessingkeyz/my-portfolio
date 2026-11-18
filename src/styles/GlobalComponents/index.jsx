export const Section = ({ children, id, className = '' }) => (
  <section
    id={id}
    className={`flex flex-col max-w-content mx-auto px-4 py-6 relative overflow-hidden md:px-12 md:py-8 ${className}`}
  >
    {children}
  </section>
)

export const SectionTitle = ({ children, main, className = '' }) => (
  <h2
    className={`font-bold bg-gradient-to-br from-dark-bg to-dark-bg/70 dark:from-white dark:to-white/60 bg-clip-text text-transparent pb-1 mb-6
      text-title ${main ? 'pt-6 md:pt-14' : ''}
      ${className}`}
  >
    {children}
  </h2>
)

export const SectionText = ({ children, className = '' }) => (
  <p
    className={`max-w-3xl text-lead font-light pb-8 text-slate-600 dark:text-white/60 md:pb-12 ${className}`}
  >
    {children}
  </p>
)

export const SectionText2 = ({ children, className = '' }) => (
  <p
    className={`max-w-4xl text-lead font-light pb-6 text-slate-600 dark:text-white/60 ${className}`}
  >
    {children}
  </p>
)

export const SectionDivider = ({ colorAlt, divider, className = '' }) => (
  <div
    className={`w-8 h-0.5 rounded-full
      ${colorAlt
        ? 'bg-gradient-to-r from-accent-orange to-accent-purple'
        : 'bg-gradient-to-r from-accent-cyan to-accent-purple'}
      ${divider ? 'my-16' : ''}
      md:w-12 md:h-1 lg:w-16 lg:h-1.5 ${className}`}
  />
)
