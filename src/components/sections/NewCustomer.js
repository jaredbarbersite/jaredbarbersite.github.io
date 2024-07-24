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
      const content = doc.querySelector('#contents')?.innerHTML || 'Content not found';
      setDocumentContent(content);
    } catch (error) {
      console.error('Error fetching document content:', error);
      setDocumentContent('Error fetching content');
    }
  };

  useEffect(() => {
    fetchDocumentContent();
    const interval = setInterval(fetchDocumentContent); // Poll every 60 seconds
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
                  <div
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
