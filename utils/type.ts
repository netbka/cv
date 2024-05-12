export interface IInformation {
  companylogo: string;
  jobname: string;
  industry: string;
  companyname: string;
  location: string;
  duration: string;
  description: string;
}

export interface IExperience extends IInformation {
  achievements: string[];
}

export type ExperienceArr = IExperience[];
export type ExperienceType = IExperience;

export type EducationArr = IInformation[];
export type EducationType = IInformation;
