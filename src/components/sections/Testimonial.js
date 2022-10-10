import React from "react";
import classNames from "classnames";
import { SectionTilesProps } from "../../utils/SectionProps";
import SectionHeader from "./partials/SectionHeader";
import Image from '../elements/Image';

const propTypes = {
  ...SectionTilesProps.types,
};

const defaultProps = {
  ...SectionTilesProps.defaults,
};

const Testimonial = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  pushLeft,
  ...props
}) => {
  const outerClasses = classNames(
    "testimonial section",
    topOuterDivider && "has-top-divider",
    bottomOuterDivider && "has-bottom-divider",
    hasBgColor && "has-bg-color",
    invertColor && "invert-color",
    className
  );

  const innerClasses = classNames(
    "testimonial-inner section-inner",
    topDivider && "has-top-divider",
    bottomDivider && "has-bottom-divider"
  );

  const tilesClasses = classNames("tiles-wrap", pushLeft && "push-left");

  const sectionHeader = {
    title: "Services",
  };

  return (
    <section {...props} className={outerClasses}>
      <div id="services" className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={tilesClasses}>
            <div
              className="tiles-item reveal-from-right"
              data-reveal-delay="150"
            >
              <div className="tiles-item-inner">
                    <Image
                      src={require('../../haircut.jpg')}
                      alt="Features tile icon 06"
                      width={300}
                      height={250} />
                <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                  <center><h4>Haircut</h4></center>
                  <center><h5>C$40.00 (60mins)</h5></center>
                </div>
              </div>
            </div>

            <div
              className="tiles-item reveal-from-bottom"
              data-reveal-delay="150"
            >
              <div className="tiles-item-inner">
                    <Image
                      src={require('../../side_fade.jpg')}
                      alt="Features tile icon 06"
                      width={300}
                      height={250} />
                <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                  <center><h4>Side Fade</h4></center>
                  <center><h5>C$35.00 (45mins)</h5></center>
                </div>
              </div>
            </div>
            <div
              className="tiles-item reveal-from-right"
              data-reveal-delay="150"
            >
              <div className="tiles-item-inner">
                    <Image
                      src={require('../../beard_add_on.jpg')}
                      alt="Features tile icon 06"
                      width={300}
                      height={250} />
                <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                  <center><h4>Beard (Add-on)</h4></center>
                  <center><h5>C$5.00 (15mins)</h5></center>
                </div>
              </div>
            </div>
            <div
              className="tiles-item reveal-from-left"
              data-reveal-delay="150"
            >
              <div className="tiles-item-inner">
                    <Image
                      src={require('../../beard_alone.jpg')}
                      alt="Features tile icon 06"
                      width={300}
                      height={250} />
                <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                  <center><h4>Beard (Alone)</h4></center>
                  <center><h5>C$15.00 (20mins)</h5></center>
                </div>
              </div>
            </div>
            <div
              className="tiles-item reveal-from-left"
              data-reveal-delay="150"
            >
              <div className="tiles-item-inner">
                    <Image
                      src={require('../../lineup.jpg')}
                      alt="Features tile icon 06"
                      width={300}
                      height={250} />
                <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                  <center><h4>Line Up</h4></center>
                  <center><h5>C$20.00 (10mins)</h5></center>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={tilesClasses}>

            <div className="tiles-item reveal-from-right" data-reveal-delay="200">
              <div className="tiles-item-inner">
                <div className="testimonial-item-content">
                  <p className="text-sm mb-0">
                    — Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum cillum dolore eu fugiat.
                      </p>
                </div>
                <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                  <span className="testimonial-item-name text-color-high">Roman Level</span>
                  <span className="text-color-low"> / </span>
                  <span className="testimonial-item-link">
                    <a href="#0">AppName</a>
                  </span>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="testimonial-item-content">
                  <p className="text-sm mb-0">
                    — Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum cillum dolore eu fugiat.
                      </p>
                </div>
                <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                  <span className="testimonial-item-name text-color-high">Diana Rynzhuk</span>
                  <span className="text-color-low"> / </span>
                  <span className="testimonial-item-link">
                    <a href="#0">AppName</a>
                  </span>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-left" data-reveal-delay="200">
              <div className="tiles-item-inner">
                <div className="testimonial-item-content">
                  <p className="text-sm mb-0">
                    — Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum cillum dolore eu fugiat.
                      </p>
                </div>
                <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                  <span className="testimonial-item-name text-color-high">Ben Stafford</span>
                  <span className="text-color-low"> / </span>
                  <span className="testimonial-item-link">
                    <a href="#0">AppName</a>
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div> */}
      </div>
    </section>
  );
};

Testimonial.propTypes = propTypes;
Testimonial.defaultProps = defaultProps;

export default Testimonial;
