import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { initializeDatabase } from './services/storage/indexedDB';
import { ToastProvider } from './contexts/ToastContext';
import { Home, Profile } from './pages';
import { Results } from './pages/Results';
import { ResultDetail } from './pages/ResultDetail';
import { Flowchart } from './pages/Flowchart';
import { Settings } from './pages/Settings';

function App() {
  const [dbInitialized, setDbInitialized] = useState(false);
  const [dbError, setDbError] = useState<Error | null>(null);

  useEffect(() => {
    // Initialize IndexedDB on app load
    const initDb = async () => {
      try {
        await initializeDatabase();
        setDbInitialized(true);
      } catch (error) {
        console.error('Database initialization error:', error);
        setDbError(error instanceof Error ? error : new Error('Failed to initialize database'));
      }
    };

    initDb();
  }, []);

  if (!dbInitialized) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-50">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Loading...</h1>
          {dbError && (
            <p className="text-danger-600">{dbError.message}</p>
          )}
        </div>
      </div>
    );
  }

  return (
    <ToastProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/results" element={<Results />} />
          <Route path="/result-detail/:countryCode" element={<ResultDetail />} />
          <Route path="/flowchart" element={<Flowchart />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </Router>
    </ToastProvider>
  );
}

export default App;
