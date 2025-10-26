import type { UserProfile } from '../../types/user';
import { Input, Select, Button, Combobox } from '../index';

interface CountrySelectionFormProps {
  data: Partial<UserProfile>;
  errors: Record<string, string>;
  onChange: (field: string, value: string | string[] | number | boolean) => void;
  onBlur: (field: string) => void;
}

const EU_COUNTRIES = [
  'Austria', 'Belgium', 'Bulgaria', 'Croatia', 'Cyprus', 'Czech Republic',
  'Denmark', 'Estonia', 'Finland', 'France', 'Germany', 'Greece',
  'Hungary', 'Ireland', 'Italy', 'Latvia', 'Lithuania', 'Luxembourg',
  'Malta', 'Netherlands', 'Poland', 'Portugal', 'Romania', 'Slovakia',
  'Slovenia', 'Spain', 'Sweden'
];

const EU_COUNTRY_OPTIONS = EU_COUNTRIES.map(country => ({
  value: country,
  label: country
}));

export function CountrySelectionForm({
  data,
  errors,
  onChange,
  onBlur,
}: CountrySelectionFormProps) {
  const targetCountries = Array.isArray(data.targetCountries) ? data.targetCountries : [];

  const handleAddCountry = () => {
    onChange('targetCountries', [...targetCountries, '']);
  };

  const handleRemoveCountry = (index: number) => {
    const updated = targetCountries.filter((_, i) => i !== index);
    onChange('targetCountries', updated);
  };

  const handleUpdateCountry = (index: number, value: string) => {
    const updated = [...targetCountries];
    updated[index] = value;
    onChange('targetCountries', updated);
  };

  return (
    <div className="space-y-4 sm:space-y-6">
      <Select
        label="Immigration Path"
        value={data.immigrationPath || ''}
        onChange={(e) => onChange('immigrationPath', e.target.value)}
        onBlur={() => onBlur('immigrationPath')}
        error={errors.immigrationPath}
        required
        options={[
          { value: '', label: 'Select immigration path...' },
          { value: 'work_visa', label: 'Work Visa' },
          { value: 'permanent_residency', label: 'Permanent Residency' },
          { value: 'citizenship', label: 'Citizenship' },
          { value: 'all', label: 'All Options' },
        ]}
      />

      {/* Target Countries Section */}
      <div className="border-t border-gray-200 pt-4 sm:pt-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold text-gray-900">Target Countries</h3>
          <Button
            variant="primary"
            size="sm"
            onClick={handleAddCountry}
          >
            + Add Country
          </Button>
        </div>

        {targetCountries.length === 0 ? (
          <p className="text-sm text-gray-500 italic">No target countries selected yet. Click "Add Country" to select EU countries.</p>
        ) : (
          <div className="space-y-3">
            {targetCountries.map((country, index) => (
              <div key={index} className="flex gap-2 items-end">
                <Select
                  label={index === 0 ? 'Country' : ''}
                  value={country || ''}
                  onChange={(e) => handleUpdateCountry(index, e.target.value)}
                  options={EU_COUNTRIES.map(c => ({ value: c, label: c }))}
                  required
                />
                <Button
                  variant="danger"
                  size="sm"
                  onClick={() => handleRemoveCountry(index)}
                  className="mb-2"
                >
                  Remove
                </Button>
              </div>
            ))}
          </div>
        )}
        {errors.targetCountries && (
          <p className="text-sm text-danger-600 mt-2">{errors.targetCountries}</p>
        )}
      </div>

      <Input
        label="Timeline (months)"
        type="number"
        value={data.timelineMonths || ''}
        onChange={(e) => onChange('timelineMonths', parseInt(e.target.value) || 0)}
        onBlur={() => onBlur('timelineMonths')}
        error={errors.timelineMonths}
        required
        placeholder="12"
        min="1"
        max="120"
      />

      <div className="flex items-center">
        <input
          type="checkbox"
          id="job-offer"
          checked={data.hasJobOffer || false}
          onChange={(e) => onChange('hasJobOffer', e.target.checked)}
          onBlur={() => onBlur('hasJobOffer')}
          className="w-4 h-4 text-primary-600 border-gray-300 rounded focus:ring-primary-500"
        />
        <label htmlFor="job-offer" className="ml-2 text-sm font-medium text-gray-700">
          I have a job offer
        </label>
      </div>

      {data.hasJobOffer && (
        <Combobox
          label="Job Offer Country"
          value={data.jobOfferCountry || ''}
          onChange={(value) => onChange('jobOfferCountry', value)}
          onBlur={() => onBlur('jobOfferCountry')}
          options={EU_COUNTRY_OPTIONS}
          error={errors.jobOfferCountry}
          placeholder="Type to search countries..."
          helperText="Select the EU country where you have a job offer"
        />
      )}

      <div className="bg-green-50 border border-green-200 rounded-lg p-4">
        <p className="text-sm text-green-800">
          <strong>Tip:</strong> Having a job offer significantly increases your chances of visa approval. Most EU countries prioritize skilled workers with confirmed employment.
        </p>
      </div>

      <p className="text-sm text-gray-600">
        Select your immigration goals and timeline. This helps us assess your eligibility for different visa programs.
      </p>
    </div>
  );
}

