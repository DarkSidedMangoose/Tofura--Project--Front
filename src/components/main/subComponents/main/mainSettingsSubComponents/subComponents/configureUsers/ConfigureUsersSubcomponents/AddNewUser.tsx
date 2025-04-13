import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import { StateFetchedData } from "./interfaces/addNewUserFetchingDataInterfaces";
import DOMPurify from "dompurify";
const apiUrl = process.env.REACT_APP_API_BASE_URL;

const AddNewUser: React.FC<{ onClickClose: () => void }> = ({
  onClickClose,
}) => {
  // State to store fetched data
  const [stateFetchedData, setStateFetchedData] = useState<
    [] | StateFetchedData[]
  >([]);

  // State for storing dropdown selections
  const [statePropOfStateOfSelect, setStatePropOfStateOfSelect] = useState<
    (number | string)[][]
  >([[], [], [], []]);

  const [stateOfUsersInputs, setStateOfUsersInputs] = useState([
    {
      name: "მომხმარებლის ავტორიზაციის კოდი",
      placeholder: "...ავტორიზაციის კოდი",
      value: "",
    },
    {
      name: "მომხმარებლის პაროლი",
      placeholder: "...პაროლი",
      value: "",
    },
    {
      name: "მომხმარებლის სახელი და გვარი",
      placeholder: "...სახელი გვარი",
      value: "",
    },
  ]);

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

  useEffect(() => {
    if (stateFetchedData.length > 0) {
      setStatePropOfStateOfSelect((prev) => {
        const Data = [...prev];
        Data[0] = stateFetchedData[0].levels; // Populate access levels
        Data[1] = [];
        for (let i = 0; i < stateFetchedData[0].departments.length; i++) {
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
      values[1].controller = true;
      // to make logic which define auto configuration of access which is above 4level or which is equal 4 that logic disable in that kind specific select options because they are auto configurable
      if (Number(values[0].value) < 4) {
        values[controllerIndex].controller = true;
      } else {
        if (Number(values[0].value) === 4) {
          if (index === 1) {
            values[2].controller = true;
          } else if (index === 2) {
            values[3].controller = false;
          }
        } else {
          values[2].controller = false;
        }
        values[3].controller = false;
      }
      // to make logic which define when change level to make empty the values
      if (index === 0) {
        values[1].value = "";
        values[2].controller = false;
        values[2].value = "";
        values[3].controller = false;
        values[3].value = "";
      }
      values[index].value = DOMPurify.sanitize(arg); // Set selected value

      if (index === 1) {
        values[1].departmentIdentifier =
          statePropOfStateOfSelect[1].indexOf(arg);
      }
      return values;
    });

    // Handle department-specific logic

    if (index === 1) {
      for (let i = 0; i < stateFetchedData[0].departments.length; i++) {
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
        for (let i = 0; i < currentDepartmentDiversions.length; i++) {
          if (currentDepartmentDiversions[i].name === arg) {
            for (
              let o = 0;
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

  //close component
  const handleClose = useCallback(
    (arg: boolean) => {
      if (!arg) {
        onClickClose();
      }
    },
    [onClickClose]
  );

  const onSubmitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await axios.post(
        `${apiUrl}/users/addUsers`,
        {
          fullname: stateOfUsersInputs[2].value,
          username: stateOfUsersInputs[0].value,
          passwordHash: stateOfUsersInputs[1].value,
          level: statesOfSelect[0].value,
          department: statesOfSelect[1].value,
          diversion: statesOfSelect[2].value,
          section: statesOfSelect[3].value,
        },
        { withCredentials: true }
      );

      console.log("user Added succefully");
      onClickClose();
    } catch (err: any) {
      // Chek if the error is 401(unauthorized) and if it is then redirect to login page
      if (err.response.status === 401) {
        window.location.href = "/";
      } else {
        console.error("Error creating tasks:", err);
      }
    }
  };

  return (
    <div className="w-[450px] fixed right-0 top-0 h-3/4 flex flex-col">
      {/* Header */}
      <header className="w-full h-10% bg-sidebarChoose rounded-tl-2xl rounded-tr-2xl flex justify-center items-center text-white font-semibold shadow-bottom">
        ახალი მომხმარებლის დამატება {/* Add New User */}
      </header>

      {/* Main Content */}
      <form
        onSubmit={onSubmitHandler}
        className="w-full h-90% text-sm bg-[#d4d0d0] flex flex-col"
      >
        <div className="w-full h-80% flex-col flex items-center overflow-y-auto py-4">
          {stateOfUsersInputs.map((props, index) => (
            <div className="w-80% min-h-[100px] flex justify-center items-center flex-col">
              <p className="w-full font-semibold">{props.name}</p>
              <input
                className="w-full h-[50px] bg-white rounded-md text-sm px-2"
                placeholder={props.placeholder}
                value={props.value}
                onChange={(e) =>
                  setStateOfUsersInputs((prev) => {
                    const a = [...prev];
                    a[index].value = DOMPurify.sanitize(e.target.value);
                    return a;
                  })
                }
              />
            </div>
          ))}
          {/* Input for user name */}

          {/* Dropdowns */}
          {statesOfSelect.map((values, index) => (
            <div
              key={index}
              className="w-80% min-h-[100px] flex justify-center  flex-col"
            >
              <p className="font-semibold">{values.name}</p>
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
        <div className="w-full h-20% flex justify-end items-center gap-[5%] font-semibold">
          <button
            className="w-auto h-1/2 px-10 rounded-lg bg-sidebarChoose text-white cursor-not-allowed opacity-40"
            type="submit"
          >
            დამატება
          </button>
          <button
            onClick={() => handleClose(false)}
            className="w-auto h-1/2 px-8 rounded-lg bg-sidebarChoose text-white"
          >
            გაუქმება
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddNewUser;
