export const arrayHasDuplicates = (array) => {
  return new Set(array).size !== array.length;
};
