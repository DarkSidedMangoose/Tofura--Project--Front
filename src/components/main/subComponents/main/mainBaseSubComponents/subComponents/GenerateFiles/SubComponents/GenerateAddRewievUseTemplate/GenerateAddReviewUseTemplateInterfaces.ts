export type templateItemObjectPropsValue = {
  bold: boolean;
  italic: boolean;
  underline: boolean;
};

export interface stateValues {
  stringValue?: string;
  numberValue?: number;
  objectValue?: templateItemObjectPropsValue;
}
export type templateItemObjectProps = {
  name: string;
  type?: string;
  element?: string;
  value?: stateValues;
  option?: string[];
  placeholder?: string;
};

export type templateItemProps = {
  name: string;
  children: templateItemObjectProps[][];
  index: number;
  textArea: any[];
  justify?: string;
};
export type TemplateItem = {
  name: string;
  remove: boolean | null;
  children: templateItemProps[];
};

