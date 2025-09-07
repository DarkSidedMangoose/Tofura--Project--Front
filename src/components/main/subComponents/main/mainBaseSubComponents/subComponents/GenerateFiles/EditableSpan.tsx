import { useEffect, useRef, useState } from "react";

type Props = {
  value: any;
  onChange: (value: any) => void;
  spanKey: string;
  classNameValues: any;
  onClick: (arg: any) => void;
  onFocus?: () => void;
  isChoosed: boolean;
  childIndex: number;
  templateState?: any; // Optional prop for template state
};

export const EditableSpan: React.FC<Props> = (props) => {
  const spanRef = useRef<HTMLSpanElement | null>(null);

  // Hydrate DOM when value changes
  useEffect(() => {
    const el = spanRef.current;
    if (el && el.innerText !== props.value) {
      console.log(props.value)
      el.innerText = props.value;
    }
  }, [props.value, props.templateState]);
  
  useEffect(() => {
    console.log(props.childIndex)
  }, [props.childIndex]);

  // Handle user input and blur after change
  const handleInput = () => {
    const el = spanRef.current;
    if (el) {
      props.onChange(el.innerText);
      // el.blur(); // remove focus after change
    }
  };

  return (
    <div className={`h-[50px] ${!props.isChoosed && "cursor-pointer"} relative `} >
      {!props.isChoosed && (

      <div className="absolute w-full h-full" onClick={props.onClick}></div>
      )}
      <span
        key={props.spanKey}
        ref={spanRef}
        contentEditable
        suppressContentEditableWarning
        onInput={handleInput}
        onClick={(e: React.MouseEvent<HTMLSpanElement>) => { e.stopPropagation() }}
        onFocus={props.onFocus}
        style={{
          fontSize: props.classNameValues?.fontSize
            ? `${props.classNameValues.fontSize}px`
            : "16px",
          fontWeight: props.classNameValues?.fontStyle?.bold ? "bold" : "normal",
          fontStyle: props.classNameValues?.fontStyle?.italic ? "italic" : "normal",
          textDecoration: props.classNameValues?.fontStyle?.underline ? "underline" : "",
          fontFamily: props.classNameValues?.fontFamily || "Arial",
          textAlign: props.classNameValues?.justify || "left",
          color: props.classNameValues?.fontColor || "#000000",
          backgroundColor: props.classNameValues?.bgColor || "transparent",

        }}
        className={`h-full  flex items-center  border-b-2 ${props.isChoosed && "border-sidebarChoose" } px-2  py-1 min-w-[20px] max-w-full  whitespace-pre-wrap break-words`}
        />
    </div>
      
  );
};
