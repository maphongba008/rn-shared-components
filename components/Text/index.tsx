import React, { LegacyRef } from "react";
import { TextProps as RNTextProps, View, Text as RNText } from "react-native";

import { SharedTextProps, getTextStyles } from "./Text.props";

export type TextProps = SharedTextProps & RNTextProps;

export const Text = React.forwardRef(
  (props: TextProps, ref: LegacyRef<View>) => {
    const styles = getTextStyles(props);
    return (
      <RNText ref={ref} {...props} style={[styles, props.style]}>
        {props.children}
      </RNText>
    );
  }
);

export { getTextStyles };
