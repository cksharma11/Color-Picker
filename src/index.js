import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import Header from "./components/Header/Header";
import "./index.css";
import ColorTitle from "./components/ColorTitle/ColorTitle";
import ColorBoxContainer from "./ColorBoxContainer/ColorBoxContainer";
import Footer from "./Footer/Footer";
import colors from "./colors/colors";

const Index = () => {
  return (
    <div>
      <Header />
      {colors.map(color => {
        return (
          <Fragment>
            <ColorTitle colorTitle={color.colorTitle} />
            <ColorBoxContainer colors={color.values} />
          </Fragment>
        );
      })}
      <Footer />
    </div>
  );
};

ReactDOM.render(<Index />, document.getElementById("root"));
