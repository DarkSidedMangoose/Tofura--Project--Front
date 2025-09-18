import React, {  Fragment, useCallback,  } from 'react';
import { templateItemObjectProps } from './GenerateAddReviewUseTemplate';
import PopUpsAddNewParagraph, { ParagraphStructure } from './PopUps';
import Bold from '../../../../../../../assets/images/main/text.png';
import Italic from '../../../../../../../assets/images/main/italic-button.png';
import Underline from '../../../../../../../assets/images/main/underline.png';
import { EditableSpan } from './EditableSpan';

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
  const [templatePopUpProps, setTemplatePopUpProps] = React.useState<TemplatePopUpProps>({
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

          newState[templateIndex].children[childIndex].children[optionIndex][optionSelection].value.stringValue =
            e.target.value;
          if (name === "alignment") {
            newState[templateIndex].children[childIndex].justify = e.target.value;
          }
            return newState;
          }
        );
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
      const newState = [...prev];
      const childrenCopy = [...newState[templateIndex].children[childIndex].children];
      switch (selected) {
        case 'text':
          if (newState[templateIndex].children[childIndex].textArea[0].type === "text") {
            childrenCopy[optionIndex] = 
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
              
            ];
          } else {
            newState[templateIndex].children[childIndex].textArea = [{ type: "text", value: "sada", className: { fontSize: 16, fontStyle: { bold: true, italic: false, underline: false } } }]
            newState[templateIndex].children[childIndex].index = 0;
          }
          break;
        case 'table':
          console.log("table");
          newState[templateIndex].children[childIndex].textArea = [{type:"table"}]
          childrenCopy[optionIndex] = [
            { name: 'type', type: 'select', value: 'table', option: ['text', 'table', 'image'] },
            { name: 'rows', type: 'input', value: '' },
            { name: 'columns', type: 'input', value: 2 },
            { name: 'border', type: 'select', option: ['none', 'solid', 'dashed', 'dotted'], value: 'none' },
            { name: 'cell padding', type: 'input', value: 5 },
            { name: 'alignment', type: 'select', option: ['left', 'center', 'right'], value: 'left' },
            { name: 'width', type: 'input', value: '100%' },
            { name: 'background color', type: 'color', value: '#ffffff' },
          ];
          break;
        case 'image':
          childrenCopy[optionIndex] = [
            {
              name: "type",
              type: "select",
              value: { stringValue: "image" },
              option: ["text", "table", "image"],
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
      }

      newState[templateIndex].children[childIndex].children = childrenCopy;
      return newState;
    });
  };

  
  const renderField = (
    option: templateItemObjectProps,
    optionSelection: number,
    templateIndex: number,
    childIndex: number,
    optionIndex: number,
  ) => {
    switch (option.type) {
      case 'select':
        return (
          <select
            value={option.name === "alignment" ? templateState[templateIndex].children[childIndex].justify : typeof option.value?.stringValue === 'string' || typeof option.value?.numberValue === 'number'  ? option.value.objectValue : ''}
            onChange={(e) =>
            {
              option.name === 'type'
              ? handleChangeType(e.target.value, templateIndex, childIndex, optionIndex)
              :  handleChangeSelectOption(templateIndex, childIndex, optionIndex, optionSelection, e, option.name)
            }
            }
            className="h-[50px] text-sm px-4 bg-white border rounded"
          >
            <option disabled>აირჩიე</option>
            {option.option?.map((o, idx) => (
              <option key={idx}>{o}</option>
            ))}
          </select>
        );
      case 'input':
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
            className="h-[50px] w-1/2 text-sm px-4 bg-white border rounded"
          />
        );
      case 'multiselect':
        const handleClick = (arg: string) => {
          setTemplateState((prev) => {
            const newState = JSON.parse(JSON.stringify(prev));
            const currentOption = newState[templateIndex].children[childIndex].textArea[optionIndex].className.fontStyle;
            if (currentOption.bold !== undefined && arg === 'bold') {
              
              currentOption.bold = !currentOption.bold;
            } else if (currentOption.bold !== undefined && arg === 'italic') {
              currentOption.italic = !currentOption.italic;
            } else if (currentOption.bold !== undefined && arg === 'underline') {
              currentOption.underline = !currentOption.underline;
            }
           
            return newState;
          });
        };
        return (
          <div className="flex w-full h-auto gap-4">
            {option.option?.map((style, idx) => (
              <Fragment key={idx}>
                {style === 'bold' ? (
                  <div className="w-1/3 flex justify-center items-center">
                    <img
                      src={Bold}
                      onClick={() => handleClick('bold')}
                      className={`w-[20px] cursor-pointer ${!templateState[templateIndex].children[childIndex].textArea[optionIndex].className.fontStyle.bold ? 'opacity-20' : 'opacity-100'}`}
                    />
                  </div>
                ) : style === 'italic' ? (
                  <div className="w-[20px] cursor-pointer">
                    <img
                      src={Italic}
                      onClick={() => handleClick('italic')}
                      className={`w-[20px] cursor-pointer ${!templateState[templateIndex].children[childIndex].textArea[optionIndex].className.fontStyle.italic ? 'opacity-20' : 'opacity-100'}`}
                    />
                  </div>
                ) : style === 'underline' ? (
                  <div className="w-[20px] cursor-pointer">
                    <img
                      src={Underline}
                      onClick={() => handleClick('underline')}
                      className={`w-[20px] ${!templateState[templateIndex].children[childIndex].textArea[optionIndex].className.fontStyle.underline ? 'opacity-20' : 'opacity-100'}`}
                    />
                  </div>
                ) : null}
              </Fragment>
            ))}
          </div>
        );
      case 'color':
        return <input onChange={(e) => {
          setTemplateState((prev) => {
            const newState = JSON.parse(JSON.stringify(prev));
            newState[templateIndex].children[childIndex].children[optionIndex][optionSelection].value.stringValue = e.target.value;
            const index = newState[templateIndex].children[childIndex].index;
            if (option.name === "background color") {
              newState[templateIndex].children[childIndex].textArea[index].className.bgColor = e.target.value;
            } else if (option.name === "color") {
              newState[templateIndex].children[childIndex].textArea[index].className.fontColor = e.target.value;
            }
            return newState;
          });
        }} type="color" value={option.name === "color" ? templateState[templateIndex].children[childIndex].textArea[templateState[templateIndex].children[childIndex].index].className.fontColor : templateState[templateIndex].children[childIndex].textArea[templateState[templateIndex].children[childIndex].index].className.bgColor} className="h-[40px] w-[60px] border rounded" />;
      default:
        return <span className="text-red-500 text-sm">Unknown type: {option.type}</span>;
    }
  };

  const handleChangeParagraphAlignment = (currentIndex: number, newIndex: number) => {
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

  function getSpanKey(sectionIndex: number, paragraphIndex: number, spanIndex: number): string {
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
          <h1 className="w-full flex justify-center items-center text-sidebarChoose font-bold">
            {childGroup.name}
          </h1>

          <div
            className={`w-full ${
              childGroup.textArea[0].type === "text"
                ? "min-h-[300px]"
                : childGroup.textArea[0].type === "table"
                ? "min-h-[600px]"
                : ""
            } flex bg-loginBackground rounded-lg text-sidebarChoose relative`}
          >
            <div className="h-full w-full px-2">
              <div className="flex flex-col gap-4 h-full">
                {childGroup.children.map((option: any, optionIndex: any) => (
                  <Fragment key={optionIndex}>
                    {(optionIndex === childGroup.index ||
                      (childGroup.index === -1 && optionIndex === 0)) && (
                      <div className="flex gap-[4%] h-full overflow-y-hidden">
                        <div className="w-full h-full flex flex-col">
                          <div className="w-full h-auto flex flex-col items-center gap-4">
                            <div className="flex max-w-[1400px] w-auto min-w-[500px] gap-10 h-[100px] items-center overflow-x-auto">
                              {childGroup.index !== -1 && (
                                <Fragment>
                                  {option.map(
                                    (grandChild: any, grandChildIndex: any) => (
                                      <Fragment key={grandChildIndex}>
                                        <div
                                          className="min-w-[100px] flex flex-col gap-2 justify-start items-center"
                                        >
                                          {renderField(
                                            grandChild,
                                            grandChildIndex,
                                            i,
                                            childIndex,
                                            optionIndex,
                                          )}
                                        </div>
                                      </Fragment>
                                    )
                                  )}
                                </Fragment>
                              )}
                            </div>

                            <div
                              // onClick={() => handleClickMainDiv(childIndex)}
                              className={`${
                                childGroup.textArea[0].type === "text"
                                  ? "h-[100px] gap-2"
                                  : childGroup.textArea[0].type === "table"
                                  ? "h-[400px]"
                                  : ""
                              } flex ${childGroup.justify === "left" ? "justify-start": childGroup.justify === "center" ? "justify-center": childGroup.justify === "right" ? "justify-end": "justify-normal" }  items-center max-w-full overflow-x-scroll min-w-full text-sm p-2 resize-none bg-white border`}
                            >
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
                                  return optionTextArea.type === "text" ? (
                                      <EditableSpan
                                        key={key}
                                        spanKey={key}
                                        childIndex={optionTextAreaIndex}
                                        isChoosed={
                                          childGroup.index === optionTextAreaIndex
                                        }
                                        classNameValues={optionTextArea.className}
                                        value={optionTextArea.value}
                                        templateState={templateState}
                                        onClick={(event: React.MouseEvent) => {
                                          event.stopPropagation();
                                          setTemplateState((prev) => {
                                            const newState = JSON.parse(
                                              JSON.stringify(prev)
                                            );
                                            newState[i].children[childIndex].index =
                                              optionTextAreaIndex;
                                            return newState;
                                          });
                                        }}
                                        onChange={(newText) => {
                                          const updatedState = [...templateState];
                                          if (newText.trim() === "") {
                                            if (
                                              updatedState[i].children[childIndex]
                                                .index !== 0
                                            ) {
                                              updatedState[i].children[
                                                childIndex
                                              ].index -= 1;
                                            }
                                            updatedState[i].children[
                                              childIndex
                                            ].children = updatedState[i].children[
                                              childIndex
                                            ].children.filter(
                                              (_: any, idx: number) =>
                                                idx !== optionIndex
                                            );
                                            updatedState[i].children[
                                              childIndex
                                            ].textArea = updatedState[i].children[
                                              childIndex
                                            ].textArea.filter(
                                              (_: any, idx: number) =>
                                                idx !== optionTextAreaIndex
                                            );
                                          } else {
                                            updatedState[i].children[
                                              childIndex
                                            ].textArea[optionTextAreaIndex].value =
                                              newText;
                                          }
                                          setTemplateState(updatedState);
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
                    )}
                  </Fragment>
                ))}
              </div>
            </div>

            {childGroup.textArea[0].type === "text" && (
              <div
                onClick={() => AddNewValueInParagraph(i, childIndex)}
                className="absolute bottom-[10%] right-2 h-[50px] w-auto px-2 border-2 flex justify-center items-center rounded-lg cursor-pointer bg-sidebarChoose text-white"
              >
                აბზაცის გაგრძელების დამატება
              </div>
            )}
          </div>
        </Fragment>
      ))}
    </div>

    <div className="min-h-[80px] px-2 w-full flex justify-between items-center bg-white">
      <div className="h-full flex items-center gap-4">
        <div className="h-full flex items-center relative">
          <button
            className="h-2/3 bg-sidebarChoose text-white px-4 rounded-lg cursor-pointer"
            onClick={() =>
              setTemplatePopUpProps((prev) => ({
                ...prev,
                paragraphStructureShow: true,
              }))
            }
          >
            აბზაცთა განლაგება
          </button>
        </div>
        <div className="h-full flex items-center relative">
          <button
            onClick={() => handleClickAddNewParagraph(i)}
            className="h-2/3 bg-sidebarChoose text-white px-4 rounded-lg cursor-pointer"
          >
            ახალი აბზაცის დამატება
          </button>
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

      <div className="w-auto px-2 flex gap-2 h-full items-center">
        <button className="w-200px h-2/3 mr-2 p-4 font-semibold bg-sidebarChoose rounded-lg text-white">
          შენახვა
        </button>
        <button
          className="w-200px h-2/3 mr-2 p-4 font-semibold bg-sidebarChoose rounded-lg text-white"
          onClick={() => setTemplateOptionDropdown(-1)}
        >
          გაუქმება
        </button>
      </div>
    </div>
  </div>
);

};

export default TemplateChoosedOption;