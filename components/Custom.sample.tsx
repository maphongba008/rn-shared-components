import React from "react";
import { parseStyles } from "./utils";
import { Text } from "react-native";

const booleanPropsMapping = {
  primaryText: (theme) => ({ color: theme.primary }),
};

const numberPropsMapping = {
  fontSize: (theme) => ({ fontSize: theme.fontSize }),
};

type Props2 = {
  [key in keyof typeof booleanPropsMapping]: boolean;
} & {
  [key in keyof typeof numberPropsMapping]: number;
};

// sample
const useTheme = () => {
  return {
    primary: "red",
  };
};

export const MyCustomText = (props: Props2) => {
  const style = parseStyles(
    props,
    { ...booleanPropsMapping, ...numberPropsMapping },
    useTheme()
  );
  return <Text style={style}></Text>;
};
