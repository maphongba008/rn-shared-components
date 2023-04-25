import _ from "lodash";

export const parseStyles = (
  props: any,
  objMapping: { [key: string]: any },
  data?: any
) => {
  const mMap = new Map(Object.entries(objMapping));
  const styles: any[] = [];
  Object.entries(props).forEach(([key, value]) => {
    if (!mMap.has(key)) {
      return;
    }
    const mValue = mMap.get(key);
    if (typeof value === "boolean" && !!value) {
      if (typeof mValue === "function") {
        styles.push(mMap.get(key)(data));
      } else {
        styles.push(mMap.get(key));
      }

      return;
    }
    if (typeof value === "number" || typeof value === "string") {
      styles.push({ [mMap.get(key) as string]: value });
      return;
    }
  });
  return _.merge({}, ...styles);
};
