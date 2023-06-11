import { JsonString, JsonObject } from "./TypeUtil";

function prettifyObj(jsonObject: JsonObject): JsonString {
  const jsonPretty = JSON.stringify(jsonObject, null, 2);
  return jsonPretty;
}

function prettifyStr(jsonString: JsonString): JsonString {
  const jsonObject = JSON.parse(jsonString);
  return prettifyObj(jsonObject);
}

export { prettifyObj, prettifyStr };
