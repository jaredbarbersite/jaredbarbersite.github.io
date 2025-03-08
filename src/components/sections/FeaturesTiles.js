import React from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';

const propTypes = {
  ...SectionTilesProps.types
}

const defaultProps = {
  ...SectionTilesProps.defaults
}
const FeaturesTiles = ({
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
    'features-tiles section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'features-tiles-inner section-inner pt-0',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider',
  );

  const tilesClasses = classNames(
    'tiles-wrap center-content',
    pushLeft && 'push-left'
  );

   const backgroundStyle = {
    // Light base color
    backgroundColor: '#f5f5f5',
  
    // Diagonal stripes with wider spacing
    backgroundImage: `
      repeating-linear-gradient(
        -45deg,
        #f5f5f5 0,
        #f5f5f5 59px,
        #e6e6e6 30px,
        #e6e6e6 60px
      )
    `,
    position: 'relative',
    paddingTop: '60px',
    paddingBottom: '60px'
  };


  

  const sectionHeader = {
    title: 'Gallery',
    paragraph: 'Some of my work!',
  };

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div id="gallery" className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={tilesClasses}>

            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require('../../gallery1.jpg')}
                      alt="Features tile icon 01"
                      width={250}
                      height={250} />
                  </div>
                </div>
                {/* <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    Robust Workflow
                    </h4>
                  <p className="m-0 text-sm">
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.
                    </p>
                </div> */}
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom" data-reveal-delay="100">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require('../../gallery2.jpg')}
                      alt="Features tile icon 02"
                      width={250}
                      height={250} />
                  </div>
                </div>
                {/* <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    Robust Workflow
                    </h4>
                  <p className="m-0 text-sm">
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.
                    </p>
                </div> */}
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom" data-reveal-delay="100">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require('../../gallery3.jpg')}
                      alt="Features tile icon 03"
                      width={250}
                      height={250} />
                  </div>
                </div>
                {/* <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    Robust Workflow
                    </h4>
                  <p className="m-0 text-sm">
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.
                    </p>
                </div> */}
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require('../../gallery4.jpg')}
                      alt="Features tile icon 04"
                      width={250}
                      height={250} />
                  </div>
                </div>
                {/* <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    Robust Workflow
                    </h4>
                  <p className="m-0 text-sm">
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.
                    </p>
                </div> */}
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom" data-reveal-delay="100">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require('../../gallery5.jpg')}
                      alt="Features tile icon 05"
                      width={250}
                      height={250} />
                  </div>
                </div>
                {/* <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    Robust Workflow
                    </h4>
                  <p className="m-0 text-sm">
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.
                    </p>
                </div> */}
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom" data-reveal-delay="100">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require('../../gallery1.jpg')}
                      alt="Features tile icon 06"
                      width={250}
                      height={250} />
                  </div>
                </div>
                {/* <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    Robust Workflow
                    </h4>
                  <p className="m-0 text-sm">
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.
                    </p>
                </div> */}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

FeaturesTiles.propTypes = propTypes;
FeaturesTiles.defaultProps = defaultProps;

export default FeaturesTiles;