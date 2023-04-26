
export const enum ApplicationStatus {
  APPLIED = 'Applied',
  GHOSTED = 'Ghosted',
  INTERVIEWING = 'Interviewing',
  DENIED = 'Denied',
  APPROVED = 'Approved',
}

export type StatusEnum = keyof typeof ApplicationStatus;

export interface NavLink {
  name: string;
  href: string;
  label: string;
  key: string;
}

export const enum EDITABLE_UI_STATE {
  EDIT = 'Edit',
  DISPLAY = 'Display',
}

export type EditableUiStateEnum = keyof typeof EDITABLE_UI_STATE;
