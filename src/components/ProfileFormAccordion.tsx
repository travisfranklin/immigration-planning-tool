/**
 * ProfileFormAccordion Component
 * Single-page accordion form for user profile data collection
 * Replaces multi-step form to enable quick field updates and scenario exploration
 */

import { useState, useCallback, useEffect, useRef } from 'react';
import { Disclosure } from '@headlessui/react';
import { ChevronDownIcon, CheckCircleIcon, ExclamationCircleIcon } from '@heroicons/react/24/outline';
import type { UserProfile } from '@/types/user';
import { PersonalInfoForm } from './forms/PersonalInfoForm';
import { FinancialInfoForm } from './forms/FinancialInfoForm';
import { EducationForm } from './forms/EducationForm';
import { CareerForm } from './forms/CareerForm';
import { FamilyForm } from './forms/FamilyForm';
import { LanguageForm } from './forms/LanguageForm';
import { CountrySelectionForm } from './forms/CountrySelectionForm';
import { SaveStatusIndicator } from './SaveStatusIndicator';
import { Button } from './Button';
import { useAutoSave } from '@/hooks/useAutoSave';
import {
  getEmptyUserProfile,
  mergeFormData,
  calculateFormProgress,
  isFormStepValid,
} from '@/utils/formState';
import { validateFormStep } from '@/utils/validation';

interface ProfileFormAccordionProps {
  onSave?: (profile: Partial<UserProfile>) => Promise<void>;
  initialData?: Partial<UserProfile>;
}

interface FormSection {
  id: string;
  title: string;
  description: string;
  component: React.ComponentType<{
    data: Partial<UserProfile>;
    errors: Record<string, string>;
    onChange: (field: string, value: unknown) => void;
    onBlur: (field: string) => void;
  }>;
  stepNumber: number;
}

const FORM_SECTIONS: FormSection[] = [
  {
    id: 'personal',
    title: 'Personal Information',
    description: 'Basic details about you',
    component: PersonalInfoForm,
    stepNumber: 1,
  },
  {
    id: 'financial',
    title: 'Financial Information',
    description: 'Income and savings',
    component: FinancialInfoForm,
    stepNumber: 2,
  },
  {
    id: 'education',
    title: 'Education',
    description: 'Academic background',
    component: EducationForm,
    stepNumber: 3,
  },
  {
    id: 'career',
    title: 'Career',
    description: 'Work experience and occupation',
    component: CareerForm,
    stepNumber: 4,
  },
  {
    id: 'family',
    title: 'Family',
    description: 'Marital status and dependents',
    component: FamilyForm,
    stepNumber: 5,
  },
  {
    id: 'language',
    title: 'Language',
    description: 'Language proficiency',
    component: LanguageForm,
    stepNumber: 6,
  },
  {
    id: 'countries',
    title: 'Country Selection',
    description: 'Target countries and preferences',
    component: CountrySelectionForm,
    stepNumber: 7,
  },
];

type SectionStatus = 'complete' | 'incomplete' | 'not-started';

function getSectionStatus(
  stepNumber: number,
  formData: Partial<UserProfile>
): SectionStatus {
  // Check if all required fields for this step are valid
  const isValid = isFormStepValid(stepNumber, formData);

  if (isValid) {
    return 'complete';
  }

  // Check if any fields in this section have been filled
  const stepErrors = validateFormStep(stepNumber, formData);
  const hasErrors = Object.keys(stepErrors).length > 0;

  // If there are validation errors, the section is incomplete
  if (hasErrors) {
    return 'incomplete';
  }

  // If no errors and no validation issues, section is not started
  return 'not-started';
}

function StatusIcon({ status }: { status: SectionStatus }) {
  if (status === 'complete') {
    return <CheckCircleIcon className="h-5 w-5 text-success-600" aria-label="Section complete" />;
  } else if (status === 'incomplete') {
    return <ExclamationCircleIcon className="h-5 w-5 text-warning-600" aria-label="Section incomplete" />;
  }
  return <div className="h-5 w-5 rounded-full border-2 border-gray-300" aria-label="Section not started" role="img" />;
}

export function ProfileFormAccordion({
  onSave,
  initialData,
}: ProfileFormAccordionProps) {
  const [formData, setFormData] = useState<Partial<UserProfile>>(
    initialData || getEmptyUserProfile()
  );
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [openSections, setOpenSections] = useState<Set<string>>(
    new Set(['personal']) // Open first section by default
  );

  const sectionRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const prevFormDataRef = useRef<Partial<UserProfile>>(formData);

  // Update formData when initialData changes
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

  // Auto-open next section when current section is complete
  useEffect(() => {
    // Find the first section that is not complete
    const firstIncompleteIndex = FORM_SECTIONS.findIndex(section => {
      const status = getSectionStatus(section.stepNumber, formData);
      return status !== 'complete';
    });

    // Check if the first incomplete section just became complete
    if (firstIncompleteIndex > 0) {
      const prevFirstIncompleteIndex = FORM_SECTIONS.findIndex(section => {
        const status = getSectionStatus(section.stepNumber, prevFormDataRef.current);
        return status !== 'complete';
      });

      // If the first incomplete section changed (meaning a section was completed)
      if (prevFirstIncompleteIndex !== firstIncompleteIndex && firstIncompleteIndex < FORM_SECTIONS.length) {
        const nextSection = FORM_SECTIONS[firstIncompleteIndex];

        // Auto-open the next section if it's not already open
        setOpenSections(prev => {
          if (!prev.has(nextSection.id)) {
            return new Set(prev).add(nextSection.id);
          }
          return prev;
        });
      }
    }

    // Update the ref for next comparison
    prevFormDataRef.current = formData;
  }, [formData]);

  const progress = calculateFormProgress(formData);

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

  const toggleSection = useCallback((sectionId: string) => {
    setOpenSections(prev => {
      const newSet = new Set(prev);
      if (newSet.has(sectionId)) {
        newSet.delete(sectionId);
      } else {
        newSet.add(sectionId);
      }
      return newSet;
    });
  }, []);

  const scrollToSection = useCallback((sectionId: string) => {
    const element = sectionRefs.current[sectionId];
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      // Open the section if it's closed
      setOpenSections(prev => new Set(prev).add(sectionId));
    }
  }, []);

  const jumpToIncomplete = useCallback(() => {
    const incompleteSection = FORM_SECTIONS.find(section => {
      const status = getSectionStatus(section.stepNumber, formData);
      return status === 'incomplete' || status === 'not-started';
    });

    if (incompleteSection) {
      scrollToSection(incompleteSection.id);
    }
  }, [formData, scrollToSection]);

  const incompleteSections = FORM_SECTIONS.filter(section => {
    const status = getSectionStatus(section.stepNumber, formData);
    return status !== 'complete';
  });

  return (
    <div className="w-full max-w-3xl mx-auto p-4 pt-0 sm:p-6 sm:pt-0 space-y-6 border border-gray-200">
      {/* Header with Save Status and Progress */}
      <div className="sticky top-0 z-10 bg-white border-b border-gray-200 py-4 -mx-4 px-4 sm:-mx-6 sm:px-6">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Your Profile</h2>
            <p className="text-sm text-gray-600 mt-1">
              {progress}% complete • {incompleteSections.length} section{incompleteSections.length !== 1 ? 's' : ''} remaining
            </p>
          </div>
          
          <div className="flex items-center gap-3">
            {incompleteSections.length > 0 && (
              <Button
                variant="secondary"
                size="sm"
                onClick={jumpToIncomplete}
                className="whitespace-nowrap"
              >
                Jump to Incomplete
              </Button>
            )}
            <div aria-live="polite" aria-atomic="true">
              <SaveStatusIndicator
                isSaving={isSaving}
                lastSaved={lastSaved}
                error={saveError}
              />
            </div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mt-4" role="progressbar" aria-valuenow={progress} aria-valuemin={0} aria-valuemax={100} aria-label="Profile completion progress">
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-primary-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </div>

      {/* Accordion Sections */}
      <div className="space-y-3">
        {FORM_SECTIONS.map((section) => {
          const SectionComponent = section.component;
          const status = getSectionStatus(section.stepNumber, formData);
          const isOpen = openSections.has(section.id);

          return (
            <div
              key={section.id}
              ref={(el) => { sectionRefs.current[section.id] = el; }}
              className="border border-gray-200 rounded-lg overflow-hidden bg-white shadow-sm"
            >
              <Disclosure>
                {() => (
                  <>
                    <button
                      onClick={() => toggleSection(section.id)}
                      className="w-full px-4 sm:px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
                      aria-label={`${section.title} - ${status === 'complete' ? 'Complete' : status === 'incomplete' ? 'Incomplete' : 'Not started'} - ${isOpen ? 'Expanded' : 'Collapsed'}`}
                    >
                      <div className="flex items-center gap-3 flex-1 text-left">
                        <StatusIcon status={status} />
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900">
                            {section.title}
                          </h3>
                          <p className="text-sm text-gray-600">
                            {section.description}
                          </p>
                        </div>
                      </div>
                      
                      <ChevronDownIcon
                        className={`h-5 w-5 text-gray-500 transition-transform ${
                          isOpen ? 'transform rotate-180' : ''
                        }`}
                      />
                    </button>

                    {isOpen && (
                      <div className="px-4 sm:px-6 py-4 border-t border-gray-200 bg-gray-50">
                        <SectionComponent
                          data={formData}
                          errors={errors}
                          onChange={handleFieldChange}
                          onBlur={handleFieldBlur}
                        />
                      </div>
                    )}
                  </>
                )}
              </Disclosure>
            </div>
          );
        })}
      </div>

      {/* Footer Actions */}
      <div className="sticky bottom-0 bg-white border-t border-gray-200 pt-4 -mx-4 px-4 sm:-mx-6 sm:px-6 pb-4">
        <div className="flex justify-between items-center">
          <p className="text-sm text-gray-600">
            All changes are saved automatically
          </p>
          {progress === 100 && (
            <div className="flex items-center gap-2 text-success-600">
              <CheckCircleIcon className="h-5 w-5" />
              <span className="text-sm font-medium">Profile Complete!</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

