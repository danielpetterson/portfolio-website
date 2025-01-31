import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

function Projects() {
  const projectsData = [
    {
      image: '/projects/project1.png',
      projectName: 'Estimating Exposure of Vulnerable Seabird Populations to Offshore Light Pollution',
      projectLink: 'https://docnewzealand.shinyapps.io/seabird_ALAN/',
      projectDescription:
        'Research into tracking the migration patterns of vulnerable seabirds using data obtained from light-level loggers. This data was also used to determine the geographic and temporal distribution of artificial light events that pose a threat to these species. ',
      projectTech: ['R', 'Bayesian Modelling', 'Shiny'],
      projectExternalLinks: {
        // github: '',
        externalLink: 'https://danielpetterson.github.io/proj/Estimating-Exposure-of-Vulnerable-Seabird-Populations-to-Offshore-Light-Pollution.pdf',
      },
    },
    {
      image: '/projects/project2.png',
      projectName: 'Generative aRt',
      projectLink: 'https://danielpetterson.shinyapps.io/generative-art-particles/',
      projectDescription:
        'This app allows users to easily generate art using a particle physics simulation package and a variety of data visualisation options.',
      projectTech: ['R', 'Visualisation', 'Shiny'],
      projectExternalLinks: {
        // github: 'https://github.com/danielpetterson/generative-aRt-particles',
        externalLink: 'https://danielpetterson.shinyapps.io/generative-art-particles/',
      },
    },
    {
      image: '/projects/project3.png',
      projectName: 'Time Series Analysis of Spanish Electricity Generation',
      projectLink: 'https://danielpetterson.github.io/proj/TS_EDA_Report.html',
      projectDescription:
        "This project examines the evolution of electricity generation methods in Spain over time. It explores the relationship between various energy sources and evaluates Spain's progress toward achieving a carbon-free electrical grid.",
      projectTech: ['R', 'EDA', 'Time Series'],
      projectExternalLinks: {
        // github: 'https://github.com/danielpetterson/TimeSeriesElectricity',
        externalLink: 'https://danielpetterson.github.io/proj/TS_EDA_Report.html',
      },
    },
  ];

  return (
    <div id="work" className="projects" style={{ paddingTop: '170px' }}>
      <motion.div
        className="title"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        variants={{
          visible: { opacity: 1, y: -50 },
          hidden: { opacity: 0, y: 0 },
        }}
      >
        <h2>Some Things I&apos;ve Built</h2>
      </motion.div>
      <div className="projects-container">
        {projectsData.map(
          ({
            image,
            projectDescription,
            projectLink,
            projectExternalLinks,
            projectName,
            projectTech,
          }) => {
            return (
              <motion.div
                className="project"
                key={projectName}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                variants={{
                  visible: { opacity: 1, y: -50 },
                  hidden: { opacity: 0, y: 0 },
                }}
              >
                <div className="project-image" onClick={() => window.open(projectLink, '_blank')}>
                  <div className="project-image-overlay"></div>
                  <div className="project-image-container">
                    <Image src={image} fill loading="lazy" alt={projectName} quality={100} />
                  </div>
                </div>
                <motion.div
                  className="project-info"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  <h3 className="project-info-title">
                    <span
                      className="cursor-pointer"
                      onClick={() => window.open(projectLink, '_blank')}
                    >
                      {projectName}
                    </span>
                  </h3>
                  <div className="project-info-description">
                    <p>{projectDescription}</p>
                  </div>
                  <ul className="project-info-tech-list">
                    {projectTech.map((tech) => (
                      <motion.li
                        className="project-info-tech-list-item"
                        key={tech}
                        whileHover={{ y: -2, color: 'var(--theme-color)' }}
                        transition={{ duration: 0.2 }}
                      >
                        {tech}
                      </motion.li>
                    ))}
                  </ul>
                  <ul className="project-info-links">
                    <motion.li
                      className="project-info-links-item"
                      whileHover={{ y: -2 }}
                      transition={{ duration: 0.2 }}
                    >
                      {/* <Link
                        href={projectExternalLinks.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-info-links-item-link"
                      >
                        <Github />
                      </Link> */}
                    </motion.li>
                    <motion.li
                      className="project-info-links-item"
                      whileHover={{ y: -2 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Link
                        href={projectExternalLinks.externalLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-info-links-item-link"
                      >
                        <ExternalLink />
                      </Link>
                    </motion.li>
                  </ul>
                </motion.div>
              </motion.div>
            );
          },
        )}
      </div>
    </div>
  );
}

export default Projects;
