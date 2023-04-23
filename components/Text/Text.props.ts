import { SharedBoxProps, getBoxStyles } from "../Box/Box.props";
import _ from "lodash";
const textBooleanMap = {
  mBold: { fontWeight: "bold" },
  mItalic: { fontStyle: "italic" },
  mUnderline: { textDecorationLine: "underline" },
  mStrike: { textDecorationLine: "line-through" },
  mCapitalize: { textTransform: "capitalize" },
  mUppercase: { textTransform: "uppercase" },
  mLowercase: { textTransform: "lowercase" },
  // font size
  mFont10: { fontSize: 10 },
  mFont12: { fontSize: 12 },
  mFont14: { fontSize: 14 },
  mFont16: { fontSize: 16 },
  mFont18: { fontSize: 18 },
  mFont20: { fontSize: 20 },
  mFont22: { fontSize: 22 },
  mFont24: { fontSize: 24 },
  mFont26: { fontSize: 26 },
  mFont28: { fontSize: 28 },
  mFont30: { fontSize: 30 },
  mFont32: { fontSize: 32 },
  mFont34: { fontSize: 34 },
  mFont36: { fontSize: 36 },
  mFont38: { fontSize: 38 },
  mFont40: { fontSize: 40 },
  // font weight
  mFontWeight100: { fontWeight: "100" },
  mFontWeight200: { fontWeight: "200" },
  mFontWeight300: { fontWeight: "300" },
  mFontWeight400: { fontWeight: "400" },
  mFontWeight500: { fontWeight: "500" },
  mFontWeight600: { fontWeight: "600" },
  mFontWeight700: { fontWeight: "700" },
  mFontWeight800: { fontWeight: "800" },
  mFontWeight900: { fontWeight: "900" },
  // line height
  mLineHeight10: { lineHeight: 10 },
  mLineHeight12: { lineHeight: 12 },
  mLineHeight14: { lineHeight: 14 },
  mLineHeight16: { lineHeight: 16 },
  mLineHeight18: { lineHeight: 18 },
  mLineHeight20: { lineHeight: 20 },
  mLineHeight22: { lineHeight: 22 },
  mLineHeight24: { lineHeight: 24 },
  mLineHeight26: { lineHeight: 26 },
  mLineHeight28: { lineHeight: 28 },
  mLineHeight30: { lineHeight: 30 },
  mLineHeight32: { lineHeight: 32 },
  mLineHeight34: { lineHeight: 34 },
  mLineHeight36: { lineHeight: 36 },
  mLineHeight38: { lineHeight: 38 },
  mLineHeight40: { lineHeight: 40 },
  // text align
  mTextAlignLeft: { textAlign: "left" },
  mTextAlignCenter: { textAlign: "center" },
  mTextAlignRight: { textAlign: "right" },
  mTextAlignJustify: { textAlign: "justify" },
  //
} as const;

const textNumberMap = {
  mFontSize: "fontSize",
} as const;

const textStringMap = {
  mColor: "color",
};

type BooleanProps = keyof typeof textBooleanMap;
type NumberProps = keyof typeof textNumberMap;
type StringProps = keyof typeof textStringMap;

export type SharedTextProps = SharedBoxProps & {
  [key in BooleanProps]?: boolean;
} & {
  [key in NumberProps]?: number;
} & {
  [key in StringProps]?: string;
};

const textBooleanKeys = Object.keys(textBooleanMap);
const textNumberKeys = Object.keys(textNumberMap);
const textStringKeys = Object.keys(textStringMap);

export const getTextStyles = (props: SharedTextProps) => {
  const styles: any[] = [];
  const boxProps = getBoxStyles(props);
  Object.entries(props).forEach(([key, value]) => {
    if (textBooleanKeys.includes(key) && !!value) {
      styles.push(textBooleanMap[key]);
      return;
    }
    if (textNumberKeys.includes(key) && typeof value === "number") {
      styles.push({ [textNumberMap[key]]: value });
      return;
    }
    if (textStringKeys.includes(key) && typeof value === "string") {
      styles.push({ [textStringMap[key]]: value });
      return;
    }
  });
  return _.merge(boxProps, ...styles);
};

console.log({ textBooleanMap, textNumberMap, textStringMap });
