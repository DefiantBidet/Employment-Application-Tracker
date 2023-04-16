declare module 'DefiantBidet' {
  export enum ApplicationStatus {
    APPLIED = 'Applied',
    GHOSTED = 'Ghosted',
    INTERVIEWING = 'Interviewing',
    DENIED = 'Denied',
    APPROVED = 'Approved',
  }

  export type StatusEnum = keyof typeof ApplicationStatus;

  export interface Company {
    id: number;
    name: string;
    notes: string;
  }

  export interface Contact {
    id: number;
    company_id: number;
    name: string;
    email: string;
    notes: string;
  }

  export interface Application {
    id: number;
    company_id: number;
    role: string;
    status: string;
    salary: number;
    applied_date: string;
    notes: string;
    red_flag: boolean;
  }
}
