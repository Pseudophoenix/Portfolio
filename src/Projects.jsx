// import { useLocation, NavLink } from 'react-router-dom';
// import { FaBars, FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
// import { motion } from 'framer-motion';
// import { Tooltip } from 'react-tooltip';
// import 'react-tooltip/dist/react-tooltip.css';
// import "./Projects.css";
// const projects = [
//   {
//     id: 1,
//     title: "E-Commerce Platform",
//     description: "A full-stack e-commerce solution with cart functionality, user authentication, and payment processing.",
//     tools: ["React", "Node.js", "MongoDB", "Stripe"],
//     githubLink: "https://github.com/yourusername/ecommerce-platform",
//     liveLink: "https://yourecommerceapp.com",
//     color: "#FF6B6B"
//   },
//   {
//     id: 2,
//     title: "Task Management App",
//     description: "A productivity application for organizing tasks with drag-and-drop functionality and team collaboration.",
//     tools: ["React", "Firebase", "Material UI", "Redux"],
//     githubLink: "https://github.com/yourusername/task-manager",
//     liveLink: "https://yourtaskapp.com",
//     color: "#4ECDC4"
//   },
//   {
//     id: 3,
//     title: "Portfolio Website",
//     description: "A responsive personal portfolio showcasing my projects and skills with smooth animations.",
//     tools: ["React", "GSAP", "Tailwind CSS", "Framer Motion"],
//     githubLink: "https://github.com/yourusername/portfolio",
//     liveLink: "https://yourportfolio.com",
//     color: "#FFD166"
//   }
// ];

// const toolIcons = {
//   "React": "⚛️",
//   "Node.js": "🟢",
//   "MongoDB": "🍃",
//   "Stripe": "💳",
//   "Firebase": "🔥",
//   "Material UI": "🎨",
//   "Redux": "🔄",
//   "GSAP": "🎬",
//   "Tailwind CSS": "🌊",
//   "Framer Motion": "✨"
// };

// const ProjectCard = ({ isNavBarClosed, setIsNavBarClosed }) => {
//   const location = useLocation();
//   const isActive = location.pathname === '/projects';

//   return (
//     <motion.div 
//       className={`card ${isActive ? 'card-visible' : ''}`}
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.5 }}
//     >
//       <div className='card-header' style={{ background: '#7bfb00', '--clr': '#7bfb00' }}>
//         <h2>My Projects</h2>
//         <NavLink to="/" className={isNavBarClosed ? 'cross-button-closed' : 'cross-button-open'} onClick={() => setIsNavBarClosed(!isNavBarClosed)}>
//           <FaBars />
//         </NavLink>
//       </div>
      
//       <div className='card-body'>
//         <h2>My Projects</h2>
//         <div className="projects-container">
//           {projects.map((project, index) => (
//             <motion.div
//               key={project.id}
//               className="project-item"
//               style={{ borderLeft: `4px solid ${project.color}` }}
//               initial={{ opacity: 0, x: -20 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ delay: index * 0.1, duration: 0.3 }}
//               whileHover={{ scale: 1.02 }}
//             >
//               <h3>{project.title}</h3>
//               <p>{project.description}</p>
              
//               <div className="tools-used">
//                 {project.tools.map(tool => (
//                   <span 
//                     key={tool} 
//                     className="tool-tag"
//                     data-tooltip-id="tool-tip"
//                     data-tooltip-content={tool}
//                   >
//                     {toolIcons[tool] || "⚙️"} {tool}
//                   </span>
//                 ))}
//               </div>
              
//               <div className="project-links">
//                 <a 
//                   href={project.githubLink} 
//                   target="_blank" 
//                   rel="noopener noreferrer"
//                   className="github-link"
//                 >
//                   <FaGithub /> View Code
//                 </a>
//                 {project.liveLink && (
//                   <a 
//                     href={project.liveLink} 
//                     target="_blank" 
//                     rel="noopener noreferrer"
//                     className="live-link"
//                   >
//                     <FaExternalLinkAlt /> Live Demo
//                   </a>
//                 )}
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
      
//       <Tooltip id="tool-tip" effect="solid" place="top" />
//     </motion.div>
//   );
// };

// export default ProjectCard;

import { useLocation, NavLink } from 'react-router-dom';
import { FaBars, FaGithub, FaExternalLinkAlt, FaExpand, FaCompress } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import './Projects.css';
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
      <div className='card-header' style={{ background: '#7bfb00', '--clr': '#7bfb00' }}>
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
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;