import React from "react";
import ReactDOM from "react-dom";
import Header from "./components/Header/Header";
import "./index.css";
import ColorTitle from "./components/ColorTitle/ColorTitle";
import ColorBoxContainer from "./ColorBoxContainer/ColorBoxContainer";
import Footer from "./Footer/Footer";

const Index = () => {
  return (
    <div>
      <Header />
      <ColorTitle colorTitle="Red Roses" />
      <ColorBoxContainer colors={["#bbb", "#ccc"]} />
      <Footer />
    </div>
  );
};

ReactDOM.render(<Index />, document.getElementById("root"));
