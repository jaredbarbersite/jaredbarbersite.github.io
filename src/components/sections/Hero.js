import React from "react";
import classNames from "classnames";
import { SectionProps } from "../../utils/SectionProps";
import ButtonGroup from "../elements/ButtonGroup";
import video from "../../video.mp4";
import { Link as BookLink } from "react-router-dom";

const propTypes = {
  ...SectionProps.types,
};

const defaultProps = {
  ...SectionProps.defaults,
};

const Hero = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  ...props
}) => {
  // const [videoModalActive, setVideomodalactive] = useState(false);

  // const openModal = (e) => {
  //   e.preventDefault();
  //   setVideomodalactive(true);
  // }

  // const closeModal = (e) => {
  //   e.preventDefault();
  //   setVideomodalactive(false);
  // }

  const outerClasses = classNames(
    "hero section center-content",
    topOuterDivider && "has-top-divider",
    bottomOuterDivider && "has-bottom-divider",
    hasBgColor && "has-bg-color",
    invertColor && "invert-color",
    className
  );

  const innerClasses = classNames(
    "hero-inner section-inner",
    topDivider && "has-top-divider",
    bottomDivider && "has-bottom-divider"
  );

  return (
    <section {...props} className={outerClasses}>
      <div className="container-sm">
        <div className={innerClasses}>
          <div className="hero-content">
            <h1
              style={{color: '#454545'}}
              className="mt-0 mb-16 reveal-from-bottom"
              data-reveal-delay="200"
            >
              Jared's <br></br>Barbershop
            </h1>
            {/* <BookLink to="/Signup" className="button button-wide-mobile button-sm">Book now</BookLink> */}
            <div className="container-xs">
              <div
                dangerouslySetInnerHTML={{
                  __html: `<video className="app__backgroundVideo" autoplay loop muted playsinline>
      <source src=${video} type="video/mp4" />
      Your browser does not support the video tag.
</video>`,
                }}
              ></div>
              <div className="reveal-from-bottom" data-reveal-delay="200">
                <br />
                <ButtonGroup wideMobile>
                    <BookLink
                      to="/booking"
                      className="button button-wide-mobile button-sm"
                      style={{color: '#454545'}}
                    >
                      Book now
                    </BookLink>
                </ButtonGroup>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr></hr>
    </section>
  );
};

Hero.propTypes = propTypes;
Hero.defaultProps = defaultProps;

export default Hero;
