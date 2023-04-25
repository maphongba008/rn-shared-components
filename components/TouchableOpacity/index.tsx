import React, { LegacyRef } from "react";
import {
  TouchableOpacity as RNTouchable,
  TouchableOpacityProps as RNTouchableProps,
} from "react-native";

import { SharedBoxProps, boxProps } from "../Box/Box.props";
import { parseStyles } from "../utils";
import _ from "lodash";

export type TouchableOpacityProps = SharedBoxProps & RNTouchableProps;

export const TouchableOpacity = React.forwardRef(
  (props: TouchableOpacityProps, ref: LegacyRef<RNTouchable>) => {
    const styles = parseStyles(props, boxProps);
    const remainProps = _.omit(props, Object.keys(boxProps));
    return (
      <RNTouchable ref={ref} {...remainProps} style={[styles, props.style]}>
        {props.children}
      </RNTouchable>
    );
  }
);
