import React, { Fragment, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import "../../../../../Scrollbar.css"
import { setBaseSubcomponentsShown } from '../../../../../../../redux/reducers/BaseSubcomponentsShown'
import Add from '../../../../../../../assets/images/main/plus.webp'
import GenerateAddReviewUseTemplate from './SubComponents/GenerateAddRewievUseTemplate/GenerateAddReviewUseTemplate'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


//types and interfaces

type Props = {}

interface stateProps {
  navState: string;
  templates: string[];
  choosedTemplate: string;
  addReviewNewTemplate: boolean; // it defines whether to show the add/review template component
  addNewTemplateNavState: string;
  templateIds: string[];
  choosedTemplateName: string;
  choosed: boolean;
}

//env api endpoint
const Api = process.env.REACT_APP_API_BASE_URL



//********************************************************************** Main Component */
const Generate = (props: Props) => {
  //states
  const [state, setState] = useState<stateProps>({
    navState: "Word-შაბლონები",
    templates: [],
    choosedTemplate: "",
    templateIds: [],
    addReviewNewTemplate: false,
    addNewTemplateNavState: "შაბლონი",
    choosedTemplateName: "",
    choosed: false,
  });

  //additional hooks
  const navigate = useNavigate();
  const dispatch = useDispatch();
  

  //effects
  useEffect(() => {
    if (state.addReviewNewTemplate === false) {
      const fetchTemplates = async () => {
        try {
          const response = await axios.get(
            `${Api}/generateFiles/getTemplatesName`,
            {
              withCredentials: true,
            }
          );
          console.log(response)
          setState((prev) => ({
            ...prev,
            templates: [response.data.templateList].flat(),
            templateIds: [response.data.templateIds].flat(),
            choosed: false,
            choosedTemplate: "",
            choosedTemplateName: "",
          }));
        } catch (error) {
          if (axios.isAxiosError(error) && error.response?.status === 401) {
            navigate("/");
          }
        }
      };

      fetchTemplates();
    }
  }, [state.addReviewNewTemplate]); // it ensure that templates by their name are fetched when closed the add/review template component and when loaded the first time

  

  return (
    <div className="fixed left-0 top-0 z-40 w-full h-full flex justify-center items-center bg-loginBackground">
      <div className="w-full h-full min-w-[800px] min-h-[700px]  relative shadow-bottom-right flex-col">
        
        {/*defines when on new template or review Template button has clicked to run component attach to it */}
        {state.addReviewNewTemplate && (
          <GenerateAddReviewUseTemplate setState={setState} state={state} />
        )}


        <p className="w-full h-10% bg-sidebarChoose text-white flex justify-center items-center text-xl shadow-bottom-right">
          {state.navState}
        </p>


        <div className="flex h-90% ">
          <div className="h-full w-[85%] bg-white overflow-y-auto custom-scrollbar  ">
            {/* if word templates shown it will mapping all my templates and make add new template button in it */}
            {state.navState === "Word-შაბლონები" && (
              <Fragment>
                <div className="gap-2 flex flex-col">

                  {state.templates.map((e, i) => (
                    <div
                      onClick={() => {
                        setState((prev) => ({
                          ...prev,
                          choosed: true,
                          choosedTemplate: state.templateIds[i],
                          choosedTemplateName: state.templates[i],
                          addReviewNewTemplate: true,
                        }));
                      }}
                      key={e}
                      className={`h-[100px] ${
                        state.choosedTemplate === e
                          ? "bg-sidebarChoose text-white opacity-90"
                          : "bg-[#d5d8df87] text-sidebarChoose hover:opacity-60"
                      }  flex items-center cursor-pointer font-bold border-b-2  transition-all duration-15`}
                    >
                      <p className="px-2 0">
                        {i + 1}){` ${e}`}
                      </p>
                    </div>
                  ))}
                </div>
                <div className="h-[100px] flex items-center justify-start ">
                  <img
                    src={Add}
                    alt="add"
                    onClick={() =>
                      setState((prev) => ({
                        ...prev,
                        addReviewNewTemplate: true,
                      }))
                    }
                    className="h-1/2 bg-sidebarChoose rounded-sm cursor-pointer"
                  />
                </div>
              </Fragment>
            )}
          </div>


          <div className="w-[20%] h-full z-0  bg-white  relative  shadow-left ">

            {/* in there we choosed which templates we need to open */}

            <ul className="w-full h-auto flex flex-col">
              {["Word-შაბლონები", "Excell-შაბლონები"].map((item, idx) => (
                <li
                  onClick={() =>
                    setState((prev) => ({ ...prev, navState: item }))
                  }
                  key={idx}
                  className={` w-full h-[100px] flex justify-center items-center border-b-[1px] border-2  cursor-pointer ${
                    item === state.navState
                      ? "bg-sidebarChoose  text-white opacity-90"
                      : "hover:opacity-50 bg-[#d5d8df4f]"
                  }`}
                >
                  {item}
                </li>
              ))}
            </ul>

              {/* save and cancel buttons */}
            <div className="absolute bottom-4 right-2 w-full flex justify-end gap-2">
              <button
                className=" opacity-20     text-lg bg-sidebarChoose w-auto-h-auto p-4  font-semibold  text-white rounded-lg shadow-bottom-right "
                onClick={() => dispatch(setBaseSubcomponentsShown(""))}
              >
                {" "}
                შენახვა{" "}
              </button>
              <button
                className="     text-lg bg-sidebarChoose w-auto-h-auto p-4   font-semibold  text-white rounded-lg shadow-bottom-right opacity-90"
                onClick={() => dispatch(setBaseSubcomponentsShown(""))}
              >
                {" "}
                გაუქმება{" "}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Generate