import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import {
  StateFetchedData,
  StateOfSelect,
} from "./interfaces/addNewUserFetchingDataInterfaces";
import DOMPurify from "dompurify";
import {
  helperSetStateOfSelect,
  helperStatePropOfStateOfSelect,
  helperStatePropOfStateOfSelectNd,
} from "./configureUsersHelperFunctions/AddNewUserHelperFunctions";
import {
  StateOfUsersInputs,
  StatesOfSelect,
} from "./configureUsersDatas/ConfigureUsersDatas";
import { useDispatch } from "react-redux";
import { setConfigureUsersHeaderButOptions } from "../../../../../../../../redux/reducers/ConfigureUsersHeaderButOptions";
const apiUrl = process.env.REACT_APP_API_BASE_URL;

const AddNewUser: React.FC<{ handleAddUserClose: () => void }> = ({
  handleAddUserClose,
}) => {
  const dispatch = useDispatch();

  // States
  const [stateFetchedData, setStateFetchedData] = useState<
    [] | StateFetchedData[]
  >([]); // Fetched data from API
  const [statePropOfStateOfSelect, setStatePropOfStateOfSelect] = useState<
    (number | string)[][]
  >([[], [], [], []]); // Dropdown options
  const [stateOfUsersInputs, setStateOfUsersInputs] =
    useState(StateOfUsersInputs); // User input fields
  const [statesOfSelect, setStateOfSelect] = useState<StateOfSelect[]>(
    StatesOfSelect(statePropOfStateOfSelect)
  ); // Dropdown states

  // Effect to populate dropdown options when data is fetched
  useEffect(() => {
    if (stateFetchedData.length > 0) {
      setStatePropOfStateOfSelect((prev) => {
        const values = [...prev];
        values[0] = stateFetchedData[0].levels; // Populate access levels
        values[1] = stateFetchedData[0].departments.map((dept) => dept.name); // Populate departments
        return values;
      });
    }
  }, [stateFetchedData]);

  // Effect to synchronize dropdown options with their states
  useEffect(() => {
    setStateOfSelect((prev) =>
      prev.map((item, index) => ({
        ...item,
        state: statePropOfStateOfSelect[index], // Attach the corresponding options
      }))
    );
  }, [statePropOfStateOfSelect]);

  // Fetch structure data from API when the component mounts
  useEffect(() => {
    const RequestStructureData = async () => {
      try {
        const response = await axios.get(
          `${apiUrl}/structureNd/getStructureData`,
          {
            withCredentials: true,
          }
        );
        setStateFetchedData(response.data); // Save the fetched data
        console.log("Data fetched successfully");
      } catch (err: any) {
        if (err.response?.status === 401) {
          window.location.href = "/"; // Redirect if unauthorized
        } else {
          console.error("Error fetching data", err);
        }
      }
    };
    RequestStructureData();
  }, []);

  // Handle changes in dropdowns
  const handleChange = (arg: string, index: number) => {
    setStateOfSelect((prevState) => {
      return helperSetStateOfSelect(
        prevState,
        index,
        arg,
        statePropOfStateOfSelect
      );
    });

    // Update department-specific dropdowns
    if (index === 1) {
      for (let i = 0; i < stateFetchedData[0].departments.length; i++) {
        if (arg === stateFetchedData[0].departments[i].name) {
          setStatePropOfStateOfSelect((prev) => {
            return helperStatePropOfStateOfSelect(prev, i, stateFetchedData); // Populate diversions
          });
          break;
        }
      }
    } else if (index === 2) {
      //Update diversion specific dropdowns
      setStatePropOfStateOfSelect((prev) => {
        return helperStatePropOfStateOfSelectNd(
          prev,
          stateFetchedData,
          statesOfSelect,
          arg
        ); // Populate divisions
      });
    }
  };

  // Close the component and notify the parent
  const handleClose = useCallback(() => {
    handleAddUserClose();
    dispatch(
      setConfigureUsersHeaderButOptions({
        show: false,
        identifier: "AddButton",
      })
    );
  }, []);

  // Submit user data to the server
  const onSubmitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await axios.post(
        `${apiUrl}/users/addUsers`,
        {
          fullname: stateOfUsersInputs[2].value, // User's full name
          username: stateOfUsersInputs[0].value, // Authorization code
          passwordHash: stateOfUsersInputs[1].value, // Password
          level: statesOfSelect[0].value, // Access level
          department: statesOfSelect[1].value, // Department
          diversion: statesOfSelect[2].value, // Diversion
          section: statesOfSelect[3].value, // Division
        },
        { withCredentials: true }
      );
      handleClose(); // Close the component after successful submission
    } catch (err: any) {
      if (err.response?.status === 401) {
        window.location.href = "/"; // Redirect if unauthorized
      } else {
        console.error("Error submitting data:", err);
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
              <label htmlFor={`${props.name}`} className="w-full font-semibold">
                {props.name}
              </label>
              <input
                id={`${props.name}`}
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
              <label htmlFor={`${values.name}`} className="font-semibold">
                {values.name}
              </label>
              <select
                id={`${values.name}`}
                className="w-full min-h-[50px] bg-white rounded-md"
                name="options"
                value={values.value} // Default state
                disabled={!values.controller} // Enable based on controller
                onChange={(e) =>
                  values.firstOption === "განყოფილება"
                    ? handleChange(e.target.value, index)
                    : handleChange(e.target.value, index)
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
        <div className="w-full h-20% flex justify-end items-center gap-[5%] font-semibold shadow-bottom-right">
          <button
            className="w-auto h-1/2 px-10 rounded-lg bg-sidebarChoose text-white cursor-not-allowed opacity-40"
            type="submit"
          >
            დამატება
          </button>
          <button
            onClick={() => handleClose()}
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
