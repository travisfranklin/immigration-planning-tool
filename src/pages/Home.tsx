/**
 * Home Page
 * Landing page for the application
 * Redesigned with bold, editorial layout following German functionalism
 * and Scandinavian design principles
 */

import { useNavigate } from 'react-router-dom';
import { Layout, Button } from '../components';
import { UI_CONTAINER } from '@/constants/uiStyles';

export function Home() {
  const navigate = useNavigate();

  return (
    <Layout currentPage="home">
      {/* Hero Section - Bold, Centered, Maximum Impact */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-40">
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-9xl font-extrabold text-black mb-8 leading-[0.9] tracking-tight">
              reloca.to
            </h1>
            <p className="text-h3 text-gray-700 mb-4 leading-relaxed font-normal max-w-3xl mx-auto">
              Determine your viability for immigration to EU countries.
            </p>
            <p className="text-body text-gray-500 mb-12 max-w-2xl mx-auto">
              All your data stays on your device. No server, no cloud, complete privacy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                variant="primary"
                size="lg"
                onClick={() => navigate('/profile')}
              >
                CREATE PROFILE →
              </Button>
              <Button
                variant="secondary"
                size="lg"
                onClick={() => navigate('/results')}
              >
                VIEW RESULTS
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section - Bold Cards with Color Blocks */}
      <div className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <h2 className="text-h1 font-bold text-black mb-16 uppercase tracking-wide text-center">
            What You Get
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 - Viability Analysis */}
            <div className="bg-white border-2 border-black">
              <div className="h-4 bg-primary"></div>
              <div className="p-8">
                <div className="text-h1 font-bold text-primary mb-2">01</div>
                <h3 className="text-h3 font-bold text-black uppercase tracking-wide mb-4">
                  Viability Analysis
                </h3>
                <p className="text-body text-gray-700 leading-relaxed">
                  Get personalized viability scores for your target EU countries based on your profile.
                  Our algorithm analyzes your education, work experience, language skills, and financial
                  situation to provide accurate assessments.
                </p>
              </div>
            </div>

            {/* Feature 2 - Privacy First */}
            <div className="bg-white border-2 border-black">
              <div className="h-4 bg-success"></div>
              <div className="p-8">
                <div className="text-h1 font-bold text-success mb-2">02</div>
                <h3 className="text-h3 font-bold text-black uppercase tracking-wide mb-4">
                  Privacy First
                </h3>
                <p className="text-body text-gray-700 leading-relaxed">
                  All your data is stored locally on your device using IndexedDB. No server, no cloud,
                  no tracking, complete privacy. Your sensitive immigration information never leaves your
                  computer.
                </p>
              </div>
            </div>

            {/* Feature 3 - Multiple Countries */}
            <div className="bg-white border-2 border-black">
              <div className="h-4 bg-warning"></div>
              <div className="p-8">
                <div className="text-h1 font-bold text-warning mb-2">03</div>
                <h3 className="text-h3 font-bold text-black uppercase tracking-wide mb-4">
                  Multiple Countries
                </h3>
                <p className="text-body text-gray-700 leading-relaxed">
                  Compare your immigration options across five major EU destinations: Germany, Netherlands,
                  France, Spain, and Italy. Each country has unique visa programs, requirements, and pathways.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Legalese Section */}
      <div className="bg-primary">
        <div className={`${UI_CONTAINER.lg} px-4 sm:px-6 lg:px-8 py-20 md:py-32`}>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6 text-body text-white opacity-90 leading-relaxed">
              <p>
                <strong className="font-semibold">Not Legal or Immigration Advice.</strong> This tool provides general information only and does not constitute legal advice, immigration consulting, or professional services of any kind. Immigration laws, regulations, and policies are complex, frequently change, and vary significantly by country, jurisdiction, and individual circumstances.
              </p>
              <p>
                <strong className="font-semibold">No Guarantee of Accuracy.</strong> While we strive to provide accurate and up-to-date information, we make no representations or warranties regarding the completeness, accuracy, reliability, or currentness of any information provided. Immigration requirements and eligibility criteria may have changed since this information was last updated.
              </p>
              <p>
                <strong className="font-semibold">Consult Qualified Professionals.</strong> Before making any immigration decisions, you should consult with a qualified immigration attorney, licensed immigration consultant, or authorized representative in the relevant jurisdiction. Individual circumstances vary greatly, and only a qualified professional can provide advice tailored to your specific situation.
              </p>
              <p>
                <strong className="font-semibold">No Attorney-Client Relationship.</strong> Use of this tool does not create an attorney-client relationship or any professional relationship. Any information you provide is not protected by attorney-client privilege or any other confidentiality protections.
              </p>
              <p>
                <strong className="font-semibold">Limitation of Liability.</strong> To the fullest extent permitted by law, we disclaim all liability for any damages, losses, or consequences arising from your use of this tool or reliance on any information provided, including but not limited to denied applications, missed opportunities, financial losses, or adverse immigration outcomes.
              </p>
              <p className="text-body-sm opacity-75 pt-4">
                By using this tool, you acknowledge that you have read, understood, and agree to this disclaimer. If you do not agree, please do not use this tool.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

