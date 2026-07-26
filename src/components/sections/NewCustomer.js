import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { SectionTilesProps } from '../../utils/SectionProps';
import logo from '../../logo.png';
import './NewCustomer.css';

const propTypes = {
  ...SectionTilesProps.types
};

const defaultProps = {
  ...SectionTilesProps.defaults
};

const NewClient = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  ...props
}) => {
  const [documentContent, setDocumentContent] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchDocumentContent = async () => {
      try {
        const response = await axios.get(
          'https://docs.google.com/document/d/e/2PACX-1vRhiTYUk2DRVwfliFvYLedANKO_ijoWGkITg4cFg8OwH85xfDm7uhn90j3Tu_uktiT2cC8Ag_1FIdhh/pub'
        );
        const parser = new DOMParser();
        const doc = parser.parseFromString(response.data, 'text/html');
        const contentElement = doc.querySelector('.doc-content') || doc.body;
        setDocumentContent(
          contentElement ? contentElement.innerHTML : '<p>Booking information is unavailable.</p>'
        );
      } catch (error) {
        console.error('Error fetching document content:', error);
        setDocumentContent(
          '<p>Booking information could not be loaded. Please try again shortly.</p>'
        );
      } finally {
        setIsLoading(false);
      }
    };

    fetchDocumentContent();
    const interval = setInterval(fetchDocumentContent, 60000);
    return () => clearInterval(interval);
  }, []);

  const outerClasses = classNames(
    'new-customer-page section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'new-customer-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  return (
    <section {...props} className={outerClasses}>
      <div className="container new-customer-shell">
        <div className={innerClasses}>
          <Link to="/booking" className="new-customer-back" aria-label="Back to booking options">
            ‹
          </Link>

          <img className="new-customer-logo" src={logo} alt="Jared's Barbershop" />

          <header className="new-customer-heading">
            <h1>
              <span aria-hidden="true">{'///'}</span> Booking Policy{' '}
              <span aria-hidden="true">{'///'}</span>
            </h1>
            <p>New customer appointment request</p>
          </header>

          <article className="new-customer-card">
            <div className="new-customer-intro">
              <span className="new-customer-icon" aria-hidden="true">✂</span>
              <h2>Welcome, new customer!</h2>
              <p>
                Review the current wait time and use the form below. Jared will
                contact you after your request is received.
              </p>
            </div>

            <span className="new-customer-rule" aria-hidden="true"></span>

            {isLoading ? (
              <p className="new-customer-loading">Loading booking information…</p>
            ) : (
              <div
                className="new-customer-document"
                dangerouslySetInnerHTML={{ __html: documentContent }}
              />
            )}
          </article>
        </div>
      </div>
    </section>
  );
};

NewClient.propTypes = propTypes;
NewClient.defaultProps = defaultProps;

export default NewClient;
