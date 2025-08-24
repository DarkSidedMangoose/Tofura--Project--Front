import { useEffect, useRef } from "react";

type Props = {
  value: any;
  onChange: (value: any) => void;
  spanKey: string;
  classNameValues: any;
  onClick: () => void;
  onFocus?: () => void;
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
  

  // Handle user input and blur after change
  const handleInput = () => {
    const el = spanRef.current;
    if (el) {
      props.onChange(el.innerText);
      // el.blur(); // remove focus after change
      }
  };

  return (
    <span
      key={props.spanKey}
      ref={spanRef}
      contentEditable
      suppressContentEditableWarning
      onClick={props.onClick}
      onInput={handleInput}
      onFocus={props.onFocus}
      style={{
        fontSize: props.classNameValues?.fontSize
          ? `${props.classNameValues.fontSize}px`
          : "16px",
        fontWeight: props.classNameValues?.fontStyle?.bold ? "bold" : "normal",
        fontStyle: props.classNameValues?.fontStyle?.italic ? "italic" : "normal",
        textDecoration: props.classNameValues?.fontStyle?.underline ? "underline" : "",
      }}
      className="h-[50px]  flex items-center border-b"
    />
  );
};
