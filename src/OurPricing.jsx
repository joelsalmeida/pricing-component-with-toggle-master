import React from 'react';
import PlanCard from './PlanCard';

class OurPricing extends React.Component {
  render() {
    return (
      <section className="our-pricing">
        <h2 className="our-pricing__title">Our Pricing</h2>

        <div className="our-pricing__button-container">
          Annually
          <div className="our-pricing__button">
            <span className="our-pricing__button__toggle"></span>
          </div>
          Monthly
        </div>

        <div className="our-pricing__plans">
          <PlanCard
            type="Basic"
            price="19.99"
            descriptionOne="500 GB Storage"
            descriptionTwo="2 Users Allowed"
            descriptionThree="Send up to 3 GB"
          />

          <PlanCard
            type="Professional"
            price="24.99"
            descriptionOne="1 TB Storage"
            descriptionTwo="5 Users Allowed"
            descriptionThree="Send up to 10 GB"
          />

          <PlanCard
            type="Master"
            price="39.99"
            descriptionOne="2 TB Storage"
            descriptionTwo="10 Users Allowed"
            descriptionThree="Send up to 20 GB"
          />
        </div>
      </section>
    );
  }
}

export default OurPricing;
