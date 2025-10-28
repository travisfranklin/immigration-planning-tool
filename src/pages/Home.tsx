/**
 * Home Page
 * Landing page for the application
 * Redesigned with bold, editorial layout following German functionalism
 * and Scandinavian design principles
 */

import { useNavigate } from 'react-router-dom';
import { Layout, Button } from '../components';

export function Home() {
  const navigate = useNavigate();

  return (
    <Layout currentPage="home">
      {/* Hero Section - Bold, Editorial with Asymmetric Layout */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left: Main Content */}
            <div className="lg:col-span-7">
              <h1 className="text-display font-extrabold text-black mb-8 leading-[0.95] tracking-tight">
                EU IMMIGRATION PLANNING
              </h1>
              <p className="text-h3 text-gray-700 mb-12 leading-relaxed font-normal">
                Determine your viability for immigration to EU countries.
                <span className="block mt-4 text-body-lg text-gray-500">
                  All your data stays on your device—no server, no cloud, complete privacy.
                </span>
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  onClick={() => navigate('/profile')}
                  className="text-h4 bg-accent text-black hover:bg-accent-dark border-2 border-black"
                >
                  CREATE PROFILE →
                </Button>
                <Button
                  variant="secondary"
                  size="lg"
                  onClick={() => navigate('/results')}
                  className="text-h4"
                >
                  VIEW RESULTS
                </Button>
              </div>
            </div>

            {/* Right: Visual Accent */}
            <div className="lg:col-span-5 hidden lg:block">
              <div className="relative">
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary opacity-10"></div>
                <div className="absolute bottom-0 left-12 w-48 h-48 bg-accent opacity-20"></div>
                <div className="relative bg-white border-4 border-black p-12">
                  <div className="text-data font-bold text-black mb-2">5</div>
                  <div className="text-label uppercase tracking-wide text-gray-700">
                    EU COUNTRIES
                  </div>
                  <div className="mt-8 space-y-3">
                    <div className="h-2 bg-primary w-full"></div>
                    <div className="h-2 bg-success w-4/5"></div>
                    <div className="h-2 bg-warning w-3/5"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section - Bold Cards with Color Accents */}
      <div className="bg-white py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-h1 font-bold text-black mb-16 uppercase tracking-wide">
            What You Get
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 - Viability Analysis */}
            <div className="group">
              <div className="bg-white border-2 border-black p-8 transition-all hover:border-primary hover:shadow-[8px_8px_0px_0px_rgba(87,49,245,1)]">
                <div className="w-16 h-2 bg-primary mb-6"></div>
                <h3 className="text-h3 font-bold text-black uppercase tracking-wide mb-4">
                  Viability Analysis
                </h3>
                <p className="text-body text-gray-700 leading-relaxed">
                  Get personalized viability scores for your target EU countries based on your profile.
                </p>
              </div>
            </div>

            {/* Feature 2 - Privacy First */}
            <div className="group">
              <div className="bg-white border-2 border-black p-8 transition-all hover:border-success hover:shadow-[8px_8px_0px_0px_rgba(117,227,179,1)]">
                <div className="w-16 h-2 bg-success mb-6"></div>
                <h3 className="text-h3 font-bold text-black uppercase tracking-wide mb-4">
                  Privacy First
                </h3>
                <p className="text-body text-gray-700 leading-relaxed">
                  All your data is stored locally on your device. No server, no cloud, complete privacy.
                </p>
              </div>
            </div>

            {/* Feature 3 - Multiple Countries */}
            <div className="group">
              <div className="bg-white border-2 border-black p-8 transition-all hover:border-warning hover:shadow-[8px_8px_0px_0px_rgba(255,155,0,1)]">
                <div className="w-16 h-2 bg-warning mb-6"></div>
                <h3 className="text-h3 font-bold text-black uppercase tracking-wide mb-4">
                  Multiple Countries
                </h3>
                <p className="text-body text-gray-700 leading-relaxed">
                  Analyze your options across Germany, Netherlands, France, Spain, and Italy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Process Flowcharts Section - Interactive Card */}
      <div className="bg-gray-50 py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="bg-white border-4 border-black p-12 md:p-16 cursor-pointer transition-all hover:shadow-[12px_12px_0px_0px_rgba(224,252,47,1)] hover:border-accent group"
            onClick={() => navigate('/flowchart')}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                navigate('/flowchart');
              }
            }}
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
              <div className="flex-1">
                <div className="w-24 h-4 bg-accent mb-6"></div>
                <h2 className="text-h1 font-bold text-black mb-6 uppercase tracking-wide">
                  Immigration Process Flowcharts
                </h2>
                <p className="text-body-lg text-gray-700 leading-relaxed max-w-2xl">
                  View step-by-step visual guides for each visa program, including required documents,
                  timelines, and important notes.
                </p>
              </div>
              <div className="flex-shrink-0">
                <div className="text-h1 font-bold text-black group-hover:text-accent transition-colors">
                  →
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

