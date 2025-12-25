/**
 * Transform object with string values to number values
 * @param {Record<string, string>}
 * @return {Record<string, number>}
 */
export function transformToNumberValues(
  input: Record<string, string>
): Record<string, number> {
  let obj: Record<string, number> = {};

  Object.entries(input).forEach(([key, val]) => {
    obj[key] = Number(val.replace("px", ""));
  });

  return obj;
}
