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

export interface StateOfSelect {
  name: string;
  firstOption: string;
  controller: boolean;
  state: (string | number)[];
  departmentIdentifier?: number;
  value: string;
}
