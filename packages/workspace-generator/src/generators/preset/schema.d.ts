export type Boilerplates = 'website' | 'landing-page' | 'app';
export interface PresetGeneratorSchema {
  name: string;
  addDocs?: boolean;
  boilerplates?: Boilerplates[];
}
