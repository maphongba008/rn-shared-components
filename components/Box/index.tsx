import React, { LegacyRef } from "react";
import { View, ViewProps } from "react-native";

import { SharedBoxProps, getBoxStyles } from "./Box.props";

export type BoxProps = SharedBoxProps & ViewProps;

export const Box = React.forwardRef((props: BoxProps, ref: LegacyRef<View>) => {
  const styles = getBoxStyles(props);
  return (
    <View ref={ref} {...props} style={[styles, props.style]}>
      {props.children}
    </View>
  );
});

export { getBoxStyles };
