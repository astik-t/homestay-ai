/**
 * Loader Component
 *
 * Displays a loading indicator — either a spinner or a skeleton placeholder.
 *
 * @param {Object} props
 * @param {'spinner' | 'skeleton'} [props.variant='spinner'] - Loader type
 * @param {'sm' | 'md' | 'lg'} [props.size='md'] - Loader size
 * @param {string} [props.className] - Additional CSS classes
 * @param {number} [props.count=1] - Number of skeleton lines (skeleton variant only)
 */

const spinnerSizes = {
  sm: 'w-5 h-5',
  md: 'w-8 h-8',
  lg: 'w-12 h-12',
};

const skeletonSizes = {
  sm: 'h-4',
  md: 'h-6',
  lg: 'h-8',
};

function Spinner({ size = 'md', className = '' }) {
  return (
    <div
      className={`inline-flex items-center justify-center ${className}`}
      role="status"
      aria-label="Loading"
    >
      <svg
        className={`animate-spin ${spinnerSizes[size] || spinnerSizes.md} text-primary-500`}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
        />
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        />
      </svg>
      <span className="sr-only">Loading...</span>
    </div>
  );
}

function Skeleton({ size = 'md', count = 1, className = '' }) {
  return (
    <div className={`space-y-3 ${className}`} role="status" aria-label="Loading content">
      {Array.from({ length: count }).map((_, i) => (
        <div
          key={i}
          className={`
            ${skeletonSizes[size] || skeletonSizes.md}
            rounded-lg
            bg-surface-200 dark:bg-surface-800
          `}
          style={{
            width: i === count - 1 && count > 1 ? '75%' : '100%',
            background:
              'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.4) 50%, transparent 100%)',
            backgroundSize: '200% 100%',
            animation: 'shimmer 1.5s infinite',
            backgroundColor: 'var(--color-surface-200)',
          }}
        />
      ))}
      <span className="sr-only">Loading...</span>
    </div>
  );
}

export default function Loader({
  variant = 'spinner',
  size = 'md',
  className = '',
  count = 1,
}) {
  if (variant === 'skeleton') {
    return <Skeleton size={size} count={count} className={className} />;
  }
  return <Spinner size={size} className={className} />;
}
