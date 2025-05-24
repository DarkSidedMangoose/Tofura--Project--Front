import { Fragment, memo } from "react";

export const Search: React.FC = memo(() => {
  return (
    <Fragment>
      <input
        style={{ transition: "0.3s ease-in-out" }}
        className="w-[50%] min-w-[200px] text-sm h-full rounded-[8px] border-[2px] border-solid border-sidebarChoose focus:outline-none shadow-bottom hover:opacity-70"
        type="text"
        placeholder="შეიყვანეთ საძიებო სიტყვა..."
      />
    </Fragment>
  );
});