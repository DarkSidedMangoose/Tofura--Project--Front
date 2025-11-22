import React, { Fragment} from 'react'
import Settings from "../../../../../../../../assets/images/main/settings.webp";
import Leave from "../../../../../../../../assets/images/main/delete.webp";

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
  onClickPlaceholder: () => void;
};


const Placeholder = (props: Props) => {


  return (
    <Fragment>
      <div
        className={`h-[50px] flex justify-between items-center bg-[#f3f4f6] px-2 w-[160px]  ${
          !props.isChoosed && "cursor-pointer"
        } relative `}
      >
        {!props.isChoosed && (
          <div
            className="absolute w-full flex justify-center items-center h-full  hover:bg-[#21113a7c]"
            onClick={props.onClick}
          ></div>
        )}
        <div
          
          key={props.spanKey}
          onClick={(e: React.MouseEvent<HTMLSpanElement>) => {
            e.stopPropagation()
            props.onClickPlaceholder();
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
              props.classNameValues?.fontFamily ||
              "Arial, Helvetica, sans-serif",
            color: props.classNameValues?.fontColor || "#000000",
            backgroundColor: props.classNameValues?.bgColor || "transparent",
          }}
          className={`h-full  flex items-center justify-between   border-b-2  ${
            props.isChoosed && "border-sidebarChoose"
          }  min-w-[20px] max-w-full  whitespace-pre-wrap break-words`}
        >
          Placeholder
        </div>
        <div className="w-auto h-full flex justify-between gap-2 items-center">
          <img
          alt='Settings'
            className="h-3/5 bg-sidebarChoose rounded-2xl cursor-pointer hover:opacity-80"
            src={Settings}
          />
        </div>
      </div>
      <img
        alt='Leave'
        className="h-[40px] bg-sidebarChoose rounded-2xl cursor-pointer hover:opacity-80"
        src={Leave}
      />
    </Fragment>
  );
}

export default Placeholder