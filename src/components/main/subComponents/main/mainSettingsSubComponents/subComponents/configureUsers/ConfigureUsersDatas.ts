import { UsersInterface } from "./ConfigureUsersSubcomponents/ConfigureUsers";
const PropertyNames: (keyof UsersInterface)[] = [
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

export default PropertyNames;
