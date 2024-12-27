import { locations } from "./location.mock";
import camelize from "camelize";

export const locationRequest = (searchText) => {
  return new Promise((resolve, reject) => {
    const locationMock = locations[searchText];
    if (!locationMock) {
      console.log("not found");
      reject("not found");
    }
    // console.log(locationMock);
    resolve(locationMock);
  });
};

export const locationTransform = (results) => {
  const formattedResponse = camelize(results);
  const { geometry = {} } = formattedResponse.results[0];
  const { lat, lng } = geometry.location;

  return { lat, lng, viewport: geometry.viewport };
};
