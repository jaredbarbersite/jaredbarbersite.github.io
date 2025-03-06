import React, { useEffect, useRef } from "react";
import classNames from "classnames";
import { SectionProps } from "../../utils/SectionProps";
import ButtonGroup from "../elements/ButtonGroup";
import video1 from "../../video1.mp4";
import video2 from "../../video2.mp4";
import video3 from "../../video3.mp4";
import { Link as BookLink } from "react-router-dom";

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

  const videoStyle = {
    width: '100%',
    height: '100%',
    objectFit: 'cover'
  };
  
  // Larger container style for videos
  const containerStyle = {
    width: '32%',
    height: '500px', // Even larger height
    overflow: 'hidden',
    borderRadius: '5px',
    boxShadow: '0 6px 12px rgba(0,0,0,0.3)'
  };

  // Hero section with brand colors
  const heroStyle = {
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
  
  // Video container wrapper style - forcing side by side
  const videoContainerStyle = {
    display: 'flex', 
    justifyContent: 'space-between', 
    gap: '20px', 
    marginTop: '40px',
    flexWrap: 'nowrap', // Ensures they STAY side by side
    maxWidth: '100%', // Allow full width
    margin: '0 auto',
    overflowX: 'auto' // Allow horizontal scroll on mobile instead of stacking
  };

  return (
    <section {...props} className={outerClasses} style={heroStyle}>
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
            
            {/* Video container with flexbox - using full width container */}
            <div style={videoContainerStyle}>
              {/* First video */}
              <div style={containerStyle}>
                <video
                  ref={video1Ref}
                  className="video-player-1"
                  muted
                  playsInline
                  loop
                  controls
                  id="video-player-1"
                  style={videoStyle}
                >
                  <source src={video1} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              
              {/* Second video */}
              <div style={containerStyle}>
                <video
                  ref={video2Ref}
                  className="video-player-2"
                  muted
                  playsInline
                  loop
                  controls
                  id="video-player-2"
                  style={videoStyle}
                >
                  <source src={video2} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              
              {/* Third video */}
              <div style={containerStyle}>
                <video
                  ref={video3Ref}
                  className="video-player-3"
                  muted
                  playsInline
                  loop
                  controls
                  id="video-player-3"
                  style={videoStyle}
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
