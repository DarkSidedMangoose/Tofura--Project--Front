import React, { Fragment, useEffect, useState } from 'react';
import Down from '../../../../../../assets/images/main/down2.png';
import "../../../../Scrollbar.css";
import axios from 'axios';
import TemplateChoosedOption from './TemplateChoosedOption';

export type templateItemObjectProps = {
  name: string;
  type?: string;
  element?: string;
  value?: string;
  option?: string[];
  placeholder?: string;
};

type TemplateItem = {
  name: string;
  children: templateItemObjectProps[][][];
};

interface Props {
  state: {
    navState: string;
    templates: string[];
    choosedTemplate: string;
    addNewTemplate: boolean;
    addNewTemplateNavState: string;
  };
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
  const [templateOptionDropdown, setTemplateOptionDropdown] = useState<number>(-1);
  const [paragraphInnerState, setParagraphInnerState] = useState<number[]>([]);
  const [templateState, setTemplateState] = useState<TemplateItem[]>([
    {
      name: "თავსართი",
      children: [
        [[
          { name: "type", type: "select", option: ["text", "table", "image"] },
          { name: "content", type: "textarea" },
          { name: "element tag", type: "select", option: ["h1", "h2", "p", "span"] },
          { name: "font family", type: "select", option: ["Arial", "Roboto", "Times New Roman"] },
          { name: "font size", type: "input" },
          { name: "text style", type: "multiselect", option: ["bold", "italic", "underline"] },
          { name: "alignment", type: "select", option: ["left", "center", "right", "justify"] },
          { name: "color", type: "color" },
          { name: "background color", type: "color" }
        ], [
          
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
          { name: "background color", type: "color" }
        ], [
          
        ]],
      ],

    },
    {
      name: "მთავარი ტექსტი",
      children: [
        [[
          { name: "type", type: "select", option: ["text", "table", "image"] },
          { name: "content", type: "textarea" },
          { name: "element tag", type: "select", option: ["h1", "h2", "p", "span"] },
          { name: "font family", type: "select", option: ["Arial", "Roboto", "Times New Roman"] },
          { name: "font size", type: "input" },
          { name: "text style", type: "multiselect", option: ["bold", "italic", "underline"] },
          { name: "alignment", type: "select", option: ["left", "center", "right", "justify"] },
          { name: "color", type: "color" },
          { name: "background color", type: "color" }
        ]]
      ]
    }
  ]);
  const [templateRow, setTemplateRow] = useState<TemplateItem | null>(null);

  
  useEffect(() => {
    if (templateOptionDropdown !== -1) {
      const sectionCount = templateState[templateOptionDropdown]?.children.length || 0;
      setParagraphInnerState(new Array(sectionCount).fill(1));
    }
  }, [templateOptionDropdown]);
  

 
  const handleAddNewParagraph = (templateIndex: number) => {
    setParagraphInnerState((prev) => ([...prev,1]))
    setTemplateState((prevTemplates) =>
      prevTemplates.map((template, i) => {
        if (i !== templateIndex) return template;
        return {
          ...template,
          children: [
            ...template.children,
            [[
              { name: "type", type: "select", value: "text", option: ["text", "table", "image"] },
              { name: "content", type: "textarea" },
              { name: "element tag", type: "select", option: ["h1", "h2", "p", "span"] },
              { name: "font family", type: "select", option: ["Arial", "Roboto", "Times New Roman"] },
              { name: "font size", type: "input" },
              { name: "text style", type: "multiselect", option: ["bold", "italic", "underline"] },
              { name: "alignment", type: "select", option: ["left", "center", "right", "justify"] },
              { name: "color", type: "color" },
              { name: "background color", type: "color" }
            ]]
          ]
        };
      })
    );
    
  }
  
  const AddNewValueInParagraph = (templateIndex: number, childIndex: number) => {
    console.log(templateIndex, childIndex);
    console.log(templateState)
  setTemplateState((prevTemplates) =>
    prevTemplates.map((template, i) => {
      if (i !== templateIndex) return template;

      const newChildren = template.children.map((child, ci) => {
        if (ci !== childIndex) return child;

        // Clone existing child blocks and append a new one
        return [
          ...child,
          [
            { name: "type", type: "select", value: "text", option: ["text", "table", "image"] },
            { name: "content", type: "textarea" },
            { name: "element tag", type: "select", option: ["h1", "h2", "p", "span"] },
            { name: "font family", type: "select", option: ["Arial", "Roboto", "Times New Roman"] },
            { name: "font size", type: "input" },
            { name: "text style", type: "multiselect", option: ["bold", "italic", "underline"] },
            { name: "alignment", type: "select", option: ["left", "center", "right", "justify"] },
            { name: "color", type: "color" },
            { name: "background color", type: "color" }
          ]
        ];
      });

      return {
        ...template,
        children: newChildren
      };
    })
  );
};

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

      <div className='w-80% h-80% bg-white  shadow-boxShadow'>
        <div className='w-full h-[90%] flex flex-col gap-2'>
          {templateState.map((templateRow, i) => (
            
            <div onClick={() => {
              setTemplateRow(templateRow);
              setTemplateOptionDropdown(templateOptionDropdown === i ? -1 : i);
            }} key={i} className={`w-full bg-loginBackground transition-all  cursor-pointer hover:opacity-80 duration-200 h-[100px] flex gap-2`}>
            

               
              <div className='w-full h-full flex justify-between relative px-[4%]'>
                
                <div className='h-full flex items-center'>
                  
                   
                  {templateOptionDropdown !== i && <h1>{templateRow.name}</h1>}
                </div>

                
                
              
                
                {/* <div className={`absolute right-[4%] ${templateOptionDropdown === i ? "bottom-0 h-15%" : "h-full"} w-[40px] flex justify-center items-center`}>
                  <img
                    onClick={() => setTemplateOptionDropdown(templateOptionDropdown === i ? -1 : i)}
                    className={`h-[40px] transition-all duration-500 cursor-pointer ${templateOptionDropdown === i ? "rotate-180" : "rotate-0"}`}
                    src={Down}
                    alt="toggle"
                  />
                </div> */}
              </div>
             
    
            </div>
          ))}
 
        </div>
          {templateOptionDropdown !== -1 && (
                  
                 
                  <div className='fixed w-full h-full flex justify-center items-center left-0 top-0 z-80'>
            <TemplateChoosedOption templateState={templateState} i={templateOptionDropdown} paragraphInnerState={paragraphInnerState} setParagraphInnerState={setParagraphInnerState} AddNewValueInParagraph={AddNewValueInParagraph} setTemplateState={setTemplateState} handleAddNewParagraph={handleAddNewParagraph} setTemplateOptionDropdown={setTemplateOptionDropdown} />
                  </div>
                )}
        <div className='w-full h-[10%] flex justify-end items-center'>
          <button
            onClick={() => setState(prev => ({ ...prev, addNewTemplate: false }))}
            className='w-200px mr-2 p-4 font-semibold bg-sidebarChoose rounded-lg text-white'
          >
            დახურვა
          </button>
          <button
            onClick={() => setState(prev => ({ ...prev, addNewTemplate: false }))}
            className='w-200px mr-2 p-4 font-semibold bg-sidebarChoose rounded-lg text-white'
          >
          გენერირება</button>
        </div>
      </div>
    </div>
  );
};

export default GenerateAddReviewUseTemplate;
