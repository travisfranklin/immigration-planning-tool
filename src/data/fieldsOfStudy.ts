/**
 * Comprehensive list of fields of study
 * Organized by category and aligned with education scoring logic
 */

export interface FieldOfStudyOption {
  value: string;
  label: string;
  category: string;
}

/**
 * Comprehensive fields of study options
 * Categories align with high-demand, medium-demand, and other fields in educationScorer.ts
 */
export const FIELDS_OF_STUDY: FieldOfStudyOption[] = [
  // STEM - Computer Science & IT (High Demand)
  { value: 'Computer Science', label: 'Computer Science', category: 'STEM - Computing' },
  { value: 'Software Engineering', label: 'Software Engineering', category: 'STEM - Computing' },
  { value: 'Information Technology', label: 'Information Technology', category: 'STEM - Computing' },
  { value: 'Data Science', label: 'Data Science', category: 'STEM - Computing' },
  { value: 'Artificial Intelligence', label: 'Artificial Intelligence', category: 'STEM - Computing' },
  { value: 'Machine Learning', label: 'Machine Learning', category: 'STEM - Computing' },
  { value: 'Cybersecurity', label: 'Cybersecurity', category: 'STEM - Computing' },
  { value: 'Computer Engineering', label: 'Computer Engineering', category: 'STEM - Computing' },
  { value: 'Information Systems', label: 'Information Systems', category: 'STEM - Computing' },

  // STEM - Engineering (High Demand)
  { value: 'Engineering', label: 'Engineering (General)', category: 'STEM - Engineering' },
  { value: 'Mechanical Engineering', label: 'Mechanical Engineering', category: 'STEM - Engineering' },
  { value: 'Electrical Engineering', label: 'Electrical Engineering', category: 'STEM - Engineering' },
  { value: 'Civil Engineering', label: 'Civil Engineering', category: 'STEM - Engineering' },
  { value: 'Chemical Engineering', label: 'Chemical Engineering', category: 'STEM - Engineering' },
  { value: 'Aerospace Engineering', label: 'Aerospace Engineering', category: 'STEM - Engineering' },
  { value: 'Biomedical Engineering', label: 'Biomedical Engineering', category: 'STEM - Engineering' },
  { value: 'Industrial Engineering', label: 'Industrial Engineering', category: 'STEM - Engineering' },
  { value: 'Environmental Engineering', label: 'Environmental Engineering', category: 'STEM - Engineering' },
  { value: 'Petroleum Engineering', label: 'Petroleum Engineering', category: 'STEM - Engineering' },

  // STEM - Sciences (High Demand)
  { value: 'Mathematics', label: 'Mathematics', category: 'STEM - Sciences' },
  { value: 'Physics', label: 'Physics', category: 'STEM - Sciences' },
  { value: 'Chemistry', label: 'Chemistry', category: 'STEM - Sciences' },
  { value: 'Biology', label: 'Biology', category: 'STEM - Sciences' },
  { value: 'Biochemistry', label: 'Biochemistry', category: 'STEM - Sciences' },
  { value: 'Biotechnology', label: 'Biotechnology', category: 'STEM - Sciences' },
  { value: 'Statistics', label: 'Statistics', category: 'STEM - Sciences' },
  { value: 'Applied Mathematics', label: 'Applied Mathematics', category: 'STEM - Sciences' },
  { value: 'Environmental Science', label: 'Environmental Science', category: 'STEM - Sciences' },
  { value: 'Geology', label: 'Geology', category: 'STEM - Sciences' },

  // Healthcare (High Demand)
  { value: 'Medicine', label: 'Medicine', category: 'Healthcare' },
  { value: 'Nursing', label: 'Nursing', category: 'Healthcare' },
  { value: 'Healthcare', label: 'Healthcare Administration', category: 'Healthcare' },
  { value: 'Pharmacy', label: 'Pharmacy', category: 'Healthcare' },
  { value: 'Dentistry', label: 'Dentistry', category: 'Healthcare' },
  { value: 'Public Health', label: 'Public Health', category: 'Healthcare' },
  { value: 'Physical Therapy', label: 'Physical Therapy', category: 'Healthcare' },
  { value: 'Occupational Therapy', label: 'Occupational Therapy', category: 'Healthcare' },
  { value: 'Medical Technology', label: 'Medical Technology', category: 'Healthcare' },
  { value: 'Veterinary Medicine', label: 'Veterinary Medicine', category: 'Healthcare' },

  // Business & Finance (High Demand)
  { value: 'Business', label: 'Business Administration', category: 'Business & Finance' },
  { value: 'Finance', label: 'Finance', category: 'Business & Finance' },
  { value: 'Economics', label: 'Economics', category: 'Business & Finance' },
  { value: 'Accounting', label: 'Accounting', category: 'Business & Finance' },
  { value: 'Business Analytics', label: 'Business Analytics', category: 'Business & Finance' },
  { value: 'International Business', label: 'International Business', category: 'Business & Finance' },
  { value: 'Management', label: 'Management', category: 'Business & Finance' },
  { value: 'Entrepreneurship', label: 'Entrepreneurship', category: 'Business & Finance' },
  { value: 'Supply Chain Management', label: 'Supply Chain Management', category: 'Business & Finance' },
  { value: 'Human Resources', label: 'Human Resources', category: 'Business & Finance' },

  // Education (Medium Demand)
  { value: 'Education', label: 'Education', category: 'Education' },
  { value: 'Teaching', label: 'Teaching', category: 'Education' },
  { value: 'Elementary Education', label: 'Elementary Education', category: 'Education' },
  { value: 'Secondary Education', label: 'Secondary Education', category: 'Education' },
  { value: 'Special Education', label: 'Special Education', category: 'Education' },
  { value: 'Educational Leadership', label: 'Educational Leadership', category: 'Education' },
  { value: 'Curriculum and Instruction', label: 'Curriculum and Instruction', category: 'Education' },

  // Law & Legal Studies (Medium Demand)
  { value: 'Law', label: 'Law', category: 'Law & Legal Studies' },
  { value: 'Legal Studies', label: 'Legal Studies', category: 'Law & Legal Studies' },
  { value: 'Criminal Justice', label: 'Criminal Justice', category: 'Law & Legal Studies' },
  { value: 'International Law', label: 'International Law', category: 'Law & Legal Studies' },
  { value: 'Corporate Law', label: 'Corporate Law', category: 'Law & Legal Studies' },

  // Architecture & Design (Medium Demand)
  { value: 'Architecture', label: 'Architecture', category: 'Architecture & Design' },
  { value: 'Interior Design', label: 'Interior Design', category: 'Architecture & Design' },
  { value: 'Urban Planning', label: 'Urban Planning', category: 'Architecture & Design' },
  { value: 'Landscape Architecture', label: 'Landscape Architecture', category: 'Architecture & Design' },
  { value: 'Graphic Design', label: 'Graphic Design', category: 'Architecture & Design' },
  { value: 'Industrial Design', label: 'Industrial Design', category: 'Architecture & Design' },
  { value: 'UX/UI Design', label: 'UX/UI Design', category: 'Architecture & Design' },
  { value: 'Fashion Design', label: 'Fashion Design', category: 'Architecture & Design' },

  // Marketing & Communications (Medium Demand)
  { value: 'Marketing', label: 'Marketing', category: 'Marketing & Communications' },
  { value: 'Communications', label: 'Communications', category: 'Marketing & Communications' },
  { value: 'Public Relations', label: 'Public Relations', category: 'Marketing & Communications' },
  { value: 'Advertising', label: 'Advertising', category: 'Marketing & Communications' },
  { value: 'Digital Marketing', label: 'Digital Marketing', category: 'Marketing & Communications' },
  { value: 'Journalism', label: 'Journalism', category: 'Marketing & Communications' },
  { value: 'Media Studies', label: 'Media Studies', category: 'Marketing & Communications' },

  // Social Sciences
  { value: 'Psychology', label: 'Psychology', category: 'Social Sciences' },
  { value: 'Sociology', label: 'Sociology', category: 'Social Sciences' },
  { value: 'Political Science', label: 'Political Science', category: 'Social Sciences' },
  { value: 'Anthropology', label: 'Anthropology', category: 'Social Sciences' },
  { value: 'Social Work', label: 'Social Work', category: 'Social Sciences' },
  { value: 'International Relations', label: 'International Relations', category: 'Social Sciences' },
  { value: 'Geography', label: 'Geography', category: 'Social Sciences' },

  // Arts & Humanities
  { value: 'English', label: 'English', category: 'Arts & Humanities' },
  { value: 'History', label: 'History', category: 'Arts & Humanities' },
  { value: 'Philosophy', label: 'Philosophy', category: 'Arts & Humanities' },
  { value: 'Literature', label: 'Literature', category: 'Arts & Humanities' },
  { value: 'Languages', label: 'Languages', category: 'Arts & Humanities' },
  { value: 'Linguistics', label: 'Linguistics', category: 'Arts & Humanities' },
  { value: 'Fine Arts', label: 'Fine Arts', category: 'Arts & Humanities' },
  { value: 'Music', label: 'Music', category: 'Arts & Humanities' },
  { value: 'Theater', label: 'Theater', category: 'Arts & Humanities' },
  { value: 'Film Studies', label: 'Film Studies', category: 'Arts & Humanities' },

  // Agriculture & Environmental
  { value: 'Agriculture', label: 'Agriculture', category: 'Agriculture & Environmental' },
  { value: 'Agricultural Science', label: 'Agricultural Science', category: 'Agriculture & Environmental' },
  { value: 'Forestry', label: 'Forestry', category: 'Agriculture & Environmental' },
  { value: 'Environmental Studies', label: 'Environmental Studies', category: 'Agriculture & Environmental' },
  { value: 'Sustainability', label: 'Sustainability', category: 'Agriculture & Environmental' },
  { value: 'Marine Biology', label: 'Marine Biology', category: 'Agriculture & Environmental' },

  // Other Professional Fields
  { value: 'Hospitality Management', label: 'Hospitality Management', category: 'Other Professional' },
  { value: 'Tourism Management', label: 'Tourism Management', category: 'Other Professional' },
  { value: 'Sports Management', label: 'Sports Management', category: 'Other Professional' },
  { value: 'Library Science', label: 'Library Science', category: 'Other Professional' },
  { value: 'Culinary Arts', label: 'Culinary Arts', category: 'Other Professional' },
  { value: 'Aviation', label: 'Aviation', category: 'Other Professional' },
  { value: 'Real Estate', label: 'Real Estate', category: 'Other Professional' },
];

/**
 * Get field of study options grouped by category
 */
export function getFieldsOfStudyByCategory(): Record<string, FieldOfStudyOption[]> {
  return FIELDS_OF_STUDY.reduce((acc, field) => {
    if (!acc[field.category]) {
      acc[field.category] = [];
    }
    acc[field.category].push(field);
    return acc;
  }, {} as Record<string, FieldOfStudyOption[]>);
}

/**
 * Search fields of study by query
 */
export function searchFieldsOfStudy(query: string): FieldOfStudyOption[] {
  const searchTerm = query.toLowerCase();
  return FIELDS_OF_STUDY.filter(
    (field) =>
      field.label.toLowerCase().includes(searchTerm) ||
      field.value.toLowerCase().includes(searchTerm) ||
      field.category.toLowerCase().includes(searchTerm)
  );
}

