import React, { useEffect, useState } from "react";

const AddNewUser: React.FC = () => {
  const [statesOfSelect, setStateOfSelect] = useState([
    {
      name: "მიუთითეთ დაშვების დონე",
      firstOption: "დაშვების დონე",
      controller: true,
      state: [],
    },
    {
      name: "მიუთითეთ დეპარტამენტი",
      firstOption: "დეპარტამენტი",
      controller: false,
      state: [],
    },
    {
      name: "მიუთითეთ სამართველო",
      firstOption: "სამართველო",

      controller: false,
      state: [],
    },
    {
      name: "მიუთითეთ განყოფილება",
      firstOption: "განყოფილება",
      controller: false,
      state: [],
    },
  ]);

  useEffect(() => {}, []);
  const handleChange = (arg: string, index?: number) => {
    if (index) {
      setStateOfSelect((prev) => {
        const values = [...prev];
        values[index].controller = true;
        return values;
      });
    }
  };

  return (
    <div className="w-[450px] fixed right-0  h-1/2 flex flex-col ">
      <header className="w-full h-10% bg-sidebarChoose rounded-tl-2xl rounded-tr-2xl flex justify-center items-center text-white font-semibold shadow-bottom">
        ახალი მომხმარებლის დამატება
      </header>
      <main className="w-full h-90% text-sm bg-[#d4d0d0]     flex    ">
        <div className="w-full h-80% flex-col flex  items-center overflow-y-auto">
          <div className="w-80% min-h-[100px]  flex justify-center items-center flex-col">
            <p className="w-full">შეიყვანეთ მომხმარებლის სახელი და გვარი</p>
            <input
              className="w-full h-[50px]  bg-white rounded-md text-sm"
              placeholder="...სახელი გვარი"
            />
          </div>
          {statesOfSelect.map((values, index) => (
            <div
              key={index}
              className="w-80% min-h-[100px]  flex justify-center items-center flex-col"
            >
              <p>{values.name}</p>
              <select
                className="w-full min-h-[50px]  bg-white rounded-md"
                id="LevelDropdown"
                name="options"
                disabled={!values.controller}
                onChange={(e) =>
                  values.firstOption === "განყოფილება"
                    ? handleChange(e.target.value)
                    : handleChange(e.target.value, index + 1)
                }
              >
                <option disabled>{values.firstOption}</option>
                {statesOfSelect[index].state.map((valuesNd, indexNd) => (
                  <option key={indexNd}>{valuesNd}</option>
                ))}
              </select>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default AddNewUser;
