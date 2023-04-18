declare module 'DefiantBidet' {
  export const enum ApplicationStatus {
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
    slug: string;
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
    company_name: string;
    role: string;
    status: string;
    salary: number;
    applied_date: string;
    notes: string;
    red_flag: boolean;
  }

  export interface NavLink {
    name: string;
    href: string;
    label: string;
    key: string;
  }

  export enum EDITABLE_UI_STATE {
    EDIT = 'Edit',
    DISPLAY = 'Display',
  }

  export type EditableUiStateEnum = keyof typeof EDITABLE_UI_STATE;
}
