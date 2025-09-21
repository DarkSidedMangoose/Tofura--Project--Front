import React, { useEffect, useState } from 'react';
import RemIcon from '../../../../../../../assets/images/main/delete.webp';
import ConfirmIcon from '../../../../../../../assets/images/main/right.webp';
import DeclineIcon from '../../../../../../../assets/images/main/cancel.webp';
import "../../../../../Scrollbar.css";
import "../Sliders.css"
import TemplateChoosedOption from './TemplateChoosedOption';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';



export type templateItemObjectPropsValue = {
  bold: boolean;
  italic: boolean;
  underline: boolean;
}

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
  children: templateItemObjectProps[][]
  index: number;
  textArea: any[]
  justify?: string;
}
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
    choosedTemplateName:string;
    choosed: boolean;
  };
  setState: React.Dispatch<React.SetStateAction<{
    navState: string;
    templates: string[];
    choosedTemplate: string;
    templateIds: string[];
    choosedTemplateName:string;
    addReviewNewTemplate: boolean;
    addNewTemplateNavState: string;
    choosed: boolean;
    
  }>>;
}

const apiUrl = process.env.REACT_APP_API_BASE_URL;

const GenerateAddReviewUseTemplate: React.FC<Props> = ({ setState, state }) => {
   const navigate = useNavigate();
  //* template name button activator
  const [templateNameButtonActivator, setTemplateNameButtonActivator] = useState<boolean>(false);
  const [addNewSection, setAddNewSection] = useState<boolean[]>([false]);
  const [addedSectionName, setAddedSectionName] = useState<string>("");
  const [templateOptionDropdown, setTemplateOptionDropdown] = useState<number>(-1);

  
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
                bgColor: "rgb(0,0,0)",
              },
            },
          ],
          index: 0,
          children: [
            [
              {
                name: "type",
                type: "select",
                option: ["text", "table", "image"],
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
                option: ["Arial", "Roboto", "Times New Roman"],
                value: { stringValue: "Arial" },
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
              {
                name: "background color",
                type: "color",
                value: { stringValue: "#ffffff" },
              },
            ],
            [
              {
                name: "type",
                type: "select",
                option: ["text", "table", "image"],
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
                option: ["Arial", "Roboto", "Times New Roman"],
                value: { stringValue: "Arial" },
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
              {
                name: "background color",
                type: "color",
                value: { stringValue: "#ffffff" },
              },
            ]
          ],
        },
      ],
    },
  ]);
  useEffect(() => {
    if(state.choosed) {

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
        setTemplateState((prev) => ([response.data.templateState].flat()))
        const template = [false];
        templateState.forEach((e) => {
          template.push(false);
        });
        setAddNewSection(template);
        console.log(response.data.templateState);
      }catch (error) {
        if (axios.isAxiosError(error) && error.response?.status === 401) {
          navigate("/");
        } 
        console.error("Error fetching template state:", error);
      }
    }
    fetchData();
    

  }
  },[])
  // useEffect(() => {
  //   const template = [false]
  //   templateState.forEach((e) => {
  //     template.push(false)
  //   })
  //   setAddNewSection(template);


  // }, [templateState])

  useEffect(() => {
    console.log(addNewSection)
  },[addNewSection])
  
 
  const [templateRow, setTemplateRow] = useState<TemplateItem | null>(null);

  
  
  
   const insertAtIndex = (index: number, item: TemplateItem) => {
    setTemplateState((prevTemplates) => {
      const newTemplates = [...prevTemplates];
      newTemplates.splice(index, 0, item);
      return newTemplates;
    })
  }

  const handleAddNewSection = (index: number) => { 
    setAddNewSection((prev) => {
      const newSections = [...prev];
      newSections.push(true); // Add a new section
      newSections.forEach((e, idx) => {
      
        newSections[idx] = false; // Reset all other sections
      })
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
                option: ["text", "table", "image"],
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
                option: ["Arial", "Roboto", "Times New Roman"],
                value: { stringValue: "Arial" },
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
              {
                name: "background color",
                type: "color",
                value: { stringValue: "#ffffff" },
              },
            ],
          ],
        },
      ],
    });
    setAddedSectionName(""); // Reset the section name input
    setTemplateOptionDropdown(-1); // Close the dropdown if open
}

  const addNewTemplateNd = async () => {
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
  }
      
  const addNewTemplate = async () => {
    try {
      if(state.choosed) {
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

      }else {

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

    }catch (error) {
      console.log(templateState)
     if (axios.isAxiosError(error) && error.response?.status === 401) {
       navigate("/");
     } 
    }
  }
 
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
                    option: ["text", "table", "image"],
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
                    option: ["Arial", "Roboto", "Times New Roman"],
                    value: { stringValue: "Arial" },
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
                  {
                    name: "background color",
                    type: "color",
                    value: { stringValue: "#ffffff" },
                  },
                ],
              ],
            },
          ],
        };
      })
    );
  };
  
  const AddNewValueInParagraph = (templateIndex: number, childIndex: number) => {
  setTemplateState((prev: TemplateItem[]) => {
    // Deep clone of previous state to avoid mutation confusion
    const newState = JSON.parse(JSON.stringify(prev));
    // Defensive access
    const targetArea = newState?.[templateIndex]?.children?.[childIndex]?.textArea;
    const targetIndex = newState?.[templateIndex]?.children?.[childIndex]?.index;
    if (!Array.isArray(targetArea)) return prev;
    const newTextArea = { type:"text", value: "შეიყვანეთ ტექსტი", className: { fontSize: 16, fontStyle: { bold: false, italic: false, underline: false } } };
    targetArea.splice(targetIndex + 1,0,newTextArea);
    const targetChildren = newState?.[templateIndex]?.children?.[childIndex]?.children;
    if (!Array.isArray(targetChildren)) return prev;

    const newBlock = [
              {
                name: "type",
                type: "select",
                option: ["text", "table", "image"],
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
                option: ["Arial", "Roboto", "Times New Roman"],
                value: { stringValue: "Arial" },
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
              {
                name: "background color",
                type: "color",
                value: { stringValue: "#ffffff" },
              },
            ];

    targetChildren.push(newBlock);
    return newState;
  });
};


  return (
    <div className="fixed inset-0 bg-loginBackground z-10 flex flex-col justify-center items-center">
      <div className="w-[700px] h-[5%] min-h-[50px] flex justify-center items-end">
        <ul className="w-full h-full flex gap-2 ">
          {["შაბლონი", "შაბლონის კონფიგურაცია", "შაბლონის ვიზუალი"].map(
            (e, i) => (
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
            )
          )}
        </ul>
      </div>

      <div
        onClick={() => setTemplateNameButtonActivator(false)}
        className="w-80% min-h-[640px] max-h-[80vh]  "
      >
        <div className="w-full h-[15%] min-h-[50px] flex justify-center items-center shadow-bottom bg-sidebarChoose  ">
          <div className="w-auto  h-2/3 flex justify-center items-center relative">
            {!templateNameButtonActivator && (
              <div
                onClick={(e) => {
                  e.stopPropagation();
                  setTemplateNameButtonActivator(true);
                }}
                className="w-full h-full z-20 absolute bg-transparent cursor-pointer"
              ></div>
            )}

            <input
              value={state.choosedTemplateName}
              onChange={(e) => {
                setState((prev) => {
                  return { ...prev, choosedTemplateName: e.target.value };
                });
              }}
              onClick={(e) => {
                e.stopPropagation();
              }}
              className=" z-10 h-full bg-loginBackground text-[#020b37] font-semibold "
            />
          </div>
        </div>
        <div className="w-full  h-[85%] min-h-[500px] max-h-[500px]  flex flex-col gap-2 custom-scrollbar overflow-y-auto overflow-x-hidden items-end ">
          {addNewSection[0] && (
            <div className="absolute z-10 h-[70px] flex gap-8 justify-center  items-center bg-sidebarChoose font-bold text-white w-[300px] ">
              <input
                className="w-2/3 h-2/3 text-[10px] px-2 text-sidebarChoose"
                value={addedSectionName}
                onChange={(e) => setAddedSectionName(e.target.value)}
                type="text"
                placeholder="...შეიყვანეთ სექციის სახელი"
              />
              <div className="w-auto h-2/3 flex flex-col gap-2">
                <img
                  className="w-auto h-[47%] cursor-pointer hover:opacity-80 hover:scale-125 transition-all duration-200 "
                  alt="addNew"
                  onClick={() => handleAddNewSection(0)}
                  src={ConfirmIcon}
                />
                <img
                  className="w-auto h-[47%] cursor-pointer hover:opacity-80 hover:scale-125 transition-all duration-200"
                  alt="decline"
                  onClick={() =>
                    setAddNewSection((prev) => {
                      const newSections = [...prev];
                      newSections[0] = false; // Reset the first section
                      return newSections;
                    })
                  }
                  src={DeclineIcon}
                />
              </div>
            </div>
          )}
          <button
            className="mt-2 min-h-[70px] flex justify-center  items-center bg-sidebarChoose font-bold text-white w-[300px] "
            onClick={() => {
              setTemplateState((prev) => {
                const newTemplates = [...prev];
                newTemplates.forEach((template, index) => {
                  template.remove = null; // Reset remove state for other templates
                });
                return newTemplates;
              });
              setAddedSectionName("");
              setTemplateOptionDropdown(-1); // Close the dropdown if open
              setAddNewSection((prev) => {
                const newSections = [...prev];
                prev.forEach((e, index) => {
                  if (index != 0) {
                    newSections[index] = false; // Reset all other sections
                  } else {
                    newSections[index] = true; // Toggle the clicked section
                  }
                });
                return newSections;
              });
            }}
          >
            ახალი სექციის დამატება
          </button>

          {templateState.map((templateRow, i) => (
            <div key={i} className="w-full flex flex-col items-end gap-2">
              {/* {(i === 0 ) && 
              
            <button className='h-[70px] flex justify-center  items-center bg-loginBackground font-bold text-sidebarChoose w-[300px]'>ახალი სექციის დამატება</button>
              } */}
              <div
                onClick={() => {
                  setTemplateRow(templateRow);
                  setTemplateOptionDropdown(
                    templateOptionDropdown === i ? -1 : i
                  );
                }}
                key={i}
                className={`w-full bg-loginBackground  transition-all  cursor-pointer  duration-200 min-h-[100px] flex gap-2 justify-between`}
              >
                <div className="w-full h-full flex justify-between relative ">
                  <div className="h-full flex items-center font-bold px-4">
                    {templateOptionDropdown !== i && (
                      <h1>
                        {i + 1}) {templateRow.name}
                      </h1>
                    )}
                  </div>
                  <div className="w-auto flex gap-4  items-center justify-center">
                    <img
                      src={RemIcon}
                      className={`h-1/2  hover:scale-105 hover:opacity-90 transition-all duration-200 mr-2`}
                      onClick={(e) => {
                        e.stopPropagation();
                        setAddNewSection((prev) => {
                          const AddNewSection = [...prev];
                          AddNewSection.forEach((e, index) => {
                            prev[index] = false; // Reset all other sections
                          });
                          return AddNewSection;
                        });
                        setTemplateState((prev) =>
                          prev.map((item, idx) => {
                            if (idx === i) {
                              if (item.remove === null) {
                                return { ...item, remove: true };
                              } else {
                                return { ...item, remove: !item.remove };
                              }
                            }

                            return { ...item, remove: null }; // Reset remove state for other items
                          })
                        );
                      }}
                    />
                    <button
                      className={`${
                        templateRow.remove === null
                          ? "hidden"
                          : templateRow.remove === false
                          ? "SlideEffectRemoveSectionFalse "
                          : "SlideEffectRemoveSectionTrue"
                      }`}
                      onClick={(e) => {
                        e.stopPropagation();
                        setTemplateState((prev) => {
                          return prev.filter((_, idx) => idx !== i);
                        });
                      }}
                    >
                      <span
                        className={`${
                          templateRow.remove === null
                            ? "hidden"
                            : templateRow.remove === true
                            ? "flex"
                            : "hidden"
                        }`}
                      >
                        წაშლა
                      </span>{" "}
                    </button>
                  </div>
                </div>
              </div>
              <div className="h-[70px] w-[300px] relative">
                {addNewSection[i + 1] && (
                  <div className="absolute z-10 h-[70px] flex gap-8 justify-center  items-center bg-sidebarChoose font-bold text-white w-[300px] ">
                    <input
                      className="w-2/3 h-2/3 text-[10px] px-2 text-sidebarChoose"
                      value={addedSectionName}
                      onChange={(e) => setAddedSectionName(e.target.value)}
                      type="text"
                      placeholder="...შეიყვანეთ სექციის სახელი"
                    />
                    <div className="w-auto h-2/3 flex flex-col gap-2">
                      <img
                        className="w-auto h-[47%] cursor-pointer hover:opacity-80 hover:scale-125 transition-all duration-200 "
                        onClick={() => handleAddNewSection(i + 1)}
                        src={ConfirmIcon}
                      />
                      <img
                        className="w-auto h-[47%] cursor-pointer hover:opacity-80 hover:scale-125 transition-all duration-200"
                        onClick={() =>
                          setAddNewSection((prev) => {
                            const newSections = [...prev];
                            newSections[i + 1] = false; // Reset the first section
                            return newSections;
                          })
                        }
                        src={DeclineIcon}
                      />
                    </div>
                  </div>
                )}
                <button
                  className="h-[70px] flex justify-center  items-center bg-sidebarChoose font-bold text-white w-[300px] "
                  onClick={() => {
                    setTemplateState((prev) => {
                      const newTemplates = [...prev];
                      newTemplates.forEach((template, index) => {
                        template.remove = null; // Reset remove state for other templates
                      });
                      return newTemplates;
                    });
                    setAddedSectionName("");
                    setTemplateOptionDropdown(-1); // Close the dropdown if open
                    setAddNewSection((prev) => {
                      const newSections = [...prev];
                      prev.forEach((e, index) => {
                        if (index !== i + 1) {
                          newSections[index] = false; // Reset all other sections
                        } else {
                          newSections[index] = true; // Toggle the clicked section
                        }
                      });
                      return newSections;
                    });
                  }}
                >
                  ახალი სექციის დამატება
                </button>
              </div>
            </div>
          ))}
        </div>
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
              addNewTemplate();
            }}
            className="w-200px mr-2 p-4 font-semibold bg-sidebarChoose rounded-lg text-white"
          >
            შენახვა
          </button>
        </div>
      </div>
    </div>
  );
};

export default GenerateAddReviewUseTemplate;
