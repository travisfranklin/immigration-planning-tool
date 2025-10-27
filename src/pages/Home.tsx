/**
 * Home Page
 * Landing page for the application
 */

import { useNavigate } from 'react-router-dom';
import { Layout, Button, Card } from '../components';
import { UI_CONTAINER } from '../constants/uiStyles';

export function Home() {
  const navigate = useNavigate();

  return (
    <Layout currentPage="home">
      <div className={UI_CONTAINER.sm}>
        {/* Hero Section */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            EU Immigration Planning
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Determine your viability for immigration to EU countries. All your data stays on your device.
          </p>
          <Button
            size="lg"
            onClick={() => navigate('/profile')}
          >
            Get Started
          </Button>
        </div>

        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card title="📊 Viability Analysis">
            <p className="text-gray-600">
              Get personalized viability scores for your target EU countries based on your profile.
            </p>
          </Card>

          <Card title="🔒 Privacy First">
            <p className="text-gray-600">
              All your data is stored locally on your device. No server, no cloud, complete privacy.
            </p>
          </Card>

          <Card title="🌍 Multiple Countries">
            <p className="text-gray-600">
              Analyze your options across Germany, Netherlands, France, Spain, and Italy.
            </p>
          </Card>
        </div>

        {/* Process Flowcharts Section */}
        <div className="mb-12">
          <Card title="📋 Immigration Process Flowcharts">
            <p className="text-gray-600 mb-6">
              View step-by-step visual guides for each visa program, including required documents, timelines, and important notes.
            </p>
            <Button variant="secondary" onClick={() => navigate('/flowchart')}>
              View Flowcharts
            </Button>
          </Card>
        </div>

        {/* CTA Section */}
        <Card title="Ready to Start?" subtitle="Create your profile and get your viability scores">
          <p className="text-gray-600 mb-6">
            Answer a few questions about your background, education, and career to get started.
          </p>
          <Button onClick={() => navigate('/profile')}>
            Create Profile
          </Button>
        </Card>
      </div>
    </Layout>
  );
}

