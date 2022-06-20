import getData from "./space";

export default async  function getMissions () {
  const response = await getData("missions");
  const data = await response.json();
  return data;
}