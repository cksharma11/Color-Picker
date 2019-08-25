import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Footer from "../Footer";

Enzyme.configure({ adapter: new Adapter() });

describe("Footer", () => {
  it("should render properly", () => {
    const wrapper = shallow(<Footer colors={["red", "green"]} />);
    expect(wrapper.debug()).toMatchSnapshot();
  });
});
