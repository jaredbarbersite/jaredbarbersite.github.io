import React, { useState } from "react";
import classNames from "classnames";
import { SectionTilesProps } from "../../utils/SectionProps";
import SectionHeader from "./partials/SectionHeader";
// import Image from '../elements/Image';
import Button from "../elements/Button";
import {Link as BookLink} from 'react-router-dom';

const propTypes = {
  ...SectionTilesProps.types,
};

const defaultProps = {
  ...SectionTilesProps.defaults,
};

const Bookpage = ({
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
  const [showLocationOptions, setShowLocationOptions] = useState(false);
  
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
    title: "Booking policy",
  };

  const handleExistingCustomerClick = () => {
    setShowLocationOptions(true);
  };

  return (
    <section {...props} className={outerClasses}>
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={tilesClasses}>
              <div className="tiles-item-inner">
                {!showLocationOptions ? (
                  <>
                    <center>
                      <Button wideMobile onClick={handleExistingCustomerClick}>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Existing Customer&nbsp;&nbsp;&nbsp;&nbsp;
                      </Button>
                    </center>
                    <br></br>
                    <center>
                      <BookLink to='/new-client'>
                        <Button wideMobile>
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;New Customer&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        </Button>
                      </BookLink>
                    </center>
                  </>
                ) : (
                  <>
                    <center>
                      <a href="https://jaredleunghaircutting.setmore.com/">
                        <Button wideMobile>
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Mississauga Location&nbsp;&nbsp;&nbsp;&nbsp;
                        </Button>
                      </a>
                    </center>
                    <br></br>
                    <center>
                      <a href="https://jaredleunghaircuttingyorkdale.setmore.com/">
                        <Button wideMobile>
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Yorkdale Location&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        </Button>
                      </a>
                    </center>
                    <br></br>
                    <center>
                      <Button small onClick={() => setShowLocationOptions(false)}>
                        Back
                      </Button>
                    </center>
                  </>
                )}
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

Bookpage.propTypes = propTypes;
Bookpage.defaultProps = defaultProps;

export default Bookpage;
