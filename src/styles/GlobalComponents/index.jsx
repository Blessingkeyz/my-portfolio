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
    className={`font-extrabold bg-gradient-to-br from-dark-bg to-dark-bg/70 dark:from-white dark:to-white/60 bg-clip-text text-transparent mb-4
      ${main
        ? 'text-4xl leading-tight pt-6 pb-3 md:text-5xl md:leading-[56px] md:pt-14 md:pb-4 lg:text-[56px] lg:leading-[72px]'
        : 'text-3xl leading-tight md:text-4xl md:leading-[48px] lg:text-[48px] lg:leading-[56px]'}
      ${className}`}
  >
    {children}
  </h2>
)

export const SectionText = ({ children, className = '' }) => (
  <p
    className={`max-w-3xl text-base leading-6 font-light pb-6 text-slate-600/80 dark:text-white/50
      md:text-xl md:leading-8 md:pb-10 lg:text-2xl lg:leading-10 lg:pb-14 ${className}`}
  >
    {children}
  </p>
)

export const SectionText2 = ({ children, className = '' }) => (
  <p
    className={`text-base text-justify leading-6 font-light pb-6 text-slate-600/80 dark:text-white/50
      md:text-xl md:leading-8 md:pb-10 lg:text-2xl lg:leading-10 lg:pb-14 ${className}`}
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
