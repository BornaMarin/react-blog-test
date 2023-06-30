import { checkAndFormatToString } from "./index";

const capitalize = (value: string) => {
  const newValue = checkAndFormatToString(value);
  return newValue.charAt(0).toUpperCase() + newValue.slice(1);
};

export default capitalize;
