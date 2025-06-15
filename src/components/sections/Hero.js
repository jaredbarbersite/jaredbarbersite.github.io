import React, { useEffect, useRef } from "react";
import classNames from "classnames";
import { SectionProps } from "../../utils/SectionProps";
import ButtonGroup from "../elements/ButtonGroup";
import video1 from "../../video1.mp4";
import video2 from "../../video2.mp4";
import video3 from "../../video3.mp4";
import { Link as BookLink } from "react-router-dom";
import "./Hero.css";

// Debug the video paths to make sure they're correct
console.log("Video paths:", video1, video2, video3);

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
  const video1Ref = useRef(null);
  const video2Ref = useRef(null);
  const video3Ref = useRef(null);
  
  // Use useEffect to play the videos after they're mounted
  useEffect(() => {
    // Function to attempt playing videos
    const playVideos = () => {
      try {
        if (video1Ref.current) {
          video1Ref.current.play().catch(e => console.error("Video 1 play error:", e));
        }
        if (video2Ref.current) {
          video2Ref.current.play().catch(e => console.error("Video 2 play error:", e));
        }
        if (video3Ref.current) {
          video3Ref.current.play().catch(e => console.error("Video 3 play error:", e));
        }
      } catch (err) {
        console.error("Error playing videos:", err);
      }
    };
    
    // Try to play videos after a short delay
    setTimeout(playVideos, 500);
    
    // Add event listeners for user interaction to enable autoplay
    const handleUserInteraction = () => {
      playVideos();
      // Remove event listeners after first interaction
      document.removeEventListener('click', handleUserInteraction);
      document.removeEventListener('touchstart', handleUserInteraction);
    };
    
    document.addEventListener('click', handleUserInteraction);
    document.addEventListener('touchstart', handleUserInteraction);
    
    // Cleanup function
    return () => {
      document.removeEventListener('click', handleUserInteraction);
      document.removeEventListener('touchstart', handleUserInteraction);
    };
  }, []);

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
  // Hero section with brand colors
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

  return (
    <section {...props} className={outerClasses} style={backgroundStyle}>
      <div className="container">
        <div className={innerClasses}>
          <div className="hero-content">
            <h1
              style={{
                color: '#454545', 
                fontSize: '3rem', 
                marginBottom: '1.5rem',
                textShadow: '1px 1px 2px rgba(0,0,0,0.1)'
              }}
              className="mt-0 mb-16 reveal-from-bottom"
              data-reveal-delay="100"
            >
              Jared's Barbershop
            </h1>
              {/* Video container with CSS classes */}
            <div className="video-container-wrapper">
              {/* First video */}
              <div className="video-container">
                <video
                  ref={video1Ref}
                  className="video-style video-player-1"
                  muted
                  playsInline
                  loop
                  controls
                  id="video-player-1"
                >
                  <source src={video1} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              
              {/* Second video */}
              <div className="video-container">
                <video
                  ref={video2Ref}
                  className="video-style video-player-2"
                  muted
                  playsInline
                  loop
                  controls
                  id="video-player-2"
                >
                  <source src={video2} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              
              {/* Third video */}
              <div className="video-container">
                <video
                  ref={video3Ref}
                  className="video-style video-player-3"
                  muted
                  playsInline
                  loop
                  controls
                  id="video-player-3"
                >
                  <source src={video3} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
            
            <div className="reveal-from-bottom" data-reveal-delay="200" style={{marginTop: '40px'}}>
              <ButtonGroup wideMobile>
                  <BookLink
                    to="/booking"
                    className="button button-wide-mobile"
                    style={{
                      color: 'white',
                      backgroundColor: '#454545',
                      padding: '12px 32px',
                      fontSize: '1.1rem',
                      fontWeight: 'bold'
                    }}
                  >
                    Book now
                  </BookLink>
              </ButtonGroup>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

Hero.propTypes = propTypes;
Hero.defaultProps = defaultProps;

export default Hero;
