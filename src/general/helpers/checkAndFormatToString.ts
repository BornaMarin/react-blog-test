const checkAndFormatToString = (value: string | number): string => {
  if (!value) return "";
  return value.toString();
};

export default checkAndFormatToString;
