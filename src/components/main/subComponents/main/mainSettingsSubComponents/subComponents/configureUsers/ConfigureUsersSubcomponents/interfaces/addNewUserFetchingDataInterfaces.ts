export interface StateFetchedData {
  id: string;
  levels: number[];
  systemStruct: SystemStruct;
}

export interface SystemStruct {
  department1: NameDiversions;
  department2: NameDiversions;
}

interface NameDiversions {
  name: string;
  diversions: Diversions;
}

interface Diversions {
  [key: string]: SeparateDiversion;
}

interface SeparateDiversion {
  name: string;
  sections: SeparateSection;
}
interface SeparateSection {
  [key: string]: string;
}
