import React from 'react';

class PlanCard extends React.Component {
  priceToShow(selectedPlan) {
    if (selectedPlan === 'monthly') {
      return this.props.monthlyPrice;
    }  return this.props.anualPrice;
  }
  
  render() {
    const { planType } = this.props;
    return (
      <div className="plan-card">
        <div className="plan-card__type">{this.props.type}</div>
        <div className="plan-card__price">
          <span className="price-span">$</span>
          {this.priceToShow(planType)}
        </div>
        <div className="plan-card__description-container">
          <div className="plan-card__description"> {this.props.descriptionOne} </div>
          <div className="plan-card__description">{this.props.descriptionTwo} </div>
          <div className="plan-card__description"> {this.props.descriptionThree}</div>
        </div>
        <div className="hollow-button">
          Learn More
        </div>
      </div>
    );
  }
}

export default PlanCard;
