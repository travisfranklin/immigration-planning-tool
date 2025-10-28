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
      {/* Hero Section - Bold, Centered, Maximum Impact */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-40">
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-display font-extrabold text-black mb-8 leading-[0.9] tracking-tight">
              EU IMMIGRATION<br />PLANNING
            </h1>
            <p className="text-h3 text-gray-700 mb-4 leading-relaxed font-normal max-w-3xl mx-auto">
              Determine your viability for immigration to EU countries.
            </p>
            <p className="text-body-lg text-gray-500 mb-12 max-w-2xl mx-auto">
              All your data stays on your device—no server, no cloud, complete privacy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                onClick={() => navigate('/profile')}
                className="text-h4"
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
        </div>
      </div>

      {/* Features Section - Bold Full-Width Blocks */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <h2 className="text-h1 font-bold text-black mb-16 uppercase tracking-wide text-center">
            What You Get
          </h2>
          <div className="space-y-0">
            {/* Feature 1 - Viability Analysis */}
            <div className="border-t-4 border-black bg-white p-12 md:p-16">
              <div className="max-w-4xl">
                <div className="flex items-start gap-8">
                  <div className="flex-shrink-0 w-16 h-16 bg-primary flex items-center justify-center">
                    <div className="text-h2 font-bold text-white">01</div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-h2 font-bold text-black uppercase tracking-wide mb-4">
                      Viability Analysis
                    </h3>
                    <p className="text-body-lg text-gray-700 leading-relaxed">
                      Get personalized viability scores for your target EU countries based on your profile.
                      Our algorithm analyzes your education, work experience, language skills, and financial
                      situation to provide accurate assessments for Germany, Netherlands, France, Spain, and Italy.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Feature 2 - Privacy First */}
            <div className="border-t-4 border-black bg-white p-12 md:p-16">
              <div className="max-w-4xl ml-auto">
                <div className="flex items-start gap-8">
                  <div className="flex-shrink-0 w-16 h-16 bg-success flex items-center justify-center">
                    <div className="text-h2 font-bold text-black">02</div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-h2 font-bold text-black uppercase tracking-wide mb-4">
                      Privacy First
                    </h3>
                    <p className="text-body-lg text-gray-700 leading-relaxed">
                      All your data is stored locally on your device using IndexedDB. No server, no cloud,
                      no tracking, complete privacy. Your sensitive immigration information never leaves your
                      computer, giving you full control over your personal data.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Feature 3 - Multiple Countries */}
            <div className="border-t-4 border-black bg-white p-12 md:p-16">
              <div className="max-w-4xl">
                <div className="flex items-start gap-8">
                  <div className="flex-shrink-0 w-16 h-16 bg-warning flex items-center justify-center">
                    <div className="text-h2 font-bold text-black">03</div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-h2 font-bold text-black uppercase tracking-wide mb-4">
                      Multiple Countries
                    </h3>
                    <p className="text-body-lg text-gray-700 leading-relaxed">
                      Compare your immigration options across five major EU destinations: Germany, Netherlands,
                      France, Spain, and Italy. Each country has unique visa programs, requirements, and pathways—
                      find the best fit for your situation.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom border */}
            <div className="border-t-4 border-black"></div>
          </div>
        </div>
      </div>

      {/* Process Flowcharts Section - Bold CTA Block */}
      <div className="bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-h1 font-bold text-white mb-6 uppercase tracking-wide">
              Immigration Process Flowcharts
            </h2>
            <p className="text-body-lg text-white mb-12 leading-relaxed opacity-90 max-w-2xl mx-auto">
              View step-by-step visual guides for each visa program, including required documents,
              timelines, and important notes.
            </p>
            <Button
              variant="secondary"
              size="lg"
              onClick={() => navigate('/flowchart')}
              className="text-h4"
            >
              VIEW FLOWCHARTS →
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
}

