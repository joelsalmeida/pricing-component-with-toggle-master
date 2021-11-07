import React from 'react';
import PlanCard from './PlanCard';

class OurPricing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      planType: 'monthly',
    };
    this.togglePlanType = this.togglePlanType.bind(this);
  }
  
  togglePlanType() {
    const { planType } = this.state;

    if (planType === 'monthly') {
      this.setState({
        planType: 'anual'
      });
    } else {
      this.setState({
        planType: 'monthly'
      });
    }
  }

  render() {
    return (
      <section className="our-pricing">
        <h2 className="our-pricing__title">Our Pricing</h2>

        <div className="our-pricing__button-container">
          Annually
          <div className="our-pricing__button" onClick={this.togglePlanType}>
            <span className="our-pricing__button__toggle"></span>
          </div>
          Monthly
        </div>

        <div className="our-pricing__plans">
          <PlanCard
            type="Basic"
            monthlyPrice="19.99"
            anualPrice="199.99"
            descriptionOne="500 GB Storage"
            descriptionTwo="2 Users Allowed"
            descriptionThree="Send up to 3 GB"
            planType={ this.state.planType }
          />

          <PlanCard
            type="Professional"
            monthlyPrice="24.99"
            anualPrice="249.99"
            descriptionOne="1 TB Storage"
            descriptionTwo="5 Users Allowed"
            descriptionThree="Send up to 10 GB"
            planType={ this.state.planType }
          />

          <PlanCard
            type="Master"
            monthlyPrice="39.99"
            anualPrice="399.99"
            descriptionOne="2 TB Storage"
            descriptionTwo="10 Users Allowed"
            descriptionThree="Send up to 20 GB"
            planType={ this.state.planType }
          />
        </div>
      </section>
    );
  }
}

export default OurPricing;
