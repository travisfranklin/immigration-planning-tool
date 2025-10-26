/**
 * Export Service
 * Handles exporting user data and results to various formats
 */

import type { UserProfile } from '../../types/user';
import type { ViabilityScore } from '../../types/viability';

export interface ExportData {
  version: string;
  exportDate: string;
  profile: UserProfile | null;
  viabilityScores: ViabilityScore[];
}

/**
 * Export data as JSON
 */
export async function exportAsJSON(
  profile: UserProfile | null,
  viabilityScores: ViabilityScore[]
): Promise<void> {
  const exportData: ExportData = {
    version: '1.0.0',
    exportDate: new Date().toISOString(),
    profile,
    viabilityScores,
  };

  const jsonString = JSON.stringify(exportData, null, 2);
  const blob = new Blob([jsonString], { type: 'application/json' });
  const url = URL.createObjectURL(blob);

  const link = document.createElement('a');
  link.href = url;
  link.download = `immigration-data-${new Date().toISOString().split('T')[0]}.json`;
  link.click();

  URL.revokeObjectURL(url);
}

/**
 * Export data as CSV (simplified format)
 */
export async function exportAsCSV(viabilityScores: ViabilityScore[]): Promise<void> {
  if (viabilityScores.length === 0) {
    throw new Error('No viability scores to export');
  }

  // CSV header
  const headers = [
    'Country',
    'Overall Score',
    'Recommended Program',
    'Career Score',
    'Financial Score',
    'Education Score',
    'Language Score',
    'Family Score',
    'Timeline',
    'Risk Level',
    'Calculated Date',
  ];

  // CSV rows
  const rows = viabilityScores.map((score) => [
    score.countryCode,
    score.overallScore.toString(),
    score.recommendedProgram?.programName || 'N/A',
    score.componentScores.career.toString(),
    score.componentScores.financial.toString(),
    score.componentScores.education.toString(),
    score.componentScores.language.toString(),
    score.componentScores.family.toString(),
    score.estimatedTimelineMonths ? `${score.estimatedTimelineMonths} months` : 'N/A',
    score.overallRiskLevel,
    new Date(score.createdAt).toLocaleDateString(),
  ]);

  // Combine headers and rows
  const csvContent = [
    headers.join(','),
    ...rows.map((row) => row.map((cell) => `"${cell}"`).join(',')),
  ].join('\n');

  const blob = new Blob([csvContent], { type: 'text/csv' });
  const url = URL.createObjectURL(blob);

  const link = document.createElement('a');
  link.href = url;
  link.download = `viability-scores-${new Date().toISOString().split('T')[0]}.csv`;
  link.click();

  URL.revokeObjectURL(url);
}

/**
 * Export detailed report as text
 */
export async function exportAsText(
  profile: UserProfile | null,
  viabilityScores: ViabilityScore[]
): Promise<void> {
  let textContent = '='.repeat(80) + '\n';
  textContent += 'EU IMMIGRATION VIABILITY REPORT\n';
  textContent += '='.repeat(80) + '\n\n';
  textContent += `Generated: ${new Date().toLocaleString()}\n\n`;

  // Profile summary
  if (profile) {
    textContent += '-'.repeat(80) + '\n';
    textContent += 'PROFILE SUMMARY\n';
    textContent += '-'.repeat(80) + '\n';
    textContent += `Name: ${profile.firstName} ${profile.lastName}\n`;
    textContent += `Date of Birth: ${profile.dateOfBirth}\n`;
    textContent += `Education: ${profile.educationLevel}\n`;
    textContent += `Field: ${profile.fieldOfStudy}\n`;
    textContent += `Career: ${profile.currentOccupation}\n`;
    textContent += `Experience: ${profile.yearsOfExperience} years\n`;
    textContent += `Annual Income: $${profile.annualIncome.toLocaleString()}\n`;
    textContent += `Savings: $${profile.savingsAmount.toLocaleString()}\n\n`;
  }

  // Viability scores
  textContent += '-'.repeat(80) + '\n';
  textContent += 'VIABILITY SCORES BY COUNTRY\n';
  textContent += '-'.repeat(80) + '\n\n';

  viabilityScores
    .sort((a, b) => b.overallScore - a.overallScore)
    .forEach((score, index) => {
      textContent += `${index + 1}. ${score.countryCode} - Score: ${score.overallScore}/100\n`;
      textContent += `   Recommended Program: ${score.recommendedProgram?.programName || 'N/A'}\n`;
      textContent += `   Timeline: ${score.estimatedTimelineMonths ? `${score.estimatedTimelineMonths} months` : 'N/A'}\n`;
      textContent += `   Component Scores:\n`;
      textContent += `     - Career: ${score.componentScores.career}/100\n`;
      textContent += `     - Financial: ${score.componentScores.financial}/100\n`;
      textContent += `     - Education: ${score.componentScores.education}/100\n`;
      textContent += `     - Language: ${score.componentScores.language}/100\n`;
      textContent += `     - Family: ${score.componentScores.family}/100\n`;

      if (score.riskFactors.length > 0) {
        textContent += `   Risk Factors:\n`;
        score.riskFactors.forEach((risk) => {
          textContent += `     - [${risk.severity.toUpperCase()}] ${risk.description}\n`;
          if (risk.mitigation) {
            textContent += `       Mitigation: ${risk.mitigation}\n`;
          }
        });
      }

      if (score.contingencies.length > 0) {
        textContent += `   Contingency Plans:\n`;
        score.contingencies.forEach((plan) => {
          textContent += `     - ${plan.scenario}\n`;
          textContent += `       Action: ${plan.action}\n`;
        });
      }

      textContent += '\n';
    });

  textContent += '='.repeat(80) + '\n';
  textContent += 'END OF REPORT\n';
  textContent += '='.repeat(80) + '\n';

  const blob = new Blob([textContent], { type: 'text/plain' });
  const url = URL.createObjectURL(blob);

  const link = document.createElement('a');
  link.href = url;
  link.download = `immigration-report-${new Date().toISOString().split('T')[0]}.txt`;
  link.click();

  URL.revokeObjectURL(url);
}

/**
 * Validate export data structure
 */
export function validateExportData(data: unknown): data is ExportData {
  if (typeof data !== 'object' || data === null) {
    return false;
  }

  const exportData = data as ExportData;

  return (
    typeof exportData.version === 'string' &&
    typeof exportData.exportDate === 'string' &&
    (exportData.profile === null || typeof exportData.profile === 'object') &&
    Array.isArray(exportData.viabilityScores)
  );
}

