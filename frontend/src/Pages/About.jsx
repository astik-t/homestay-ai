import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Button } from '../components/ui';

/**
 * About Page
 *
 * Information about HomestayAI — mission, features, and team.
 */

const features = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    title: 'AI-Powered Recommendations',
    description: 'Our Gemini-powered AI analyzes your preferences to suggest the perfect homestay.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
    title: 'Secure Booking',
    description: 'JWT-authenticated system with encrypted payments for peace of mind.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Global Reach',
    description: 'Discover unique homestays in over 150 cities across the world.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Instant Confirmation',
    description: 'Real-time booking confirmations with immediate host communication.',
  },
];

const techStack = [
  { name: 'React.js', desc: 'Frontend framework' },
  { name: 'Tailwind CSS', desc: 'Styling' },
  { name: 'Node.js', desc: 'Backend runtime' },
  { name: 'Express.js', desc: 'Server framework' },
  { name: 'MongoDB Atlas', desc: 'Database' },
  { name: 'Gemini API', desc: 'AI integration' },
];

export default function About() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-primary-50 to-white dark:from-surface-900 dark:to-surface-950 py-16 sm:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-surface-900 dark:text-white"
              style={{ animation: 'fade-in 0.5s ease-out' }}
            >
              About <span className="text-primary-500">HomestayAI</span>
            </h1>
            <p className="mt-4 text-lg text-surface-600 dark:text-surface-400 max-w-2xl mx-auto">
              We're on a mission to transform the way people discover and book unique homestay
              experiences using the power of artificial intelligence.
            </p>
          </div>
        </section>

        {/* Features */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-surface-900 dark:text-white mb-12">
            Why Choose Us
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, i) => (
              <div
                key={i}
                className="p-6 rounded-xl bg-white dark:bg-surface-900 border border-surface-200 dark:border-surface-800 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                style={{ animation: `fade-in 0.5s ease-out ${i * 0.1}s both` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="font-semibold text-surface-900 dark:text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-surface-500 dark:text-surface-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Tech Stack */}
        <section className="bg-surface-50 dark:bg-surface-900/30 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-center text-surface-900 dark:text-white mb-12">
              Built With Modern Tech
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
              {techStack.map((tech) => (
                <div
                  key={tech.name}
                  className="p-4 rounded-xl bg-white dark:bg-surface-900 border border-surface-200 dark:border-surface-800 text-center hover:border-primary-300 dark:hover:border-primary-700 transition-colors"
                >
                  <p className="font-semibold text-surface-900 dark:text-white text-sm">
                    {tech.name}
                  </p>
                  <p className="text-xs text-surface-500 dark:text-surface-400 mt-1">{tech.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-surface-900 dark:text-white mb-4">
            Ready to Explore?
          </h2>
          <p className="text-surface-500 dark:text-surface-400 mb-8 max-w-lg mx-auto">
            Start discovering unique homestays tailored to your travel preferences.
          </p>
          <Button variant="primary" size="lg">
            Get Started
          </Button>
        </section>
      </main>

      <Footer />
    </div>
  );
}
