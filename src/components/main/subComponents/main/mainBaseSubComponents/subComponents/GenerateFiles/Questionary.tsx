import React, { Fragment, useEffect, useState } from 'react'

type Props = {
  state: any;
  setState: React.Dispatch<React.SetStateAction<any>>;
  generate: () => void;
  close: () => void
};

type Placeholder = {
  uuid: string;
  questionName: string;
  sectionIndex: number;
  childIndex: number;
  textAreaIndex: number;
};

const Questionary = (props: Props) => {
  const [placeholders, setPlaceholders] = useState<Placeholder[]>([])
  const [placeholderAnswer, setPlaceHolderAnswer] = useState<string[]>([])
  const [generateFiles, setGenerateFiles] = useState(false)

  const { generate } = props;

  useEffect(() => {
    if(generateFiles) {
      generate()
    }
  },[generateFiles, generate])

  useEffect(() => {
    setPlaceholders([])
    props.state.forEach((section: any, sectionIndex:number) => {
      section.children.forEach((child: any, childIndex:number) => {
       child.textArea.forEach((textArea: any, textAreaIndex:number) => {
        if(textArea.type === 'placeholder'){
          setPlaceholders((prev) => [...prev, {uuid: textArea.uuid, questionName: textArea.questionName, sectionIndex, childIndex, textAreaIndex}] )
        }
      })
    })

  })

     
      
      
    
  },[])
  useEffect(() => {
      const s: React.SetStateAction<string[]> = []      
    placeholders.forEach(() => {
      s.push("")
         })
         setPlaceHolderAnswer(s)
  },[placeholders])

  

  const handleClickGenerate = () => {
    const updatedState = JSON.parse(JSON.stringify(props.state));

    placeholders.forEach((placeholder, index) => {
      updatedState[placeholder.sectionIndex].children[
        placeholder.childIndex
      ].textArea[placeholder.textAreaIndex].value = placeholderAnswer[index];
    });

    props.setState(updatedState);
    setGenerateFiles(true)
  };


  return (
    <div className="w-full bg-white h-full relative">
      {placeholders.map((placeholders, index) => (
        <Fragment key={placeholders.uuid}>
          <div className="w-full min-h-[80px] p-5 border-b border-gray-300 flex justify-between items-center relative">
            <div className="flex gap-4 h-full justify-center items-center w-full ">
              <p className="font-bold w-1/2 text-sidebarChoose">
                {index + 1}) {placeholders.questionName}
              </p>
              <input className="w-1/2  h-[40px] border-2 px-2" onChange={(e) => {
                setPlaceHolderAnswer((prev: string[]) => {
                  const a = [...prev];
                  a[index] = e.target.value;
                  return a;
                });
              }}
               value={placeholderAnswer[index]} />
            </div>
            <div className="absolute text-sm text-gray-500 right-[50px] bottom-0">
              {" "}
              სექცია {placeholders.sectionIndex + 1} - პარაგრაფი{" "}
              {placeholders.childIndex + 1} - პარაგრაფის სექცია{" "}
              {placeholders.textAreaIndex + 1}
            </div>
          </div>
        </Fragment>
      ))}
      <div className="absolute w-auto bottom-[-160px] h-[160px] right-0  gap-4 flex justify-center items-center">
        <button className="w-auto p-4 h-[80px] flex justify-center items-center rounded-lg bg-sidebarChoose text-white font-bold" onClick={() => props.close()}>
          გაუქმება
        </button>
        <button className="w-auto p-4 h-[80px] flex justify-center items-center rounded-lg bg-sidebarChoose text-white font-bold" onClick={() => handleClickGenerate()}>
          {" "}
          გენერირება
        </button>
      </div>
    </div>
  );
}

export default Questionary