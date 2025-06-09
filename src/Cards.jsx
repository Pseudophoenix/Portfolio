import { useLocation } from 'react-router-dom';
import './Cards.css';
import SkillCard from './SkillCard';
import { useState } from 'react';
import { FaX, FaBars } from 'react-icons/fa6';
import BlogCard from './Blog';
import EducationCard from './Education';
import { NavLink } from 'react-router-dom';
import { FaExternalLinkAlt } from 'react-icons/fa';
import ProjectCard from './Projects';
// import Card from './Card.jsx';
const HomeCard = ({ isNavBarClosed, setIsNavBarClosed }) => {
  const location = useLocation();
  const isActive = location.pathname === '/' || location.pathname === '/home';

  return (
    <div className={`card ${isActive ? 'card-visible' : ''}`}>
      <div className='card-header' style={{ '--clr': ' #00ade1' }}>
        <h2>Intro</h2>
        <NavLink to="/" className={isNavBarClosed ? 'cross-button-closed' : 'cross-button-open'} onClick={() => setIsNavBarClosed(!isNavBarClosed)}><FaBars /></NavLink>
      </div>
      <div className="card-content">
      <h3>Hi! I am Alok</h3>
      </div>
    </div>
  );
};

const SkillsCard = ({ isNavBarClosed, setIsNavBarClosed }) => {
  const location = useLocation();
  const isActive = location.pathname === '/skills';
  const [hoveredSkill, setHoveredSkill] = useState(null);

  // Sample skills data - replace with your actual skills
  const skills = [
    {
      id: 1,
      name: 'React',
      image: 'https://th.bing.com/th/id/R.f81a6f373c244b1f70f4b7402b5ab372?rik=rbXh4ieLuKt%2bmA&riu=http%3a%2f%2flogos-download.com%2fwp-content%2fuploads%2f2016%2f09%2fReact_logo_logotype_emblem.png&ehk=QhGOkKcUKCU7FBQgHOajOiJqJBACUTD2Ni6LsfqzCEA%3d&risl=&pid=ImgRaw&r=0',
      certificateLink: 'https://example.com/certificate1',
      proficiency: 4, // out of 5
      description: 'Building interactive UIs with React hooks and context API',
      yearsExperience: 2,
      projectsUsed: 10
    },
    {
      id: 2,
      name: 'JavaScript',
      image: 'https://media.geeksforgeeks.org/wp-content/uploads/20190906180444/How-to-Become-a-JavaScript-Developer.png',
      certificateLink: 'https://example.com/certificate2',
      proficiency: 4,
      description: 'Modern ES6+ JavaScript with functional programming',
      yearsExperience: 4,
      projectsUsed: 25
    },
    {
      id: 3,
      name: 'NextJS',
      image: 'https://storage.googleapis.com/portfolio-pseudophoenix/10310009.png',
      certificateLink: 'https://example.com/certificate2',
      proficiency: 3,
      description: 'Modern ES6+ JavaScript with functional programming',
      yearsExperience: 4,
      projectsUsed: 25
    },
    {
      id: 4,
      name: 'Python',
      image: 'https://contentstatic.techgig.com/photo/82905582/5-must-have-python-developer-skills-to-be-successful.jpg?91397',
      certificateLink: 'https://example.com/certificate2',
      proficiency: 4.5,
      description: 'Modern ES6+ JavaScript with functional programming',
      yearsExperience: 4,
      projectsUsed: 25
    },
    {
      id: 5,
      name: 'DevOps',
      image: 'https://storage.googleapis.com/portfolio-pseudophoenix/2648921.jpg',
      certificateLink: 'https://example.com/certificate2',
      proficiency: 4.25,
      description: 'Modern ES6+ JavaScript with functional programming',
      yearsExperience: 2,
      projectsUsed: 25
    }
    // Add more skills as needed
  ];

  return (
    // <div className={`card ${isActive ? 'card-visible' : ''}`} >
    //   <div className='card-header' style={{ background: '#ff4443', '--clr': '#ff4443' }}>
    //     <h2>Skills</h2>
    //     <NavLink to="/" className={isNavBarClosed ? 'cross-button-closed' : 'cross-button-open'} onClick={() => setIsNavBarClosed(!isNavBarClosed)}><FaBars /></NavLink>
    //   </div>
    //   <div className='card-body'>
    //   </div>
    // </div>
    <div className={`card ${isActive ? 'card-visible' : ''}`}>
      <div className='card-header' style={{ background: '#ff4443', '--clr': '#ff4443' }}>
        <h2>Skills</h2>
        <NavLink
          to="/"
          className={isNavBarClosed ? 'cross-button-closed' : 'cross-button-open'}
          onClick={() => setIsNavBarClosed(!isNavBarClosed)}
        >
          <FaBars />
        </NavLink>
      </div>

      <div className='card-body skills-container'>
        {skills.map((skill) => (
          <div
            key={skill.id}
            className={`skill-wrapper ${hoveredSkill === skill.id ? 'skill-hovered' : ''}`}
            onMouseEnter={() => setHoveredSkill(skill.id)}
            onMouseLeave={() => setHoveredSkill(null)}
          >
            <SkillCard
              name={skill.name}
              image={skill.image}
              certificateLink={skill.certificateLink}
              proficiency={skill.proficiency}
              description={skill.description}
              yearsExperience={skill.yearsExperience}
              projectsUsed={skill.projectsUsed}
            />

            {/* Proficiency bar */}
            <div className="proficiency-bar">
              <div
                className="proficiency-level"
                style={{ width: `${(skill.proficiency / 5) * 100}%` }}
                data-proficiency={`${skill.proficiency}/5`}
              ></div>
            </div>

            {/* Certificate link */}
            {skill.certificateLink && (
              <a
                href={skill.certificateLink}
                target="_blank"
                rel="noopener noreferrer"
                className="certificate-link"
              >
                View Certificate <FaExternalLinkAlt />
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

// const EducationCard = ({ isNavBarClosed, setIsNavBarClosed }) => {
//   const location = useLocation();
//   const isActive = location.pathname === '/services';

//   return (

//             <Education
//           isActive={true}  // Controls visibility (e.g., based on route)
//           isNavBarClosed={isNavBarClosed}  // State for navbar toggle
//           setIsNavBarClosed={setIsNavBarClosed}  // Setter function
//         />
//     // <div className={`card ${isActive ? 'card-visible' : ''}`}>
//     //   <div className='card-header' style={{ background: '#ffdd1c', '--clr': '#ffdd1c' }}>
//     //     <h2>Education</h2>
//     //     <NavLink to="/" className={isNavBarClosed ? 'cross-button-closed' : 'cross-button-open'} onClick={() => setIsNavBarClosed(!isNavBarClosed)}><FaBars /></NavLink>
//     //   </div>
//     //   <div className='card-body'>

//     //     <h2 style={{ color: 'black' }}></h2>
//     //     <div className="card-content">
//     //     </div>
//     //   </div>
//     // </div>
//   );
// };


// const BlogCard = ({ isNavBarClosed, setIsNavBarClosed }) => {
//   const location = useLocation();
//   const isActive = location.pathname === '/team';

//   return (
//     <div className={`card ${isActive ? 'card-visible' : ''}`}>
//       <div className='card-header' style={{ background: '#ff0dff', '--clr': '#ff0dff' }}>
//         <h2>Blog</h2>
//         <NavLink to="/" className={isNavBarClosed ? 'cross-button-closed' : 'cross-button-open'} onClick={() => setIsNavBarClosed(!isNavBarClosed)}><FaBars /></NavLink>
//       </div>
//       <div className='card-body'>
//         <h2 style={{ color: 'black' }}>Blog</h2>
//         <div className="card-content">
//           <h3></h3>
//         </div>
//       </div>

//     </div>
//   );
// };


// const ProjectCard = ({ isNavBarClosed, setIsNavBarClosed }) => {
//   const location = useLocation();
//   const isActive = location.pathname === '/team';

//   return (
//     <div className={`card ${isActive ? 'card-visible' : ''}`}>
//       <div className='card-header' style={{ background: '#7bfb00', '--clr': '#7bfb00' }}>
//         <h2>Project</h2>
//         <NavLink to="/" className={isNavBarClosed ? 'cross-button-closed' : 'cross-button-open'} onClick={() => setIsNavBarClosed(!isNavBarClosed)}><FaBars /></NavLink>
//       </div>
//       <div className='card-body'>
//         <h2>Project</h2>
//         <div className="card-content">
//           <h3></h3>
//         </div>
//       </div>

//     </div>
//   );
// };

export { HomeCard, SkillsCard, EducationCard, ProjectCard, BlogCard };