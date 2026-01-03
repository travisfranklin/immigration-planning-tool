import type { UserProfile, TargetCountry } from '../../types/user';
import { Input, Select, Button } from '../index';
import { CountryCode, COUNTRY_DISPLAY_NAMES } from '../../constants/countries';

interface CountrySelectionFormProps {
  data: Partial<UserProfile>;
  errors: Record<string, string>;
  onChange: (field: string, value: TargetCountry[] | string | number | boolean) => void;
  onBlur: (field: string) => void;
}

/**
 * Country options for the dropdown, using country codes as values
 */
const EU_COUNTRY_OPTIONS = Object.entries(COUNTRY_DISPLAY_NAMES).map(([code, name]) => ({
  value: code,
  label: name,
}));

export function CountrySelectionForm({
  data,
  errors,
  onChange,
  onBlur,
}: CountrySelectionFormProps) {
  const targetCountries: TargetCountry[] = Array.isArray(data.targetCountries)
    ? data.targetCountries
    : [];

  const handleAddCountry = () => {
    const newCountry: TargetCountry = { countryCode: '', hasJobOffer: false };
    onChange('targetCountries', [...targetCountries, newCountry]);
  };

  const handleRemoveCountry = (index: number) => {
    const updated = targetCountries.filter((_, i) => i !== index);
    onChange('targetCountries', updated);
  };

  const handleUpdateCountryCode = (index: number, countryCode: string) => {
    const updated = [...targetCountries];
    updated[index] = { ...updated[index], countryCode };
    onChange('targetCountries', updated);
  };

  const handleToggleJobOffer = (index: number) => {
    const updated = [...targetCountries];
    updated[index] = { ...updated[index], hasJobOffer: !updated[index].hasJobOffer };
    onChange('targetCountries', updated);
  };

  /**
   * Get display name for a country code
   */
  const getCountryName = (code: string): string => {
    return COUNTRY_DISPLAY_NAMES[code as CountryCode] || code;
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
          <div className="space-y-4">
            {targetCountries.map((targetCountry, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-lg p-4 bg-gray-50"
              >
                <div className="flex gap-2 items-end mb-3">
                  <div className="flex-1">
                    <Select
                      label={`Country ${index + 1}`}
                      value={targetCountry.countryCode || ''}
                      onChange={(e) => handleUpdateCountryCode(index, e.target.value)}
                      options={[
                        { value: '', label: 'Select a country...' },
                        ...EU_COUNTRY_OPTIONS
                      ]}
                      required
                    />
                  </div>
                  <Button
                    variant="danger"
                    size="sm"
                    onClick={() => handleRemoveCountry(index)}
                    className="mb-2"
                  >
                    Remove
                  </Button>
                </div>

                {targetCountry.countryCode && (
                  <div className="flex items-center mt-2">
                    <input
                      type="checkbox"
                      id={`job-offer-${index}`}
                      checked={targetCountry.hasJobOffer}
                      onChange={() => handleToggleJobOffer(index)}
                      className="w-4 h-4 text-primary-600 border-gray-300 rounded focus:ring-primary-500"
                    />
                    <label
                      htmlFor={`job-offer-${index}`}
                      className="ml-2 text-sm font-medium text-gray-700"
                    >
                      I have a job offer in {getCountryName(targetCountry.countryCode)}
                    </label>
                  </div>
                )}
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

      <div className="bg-green-50 border border-green-200 rounded-lg p-4">
        <p className="text-sm text-green-800">
          <strong>Tip:</strong> Having a job offer significantly increases your chances of visa approval. Check the box for each country where you have confirmed employment.
        </p>
      </div>

      <p className="text-sm text-gray-600">
        Select your immigration goals and timeline. This helps us assess your eligibility for different visa programs.
      </p>
    </div>
  );
}

