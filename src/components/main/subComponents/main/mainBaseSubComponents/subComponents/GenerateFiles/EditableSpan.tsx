import { useEffect, useRef } from "react";

type Props = {
    value: any,
    onChange: (value: any) => void,
    spanKey: string,
  classNameValues: any,
    onClick: () => void
}
export const EditableSpan:React.FC<Props> = (props) => {
  const spanRef = useRef<HTMLSpanElement | null>(null);

    
  // Hydrate DOM when value changes
  useEffect(() => {
    const el = spanRef.current;
    if (el && el.innerText !== props.value) {
      el.innerText = props.value;
    }
  }, [props.value]);

  // Handle user input
    const handleInput = () => {
        const el = spanRef.current;
        console.log(el?.innerText);
    if (el) {
      props.onChange(el.innerText);
    }
  };

  return (
    <span
      key={props.spanKey}
      onClick = {props.onClick}
      ref={spanRef}
      contentEditable
      suppressContentEditableWarning
          onInput={handleInput}
          style={{fontSize: props.classNameValues?.fontSize
    ? `${props.classNameValues.fontSize}px`
              : '16px',
            fontWeight: props.classNameValues?.fontStyle?.bold ? 'bold' : 'normal',
            fontStyle: props.classNameValues?.fontStyle?.italic ? 'italic' : 'normal',
            textDecoration: props.classNameValues?.fontStyle?.underline ? 'underline' : ''}}
      className="h-[50px] w-auto min-w-[50px] flex  items-center  border-b"
    />
  );
}