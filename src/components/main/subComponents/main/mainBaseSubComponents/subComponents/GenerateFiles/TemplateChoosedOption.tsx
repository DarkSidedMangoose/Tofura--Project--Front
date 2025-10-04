import React, {  Fragment, useCallback, useEffect, useRef,  } from 'react';
import { templateItemObjectProps } from './GenerateAddReviewUseTemplate';
import PopUpsAddNewParagraph, { ParagraphStructure } from './PopUps';
import Bold from '../../../../../../../assets/images/main/text.png';
import Italic from '../../../../../../../assets/images/main/italic-button.png';
import Underline from '../../../../../../../assets/images/main/underline.png';
import { EditableSpan } from './EditableSpan';
import { useDispatch } from 'react-redux';
import axios from 'axios'
import Placeholder from './Placeholder';


const Api = process.env.REACT_APP_API_BASE_URL

interface Props {
  templateState: any;
  i: number;
  AddNewValueInParagraph: (i: number, childIndex: number) => void;
  setTemplateState: React.Dispatch<React.SetStateAction<any[]>>;
  handleAddNewParagraph: (i: number, text: string) => void;
  setTemplateOptionDropdown: React.Dispatch<React.SetStateAction<number>>;
}
export type TemplatePopUpProps = {
  paragraphStructureShow: boolean;
  paragraphAddNew: boolean;
};

const TemplateChoosedOption: React.FC<Props> = ({
  templateState,
  i,
  AddNewValueInParagraph,
  setTemplateState,
  handleAddNewParagraph,
  setTemplateOptionDropdown,
}) => {
  
  useEffect(() => {
    console.log(templateState)
  }, [templateState]);
 
  const dispatch = useDispatch();
    // useEffect(() => {
    //   CheckAllPlaceholders()
    // },[templateState])
    // const  CheckAllPlaceholders = () => {
    //   const allPlaceHolder = [] as any[];
    //   templateState.forEach((section: any, sectionIndex: number) => {
    //     section.children.forEach((paragraph: any, paragraphIndex: number) => {
    //       if(paragraph.children[0].type === "placeholder") {
    //         allPlaceHolder.push({
    //           uuid: paragraph.children[0].uuid,
    //           name: `Placeholder ${allPlaceHolder.length + 1}`,
    //           value: "",
    //           indexOfSection: i,
    //           indexOfParagraph: sectionIndex,
    //           indexOfTextArea: paragraphIndex,
    //         });
    //       }
    //     })
    //   })
    //   Placeholders.forEach((item, index) => {
    //    const found = allPlaceHolder.find(ph => ph.uuid === item.uuid);
    //    if(found) {
    //     if(item.indexOfSection !== found.indexOfSection || item.indexOfParagraph !== found.indexOfParagraph || item.indexOfTextArea !== found.indexOfTextArea) {
    //       dispatch(updatePlaceholders({uuid: found.uuid, indexOfSection: found.indexOfSection, indexOfParagraph: found.indexOfParagraph, indexOfTextArea: found.indexOfTextArea}) )
    //     }
    //    }
       
    //   })
    // };
        // dispatch(setTemplatePlaceholders({name: "placeholder", value: '',indexOfSection:0, indexOfParagraph: 2, indexOfTextArea: 3}));
      
  


  const [templatePopUpProps, setTemplatePopUpProps] =
    React.useState<TemplatePopUpProps>({
      paragraphStructureShow: false,
      paragraphAddNew: false,
    });

  const handleClickAddNewParagraph = useCallback(
    (i: number) => {
      setTemplatePopUpProps((prev) => ({
        ...prev,
        paragraphAddNew: !prev.paragraphAddNew,
      }));
    },
    [templatePopUpProps]
  );

  const handleAddNewParagraphWithName = useCallback(
    (text: string) => {
      handleAddNewParagraph(i, text);
      setTemplatePopUpProps((prev) => ({
        ...prev,
        paragraphAddNew: false,
      }));
    },
    [templatePopUpProps, i]
  );

  //Generate Word File
  const GenerateWordFile = async () => {
    try {
      const response = await axios.post(
        `${Api}/generateFiles/generateWordFile`,
        { templateName: templateState[i].name, templateState: templateState[i] },
        {
          responseType: "blob", // Important for binary files
          withCredentials: true,
        }
      );

      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "output.docx"); // Optional: customize filename
      document.body.appendChild(link);
      link.click();
      link.remove();
    } catch (error) {
      console.error("Error generating Word file:", error);
    }
  };
  //
  const handleChangeSelectOption = useCallback(
    (
      templateIndex: number,
      childIndex: number,
      optionIndex: number,
      optionSelection: number,
      e: any,
      name: string
    ) => {
      setTemplateState((prev) => {
        const newState = JSON.parse(JSON.stringify(prev));

        newState[templateIndex].children[childIndex].children[optionIndex][
          optionSelection
        ].value.stringValue = e.target.value;
        if (name === "alignment") {
          newState[templateIndex].children[childIndex].justify = e.target.value;
        }
        return newState;
      });
    },
    []
  );

  const handleChangeType = (
    selected: string,
    templateIndex: number,
    childIndex: number,
    optionIndex: number
  ) => {
    setTemplateState((prev) => {
      const newState = JSON.parse(JSON.stringify(prev));
      const childrenCopy = [
        ...newState[templateIndex].children[childIndex].children,
      ];
      switch (selected) {
        case "text":
          // if (
          //   newState[templateIndex].children[childIndex].textArea[0].type ===
          //   "text"
          // ) {
          console.log(childrenCopy)
          newState[templateIndex].children[childIndex].textArea[optionIndex] = {
            
              type: "text",
              value: "asket",
              className: {
                fontSize: 16,
                fontStyle: { bold: true, italic: false, underline: false },
              },
            
            
          };



            childrenCopy[optionIndex] = [
              {
                name: "type",
                type: "select",
                option: ["text","placeholder", "table", "image"],
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
          // } else {
          //   newState[templateIndex].children[childIndex].textArea = [
          //     {
          //       type: "text",
          //       value: "sada",
          //       className: {
          //         fontSize: 16,
          //         fontStyle: { bold: true, italic: false, underline: false },
          //       },
          //     },
          //   ];
          //   newState[templateIndex].children[childIndex].index = 0;
          // }
          break;
        case "table":
          newState[templateIndex].children[childIndex].textArea = [
            { type: "table" },
          ];
          childrenCopy[optionIndex] = [
            {
              name: "type",
              type: "select",
              value: "table",
              option: ["text", "table", "image"],
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
          break;
        case "image":
          childrenCopy[optionIndex] = [
            {
              name: "type",
              type: "select",
              value: { stringValue: "image" },
              option: ["text","placeholder", "table", "image"],
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
          break;
          case "placeholder":
            console.log(childrenCopy)
            const uuid = crypto.randomUUID();
            newState[templateIndex].children[childIndex].textArea[optionIndex] = {
              uuid: uuid,
              type: "placeholder",
            value: "",
            className: {
              fontSize: 16,
              fontStyle: { bold: true, italic: false, underline: false },
            },
            
            }
            childrenCopy[optionIndex] = [
              {
                name: "type",
                type: "select",
                option: ["text", "placeholder", "table", "image"],
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
      }

      newState[templateIndex].children[childIndex].children = childrenCopy;
      return newState;
    });
  };

  //fix scrollbar issue when click on editablespan which was overflow-x and when we move to the right side of scrollbar and click on editableSpan without it happend back to the left scrollbar
   const scrollRef = useRef<HTMLDivElement>(null);

   const handleClickMainDiv = (
     childIndex: number,
     optionTextAreaIndex: number
   ) => {
     const scrollX = scrollRef.current?.scrollLeft ?? 0;

     setTemplateState((prev) => {
       const newState = JSON.parse(JSON.stringify(prev));
       newState[i].children[childIndex].index = optionTextAreaIndex;
       return newState;
     });

     requestAnimationFrame(() => {
       if (scrollRef.current) {
         scrollRef.current.scrollLeft = scrollX;
       }
     });
   };
   
  

  const renderField = (
    option: templateItemObjectProps,
    optionSelection: number,
    templateIndex: number,
    childIndex: number,
    optionIndex: number
  ) => {
    switch (option.type) {
      case "select":
        
        return (
          <select
            value={
              option.name === "alignment"
                ? templateState[templateIndex].children[childIndex].justify
                : typeof option.value?.stringValue === "string" ||
                  typeof option.value?.numberValue === "number"
                ? option.value.stringValue || option.value.numberValue || option.value.objectValue
                : ""
            }
            onChange={(e) => {
              option.name === "type"
                ? handleChangeType(
                    e.target.value,
                    templateIndex,
                    childIndex,
                    optionIndex
                  )
                : handleChangeSelectOption(
                    templateIndex,
                    childIndex,
                    optionIndex,
                    optionSelection,
                    e,
                    option.name
                  );
            }}
            className="h-[50px] text-sm px-4  border rounded"
          >

            <option disabled>აირჩიე</option>
            {option.option?.map((o, idx) => (
              <option key={idx}>{o}</option>
            ))}
          </select>
        );
      case "input":
        return (
          <input
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              setTemplateState((prev) => {
                const newState = JSON.parse(JSON.stringify(prev));
                newState[templateIndex].children[childIndex].children[
                  optionIndex
                ][optionSelection].value.numberValue = Number(
                  event.target.value
                );
                if (option.name === "font size") {
                  const index =
                    newState[templateIndex].children[childIndex].index;
                  newState[templateIndex].children[childIndex].textArea[
                    index
                  ].className.fontSize = Number(event.target.value);
                }
                return newState;
              });
            }}
            type="number"
            style={{
              appearance: "auto",
            }}
            placeholder={option.placeholder}
            value={
              typeof option.value?.stringValue === "string"
                ? option.value.stringValue
                : typeof option.value?.numberValue === "number"
                ? option.value.numberValue
                : ""
            }
            className="h-[50px] w-[70px] text-sm px-4  bg-white border rounded"
          />
        );
      case "multiselect":
        const handleClick = (arg: string) => {
          setTemplateState((prev) => {
            const newState = JSON.parse(JSON.stringify(prev));
            const currentOption =
              newState[templateIndex].children[childIndex].textArea[optionIndex]
                .className.fontStyle;
            if (currentOption.bold !== undefined && arg === "bold") {
              currentOption.bold = !currentOption.bold;
            } else if (currentOption.bold !== undefined && arg === "italic") {
              currentOption.italic = !currentOption.italic;
            } else if (
              currentOption.bold !== undefined &&
              arg === "underline"
            ) {
              currentOption.underline = !currentOption.underline;
            }

            return newState;
          });
        };
        return (
          <div className="flex w-full h-full gap-4">
            {option.option?.map((style, idx) => (
              <Fragment key={idx}>
                {style === "bold" ? (
                  <div className="w-1/4 h-full flex justify-center items-center">
                    <div
                      onClick={() => handleClick("bold")}
                      className="w-[90%] cursor-pointer bg-white h-2/3 p-3 border-2 rounded-lg flex justify-center items-center"
                    >
                      <img
                        src={Bold}
                        alt="bold"
                        className={`w-full cursor-pointer ${
                          !templateState[templateIndex].children[childIndex]
                            .textArea[optionIndex].className.fontStyle.bold
                            ? "opacity-20"
                            : "opacity-100"
                        }`}
                      />
                    </div>
                  </div>
                ) : style === "italic" ? (
                  <div className="w-1/4 h-full flex justify-center items-center cursor-pointer">
                    <div
                      onClick={() => handleClick("italic")}
                      className="w-[90%] cursor-pointer h-2/3 bg-white  p-3 border-2 rounded-lg flex justify-center items-center"
                    >
                      <img
                        src={Italic}
                        alt="italic"
                        className={`w-full cursor-pointer ${
                          !templateState[templateIndex].children[childIndex]
                            .textArea[optionIndex].className.fontStyle.italic
                            ? "opacity-20"
                            : "opacity-100"
                        }`}
                      />
                    </div>
                  </div>
                ) : style === "underline" ? (
                  <div className="w-1/4 h-full flex justify-center items-center cursor-pointer">
                    <div
                      onClick={() => handleClick("underline")}
                      className="w-[90%] bg-white h-2/3 p-3 border-2 rounded-lg flex justify-center items-center"
                    >
                      <img
                        alt="underline"
                        src={Underline}
                        className={`w-full ${
                          !templateState[templateIndex].children[childIndex]
                            .textArea[optionIndex].className.fontStyle.underline
                            ? "opacity-20"
                            : "opacity-100"
                        }`}
                      />
                    </div>
                  </div>
                ) : null}
              </Fragment>
            ))}
          </div>
        );
      case "color":
        return (
          <input
            onChange={(e) => {
              setTemplateState((prev) => {
                const newState = JSON.parse(JSON.stringify(prev));
                newState[templateIndex].children[childIndex].children[
                  optionIndex
                ][optionSelection].value.stringValue = e.target.value;
                const index =
                  newState[templateIndex].children[childIndex].index;
               
                 if (option.name === "color") {
                  newState[templateIndex].children[childIndex].textArea[
                    index
                  ].className.fontColor = e.target.value;
                }
                return newState;
              });
            }}
            type="color"
            value={
              option.name === "color"
                ? templateState[templateIndex].children[childIndex].textArea[
                    templateState[templateIndex].children[childIndex].index
                  ].className.fontColor
                : templateState[templateIndex].children[childIndex].textArea[
                    templateState[templateIndex].children[childIndex].index
                  ].className.bgColor
            }
            className="h-[40px] w-[60px] border rounded"
          />
        );
      default:
        return (
          <span className="text-red-500 text-sm">
            Unknown type: {option.type}
          </span>
        );
    }
  };

  const handleChangeParagraphAlignment = (
    currentIndex: number,
    newIndex: number
  ) => {
    if (currentIndex === newIndex) return;

    setTemplateState((prev) => {
      const newState = structuredClone(prev);
      const children = newState[i]?.children;

      if (!children || !Array.isArray(children)) return prev;

      if (
        currentIndex < 0 ||
        currentIndex >= children.length ||
        newIndex < 0 ||
        newIndex >= children.length
      )
        return prev;

      const [item] = children.splice(currentIndex, 1);
      children.splice(newIndex, 0, item);

      return newState;
    });
  };

  function getSpanKey(
    sectionIndex: number,
    paragraphIndex: number,
    spanIndex: number
  ): string {
    return `${sectionIndex}-${paragraphIndex}-${spanIndex}`;
  }

  return (
    <div className="h-full w-full overflow-y-auto px-4 custom-scrollbar bg-white rounded-xl gap-4 shadow-bottom-right flex flex-col relative z-20">
      {templatePopUpProps.paragraphStructureShow && (
        <Fragment>
          <ParagraphStructure
            handleChangeParagraphAligment={handleChangeParagraphAlignment}
            stateOfParagraph={templateState[i].children}
            popUpsState={templatePopUpProps}
            setPopUpsState={setTemplatePopUpProps}
          />
        </Fragment>
      )}

      <div className="bg-sidebarChoose min-h-[80px] flex flex-col justify-center items-center gap-2 w-full">
        <div className="h-auto text-white text-lg font-semibold px-2">
          {templateState[i].name}
        </div>
      </div>

      <div className="overflow-y-scroll h-full w-full flex flex-col gap-10">
        {templateState[i].children.map((childGroup: any, childIndex: any) => (
          <Fragment key={childIndex}>
            {childGroup.textArea.length !== 0 && (
              <Fragment>
                <h1 className="w-full flex justify-center items-center text-sidebarChoose font-bold">
                  {childGroup.name}
                </h1>

                <div
                  className={`w-full ${
                    childGroup.textArea[0]?.type === "text"
                      ? "min-h-[300px]"
                      : childGroup.textArea[0]?.type === "table"
                      ? "min-h-[600px]"
                      : ""
                  } flex  rounded-lg text-sidebarChoose relative`}
                >
                  <div className="h-full w-full px-2">
                    <div className="flex flex-col gap-4 h-full">
                      {childGroup.children.map(
                        (option: any, optionIndex: any) => (
                          <Fragment key={optionIndex}>
                            {(optionIndex === childGroup.index ||
                              (childGroup.index === -1 &&
                                optionIndex === 0)) && (
                              <div className="flex gap-[4%] h-[300px] overflow-y-hidden ">
                                <div className="w-full  h-full flex flex-col">
                                  <div className="w-full bg-[#d5d8df4f]  h-auto flex flex-col items-center gap-4">
                                    <div className="flex max-w-[1400px]   w-auto  min-w-[500px] gap-10 h-[100px] items-center overflow-x-auto">
                                      {childGroup.index !== -1 && (
                                        <Fragment>
                                          {option.map(
                                            (
                                              grandChild: any,
                                              grandChildIndex: any
                                            ) => (
                                              <Fragment key={grandChildIndex}>
                                                <div className="min-w-[100px] h-[70px] border-2 shadow-bottom justify-center flex flex-col gap-2 px-2 items-center ">
                                                  {renderField(
                                                    grandChild,
                                                    grandChildIndex,
                                                    i,
                                                    childIndex,
                                                    optionIndex
                                                  )}
                                                </div>
                                              </Fragment>
                                            )
                                          )}
                                        </Fragment>
                                      )}
                                    </div>

                                    <div
                                      ref={scrollRef}
                                      // onClick={() => handleClickMainDiv(childIndex)}
                                      className={`${
                                        childGroup.textArea[0].type ===
                                          "text" ||
                                        childGroup.textArea[0].type ===
                                          "placeholder"
                                          ? "h-[100px] gap-2"
                                          : childGroup.textArea[0].type ===
                                            "table"
                                          ? "h-[400px]"
                                          : ""
                                      } flex ${
                                        childGroup.justify === "left"
                                          ? "justify-start "
                                          : childGroup.justify === "center"
                                          ? "justify-center"
                                          : childGroup.justify === "right"
                                          ? "justify-end"
                                          : "justify-normal"
                                      }  items-center w-full max-w-full  overflow-x-scroll text-sm p-2 resize-none bg-white border`}
                                    >
                                      <div className="w-auto items-center  max-w-full flex gap-2 ">
                                        {childGroup.textArea.map(
                                          (
                                            optionTextArea: any,
                                            optionTextAreaIndex: number
                                          ) => {
                                            const key = getSpanKey(
                                              childIndex,
                                              optionIndex,
                                              optionTextAreaIndex
                                            );
                                            return optionTextArea.type ===
                                              "text" ? (
                                              <EditableSpan
                                                optionTextAreaType={
                                                  optionTextArea.type
                                                }
                                                key={key}
                                                spanKey={key}
                                                childIndex={optionTextAreaIndex}
                                                isChoosed={
                                                  childGroup.index ===
                                                  optionTextAreaIndex
                                                }
                                                classNameValues={
                                                  optionTextArea.className
                                                }
                                                value={optionTextArea.value}
                                                templateState={templateState}
                                                onClick={(event) => {
                                                  event.stopPropagation();
                                                  handleClickMainDiv(
                                                    childIndex,
                                                    optionTextAreaIndex
                                                  );
                                                }}
                                                onChange={(newText) => {
                                                  const updatedState = [
                                                    ...templateState,
                                                  ];
                                                  console.log(
                                                    updatedState[i].children
                                                  );
                                                  if (newText.trim() === "") {
                                                    // to avoid -1 index and it's for when happened delete of span we make focus on previous span or if focused index will be 0 it will be stay 0 to avoid conflict
                                                    if (
                                                      updatedState[i].children[
                                                        childIndex
                                                      ].index !== 0
                                                    ) {
                                                      updatedState[i].children[
                                                        childIndex
                                                      ].index -= 1;
                                                    }
                                                    updatedState[i].children[
                                                      childIndex
                                                    ].children = updatedState[
                                                      i
                                                    ].children[
                                                      childIndex
                                                    ].children.filter(
                                                      (_: any, idx: number) =>
                                                        idx !== optionIndex
                                                    );
                                                    updatedState[i].children[
                                                      childIndex
                                                    ].textArea = updatedState[
                                                      i
                                                    ].children[
                                                      childIndex
                                                    ].textArea.filter(
                                                      (_: any, idx: number) =>
                                                        idx !==
                                                        optionTextAreaIndex
                                                    );
                                                    if (
                                                      updatedState[i].children[
                                                        childIndex
                                                      ].textArea.length === 0
                                                    ) {
                                                      updatedState[i].children =
                                                        updatedState[
                                                          i
                                                        ].children.filter(
                                                          (
                                                            _: any,
                                                            idx: number
                                                          ) =>
                                                            idx !== childIndex
                                                        );
                                                    }
                                                  } else {
                                                    updatedState[i].children[
                                                      childIndex
                                                    ].textArea[
                                                      optionTextAreaIndex
                                                    ].value = newText;
                                                  }
                                                  setTemplateState(
                                                    updatedState
                                                  );
                                                }}
                                              />
                                            ) : optionTextArea.type ===
                                              "placeholder" ? (
                                              <Placeholder
                                                optionTextAreaType={
                                                  optionTextArea.type
                                                }
                                                key={key}
                                                spanKey={key}
                                                childIndex={optionTextAreaIndex}
                                                isChoosed={
                                                  childGroup.index ===
                                                  optionTextAreaIndex
                                                }
                                                classNameValues={
                                                  optionTextArea.className
                                                }
                                                value={optionTextArea.value}
                                                templateState={templateState}
                                                onClick={(event) => {
                                                  event.stopPropagation();
                                                  handleClickMainDiv(
                                                    childIndex,
                                                    optionTextAreaIndex
                                                  );
                                                }}
                                              />
                                            ) : (
                                              <div></div>
                                            );
                                          }
                                        )}
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            )}
                          </Fragment>
                        )
                      )}
                    </div>
                  </div>

                  {childGroup.textArea[0]?.type !== "table" && (
                    <div
                      onClick={() => AddNewValueInParagraph(i, childIndex)}
                      className="absolute bottom-0 right-2 h-[80px] w-auto px-2 border-2 flex justify-center items-center rounded-lg cursor-pointer shadow-bottom bg-[#d5d8df4f]  text-white"
                    >
                      <div className="bg-sidebarChoose h-2/3 flex justify-center items-center px-4 rounded-lg">
                        აბზაცის გაგრძელების დამატება
                      </div>
                    </div>
                  )}
                </div>
              </Fragment>
            )}
          </Fragment>
          // onClick={() =>
          //   setTemplatePopUpProps((prev) => ({
          //     ...prev,
          //     paragraphStructureShow: true,
          //   }))
          // }
        ))}
      </div>

      <div className="min-h-[80px] px-2 w-full flex justify-between items-center bg-white">
        <div className="h-full flex items-center gap-4">
          <div className="h-full flex items-center relative">
            <div className="h-full flex items-center relative">
              <div
                // onClick={() => GenerateWordFile()}
                className="min-w-200px px-2 h-[100px] mr-2 p-4 font-semibold border-2 shadow-top bg-[#d5d8df4f] rounded-lg text-white"
              >
                <button
                  onClick={() =>
                    setTemplatePopUpProps((prev) => ({
                      ...prev,
                      paragraphStructureShow: true,
                    }))
                  }
                  className="h-full w-full bg-sidebarChoose rounded-lg px-2 "
                >
                  აბზაცთა განლაგების მართვა
                </button>
              </div>
              {/* {templatePopUpProps.paragraphAddNew && (
                <div className="absolute z-50 h-[200px] bg-sidebarChoose w-[400px] bottom-full">
                  <PopUpsAddNewParagraph
                    handleAddNewParagraphs={() => console.log("s")}
                    setPopUpsState={setTemplatePopUpProps}
                    handleClick={handleAddNewParagraphWithName}
                  />
                </div>
              )} */}
            </div>
          </div>
          <div className="h-full flex items-center relative">
            <div
              // onClick={() => GenerateWordFile()}
              className="min-w-200px px-2 h-[100px] mr-2 p-4 font-semibold border-2 shadow-top bg-[#d5d8df4f] rounded-lg text-white"
            >
              <button
                onClick={() => 
                  {
                    handleClickAddNewParagraph(i)
                  }}
                className="h-full w-full bg-sidebarChoose rounded-lg px-2"
              >
                ახალი აბზაცის დამატება
              </button>
            </div>
            {templatePopUpProps.paragraphAddNew && (
              <div className="absolute z-50 h-[200px] bg-sidebarChoose w-[400px] bottom-full">
                <PopUpsAddNewParagraph
                  handleAddNewParagraphs={() => console.log("s")}
                  setPopUpsState={setTemplatePopUpProps}
                  handleClick={handleAddNewParagraphWithName}
                />
              </div>
            )}
          </div>
        </div>

        <div className="w-auto px-2  flex gap-2 h-[100px] items-center justify-center ">
          <div
            onClick={() => GenerateWordFile()}
            className="w-200px h-full mr-2 p-4 font-semibold border-2 shadow-top bg-[#d5d8df4f] rounded-lg text-white"
          >
            <button className="h-full w-full bg-sidebarChoose rounded-lg ">
              შენახვა
            </button>
          </div>

          <div
            onClick={() => GenerateWordFile()}
            className="w-200px h-full mr-2 p-4 font-semibold border-2 shadow-top bg-[#d5d8df4f] rounded-lg text-white"
          >
            <button
              onClick={() => setTemplateOptionDropdown(-1)}
              className="h-full w-full bg-sidebarChoose rounded-lg"
            >
              გაუქმება
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TemplateChoosedOption