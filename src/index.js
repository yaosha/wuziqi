import React from "react";
import ReactDOM from "react-dom";
import Game from "./container/Game";

function App() {
  return <Game />;
}

function render() {
  ReactDOM.render(<App />, document.getElementById("container"));
}

if (module.hot) {
  module.hot.accept("./container/Game", function() {
    render();
  });
}

render();
