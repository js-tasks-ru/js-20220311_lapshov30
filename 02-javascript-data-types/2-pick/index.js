/**
 * pick - Creates an object composed of the picked object properties:
 * @param {object} obj - the source object
 * @param {...string} fields - the properties paths to pick
 * @returns {object} - returns the new object
 */
export const pick = (obj, ...fields) => {
  let newArr = Object.entries(obj);

  let j = fields.map((item) => {
    let result = [];
    newArr.map((itemArr) => {
      let isNecessary = itemArr.some(itemSome => itemSome === item);

      if (isNecessary) {
        result = itemArr;
      }
    });
    return result;
  });

  let newObj = Object.fromEntries(
    j
  );

  for (let item in newObj) {
    if (item === 'undefined') {
      console.error(`Введите корректное значение для obj`);
    }
  }

  return newObj;
};
