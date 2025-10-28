/**
 * Home Page
 * Landing page for the application
 * Redesigned with bold, editorial layout following German functionalism
 * and Scandinavian design principles
 */

import { useNavigate } from 'react-router-dom';
import { Layout, Button, Card } from '../components';

export function Home() {
  const navigate = useNavigate();

  return (
    <Layout currentPage="home">
      {/* Hero Section - Bold, Editorial */}
      <div className="bg-white border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="max-w-4xl">
            <h1 className="text-display font-extrabold text-black mb-6 leading-tight">
              EU IMMIGRATION PLANNING
            </h1>
            <p className="text-body-lg text-gray-700 mb-8 max-w-2xl leading-relaxed">
              Determine your viability for immigration to EU countries.
              All your data stays on your device—no server, no cloud, complete privacy.
            </p>
            <Button
              size="lg"
              onClick={() => navigate('/profile')}
              className="text-h4"
            >
              Get Started →
            </Button>
          </div>
        </div>
      </div>

      {/* Features Section - Data-Driven Grid */}
      <div className="bg-gray-50 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-h1 font-bold text-black mb-12 uppercase tracking-wide">
            Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <Card>
              <div className="mb-4">
                <div className="text-h1 mb-2">📊</div>
                <h3 className="text-h3 font-bold text-black uppercase tracking-wide mb-3">
                  Viability Analysis
                </h3>
              </div>
              <p className="text-body text-gray-700 leading-relaxed">
                Get personalized viability scores for your target EU countries based on your profile.
              </p>
            </Card>

            {/* Feature 2 */}
            <Card>
              <div className="mb-4">
                <div className="text-h1 mb-2">🔒</div>
                <h3 className="text-h3 font-bold text-black uppercase tracking-wide mb-3">
                  Privacy First
                </h3>
              </div>
              <p className="text-body text-gray-700 leading-relaxed">
                All your data is stored locally on your device. No server, no cloud, complete privacy.
              </p>
            </Card>

            {/* Feature 3 */}
            <Card>
              <div className="mb-4">
                <div className="text-h1 mb-2">🌍</div>
                <h3 className="text-h3 font-bold text-black uppercase tracking-wide mb-3">
                  Multiple Countries
                </h3>
              </div>
              <p className="text-body text-gray-700 leading-relaxed">
                Analyze your options across Germany, Netherlands, France, Spain, and Italy.
              </p>
            </Card>
          </div>
        </div>
      </div>

      {/* Process Flowcharts Section */}
      <div className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h2 className="text-h1 font-bold text-black mb-6 uppercase tracking-wide">
              Immigration Process Flowcharts
            </h2>
            <p className="text-body-lg text-gray-700 mb-8 leading-relaxed">
              View step-by-step visual guides for each visa program, including required documents,
              timelines, and important notes.
            </p>
            <Button
              variant="secondary"
              size="lg"
              onClick={() => navigate('/flowchart')}
            >
              View Flowcharts →
            </Button>
          </div>
        </div>
      </div>

      {/* CTA Section - Bold, High Contrast */}
      <div className="bg-primary py-16 md:py-24 border-t-4 border-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h2 className="text-h1 font-bold text-white mb-4 uppercase tracking-wide">
              Ready to Start?
            </h2>
            <p className="text-body-lg text-white mb-8 leading-relaxed opacity-90">
              Answer a few questions about your background, education, and career to get your
              personalized viability scores.
            </p>
            <Button
              variant="secondary"
              size="lg"
              onClick={() => navigate('/profile')}
              className="text-h4"
            >
              Create Profile →
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
}

