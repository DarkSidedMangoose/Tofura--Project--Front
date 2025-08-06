import React, { Fragment, useCallback, useEffect } from 'react'
import { templateItemObjectProps } from './GenerateAddReviewUseTemplate';
import PopUpsAddNewParagraph, { ParagraphStructure } from './PopUps';
import Bold from '../../../../../../../assets/images/main/text.png';
import Italic from '../../../../../../../assets/images/main/italic-button.png';
import Underline from '../../../../../../../assets/images/main/underline.png';

interface Props {
    templateState: any;
    i: number;
    paragraphInnerState: number[];
    setParagraphInnerState: React.Dispatch<React.SetStateAction<number[]>>;
    AddNewValueInParagraph: (i: number, childIndex: number) => void;
    setTemplateState: React.Dispatch<React.SetStateAction<any[]>>;
    handleAddNewParagraph: (i: number, text: string) => void;
    setTemplateOptionDropdown: React.Dispatch<React.SetStateAction<number>>

}

export type TemplatePopUpProps = {
  paragraphStructureShow: boolean;
  paragraphAddNew: boolean;
}

const TemplateChoosedOption: React.FC<Props> = ({ templateState, i, paragraphInnerState, setParagraphInnerState, AddNewValueInParagraph,setTemplateState,handleAddNewParagraph, setTemplateOptionDropdown }) => {
  const [templatePopUpProps, setTemplatePopUpProps] = React.useState<TemplatePopUpProps>({
    paragraphStructureShow: false,
    paragraphAddNew: false,
  });
  const handleClickAddNewParagraph = useCallback((i: number) => {
    setTemplatePopUpProps((prev) => ({ ...prev, paragraphAddNew: !prev.paragraphAddNew }));

    
  }, [templatePopUpProps])
  const handleAddNewParagraphWithName = useCallback((text: string) => {
    handleAddNewParagraph(i, text)
    setTemplatePopUpProps((prev) => ({...prev, paragraphAddNew: false}))
  },[templatePopUpProps,i])
  const handleChangeType = (selected: string, templateIndex: number, childIndex: number, optionIndex: number) => {
      
    setTemplateState((prev) => {
      const newState = [...prev];
      const childrenCopy = [...newState[templateIndex].children[childIndex].children];
      switch (selected) {
        case "text":
          childrenCopy[optionIndex] = [
            { name: "type", type: "select", option: ["text", "table", "image"], value: "text" },
            { name: "content", type: "textarea", value:"" },
            { name: "element tag", type: "select", option: ["h1", "h2", "p", "span"], value: "h1" },
            { name: "font family", type: "select", option: ["Arial", "Roboto", "Times New Roman"], value:"Arial" },
            { name: "font size", type: "input", value: "" },
            { name: "text style", type: "multiselect", option: ["bold", "italic", "underline"], value: {bold:false,italic:false,underline:false} },
            { name: "alignment", type: "select", option: ["left", "center", "right", "justify"], value: "left" },
            { name: "color", type: "color", value: "#000000" },
            { name: "background color", type: "color", value: "#ffffff" }
            ];
          break;
        case "table":
          childrenCopy[optionIndex] = [
            { name: "type", type: "select", value: "table", option: ["text", "table", "image"],  },
            { name: "rows", type: "input", value: "" },
            { name: "columns", type: "input", value: 2 },
            { name: "border", type: "select", option: ["none", "solid", "dashed", "dotted"], value: "none" },
            { name: "cell padding", type: "input", value: 5 },
            { name: "alignment", type: "select", option: ["left", "center", "right"], value: "left" },
            { name: "width", type: "input", value: "100%" },
            { name: "background color", type: "color", value: "#ffffff" }
          ];
          break;
        case "image":
          childrenCopy[optionIndex] = [
            { name: "type", type: "select", value: "image", option: ["text", "table", "image"] },
            { name: "source", type: "input", placeholder: "Image URL or path", value: "" },
            { name: "alt text", type: "input", value: "" },
            { name: "width", type: "input", value: "100%" },
            { name: "height", type: "input", value: "auto" },
            { name: "alignment", type: "select", option: ["left", "center", "right"], value: "left" },
            { name: "border radius", type: "input", value: "0" }
          ];
          break;
      }
      
      newState[templateIndex].children[childIndex].children = childrenCopy;
      return newState;
    });
  };
  
    const renderField = (
      option: templateItemObjectProps,
      optionSelection : number,
    templateIndex: number,
    childIndex: number,
    optionIndex: number
    ) => {
      
    switch (option.type) {
      case "select":
        return (
          <select
            value={typeof option.value === "string" || typeof option.value === "number" ? option.value : ""}
            onChange={(e) =>
              option.name === "type" &&
              handleChangeType(e.target.value, templateIndex, childIndex, optionIndex)
              
            }
            className='h-[50px]   text-sm px-4 bg-white border rounded'
          >
            <option disabled>აირჩიე</option>
            {option.option?.map((o, idx) => (
              <option key={idx}>{o}</option>
            ))}
          </select>
        );
      case "input":
        return <input onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          setTemplateState((prev) => {
    const newState = JSON.parse(JSON.stringify(prev));

            newState[templateIndex].children[childIndex].children[optionIndex][optionSelection].value = event.target.value;
            return newState;
            
          });
        }} type="number" placeholder={option.placeholder} value={typeof option.value === "string" || typeof option.value === "number" ? option.value : ""} className='h-[50px] w-full text-sm px-4 bg-white border rounded' />;
      case "textarea":
        const state = templateState[templateIndex].children[childIndex].children[optionIndex]
        
        const handleChangeTextArea = (e: any) => {
          setTemplateState((prev) => {
            const newState = JSON.parse(JSON.stringify(prev));
            newState[templateIndex].children[childIndex].children[optionIndex][optionSelection].value = e.target.value;
            return newState;
          });
        }
        console.log(state[4].value)

        return <textarea
         style={{ fontSize: `${state[4].value}px`, fontWeight: state[5].value.bold ? 'bold' : 'normal', fontStyle: state[5].value.italic ? 'italic' : 'normal', textDecoration: state[5].value.underline ? 'underline' : 'none' }}
          placeholder={option.placeholder} onChange={(e) => handleChangeTextArea(e)} value={typeof option.value === "string" || typeof option.value === "number" ? option.value : ""} className={`h-[250px] min-w-full text-sm p-2 resize-none bg-white border rounded text-[${state[4].value}px] ${state[5].value.bold && "font-bold"}`} />;
      case "multiselect":
        const value = option.value as { bold?: boolean; italic?: boolean; underline?: boolean };
        const handleClick = (arg: string, ) => {
          setTemplateState((prev) => {
            const newState = JSON.parse(JSON.stringify(prev));
            const currentOption = newState[templateIndex].children[childIndex].children[optionIndex][optionSelection];
            if (currentOption.value.bold !== undefined && arg === "bold") {
              currentOption.value.bold = !currentOption.value.bold;
            } else if (currentOption.value.italic !== undefined && arg === "italic") {
              currentOption.value.italic = !currentOption.value.italic;
            } else if (currentOption.value.underline !== undefined && arg === "underline") {
              currentOption.value.underline = !currentOption.value.underline;
            }
            return newState;
          });
        };  
        return (
          <div className='flex  w-full h-auto gap-4  '>
            {option.option?.map((style, idx) => (
              <Fragment>
                {style === "bold" ? <div className='w-1/3 flex justify-center items-center'>
                <img src={Bold} onClick={() => handleClick("bold")} className={`w-[20px] cursor-pointer ${!value.bold ? 'opacity-20' : 'opacity-100'}  `} />
                </div> : style === "italic" ? <div className={`w-[20px] cursor-pointer   `}>
                    <img src={Italic} onClick={() => handleClick("italic")} className={`w-[20px] cursor-pointer ${!value.italic ? 'opacity-20' : 'opacity-100'} `} />
                </div> : style === "underline" && <div className={`w-[20px] cursor-pointer   `}>
                      <img src={Underline} onClick={() => handleClick("underline")} className={`w-[20px] ${!value.underline ? 'opacity-20' : 'opacity-100'} `} />
                      </div>}
              </Fragment>
            ))}
          </div>
        );
      case "color":
        return <input type="color" className='h-[40px] w-[60px] border rounded' />;
      default:
        return <span className='text-red-500 text-sm'>Unknown type: {option.type}</span>;
    }
  };
  
const handleChangeParagraphAlignment = ( currentIndex: number, newIndex: number) => {
  if (currentIndex === newIndex) return; // No need to do anything

  setTemplateState(prev => {
    // Clone the current state
    const newState = structuredClone(prev); // Deep clone to avoid mutation issues
    const children = newState[i]?.children;

    if (!children || !Array.isArray(children)) return prev;

    // Validate indices
    if (
      currentIndex < 0 || currentIndex >= children.length ||
      newIndex < 0 || newIndex >= children.length
    ) return prev;

    // Perform the swap
    const [item] = children.splice(currentIndex, 1);
    children.splice(newIndex, 0, item);

    return newState;
  });
};
    
    
  return (
    <div className='h-full   w-full overflow-y-auto px-4 custom-scrollbar bg-white rounded-xl gap-4  shadow-bottom-right flex flex-col  relative z-20'>
      {templatePopUpProps.paragraphStructureShow === true &&
        <Fragment>
          {<ParagraphStructure
                  handleChangeParagraphAligment={handleChangeParagraphAlignment}
          
            stateOfParagraph={templateState[i].children} popUpsState={templatePopUpProps} setPopUpsState={setTemplatePopUpProps} />}
        </Fragment>  
        
      }
                        <div className=' bg-sidebarChoose  min-h-[80px] flex flex-col justify-center  items-center gap-2  w-full '>
                          <div
                            className='h-auto  text-white text-lg font-semibold px-2'
                          >
                          {templateState[i].name}
                          </div>
                        </div>
          <div className='  overflow-y-scroll h-full  w-full flex flex-col gap-10 '>
              
                        {templateState[i].children.map((childGroup:any, childIndex:any) => (
                            <Fragment key={childIndex}>
                              <h1 className="w-full flex justify-center items-center text-sidebarChoose font-bold">
                              {childGroup.name}
                              </h1>
    
                              {/* Container for left label column + scrollable data */}
                              <div className="w-full min-h-[500px] flex bg-loginBackground rounded-lg text-sidebarChoose relative">
    
                                {/* Sticky left label column */}
                                <div className="sticky left-0 z-10 bg-white flex flex-col justify-start min-w-[180px] border-r">
                                  {childGroup.children.map((option:any, optionIndex:any) => (
                                    <div
                                      key={optionIndex}
                                      onClick={() => 
                                      {
    
                                        setParagraphInnerState((prev) => {
                                          const updated = [...prev];
                                          updated[childIndex] = optionIndex + 1;
                                          return updated
                                        })}
                                      }
                                      className={`h-[50px]  flex items-center pl-2 border-b text-sm font-semibold ${optionIndex+1 === paragraphInnerState[childIndex] && "bg-sidebarChoose text-white" } `}
                                    >
                                      აბზაცის {optionIndex + 1} ნაწილი
                                    </div>
                                  ))}
                                </div>
    
                                {/* Horizontally scrollable content */}
                                <div className=" h-full w-full px-2">
                                  <div className="flex flex-col gap-4 h-full">
                                    {childGroup.children.map((option:any, optionIndex:any) => (
                                      <Fragment>
    
                                        {optionIndex+1 === paragraphInnerState[childIndex] && (
                                      <div key={optionIndex} className="flex   gap-[4%] h-full overflow-y-hidden">
                                          <div className='w-full h-full flex flex-col'>
                                              
                                              <div className='w-full  h-auto flex flex-col items-center gap-4  '>
                                                <div className='flex max-w-[1400px] w-auto min-w-[500px] gap-10 h-[100px] items-center overflow-x-auto  '>

                                                {option.map((grandChild: any, grandChildIndex: any) => (
                                                  <Fragment>
                                                    {grandChild.type === "textarea" ? (<Fragment>

                                                    </Fragment>) : (
                                                      
                                                    <div
                                                key={grandChildIndex}
                                                className="min-w-[100px] flex flex-col gap-2 justify-start items-center "
                                                >
                                                
                                                {renderField(grandChild, grandChildIndex, i, childIndex, optionIndex)}

                                              </div>
                                                    )}
                                                    
                                                </Fragment>
                                                ))}
                                                </div>
                                               {option.map((grandChild: any, grandChildIndex: any) => (
                                                  <Fragment>
                                                    {grandChild.type === "textarea" && (<Fragment>
                                                {renderField(grandChild, grandChildIndex, i, childIndex, optionIndex)}

                     
                                                   </Fragment>) 
                                                    }
                                                 </Fragment>
                                                ))}
                                                      
                                              </div>
                                            
                                          </div>
                                      </div>
                                        )}
                                        </Fragment>
                                    ))}
                                  </div>
                                </div>
    
                                {/* Button in corner */}
                                <div onClick={() => AddNewValueInParagraph(i, childIndex)} className="absolute bottom-[10%] right-2 h-[50px] w-auto px-2 border-2 flex justify-center items-center rounded-lg cursor-pointer bg-sidebarChoose text-white">
                                  აბზაცის გაგრძელების დამატება
                                </div>
                                </div>
                                
                            </Fragment>
    
                        ))}
                       </div>
              
      <div className=' min-h-[80px] px-2 w-full flex justify-between items-center bg-white  '>
        <div className="h-full flex items-center gap-4">
          <div className='h-full flex items-center relative'>

              <button  className='h-2/3 bg-sidebarChoose text-white px-4 rounded-lg cursor-pointer' onClick={() => setTemplatePopUpProps((prev) => ({...prev,paragraphStructureShow: true}))}>აბზაცთა განლაგება</button>
          </div>
          <div className='h-full flex items-center relative'>
              
            <button onClick={() => handleClickAddNewParagraph(i)} className='h-2/3 bg-sidebarChoose text-white px-4 rounded-lg cursor-pointer'>ახალი აბზაცის დამატება</button>
              {templatePopUpProps.paragraphAddNew && (
            <div className='absolute z-50 h-[200px] bg-sidebarChoose  w-[400px] bottom-full'>
                <PopUpsAddNewParagraph
                  setPopUpsState={setTemplatePopUpProps}
                  handleClick={handleAddNewParagraphWithName}
                />
            </div>
              )}
          </div>
          </div>
              
              <div className='w-auto px-2 flex gap-2 h-full items-center'>
                 
          <button
            className='w-200px h-2/3 mr-2 p-4 font-semibold bg-sidebarChoose rounded-lg text-white'
          >შენახვა</button>

          <button className="w-200px h-2/3 mr-2 p-4 font-semibold bg-sidebarChoose rounded-lg text-white" onClick={() => setTemplateOptionDropdown(-1)}>გაუქმება</button>
              </div>
                  </div>
                      </div>
  )
}

export default TemplateChoosedOption