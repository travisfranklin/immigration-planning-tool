import type { UserProfile } from '../../types/user';
import { Input, Select, Combobox } from '../index';
import { FIELDS_OF_STUDY } from '../../data/fieldsOfStudy';

interface EducationFormProps {
  data: Partial<UserProfile>;
  errors: Record<string, string>;
  onChange: (field: string, value: string | number) => void;
  onBlur: (field: string) => void;
}

export function EducationForm({
  data,
  errors,
  onChange,
  onBlur,
}: EducationFormProps) {
  return (
    <div className="space-y-4 sm:space-y-6">
      <Select
        label="Education Level"
        value={data.educationLevel || ''}
        onChange={(e) => onChange('educationLevel', e.target.value)}
        onBlur={() => onBlur('educationLevel')}
        error={errors.educationLevel}
        required
        options={[
          { value: '', label: 'Select education level...' },
          { value: 'high_school', label: 'High School' },
          { value: 'bachelor', label: 'Bachelor' },
          { value: 'master', label: 'Master' },
          { value: 'phd', label: 'PhD' },
        ]}
      />

      <Combobox
        label="Field of Study"
        value={data.fieldOfStudy || ''}
        onChange={(value) => onChange('fieldOfStudy', value)}
        onBlur={() => onBlur('fieldOfStudy')}
        options={FIELDS_OF_STUDY}
        error={errors.fieldOfStudy}
        required
        placeholder="Type to search or enter custom field..."
        helperText="Select from common fields or enter your own"
      />

      <Input
        label="Years of Experience"
        type="number"
        value={data.yearsOfExperience || ''}
        onChange={(e) => onChange('yearsOfExperience', parseInt(e.target.value) || 0)}
        onBlur={() => onBlur('yearsOfExperience')}
        error={errors.yearsOfExperience}
        required
        placeholder="0"
        min="0"
        max="70"
      />

      <p className="text-sm text-gray-600">
        Your education and experience are important factors in determining your eligibility for skilled worker visas.
      </p>
    </div>
  );
}

