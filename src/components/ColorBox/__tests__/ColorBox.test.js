import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import ColorBox from "../ColorBox";

Enzyme.configure({ adapter: new Adapter() });

describe("ColorBox", () => {
  it("should render properly", () => {
    const wrapper = shallow(<ColorBox haxCode="#bbb" />);
    expect(wrapper.debug()).toMatchSnapshot();
  });
});
