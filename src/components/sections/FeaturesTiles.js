import React from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import logo from '../../logo.png';
import './Services.css';

const propTypes = {
  ...SectionTilesProps.types
};

const defaultProps = {
  ...SectionTilesProps.defaults
};

const services = [
  {
    name: 'Haircut 1',
    audience: 'Loyal clients before 2022',
    price: '$50–$60',
    description: 'Classic cut. +$10 for beard and eyebrows.',
    duration: '1 hour',
    icon: 'scissors'
  },
  {
    name: 'Haircut 2',
    audience: 'Semi-new clients after 2022',
    price: '$80',
    description: 'Haircut transformation. Includes full haircut, beard, eyebrows, and hot towel.',
    duration: '1–1.5 hours',
    icon: 'chair'
  },
  {
    name: 'Haircut & Perm',
    price: '$200',
    description: 'Haircut with perm. Texture, volume, and style.',
    note: 'Contact directly to book this service.',
    icon: 'perm'
  }
];

const ServiceIcon = ({ type }) => {
  if (type === 'chair') {
    return (
      <svg viewBox="0 0 90 90" role="img" aria-label="Barber chair">
        <path d="M30 16v29h31c7 0 11 5 11 11v5H25c-8 0-13-5-13-13V29" />
        <path d="M20 19h10M21 62h43M45 62v17M29 80h33M68 61l8 17M75 78h9" />
        <rect x="14" y="25" width="19" height="28" rx="6" />
      </svg>
    );
  }

  if (type === 'perm') {
    return (
      <svg viewBox="0 0 90 90" role="img" aria-label="Perm styling">
        <path d="M24 17c-9 4-9 12 0 16s9 12 0 16M43 13c-9 4-9 12 0 16s9 12 0 16M62 18c9 4 9 12 0 16s-9 12 0 16" />
        <path d="M20 71L63 32M27 78l43-39M17 67l10 11M60 29l10 11" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 90 90" role="img" aria-label="Scissors">
      <circle cx="23" cy="66" r="12" />
      <circle cx="67" cy="66" r="12" />
      <path d="M31 57L66 15M59 57L24 15M38 49l14 17" />
    </svg>
  );
};

const FeaturesTiles = ({
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
    'features-tiles services-section section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'features-tiles-inner services-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  return (
    <section {...props} className={outerClasses}>
      <div id="services" className="container services-shell">
        <div className={innerClasses}>
          <img className="services-logo" src={logo} alt="Jared's Barbershop" />

          <header className="services-heading">
            <h2>
              <span aria-hidden="true">{'///'}</span> Services <span aria-hidden="true">{'///'}</span>
            </h2>
            <p>Different pricing for long-term clients and newer clients.</p>
          </header>

          <div className="services-list">
            {services.map((service) => (
              <article className="service-card" key={service.name}>
                <div className="service-icon">
                  <ServiceIcon type={service.icon} />
                </div>

                <div className="service-details">
                  <h3>{service.name}</h3>
                  {service.audience && <p className="service-audience">{service.audience}</p>}
                  <span className="service-rule" aria-hidden="true"></span>
                  <p className="service-description">{service.description}</p>
                  {service.duration && (
                    <p className="service-duration">
                      <span aria-hidden="true">◷</span> {service.duration}
                    </p>
                  )}
                  {service.note && <p className="service-note">{service.note}</p>}
                </div>

                <p className="service-price">{service.price}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

FeaturesTiles.propTypes = propTypes;
FeaturesTiles.defaultProps = defaultProps;

export default FeaturesTiles;
