import React from 'react';

class PlanCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      monthly: true,
      type: this.props.type,
      price: this.props.price,
      descriptionOne: this.props.descriptionOne,
      descriptionTwo: this.props.descriptionTwo,
      descriptionThree: this.props.descriptionThree,
    };
    this.togglePrice = this.togglePrice.bind(this);
  }

  togglePrice() {
    if (this.state.monthly) {
      this.setState((prevState) => ({
        price: (prevState.price * 10).toFixed(2),
        monthly: false,
      }));
    } else {
      this.setState((prevState) => ({
        price: (prevState.price / 10).toFixed(2),
        monthly: true,
      }));
    }
  }

  render() {
    return (
      <div className="plan-card">
        <div className="plan-card__type">{this.state.type}</div>
        <div className="plan-card__price">
          <span className="price-span">$</span>
          {this.state.price}
        </div>
        <div className="plan-card__description-container">
          <div className="plan-card__description"> {this.state.descriptionOne} </div>
          <div className="plan-card__description">{this.state.descriptionTwo} </div>
          <div className="plan-card__description"> {this.state.descriptionThree}</div>
        </div>
        <div className="hollow-button" onClick={this.togglePrice}>
          Learn More
        </div>
      </div>
    );
  }
}

export default PlanCard;
