import { z } from "zod";

const optionalString = z.preprocess(
  (value) => (value === null || value === undefined ? "" : value),
  z.string().optional()
);

export const ValidateProfileSchema = z.object({
  firstName: optionalString,
  lastName: optionalString,
  email: optionalString,
  phone: optionalString,
  phoneCountryCode: optionalString,
  birthDate: optionalString,
  sex: optionalString,
  nationality: optionalString,
  residenceCountry: optionalString,
  language: optionalString,
  studyLevel: optionalString,
  obtainedDiploma: optionalString,
  diplomaYear: optionalString,
  specialty: optionalString,
  generalAverage: optionalString,
  strongSubjects: optionalString,
  academicSkills: optionalString,
  academicField: optionalString,
  targetDegree: optionalString,
  spokenLanguages: optionalString,
  languageLevels: optionalString,
  desiredField: optionalString,
  desiredFormationType: optionalString,
  preferredUniversities: optionalString,
  preferredStudyLanguage: optionalString,
  estimatedBudget: optionalString,
  currentInstitution: optionalString,
  address: optionalString,
  city: optionalString,
  country: optionalString,
  bio: optionalString,
  avatarUrl: optionalString,
  academicDocuments: optionalString,
  academicDocumentName: optionalString,
  academicInterests: optionalString,
  personalInterests: optionalString
});
