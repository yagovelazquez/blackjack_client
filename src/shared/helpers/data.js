import { camelCase, snakeCase } from 'lodash';

export const camelizeData = (data, excludedKeys) => {
  if (Array.isArray(data)) {
    return data.map((item) => camelizeData(item, excludedKeys));
  }

  const camelizedData = processDataKeyValue(data, camelCase, excludedKeys);
  return camelizedData;
};

export const snakizeData = (data, excludedKeys) => {
  if (Array.isArray(data)) {
    return data.map((item) => snakizeData(item, excludedKeys));
  }

  const snakizedData = processDataKeyValue(data, snakeCase, excludedKeys);
  return snakizedData;
};

const processDataKeyValue = (data, processFunc, excludedKeys) => {
  const processedData = {};
  for (const key in data) {
    if (data.hasOwnProperty(key)) {
      const processedKey = excludedKeys?.includes(key) ? key : processFunc(key);
      processedData[processedKey] = data[key];
    }
  }
  return processedData;
};
