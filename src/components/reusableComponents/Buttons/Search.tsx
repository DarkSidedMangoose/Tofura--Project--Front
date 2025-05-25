import { Fragment, memo, useCallback, useState } from "react";

export const Search: React.FC<{identifier: string, onChange: (arg: string) => void}> = memo(({identifier, onChange}) => {
  const [inputValue, setInputValue] = useState<string>("");
  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    onChange(e.target.value);
  }, [onChange]);
  return (
    <Fragment>
      <input
        style={{ transition: "0.3s ease-in-out" }}
        className="w-[50%] min-w-[200px] text-sm h-full rounded-[8px] border-[2px] border-solid border-sidebarChoose focus:outline-none shadow-bottom hover:opacity-70"
        type="text"
        placeholder={
          identifier === "base"
            ? "შეიყვანეთ საძიებო სიტყვა..."
            : "შეიყვანეთ სახელი და გვარი..."
        }
        onChange={handleChange}
        value={inputValue}
      />
    </Fragment>
  );
});