import React, { Fragment, useEffect, useState } from "react";

import "../../../../../Scrollbar.css";
import "../Sliders.css";
import TemplateChoosedOption from "./TemplateChoosedOption";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Template from "./Template";
import Questionary from "./Questionary";

export type templateItemObjectPropsValue = {
  bold: boolean;
  italic: boolean;
  underline: boolean;
};

interface stateValues {
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

type templateItemProps = {
  name: string;
  children: templateItemObjectProps[][];
  index: number;
  textArea: any[];
  justify?: string;
};
type TemplateItem = {
  name: string;
  remove: boolean | null;
  children: templateItemProps[];
};

interface Props {
  state: {
    navState: string;
    templates: string[];
    choosedTemplate: string;
    addReviewNewTemplate: boolean;
    addNewTemplateNavState: string;
    choosedTemplateName: string;
    choosed: boolean;
  };
  setState: React.Dispatch<
    React.SetStateAction<{
      navState: string;
      templates: string[];
      choosedTemplate: string;
      templateIds: string[];
      choosedTemplateName: string;
      addReviewNewTemplate: boolean;
      addNewTemplateNavState: string;
      choosed: boolean;
    }>
  >;
}

const apiUrl = process.env.REACT_APP_API_BASE_URL;





const GenerateAddReviewUseTemplate: React.FC<Props> = ({ setState, state }) => {
  const navigate = useNavigate();

  const close = () => {
    setState((prev: any) => {
      const a = JSON.parse(JSON.stringify(prev));
      a.addNewTemplateNavState = "შაბლონი"
      return a;
    });
  };
  //* template name button activator
  const [templateNameButtonActivator, setTemplateNameButtonActivator] =
    useState<boolean>(false);
  const [addNewSection, setAddNewSection] = useState<boolean[]>([false]);


  useEffect(() => {
    console.log(addNewSection)
  },[addNewSection])

  const [addedSectionName, setAddedSectionName] = useState<string>("");
  const [templateOptionDropdown, setTemplateOptionDropdown] =
    useState<number>(-1);

  const [templateState, setTemplateState] = useState<TemplateItem[]>([
    {
      name: "თავსართი",
      remove: false,
      children: [
        {
          name: "paragraphName",
          justify: "right",
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
                option: ["text","questionary", "placeholder", "table", "image"],
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
    },
  ]);

  useEffect(() => {
    if (state.choosed) {
      const fetchData = async () => {
        try {
          const response = await axios.get(
            `${apiUrl}/generateFiles/getTemplateState`,
            {
              params: {
                templateId: state.choosedTemplate,
              },
              withCredentials: true,
            }
          );
          setTemplateState((prev) => [response.data.templateState].flat());
          const template = [false];
          console.log(templateState)
          response.data.templateState.flat().forEach(() => {
            template.push(false);
          });
          setAddNewSection(template);
        } catch (error) {
          if (axios.isAxiosError(error) && error.response?.status === 401) {
            navigate("/");
          }
          console.error("Error fetching template state:", error);
        }
      };
      fetchData();
    } else {
      const template = [false];
      templateState.forEach((e) => {
        template.push(false);
      });
      setAddNewSection(template);
    }
  }, []);

  const insertAtIndex = (index: number, item: TemplateItem) => {
    setTemplateState((prevTemplates) => {
      const newTemplates = [...prevTemplates];
      newTemplates.splice(index, 0, item);
      return newTemplates;
    });
  };

  const handleAddNewSection = (index: number) => {
    setAddNewSection((prev) => {
      const newSections = [...prev];
      newSections.push(true); // Add a new section
      newSections.forEach((e, idx) => {
        newSections[idx] = false; // Reset all other sections
      });
      return newSections;
    });

    insertAtIndex(index, {
      name: `${addedSectionName}`,
      remove: null,

      children: [
        {
          name: "paragraphName",
          index: 0,
          textArea: [
            {
              type: "text",
              value: "შეიყვანეთ ტექსტი",
              className: {
                fontSize: 16,
                fontStyle: { bold: true, italic: false, underline: false },
              },
            },
          ],
          children: [
            [
              {
                name: "type",
                type: "select",
                option: ["text","questionary", "placeholder", "table", "image"],
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
    });
    setAddedSectionName(""); // Reset the section name input
    setTemplateOptionDropdown(-1); // Close the dropdown if open
  };

  const addNewTemplateNd = async () => {
    console.log(templateState)
    try {
      const response = await axios.post(
        `${apiUrl}/generateFiles/generateWordFile`,
        {
          templateName: state.choosedTemplateName,
          templateState: templateState,
        },
        {
          responseType: "blob", // Important for binary files
          withCredentials: true,
        }
      );

      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", `${state.choosedTemplateName}.docx`); // Optional: customize filename
      document.body.appendChild(link);
      link.click();
      link.remove();
    } catch (error) {
      console.error("Error generating Word file:", error);
    }
  };

  const addNewTemplate = async () => {
    try {
      if (state.choosed) {
        await axios.put(
          `${apiUrl}/generateFiles/updateTemplate`,
          {
            id: state.choosedTemplate,
            templateState: templateState,
            templateName: state.choosedTemplateName,
          },
          {
            withCredentials: true,
          }
        );
        setState((prev) => ({ ...prev, addReviewNewTemplate: false }));
      } else {
        await axios.post(
          `${apiUrl}/generateFiles/addNewTemplate`,
          {
            templateName: state.choosedTemplateName,
            templateState: templateState,
          },
          {
            withCredentials: true,
          }
        );
        setState((prev) => ({ ...prev, addReviewNewTemplate: false }));
      }
    } catch (error) {
      console.log(templateState);
      if (axios.isAxiosError(error) && error.response?.status === 401) {
        navigate("/");
      }
    }
  };

  const handleAddNewParagraph = (templateIndex: number, name: string) => {
    setTemplateState((prevTemplates) =>
      prevTemplates.map((template, i) => {
        if (i !== templateIndex) return template;
        return {
          ...template,
          children: [
            ...template.children,
            {
              name: name,
              index: 0,
              textArea: [
                {
                  type: "text",
                  value: "ტექსტი",
                  className: {
                    fontSize: 16,
                    fontStyle: { bold: true, italic: false, underline: false },
                  },
                },
              ],
              children: [
                [
                  {
                    name: "type",
                    type: "select",
                    option: ["text","questionary", "placeholder", "table", "image"],
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
              ],
            },
          ],
        };
      })
    );
  };

  const AddNewValueInParagraph = (
    templateIndex: number,
    childIndex: number
  ) => {
    setTemplateState((prev: TemplateItem[]) => {
      // Deep clone of previous state to avoid mutation confusion
      const newState = JSON.parse(JSON.stringify(prev));
      // Defensive access
      const targetArea =
        newState?.[templateIndex]?.children?.[childIndex]?.textArea;
      const targetIndex =
        newState?.[templateIndex]?.children?.[childIndex]?.index;
      if (!Array.isArray(targetArea)) return prev;
      const newTextArea = {
        type: "text",
        value: "შეიყვანეთ ტექსტი",
        className: {
          fontSize: 16,
          fontStyle: { bold: false, italic: false, underline: false },
        },
      };
      targetArea.splice(targetIndex + 1, 0, newTextArea);
      const targetChildren =
        newState?.[templateIndex]?.children?.[childIndex]?.children;
      if (!Array.isArray(targetChildren)) return prev;

      const newBlock = [
        {
          name: "type",
          type: "select",
          option: ["text","questionary", "placeholder", "table", "image"],
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

      targetChildren.push(newBlock);
      return newState;
    });
  };

  return (
    <div className="fixed inset-0 bg-[#d5d8df4f] z-10 flex flex-col justify-center items-center">
      <div className="w-[700px] h-[5%] min-h-[50px] flex justify-center items-end">
        <ul className="w-full h-full flex gap-2 ">
          {["შაბლონი", "შაბლონის კითხვარი", "შაბლონის ვიზუალი"].map((e, i) => (
            <li
              key={i}
              onClick={() =>
                setState((prev) => ({ ...prev, addNewTemplateNavState: e }))
              }
              className={`w-1/2 h-full flex justify-center items-center ${
                state.addNewTemplateNavState === e
                  ? "bg-sidebarChoose text-white border-white"
                  : "bg-white text-sidebarChoose border-sidebarChoose"
              } cursor-pointer`}
            >
              {e}
            </li>
          ))}
        </ul>
      </div>

      <div
        onClick={() => setTemplateNameButtonActivator(false)}
        className="w-80% min-h-[640px] max-h-[80vh]  "
      >
        {state.addNewTemplateNavState === "შაბლონი" ? (
          <Fragment>
            <Template
              templateNameButtonActivator={templateNameButtonActivator}
              setTemplateNameButtonActivator={setTemplateNameButtonActivator}
              state={state}
              setState={setState}
              templateState={templateState}
              setTemplateState={setTemplateState}
              addNewSection={addNewSection}
              setAddNewSection={setAddNewSection}
              addedSectionName={addedSectionName}
              setAddedSectionName={setAddedSectionName}
              templateOptionDropdown={templateOptionDropdown}
              setTemplateOptionDropdown={setTemplateOptionDropdown}
              handleAddNewSection={handleAddNewSection}
            />

            {templateOptionDropdown !== -1 && (
              <div className=" w-full h-full absolute flex justify-center items-center left-0 top-0 z-20">
                <TemplateChoosedOption
                  templateState={templateState}
                  i={templateOptionDropdown}
                  AddNewValueInParagraph={AddNewValueInParagraph}
                  setTemplateState={setTemplateState}
                  handleAddNewParagraph={handleAddNewParagraph}
                  setTemplateOptionDropdown={setTemplateOptionDropdown}
                />
              </div>
            )}
          </Fragment>
        ) : (
          state.addNewTemplateNavState === "შაბლონის კითხვარი" && (
            <Questionary state={templateState} setState={setTemplateState} close={() => close()} generate={() => addNewTemplateNd()} />
          )
        )}
        
        {state.addNewTemplateNavState === "შაბლონი" && (
          <div className="w-full h-[15%] min-h-[90px] flex justify-end items-center">
            <button
              onClick={() =>
                setState((prev) => ({ ...prev, addReviewNewTemplate: false }))
              }
              className="w-200px mr-2 p-4 font-semibold bg-sidebarChoose rounded-lg text-white"
            >
              დახურვა
            </button>
            <button
              onClick={() => {
                  addNewTemplate()
                  // : addNewTemplateNd();
              }}
              className="w-200px mr-2 p-4 font-semibold bg-sidebarChoose rounded-lg text-white"
            >
              შენახვა
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default GenerateAddReviewUseTemplate;
