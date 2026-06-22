/**
 * Card Component
 *
 * Homestay listing card with image placeholder, title, location, price, and rating.
 * Dark mode compatible.
 *
 * @param {Object} props
 * @param {string} props.title - Listing title
 * @param {string} props.location - Location text
 * @param {string} props.price - Price per night
 * @param {number} props.rating - Rating value (0-5)
 * @param {string} [props.image] - Image URL (uses gradient placeholder if omitted)
 * @param {string} [props.tag] - Optional tag (e.g., "Popular", "New")
 */

export default function Card({
  title = 'Cozy Mountain Retreat',
  location = 'Shimla, India',
  price = '$65',
  rating = 4.8,
  image,
  tag,
}) {
  return (
    <div className="group bg-white dark:bg-surface-900 rounded-2xl overflow-hidden border border-surface-200 dark:border-surface-800 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      {/* Image */}
      <div className="relative h-48 sm:h-52 overflow-hidden">
        {image ? (
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-primary-400 to-primary-600 dark:from-primary-600 dark:to-primary-800 flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
            <svg className="w-16 h-16 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
          </div>
        )}

        {/* Tag */}
        {tag && (
          <span className="absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-semibold bg-white/90 dark:bg-surface-900/90 text-primary-600 dark:text-primary-400 backdrop-blur-sm">
            {tag}
          </span>
        )}

        {/* Favorite button */}
        <button className="absolute top-3 right-3 p-2 rounded-full bg-white/80 dark:bg-surface-900/80 backdrop-blur-sm hover:bg-white dark:hover:bg-surface-900 transition-colors cursor-pointer group/fav">
          <svg className="w-4 h-4 text-surface-400 group-hover/fav:text-red-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
        </button>
      </div>

      {/* Content */}
      <div className="p-4">
        <div className="flex items-start justify-between gap-2">
          <div>
            <h3 className="font-semibold text-surface-900 dark:text-white text-base">
              {title}
            </h3>
            <p className="text-sm text-surface-500 dark:text-surface-400 mt-0.5 flex items-center gap-1">
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              {location}
            </p>
          </div>

          {/* Rating */}
          <div className="flex items-center gap-1 text-sm font-medium">
            <svg className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span className="text-surface-700 dark:text-surface-300">{rating}</span>
          </div>
        </div>

        {/* Price */}
        <div className="mt-3 pt-3 border-t border-surface-100 dark:border-surface-800">
          <span className="text-lg font-bold text-surface-900 dark:text-white">{price}</span>
          <span className="text-sm text-surface-500 dark:text-surface-400"> / night</span>
        </div>
      </div>
    </div>
  );
}
