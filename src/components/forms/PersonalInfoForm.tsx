import type { UserProfile } from '../../types/user';
import { Input, Select } from '../index';

interface PersonalInfoFormProps {
  data: Partial<UserProfile>;
  errors: Record<string, string>;
  onChange: (field: string, value: string) => void;
  onBlur: (field: string) => void;
}

export function PersonalInfoForm({
  data,
  errors,
  onChange,
  onBlur,
}: PersonalInfoFormProps) {
  return (
    <div className="space-y-4 sm:space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
        <Input
          label="First Name"
          type="text"
          value={data.firstName || ''}
          onChange={(e) => onChange('firstName', e.target.value)}
          onBlur={() => onBlur('firstName')}
          error={errors.firstName}
          required
          placeholder="John"
        />

        <Input
          label="Last Name"
          type="text"
          value={data.lastName || ''}
          onChange={(e) => onChange('lastName', e.target.value)}
          onBlur={() => onBlur('lastName')}
          error={errors.lastName}
          required
          placeholder="Doe"
        />
      </div>

      <Input
        label="Date of Birth"
        type="date"
        value={data.dateOfBirth || ''}
        onChange={(e) => onChange('dateOfBirth', e.target.value)}
        onBlur={() => onBlur('dateOfBirth')}
        error={errors.dateOfBirth}
        required
      />

      <Select
        label="Citizenship"
        value={data.citizenship || ''}
        onChange={(e) => onChange('citizenship', e.target.value)}
        onBlur={() => onBlur('citizenship')}
        error={errors.citizenship}
        required
        options={[
          { value: '', label: 'Select citizenship...' },
          { value: 'US', label: 'United States' },
          { value: 'CA', label: 'Canada' },
          { value: 'MX', label: 'Mexico' },
          { value: 'OTHER', label: 'Other' },
        ]}
      />

      <p className="text-sm text-gray-600">
        All fields are required. Please ensure your information is accurate.
      </p>
    </div>
  );
}

