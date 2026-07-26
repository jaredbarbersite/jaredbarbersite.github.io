import React from 'react';
import classNames from 'classnames';
import { SectionSplitProps } from '../../utils/SectionProps';
import logo from '../../logo.png';
import bioImage from '../../bio.jpeg';
import './About.css';

const propTypes = {
  ...SectionSplitProps.types
};

const defaultProps = {
  ...SectionSplitProps.defaults
};

const FeaturesSplit = ({
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
    'features-split about-section section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'features-split-inner about-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  return (
    <section {...props} className={outerClasses}>
      <div id="about" className="container about-shell">
        <div className={innerClasses}>
          <img className="about-logo" src={logo} alt="Jared's Barbershop" />

          <header className="about-heading">
            <h2>
              <span aria-hidden="true">{'///'}</span> About Me{' '}
              <span aria-hidden="true">{'///'}</span>
            </h2>
          </header>

          <article className="about-card">
            <div className="about-image-frame">
              <img
                className="about-image"
                src={bioImage}
                alt="Jared Leung, barber and owner of Jared's Barbershop"
              />
            </div>

            <div className="about-copy">
              <p className="about-eyebrow">Your Barber</p>
              <h3>Jared Leung</h3>
              <span className="about-rule" aria-hidden="true"></span>
              <p>
                Hi, I’m Jared! Barbering has been a passion of mine for over ten
                years. With experience in both public and private barbershops, I
                now provide high-quality services personalized to you from my
                studio in the Greater Toronto Area.
              </p>
              <p className="about-signoff">Book me for a transformation.</p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

FeaturesSplit.propTypes = propTypes;
FeaturesSplit.defaultProps = defaultProps;

export default FeaturesSplit;
