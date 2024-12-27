import * as Device from "expo-device";
import * as SecureStore from "expo-secure-store";
import { v4 as uuidv4 } from "uuid";
import { getRandomBytes } from "expo-random";

// Function to fetch or generate a device ID
export const getDeviceId = async () => {
  let deviceId = await SecureStore.getItemAsync("deviceId");

  // If no device ID is found, generate a new one and store it securely
  if (!deviceId) {
    deviceId = generateUUID(); // Generate a new unique ID
    await SecureStore.setItemAsync("deviceId", deviceId); // Store it securely in SecureStore
  }

  return deviceId;
};

const generateUUID = () => {
  const randomValues = getRandomBytes(16); // Generate 16 random bytes
  // Convert bytes to a hexadecimal string for UUID format
  const uuid = [
    randomValues.slice(0, 4).toString("hex"),
    randomValues.slice(4, 6).toString("hex"),
    randomValues.slice(6, 8).toString("hex"),
    randomValues.slice(8, 10).toString("hex"),
    randomValues.slice(10, 16).toString("hex"),
  ].join("-");
  return uuid;
};

// You can also return additional device information
export const getDeviceInfo = async () => {
  const deviceId = await getDeviceId(); // Get the device ID
  const deviceInfo = {
    deviceId,
    isDevice: Device.isDevice, // true if running on a real device
    deviceName: Device.deviceName, // Device name (e.g., iPhone, Pixel)
    deviceType: Device.deviceType, // Type of device (e.g., phone, tablet)
    osName: Device.osName, // OS name (e.g., iOS, Android)
    osVersion: Device.osVersion, // OS version (e.g., 14.0)
    modelName: Device.modelName, // Model name (e.g., iPhone 12, Pixel 4)
  };

  return deviceInfo;
};
