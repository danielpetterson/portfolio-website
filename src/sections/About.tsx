import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

function About() {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Initial check
    checkMobile();

    // Add resize listener
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    console.log('Element is in view: ', isInView);
  }, [isInView]);

  const mobileText = {
    intro:
      'Hello! I am Daniel Petterson, a Statistical Consultant passionate about using data for environmental conservation and social change. I hold a Masters in Data Science from Victoria University of Wellington and a Postgraduate Diploma in Medical Statistics from the University of Auckland.',
    experience:
      '',
  };

  const desktopText = {
    intro:
      'Hello! I am Daniel Petterson, a Statistical Consultant passionate about using data for environmental conservation and social change. I hold a Masters in Data Science from Victoria University of Wellington and a Postgraduate Diploma in Medical Statistics from the University of Auckland.',
    experience:
      '',
  };

  return (
    <motion.div
      className="about"
      id="about"
      ref={ref}
      style={{ paddingTop: isMobile ? '150px' : '250px' }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      variants={{
        visible: { opacity: 1, y: -50 },
        hidden: { opacity: 0, y: 0 },
      }}
    >
      <div className="title">
        <h2>About Me</h2>
      </div>
      <div className="about-grid">
        <div className="about-grid-info">
          <p className="about-grid-info-text text-justify">
            {isMobile ? mobileText.intro : desktopText.intro}
          </p>
          <p className="about-grid-info-text text-justify">
            {isMobile ? mobileText.experience : desktopText.experience}
          </p>
          <p className="about-grid-info-text text-justify">
            Here are a few technologies I&apos;ve been working with recently:
          </p>

          <ul className="about-grid-info-list">
            <li className="about-grid-info-list-item">Shinylive</li>
            <li className="about-grid-info-list-item">Tableau</li>
            <li className="about-grid-info-list-item">Power BI</li>
            <li className="about-grid-info-list-item">Pytorch</li>
            <li className="about-grid-info-list-item">SimPy</li>
          </ul>
        </div>
        <div className="about-grid-photo">
          <div className="overlay"></div>
          <div className="overlay-border"></div>
          <div className="about-grid-photo-container">
            <Image
              src="/etc/profile.jpg"
              alt="profile"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default About;
