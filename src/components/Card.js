import React from "react";
import './Card.css';

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false,
    };
  }

  handleClick = (e) => {
    this.setState({
      clicked: !this.state.clicked,
    });
  };

  render() {
    const { name, image, type, brandName, price, storeName } =
      this.props.cardResults;

    return (
      <div className="card" style={{borderColor: this.state.clicked ? '#333' : '#ccc'}} onClick={this.handleClick}>
        {this.state.clicked && (
          <div>
            <p>Price: {price}</p>
            <p>{storeName}</p>
          </div>
        )}
        <h1 className="card-title">{name}</h1>
        <img
          alt="alt"
          src={image}
          style={{ maxWidth: 100, maxHeight: "auto" }}
        ></img>
        <p>{type}</p>
        <p>{brandName}</p>
      </div>
    );
  }
}

export default Card;