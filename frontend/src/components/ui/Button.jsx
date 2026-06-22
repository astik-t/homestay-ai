/**
 * Button Component
 *
 * A reusable button with variant, size, disabled, and onClick support.
 *
 * @param {Object} props
 * @param {'primary' | 'secondary' | 'outline'} [props.variant='primary'] - Visual style variant
 * @param {'sm' | 'md' | 'lg'} [props.size='md'] - Button size
 * @param {boolean} [props.disabled=false] - Whether the button is disabled
 * @param {() => void} [props.onClick] - Click handler
 * @param {React.ReactNode} props.children - Button content
 * @param {string} [props.className] - Additional CSS classes
 * @param {string} [props.type='button'] - Button type attribute
 */

const variantClasses = {
  primary:
    'bg-primary-600 text-white hover:bg-primary-700 active:bg-primary-800 shadow-md hover:shadow-lg dark:bg-primary-500 dark:hover:bg-primary-600',
  secondary:
    'bg-surface-200 text-surface-800 hover:bg-surface-300 active:bg-surface-400 dark:bg-surface-800 dark:text-surface-200 dark:hover:bg-surface-700',
  outline:
    'bg-transparent border-2 border-primary-500 text-primary-600 hover:bg-primary-50 active:bg-primary-100 dark:border-primary-400 dark:text-primary-400 dark:hover:bg-primary-900/20',
};

const sizeClasses = {
  sm: 'px-3 py-1.5 text-sm rounded-md',
  md: 'px-5 py-2.5 text-base rounded-lg',
  lg: 'px-7 py-3.5 text-lg rounded-xl',
};

export default function Button({
  variant = 'primary',
  size = 'md',
  disabled = false,
  onClick,
  children,
  className = '',
  type = 'button',
  ...rest
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`
        inline-flex items-center justify-center gap-2
        font-semibold
        transition-all duration-200 ease-in-out
        cursor-pointer
        focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500
        ${variantClasses[variant] || variantClasses.primary}
        ${sizeClasses[size] || sizeClasses.md}
        ${disabled ? 'opacity-50 cursor-not-allowed pointer-events-none' : ''}
        ${className}
      `}
      {...rest}
    >
      {children}
    </button>
  );
}
