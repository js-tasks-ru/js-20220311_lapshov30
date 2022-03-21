/**
 * createGetter - creates function getter which allows select value from object
 * @param {string} path - the strings path separated by dot
 * @returns {function} - function-getter which allow get value from object by set path
 */
export function createGetter(path) {
  const pathToObj = path.split('.');
  return (obj) => {
    if (typeof (obj) === 'object') {
      while (pathToObj.length > 0) {
        const j = pathToObj.shift();
        if (j in obj) {
          obj = obj[j];
        } else {
          return undefined;
        }
      }
      return obj;
    }
  };
}
