import { useState, useEffect } from 'react';
import { FaStar, FaBars, FaExternalLinkAlt } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
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

const SkillCard = ({
  name,
  image,
  certificateLink,
  proficiency,
  description,
  yearsExperience,
  projectsUsed
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Animation trigger
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`skill-card ${isVisible ? 'visible' : ''}`}>
      <div className="skill-image-container">
        <img src={image} alt={name} className="skill-image" />
      </div>

      <h3 className="skill-name">{name}</h3>

      <p className="skill-description">{description}</p>

      <div className="skill-meta">
        <span className="skill-meta-item">
          <strong>{yearsExperience}</strong> year{yearsExperience > 1 ? 's' : ''}
        </span>
        <span className="skill-meta-item">
          <strong>{projectsUsed}</strong> project{projectsUsed > 1 ? 's' : ''}
        </span>
      </div>

      <div className="skill-stars">
        {[...Array(5)].map((_, i) => (
          <FaStar
            size={25}
            key={i}
            className={i < proficiency ? 'star-filled' : 'star-empty'}
          />
        ))}
      </div>
    </div>
  );
};

export default SkillsCard;