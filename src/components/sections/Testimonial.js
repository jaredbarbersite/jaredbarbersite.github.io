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
    title: "Location and Services",
    style: { color: '#333333' }
  };

  return (
    <section {...props} className={outerClasses} style={backgroundStyle}>
      <div id="services" className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          
          <div className="center-content">
            <div className="pricing-info mb-48" style={{
              textAlign: 'center', 
              maxWidth: '800px', 
              margin: '0 auto', 
              padding: '30px', 
              backgroundColor: 'rgba(255, 255, 255, 0.9)', 
              borderRadius: '8px',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
              color: '#333333',
              border: '1px solid #ddd'
            }}>
              <h4 style={{marginBottom: '24px', color: '#333333'}}>
                <em>*All New Customers are subject to a $30 deposit (deducted from Haircut Price)*</em>
              </h4>
              <h3 style={{marginBottom: '16px', color: '#333333', fontWeight: 'bold'}}>New Customer Haircut Transformation $100</h3>
              {/* Add back later? I don't know what this means */}
              {/* <h3 style={{color: '#333333', fontWeight: 'bold'}}>Haircut $80</h3> */}
            </div>
            
            <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', maxWidth: '1400px', margin: '0 auto', gap: '30px'}}>
              {/* Mississauga Location */}
              <div style={{flex: '1 1 calc(50% - 15px)', minWidth: '340px', maxWidth: 'calc(50% - 15px)'}}>
                <div style={{
                  backgroundColor: 'white',
                  padding: '20px',
                  borderRadius: '8px',
                  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column'
                }}>
                  <h3 style={{marginBottom: '16px', color: '#333333', fontSize: '26px', textAlign: 'center'}}>Mississauga Location:</h3>
                  <div style={{
                    borderRadius: '6px',
                    overflow: 'hidden',
                    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.2)',
                    flex: '1',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <Image
                      src={require('../../mississauga.jpg')}
                      alt="Mississauga Location"
                      width={1200}
                      height={900}
                      style={{
                        width: '100%',
                        height: 'auto',
                        display: 'block',
                        aspectRatio: '4/3',
                        objectFit: 'cover'
                      }}
                    />
                  </div>
                </div>
              </div>

              {/* Yorkdale Location */}
              <div style={{flex: '1 1 calc(50% - 15px)', minWidth: '340px', maxWidth: 'calc(50% - 15px)'}}>
                <div style={{
                  backgroundColor: 'white',
                  padding: '20px',
                  borderRadius: '8px',
                  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column'
                }}>
                  <h3 style={{marginBottom: '16px', color: '#333333', fontSize: '26px', textAlign: 'center'}}>Yorkdale Location:</h3>
                  <div style={{
                    borderRadius: '6px',
                    overflow: 'hidden',
                    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.2)',
                    flex: '1',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <Image
                      src={require('../../yorkdale.jpg')}
                      alt="Yorkdale Location"
                      width={1200}
                      height={900}
                      style={{
                        width: '100%',
                        height: 'auto',
                        display: 'block',
                        aspectRatio: '4/3',
                        objectFit: 'cover'
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

Testimonial.propTypes = propTypes;
Testimonial.defaultProps = defaultProps;

export default Testimonial;
