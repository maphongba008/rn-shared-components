import React from "react";
import renderer from "react-test-renderer";
import { Text } from ".";

it("test parse box props", () => {
  const tree = renderer.create(
    <Text
      mMargin={8}
      mMarginTopLarge
      mMarginBottomLarge={false}
      mPaddingVerticalExtraLarge
      mTextAlignCenter
      mFont20
      mFontWeight200={false}
      mColor="blue"
      mBackgroundColor="green"
    >
      Hello world
    </Text>
  );

  expect(tree.toJSON()).toMatchSnapshot();
});
