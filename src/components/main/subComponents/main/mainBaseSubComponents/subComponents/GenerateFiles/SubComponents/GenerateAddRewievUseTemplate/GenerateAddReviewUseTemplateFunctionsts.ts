

//this is for add new section with dynamic name when we add new section for example 
//  შესავალი,
//  მთავარი ნაწილი,
//  დასასრული etc."

import { SetStateAction } from "react";
import { TemplateItem } from "./GenerateAddReviewUseTemplateInterfaces";
import { NewParagraphInSectionChildren } from "./GenerateAddReviewUseTemplateValues";

// it's first layer of template while we make new template or review it
// it only responsible for creating json with dynamic name which will be added soon"
export const TemplateStateAddNewSectionByName = (name: string,children: any) => {

    return {
        name: `${name}`,
        remove: null,
        children: children,
    }
}

//this is for when we add/edit/review template and move to the questionary 
//via from we can generate word files via clicking on გაუქმება button
//after clicking on that button it will automatically close  template adding and review component 

export const Close = (setState: React.Dispatch<SetStateAction<any>>) => {
  setState((prev: any) => {
    const a = JSON.parse(JSON.stringify(prev));
    a.addReviewNewTemplate = false;
    return a;
  });
};

//this function is for add new section in a place where we want to add
// that function define on which addNewSection button has clicked and added next to it 
// for example i have 
// addSectionbutton
// თავსართი
// addSectionbutton
// there if we click on before თავსართი it will automatically added in first place *
export const InsertAtIndex = (index: number, item: TemplateItem, setTemplateState: React.Dispatch<SetStateAction<any[]>>) => {
    setTemplateState((prevTemplates) => {
      const newTemplates = [...prevTemplates];
      newTemplates.splice(index, 0, item);
      return newTemplates;
    });
  };


//this function is for add new paragraph in template section while we are adding/reviewing template 
// when we open for example section
// თავსართი
// in that section i have paragraphs that function is responsible to add new paragraph in the section
// paragraph1(old)
// paragraph2(newly added)*
export const HandleAddNewParagraph = (templateIndex: number, name: string, setTemplateState: React.Dispatch<SetStateAction<any[]>>) => {
    setTemplateState((prevTemplates) =>
       prevTemplates.map((template, i) => {
         if (i !== templateIndex) return template;
         return {
           ...template,
           children: [
             ...template.children,
             {
               name: name,
               index: 0,
               textArea: [
                 {
                   type: "text",
                   value: "ტექსტი",
                   className: {
                     fontSize: 16,
                     fontStyle: { bold: true, italic: false, underline: false },
                   },
                 },
               ],
               children: NewParagraphInSectionChildren,
             },
           ],
         };
       })
     );
   };

   

   // in the logic i have array of bools on every time we click add new section btn it automatically push new bool to that array with true value 
   // true is responsible to show ახალი სექციის დამატების component if it is on false it vanished and if it is on true it showed in that ახალი სექციის დამატების component a input with accept and decline bts
   // and when accept btn is clicked there every btn bools will change to false*


   export const TemplateSectionsAddNewSectionBools = (setAddNewSection: React.Dispatch<SetStateAction<any[]>>) => {
    setAddNewSection((prev) => {
      const newSections = [...prev];
      newSections.push(true); // Add a new section
      newSections.forEach((e, idx) => {
        newSections[idx] = false; // Reset all other sections
      });
      return newSections;
    });
   }
