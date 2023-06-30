import { checkAndFormatToString } from "./index";

const formatOwnerUsername = (value: string): string => {
  const newValue = checkAndFormatToString(value);
  return "@" + newValue;
};

export default formatOwnerUsername;
