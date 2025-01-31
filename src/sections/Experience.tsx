import { motion } from 'framer-motion';
import Link from 'next/link';
import { useEffect, useState } from 'react';

function Experience() {
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    const transformSelected = () => {
      const underline = document.querySelector<HTMLElement>('.underline');
      underline!.style.top = `${selected * 2.5}rem`;
    };
    transformSelected();
  }, [selected]);

  const experiences = [
    {
      name: 'Datasquared',
      role: 'Data Consultant',
      url: 'https://www.datasqua.red',
      start: 'March 2024',
      end: 'Ongoing',
      shortDescription: [
        'I help organisations make more informed decisions based on statistics.'
      ],
    },
    {
      name: 'AviaNZ',
      role: 'Research Assistant',
      url: 'https://www.avianz.net/',
      start: 'November 2022',
      end: 'February 2023',
      shortDescription: [
        'Developed and evaluated various deep learning models to identify specific bird calls, aiding in the generation of accurate population estimates for conservation efforts.',
        'Designed and optimized an end-to-end data pipeline to streamline platform usage, enhancing accessibility and efficiency for other researchers.',
      ],
    },
    {
      name: 'Australian Institute of Business',
      role: 'Performance Insights Analyst',
      url: 'https://www.aib.edu.au/',
      start: 'October 2021',
      end: 'May 2022',
      shortDescription: [
        'Responsible for ad hoc reporting on the performance of marketing campaigns, recruitment and student outcomes.',
        'Developed and maintained a series of reporting dashboards for various stakeholders regarding a series of key performance metrics.',
      ],
    },
    {
      name: 'Department of Conservation',
      role: 'Technical Support Analyst',
      url: 'https://www.doc.govt.nz/',
      start: 'November 2021',
      end: 'February 2022',
      shortDescription: [
        'Conducted research into the prevalence of light pollution in the migration routes of a range of at-risk seabird species.',
        'Developed a Shiny application to display geolocation data for individual seabirds and species, enabling better tracking and analysis.',
      ],
    }
  ];

  return (
    <motion.div
      className="experience"
      id="experience"
      style={{ paddingTop: '250px' }}
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
        <h2>Where I&apos;ve Worked</h2>
      </div>
      <div className="container">
        <ul className="exp-slider">
          <div className="underline"></div>
          {experiences.map((experience, index) => (
            <li
              className={`exp-slider-item ${index === selected ? 'exp-slider-item-selected' : ''}`}
              onClick={() => setSelected(index)}
              key={`${experience.name}-${index}`}
            >
              <span>{experience.name}</span>
            </li>
          ))}
        </ul>
        <div className="exp-details">
          <div className="exp-details-position">
            <h3>
              <span>{experiences[selected].role}</span>
              <span className="exp-details-position-company">
                &nbsp;@&nbsp;
                <Link href={experiences[selected].url} legacyBehavior>
                  <a target="_blank" rel="noopener noreferrer" className="link">
                    {experiences[selected].name}
                  </a>
                </Link>
              </span>
            </h3>
            <p className="exp-details-range">
              {experiences[selected].start} - {experiences[selected].end}
            </p>
            <ul className="exp-details-list">
              {experiences[selected].shortDescription.map((description, index) => (
                <li key={index} className="exp-details-list-item">
                  {description}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Experience;
