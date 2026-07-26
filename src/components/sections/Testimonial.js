import React from 'react';
import classNames from 'classnames';
import { Link as BookLink } from 'react-router-dom';
import { SectionTilesProps } from '../../utils/SectionProps';
import logo from '../../logo.png';
import mapImage from '../../mississauga.jpg';
import './LocationServices.css';

const propTypes = {
  ...SectionTilesProps.types
};

const defaultProps = {
  ...SectionTilesProps.defaults
};

const TagIcon = () => (
  <svg viewBox="0 0 48 48" aria-hidden="true">
    <path d="M6 23L23 6h18v18L24 41 6 23z" />
    <circle cx="33" cy="14" r="3" />
  </svg>
);

const PinIcon = () => (
  <svg viewBox="0 0 48 48" aria-hidden="true">
    <path d="M24 43S10 30 10 19a14 14 0 0128 0c0 11-14 24-14 24z" />
    <circle cx="24" cy="19" r="5" />
  </svg>
);

const CalendarIcon = () => (
  <svg viewBox="0 0 48 48" aria-hidden="true">
    <rect x="8" y="11" width="32" height="29" rx="3" />
    <path d="M15 7v8M33 7v8M8 20h32M16 27h3M24 27h3M32 27h1M16 33h3M24 33h3" />
  </svg>
);

const Testimonial = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  ...props
}) => {
  const outerClasses = classNames(
    'testimonial location-section section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'testimonial-inner location-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  return (
    <section {...props} className={outerClasses}>
      <div id="location" className="container location-shell">
        <div className={innerClasses}>
          <img className="location-logo" src={logo} alt="Jared's Barbershop" />

          <header className="location-heading">
            <h2>
              <span aria-hidden="true">{'///'}</span> Location &amp; Services{' '}
              <span aria-hidden="true">{'///'}</span>
            </h2>
          </header>

          <article className="location-card transformation-card">
            <div className="location-card-icon">
              <TagIcon />
            </div>
            <p className="deposit-note">
              <em>*All new customers are subject to a $30 deposit<br />(deducted from haircut price)*</em>
            </p>
            <span className="location-rule" aria-hidden="true"></span>
            <p className="transformation-name">New Customer<br />Haircut Transformation</p>
            <p className="transformation-price">$100</p>
          </article>

          <article className="location-card map-card">
            <div className="location-card-icon">
              <PinIcon />
            </div>
            <h3>Mississauga Location</h3>
            <img
              className="location-map"
              src={mapImage}
              alt="Map showing the Mississauga studio location"
            />
          </article>

          <BookLink to="/booking" className="location-book-button">
            <CalendarIcon />
            <span>Book now</span>
          </BookLink>
        </div>
      </div>
    </section>
  );
};

Testimonial.propTypes = propTypes;
Testimonial.defaultProps = defaultProps;

export default Testimonial;
