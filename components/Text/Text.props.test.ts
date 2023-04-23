import { getTextStyles } from "./Text.props";

it("test parse box props", () => {
  expect(getTextStyles({ mMargin: 1 })).toEqual({ margin: 1 });
  expect(
    getTextStyles({
      mMargin: 8,
      mMarginTopLarge: true,
      mMarginBottomLarge: false,
      mPaddingVerticalExtraLarge: true,
      mTextAlignCenter: true,
      mFont20: true,
      mFontWeight200: false,
      mColor: "blue",
      mBackgroundColor: "green",
    })
  ).toEqual({
    margin: 8,
    marginTop: 16,
    paddingVertical: 32,
    textAlign: "center",
    fontSize: 20,
    color: "blue",
    backgroundColor: "green",
  });
});
