import * as SecureStore from "expo-secure-store";

async function save(key, value) {
  console.log(key, value);
  await SecureStore.setItemAsync(key, value);
}

async function getValueFor(key) {
  let result = await SecureStore.getItemAsync(key);
  console.log(result);
  return result;
}

export { getValueFor, save };
