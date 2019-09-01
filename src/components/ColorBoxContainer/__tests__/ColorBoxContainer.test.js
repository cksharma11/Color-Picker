import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import ColorBoxContainer from "../ColorBoxContainer";

Enzyme.configure({ adapter: new Adapter() });

describe("ColorBoxContainer", () => {
  it("should render properly", () => {
    const wrapper = shallow(<ColorBoxContainer colors={[
      { colorName: "Summer Sky", colorCode: "#3498DB" },
      { colorName: "Steel Blue", colorCode: "#487EB0" }
    ]} />);
    expect(wrapper.debug()).toMatchSnapshot();
  });
});
