import React, { Fragment, useEffect, useState } from "react";

import "../../../../../../../Scrollbar.css";
import "../../../Sliders.css";
import TemplateChoosedOption from "../TemplateChoosedOption/TemplateChoosedOption";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Template from "../Template";
import Questionary from "../Questionary";
import { TemplateItem } from "./GenerateAddReviewUseTemplateInterfaces"
import { NewBlock, NewTextArea, TemplateState, TemplateStateChildren } from "./GenerateAddReviewUseTemplateValues";
import { Close, HandleAddNewParagraph, InsertAtIndex, TemplateSectionsAddNewSectionBools, TemplateStateAddNewSectionByName } from "./GenerateAddReviewUseTemplateFunctionsts";

//types and interfaces
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

//env api endpoints
const apiUrl = process.env.REACT_APP_API_BASE_URL;

//********************************************************************** Main Component */
const GenerateAddReviewUseTemplate: React.FC<Props> = ({ setState, state }) => {
  //additional hooks
  const navigate = useNavigate();

  //states
  const [templateNameButtonActivator, setTemplateNameButtonActivator] =
    useState<boolean>(false);
  const [addNewSection, setAddNewSection] = useState<boolean[]>([false]);
  const [addedSectionName, setAddedSectionName] = useState<string>("");
  const [templateOptionDropdown, setTemplateOptionDropdown] =
    useState<number>(-1);
  const [templateState, setTemplateState] = useState<TemplateItem[]>([
    TemplateState,
  ]);

  //functions

  //Async functions for api requests and calls
  // 1st
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
  };

  // 2nd
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

  //handlers

  // 1st
  const handleAddNewSection = (index: number) => {
    TemplateSectionsAddNewSectionBools(setAddNewSection);
    const addNewByName = TemplateStateAddNewSectionByName(
      addedSectionName,
      TemplateStateChildren
    );
    InsertAtIndex(index, addNewByName, setTemplateState);
    setAddedSectionName(""); // Reset the section name input
    setTemplateOptionDropdown(-1); // Close the dropdown if open
  };

  // 2nd
  const handleAddNewParagraph = (templateIndex: number, name: string) => {
    HandleAddNewParagraph(templateIndex, name, setTemplateState);
  };

  // 3rd
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

      targetArea.splice(targetIndex + 1, 0, NewTextArea);
      const targetChildren =
        newState?.[templateIndex]?.children?.[childIndex]?.children;
      if (!Array.isArray(targetChildren)) return prev;

      targetChildren.push(NewBlock); //New Block from values file
      return newState;
    });
  };
  // 4th
  const HandleAddNewQuestionaryQuestion = (templateIndex:number,childIndex: number) => {
    const targetArea = templateState?.[templateIndex]?.children?.[childIndex]?.textArea
  }

  // useEffects
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
          console.log(templateState);
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
                  HandleAddNewQuestionaryQuestion= {HandleAddNewQuestionaryQuestion}
                  handleAddNewParagraph={handleAddNewParagraph}
                  setTemplateOptionDropdown={setTemplateOptionDropdown}
                />
              </div>
            )}
          </Fragment>
        ) : (
          state.addNewTemplateNavState === "შაბლონის კითხვარი" && (
            <Questionary
              state={templateState}
              setState={setTemplateState}
              close={() => Close(setState)}
              generate={() => addNewTemplateNd()}
            />
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
                addNewTemplate();
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
