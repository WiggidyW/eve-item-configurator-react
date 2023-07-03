const prettifyObj = (obj: any): string => {
  const objSorted = newObjSorted(obj);
  const jsonPretty = JSON.stringify(objSorted, null, 2);
  return jsonPretty;
};

const prettifyStr = (str: string): string => {
  const obj = JSON.parse(str);
  return prettifyObj(obj);
};

// Returns obj with sorted keys if non-array object
// Otherwise, returns obj as-is
const newObjSorted = (obj: any) => {
  if (typeof obj !== "object" || obj === null || Array.isArray(obj)) return obj;
  return Object.keys(obj)
    .sort()
    .reduce((sortedObj: any, key) => {
      sortedObj[key] = obj[key];
      return sortedObj;
    }, {});
};

export { prettifyObj, prettifyStr };
