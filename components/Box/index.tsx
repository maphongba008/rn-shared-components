import React, { LegacyRef } from "react";
import { View, ViewProps } from "react-native";

import { SharedBoxProps, boxProps } from "./Box.props";
import { parseStyles } from "../utils";
import _ from "lodash";
export type BoxProps = SharedBoxProps & ViewProps;

export const Box = React.forwardRef((props: BoxProps, ref: LegacyRef<View>) => {
  const styles = parseStyles(props, boxProps);
  const remainProps = _.omit(props, Object.keys(boxProps));
  return (
    <View ref={ref} {...remainProps} style={[styles, props.style]}>
      {props.children}
    </View>
  );
});
