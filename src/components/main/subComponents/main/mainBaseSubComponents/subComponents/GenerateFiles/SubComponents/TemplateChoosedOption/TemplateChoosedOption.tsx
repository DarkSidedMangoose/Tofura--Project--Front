import React, {  Fragment, useCallback, useRef, useState,  } from 'react';
import PopUpsAddNewParagraph, { ParagraphStructure } from '../PopUps';
import { EditableSpan } from '../EditableSpan';
import Placeholder from '../Placeholder';
import QuestionaryQuestion from '../QuestionaryQuestion';
import { HandleAddNewPlaceholder, HandleAddNewQuestionary, HandleChangeType } from './TemplateChoosedOptionFunctions';
import { RenderField } from './TemplateChoosedOptionSubComponents';



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
  // States
  const [shodPlaceholderQuestion, setShodPlaceholderQuestion] = useState<any>({
    bool: false,
    first: -1,
    second: -1,
    third: -1,
    questionName: "",
  });
  const [questionaryQuestion, setQuestionaryQuestion] = useState<any>({
    bool: false,
    first: -1,
    second: -1,
    third: -1,
  });
  const [templatePopUpProps, setTemplatePopUpProps] =
    useState<TemplatePopUpProps>({
      paragraphStructureShow: false,
      paragraphAddNew: false,
    });
  //fix scrollbar issue when click on editablespan which was overflow-x and when we move to the right side of scrollbar and click on editableSpan without it happend back to the left scrollbar
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleClickAddNewParagraph = useCallback(
    (i: number) => {
      setTemplatePopUpProps((prev) => ({
        ...prev,
        paragraphAddNew: !prev.paragraphAddNew,
      }));
    },
    [templatePopUpProps]
  );

  const onClickPlaceholder = () => {
    setShodPlaceholderQuestion((prev: any) => {
      const a = { ...prev };
      a.bool = true;
      return a;
    });
  };

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
    <div className="h-full  w-full overflow-y-auto  custom-scrollbar bg-[#e3e3e3] rounded-xl gap-4 shadow-bottom-right flex flex-col relative z-20">
      {questionaryQuestion.bool && (
        <div className="w-full flex flex-col justify-center items-center h-full bg-loginBackground absolute z-[50]">
          <div className="w-[700px] h-[200px] bg-white flex flex-col  items-center">
            <div className="w-full h-[70px] bg-[#d5d8df34] flex text-sidebarChoose font-bold  justify-center items-center shadow-bottom">
              ქვე-კითხვარის კითხვა
            </div>
            <div className="h-[130px] w-full flex justify-center items-center">
              <input
                className="w-3/4 h-1/2 shadow-lg border-2"
                value={questionaryQuestion.questionName}
                onChange={(e) => {
                  setQuestionaryQuestion((prev: any) => ({
                    ...prev,
                    questionName: e.target.value,
                  }));
                }}
                placeholder="...მაგ: რა არის კომპანიის საიდენტიფიკაციო კოდი?"
              />
            </div>
          </div>
          <div className="w-[700px] h-[100px] flex  justify-end items-center gap-2">
            <button
              className="w-auto p-4 h-1/2 bg-sidebarChoose text-bold text-white"
              onClick={() => {
                setQuestionaryQuestion((prev: any) => [
                  { ...prev, bool: false },
                ]);
              }}
            >
              {" "}
              გაუქმება{" "}
            </button>
            <button
              className="w-auto p-4 h-1/2 bg-sidebarChoose text-bold text-white"
              onClick={() =>
                HandleAddNewQuestionary(
                  -1,
                  -1,
                  setTemplateState,
                  questionaryQuestion,
                  setQuestionaryQuestion
                )
              }
            >
              {" "}
              დამატება{" "}
            </button>
          </div>
        </div>
      )}
      {shodPlaceholderQuestion.bool && (
        <div className="w-full flex flex-col justify-center items-center h-full bg-loginBackground absolute z-[50]">
          <div className="w-[700px] h-[200px] bg-white flex flex-col  items-center">
            <div className="w-full h-[70px] bg-[#d5d8df34] flex text-sidebarChoose font-bold  justify-center items-center shadow-bottom">
              კითხვა
            </div>
            <div className="h-[130px] w-full flex justify-center items-center">
              <input
                className="w-3/4 h-1/2 shadow-lg border-2"
                value={shodPlaceholderQuestion.questionName}
                onChange={(e) => {
                  setShodPlaceholderQuestion((prev: any) => ({
                    ...prev,
                    questionName: e.target.value,
                  }));
                }}
                placeholder="...მაგ: რა არის კომპანიის საიდენტიფიკაციო კოდი?"
              />
            </div>
          </div>
          <div className="w-[700px] h-[100px] flex  justify-end items-center gap-2">
            <button
              className="w-auto p-4 h-1/2 bg-sidebarChoose text-bold text-white"
              onClick={() => {
                setShodPlaceholderQuestion((prev: any) => [
                  { ...prev, bool: false },
                ]);
              }}
            >
              {" "}
              გაუქმება{" "}
            </button>
            <button
              className="w-auto p-4 h-1/2 bg-sidebarChoose text-bold text-white"
              onClick={() =>
                HandleAddNewPlaceholder(
                  setTemplateState,
                  shodPlaceholderQuestion,
                  setShodPlaceholderQuestion
                )
              }
            >
              {" "}
              დამატება{" "}
            </button>
          </div>
        </div>
      )}
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

      <div className="bg-sidebarChoose rounded-lg shadow-bottom min-h-[80px] flex flex-col justify-center items-center gap-2 w-full">
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
                      : childGroup.textArea[0]?.type === "questionary" &&
                        "min-h-[600px]"
                  } flex  rounded-lg text-sidebarChoose relative`}
                >
                  <div className="h-full w-full px-2">
                    <div className="flex w-full flex-col gap-4 h-full">
                      {childGroup.children.map(
                        (option: any, optionIndex: any) => (
                          <Fragment key={optionIndex}>
                            {(optionIndex === childGroup.index ||
                              (childGroup.index === -1 &&
                                optionIndex === 0)) && (
                              <div className="flex gap-[4%] h-full overflow-y-hidden ">
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
                                                  {RenderField(
                                                    grandChild,
                                                    grandChildIndex,
                                                    i,
                                                    childIndex,
                                                    optionIndex,
                                                    templateState,
                                                    setTemplateState,
                                                    setShodPlaceholderQuestion,
                                                    setQuestionaryQuestion,
                                                    HandleChangeType,
                                                    handleChangeSelectOption
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
                                          : childGroup.textArea[0].type ===
                                            "questionary"
                                          ? " min-h-[400px]"
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
                                      <div
                                        className={`w-auto h-full  max-w-full  gap-2 ${
                                          childGroup.textArea[0].type ===
                                          "questionary"
                                            ? ""
                                            : "items-center flex"
                                        } `}
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
                                                onClickPlaceholder={() =>
                                                  onClickPlaceholder()
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
                                              optionTextArea.type ===
                                                "questionary" && (
                                                <QuestionaryQuestion
                                                  optionTextAreaType={
                                                    optionTextArea.type
                                                  }
                                                  key={key}
                                                  spanKey={key}
                                                  childIndex={
                                                    optionTextAreaIndex
                                                  }
                                                  isChoosed={
                                                    childGroup.index ===
                                                    optionTextAreaIndex
                                                  }
                                                  classNameValues={
                                                    optionTextArea.className
                                                  }
                                                  onClickPlaceholder={() =>
                                                    onClickPlaceholder()
                                                  }
                                                  value={optionTextArea.value}
                                                  templateState={templateState}
                                                  onClick={(event: any) => {
                                                    event.stopPropagation();
                                                    handleClickMainDiv(
                                                      childIndex,
                                                      optionTextAreaIndex
                                                    );
                                                  }}
                                                />
                                              )
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
                      onClick={() => {
                        if (childGroup.textArea[0].type !== "questionary") {
                          AddNewValueInParagraph(i, childIndex);
                        } else {
                          HandleAddNewQuestionary(
                            i,
                            childIndex,
                            setTemplateState,
                            questionaryQuestion,
                            setQuestionaryQuestion
                          );
                        }
                      }}
                      className="absolute bottom-0 right-2 h-[80px] w-auto px-2 border-2 flex justify-center items-center rounded-lg cursor-pointer shadow-bottom bg-[#d5d8df4f]  text-white"
                    >
                      <div className="bg-sidebarChoose h-2/3 flex justify-center items-center px-4 rounded-lg">
                        {childGroup.textArea[0].type === "questionary"
                          ? "ახალი კითხვის დამატება "
                          : "აბზაცის გაგრძელების დამატება"}
                      </div>
                    </div>
                  )}
                </div>
              </Fragment>
            )}
          </Fragment>
        ))}
      </div>

      <div className="min-h-[80px] shadow-top px-2 w-full flex justify-between items-center rounded-lg bg-white">
        <div className="h-full flex items-center gap-4">
          <div className="h-full flex items-center relative">
            <div className="h-full flex items-center relative">
              <button
                onClick={() =>
                  setTemplatePopUpProps((prev) => ({
                    ...prev,
                    paragraphStructureShow: true,
                  }))
                }
                className="h-[60px] w-full bg-sidebarChoose rounded-lg text-white px-6 font-bold shadow-bottom-right "
              >
                აბზაცთა განლაგების მართვა
              </button>
            </div>
          </div>
          <div className="h-full flex items-center relative">
            <button
              onClick={() => {
                handleClickAddNewParagraph(i);
              }}
              className="h-[60px] w-full bg-sidebarChoose rounded-lg text-white px-6 font-bold shadow-bottom-right"
            >
              ახალი აბზაცის დამატება
            </button>
            {templatePopUpProps.paragraphAddNew && (
              <div className="absolute z-50 h-[200px]  border-2 w-[400px] bottom-full">
                <PopUpsAddNewParagraph
                  handleAddNewParagraphs={() => console.log("s")}
                  setPopUpsState={setTemplatePopUpProps}
                  handleClick={handleAddNewParagraphWithName}
                />
              </div>
            )}
          </div>
        </div>

        <div className="w-auto px-2  flex gap-2 h-[60px] items-center justify-center ">
          <button className="h-full w-full bg-sidebarChoose rounded-lg text-white px-6 font-bold shadow-bottom-right">
            შენახვა
          </button>

          <button
            onClick={() => setTemplateOptionDropdown(-1)}
            className="h-[60px] w-full bg-sidebarChoose rounded-lg text-white px-6 font-bold shadow-bottom-right "
          >
            გაუქმება
          </button>
        </div>
      </div>
    </div>
  );
};

export default TemplateChoosedOption