import React, { Component, createElement } from "react";
import "./App.css";

export const dish = React.createElement("h1", null, "Black Salmon");
export const dessert = React.createElement("h2", null, "Coconut Cream Pie");
const receipt = React.createElement(
  "u1",
  { className: "ingredient" },
  createElement("l1", null, "2 lb salmon"),
  createElement("li", null, "5 springs fresh rosmary"),
  createElement("li", null, "2 tablespoon olive oil")
);

const items = [
  "2 lb salmon",
  "5 springs fresh rosemary",
  "2 tablespoons olive oil",
  "2 small lemons",
  "1 teaspoon kosher salt",
  "4 cloves of chopped garlic",
];
const myreceipt = createElement(
  "ul",
  { className: "ingredient" },
  items.map((ingredient, i) =>
    createElement("li", { key: i }, ingredient)
  )
);

class MyReceipt extends Component {
  render() {
    return (
      <section className="backed-salmon">
        <h1>Backed Salmon</h1>
        <ul className="ingredients">
          <li>2 lb salmon</li>
          <li>5 springs fresh rosemary</li>
          <li>2 tablespoons olive oil</li>
          <li>2 small lemons</li>
          <li>1 teaspoon kosher salt</li>
          <li>4 cloves of chopped gralic</li>
        </ul>
        <section className="instructions">
          <h2>Cooking Instruction</h2>
          <p>Preheat the oven to 375 degrees</p>
          <p>Lightly coat aluminum foil with oil</p>
          <p>Place salmon on foil</p>
          <p>Cover with rosemary, sliced lemons, chopped garlic</p>
          <p>Bake for 15-20 minutes until cooked through</p>
          <p>Remove from oven</p>
        </section>
      </section>
    );
  }
}

class App extends Component {
  render() {
    return [dish, dessert, myreceipt];
  }
}

export default App;
