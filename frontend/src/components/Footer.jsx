import { Link } from 'react-router-dom';

/**
 * Footer Component
 *
 * Simple responsive footer with links, social icons, and copyright.
 */

export default function Footer() {
  return (
    <footer className="bg-surface-50 dark:bg-surface-900/50 border-t border-surface-200 dark:border-surface-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 no-underline">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <span className="text-lg font-bold text-surface-900 dark:text-white">
                Homestay<span className="text-primary-500">AI</span>
              </span>
            </Link>
            <p className="mt-3 text-sm text-surface-500 dark:text-surface-400 leading-relaxed">
              AI-powered travel platform helping you discover unique homestays worldwide.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-surface-900 dark:text-white text-sm uppercase tracking-wider mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2 list-none p-0 m-0">
              {[
                { to: '/', label: 'Home' },
                { to: '/about', label: 'About Us' },
                { to: '/dashboard', label: 'Dashboard' },
                { to: '/showcase', label: 'Components' },
              ].map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm text-surface-500 hover:text-primary-600 dark:text-surface-400 dark:hover:text-primary-400 transition-colors no-underline"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold text-surface-900 dark:text-white text-sm uppercase tracking-wider mb-4">
              Support
            </h4>
            <ul className="space-y-2 list-none p-0 m-0">
              {['Help Center', 'Safety', 'Cancellation', 'Contact Us'].map((label) => (
                <li key={label}>
                  <span className="text-sm text-surface-500 dark:text-surface-400 cursor-default">
                    {label}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-surface-900 dark:text-white text-sm uppercase tracking-wider mb-4">
              Contact
            </h4>
            <ul className="space-y-2 list-none p-0 m-0">
              <li className="text-sm text-surface-500 dark:text-surface-400 flex items-center gap-2">
                <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                hello@homestayai.com
              </li>
              <li className="text-sm text-surface-500 dark:text-surface-400 flex items-center gap-2">
                <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Bangalore, India
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-surface-200 dark:border-surface-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-surface-400 dark:text-surface-500">
            © {new Date().getFullYear()} HomestayAI. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <span className="text-sm text-surface-400 dark:text-surface-500 hover:text-primary-500 dark:hover:text-primary-400 cursor-pointer transition-colors">
              Privacy Policy
            </span>
            <span className="text-sm text-surface-400 dark:text-surface-500 hover:text-primary-500 dark:hover:text-primary-400 cursor-pointer transition-colors">
              Terms of Service
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
