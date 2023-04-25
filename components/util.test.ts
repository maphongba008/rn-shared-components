import { parseStyles } from "./utils";

describe("parseStyles", () => {
  it("should return the correct styles when given valid input", () => {
    const props = {
      bold: true,
      mFontSize: 20,
      mBackgroundColor: "red",
      mPrimary: true,
      mSecondary: false,
    };
    const objMapping = {
      bold: { fontWeight: "bold" },
      mFontSize: "fontSize",
      mBackgroundColor: "backgroundColor",
      mPrimary: (data: any) => ({ color: data.primaryColor }),
      secondary: { backgroundColor: "red" },
    };
    const data = {
      primaryColor: "green",
    };
    const expectedOutput = {
      fontWeight: "bold",
      fontSize: 20,
      backgroundColor: "red",
      color: "green",
    };
    const result = parseStyles(props, objMapping, data);
    expect(result).toEqual(expectedOutput);
  });
});
