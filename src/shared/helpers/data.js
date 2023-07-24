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

const processDataKeyValue = (value, func, excludedKeys) => {
  if (Array.isArray(value)) {
    return value.map((item) => processDataKeyValue(item, func, excludedKeys));
  }

  if (!value) {
    return value;
  }

  if (typeof value === 'object' && value !== null) {
    return Object.keys(value).reduce((result, key) => {
      const transformedKey = excludedKeys?.includes(key) ? key : func(key);
      const transformedValue = processDataKeyValue(
        value[key],
        func,
        excludedKeys
      );

      return { ...result, [transformedKey]: transformedValue };
    }, {});
  }

  return value;
};