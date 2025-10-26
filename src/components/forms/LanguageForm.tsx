import type { UserProfile, Language } from '../../types/user';
import { Combobox, Select, Button } from '../index';

interface LanguageFormProps {
  data: Partial<UserProfile>;
  errors: Record<string, string>;
  onChange: (field: string, value: Language[]) => void;
  onBlur: (field: string) => void;
}

export function LanguageForm({
  data,
  errors,
  onChange,
}: LanguageFormProps) {
  const languages = Array.isArray(data.languages) ? data.languages : [];

  const handleAddLanguage = () => {
    const newLanguage: Language = {
      language: '',
      proficiency: 'B1',
    };
    onChange('languages', [...languages, newLanguage]);
  };

  const handleRemoveLanguage = (index: number) => {
    const updated = languages.filter((_, i) => i !== index);
    onChange('languages', updated);
  };

  const handleUpdateLanguage = (index: number, field: keyof Language, value: string) => {
    const updated = [...languages];
    updated[index] = { ...updated[index], [field]: value };
    onChange('languages', updated);
  };

  return (
    <div className="space-y-4 sm:space-y-6">
      {errors.languages && (
        <div className="bg-danger-50 border border-danger-200 rounded-lg p-3">
          <p className="text-sm text-danger-700">{errors.languages}</p>
        </div>
      )}

      {/* Languages Section */}
      <div className="border-b border-gray-200 pb-4 sm:pb-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold text-gray-900">Languages</h3>
          <Button
            variant="primary"
            size="sm"
            onClick={handleAddLanguage}
          >
            + Add Language
          </Button>
        </div>

        {languages.length === 0 ? (
          <p className="text-sm text-gray-500 italic">No languages added yet. Click "Add Language" to add your language proficiencies.</p>
        ) : (
          <div className="space-y-4">
            {languages.map((lang, index) => (
              <div key={index} className="bg-gray-50 border border-gray-200 rounded-lg p-4 space-y-3">
                <div className="flex justify-between items-start">
                  <h4 className="font-medium text-gray-900">Language {index + 1}</h4>
                  <Button
                    variant="danger"
                    size="sm"
                    onClick={() => handleRemoveLanguage(index)}
                  >
                    Remove
                  </Button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                  <Combobox
                    label="Language"
                    value={lang.language || ''}
                    onChange={(value) => handleUpdateLanguage(index, 'language', value)}
                    options={[
                      // Major EU Languages (Official languages of EU countries)
                      { value: 'English', label: 'English', category: 'Major EU Languages' },
                      { value: 'German', label: 'German', category: 'Major EU Languages' },
                      { value: 'French', label: 'French', category: 'Major EU Languages' },
                      { value: 'Spanish', label: 'Spanish', category: 'Major EU Languages' },
                      { value: 'Italian', label: 'Italian', category: 'Major EU Languages' },
                      { value: 'Dutch', label: 'Dutch', category: 'Major EU Languages' },
                      { value: 'Portuguese', label: 'Portuguese', category: 'Major EU Languages' },
                      { value: 'Polish', label: 'Polish', category: 'Major EU Languages' },
                      { value: 'Romanian', label: 'Romanian', category: 'Major EU Languages' },
                      { value: 'Greek', label: 'Greek', category: 'Major EU Languages' },
                      // Nordic Languages
                      { value: 'Swedish', label: 'Swedish', category: 'Nordic Languages' },
                      { value: 'Danish', label: 'Danish', category: 'Nordic Languages' },
                      { value: 'Finnish', label: 'Finnish', category: 'Nordic Languages' },
                      { value: 'Norwegian', label: 'Norwegian', category: 'Nordic Languages' },
                      // Other EU Languages
                      { value: 'Czech', label: 'Czech', category: 'Other EU Languages' },
                      { value: 'Hungarian', label: 'Hungarian', category: 'Other EU Languages' },
                      { value: 'Bulgarian', label: 'Bulgarian', category: 'Other EU Languages' },
                      { value: 'Croatian', label: 'Croatian', category: 'Other EU Languages' },
                      { value: 'Slovak', label: 'Slovak', category: 'Other EU Languages' },
                      { value: 'Slovenian', label: 'Slovenian', category: 'Other EU Languages' },
                      { value: 'Lithuanian', label: 'Lithuanian', category: 'Other EU Languages' },
                      { value: 'Latvian', label: 'Latvian', category: 'Other EU Languages' },
                      { value: 'Estonian', label: 'Estonian', category: 'Other EU Languages' },
                      { value: 'Irish', label: 'Irish (Gaelic)', category: 'Other EU Languages' },
                      { value: 'Maltese', label: 'Maltese', category: 'Other EU Languages' },
                      // Other Commonly Useful Languages
                      { value: 'Russian', label: 'Russian', category: 'Other Languages' },
                      { value: 'Turkish', label: 'Turkish', category: 'Other Languages' },
                      { value: 'Arabic', label: 'Arabic', category: 'Other Languages' },
                      { value: 'Mandarin', label: 'Mandarin Chinese', category: 'Other Languages' },
                      { value: 'Japanese', label: 'Japanese', category: 'Other Languages' },
                      { value: 'Korean', label: 'Korean', category: 'Other Languages' },
                      { value: 'Hindi', label: 'Hindi', category: 'Other Languages' },
                      { value: 'Other', label: 'Other', category: 'Other Languages' },
                    ]}
                    placeholder="Type to search or enter custom language..."
                    required
                  />

                  <Select
                    label="Proficiency Level (CEFR)"
                    value={lang.proficiency || 'B1'}
                    onChange={(e) => handleUpdateLanguage(index, 'proficiency', e.target.value)}
                    options={[
                      { value: 'A1', label: 'A1 - Beginner' },
                      { value: 'A2', label: 'A2 - Elementary' },
                      { value: 'B1', label: 'B1 - Intermediate' },
                      { value: 'B2', label: 'B2 - Upper Intermediate' },
                      { value: 'C1', label: 'C1 - Advanced' },
                      { value: 'C2', label: 'C2 - Mastery' },
                    ]}
                    required
                  />
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <h3 className="font-semibold text-blue-900 mb-2">CEFR Scale</h3>
        <ul className="text-sm text-blue-800 space-y-1">
          <li><strong>A1:</strong> Beginner</li>
          <li><strong>A2:</strong> Elementary</li>
          <li><strong>B1:</strong> Intermediate</li>
          <li><strong>B2:</strong> Upper Intermediate</li>
          <li><strong>C1:</strong> Advanced</li>
          <li><strong>C2:</strong> Mastery</li>
        </ul>
      </div>

      <p className="text-sm text-gray-600">
        Language proficiency is crucial for visa eligibility. Most EU countries require at least B1 level in the local language for skilled worker visas.
      </p>
    </div>
  );
}

