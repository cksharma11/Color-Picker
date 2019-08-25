import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import ColorTitle from "../ColorTitle";

Enzyme.configure({ adapter: new Adapter() });

describe("ColorTitle", () => {
  it("should render properly", () => {
    const wrapper = shallow(<ColorTitle colorTitle="red" />);
    expect(wrapper.debug()).toMatchSnapshot();
  });
});
