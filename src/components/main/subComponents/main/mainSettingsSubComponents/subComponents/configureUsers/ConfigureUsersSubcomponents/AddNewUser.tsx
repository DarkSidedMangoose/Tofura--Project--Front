import axios from "axios";
import React, { useEffect, useState } from "react";
import { StateFetchedData } from "./interfaces/addNewUserFetchingDataInterfaces";

const apiUrl = process.env.REACT_APP_API_BASE_URL;

const AddNewUser: React.FC = () => {
  // State to store fetched data
  const [stateFetchedData, setStateFetchedData] = useState<
    [] | StateFetchedData[]
  >([]);

  // State for storing dropdown selections
  const [statePropOfStateOfSelect, setStatePropOfStateOfSelect] = useState<
    (number | string)[][]
  >([[], [], [], []]);

  // Configuration for dropdown options
  const [statesOfSelect, setStateOfSelect] = useState([
    {
      name: "მიუთითეთ დაშვების დონე", // Access level
      firstOption: "დაშვების დონე", // Placeholder option
      controller: true, // Initially enabled
      state: statePropOfStateOfSelect[0],
      value: "", // Default selected value
    },
    {
      name: "მიუთითეთ დეპარტამენტი", // Department
      firstOption: "დეპარტამენტი", // Placeholder option
      controller: false, // Disabled by default
      state: statePropOfStateOfSelect[1],
      departmentIdentifier: 0,

      value: "",
    },
    {
      name: "მიუთითეთ სამართველო", // Directorate
      firstOption: "სამართველო", // Placeholder option
      controller: false, // Disabled by default
      state: statePropOfStateOfSelect[2],
      value: "",
    },
    {
      name: "მიუთითეთ განყოფილება", // Division
      firstOption: "განყოფილება", // Placeholder option
      controller: false, // Disabled by default
      state: statePropOfStateOfSelect[3],
      value: "",
    },
  ]);

  // Effect to populate dropdowns when data is fetched
  useEffect(() => {
    if (stateFetchedData.length > 0) {
      setStatePropOfStateOfSelect((prev) => {
        const Data = [...prev];
        Data[0] = stateFetchedData[0].levels; // Populate access levels
        Data[1] = [];
        for (var i = 0; i < stateFetchedData[0].departments.length; i++) {
          Data[1].push(stateFetchedData[0].departments[i].name);
        } // Populate departments
        return Data;
      });
    }
  }, [stateFetchedData]);

  // Effect to update statesOfSelect whenever statePropOfStateOfSelect changes
  useEffect(() => {
    setStateOfSelect((prev) =>
      prev.map((item, index) => ({
        ...item,
        state: statePropOfStateOfSelect[index], // Sync state data
      }))
    );
  }, [statePropOfStateOfSelect]);

  // Log dropdown states for debugging
  useEffect(() => {
    console.log(statesOfSelect);
  }, [statesOfSelect]);

  // Fetch structure data from API
  useEffect(() => {
    const RequestStructureData = async () => {
      try {
        const response = await axios.get(
          `${apiUrl}/structureNd/getStructureData`,
          {
            withCredentials: true,
          }
        );
        setStateFetchedData(response.data); // Save fetched data
        console.log("Data fetched successfully");
      } catch (err: any) {
        if (err.response?.status === 401) {
          window.location.href = "/"; // Redirect if unauthorized
        } else {
          console.error("Error while fetching data", err);
        }
      }
    };
    RequestStructureData();
  }, []);

  // Handle changes in dropdowns
  const handleChange = (
    arg: string,
    controllerIndex: number,
    index: number
  ) => {
    setStateOfSelect((prev) => {
      const values = [...prev];
      values[controllerIndex].controller = true; // Enable next dropdown
      values[index].value = arg; // Set selected value
      if (index === 1) {
        values[1].departmentIdentifier =
          statePropOfStateOfSelect[1].indexOf(arg);
      }
      return values;
    });

    // Handle department-specific logic
    if (index === 1) {
      for (var i = 0; i < stateFetchedData[0].departments.length; i++) {
        if (arg === stateFetchedData[0].departments[i].name) {
          setStatePropOfStateOfSelect((prev) => {
            const values = [...prev];
            values[2] = []; // Reset directorate options
            values[3] = [];
            setStateOfSelect((prev) => {
              const result = [...prev];
              result[2].value = "";
              result[3].value = "";
              return result;
            });
            for (
              let o = 0;
              o < stateFetchedData[0].departments[i].diversions.length;
              o++
            ) {
              const diversion =
                stateFetchedData[0].departments[i].diversions[o].name;
              values[2].push(diversion); // Add diversion names
            }
            return values;
          });
          break;
        }
      }
    } else if (index === 2) {
      setStateOfSelect((prev) => {
        const result = [...prev];
        result[3].value = "";
        return result;
      });
      setStatePropOfStateOfSelect((prev) => {
        const values = [...prev];
        values[3] = []; //Reset direcorate options
        const currentDepartmentDiversions =
          stateFetchedData[0].departments[
            statesOfSelect[1].departmentIdentifier
              ? statesOfSelect[1].departmentIdentifier
              : 0
          ].diversions;
        for (var i = 0; i < currentDepartmentDiversions.length; i++) {
          if (currentDepartmentDiversions[i].name === arg) {
            for (
              var o = 0;
              o < currentDepartmentDiversions[i].sections.length;
              o++
            ) {
              values[3].push(currentDepartmentDiversions[i].sections[o]);
            }

            break;
          }
        }
        return values;
      });
    }
  };

  return (
    <div className="w-[450px] fixed right-0 top-0 h-3/4 flex flex-col">
      {/* Header */}
      <header className="w-full h-10% bg-sidebarChoose rounded-tl-2xl rounded-tr-2xl flex justify-center items-center text-white font-semibold shadow-bottom">
        ახალი მომხმარებლის დამატება {/* Add New User */}
      </header>

      {/* Main Content */}
      <main className="w-full h-90% text-sm bg-[#d4d0d0] flex">
        <div className="w-full h-80% flex-col flex items-center overflow-y-auto py-4">
          {/* Input for user name */}
          <div className="w-80% min-h-[100px] flex justify-center items-center flex-col">
            <p className="w-full">შეიყვანეთ მომხმარებლის ავტორიზაციის კოდი</p>
            <input
              className="w-full h-[50px] bg-white rounded-md text-sm"
              placeholder="...ავტორიზაციის კოდი"
            />
          </div>
          <div className="w-80% min-h-[100px] flex justify-center items-center flex-col">
            <p className="w-full">შეიყვანეთ მომხმარებლის პაროლი</p>
            <input
              className="w-full h-[50px] bg-white rounded-md text-sm"
              placeholder="...პაროლი"
            />
          </div>
          <div className="w-80% min-h-[100px] flex justify-center items-center flex-col">
            <p className="w-full">შეიყვანეთ მომხმარებლის სახელი და გვარი</p>
            <input
              className="w-full h-[50px] bg-white rounded-md text-sm"
              placeholder="...სახელი გვარი"
            />
          </div>

          {/* Dropdowns */}
          {statesOfSelect.map((values, index) => (
            <div
              key={index}
              className="w-80% min-h-[100px] flex justify-center items-center flex-col"
            >
              <p>{values.name}</p>
              <select
                className="w-full min-h-[50px] bg-white rounded-md"
                id="LevelDropdown"
                name="options"
                value={values.value} // Default state
                disabled={!values.controller} // Enable based on controller
                onChange={(e) =>
                  values.firstOption === "განყოფილება"
                    ? handleChange(e.target.value, index, index)
                    : handleChange(e.target.value, index + 1, index)
                }
              >
                {/* Placeholder option */}
                <option
                  value=""
                  disabled
                  className="text-gray-500 cursor-not-allowed"
                >
                  {values.firstOption}
                </option>
                {/* Dropdown options */}
                {statesOfSelect[index].state.map((valuesNd, indexNd) => (
                  <option className="" value={valuesNd} key={indexNd}>
                    {valuesNd}
                  </option>
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
