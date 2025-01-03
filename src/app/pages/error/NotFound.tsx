import { useNavigate } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { GrainEffect } from '@/components/ui/GrainEffect';

export const NotFound = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    if (window.history.length > 2) {
      window.history.back();
    } else {
      navigate('/');
    }
  };

  const handleHome = () => {
    navigate('/', { replace: true });
  };

  return (
    <div className="min-h-screen text-foreground">
      <GrainEffect />
      <div className="relative">
        <Navbar />
        <main className="container mx-auto px-4 py-16 md:py-24 lg:py-28">
          <div className="flex min-h-[50vh] flex-col items-center justify-center text-center">
            {/* 404 Text */}
            <div className="relative mb-8 animate-in fade-in slide-in-from-bottom-4 duration-300">
              <div className="absolute inset-0 blur-3xl bg-primary/20" />
              <h1 className="relative text-8xl font-bold md:text-9xl">404</h1>
            </div>

            {/* Content */}
            <div className="max-w-2xl space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500 delay-150">
              <h2 className="text-3xl font-bold md:text-4xl">
                Page not found
              </h2>
              <p className="text-lg text-muted-foreground">
                The page you're looking for doesn't exist or has been moved.
                Let's get you back on track.
              </p>

              {/* Navigation Buttons */}
              <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
                <Button
                  onClick={handleBack}
                  variant="secondary"
                  className="gap-2"
                >
                  <ArrowLeft className="h-4 w-4" />
                  Go Back
                </Button>
                <Button
                  onClick={handleHome}
                  variant="gradient"
                  className="gap-2"
                >
                  <Home className="h-4 w-4" />
                  Return Home
                </Button>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
};