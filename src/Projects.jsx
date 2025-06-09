import { useLocation, NavLink } from 'react-router-dom';
import { FaBars, FaGithub, FaExternalLinkAlt, FaExpand, FaCompress } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import './Projects.css';
import CircularGallery from './CircularGallery';
const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce solution with cart functionality.",
    tools: ["React", "Node.js", "MongoDB"],
    githubLink: "https://github.com/yourusername/ecommerce",
    liveLink: "https://tnp-web.vercel.app/",
    previewUrl: "https://tnp-web.vercel.app/"
  },
  {
    id: 2,
    title: "Portfolio Website",
    description: "A responsive portfolio with smooth animations.",
    tools: ["React", "GSAP", "Tailwind"],
    githubLink: "https://github.com/yourusername/portfolio",
    liveLink: "https://alok-nine.vercel.app/",
    previewUrl: "https://alok-nine.vercel.app/"
  }
];

const ProjectCard = ({ isNavBarClosed, setIsNavBarClosed }) => {
  const location = useLocation();
  const isActive = location.pathname === '/projects';
  const [expandedProject, setExpandedProject] = useState(null);
  const [isLoading, setIsLoading] = useState({});

  const toggleExpand = (projectId) => {
    setExpandedProject(expandedProject === projectId ? null : projectId);
  };

  const handleIframeLoad = (projectId) => {
    setIsLoading(prev => ({ ...prev, [projectId]: false }));
  };

  return (
    <motion.div 
      className={`card ${isActive ? 'card-visible' : ''}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <div className='card-header' style={{ background: '#39bd00', '--clr': '#39bd00' }}>
        <h2>Projects</h2>
        <NavLink to="/" className={isNavBarClosed ? 'cross-button-closed' : 'cross-button-open'} onClick={() => setIsNavBarClosed(!isNavBarClosed)}>
          <FaBars />
        </NavLink>
      </div>

      <div className='card-body'>
        <div className="projects-container">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className={`project-item ${expandedProject === project.id ? 'expanded' : ''}`}
              layout
              transition={{ type: "spring", damping: 25 }}
            >
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="tools-used">
                  {project.tools.map(tool => (
                    <span key={tool} className="tool-tag">{tool}</span>
                  ))}
                </div>
                <div className="project-links">
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                    <FaGithub /> Code
                  </a>
                  <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                    <FaExternalLinkAlt /> Live
                  </a>
                  <button 
                    onClick={() => toggleExpand(project.id)}
                    className="expand-btn"
                  >
                    {expandedProject === project.id ? <FaCompress /> : <FaExpand />}
                  </button>
                </div>
              </div>

              <AnimatePresence>
                <motion.div
                  className="preview-container"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ 
                    opacity: 1, 
                    height: expandedProject === project.id ? '500px' : '0' 
                  }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {isLoading[project.id] !== false && (
                    <div className="iframe-loading">Loading preview...</div>
                  )}
                  <iframe
                    src={project.previewUrl}
                    title={`${project.title} Preview`}
                    onLoad={() => handleIframeLoad(project.id)}
                    style={{ opacity: isLoading[project.id] === false ? 1 : 0 }}
                    sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
                    referrerPolicy="no-referrer"
                  />
                </motion.div>
              </AnimatePresence>
            </motion.div>
          ))}
        {/* <CircularGallery/>   */}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;