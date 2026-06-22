import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Button, Input, Modal, Loader, useToast } from '../components/ui';

/**
 * Showcase Page
 *
 * Dedicated demo page displaying all 5 UI components with
 * interactive controls and all prop variants.
 */

export default function Showcase() {
  const [modalOpen, setModalOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [inputError, setInputError] = useState('');
  const { toast } = useToast();

  return (
    <div className="min-h-screen flex flex-col bg-surface-50 dark:bg-surface-950">
      <Navbar />

      <main className="flex-1 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full">
        <div className="mb-12 text-center" style={{ animation: 'fade-in 0.5s ease-out' }}>
          <h1 className="text-3xl sm:text-4xl font-bold text-surface-900 dark:text-white">
            Component <span className="text-primary-500">Library</span>
          </h1>
          <p className="mt-3 text-surface-500 dark:text-surface-400 max-w-xl mx-auto">
            All 5 reusable UI components — Button, Input, Modal, Toast, and Loader.
          </p>
        </div>

        <div className="space-y-12">
          {/* ===== BUTTON ===== */}
          <section className="bg-white dark:bg-surface-900 rounded-2xl border border-surface-200 dark:border-surface-800 p-6 sm:p-8">
            <h2 className="text-xl font-bold text-surface-900 dark:text-white mb-2">Button</h2>
            <p className="text-sm text-surface-500 dark:text-surface-400 mb-6">
              Supports <code className="px-1.5 py-0.5 bg-surface-100 dark:bg-surface-800 rounded text-xs">variant</code> (primary, secondary, outline), <code className="px-1.5 py-0.5 bg-surface-100 dark:bg-surface-800 rounded text-xs">size</code> (sm, md, lg), and <code className="px-1.5 py-0.5 bg-surface-100 dark:bg-surface-800 rounded text-xs">disabled</code>.
            </p>

            {/* Variants */}
            <div className="mb-6">
              <h3 className="text-sm font-semibold text-surface-700 dark:text-surface-300 mb-3 uppercase tracking-wider">
                Variants
              </h3>
              <div className="flex flex-wrap gap-3">
                <Button variant="primary">Primary</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="outline">Outline</Button>
              </div>
            </div>

            {/* Sizes */}
            <div className="mb-6">
              <h3 className="text-sm font-semibold text-surface-700 dark:text-surface-300 mb-3 uppercase tracking-wider">
                Sizes
              </h3>
              <div className="flex flex-wrap items-center gap-3">
                <Button size="sm">Small</Button>
                <Button size="md">Medium</Button>
                <Button size="lg">Large</Button>
              </div>
            </div>

            {/* Disabled */}
            <div>
              <h3 className="text-sm font-semibold text-surface-700 dark:text-surface-300 mb-3 uppercase tracking-wider">
                Disabled
              </h3>
              <div className="flex flex-wrap gap-3">
                <Button variant="primary" disabled>Primary Disabled</Button>
                <Button variant="secondary" disabled>Secondary Disabled</Button>
                <Button variant="outline" disabled>Outline Disabled</Button>
              </div>
            </div>
          </section>

          {/* ===== INPUT ===== */}
          <section className="bg-white dark:bg-surface-900 rounded-2xl border border-surface-200 dark:border-surface-800 p-6 sm:p-8">
            <h2 className="text-xl font-bold text-surface-900 dark:text-white mb-2">Input</h2>
            <p className="text-sm text-surface-500 dark:text-surface-400 mb-6">
              Supports <code className="px-1.5 py-0.5 bg-surface-100 dark:bg-surface-800 rounded text-xs">label</code>, <code className="px-1.5 py-0.5 bg-surface-100 dark:bg-surface-800 rounded text-xs">placeholder</code>, <code className="px-1.5 py-0.5 bg-surface-100 dark:bg-surface-800 rounded text-xs">type</code>, <code className="px-1.5 py-0.5 bg-surface-100 dark:bg-surface-800 rounded text-xs">value</code>, <code className="px-1.5 py-0.5 bg-surface-100 dark:bg-surface-800 rounded text-xs">onChange</code>, and <code className="px-1.5 py-0.5 bg-surface-100 dark:bg-surface-800 rounded text-xs">error</code>.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <Input
                label="Default Input"
                placeholder="Type something..."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
              />
              <Input
                label="With Error"
                placeholder="Invalid value"
                value="bad@"
                onChange={() => {}}
                error={inputError || 'Please enter a valid email address'}
              />
              <Input
                label="Password"
                type="password"
                placeholder="Enter password"
              />
              <Input
                label="Disabled Input"
                placeholder="Cannot edit"
                disabled
              />
            </div>
          </section>

          {/* ===== MODAL ===== */}
          <section className="bg-white dark:bg-surface-900 rounded-2xl border border-surface-200 dark:border-surface-800 p-6 sm:p-8">
            <h2 className="text-xl font-bold text-surface-900 dark:text-white mb-2">Modal</h2>
            <p className="text-sm text-surface-500 dark:text-surface-400 mb-6">
              Supports <code className="px-1.5 py-0.5 bg-surface-100 dark:bg-surface-800 rounded text-xs">isOpen</code>, <code className="px-1.5 py-0.5 bg-surface-100 dark:bg-surface-800 rounded text-xs">onClose</code>, <code className="px-1.5 py-0.5 bg-surface-100 dark:bg-surface-800 rounded text-xs">title</code>, and <code className="px-1.5 py-0.5 bg-surface-100 dark:bg-surface-800 rounded text-xs">children</code>. Traps focus and closes on Escape key.
            </p>

            <Button variant="primary" onClick={() => setModalOpen(true)}>
              Open Modal
            </Button>

            <Modal
              isOpen={modalOpen}
              onClose={() => setModalOpen(false)}
              title="Example Modal"
            >
              <p className="text-surface-600 dark:text-surface-400 mb-4">
                This modal traps focus inside it. Try pressing <kbd className="px-2 py-0.5 bg-surface-100 dark:bg-surface-800 rounded text-xs font-mono">Tab</kbd> to cycle through focusable elements, or <kbd className="px-2 py-0.5 bg-surface-100 dark:bg-surface-800 rounded text-xs font-mono">Escape</kbd> to close.
              </p>
              <Input label="Name" placeholder="Enter your name" className="mb-4" />
              <div className="flex justify-end gap-3">
                <Button variant="secondary" onClick={() => setModalOpen(false)}>
                  Cancel
                </Button>
                <Button variant="primary" onClick={() => {
                  setModalOpen(false);
                  toast({ message: 'Modal action completed!', type: 'success' });
                }}>
                  Confirm
                </Button>
              </div>
            </Modal>
          </section>

          {/* ===== TOAST ===== */}
          <section className="bg-white dark:bg-surface-900 rounded-2xl border border-surface-200 dark:border-surface-800 p-6 sm:p-8">
            <h2 className="text-xl font-bold text-surface-900 dark:text-white mb-2">Toast</h2>
            <p className="text-sm text-surface-500 dark:text-surface-400 mb-6">
              Notification system built from scratch. Auto-dismisses after 3 seconds. Supports types: success, error, warning, info.
            </p>

            <div className="flex flex-wrap gap-3">
              <Button
                variant="primary"
                onClick={() => toast({ message: 'This is a success toast!', type: 'success' })}
              >
                Success Toast
              </Button>
              <Button
                variant="secondary"
                onClick={() => toast({ message: 'This is an error toast!', type: 'error' })}
              >
                Error Toast
              </Button>
              <Button
                variant="outline"
                onClick={() => toast({ message: 'This is a warning toast!', type: 'warning' })}
              >
                Warning Toast
              </Button>
              <Button
                variant="secondary"
                onClick={() => toast({ message: 'This is an info toast!', type: 'info' })}
              >
                Info Toast
              </Button>
            </div>
          </section>

          {/* ===== LOADER ===== */}
          <section className="bg-white dark:bg-surface-900 rounded-2xl border border-surface-200 dark:border-surface-800 p-6 sm:p-8">
            <h2 className="text-xl font-bold text-surface-900 dark:text-white mb-2">Loader</h2>
            <p className="text-sm text-surface-500 dark:text-surface-400 mb-6">
              Supports <code className="px-1.5 py-0.5 bg-surface-100 dark:bg-surface-800 rounded text-xs">variant</code> (spinner, skeleton) and <code className="px-1.5 py-0.5 bg-surface-100 dark:bg-surface-800 rounded text-xs">size</code> (sm, md, lg).
            </p>

            {/* Spinners */}
            <div className="mb-6">
              <h3 className="text-sm font-semibold text-surface-700 dark:text-surface-300 mb-3 uppercase tracking-wider">
                Spinner
              </h3>
              <div className="flex items-center gap-6">
                <div className="text-center">
                  <Loader variant="spinner" size="sm" />
                  <p className="text-xs text-surface-400 mt-2">Small</p>
                </div>
                <div className="text-center">
                  <Loader variant="spinner" size="md" />
                  <p className="text-xs text-surface-400 mt-2">Medium</p>
                </div>
                <div className="text-center">
                  <Loader variant="spinner" size="lg" />
                  <p className="text-xs text-surface-400 mt-2">Large</p>
                </div>
              </div>
            </div>

            {/* Skeletons */}
            <div>
              <h3 className="text-sm font-semibold text-surface-700 dark:text-surface-300 mb-3 uppercase tracking-wider">
                Skeleton
              </h3>
              <div className="max-w-md space-y-4">
                <Loader variant="skeleton" size="lg" count={1} />
                <Loader variant="skeleton" size="md" count={3} />
                <Loader variant="skeleton" size="sm" count={2} />
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
