/**
 * ProfileFormContainer Component
 * Multi-step form container for user profile data collection
 */

import { useState, useCallback, useEffect } from 'react';
import type { UserProfile } from '@/types/user';
import { PersonalInfoForm } from './forms/PersonalInfoForm';
import { FinancialInfoForm } from './forms/FinancialInfoForm';
import { EducationForm } from './forms/EducationForm';
import { CareerForm } from './forms/CareerForm';
import { FamilyForm } from './forms/FamilyForm';
import { LanguageForm } from './forms/LanguageForm';
import { CountrySelectionForm } from './forms/CountrySelectionForm';
import { ProgressIndicator } from './ProgressIndicator';
import { SaveStatusIndicator } from './SaveStatusIndicator';
import { Button } from './Button';
import { useAutoSave } from '@/hooks/useAutoSave';
import {
  getEmptyUserProfile,
  mergeFormData,
  calculateFormProgress,
} from '@/utils/formState';
import { validateFormStep } from '@/utils/validation';

interface ProfileFormContainerProps {
  onSave?: (profile: Partial<UserProfile>) => Promise<void>;
  initialData?: Partial<UserProfile>;
}

const FORM_STEPS = [
  { title: 'Personal Information', component: PersonalInfoForm },
  { title: 'Financial Information', component: FinancialInfoForm },
  { title: 'Education', component: EducationForm },
  { title: 'Career', component: CareerForm },
  { title: 'Family', component: FamilyForm },
  { title: 'Language', component: LanguageForm },
  { title: 'Country Selection', component: CountrySelectionForm },
];

export function ProfileFormContainer({
  onSave,
  initialData,
}: ProfileFormContainerProps) {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<Partial<UserProfile>>(
    initialData || getEmptyUserProfile()
  );
  const [errors, setErrors] = useState<Record<string, string>>({});

  // Update formData when initialData changes (e.g., after loading from storage)
  useEffect(() => {
    if (initialData) {
      setFormData(initialData);
    }
  }, [initialData]);

  // Auto-save hook with 2 second debounce
  const { save: autoSave, saveNow, isSaving, lastSaved, saveError } = useAutoSave(
    2000,
    onSave
  );

  // Auto-save when form data changes
  useEffect(() => {
    autoSave(formData);
  }, [formData, autoSave]);

  const progress = calculateFormProgress(formData);
  const totalSteps = FORM_STEPS.length;
  const CurrentFormComponent = FORM_STEPS[currentStep - 1].component;

  const handleFieldChange = useCallback(
    (field: string, value: unknown) => {
      setFormData((prev: Partial<UserProfile>) => mergeFormData(prev, { [field]: value }));
      // Clear error for this field when user starts typing
      if (errors[field]) {
        setErrors((prev: Record<string, string>) => {
          const newErrors = { ...prev };
          delete newErrors[field];
          return newErrors;
        });
      }
    },
    [errors]
  );

  const handleFieldBlur = useCallback(() => {
    // Save immediately on blur to ensure data is persisted
    saveNow();
  }, [saveNow]);

  const handleNext = useCallback(() => {
    // Validate current step
    const stepErrors = validateFormStep(currentStep, formData);
    if (Object.keys(stepErrors).length > 0) {
      setErrors(stepErrors);
      return;
    }

    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
      setErrors({});
    }
  }, [currentStep, formData, totalSteps]);

  const handlePrevious = useCallback(() => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
      setErrors({});
    }
  }, [currentStep]);

  const handleSubmit = useCallback(() => {
    // Validate all steps
    for (let step = 1; step <= totalSteps; step++) {
      const stepErrors = validateFormStep(step, formData);
      if (Object.keys(stepErrors).length > 0) {
        setErrors(stepErrors);
        setCurrentStep(step);
        return;
      }
    }

    // All valid, save the profile
    const completeProfile: UserProfile = {
      ...(getEmptyUserProfile()),
      ...formData,
      updatedAt: Date.now(),
    };

    if (onSave) {
      onSave(completeProfile);
    }
  }, [formData, totalSteps, onSave]);

  return (
    <div className="w-full max-w-2xl mx-auto p-4 sm:p-6 space-y-6 sm:space-y-8">
      {/* Save Status Indicator */}
      <div className="flex justify-end">
        <SaveStatusIndicator
          isSaving={isSaving}
          lastSaved={lastSaved}
          error={saveError}
        />
      </div>

      {/* Progress Indicator */}
      <ProgressIndicator
        currentStep={currentStep}
        totalSteps={totalSteps}
        progress={progress}
      />

      {/* Form Content */}
      <div className="space-y-4 sm:space-y-6">
        <CurrentFormComponent
          data={formData}
          errors={errors}
          onChange={handleFieldChange}
          onBlur={handleFieldBlur}
        />
      </div>

      {/* Navigation Buttons */}
      <div className="flex flex-col-reverse sm:flex-row justify-between gap-3 sm:gap-4">
        <Button
          variant="secondary"
          onClick={handlePrevious}
          disabled={currentStep === 1}
          className="w-full sm:w-auto"
        >
          Previous
        </Button>

        <div className="flex gap-3 sm:gap-4 w-full sm:w-auto">
          {currentStep < totalSteps ? (
            <Button variant="primary" onClick={handleNext} className="flex-1 sm:flex-none">
              Next
            </Button>
          ) : (
            <Button variant="primary" onClick={handleSubmit} className="flex-1 sm:flex-none">
              Submit
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}

