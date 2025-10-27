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
import { Button } from '../components/Button';
import { useToast } from '../contexts/ToastContext';
import { APP_VERSION } from '../constants/app';
import { UI_CONTAINER } from '../constants/uiStyles';

export function Settings() {
  const navigate = useNavigate();
  const { showSuccess, showError } = useToast();
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [viabilityScores, setViabilityScores] = useState<ViabilityScore[]>([]);
  const [isLoading, setIsLoading] = useState(true);
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
      showError('Failed to load data');
    } finally {
      setIsLoading(false);
    }
  };

  const handleExportJSON = async () => {
    try {
      await exportAsJSON(profile, viabilityScores);
      showSuccess('Data exported as JSON');
    } catch {
      showError('Failed to export data');
    }
  };

  const handleExportCSV = async () => {
    try {
      if (viabilityScores.length === 0) {
        showError('No viability scores to export');
        return;
      }
      await exportAsCSV(viabilityScores);
      showSuccess('Viability scores exported as CSV');
    } catch {
      showError('Failed to export CSV');
    }
  };

  const handleExportText = async () => {
    try {
      await exportAsText(profile, viabilityScores);
      showSuccess('Report exported as text');
    } catch {
      showError('Failed to export report');
    }
  };

  const handleImport = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    // Validate file
    if (!validateFileType(file, ['application/json', '.json'])) {
      showError('Please select a JSON file');
      return;
    }

    if (!validateFileSize(file, 10)) {
      showError('File size must be less than 10MB');
      return;
    }

    try {
      const result = await importFromJSON(file);
      if (result.success) {
        showSuccess(result.message);
        await loadData(); // Reload data
      } else {
        showError(result.message + (result.errors ? ': ' + result.errors.join(', ') : ''));
      }
    } catch {
      showError('Failed to import data');
    }

    // Reset input
    event.target.value = '';
  };

  const handleClearScores = async () => {
    try {
      await clearAllViabilityScores();
      setViabilityScores([]);
      showSuccess('All viability scores cleared');
    } catch {
      showError('Failed to clear scores');
    }
  };

  const handleDeleteAll = async () => {
    try {
      await clearDatabase();
      setProfile(null);
      setViabilityScores([]);
      setShowDeleteConfirm(false);
      showSuccess('All data deleted');
      setTimeout(() => navigate('/'), 2000);
    } catch {
      showError('Failed to delete data');
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
      <div className={UI_CONTAINER.sm}>
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Settings</h1>
          <p className="mt-2 text-gray-600">Manage your data and preferences</p>
        </div>

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
            <Button
              onClick={handleExportJSON}
              disabled={!profile && viabilityScores.length === 0}
              variant="primary"
            >
              Export as JSON
            </Button>
            <Button
              onClick={handleExportCSV}
              disabled={viabilityScores.length === 0}
              variant="primary"
            >
              Export Scores as CSV
            </Button>
            <Button
              onClick={handleExportText}
              disabled={!profile && viabilityScores.length === 0}
              variant="primary"
            >
              Export Report as Text
            </Button>
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
            <Button
              onClick={handleClearScores}
              disabled={viabilityScores.length === 0}
              variant="warning"
            >
              Clear Viability Scores
            </Button>
          </div>
        </div>

        {/* Delete All Data */}
        <div className="bg-white rounded-lg shadow-sm p-6 border-2 border-red-200">
          <h2 className="text-xl font-semibold text-red-900 mb-4">Danger Zone</h2>
          <p className="text-gray-600 mb-4">
            Permanently delete all your data from this device
          </p>
          {!showDeleteConfirm ? (
            <Button
              onClick={() => setShowDeleteConfirm(true)}
              variant="danger"
            >
              Delete All Data
            </Button>
          ) : (
            <div className="space-y-3">
              <p className="text-red-700 font-semibold">
                Are you sure? This action cannot be undone!
              </p>
              <div className="flex gap-3">
                <Button
                  onClick={handleDeleteAll}
                  variant="danger"
                >
                  Yes, Delete Everything
                </Button>
                <Button
                  onClick={() => setShowDeleteConfirm(false)}
                  variant="secondary"
                >
                  Cancel
                </Button>
              </div>
            </div>
          )}
        </div>

        {/* About */}
        <div className="bg-white rounded-lg shadow-sm p-6 mt-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">About</h2>
          <div className="space-y-2 text-gray-600">
            <p>
              <strong>Version:</strong> {APP_VERSION}
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

