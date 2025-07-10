import React, { Fragment } from 'react'
import { templateItemObjectProps } from './GenerateAddReviewUseTemplate';

interface Props {
    templateState: any;
    i: number;
    paragraphInnerState: number[];
    setParagraphInnerState: React.Dispatch<React.SetStateAction<number[]>>;
    AddNewValueInParagraph: (i: number, childIndex: number) => void;
    setTemplateState: React.Dispatch<React.SetStateAction<any[]>>;
    handleAddNewParagraph: (i: number) => void;
    setTemplateOptionDropdown: React.Dispatch<React.SetStateAction<number>>

}


const TemplateChoosedOption: React.FC<Props> = ({ templateState, i, paragraphInnerState, setParagraphInnerState, AddNewValueInParagraph,setTemplateState,handleAddNewParagraph, setTemplateOptionDropdown }) => {
    const handleChangeType = (selected: string, templateIndex: number, childIndex: number, optionIndex: number) => {
    setTemplateState((prev) => {
      const newState = [...prev];
      const childrenCopy = [...newState[templateIndex].children];
      const sectionCopy = [...childrenCopy[childIndex]];
      switch (selected) {
        case "text":
          sectionCopy[optionIndex] = [
            { name: "type", type: "select", value: "text", option: ["text", "table", "image"] },
            { name: "content", type: "textarea" },
            { name: "element tag", type: "select", option: ["h1", "h2", "p", "span"] },
            { name: "font family", type: "select", option: ["Arial", "Roboto", "Times New Roman"] },
            { name: "font size", type: "input" },
            { name: "text style", type: "multiselect", option: ["bold", "italic", "underline"] },
            { name: "alignment", type: "select", option: ["left", "center", "right", "justify"] },
            { name: "color", type: "color" },
            { name: "background color", type: "color" }
          ];
          break;
        case "table":
          sectionCopy[optionIndex] = [
            { name: "type", type: "select", value: "table", option: ["text", "table", "image"] },
            { name: "rows", type: "input", value: "2" },
            { name: "columns", type: "input", value: "2" },
            { name: "border", type: "select", option: ["none", "solid", "dashed", "dotted"] },
            { name: "cell padding", type: "input" },
            { name: "alignment", type: "select", option: ["left", "center", "right"] },
            { name: "width", type: "input" },
            { name: "background color", type: "color" }
          ];
          break;
        case "image":
          sectionCopy[optionIndex] = [
            { name: "type", type: "select", value: "image", option: ["text", "table", "image"] },
            { name: "source", type: "input", placeholder: "Image URL or path" },
            { name: "alt text", type: "input" },
            { name: "width", type: "input" },
            { name: "height", type: "input" },
            { name: "alignment", type: "select", option: ["left", "center", "right"] },
            { name: "border radius", type: "input" }
          ];
          break;
      }
      childrenCopy[childIndex] = sectionCopy;
      newState[templateIndex].children = childrenCopy;
      return newState;
    });
  };
    const renderField = (
    option: templateItemObjectProps,
    templateIndex: number,
    childIndex: number,
    optionIndex: number
  ) => {
    switch (option.type) {
      case "select":
        return (
          <select
            value={option.value}
            onChange={(e) =>
              option.name === "type" &&
              handleChangeType(e.target.value, templateIndex, childIndex, optionIndex)
              
            }
            className='h-[50px] min-w-full text-sm px-4 bg-loginBackground'
          >
            <option disabled>აირჩიე</option>
            {option.option?.map((o, idx) => (
              <option key={idx}>{o}</option>
            ))}
          </select>
        );
      case "input":
        return <input type="text" placeholder={option.placeholder} className='h-[50px] min-w-full text-sm px-4 bg-loginBackground' />;
      case "textarea":
        return <textarea placeholder={option.placeholder} className='h-[250px] min-w-full text-sm p-2 resize-none bg-loginBackground' />;
      case "multiselect":
        return (
          <div className='flex justify-between w-full h-[50px] items-center'>
            {option.option?.map((style, idx) => (
              <label key={idx} className='flex flex-col items-center'>
                <input type="checkbox" />
                <span>{style}</span>
              </label>
            ))}
          </div>
        );
      case "color":
        return <input type="color" className='h-[40px] w-[60px] border rounded' />;
      default:
        return <span className='text-red-500 text-sm'>Unknown type: {option.type}</span>;
    }
    };
    
  return (
    <div className='h-full   w-full overflow-y-auto px-4 custom-scrollbar bg-gray-200 rounded-xl mt-2 shadow-bottom-right flex flex-col gap-10 relative'>
                        <div className=' bg-sidebarChoose  min-h-[80px] flex flex-col justify-center  items-center gap-2 absolute top-0 w-full left-0'>
                          <div
                            className='h-auto w-auto text-white text-lg font-semibold px-2'
                          >
                          {templateState[i].name}
                          </div>
                        </div>
          <div className='mt-[85px] overflow-y-scroll h-80% w-full flex flex-col gap-10 '>
              
                        {templateState[i].children.map((childGroup:any, childIndex:any) => (
                            <Fragment key={childIndex}>
                              <h1 className="w-full flex justify-center items-center text-sidebarChoose font-bold">
                                აბზაცი {childIndex + 1}
                              </h1>
    
                              {/* Container for left label column + scrollable data */}
                              <div className="w-full min-h-[300px] flex bg-white rounded-lg text-sidebarChoose relative">
    
                                {/* Sticky left label column */}
                                <div className="sticky left-0 z-10 bg-white flex flex-col justify-start min-w-[180px] border-r">
                                  {childGroup.map((option:any, optionIndex:any) => (
                                    <div
                                      key={optionIndex}
                                      onClick={() => 
                                      {
    
                                        setParagraphInnerState((prev) => {
                                          const updated = [...prev];
                                          updated[childIndex] = optionIndex + 1;
                                          return updated;
                                        })}
                                      }
                                      className={`h-[50px] flex items-center pl-2 border-b text-sm font-semibold ${optionIndex+1 === paragraphInnerState[childIndex] && "bg-sidebarChoose text-white" } `}
                                    >
                                      აბზაცის {optionIndex + 1} ნაწილი
                                    </div>
                                  ))}
                                </div>
    
                                {/* Horizontally scrollable content */}
                                <div className="overflow-x-auto h-full w-full px-2">
                                  <div className="flex flex-col gap-4 h-full">
                                    {childGroup.map((option:any, optionIndex:any) => (
                                      <Fragment>
    
                                        {optionIndex+1 === paragraphInnerState[childIndex] && (
                                      <div key={optionIndex} className="flex gap-[4%] h-full overflow-y-hidden">
                                          <Fragment>
    
                                            {option.map((grandChild:any, grandChildIndex:any) => (
                                              <div
                                                key={grandChildIndex}
                                                className="min-w-[200px] flex flex-col gap-2 justify-start items-center"
                                                >
                                                <label>{grandChild.name}</label>
                                                {renderField(grandChild, i, childIndex, optionIndex)}
                                              </div>
                                            ))}
                                          </Fragment>
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
              
                              <div className='absolute left-0 bottom-0 h-[calc(20%-100px)] px-2 w-full flex justify-between items-center  '>
              <button onClick={() => handleAddNewParagraph(i)} className='h-full bg-sidebarChoose text-white px-4 rounded-lg cursor-pointer'>ახალი აბზაცის დამატება</button>
              <div className='w-auto px-2 flex gap-2 h-full'>
                 
          <button
            className='w-200px mr-2 p-4 font-semibold bg-sidebarChoose rounded-lg text-white'
          >შენახვა</button>

          <button className="w-200px mr-2 p-4 font-semibold bg-sidebarChoose rounded-lg text-white" onClick={() => setTemplateOptionDropdown(-1)}>გაუქმება</button>
              </div>
                  </div>
                      </div>
  )
}

export default TemplateChoosedOption