import { UsersInterface } from "../../ConfigureUsers";
export const PropertyNames: (keyof UsersInterface)[] = [
  "fullname",
  "position",
  "department",
  "diversion",
  "section",
  "level",
  "status",
];

export const ValuesOfHeader = [
  "№",
  "სახელი",
  "პოზიცია",
  "დეპარტამენტი",
  "სამართველო",
  "განყოფილება",
  "დაშვების დონე",
  "სტატუსი",
];

// userInputsOptions

export const StateOfUsersInputs = [
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
];

// select dropdowns options

export const StatesOfSelect = (arg: (number | string)[][]) => [
  {
    name: "მიუთითეთ დაშვების დონე", // Access level
    firstOption: "დაშვების დონე", // Placeholder option
    controller: true, // Initially enabled
    state: arg[0],
    value: "", // Default selected value
  },
  {
    name: "მიუთითეთ დეპარტამენტი", // Department
    firstOption: "დეპარტამენტი", // Placeholder option
    controller: false, // Disabled by default
    state: arg[1],
    departmentIdentifier: 0,
    value: "",
  },
  {
    name: "მიუთითეთ სამართველო", // Directorate
    firstOption: "სამართველო", // Placeholder option
    controller: false, // Disabled by default
    state: arg[2],
    value: "",
  },
  {
    name: "მიუთითეთ განყოფილება", // Division
    firstOption: "განყოფილება", // Placeholder option
    controller: false, // Disabled by default
    state: arg[3],
    value: "",
  },
];
