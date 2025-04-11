export interface StateFetchedData {
  id: string;
  levels: number[];
  departments: DepartmentStruct[];
}

export interface DepartmentStruct {
  name: string;
  diversions: DiversionStruct[];
}

interface DiversionStruct {
  name: string;
  sections: string[];
}

// export interface StateFetchedData {
//   id: string;
//   levels: number[];
//   systemStruct: SystemStruct;
// }

// export interface SystemStruct {
//   [key: string]: NameDiversions;
// }

// interface NameDiversions {
//   name: string;
//   diversions: Diversions;
// }

// interface Diversions {
//   [key: string]: SeparateDiversion;
// }

// interface SeparateDiversion {
//   name: string;
//   sections: SeparateSection;
// }
// interface SeparateSection {
//   [key: string]: string;
// }
