// Renders an <a> when `href` is given, otherwise a <button>.
// variant: 'primary' (gradient pill) | 'outline'
const Button = ({ children, href, onClick, variant = 'primary', disabled, className = '', ...rest }) => {
  const base =
    'inline-flex items-center justify-center rounded-full font-semibold transition-all duration-300 ' +
    'px-8 py-3.5 text-body md:px-10 md:py-4 ' +
    'focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-cyan focus-visible:ring-offset-2 ' +
    'focus-visible:ring-offset-light-bg dark:focus-visible:ring-offset-dark-bg ' +
    'hover:-translate-y-0.5 active:translate-y-0'

  const variants = {
    primary:
      'text-white bg-gradient-to-r from-accent-cyan to-accent-purple hover:shadow-lg hover:shadow-accent-purple/25',
    outline:
      'border-2 border-slate-300 text-dark-bg hover:border-accent-cyan hover:text-accent-cyan ' +
      'dark:border-white/20 dark:text-white dark:hover:border-accent-cyan dark:hover:text-accent-cyan',
  }

  const classes = `${base} ${variants[variant]} ${disabled ? 'opacity-50 cursor-not-allowed pointer-events-none' : 'cursor-pointer'} ${className}`

  if (href) {
    return (
      <a href={href} className={classes} {...rest}>
        {children}
      </a>
    )
  }

  return (
    <button onClick={onClick} disabled={disabled} className={classes} {...rest}>
      {children}
    </button>
  )
}

export default Button
