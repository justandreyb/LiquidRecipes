export const getCurrentDate = () => {
  const currentDate = new Date();
  return "Last Sync: " + currentDate.getDay() + "/"+currentDate.getMonth()
    + "/" + currentDate.getFullYear() + " @ "
    + currentDate.getHours() + ":"
    + currentDate.getMinutes() + ":" + currentDate.getSeconds();
};
