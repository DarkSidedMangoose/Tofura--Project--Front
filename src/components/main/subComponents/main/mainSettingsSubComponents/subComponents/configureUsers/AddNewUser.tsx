import React from "react";

const AddNewUser: React.FC = () => {
  return (
    <div className="w-1/2 h-90% rounded-2xl  shadow-boxShadow flex flex-col items-center    bg-white">
      <header className="w-full h-10% bg-sidebarChoose rounded-tl-2xl rounded-tr-2xl flex justify-center items-center text-white font-semibold">
        ახალი შტატის კონფიგურაცია
      </header>
      <main className="w-95% h-70% bg-loginBackground mt-[7%]  shadow-boxShadow">
        <article className="w-1/2 h-1/4  flex justify-center  flex-col rounded-lg gap-[5%] ml-[5%] ">
          <div className="w-1/2 justify-center flex items-center">
            <p className="">სრული სახელი:</p>
          </div>
          <input
            type="text"
            className="border-[1px] h-1/4 border-sidebarChoose rounded-lg w-1/2 text-sm"
          />
        </article>
      </main>
    </div>
  );
};

export default AddNewUser;

export const AddNewUserHeader: React.FC = () => {
  return (
    <header className="w-full h-10% bg-sidebarChoose rounded-tl-2xl rounded-tr-2xl flex justify-center items-center text-white font-semibold">
      მომხმარებლების კონფიგურაცია
    </header>
  );
};
