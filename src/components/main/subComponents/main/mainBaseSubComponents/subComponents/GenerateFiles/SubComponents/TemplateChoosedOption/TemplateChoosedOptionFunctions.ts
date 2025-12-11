import { SetStateAction } from "react";
import { ChildrenImageValue, ChildrenPlaceholderValue, ChildrenQustionaryValue, ChildrenTableValue, ChildrenTextValue } from "./TemplateChoosedOptionValues";

export const HandleAddNewQuestionary = (
  o: number,
  childIndexs: number,
  setTemplateState: React.Dispatch<SetStateAction<any[]>>,
  questionaryQuestion: any,
  setQuestionaryQuestion: React.Dispatch<SetStateAction<any>>
) => {
  if (o !== -1) {
    setTemplateState((prev: any) => {
      const newState = JSON.parse(JSON.stringify(prev));
      return newState;
    });
  } else {
    const templateIndex = questionaryQuestion.first;
    const childIndex = questionaryQuestion.second;
    const optionIndex = questionaryQuestion.third;
    setTemplateState((prev) => {
      const newState = JSON.parse(JSON.stringify(prev));
      const childrenCopy = [
        ...newState[templateIndex].children[childIndex].children,
      ];
      const uuid = crypto.randomUUID();
      if (newState[templateIndex].children[childIndex].textArea[0].type !== "questionary") { 
        newState[templateIndex].children[childIndex].textArea = [{
          uuid: uuid,
          type: "questionary",
          questionName: questionaryQuestion.questionName,
          value: "",
          className: null
        }]
        newState[templateIndex].children[childIndex].index = 0;
        newState[templateIndex].children[childIndex].children = [ChildrenQustionaryValue]; // from TemplateChoosedOptionValues.ts
      } else {
        newState[templateIndex].children[childIndex].textArea[optionIndex] = {
          uuid: uuid,
          type: "questionary",
          questionName: questionaryQuestion.questionName,
          value: "",
           className: null,
        };
        childrenCopy[optionIndex] = ChildrenQustionaryValue; // from TemplateChoosedOptionValues.ts
        newState[templateIndex].children[childIndex].children = childrenCopy;
        
      }
      return newState;
    });
    setQuestionaryQuestion((prev: any) => [{ ...prev, bool: false }]);
  }
};





//2nd

export const HandleAddNewPlaceholder = (
  setTemplateState: React.Dispatch<SetStateAction<any[]>>,
  shodPlaceholderQuestion: any,
  setShodPlaceholderQuestion: React.Dispatch<SetStateAction<any>>
) => {
  setTemplateState((prev) => {
    const templateIndex = shodPlaceholderQuestion.first;
    const childIndex = shodPlaceholderQuestion.second;
    const optionIndex = shodPlaceholderQuestion.third;
    const newState = JSON.parse(JSON.stringify(prev));
    const childrenCopy = [
      ...newState[templateIndex].children[childIndex].children,
    ];
    const uuid = crypto.randomUUID();
    newState[templateIndex].children[childIndex].textArea[optionIndex] = {
      uuid: uuid,
      type: "placeholder",
      questionName: shodPlaceholderQuestion.questionName,
      value: "",
      className: {
        fontSize: 16,
        fontStyle: { bold: true, italic: false, underline: false },
      },
    };
    childrenCopy[optionIndex] = ChildrenPlaceholderValue; // from TemplateChoosedOptionValues.ts
    newState[templateIndex].children[childIndex].children = childrenCopy;
    return newState;
  });
  setShodPlaceholderQuestion((prev: any) => [{ ...prev, bool: false }]);
};


//3rd
export const HandleChangeType = (
    identifier: string,
    selected: string,
    templateIndex: number,
    childIndex: number,
    optionIndex: number,
    setTemplateState: React.Dispatch<SetStateAction<any[]>>,
    setShodPlaceholderQuestion: React.Dispatch<SetStateAction<any>>,
    setQuestionaryQuestion: React.Dispatch<SetStateAction<any>>

  ) => {
  
 
    setTemplateState((prev) => {
      const newState = JSON.parse(JSON.stringify(prev));
      const childrenCopy = [
        ...newState[templateIndex].children[childIndex].children,
      ];
      switch (selected) {
        case "text":
          newState[templateIndex].children[childIndex].textArea[optionIndex] = {
              type: "text",
              value: "შეიყვანეთ ტექსტი...",
              className: {
                fontSize: 16,
                fontStyle: { bold: true, italic: false, underline: false },
              },
          };

            childrenCopy[optionIndex] = ChildrenTextValue; // from TemplateChoosedOptionValues.ts
          break;
        case "table":
          newState[templateIndex].children[childIndex].textArea = [
            { type: "table" },
          ];
          childrenCopy[optionIndex] = ChildrenTableValue; // from TemplateChoosedOptionValues.ts
          break;
        case "image":
          childrenCopy[optionIndex] = ChildrenImageValue; // from TemplateChoosedOptionValues.ts
          break;
          case "placeholder":
            setShodPlaceholderQuestion({bool: true, first:templateIndex, second:childIndex,third:optionIndex})
            break;
          case "questionary": 
            setQuestionaryQuestion({bool: true, first: templateIndex, second:childIndex, third:optionIndex})
      }

      newState[templateIndex].children[childIndex].children = childrenCopy;
      return newState;
    });
  };



  //4th
 