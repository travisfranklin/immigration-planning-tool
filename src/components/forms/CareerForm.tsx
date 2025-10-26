import type { UserProfile } from '../../types/user';
import { Combobox } from '../index';
import { OCCUPATION_CODE_OPTIONS, getOccupationTitle } from '../../data/occupationCodes';

interface CareerFormProps {
  data: Partial<UserProfile>;
  errors: Record<string, string>;
  onChange: (field: string, value: string | number | boolean) => void;
  onBlur: (field: string) => void;
}

export function CareerForm({
  data,
  errors,
  onChange,
  onBlur,
}: CareerFormProps) {
  return (
    <div className="space-y-4 sm:space-y-6">
      <Combobox
        label="Occupation Code (ISCO-08)"
        value={data.occupationCode || ''}
        onChange={(value) => {
          // Extract just the code if user selected from dropdown (format: "2512 - Software Developers")
          const code = value.includes(' - ') ? value.split(' - ')[0] : value;
          onChange('occupationCode', code);

          // Auto-suggest occupation title if not already filled
          if (!data.currentOccupation && code.length === 4) {
            const title = getOccupationTitle(code);
            if (title) {
              onChange('currentOccupation', title);
            }
          }
        }}
        onBlur={() => onBlur('occupationCode')}
        options={OCCUPATION_CODE_OPTIONS}
        error={errors.occupationCode}
        placeholder="Type to search occupation codes..."
        helperText={data.currentOccupation ? `${ data.currentOccupation }` : "Search by code or occupation title. Auto-suggests your occupation."}
      />

      <p className="text-sm text-gray-600">
        Your occupation is a key factor in determining visa eligibility. The occupation code uses the ISCO-08 international classification system.
      </p>
    </div>
  );
}

