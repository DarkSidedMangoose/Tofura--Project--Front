import React, { Fragment } from 'react'
import { templateItemObjectProps } from './GenerateAddReviewUseTemplate';
import { ParagraphStructure } from './PopUps';

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

export type TemplatePopUpProps = {
  paragraphStructureShow: boolean;
  paragraphAddNew: boolean;
}

const TemplateChoosedOption: React.FC<Props> = ({ templateState, i, paragraphInnerState, setParagraphInnerState, AddNewValueInParagraph,setTemplateState,handleAddNewParagraph, setTemplateOptionDropdown }) => {
  const [templatePopUpProps, setTemplatePopUpProps] = React.useState<TemplatePopUpProps>({
    paragraphStructureShow: false,
    paragraphAddNew: false
  });
  const handleChangeType = (selected: string, templateIndex: number, childIndex: number, optionIndex: number) => {
      
    setTemplateState((prev) => {
      const newState = [...prev];
      const childrenCopy = [...newState[templateIndex].children[childIndex].children];
      switch (selected) {
        case "text":
          childrenCopy[optionIndex] = [
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
          childrenCopy[optionIndex] = [
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
          childrenCopy[optionIndex] = [
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
      
      newState[templateIndex].children[childIndex].children = childrenCopy;
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
            className='h-[50px] min-w-full text-sm px-4 bg-white border rounded'
          >
            <option disabled>აირჩიე</option>
            {option.option?.map((o, idx) => (
              <option key={idx}>{o}</option>
            ))}
          </select>
        );
      case "input":
        return <input type="text" placeholder={option.placeholder} className='h-[50px] min-w-full text-sm px-4 bg-white border rounded' />;
      case "textarea":
        return <textarea placeholder={option.placeholder} className='h-[250px] min-w-full text-sm p-2 resize-none bg-white border rounded' />;
      case "multiselect":
        return (
          <div className='flex  w-full h-auto gap-4 flex-col '>
            {option.option?.map((style, idx) => (
              <label key={idx} className='flex gap-2 w-full  '>
                <input type="checkbox" className='w-[50px]' />
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
    <div className='h-full   w-full overflow-y-auto px-4 custom-scrollbar bg-white rounded-xl gap-4  shadow-bottom-right flex flex-col  relative z-20'>
      {templatePopUpProps.paragraphStructureShow === true && 
        <Fragment>
          {<ParagraphStructure stateOfParagraph={templateState[i].children} popUpsState={ templatePopUpProps} setPopUpsState={setTemplatePopUpProps} />}
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
                              <div className="w-full min-h-[300px] flex bg-loginBackground rounded-lg text-sidebarChoose relative">
    
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
                                    {childGroup.children.map((option:any, optionIndex:any) => (
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
              
      <div className=' min-h-[80px] px-2 w-full flex justify-between items-center bg-white  '>
        <div className="h-full flex items-center gap-4">
          
        <button  className='h-2/3 bg-sidebarChoose text-white px-4 rounded-lg cursor-pointer' onClick={() => setTemplatePopUpProps((prev) => ({...prev,paragraphStructureShow: true}))}>აბზაცთა განლაგება</button>
              
              <button onClick={() => handleAddNewParagraph(i)} className='h-2/3 bg-sidebarChoose text-white px-4 rounded-lg cursor-pointer'>ახალი აბზაცის დამატება</button>
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