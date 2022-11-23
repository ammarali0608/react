import { Component } from "react";
import "./card-list.styles.css";
import Card from "../card/card.component";
class CardList extends Component {
  render() {
    // you can't return multiple componetents from one component on same level
    // but you can return one contains multiple components

    // when props changed compontnt is also changed

    const { monsters } = this.props;
    return (
      <div className="card-list">
        {monsters.map((monster) => {
          <Card monster={monster} />;
        })}
      </div>
    );
  }
}
export default CardList;
