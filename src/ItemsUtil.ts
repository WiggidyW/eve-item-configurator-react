export function prettifyObj(jsonObj: any): string {
  const jsonPretty = JSON.stringify(jsonObj, null, 2);
  return jsonPretty;
}

export function prettifyStr(jsonStr: string): string {
  const jsonObj = JSON.parse(jsonStr);
  return prettifyObj(jsonObj);
}
