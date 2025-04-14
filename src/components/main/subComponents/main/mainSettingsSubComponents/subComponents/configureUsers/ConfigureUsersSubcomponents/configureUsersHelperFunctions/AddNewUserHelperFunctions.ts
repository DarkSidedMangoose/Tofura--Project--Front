import DOMPurify from "dompurify";
import {
  StateFetchedData,
  StateOfSelect,
} from "../interfaces/addNewUserFetchingDataInterfaces";

//helper function to define when is disabled select dropdowns and to initialized values
export const helperSetStateOfSelect = (
  prev: StateOfSelect[],
  index: number,
  arg: string,
  statePropOfStateOfSelect: (number | string)[][]
): StateOfSelect[] => {
  const values = [...prev];

  if (index === 0) {
    values[0].value = DOMPurify.sanitize(arg);
    values[1].controller = true;
    values[1].value = "";
    values[2].controller = false;
    values[2].value = "";
    values[3].controller = false;
    values[3].value = "";
  } else if (index === 1) {
    values[1].departmentIdentifier = statePropOfStateOfSelect[1].indexOf(arg);
    values[1].value = DOMPurify.sanitize(arg);
    if (Number(values[0].value) <= 4) {
      values[2].controller = true;
      values[2].value = "";
      values[3].controller = false;
      values[3].value = "";
    } else {
      values[2].controller = false;
      values[2].value = "";
      values[3].controller = false;
      values[3].value = "";
    }
  } else if (index === 2) {
    values[2].value = DOMPurify.sanitize(arg);
    if (Number(values[0].value) === 4) {
      values[3].controller = false;
      values[3].value = "";
    } else {
      values[3].controller = true;
      values[3].value = "";
    }
  } else if (index === 3) {
    values[3].value = DOMPurify.sanitize(arg);
  }

  return values;
};

//Helper Function to handle added desired data to the diversions
export const helperStatePropOfStateOfSelect = (
  prev: any[],
  i: number,
  stateFetchedData: any
) => {
  const values = [...prev];
  values[2] = []; // Reset directorate options
  values[3] = [];

  for (
    let o = 0;
    o < stateFetchedData[0].departments[i].diversions.length;
    o++
  ) {
    const diversion = stateFetchedData[0].departments[i].diversions[o].name;
    values[2].push(diversion); // Add diversion names
  }
  return values;
};

//Helper function to define which sections is need to add in select

export const helperStatePropOfStateOfSelectNd = (
  prev: (number | string)[][],
  stateFetchedData: [] | StateFetchedData[],
  statesOfSelect: StateOfSelect[],
  arg: string
) => {
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
      for (let o = 0; o < currentDepartmentDiversions[i].sections.length; o++) {
        values[3].push(currentDepartmentDiversions[i].sections[o]);
      }

      break;
    }
  }
  return values;
};
