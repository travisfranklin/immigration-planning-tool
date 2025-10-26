import type { UserProfile, FamilyMember } from '../../types/user';
import { Input, Select, Button } from '../index';

interface FamilyFormProps {
  data: Partial<UserProfile>;
  errors: Record<string, string>;
  onChange: (field: string, value: string | number | FamilyMember[]) => void;
  onBlur: (field: string) => void;
}

export function FamilyForm({
  data,
  errors,
  onChange,
  onBlur,
}: FamilyFormProps) {
  const familyMembers = Array.isArray(data.familyMembers) ? data.familyMembers : [];
  const dependentCount = familyMembers.length;

  const handleAddFamilyMember = () => {
    const newMember: FamilyMember = {
      name: '',
      relationship: 'spouse',
      citizenship: '',
    };
    onChange('familyMembers', [...familyMembers, newMember]);
  };

  const handleRemoveFamilyMember = (index: number) => {
    const updated = familyMembers.filter((_, i) => i !== index);
    onChange('familyMembers', updated);
  };

  const handleUpdateFamilyMember = (index: number, field: keyof FamilyMember, value: string) => {
    const updated = [...familyMembers];
    updated[index] = { ...updated[index], [field]: value };
    onChange('familyMembers', updated);
  };

  return (
    <div className="space-y-4 sm:space-y-6">
      <Select
        label="Marital Status"
        value={data.maritalStatus || ''}
        onChange={(e) => onChange('maritalStatus', e.target.value)}
        onBlur={() => onBlur('maritalStatus')}
        error={errors.maritalStatus}
        required
        options={[
          { value: '', label: 'Select marital status...' },
          { value: 'single', label: 'Single' },
          { value: 'married', label: 'Married' },
          { value: 'divorced', label: 'Divorced' },
          { value: 'widowed', label: 'Widowed' },
        ]}
      />

      <Input
        label="Number of Dependents"
        type="number"
        value={dependentCount.toString()}
        readOnly
        placeholder="0"
        helperText="This field is automatically calculated based on family members added below."
      />

      {/* Family Members Section */}
      <div className="border-t border-gray-200 pt-4 sm:pt-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold text-gray-900">Family Members</h3>
          <Button
            variant="primary"
            size="sm"
            onClick={handleAddFamilyMember}
          >
            + Add Family Member
          </Button>
        </div>

        {familyMembers.length === 0 ? (
          <p className="text-sm text-gray-500 italic">No family members added yet. Click "Add Family Member" to add dependents.</p>
        ) : (
          <div className="space-y-4">
            {familyMembers.map((member, index) => (
              <div key={index} className="bg-gray-50 border border-gray-200 rounded-lg p-4 space-y-3">
                <div className="flex justify-between items-start">
                  <h4 className="font-medium text-gray-900">Family Member {index + 1}</h4>
                  <Button
                    variant="danger"
                    size="sm"
                    onClick={() => handleRemoveFamilyMember(index)}
                  >
                    Remove
                  </Button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                  <Input
                    label="Name"
                    type="text"
                    value={member.name || ''}
                    onChange={(e) => handleUpdateFamilyMember(index, 'name', e.target.value)}
                    placeholder="e.g., John Smith"
                    required
                  />

                  <Select
                    label="Relationship"
                    value={member.relationship || 'spouse'}
                    onChange={(e) => handleUpdateFamilyMember(index, 'relationship', e.target.value)}
                    options={[
                      { value: 'spouse', label: 'Spouse' },
                      { value: 'child', label: 'Child' },
                      { value: 'parent', label: 'Parent' },
                      { value: 'sibling', label: 'Sibling' },
                      { value: 'other', label: 'Other' },
                    ]}
                    required
                  />

                  <Select
                    label="Citizenship"
                    value={member.citizenship || ''}
                    onChange={(e) => handleUpdateFamilyMember(index, 'citizenship', e.target.value)}
                    options={[
                      { value: '', label: 'Select citizenship...' },
                      { value: 'US', label: 'United States' },
                      { value: 'CA', label: 'Canada' },
                      { value: 'MX', label: 'Mexico' },
                      { value: 'OTHER', label: 'Other' },
                    ]}
                    required
                  />

                  <Select
                    label="Country of Residence (Optional)"
                    value={member.immigrationStatus || ''}
                    onChange={(e) => handleUpdateFamilyMember(index, 'immigrationStatus', e.target.value)}
                    helperText="Select if this family member currently resides in an EU country"
                    options={[
                      { value: '', label: 'Not in EU / Unknown' },
                      { value: 'DE', label: '🇩🇪 Germany' },
                      { value: 'NL', label: '🇳🇱 Netherlands' },
                      { value: 'FR', label: '🇫🇷 France' },
                      { value: 'ES', label: '🇪🇸 Spain' },
                      { value: 'IT', label: '🇮🇹 Italy' },
                      { value: 'AT', label: '🇦🇹 Austria' },
                      { value: 'BE', label: '🇧🇪 Belgium' },
                      { value: 'LU', label: '🇱🇺 Luxembourg' },
                      { value: 'IE', label: '🇮🇪 Ireland' },
                      { value: 'SE', label: '🇸🇪 Sweden' },
                      { value: 'DK', label: '🇩🇰 Denmark' },
                      { value: 'FI', label: '🇫🇮 Finland' },
                      { value: 'PT', label: '🇵🇹 Portugal' },
                      { value: 'GR', label: '🇬🇷 Greece' },
                      { value: 'CY', label: '🇨🇾 Cyprus' },
                      { value: 'MT', label: '🇲🇹 Malta' },
                      { value: 'PL', label: '🇵🇱 Poland' },
                      { value: 'CZ', label: '🇨🇿 Czech Republic' },
                      { value: 'HU', label: '🇭🇺 Hungary' },
                      { value: 'RO', label: '🇷🇴 Romania' },
                      { value: 'BG', label: '🇧🇬 Bulgaria' },
                      { value: 'SK', label: '🇸🇰 Slovakia' },
                      { value: 'SI', label: '🇸🇮 Slovenia' },
                      { value: 'HR', label: '🇭🇷 Croatia' },
                      { value: 'EE', label: '🇪🇪 Estonia' },
                      { value: 'LV', label: '🇱🇻 Latvia' },
                      { value: 'LT', label: '🇱🇹 Lithuania' },
                    ]}
                  />
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <p className="text-sm text-blue-800">
          <strong>Note:</strong> Family members can significantly impact your visa eligibility. Some countries offer family reunification programs or dependent visas.
        </p>
        <p className="text-sm text-blue-800 mt-2">
          <strong>Family Reunification:</strong> If you have family members already residing in an EU country, specify their country of residence. This may qualify you for family reunification visa programs in that country.
        </p>
      </div>

      <p className="text-sm text-gray-600">
        Information about your family situation helps determine eligibility for family-based immigration programs.
      </p>
    </div>
  );
}

