import React, { useState } from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { SectionTilesProps } from '../../utils/SectionProps';
import logo from '../../logo.png';
import './Bookpage.css';

const propTypes = {
  ...SectionTilesProps.types
};

const defaultProps = {
  ...SectionTilesProps.defaults
};

const PersonIcon = ({ plus }) => (
  <svg viewBox="0 0 48 48" aria-hidden="true">
    <circle cx="20" cy="15" r="7" />
    <path d="M7 39c0-9 5-14 13-14s13 5 13 14" />
    {plus && <path d="M37 14v12M31 20h12" />}
  </svg>
);

const PinIcon = () => (
  <svg viewBox="0 0 48 48" aria-hidden="true">
    <path d="M24 43S10 30 10 19a14 14 0 0128 0c0 11-14 24-14 24z" />
    <circle cx="24" cy="19" r="5" />
  </svg>
);

const Bookpage = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  ...props
}) => {
  const [showLocationOptions, setShowLocationOptions] = useState(false);

  const outerClasses = classNames(
    'booking-page section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'booking-page-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  return (
    <section {...props} className={outerClasses}>
      <div className="container booking-page-shell">
        <div className={innerClasses}>
          <Link to="/" className="booking-back-button" aria-label="Back to home">
            ‹
          </Link>

          <img className="booking-page-logo" src={logo} alt="Jared's Barbershop" />

          <header className="booking-page-heading">
            <h1>
              <span aria-hidden="true">{'///'}</span> Booking Policy{' '}
              <span aria-hidden="true">{'///'}</span>
            </h1>
            <p>
              {showLocationOptions
                ? 'Choose your booking location.'
                : 'Select the option that best describes you.'}
            </p>
          </header>

          <div className="booking-options-card">
            {!showLocationOptions ? (
              <>
                <button
                  type="button"
                  className="booking-option"
                  onClick={() => setShowLocationOptions(true)}
                >
                  <span className="booking-option-icon"><PersonIcon /></span>
                  <span>
                    <strong>Existing Customer</strong>
                    <small>Continue to online booking</small>
                  </span>
                  <span className="booking-chevron" aria-hidden="true">›</span>
                </button>

                <Link to="/new-client" className="booking-option">
                  <span className="booking-option-icon"><PersonIcon plus /></span>
                  <span>
                    <strong>New Customer</strong>
                    <small>Read the policy and request an appointment</small>
                  </span>
                  <span className="booking-chevron" aria-hidden="true">›</span>
                </Link>
              </>
            ) : (
              <>
                <a
                  href="https://jaredleunghaircutting.setmore.com/"
                  className="booking-option"
                >
                  <span className="booking-option-icon"><PinIcon /></span>
                  <span>
                    <strong>Mississauga Location</strong>
                    <small>Book through Setmore</small>
                  </span>
                  <span className="booking-chevron" aria-hidden="true">›</span>
                </a>

                <button
                  type="button"
                  className="booking-secondary-button"
                  onClick={() => setShowLocationOptions(false)}
                >
                  Back to customer options
                </button>
              </>
            )}
          </div>

          <p className="booking-page-note">
            New customers are subject to a $30 deposit deducted from the haircut price.
          </p>
        </div>
      </div>
    </section>
  );
};

Bookpage.propTypes = propTypes;
Bookpage.defaultProps = defaultProps;

export default Bookpage;
