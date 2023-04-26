
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
