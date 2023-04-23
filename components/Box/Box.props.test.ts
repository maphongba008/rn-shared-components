import { getBoxStyles } from "./Box.props";

it("test parse box props", () => {
  expect(getBoxStyles({ mMargin: 1 })).toEqual({ margin: 1 });
  expect(
    getBoxStyles({
      mMargin: 8,
      mMarginTopLarge: true,
      mMarginBottomLarge: false,
      mPaddingVerticalExtraLarge: true,
      mBackgroundColor: "red",
      mBorderColor: "green",
    })
  ).toEqual({
    margin: 8,
    marginTop: 16,
    paddingVertical: 32,
    backgroundColor: "red",
    borderColor: "green",
  });
});
