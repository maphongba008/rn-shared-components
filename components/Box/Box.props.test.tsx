import React from "react";
import { Text } from "react-native";
import renderer from "react-test-renderer";
import { Box } from "./index";
describe("test Box", () => {
  it("render correctly", () => {
    const tree = renderer
      .create(
        <Box
          mBorderBottom
          mBackgroundColor="red"
          mBorderRadius
          mCenter
          mRow
          mFull
        >
          <Text>Centered text</Text>
        </Box>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
