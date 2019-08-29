import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Footer from "../Footer";

Enzyme.configure({ adapter: new Adapter() });

const colorList = [
  { colorName: "red", colorCode: "#FF0000" },
  { colorName: "green", colorCode: "#008000" }
];
describe("Footer", () => {
  it("should render properly", () => {
    const wrapper = shallow(<Footer colors={colorList} />);
    expect(wrapper.debug()).toMatchSnapshot();
  });
});
