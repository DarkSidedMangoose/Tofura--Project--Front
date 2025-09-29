import React from 'react'

type Props = {
  value: any;
  spanKey: string;
  classNameValues: any;
  onClick: (arg: any) => void;
  onFocus?: () => void;
  isChoosed: boolean;
  childIndex: number;
  optionTextAreaType?: string; // New prop to differentiate between text and placeholder
  templateState?: any; // Optional prop for template state
};


const Placeholder = (props: Props) => {
  return (
    <div
      className={`h-[50px] w-auto min-w-fit ${
        !props.isChoosed && "cursor-pointer"
      } relative `}
    >
      {!props.isChoosed && (
        <div
          className="absolute w-full h-full  hover:bg-[#21113a7c]"
          onClick={props.onClick}
        ></div>
      )}
      <div
        key={props.spanKey}
        
        onClick={(e: React.MouseEvent<HTMLSpanElement>) => {
          e.stopPropagation();
        }}
        style={{
          fontSize: props.classNameValues?.fontSize
            ? `${props.classNameValues.fontSize}px`
            : "16px",
          fontWeight: props.classNameValues?.fontStyle?.bold
            ? "bold"
            : "normal",
          fontStyle: props.classNameValues?.fontStyle?.italic
            ? "italic"
            : "normal",
          textDecoration: props.classNameValues?.fontStyle?.underline
            ? "underline"
            : "",
          fontFamily:
            props.classNameValues?.fontFamily || "Arial, Helvetica, sans-serif",
          color: props.classNameValues?.fontColor || "#000000",
          backgroundColor: props.classNameValues?.bgColor || "transparent",
        }}
        className={`h-full  flex items-center  border-b-2 ${
          props.isChoosed && "border-sidebarChoose"
        } px-2  py-1 min-w-[20px] max-w-full  whitespace-pre-wrap break-words`}
      > Placeholder </div>
    </div>
  );
}

export default Placeholder