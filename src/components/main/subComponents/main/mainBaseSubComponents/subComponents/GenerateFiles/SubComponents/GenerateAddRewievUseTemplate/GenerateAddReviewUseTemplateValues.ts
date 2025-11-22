import {TemplateItem} from "./GenerateAddReviewUseTemplateInterfaces";

export const TemplateState: TemplateItem = {
  name: "თავსართი",
  remove: false,
  children: [
    {
      name: "პარაგრაფის სახელი",
      textArea: [
        {
          type: "text",
          value: "შეიყვანეთ ტექსტი",
          className: {
            fontSize: 16,
            fontStyle: { bold: true, italic: false, underline: false },
            fontFamily: "Roboto",
            fontElement: "h1",
            justify: "center",
            fontColor: "rgb(20,20,20)",
          },
        },
      ],
      index: 0,
      children: [
        [
          {
            name: "type",
            type: "select",
            option: ["text", "questionary", "placeholder", "table", "image"],
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
              objectValue: { bold: true, italic: false, underline: false },
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
        ],
      ],
    },
  ],
};

export const TemplateStateChildren = [

    {
      name: "პარაგრაფის სახელი",
      textArea: [
        {
          type: "text",
          value: "შეიყვანეთ ტექსტი",
          className: {
            fontSize: 16,
            fontStyle: { bold: true, italic: false, underline: false },
            fontFamily: "Roboto",
            fontElement: "h1",
            justify: "center",
            fontColor: "rgb(20,20,20)",
          },
        },
      ],
      index: 0,
      children: [
        [
          {
            name: "type",
            type: "select",
            option: ["text", "questionary", "placeholder", "table", "image"],
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
              objectValue: { bold: true, italic: false, underline: false },
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
        ],
      ],
    },
  
];

export const NewParagraphInSectionChildren = [
  [
    {
      name: "type",
      type: "select",
      option: ["text", "questionary", "placeholder", "table", "image"],
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
  ],
];


export const NewBlock = [
  {
    name: "type",
    type: "select",
    option: ["text", "questionary", "placeholder", "table", "image"],
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
      objectValue: { bold: true, italic: false, underline: false },
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


export const NewTextArea = {
  type: "text",
  value: "შეიყვანეთ ტექსტი",
  className: {
    fontSize: 16,
    fontStyle: { bold: false, italic: false, underline: false },
  },
};