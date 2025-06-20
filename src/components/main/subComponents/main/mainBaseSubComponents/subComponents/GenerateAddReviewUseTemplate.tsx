import React, { Fragment, useEffect, useState } from 'react'
import Down from '../../../../../../assets/images/main/down2.png'
import "../../../../Scrollbar.css"
import axios from 'axios';

type templateItemObjectProps = {
  name: string;
  type?: string;
  element?: string;
  value?: string;
  option?: string[];
  placeholder?: string;
}

type TemplateItem = {
  name: string;
  children: templateItemObjectProps[][][];
}

interface Props {
  state: {
    navState: string;
    templates: string[];
    choosedTemplate: string;
    addNewTemplate: boolean;
    addNewTemplateNavState: string;
  },
  setState: React.Dispatch<React.SetStateAction<{
    navState: string;
    templates: string[];
    choosedTemplate: string;
    addNewTemplate: boolean;
    addNewTemplateNavState: string;
  }>>;
}

const apiUrl = process.env.REACT_APP_API_BASE_URL;

const GenerateAddReviewUseTemplate: React.FC<Props> = ({ setState, state }) => {

  const [templateOptionDropdown, setTemplateOptionDropdown] = useState<number>(-1)
  const [paragraphInnerState, setParagraphInnerState] = useState<number[]>([])
 
  const [templateState, setTemplateState] = useState<TemplateItem[][]>([[
    {
      name: "თავსართი",
      
      children: [[[

        
        { name: "type", type: "select", option: ["text", "table", "image"] },
        { name: "content", type: "textarea" },
        { name: "element tag", type: "select", option: ["h1", "h2", "p", "span"] },
        { name: "font family", type: "select", option: ["Arial", "Roboto", "Times New Roman"] },
        { name: "font size", type: "input" },
        { name: "text style", type: "multiselect", option: ["bold", "italic", "underline"] },
        { name: "alignment", type: "select", option: ["left", "center", "right", "justify"] },
        { name: "color", type: "color" },
        { name: "background color", type: "color" },
        
      ],
      [

        { name: "type", type: "select", option: ["text", "table", "image"] },
        { name: "content", type: "textarea" },
        { name: "element tag", type: "select", option: ["h1", "h2", "p", "span"] },
        { name: "font family", type: "select", option: ["Arial", "Roboto", "Times New Roman"] },
        { name: "font size", type: "input" },
        { name: "text style", type: "multiselect", option: ["bold", "italic", "underline"] },
        { name: "alignment", type: "select", option: ["left", "center", "right", "justify"] },
        { name: "color", type: "color" },
        { name: "background color", type: "color" },
        
      ],
      ],[[
        { name: "type", type: "select", option: ["text", "table", "image"] },
        { name: "content", type: "textarea" },
        { name: "element tag", type: "select", option: ["h1", "h2", "p", "span"] },
        { name: "font family", type: "select", option: ["Arial", "Roboto", "Times New Roman"] },
        { name: "font size", type: "input" },
        { name: "text style", type: "multiselect", option: ["bold", "italic", "underline"] },
        { name: "alignment", type: "select", option: ["left", "center", "right", "justify"] },
        { name: "color", type: "color" },
        { name: "background color", type: "color" },
        
      ]],
    [[


      { name: "type", type: "select", option: ["text", "table", "image"] },
      { name: "content", type: "textarea" },
      { name: "element tag", type: "select", option: ["h1", "h2", "p", "span"] },
      { name: "font family", type: "select", option: ["Arial", "Roboto", "Times New Roman"] },
        { name: "font size", type: "input" },
        { name: "text style", type: "multiselect", option: ["bold", "italic", "underline"] },
        { name: "alignment", type: "select", option: ["left", "center", "right", "justify"] },
        { name: "color", type: "color" },
        { name: "background color", type: "color" },
        
      ]
      ],
    [
      [

        { name: "type", type: "select", option: ["text", "table", "image"] },
        { name: "content", type: "textarea" },
        { name: "element tag", type: "select", option: ["h1", "h2", "p", "span"] },
        { name: "font family", type: "select", option: ["Arial", "Roboto", "Times New Roman"] },
        { name: "font size", type: "input" },
        { name: "text style", type: "multiselect", option: ["bold", "italic", "underline"] },
        { name: "alignment", type: "select", option: ["left", "center", "right", "justify"] },
        { name: "color", type: "color" },
        { name: "background color", type: "color" },
      ]
        
      ],]
    }
  ]]);


   useEffect(() => {
    let a = []
    if(templateOptionDropdown !== -1) {
      for(var i = 0; i < templateState[0][templateOptionDropdown].children.length; i ++) {
        a.push(1)
       
      }
    }
    console.log(a)
    setParagraphInnerState(a)
  },[templateOptionDropdown])

  useEffect(() => {
    console.log(paragraphInnerState)
  },[paragraphInnerState])

  const handleChangeType = (selected: string, templateIndex: number, childIndex: number) => {
    setTemplateState((prev: TemplateItem[][]) => {
      // Deep copy the previous state
      const newState = prev.map(templateArr =>
        templateArr.map(template => ({
          ...template,
          children: template.children.map(child => [...child])
        }))
      );
     switch (selected) {
  case "text":
    newState[0][templateIndex].children[childIndex] = [[

      { name: "type", type: "select", value: "text", option: ["text", "table", "image"] },
      { name: "content", type: "textarea" },
      { name: "element tag", type: "select", option: ["h1", "h2", "p", "span"] },
      { name: "font family", type: "select", option: ["Arial", "Roboto", "Times New Roman"] },
      { name: "font size", type: "input" },
      { name: "text style", type: "multiselect", option: ["bold", "italic", "underline"] },
      { name: "alignment", type: "select", option: ["left", "center", "right", "justify"] },
      { name: "color", type: "color" },
      { name: "background color", type: "color" },
    ]
    ];
    return newState;

  case "table":
    newState[0][templateIndex].children[childIndex] = [
      [

        { name: "type", type: "select", value: "table", option: ["text", "table", "image"] },
        { name: "rows", type: "input", value: "2" },
        { name: "columns", type: "input", value: "2" },
        { name: "border", type: "select", option: ["none", "solid", "dashed", "dotted"] },
        { name: "cell padding", type: "input" },
        { name: "alignment", type: "select", option: ["left", "center", "right"] },
        { name: "width", type: "input" },
        { name: "background color", type: "color" },
      ]
    ];
    return newState;

  case "image":
    newState[0][templateIndex].children[childIndex] = [
      [

        { name: "type", type: "select", value: "image", option: ["text", "table", "image"] },
        { name: "source", type: "input", placeholder: "Image URL or path" },
      { name: "alt text", type: "input" },
      { name: "width", type: "input" },
      { name: "height", type: "input" },
      { name: "alignment", type: "select", option: ["left", "center", "right"] },
      { name: "border radius", type: "input" },
    ]
    ];
    return newState;

  default:
    return newState;
}
    })
    console.log("User selected type:", selected);
    console.log("Template index:", templateIndex, "Child index:", childIndex);
    // TODO: Replace children[childIndex] based on selected type
  }

  const renderField = (
    option: templateItemObjectProps,
    templateIndex: number,
    childIndex: number
  ) => {
    switch (option.type) {
      case "select":
        return (
          <select
            onChange={(e) =>
              option.name === "type" &&
              handleChangeType(e.target.value, templateIndex, childIndex)
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
        return (
          <input
            type="text"
            placeholder={option.placeholder}
            className='h-[50px] min-w-full text-sm px-4 bg-loginBackground'
          />
        );
      case "textarea":
        return (
          <textarea
            placeholder={option.placeholder}
            className='h-[250px] min-w-full text-sm p-2 resize-none bg-loginBackground'
          />
        );
      case "multiselect":
        return (
          <div className='flex  justify-between w-full h-[50px] items-center'>
            {option.option?.map((style, idx) => (
              <label key={idx} className='flex flex-col  items-center  '>
                <input type="checkbox" className='' />
                <span>{style}</span>
              </label>
            ))}
          </div>
        );
      case "color":
        return (
          <input
            type="color"
            className='h-[40px] w-[60px] border rounded'
          />
        );
      case "file":
        return (
          <input
            type="file"
            className='w-full text-sm'
          />
        );
      default:
        return <span className='text-red-500 text-sm'>Unknown type: {option.type}</span>;
    }
  };

  const sendRequest = async() => {
    try {
    const response = await axios.post(`${apiUrl}/generateWordFile`,{args: templateState},{withCredentials: true})


    }catch(err: any) {
      if(err.response.status === 401) {
            window.location.href = "/";

      }else {
        console.error(err)
      }
    }
  }
  return (
    <div className='fixed w-full h-full left-0 top-0 bg-loginBackground z-10 flex flex-col justify-center items-center'>
      <div className='w-1/3 h-[5%] flex justify-center items-end'>
        <ul className='w-full h-full flex gap-2'>
          {["შაბლონი", "შაბლონის ვიზუალი"].map((e, i) => (
            <li
              key={i}
              onClick={() => setState(prev => ({ ...prev, addNewTemplateNavState: e }))}
              className={`w-1/2 h-full flex justify-center items-center ${state.addNewTemplateNavState === e ? "bg-sidebarChoose text-white border-white" : "bg-white text-sidebarChoose border-sidebarChoose"} border-2 cursor-pointer`}
            >
              {e}
            </li>
          ))}
        </ul>
      </div>

      <div className='w-80% h-80% bg-white shadow-boxShadow'>
        <div className='w-full h-[90%] flex flex-col gap-2'>
          {templateState.map((templateRow, i) => (
            <div key={i} className={`w-full bg-loginBackground transition-all ${templateOptionDropdown === i ? "h-[600px]" : "h-[100px]"} flex gap-2`}>
              <div className='w-full h-full flex justify-between relative px-[4%]'>
                <div className='h-full flex items-center'>
                  {templateOptionDropdown !== i && <h1>{templateRow[0].name}</h1>}
                </div>

                {templateOptionDropdown === i && (
                  <div className='h-[85%] w-full overflow-y-auto px-4 custom-scrollbar bg-[#e1e2e2f1] rounded-xl mt-2 shadow-bottom-right flex flex-col gap-10'>
                    <div className=' bg-sidebarChoose  min-h-[50px] flex flex-col justify-center  items-center gap-2'>
                      <div
                        className='h-auto w-auto text-white text-lg font-semibold px-2'
                      >
                      {templateRow[0].name}
                      </div>
                    </div>

                    {templateRow[0].children.map((childGroup, childIndex) => (
 <Fragment key={childIndex}>
  <h1 className="w-full flex justify-center items-center text-sidebarChoose font-bold">
    აბზაცი {childIndex + 1}
  </h1>

  {/* Container for left label column + scrollable data */}
  <div className="w-full min-h-[300px] flex bg-white rounded-lg text-sidebarChoose relative">

    {/* Sticky left label column */}
    <div className="sticky left-0 z-10 bg-white flex flex-col justify-start min-w-[180px] border-r">
      {childGroup.map((option, optionIndex) => (
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
    <div className="overflow-x-auto w-full px-2">
      <div className="flex flex-col gap-4">
        {childGroup.map((option, optionIndex) => (
          <Fragment>

            {optionIndex+1 === paragraphInnerState[childIndex] && (
          <div key={optionIndex} className="flex gap-[4%]  overflow-y-hidden">
              <Fragment>

                {option.map((grandChild, grandChildIndex) => (
                  <div
                    key={grandChildIndex}
                    className="min-w-[200px] flex flex-col gap-2 justify-start items-center"
                    >
                    <label>{grandChild.name}</label>
                    {renderField(grandChild, i, childIndex)}
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
    <div className="absolute bottom-[10%] right-2 h-[50px] w-auto px-2 border-2 flex justify-center items-center rounded-lg cursor-pointer bg-sidebarChoose text-white">
      აბზაცის გაგრძელების დამატება
    </div>
  </div>
</Fragment>

))}
                  </div>
                )}
                {
                  templateOptionDropdown === i && 
                    <div className='absolute bottom-0 h-[calc(15%-4px)] flex justify-center items-center '>
                  <button className='h-1/2 bg-sidebarChoose text-white px-2 rounded-lg cursor-pointer'>ახალი აბზაცის დამატება</button>
                  </div>
                }
              
                
                <div className={`absolute right-[4%] ${templateOptionDropdown === i ? "bottom-0 h-15%" : "h-full"} w-[40px] flex justify-center items-center`}>
                  <img
                    onClick={() => setTemplateOptionDropdown(templateOptionDropdown === i ? -1 : i)}
                    className={`h-[40px] transition-all duration-500 cursor-pointer ${templateOptionDropdown === i ? "rotate-180" : "rotate-0"}`}
                    src={Down}
                    alt="toggle"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className='w-full h-[10%] flex justify-end items-center'>
          <button
            onClick={() => setState(prev => ({ ...prev, addNewTemplate: false }))}
            className='w-200px mr-2 p-4 font-semibold bg-sidebarChoose rounded-lg text-white'
          >
            დახურვა
          </button>
          <button onClick={() => sendRequest()}>გენერირება</button>
        </div>
      </div>
    </div>
  );
};

export default GenerateAddReviewUseTemplate;
