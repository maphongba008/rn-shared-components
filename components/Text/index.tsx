import React, { LegacyRef } from "react";
import { TextProps as RNTextProps, View, Text as RNText } from "react-native";

import { SharedTextProps } from "./Text.props";
import { parseStyles } from "../utils";
import { textProps } from "./Text.props";
import { boxProps } from "../Box/Box.props";
import _ from "lodash";

export type TextProps = SharedTextProps & RNTextProps;

export const Text = React.forwardRef(
  (props: TextProps, ref: LegacyRef<View>) => {
    const sharedProps = { ...textProps, ...boxProps };
    const styles = parseStyles(props, sharedProps);
    const remainProps = _.omit(props, Object.keys(sharedProps));
    return (
      <RNText ref={ref} {...remainProps} style={[styles, props.style]}>
        {props.children}
      </RNText>
    );
  }
);

export * from "./Text.props";
