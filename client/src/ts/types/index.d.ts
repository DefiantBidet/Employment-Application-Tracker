declare module 'DefiantBidet' {
  export interface Experiment {
    id: string;
    name: string;
    description?: string;
    enabled?: boolean;
  }
}
