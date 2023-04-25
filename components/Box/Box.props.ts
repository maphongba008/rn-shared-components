import _ from "lodash";

let dimensions = {
  narrow: 4,
  default: 8,
  large: 16,
  extraLarge: 32,
};
const positionBooleanMap = {
  mHorizontal: { flexDirection: "row" },
  mVertical: { flexDirection: "column" },
  mRow: { flexDirection: "row" },
  mColumn: { flexDirection: "column" },
  mFull: { flex: 1 },
  mCenter: { alignItems: "center", justifyContent: "center" },
  mCenterVertical: { alignItems: "center" },
  mAbsoluteFillParent: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
} as const;

const borderBooleanMap = {
  mBorder: { borderWidth: 1 },
  mBorderTop: { borderTopWidth: 1 },
  mBorderBottom: { borderBottomWidth: 1 },
  mBorderLeft: { borderLeftWidth: 1 },
  mBorderRight: { borderRightWidth: 1 },
  mBorderRadius: { borderRadius: 4 },
} as const;

const borderNumberMap = {
  mBorderWidth: "borderWidth",
  mBorderTopWidth: "borderTopWidth",
  mBorderBottomWidth: "borderBottomWidth",
  mBorderLeftWidth: "borderLeftWidth",
  mBorderRightWidth: "borderRightWidth",
} as const;

const spacingBooleanMaps = {
  mMarginTopNarrow: { marginTop: dimensions.narrow },
  mMarginTopDefault: { marginTop: dimensions.default },
  mMarginTopLarge: { marginTop: dimensions.large },
  mMarginTopExtraLarge: { marginTop: dimensions.extraLarge },
  mMarginBottomNarrow: { marginBottom: dimensions.narrow },
  mMarginBottomDefault: { marginBottom: dimensions.default },
  mMarginBottomLarge: { marginBottom: dimensions.large },
  mMarginBottomExtraLarge: { marginBottom: dimensions.extraLarge },
  mMarginLeftNarrow: { marginLeft: dimensions.narrow },
  mMarginLeftDefault: { marginLeft: dimensions.default },
  mMarginLeftLarge: { marginLeft: dimensions.large },
  mMarginLeftExtraLarge: { marginLeft: dimensions.extraLarge },
  mMarginRightNarrow: { marginRight: dimensions.narrow },
  mMarginRightDefault: { marginRight: dimensions.default },
  mMarginRightLarge: { marginRight: dimensions.large },
  mMarginRightExtraLarge: { marginRight: dimensions.extraLarge },
  mMarginHorizontalNarrow: { marginHorizontal: dimensions.narrow },
  mMarginHorizontalDefault: { marginHorizontal: dimensions.default },
  mMarginHorizontalLarge: { marginHorizontal: dimensions.large },
  mMarginHorizontalExtraLarge: { marginHorizontal: dimensions.extraLarge },
  mMarginVerticalNarrow: { marginVertical: dimensions.narrow },
  mMarginVerticalDefault: { marginVertical: dimensions.default },
  mMarginVerticalLarge: { marginVertical: dimensions.large },
  mMarginVerticalExtraLarge: { marginVertical: dimensions.extraLarge },
  mPaddingTopNarrow: { paddingTop: dimensions.narrow },
  mPaddingTopDefault: { paddingTop: dimensions.default },
  mPaddingTopLarge: { paddingTop: dimensions.large },
  mPaddingTopExtraLarge: { paddingTop: dimensions.extraLarge },
  mPaddingBottomNarrow: { paddingBottom: dimensions.narrow },
  mPaddingBottomDefault: { paddingBottom: dimensions.default },
  mPaddingBottomLarge: { paddingBottom: dimensions.large },
  mPaddingBottomExtraLarge: { paddingBottom: dimensions.extraLarge },
  mPaddingLeftNarrow: { paddingLeft: dimensions.narrow },
  mPaddingLeftDefault: { paddingLeft: dimensions.default },
  mPaddingLeftLarge: { paddingLeft: dimensions.large },
  mPaddingLeftExtraLarge: { paddingLeft: dimensions.extraLarge },
  mPaddingRightNarrow: { paddingRight: dimensions.narrow },
  mPaddingRightDefault: { paddingRight: dimensions.default },
  mPaddingRightLarge: { paddingRight: dimensions.large },
  mPaddingRightExtraLarge: { paddingRight: dimensions.extraLarge },
  mPaddingHorizontalNarrow: { paddingHorizontal: dimensions.narrow },
  mPaddingHorizontalDefault: { paddingHorizontal: dimensions.default },
  mPaddingHorizontalLarge: { paddingHorizontal: dimensions.large },
  mPaddingHorizontalExtraLarge: { paddingHorizontal: dimensions.extraLarge },
  mPaddingVerticalNarrow: { paddingVertical: dimensions.narrow },
  mPaddingVerticalDefault: { paddingVertical: dimensions.default },
  mPaddingVerticalLarge: { paddingVertical: dimensions.large },
  mPaddingVerticalExtraLarge: { paddingVertical: dimensions.extraLarge },
} as const;

const spacingNumberMap = {
  mMargin: "margin",
  mMarginTop: "marginTop",
  mMarginBottom: "marginBottom",
  mMarginLeft: "marginLeft",
  mMarginRight: "marginRight",
  mMarginHorizontal: "marginHorizontal",
  mMarginVertical: "marginVertical",
  mPadding: "padding",
  mPaddingTop: "paddingTop",
  mPaddingBottom: "paddingBottom",
  mPaddingLeft: "paddingLeft",
  mPaddingRight: "paddingRight",
  mPaddingHorizontal: "paddingHorizontal",
  mPaddingVertical: "paddingVertical",
} as const;

const stringMap = {
  mBackgroundColor: "backgroundColor",
  mBorderColor: "borderColor",
};

const booleanMap = {
  ...positionBooleanMap,
  ...borderBooleanMap,
  ...spacingBooleanMaps,
};

const numberMap = {
  ...borderNumberMap,
  ...spacingNumberMap,
};

type BooleanProps = keyof typeof booleanMap;
type NumberProps = keyof typeof numberMap;
type StringProps = keyof typeof stringMap;

export type SharedBoxProps = {
  [key in BooleanProps]?: boolean;
} & {
  [key in NumberProps]?: number;
} & {
  [key in StringProps]?: string;
};

export const boxProps = {
  ...booleanMap,
  ...numberMap,
  ...stringMap,
};
