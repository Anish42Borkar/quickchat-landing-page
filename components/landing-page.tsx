'use client';

import { useState } from 'react';
import {
  MessageCircleIcon,
  ZapIcon,
  ShieldCheckIcon,
  UsersIcon,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { AuthModal } from '@/components/auth-modal';

export function LandingPage() {
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [authInitialView, setAuthInitialView] = useState<'login' | 'signup'>(
    'login',
  );

  const openLogin = () => {
    setAuthInitialView('login');
    setAuthModalOpen(true);
  };

  const openSignup = () => {
    setAuthInitialView('signup');
    setAuthModalOpen(true);
  };

  return (
    <div className='min-h-screen bg-background'>
      {/* Header */}
      <header className='fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border'>
        <nav className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex items-center justify-between h-16'>
            <div className='flex items-center gap-2'>
              <div className='w-8 h-8 rounded-lg bg-primary flex items-center justify-center'>
                <MessageCircleIcon className='w-5 h-5 text-primary-foreground' />
              </div>
              <span className='text-xl font-bold text-foreground'>Pulse</span>
            </div>

            <div className='flex items-center gap-3'>
              <Button variant='ghost' onClick={openLogin}>
                Log in
              </Button>
              <Button onClick={openSignup}>Sign up</Button>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <main className='pt-16'>
        <section className='relative overflow-hidden'>
          <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 lg:py-40'>
            <div className='text-center max-w-3xl mx-auto'>
              {/* Badge */}
              <div className='inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary text-sm font-medium text-foreground mb-8'>
                <span className='relative flex h-2 w-2'>
                  <span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75' />
                  <span className='relative inline-flex rounded-full h-2 w-2 bg-green-500' />
                </span>
                New: End-to-end encryption
              </div>

              {/* Heading */}
              <h1 className='text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground text-balance'>
                Connect instantly
                <br />
                <span className='text-muted-foreground'>with anyone</span>
              </h1>

              {/* Description */}
              <p className='mt-6 text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty'>
                Experience seamless communication with our modern chat platform.
                Fast, secure, and designed for the way you work and connect.
              </p>

              {/* CTA Buttons */}
              <div className='mt-10 flex flex-col sm:flex-row items-center justify-center gap-4'>
                <Button
                  size='lg'
                  className='h-12 px-8 text-base w-full sm:w-auto'
                  onClick={openSignup}
                >
                  Get started free
                </Button>
                <Button
                  variant='outline'
                  size='lg'
                  className='h-12 px-8 text-base w-full sm:w-auto'
                  onClick={openLogin}
                >
                  Log in
                </Button>
              </div>

              {/* Social proof */}
              <p className='mt-8 text-sm text-muted-foreground'>
                Trusted by{' '}
                <span className='font-semibold text-foreground'>10,000+</span>{' '}
                teams worldwide
              </p>
            </div>
          </div>

          {/* Subtle background pattern */}
          <div className='absolute inset-0 pointer-events-none bg-gradient-to-br from-blue-200/40 via-purple-200/20 to-transparent' />
        </section>

        {/* Features Section */}
        <section className='border-t border-border bg-secondary/30'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24'>
            <div className='text-center mb-16'>
              <h2 className='text-3xl sm:text-4xl font-bold text-foreground'>
                Everything you need to stay connected
              </h2>
              <p className='mt-4 text-lg text-muted-foreground max-w-2xl mx-auto'>
                Powerful features designed to make communication effortless
              </p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
              <FeatureCard
                icon={<ZapIcon className='w-6 h-6' />}
                title='Lightning Fast'
                description='Real-time messaging with instant delivery. Never miss a beat in your conversations.'
              />
              <FeatureCard
                icon={<ShieldCheckIcon className='w-6 h-6' />}
                title='Secure by Design'
                description='End-to-end encryption ensures your messages stay private and protected.'
              />
              <FeatureCard
                icon={<UsersIcon className='w-6 h-6' />}
                title='Team Collaboration'
                description='Create groups, share files, and collaborate seamlessly with your team.'
              />
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className='border-t border-border'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24'>
            <div className='text-center'>
              <h2 className='text-3xl sm:text-4xl font-bold text-foreground'>
                Ready to get started?
              </h2>
              <p className='mt-4 text-lg text-muted-foreground'>
                Join thousands of teams already using Pulse
              </p>
              <Button
                size='lg'
                className='mt-8 h-12 px-8 text-base'
                onClick={openSignup}
              >
                Create your free account
              </Button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className='border-t border-border'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8'>
          <div className='flex flex-col sm:flex-row items-center justify-between gap-4'>
            <div className='flex items-center gap-2'>
              <div className='w-6 h-6 rounded bg-primary flex items-center justify-center'>
                <MessageCircleIcon className='w-4 h-4 text-primary-foreground' />
              </div>
              <span className='font-semibold text-foreground'>Pulse</span>
            </div>
            <p className='text-sm text-muted-foreground'>
              &copy; 2026 Pulse. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* Auth Modal */}
      <AuthModal
        isOpen={authModalOpen}
        onClose={() => setAuthModalOpen(false)}
        initialView={authInitialView}
      />
    </div>
  );
}

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className='group relative bg-card rounded-xl border border-border p-6 transition-all duration-300 hover:shadow-lg hover:border-primary/20 hover:-translate-y-1'>
      <div className='w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4 transition-transform duration-300 group-hover:scale-110'>
        {icon}
      </div>
      <h3 className='text-lg font-semibold text-foreground mb-2'>{title}</h3>
      <p className='text-muted-foreground'>{description}</p>
    </div>
  );
}
