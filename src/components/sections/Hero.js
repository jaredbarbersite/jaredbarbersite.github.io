import React, { useEffect, useRef, useState } from "react";
import classNames from "classnames";
import { SectionProps } from "../../utils/SectionProps";
import video1 from "../../video1.mp4";
import video2 from "../../video2.mp4";
import video3 from "../../video3.mp4";
import logo from "../../logo.png";
import { Link as BookLink } from "react-router-dom";
import "./Hero.css";

const videos = [video1, video2, video3];

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
  const videoRef = useRef(null);
  const [currentVideo, setCurrentVideo] = useState(0);

  useEffect(() => {
    const playVideo = () => {
      if (videoRef.current) {
        videoRef.current.play().catch(() => {
          // Mobile browsers may wait for the first user interaction.
        });
      }
    };

    playVideo();

    const handleUserInteraction = () => {
      playVideo();
      document.removeEventListener("click", handleUserInteraction);
      document.removeEventListener("touchstart", handleUserInteraction);
    };

    document.addEventListener("click", handleUserInteraction);
    document.addEventListener("touchstart", handleUserInteraction);

    return () => {
      document.removeEventListener("click", handleUserInteraction);
      document.removeEventListener("touchstart", handleUserInteraction);
    };
  }, [currentVideo]);

  const playNextVideo = () => {
    setCurrentVideo((currentVideo + 1) % videos.length);
  };

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
      <div className="container hero-shell">
        <div className={innerClasses}>
          <div className="hero-content">
            <img
              className="hero-logo"
              src={logo}
              alt="Jared's Barbershop"
            />

            <div className="video-container">
              <video
                ref={videoRef}
                className="video-style"
                src={videos[currentVideo]}
                muted
                autoPlay
                playsInline
                onEnded={playNextVideo}
                aria-label={`Barbershop video ${currentVideo + 1} of ${videos.length}`}
              >
                Your browser does not support the video tag.
              </video>
            </div>

            <div className="hero-booking">
              <BookLink to="/booking" className="hero-book-button">
                Book now
              </BookLink>
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
