import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import ColorBoxContainer from "../ColorBoxContainer";

Enzyme.configure({ adapter: new Adapter() });

describe("ColorBoxContainer", () => {
  it("should render properly", () => {
    const wrapper = shallow(
      <ColorBoxContainer
        colors={[
          { colorName: "red", colorCode: "#FF0000" },
          { colorName: "green", colorCode: "#008000" }
        ]}
      />
    );
    expect(wrapper.debug()).toMatchSnapshot();
  });
});
