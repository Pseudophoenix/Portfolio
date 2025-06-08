import { useState, useEffect } from 'react';
import { FaStar } from 'react-icons/fa';

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

export default SkillCard;