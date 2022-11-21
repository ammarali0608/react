import { Component } from "react";

class CardList extends Component {
  render() {
    // you can't return multiple componetents from one component on same level
    // but you can return one contains multiple components

    const { monsters } = this.props;
    return (
      <div>
        {monsters.map((monster) => {
          return (
            <div key={monster.id}>
              <h1>{monster.name}</h1>
            </div>
          );
        })}
      </div>
    );
  }
}
export default CardList;
