export const ChildrenQustionaryValue = [
  {
    name: "type",
    type: "select",
    option: ["text", "placeholder", "questionary", "table", "image"],
    value: { stringValue: "questionary" },
  },
  
  
];


export const ChildrenPlaceholderValue = [
  {
    name: "type",
    type: "select",
    option: ["text", "placeholder", "questionary", "table", "image"],
    value: { stringValue: "placeholder" },
  },
  {
    name: "element tag",
    type: "select",
    option: ["h1", "h2", "p", "span"],
    value: { stringValue: "h1" },
  },
  {
    name: "font family",
    type: "select",
    option: ["Calibri", "Roboto", "Times New Roman"],
    value: { stringValue: "Calibri" },
  },
  {
    name: "font size",
    type: "input",
    value: { numberValue: 16 },
  },
  {
    name: "text style",
    type: "multiselect",
    option: ["bold", "italic", "underline"],
    value: {
      objectValue: {
        bold: true,
        italic: false,
        underline: false,
      },
    },
  },
  {
    name: "alignment",
    type: "select",
    option: ["left", "center", "right", "justify"],
    value: { stringValue: "left" },
  },
  {
    name: "color",
    type: "color",
    value: { stringValue: "#000000" },
  },
];


export const ChildrenTextValue = [
  {
    name: "type",
    type: "select",
    option: ["text", "placeholder", "questionary", "table", "image"],
    value: { stringValue: "text" },
  },
  {
    name: "element tag",
    type: "select",
    option: ["h1", "h2", "p", "span"],
    value: { stringValue: "h1" },
  },
  {
    name: "font family",
    type: "select",
    option: ["Calibri", "Roboto", "Times New Roman"],
    value: { stringValue: "Calibri" },
  },
  {
    name: "font size",
    type: "input",
    value: { numberValue: 16 },
  },
  {
    name: "text style",
    type: "multiselect",
    option: ["bold", "italic", "underline"],
    value: {
      objectValue: {
        bold: true,
        italic: false,
        underline: false,
      },
    },
  },
  {
    name: "alignment",
    type: "select",
    option: ["left", "center", "right", "justify"],
    value: { stringValue: "left" },
  },
  {
    name: "color",
    type: "color",
    value: { stringValue: "#000000" },
  },
];

export const ChildrenTableValue = [
  {
    name: "type",
    type: "select",
    value: "table",
    option: ["text", "questionary", "table", "image"],
  },
  { name: "rows", type: "input", value: "" },
  { name: "columns", type: "input", value: 2 },
  {
    name: "border",
    type: "select",
    option: ["none", "solid", "dashed", "dotted"],
    value: "none",
  },
  { name: "cell padding", type: "input", value: 5 },
  {
    name: "alignment",
    type: "select",
    option: ["left", "center", "right"],
    value: "left",
  },
  { name: "width", type: "input", value: "100%" },
  { name: "background color", type: "color", value: "#ffffff" },
];

export const ChildrenImageValue = [
  {
    name: "type",
    type: "select",
    value: { stringValue: "image" },
    option: ["text", "placeholder", "questionary", "table", "image"],
  },
  {
    name: "source",
    type: "input",
    placeholder: "Image URL or path",
    value: { stringValue: "" },
  },
  {
    name: "alt text",
    type: "input",
    value: { stringValue: "image" },
  },
  { name: "width", type: "input", value: { stringValue: "100%" } },
  { name: "height", type: "input", value: { stringValue: "auto" } },

  {
    name: "alignment",
    type: "select",
    option: ["left", "center", "right"],
    value: { stringValue: "left" },
  },
  {
    name: "border radius",
    type: "input",
    value: { stringValue: "16" },
  },
];