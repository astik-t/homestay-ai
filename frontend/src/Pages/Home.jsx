import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Card from '../components/Card';
import Footer from '../components/Footer';
import { Loader } from '../components/ui';

/**
 * Home Page
 *
 * Landing page with Navbar, Hero section, featured listings grid,
 * and Footer. Uses Loader (skeleton) while simulating data fetch.
 */

const featuredListings = [
  { title: 'Cozy Mountain Retreat', location: 'Shimla, India', price: '$65', rating: 4.8, tag: 'Popular' },
  { title: 'Beachfront Paradise', location: 'Goa, India', price: '$89', rating: 4.9, tag: 'New' },
  { title: 'Heritage Haveli Stay', location: 'Jaipur, India', price: '$45', rating: 4.7 },
  { title: 'Lakeside Cottage', location: 'Udaipur, India', price: '$72', rating: 4.6 },
  { title: 'Urban Loft Experience', location: 'Mumbai, India', price: '$95', rating: 4.5, tag: 'Trending' },
  { title: 'Tea Garden Bungalow', location: 'Darjeeling, India', price: '$55', rating: 4.8 },
];

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <Hero />

      {/* Featured Listings */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 w-full">
        <div className="text-center mb-12" style={{ animation: 'fade-in 0.5s ease-out' }}>
          <h2 className="text-3xl sm:text-4xl font-bold text-surface-900 dark:text-white">
            Featured <span className="text-primary-500">Homestays</span>
          </h2>
          <p className="mt-3 text-surface-500 dark:text-surface-400 max-w-xl mx-auto">
            Handpicked accommodations recommended by our AI for the best experience.
          </p>
        </div>

        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className="bg-white dark:bg-surface-900 rounded-2xl overflow-hidden border border-surface-200 dark:border-surface-800 p-4"
              >
                <Loader variant="skeleton" size="lg" className="mb-4 !h-48 rounded-xl" />
                <Loader variant="skeleton" size="md" count={3} />
              </div>
            ))}
          </div>
        ) : (
          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            style={{ animation: 'fade-in 0.5s ease-out' }}
          >
            {featuredListings.map((listing, i) => (
              <Card key={i} {...listing} />
            ))}
          </div>
        )}
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-700 dark:from-primary-700 dark:to-primary-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Ready to Start Your Journey?
          </h2>
          <p className="mt-4 text-primary-100 text-lg max-w-xl mx-auto">
            Join thousands of travelers discovering unique stays with AI-powered recommendations.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
