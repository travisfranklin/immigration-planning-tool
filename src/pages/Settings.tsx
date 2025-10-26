/**
 * Settings Page
 * User preferences and data management
 */

import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { exportAsJSON, exportAsCSV, exportAsText } from '../services/export/exportService';
import { importFromJSON, validateFileType, validateFileSize } from '../services/export/importService';
import { getAllUserProfiles } from '../services/storage/userProfileStore';
import { getAllViabilityScores, clearAllViabilityScores } from '../services/storage/viabilityScoreStore';
import { clearDatabase } from '../services/storage/indexedDB';
import type { UserProfile } from '../types/user';
import type { ViabilityScore } from '../types/viability';
import { Layout } from '../components/Layout';

export function Settings() {
  const navigate = useNavigate();
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [viabilityScores, setViabilityScores] = useState<ViabilityScore[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);

  useEffect(() => {
    loadData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const loadData = async () => {
    setIsLoading(true);
    try {
      const [profiles, scores] = await Promise.all([
        getAllUserProfiles(),
        getAllViabilityScores(),
      ]);
      // Get the first profile (assuming single user for now)
      setProfile(profiles.length > 0 ? profiles[0] : null);
      setViabilityScores(scores);
    } catch (error) {
      console.error('Error loading data:', error);
      showMessage('error', 'Failed to load data');
    } finally {
      setIsLoading(false);
    }
  };

  const showMessage = (type: 'success' | 'error', text: string) => {
    setMessage({ type, text });
    setTimeout(() => setMessage(null), 5000);
  };

  const handleExportJSON = async () => {
    try {
      await exportAsJSON(profile, viabilityScores);
      showMessage('success', 'Data exported as JSON');
    } catch {
      showMessage('error', 'Failed to export data');
    }
  };

  const handleExportCSV = async () => {
    try {
      if (viabilityScores.length === 0) {
        showMessage('error', 'No viability scores to export');
        return;
      }
      await exportAsCSV(viabilityScores);
      showMessage('success', 'Viability scores exported as CSV');
    } catch {
      showMessage('error', 'Failed to export CSV');
    }
  };

  const handleExportText = async () => {
    try {
      await exportAsText(profile, viabilityScores);
      showMessage('success', 'Report exported as text');
    } catch {
      showMessage('error', 'Failed to export report');
    }
  };

  const handleImport = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    // Validate file
    if (!validateFileType(file, ['application/json', '.json'])) {
      showMessage('error', 'Please select a JSON file');
      return;
    }

    if (!validateFileSize(file, 10)) {
      showMessage('error', 'File size must be less than 10MB');
      return;
    }

    try {
      const result = await importFromJSON(file);
      if (result.success) {
        showMessage('success', result.message);
        await loadData(); // Reload data
      } else {
        showMessage('error', result.message + (result.errors ? ': ' + result.errors.join(', ') : ''));
      }
    } catch {
      showMessage('error', 'Failed to import data');
    }

    // Reset input
    event.target.value = '';
  };

  const handleClearScores = async () => {
    try {
      await clearAllViabilityScores();
      setViabilityScores([]);
      showMessage('success', 'All viability scores cleared');
    } catch {
      showMessage('error', 'Failed to clear scores');
    }
  };

  const handleDeleteAll = async () => {
    try {
      await clearDatabase();
      setProfile(null);
      setViabilityScores([]);
      setShowDeleteConfirm(false);
      showMessage('success', 'All data deleted');
      setTimeout(() => navigate('/'), 2000);
    } catch {
      showMessage('error', 'Failed to delete data');
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-gray-500">Loading...</div>
      </div>
    );
  }

  return (
    <Layout currentPage="settings">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Settings</h1>
          <p className="mt-2 text-gray-600">Manage your data and preferences</p>
        </div>

        {/* Message */}
        {message && (
          <div
            className={`mb-6 p-4 rounded-lg ${
              message.type === 'success' ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'
            }`}
          >
            {message.text}
          </div>
        )}

        {/* Data Overview */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Data Overview</h2>
          <div className="space-y-2 text-gray-600">
            <p>
              <strong>Profile:</strong> {profile ? 'Created' : 'Not created'}
            </p>
            <p>
              <strong>Viability Scores:</strong> {viabilityScores.length} countries analyzed
            </p>
            {profile && (
              <p className="text-sm text-gray-500">
                Last updated: {new Date(profile.updatedAt).toLocaleString()}
              </p>
            )}
          </div>
        </div>

        {/* Export Data */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Export Data</h2>
          <p className="text-gray-600 mb-4">
            Download your profile and viability scores in various formats
          </p>
          <div className="flex flex-wrap gap-3">
            <button
              onClick={handleExportJSON}
              disabled={!profile && viabilityScores.length === 0}
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed"
            >
              Export as JSON
            </button>
            <button
              onClick={handleExportCSV}
              disabled={viabilityScores.length === 0}
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed"
            >
              Export Scores as CSV
            </button>
            <button
              onClick={handleExportText}
              disabled={!profile && viabilityScores.length === 0}
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed"
            >
              Export Report as Text
            </button>
          </div>
        </div>

        {/* Import Data */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Import Data</h2>
          <p className="text-gray-600 mb-4">
            Import previously exported data (JSON format only)
          </p>
          <div className="flex items-center gap-3">
            <label className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 cursor-pointer">
              Choose File
              <input
                type="file"
                accept=".json,application/json"
                onChange={handleImport}
                className="hidden"
              />
            </label>
            <span className="text-sm text-gray-500">Max file size: 10MB</span>
          </div>
          <p className="mt-3 text-sm text-yellow-700 bg-yellow-50 p-3 rounded">
            ⚠️ Warning: Importing will overwrite existing data
          </p>
        </div>

        {/* Clear Data */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Clear Data</h2>
          <p className="text-gray-600 mb-4">Remove specific data from your device</p>
          <div className="flex flex-wrap gap-3">
            <button
              onClick={handleClearScores}
              disabled={viabilityScores.length === 0}
              className="px-4 py-2 bg-yellow-600 text-white rounded-md hover:bg-yellow-700 disabled:bg-gray-300 disabled:cursor-not-allowed"
            >
              Clear Viability Scores
            </button>
          </div>
        </div>

        {/* Delete All Data */}
        <div className="bg-white rounded-lg shadow-sm p-6 border-2 border-red-200">
          <h2 className="text-xl font-semibold text-red-900 mb-4">Danger Zone</h2>
          <p className="text-gray-600 mb-4">
            Permanently delete all your data from this device
          </p>
          {!showDeleteConfirm ? (
            <button
              onClick={() => setShowDeleteConfirm(true)}
              className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
            >
              Delete All Data
            </button>
          ) : (
            <div className="space-y-3">
              <p className="text-red-700 font-semibold">
                Are you sure? This action cannot be undone!
              </p>
              <div className="flex gap-3">
                <button
                  onClick={handleDeleteAll}
                  className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
                >
                  Yes, Delete Everything
                </button>
                <button
                  onClick={() => setShowDeleteConfirm(false)}
                  className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400"
                >
                  Cancel
                </button>
              </div>
            </div>
          )}
        </div>

        {/* About */}
        <div className="bg-white rounded-lg shadow-sm p-6 mt-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">About</h2>
          <div className="space-y-2 text-gray-600">
            <p>
              <strong>Version:</strong> 1.0.0
            </p>
            <p>
              <strong>Privacy:</strong> All data is stored locally on your device
            </p>
            <p>
              <strong>Data Storage:</strong> IndexedDB (browser storage)
            </p>
            <p className="text-sm text-gray-500 mt-4">
              This application does not send any data to external servers. Your information
              remains completely private and under your control.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}

