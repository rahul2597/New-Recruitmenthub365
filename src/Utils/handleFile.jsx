export const handleFileNameChange = (event, setFileNameFun) => {
  const file = event?.target?.files[0];
  if (file) {
    setFileNameFun(file.name);
  } else {
    setFileNameFun("");
  }
};