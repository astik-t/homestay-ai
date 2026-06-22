import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Button, Input, Modal, Loader, useToast } from '../components/ui';

/**
 * Dashboard Page
 *
 * Showcases all 5 UI components in a practical context:
 * - Button (actions)
 * - Input (search/filter)
 * - Modal (add listing)
 * - Toast (notifications)
 * - Loader (loading states)
 */

const mockListings = [
  { id: 1, name: 'Cozy Mountain Retreat', location: 'Shimla', price: '$65', status: 'Active', bookings: 24 },
  { id: 2, name: 'Beachfront Paradise', location: 'Goa', price: '$89', status: 'Active', bookings: 18 },
  { id: 3, name: 'Heritage Haveli Stay', location: 'Jaipur', price: '$45', status: 'Pending', bookings: 12 },
  { id: 4, name: 'Lakeside Cottage', location: 'Udaipur', price: '$72', status: 'Active', bookings: 31 },
];

const stats = [
  { label: 'Total Listings', value: '12', icon: '🏠', change: '+2 this month' },
  { label: 'Active Bookings', value: '85', icon: '📋', change: '+12% vs last month' },
  { label: 'Revenue', value: '$4,250', icon: '💰', change: '+8% vs last month' },
  { label: 'Avg Rating', value: '4.7', icon: '⭐', change: '+0.2 this month' },
];

export default function Dashboard() {
  const [search, setSearch] = useState('');
  const [modalOpen, setModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  // Modal form state
  const [formData, setFormData] = useState({ name: '', location: '', price: '' });
  const [formErrors, setFormErrors] = useState({});

  const filteredListings = mockListings.filter(
    (l) =>
      l.name.toLowerCase().includes(search.toLowerCase()) ||
      l.location.toLowerCase().includes(search.toLowerCase())
  );

  const handleSubmit = () => {
    const errors = {};
    if (!formData.name.trim()) errors.name = 'Listing name is required';
    if (!formData.location.trim()) errors.location = 'Location is required';
    if (!formData.price.trim()) errors.price = 'Price is required';

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      toast({ message: 'Please fix the form errors', type: 'error' });
      return;
    }

    setFormErrors({});
    setModalOpen(false);
    toast({ message: `"${formData.name}" listing created successfully!`, type: 'success' });
    setFormData({ name: '', location: '', price: '' });
  };

  const handleRefresh = () => {
    setLoading(true);
    toast({ message: 'Refreshing data...', type: 'info', duration: 1500 });
    setTimeout(() => {
      setLoading(false);
      toast({ message: 'Data refreshed successfully!', type: 'success' });
    }, 2000);
  };

  return (
    <div className="min-h-screen flex flex-col bg-surface-50 dark:bg-surface-950">
      <Navbar />

      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full">
        {/* Page Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-surface-900 dark:text-white">
              Dashboard
            </h1>
            <p className="text-surface-500 dark:text-surface-400 mt-1">
              Manage your homestay listings and bookings
            </p>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="secondary" size="sm" onClick={handleRefresh}>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
              Refresh
            </Button>
            <Button variant="primary" size="sm" onClick={() => setModalOpen(true)}>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
              Add Listing
            </Button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-white dark:bg-surface-900 rounded-xl p-5 border border-surface-200 dark:border-surface-800 hover:shadow-md transition-shadow"
              style={{ animation: 'fade-in 0.4s ease-out' }}
            >
              <div className="flex items-center justify-between">
                <span className="text-2xl">{stat.icon}</span>
              </div>
              <div className="mt-3">
                <p className="text-2xl font-bold text-surface-900 dark:text-white">
                  {stat.value}
                </p>
                <p className="text-sm text-surface-500 dark:text-surface-400">{stat.label}</p>
              </div>
              <p className="mt-2 text-xs text-emerald-600 dark:text-emerald-400 font-medium">
                {stat.change}
              </p>
            </div>
          ))}
        </div>

        {/* Listings Table Section */}
        <div className="bg-white dark:bg-surface-900 rounded-xl border border-surface-200 dark:border-surface-800">
          {/* Table Header */}
          <div className="p-4 sm:p-6 border-b border-surface-200 dark:border-surface-800">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <h2 className="text-lg font-semibold text-surface-900 dark:text-white">
                Your Listings
              </h2>
              <div className="w-full sm:w-72">
                <Input
                  placeholder="Search listings..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>
            </div>
          </div>

          {/* Table Content */}
          {loading ? (
            <div className="p-8 flex flex-col items-center gap-4">
              <Loader variant="spinner" size="lg" />
              <p className="text-sm text-surface-500 dark:text-surface-400">Loading listings...</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-surface-200 dark:border-surface-800">
                    <th className="text-left px-4 sm:px-6 py-3 text-xs font-semibold text-surface-500 dark:text-surface-400 uppercase tracking-wider">
                      Listing
                    </th>
                    <th className="text-left px-4 sm:px-6 py-3 text-xs font-semibold text-surface-500 dark:text-surface-400 uppercase tracking-wider hidden sm:table-cell">
                      Location
                    </th>
                    <th className="text-left px-4 sm:px-6 py-3 text-xs font-semibold text-surface-500 dark:text-surface-400 uppercase tracking-wider">
                      Price
                    </th>
                    <th className="text-left px-4 sm:px-6 py-3 text-xs font-semibold text-surface-500 dark:text-surface-400 uppercase tracking-wider hidden md:table-cell">
                      Bookings
                    </th>
                    <th className="text-left px-4 sm:px-6 py-3 text-xs font-semibold text-surface-500 dark:text-surface-400 uppercase tracking-wider">
                      Status
                    </th>
                    <th className="text-right px-4 sm:px-6 py-3 text-xs font-semibold text-surface-500 dark:text-surface-400 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-surface-100 dark:divide-surface-800">
                  {filteredListings.map((listing) => (
                    <tr
                      key={listing.id}
                      className="hover:bg-surface-50 dark:hover:bg-surface-800/50 transition-colors"
                    >
                      <td className="px-4 sm:px-6 py-4">
                        <span className="font-medium text-surface-900 dark:text-white text-sm">
                          {listing.name}
                        </span>
                      </td>
                      <td className="px-4 sm:px-6 py-4 text-sm text-surface-500 dark:text-surface-400 hidden sm:table-cell">
                        {listing.location}
                      </td>
                      <td className="px-4 sm:px-6 py-4 text-sm font-medium text-surface-900 dark:text-white">
                        {listing.price}
                      </td>
                      <td className="px-4 sm:px-6 py-4 text-sm text-surface-500 dark:text-surface-400 hidden md:table-cell">
                        {listing.bookings}
                      </td>
                      <td className="px-4 sm:px-6 py-4">
                        <span
                          className={`
                            inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium
                            ${
                              listing.status === 'Active'
                                ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-400'
                                : 'bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-400'
                            }
                          `}
                        >
                          {listing.status}
                        </span>
                      </td>
                      <td className="px-4 sm:px-6 py-4 text-right">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() =>
                            toast({ message: `Editing "${listing.name}"`, type: 'info' })
                          }
                        >
                          Edit
                        </Button>
                      </td>
                    </tr>
                  ))}
                  {filteredListings.length === 0 && (
                    <tr>
                      <td colSpan={6} className="px-6 py-12 text-center text-surface-400">
                        No listings found matching "{search}"
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </main>

      {/* Add Listing Modal */}
      <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)} title="Add New Listing">
        <div className="space-y-4">
          <Input
            label="Listing Name"
            placeholder="e.g. Cozy Mountain Retreat"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            error={formErrors.name}
          />
          <Input
            label="Location"
            placeholder="e.g. Shimla, India"
            value={formData.location}
            onChange={(e) => setFormData({ ...formData, location: e.target.value })}
            error={formErrors.location}
          />
          <Input
            label="Price per Night"
            placeholder="e.g. $65"
            value={formData.price}
            onChange={(e) => setFormData({ ...formData, price: e.target.value })}
            error={formErrors.price}
          />
          <div className="flex items-center justify-end gap-3 pt-4 border-t border-surface-200 dark:border-surface-800">
            <Button variant="secondary" onClick={() => setModalOpen(false)}>
              Cancel
            </Button>
            <Button variant="primary" onClick={handleSubmit}>
              Create Listing
            </Button>
          </div>
        </div>
      </Modal>

      <Footer />
    </div>
  );
}
