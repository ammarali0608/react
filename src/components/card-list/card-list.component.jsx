import { Component } from "react";

class CardList extends Component {
  render() {
    // you can't return multiple componetents from one component on same level
    // but you can return one contains multiple components
    return (
      <div>
        <h1>Hello I am CardList Component</h1>
      </div>
    );
  }
}
export default CardList;
