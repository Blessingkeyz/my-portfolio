const Button = ({ children, onClick, alt, disabled }) => (
  <button
    onClick={onClick}
    disabled={disabled}
    className={`relative rounded-full overflow-hidden font-semibold text-white transition-all duration-300
      bg-gradient-to-r from-accent-cyan to-accent-purple
      hover:opacity-90 hover:scale-105 focus:outline-none active:scale-95
      ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
      ${alt
        ? 'px-8 py-3 text-base'
        : 'w-full py-4 text-lg md:w-[262px] md:py-5 md:text-xl'
      }
      mb-8 md:mb-16`}
  >
    {children}
  </button>
)

export default Button
