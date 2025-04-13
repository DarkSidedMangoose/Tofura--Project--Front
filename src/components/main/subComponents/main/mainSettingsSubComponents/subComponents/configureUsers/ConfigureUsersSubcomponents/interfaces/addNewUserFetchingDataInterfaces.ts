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
