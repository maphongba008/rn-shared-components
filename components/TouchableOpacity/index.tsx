import React, { LegacyRef } from "react";
import {
  TouchableOpacity as RNTouchable,
  TouchableOpacityProps as RNTouchableProps,
} from "react-native";

import { SharedBoxProps, getBoxStyles } from "../Box/Box.props";

export type TouchableOpacityProps = SharedBoxProps & RNTouchableProps;

export const TouchableOpacity = React.forwardRef(
  (props: TouchableOpacityProps, ref: LegacyRef<RNTouchable>) => {
    const styles = getBoxStyles(props);
    return (
      <RNTouchable ref={ref} {...props} style={[styles, props.style]}>
        {props.children}
      </RNTouchable>
    );
  }
);
