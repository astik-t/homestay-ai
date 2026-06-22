/**
 * Input Component
 *
 * A reusable form input with label, placeholder, error display, and dark mode support.
 *
 * @param {Object} props
 * @param {string} [props.label] - Label text displayed above the input
 * @param {string} [props.placeholder] - Placeholder text
 * @param {string} [props.type='text'] - Input type (text, email, password, number, etc.)
 * @param {string} [props.value] - Controlled input value
 * @param {(e: React.ChangeEvent<HTMLInputElement>) => void} [props.onChange] - Change handler
 * @param {string} [props.error] - Error message displayed below the input
 * @param {string} [props.id] - Input element ID
 * @param {string} [props.name] - Input element name
 * @param {string} [props.className] - Additional CSS classes for the wrapper
 * @param {boolean} [props.disabled=false] - Whether the input is disabled
 */

export default function Input({
  label,
  placeholder,
  type = 'text',
  value,
  onChange,
  error,
  id,
  name,
  className = '',
  disabled = false,
  ...rest
}) {
  const inputId = id || name || label?.toLowerCase().replace(/\s+/g, '-');

  return (
    <div className={`flex flex-col gap-1.5 ${className}`}>
      {label && (
        <label
          htmlFor={inputId}
          className="text-sm font-medium text-surface-700 dark:text-surface-300"
        >
          {label}
        </label>
      )}
      <input
        id={inputId}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        disabled={disabled}
        className={`
          w-full px-4 py-2.5 rounded-lg
          text-base font-normal
          bg-white dark:bg-surface-900
          text-surface-900 dark:text-surface-100
          placeholder:text-surface-400 dark:placeholder:text-surface-600
          border transition-all duration-200
          ${
            error
              ? 'border-error focus:border-error focus:ring-2 focus:ring-error/30'
              : 'border-surface-300 dark:border-surface-700 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/30 dark:focus:border-primary-400'
          }
          ${disabled ? 'opacity-50 cursor-not-allowed bg-surface-100 dark:bg-surface-800' : ''}
          outline-none
        `}
        {...rest}
      />
      {error && (
        <p className="text-sm text-error flex items-center gap-1">
          <svg
            className="w-4 h-4 shrink-0"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
              clipRule="evenodd"
            />
          </svg>
          {error}
        </p>
      )}
    </div>
  );
}
