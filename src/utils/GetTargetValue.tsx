const GetTargetValue = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): string => {
  return e.target.value;
};

export default GetTargetValue;
