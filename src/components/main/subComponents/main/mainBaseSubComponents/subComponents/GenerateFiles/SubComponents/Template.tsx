import React, { Fragment } from 'react'
import ConfirmIcon from "../../../../../../../../assets/images/main/right.webp";
import DeclineIcon from "../../../../../../../../assets/images/main/cancel.webp";
import RemIcon from "../../../../../../../../assets/images/main/delete.webp";



type Props = {
  templateNameButtonActivator: boolean;
  setTemplateNameButtonActivator: (value: boolean) => void;
  state: any;
  setState: React.Dispatch<React.SetStateAction<any>>;
  addedSectionName: any;
  addNewSection: boolean[];
  setAddedSectionName: React.Dispatch<React.SetStateAction<any>>;
  handleAddNewSection: (index: number) => void;
  setAddNewSection: React.Dispatch<React.SetStateAction<boolean[]>>;
  setTemplateState: React.Dispatch<React.SetStateAction<any[]>>;
  templateState: any[];
  templateOptionDropdown: number;
  setTemplateOptionDropdown: React.Dispatch<React.SetStateAction<number>>;
  
};


const Template = (props: Props) => {
  return (
    <Fragment>
      <div className="w-full h-[15%] min-h-[50px] flex justify-center items-center shadow-bottom bg-sidebarChoose  ">
        <div className="w-auto  h-2/3 flex justify-center items-center relative bg-white ">
          {!props.templateNameButtonActivator && (
            <div
              onClick={(e) => {
                e.stopPropagation();
                props.setTemplateNameButtonActivator(true);
              }}
              className="w-full h-full z-20 absolute bg-transparent cursor-pointer"
            ></div>
          )}

          <input
            value={props.state.choosedTemplateName}
            onChange={(e) => {
              props.setState((prev: any) => {
                return { ...prev, choosedTemplateName: e.target.value };
              });
            }}
            onClick={(e) => {
              e.stopPropagation();
            }}
            className=" z-10 h-full bg-[#d5d8df4f] px-2 text-[#020b37] font-semibold "
          />
        </div>
      </div>
      <div className="w-full py-4 shadow-bottom-right  bg-[#ffffff] min-h-[500px] max-h-[500px]  flex flex-col gap-2 custom-scrollbar overflow-y-auto overflow-x-hidden items-end ">
        {props.addNewSection[0] && (
          <div className="absolute z-10 h-[70px] flex gap-8 justify-center  items-center bg-sidebarChoose font-bold text-white w-[300px] ">
            <input
              className="w-2/3 h-2/3 text-[10px] px-2 text-sidebarChoose"
              value={props.addedSectionName}
              onChange={(e) => props.setAddedSectionName(e.target.value)}
              type="text"
              placeholder="...შეიყვანეთ სექციის სახელი"
            />
            <div className="w-auto h-2/3 flex flex-col gap-2">
              <img
                className="w-auto h-[47%] cursor-pointer hover:opacity-80 hover:scale-125 transition-all duration-200 "
                alt="addNew"
                onClick={() => props.handleAddNewSection(0)}
                src={ConfirmIcon}
              />
              <img
                className="w-auto h-[47%] cursor-pointer hover:opacity-80 hover:scale-125 transition-all duration-200"
                alt="decline"
                onClick={() =>
                  props.setAddNewSection((prev) => {
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
            props.setTemplateState((prev) => {
              const newTemplates = [...prev];
              newTemplates.forEach((template, index) => {
                template.remove = null; // Reset remove state for other templates
              });
              return newTemplates;
            });
            props.setAddedSectionName("");
            props.setTemplateOptionDropdown(-1); // Close the dropdown if open
            props.setAddNewSection((prev) => {
              const newSections = [...prev];
              prev.forEach((e, index) => {
                if (index !== 0) {
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

        {props.templateState.map((templateRow, i) => (
          <div key={i} className="w-full flex flex-col items-end gap-2">
            {/* {(i === 0 ) && 
              
            <button className='h-[70px] flex justify-center  items-center bg-loginBackground font-bold text-sidebarChoose w-[300px]'>ახალი სექციის დამატება</button>
              } */}
            <div
              onClick={() => {
                props.setTemplateOptionDropdown(
                  props.templateOptionDropdown === i ? -1 : i
                );
              }}
              key={i}
              className={`w-full border-b-2 bg-[#d5d8df4f] h-[100px]   transition-all  cursor-pointer  duration-200 min-h-[100px] flex gap-2 items-center`}
            >
              <div className="w-full h-full  flex justify-between relative items-center  ">
                <div className="h-full flex items-center font-bold px-4">
                  {props.templateOptionDropdown !== i && (
                    <h1>
                      {i + 1}) {templateRow.name}
                    </h1>
                  )}
                </div>
                <div className="w-auto flex gap-4 h-full items-center ">
                  <img
                    alt="remove"
                    src={RemIcon}
                    className={`  hover:scale-105 hover:opacity-90 transition-all duration-200 mr-2`}
                    onClick={(e) => {
                      e.stopPropagation();
                      props.setAddNewSection((prev) => {
                        const AddNewSection = [...prev];
                        AddNewSection.forEach((e, index) => {
                          prev[index] = false; // Reset all other sections
                        });
                        return AddNewSection;
                      });
                      props.setTemplateState((prev) =>
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
                    className={` h-full   ${
                      templateRow.remove === null
                        ? "hidden "
                        : templateRow.remove === false
                        ? "SlideEffectRemoveSectionFalse "
                        : "SlideEffectRemoveSectionTrue "
                    }`}
                    onClick={(e) => {
                      e.stopPropagation();
                      props.setTemplateState((prev) => {
                        return prev.filter((_, idx) => idx !== i);
                      });
                    }}
                  >
                    <span
                      className={` ${
                        templateRow.remove === null
                          ? "hidden  "
                          : templateRow.remove === true
                          ? "flex "
                          : "hidden h-full"
                      }`}
                    >
                      წაშლა
                    </span>{" "}
                  </button>
                </div>
              </div>
            </div>
            <div className="h-[70px] w-[300px] relative">
              {props.addNewSection[i + 1] && (
                <div className="absolute z-10 h-[70px] flex gap-8 justify-center  items-center bg-sidebarChoose font-bold text-white w-[300px] ">
                  <input
                    className="w-2/3 h-2/3 text-[10px] px-2 text-sidebarChoose"
                    value={props.addedSectionName}
                    onChange={(e) => props.setAddedSectionName(e.target.value)}
                    type="text"
                    placeholder="...შეიყვანეთ სექციის სახელი"
                  />
                  <div className="w-auto h-2/3 flex flex-col gap-2">
                    <img
                      alt="confirm"
                      className="w-auto h-[47%] cursor-pointer hover:opacity-80 hover:scale-125 transition-all duration-200 "
                      onClick={() => props.handleAddNewSection(i + 1)}
                      src={ConfirmIcon}
                    />
                    <img
                      alt="decline"
                      className="w-auto h-[47%] cursor-pointer hover:opacity-80 hover:scale-125 transition-all duration-200"
                      onClick={() =>
                        props.setAddNewSection((prev) => {
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
                  props.setTemplateState((prev) => {
                    const newTemplates = [...prev];
                    newTemplates.forEach((template, index) => {
                      template.remove = null; // Reset remove state for other templates
                    });
                    return newTemplates;
                  });
                  props.setAddedSectionName("");
                  props.setTemplateOptionDropdown(-1); // Close the dropdown if open
                  props.setAddNewSection((prev) => {
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
                ახალი სექციის დამატებ
              </button>
            </div>
          </div>
        ))}
      </div>
    </Fragment>
  );
}

export default Template