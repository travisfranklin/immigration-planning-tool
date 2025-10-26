import type { UserProfile } from '../../types/user';
import { Input, Select } from '../index';

interface FinancialInfoFormProps {
  data: Partial<UserProfile>;
  errors: Record<string, string>;
  onChange: (field: string, value: string | number) => void;
  onBlur: (field: string) => void;
}

export function FinancialInfoForm({
  data,
  errors,
  onChange,
  onBlur,
}: FinancialInfoFormProps) {
  return (
    <div className="space-y-4 sm:space-y-6">
      <Input
        label="Annual Income (USD)"
        type="number"
        value={data.annualIncome || ''}
        onChange={(e) => onChange('annualIncome', parseFloat(e.target.value) || 0)}
        onBlur={() => onBlur('annualIncome')}
        error={errors.annualIncome}
        required
        placeholder="50000"
        min="0"
        step="1000"
      />

      <Input
        label="Savings Amount (USD)"
        type="number"
        value={data.savingsAmount || ''}
        onChange={(e) => onChange('savingsAmount', parseFloat(e.target.value) || 0)}
        onBlur={() => onBlur('savingsAmount')}
        error={errors.savingsAmount}
        required
        placeholder="100000"
        min="0"
        step="1000"
      />

      <Select
        label="Employment Status"
        value={data.employmentStatus || ''}
        onChange={(e) => onChange('employmentStatus', e.target.value)}
        onBlur={() => onBlur('employmentStatus')}
        error={errors.employmentStatus}
        required
        options={[
          { value: '', label: 'Select employment status...' },
          { value: 'employed', label: 'Employed' },
          { value: 'self_employed', label: 'Self-Employed' },
          { value: 'unemployed', label: 'Unemployed' },
          { value: 'student', label: 'Student' },
        ]}
      />

      <p className="text-sm text-gray-600">
        Provide accurate financial information to help assess your eligibility for various visa programs.
      </p>
    </div>
  );
}

