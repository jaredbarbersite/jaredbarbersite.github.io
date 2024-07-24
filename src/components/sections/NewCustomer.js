import React, { useState, useEffect } from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import axios from 'axios';

const propTypes = {
  ...SectionTilesProps.types,
};

const defaultProps = {
  ...SectionTilesProps.defaults,
};

const NewClient = ({
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
  const [documentContent, setDocumentContent] = useState('');

  const fetchDocumentContent = async () => {
    try {
      const response = await axios.get(
        'https://docs.google.com/document/d/e/2PACX-1vRhiTYUk2DRVwfliFvYLedANKO_ijoWGkITg4cFg8OwH85xfDm7uhn90j3Tu_uktiT2cC8Ag_1FIdhh/pub'
      );
      const parser = new DOMParser();
      const doc = parser.parseFromString(response.data, 'text/html');
      const contentElement = doc.querySelector('.doc-content') || doc.body;
      let content = contentElement ? contentElement.innerHTML : 'Content not found';
      content = content.replace(/<a /g, '<a style="color: blue;" ');
      setDocumentContent(content);
    } catch (error) {
      console.error('Error fetching document content:', error);
      setDocumentContent('Error fetching content');
    }
  };

  useEffect(() => {
    fetchDocumentContent();
    const interval = setInterval(fetchDocumentContent, 60000); // Poll every 60 seconds
    return () => clearInterval(interval);
  }, []);

  const outerClasses = classNames(
    'testimonial section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'testimonial-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const tilesClasses = classNames('tiles-wrap', pushLeft && 'push-left');

  const sectionHeader = {
    title: 'Booking policy',
  };

  const contentStyle = {
    maxWidth: '275px',
    margin: '0 auto',
    padding: '20px',
    backgroundColor: 'white',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    overflowWrap: 'break-word',
    textAlign: 'left',
    color: 'black'
  };

  return (
    <section {...props} className={outerClasses}>
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={tilesClasses}>
            <div
              className="tiles-item reveal-from-right"
              data-reveal-delay="150"
            >
              <div className="tiles-item-inner">
                <center>
                  <h4>If you're a new customer, please fill out form below. Estimated time it takes for me to get back to you is also below</h4>
                </center>
                <center>
                  <div
                    style={contentStyle}
                    dangerouslySetInnerHTML={{ __html: documentContent }}
                  />
                </center>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

NewClient.propTypes = propTypes;
NewClient.defaultProps = defaultProps;

export default NewClient;
