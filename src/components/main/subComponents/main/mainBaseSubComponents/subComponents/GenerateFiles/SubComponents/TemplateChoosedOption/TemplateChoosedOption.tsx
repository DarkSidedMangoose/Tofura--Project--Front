import React, { Fragment, useCallback, useRef, useState } from 'react';
import PopUpsAddNewParagraph, { ParagraphStructure } from '../PopUps';
import { EditableSpan } from '../EditableSpan';
import Placeholder from '../Placeholder';
import QuestionaryQuestion from '../QuestionaryQuestion';
import { HandleAddNewPlaceholder, HandleAddNewQuestionary, HandleChangeType } from './TemplateChoosedOptionFunctions';
import { RenderField } from './TemplateChoosedOptionSubComponents';
import QuestionaryComponent from './TemplateChoosedOptionSubComponents/QuestionaryComponent';
import PlaceholderComponent from './TemplateChoosedOptionSubComponents/PlaceholderComponent';

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
  const onClickQuestionary = () => {
    setQuestionaryQuestion((prev: any) => {
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
    <div className="h-full w-full overflow-y-auto custom-scrollbar bg-[#e3e3e3] rounded-xl shadow-bottom-right flex flex-col relative z-20">
      {questionaryQuestion.bool && (
        <QuestionaryComponent
          questionaryQuestion={questionaryQuestion}
          setQuestionaryQuestion={setQuestionaryQuestion}
          HandleAddNewQuestionary={HandleAddNewQuestionary}
          setTemplateState={setTemplateState}
        />
      )}
      {shodPlaceholderQuestion.bool && (
        <PlaceholderComponent
          HandleAddNewPlaceholder={HandleAddNewPlaceholder}
          shodPlaceholderQuestion={shodPlaceholderQuestion}
          setShodPlaceholderQuestion={setShodPlaceholderQuestion}
          setTemplateState={setTemplateState}
        />
      )}
      {templatePopUpProps.paragraphStructureShow && (
        <ParagraphStructure
          handleChangeParagraphAligment={handleChangeParagraphAlignment}
          stateOfParagraph={templateState[i].children}
          popUpsState={templatePopUpProps}
          setPopUpsState={setTemplatePopUpProps}
        />
      )}

      <div className="bg-sidebarChoose rounded-lg shadow-bottom min-h-[80px] flex flex-col justify-center items-center gap-2 w-full">
        <div className="h-auto text-white text-lg font-semibold px-2">
          {templateState[i].name}
        </div>
      </div>

      <div className="overflow-y-scroll h-full items-center w-full flex flex-col gap-10">
        {templateState[i].children.map((childGroup: any, childIndex: any) => (
          
          <Fragment key={childIndex}>
            {childGroup.textArea.length !== 0 && (
              <Fragment>
                <h1 className="w-full flex justify-center items-center text-sidebarChoose font-bold">
                  {childGroup.name}
                </h1>

               <div
  className={`${
    childGroup.textArea[0]?.type === "text" || childGroup.textArea[0]?.type === "placeholder"
      ? "min-h-[300px] w-full"
      : childGroup.textArea[0]?.type === "table"
      ? "min-h-[600px] w-full"
      : childGroup.textArea[0]?.type === "questionary" &&
        "h-auto w-[400px] flex flex-col   "
  } rounded-lg text-sidebarChoose relative`}
>
                  <div
  className={`
    flex w-full flex-col gap-4
    ${childGroup.textArea[0]?.type === "questionary" ? "justify-center items-center h-auto" : "h-full"}
  `}
>
  {childGroup.children.map((option: any, optionIndex: any) => (
    <Fragment key={optionIndex}>
      {(optionIndex === childGroup.index ||
        (childGroup.index === -1 && optionIndex === 0)) && (
        <div
          className={`
            flex gap-[4%]
            ${childGroup.textArea[0]?.type === "questionary" ? "h-auto items-start" : "h-full"}
          `}
        >
          <div
            className={`
              w-full flex flex-col
              ${childGroup.textArea[0]?.type === "questionary" ? "h-auto gap-2" : "h-full"}
            `}
          >
            <div className="w-full bg-[#d5d8df4f] h-auto flex flex-col items-center gap-4">
              
              {/* TOP FIELDS */}
              <div
                className={`
                  flex max-w-[1400px] w-auto gap-10 h-[100px] items-center overflow-x-auto
                  ${childGroup.textArea[0]?.type !== "questionary" ? "min-w-[500px]" : ""}
                `}
              >
                {childGroup.index !== -1 &&
                  option.map((grandChild: any, grandChildIndex: any) => (
                    <div
                      key={grandChildIndex}
                      className="min-w-[100px] h-[70px] border-2 shadow-bottom flex flex-col justify-center items-center gap-2 px-2"
                    >
                      {RenderField(
                        childGroup.textArea[0]?.type === "questionary" ? "question" : "normal",
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
                  ))}
              </div>

              {/* TEXTAREA AREA */}
              <div
                ref={scrollRef}
                className={`
                  flex items-center w-full max-w-full text-sm p-2 bg-white border resize-none
                  ${childGroup.justify === "left"
                    ? "justify-start"
                    : childGroup.justify === "center"
                    ? "justify-center"
                    : childGroup.justify === "right"
                    ? "justify-end"
                    : "justify-normal"}
                  ${
                    childGroup.textArea[0]?.type === "questionary"
                      ? "h-auto w-auto overflow-visible"
                      : "overflow-x-scroll"
                  }
                  ${
                    childGroup.textArea[0].type === "text" ||
                    childGroup.textArea[0].type === "placeholder"
                      ? "h-[100px] gap-2"
                      : childGroup.textArea[0].type === "table"
                      ? "h-[400px]"
                      : childGroup.textArea[0].type === "questionary"
                      ? childGroup.textArea[0]?.type === "questionary"
                        ? "h-auto"
                        : "h-[100px]"
                      : ""
                  }
                `}
              >
                <div
                  className={`
                    w-auto h-full max-w-full gap-2
                    ${childGroup.textArea[0]?.type === "questionary" ? "flex flex-col" : "items-center flex"}
                  `}
                >
                  {childGroup.textArea.map(
                    (optionTextArea: any, optionTextAreaIndex: number) => {
                      const key = getSpanKey(
                        childIndex,
                        optionIndex,
                        optionTextAreaIndex
                      );

                      if (optionTextArea.type === "text")
                        return (
                          <EditableSpan
                            key={key}
                            optionTextAreaType="text"
                            spanKey={key}
                            childIndex={optionTextAreaIndex}
                            isChoosed={childGroup.index === optionTextAreaIndex}
                            classNameValues={optionTextArea.className}
                            value={optionTextArea.value}
                            templateState={templateState}
                            onClick={(e) => {
                              e.stopPropagation();
                              handleClickMainDiv(childIndex, optionTextAreaIndex);
                            }}
                            onChange={(newText) => {
                              const updatedState = [...templateState];

                              if (newText.trim() === "") {
                                if (updatedState[i].children[childIndex].index !== 0) {
                                  updatedState[i].children[childIndex].index -= 1;
                                }

                                updatedState[i].children[childIndex].children =
                                  updatedState[i].children[childIndex].children.filter(
                                    (_: any, idx: number) => idx !== optionIndex
                                  );

                                updatedState[i].children[childIndex].textArea =
                                  updatedState[i].children[childIndex].textArea.filter(
                                    (_: any, idx: number) =>
                                      idx !== optionTextAreaIndex
                                  );
                              } else {
                                updatedState[i].children[childIndex].textArea[
                                  optionTextAreaIndex
                                ].value = newText;
                              }

                              setTemplateState(updatedState);
                            }}
                          />
                        );

                      if (optionTextArea.type === "placeholder")
                        return (
                          <Placeholder
                            key={key}
                            optionTextAreaType="placeholder"
                            spanKey={key}
                            childIndex={optionTextAreaIndex}
                            isChoosed={childGroup.index === optionTextAreaIndex}
                            classNameValues={optionTextArea.className}
                            value={optionTextArea.value}
                            templateState={templateState}
                            onClickPlaceholder={onClickPlaceholder}
                            onClick={(e) => {
                              e.stopPropagation();
                              handleClickMainDiv(childIndex, optionTextAreaIndex);
                            }}
                          />
                        );

                      return (
                        optionTextArea.type === "questionary" && (
                          <QuestionaryQuestion
                            key={key}
                            optionTextAreaType="questionary"
                            spanKey={key}
                            childIndex={optionTextAreaIndex}
                            isChoosed={childGroup.index === optionTextAreaIndex}
                            classNameValues={optionTextArea.className}
                            onClickPlaceholder={onClickQuestionary}
                            value={optionTextArea.value}
                            templateState={templateState}
                            onClick={(e: any) => {
                              e.stopPropagation();
                              handleClickMainDiv(childIndex, optionTextAreaIndex);
                            }}
                          />
                        )
                      );
                    }
                  )}
                </div>
              </div>
            </div>

            {/* BUTTON */}
            <div className="w-full h-[60px] flex justify-end">
              {childGroup.textArea[0].type !== "table" && (
                <div
                  className={`
                    w-auto min-h-full border-2 flex justify-end items-center rounded-lg cursor-pointer text-white
                    ${
                      childGroup.textArea[0]?.type === "questionary"
                        ? ""
                        : "px-2 shadow-bottom bg-[#d5d8df4f]"
                    }
                  `}
                  onClick={() => {
                    console.log("clicked");
                    if (childGroup.textArea[0]?.type !== "questionary") {
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
                >
                  <div className="bg-sidebarChoose h-full flex justify-center items-center px-2 rounded-lg">
                    {childGroup.textArea[0]?.type === "questionary"
                      ? "ახალი კითხვის დამატება "
                      : "აბზაცის გაგრძელების დამატება"}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </Fragment>
  ))}
</div>

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
                className="h-[60px] w-full bg-sidebarChoose rounded-lg text-white px-6 font-bold shadow-bottom-right"
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
              <div className="absolute z-50 h-[200px] border-2 w-[400px] bottom-full">
                <PopUpsAddNewParagraph
                  handleAddNewParagraphs={() => console.log("s")}
                  setPopUpsState={setTemplatePopUpProps}
                  handleClick={handleAddNewParagraphWithName}
                />
              </div>
            )}
          </div>
        </div>

        <div className="w-auto px-2 flex gap-2 h-[60px] items-center justify-center">
          <button className="h-full w-full bg-sidebarChoose rounded-lg text-white px-6 font-bold shadow-bottom-right">
            შენახვა
          </button>

          <button
            onClick={() => setTemplateOptionDropdown(-1)}
            className="h-[60px] w-full bg-sidebarChoose rounded-lg text-white px-6 font-bold shadow-bottom-right"
          >
            გაუქმება
          </button>
        </div>
      </div>
    </div>
  );
};

export default TemplateChoosedOption;
