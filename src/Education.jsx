import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import './Education.css';

const EducationCard = ({ isNavBarClosed, setIsNavBarClosed }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const isActive = location.pathname === '/education';
  const educationData = [
    {
      title: "Bachelor of Technology, Computer Science & Engineering",
      institution: "Indian Institute of Information Technology, Senapati Manipur",
      year: "2022 - 2026",
      description: "Currenlty Pursuing and holding a CPI of 8.55 till 6th semester. Held the position of General Secretary of Technical Board Gymkhana. SIH'23 Finalist. GATE Qualified 24 - DSAI & CSIT",
      images: [
        "https://storage.googleapis.com/portfolio-pseudophoenix/1000006407%20(3).jpg",
        "https://storage.googleapis.com/portfolio-pseudophoenix/IMG_20240201_202220.jpg",
        "https://storage.googleapis.com/portfolio-pseudophoenix/al10906_SIH_MT_DAY_20122023_458_0.JPG"
      ]
    },
    {
      title: "Senior Secondary Education",
      institution: "Surevin International School, Niwari",
      year: "2020 - 2022",
      description: "Completed 12th grade with Physics, Chemistry, and Mathematics as main subjects and achieved 94.3% in final examinations and ranked 5th position in school.",
      images: [
        "https://storage.googleapis.com/portfolio-pseudophoenix/482260096_3932387313688697_4131085957098344810_n.jpg",
        "https://storage.googleapis.com/portfolio-pseudophoenix/IMG-20220730-WA0019.jpg",
        // "https://storage.googleapis.com/portfolio-pseudophoenix/IMG-20220730-WA0020.jpg",
        "https://storage.googleapis.com/portfolio-pseudophoenix/482222098_3932598280334267_5995637256767237398_n.jpg",
        // "https://storage.googleapis.com/portfolio-pseudophoenix/IMG-20220730-WA0006.jpg",
        // "https://storage.googleapis.com/portfolio-pseudophoenix/IMG-20220730-WA0035.jpg"
      ]
    },
    {
      title: "Secondary Education",
      institution: "Dayawati Modi Public School, Modinagar",
      year: "2018 - 2020",
      description: "Completed 10th grade with distinction in Science and Mathematics. Active participant in school's computer club and robotics team. Scored 97.1% and ranked 3rd in school.",
      images: [
        "https://storage.googleapis.com/portfolio-pseudophoenix/IMG-20191024-WA0042.jpg",
        "https://storage.googleapis.com/portfolio-pseudophoenix/IMG-20191024-WA0086.jpg",
        "https://storage.googleapis.com/portfolio-pseudophoenix/IMG-20191 024-WA0001.jpg",
        // "https://storage.googleapis.com/portfolio-pseudophoenix/1.jpeg"  
      ]
    }
  ];

  // Auto-rotate slides every 5 seconds
  useEffect(() => {
    const collegeItem = educationData.find(item => item.images);
    if (!collegeItem) return;
    console.log(collegeItem.title);
    const interval = setInterval(() => {
      setCurrentSlide(prev => ((prev + 1) % collegeItem.images.length));
    }, 3000);

    return () => clearInterval(interval);
  }, [educationData]);

  const handleDotClick = (index) => {
    setCurrentSlide(index);
  };

  return (

    <div className={`card ${isActive ? 'card-visible' : ''}`}>
      <div className='card-header' style={{ background: '#ffdd1c', '--clr': '#ffdd1c' }}>
        <h2>Education</h2>
        <NavLink to="/" className={isNavBarClosed ? 'cross-button-closed' : 'cross-button-open'} onClick={() => setIsNavBarClosed(!isNavBarClosed)}>
          <FaBars />
        </NavLink>
      </div>
      <div className='card-body'>

        <div className='education-content'>
          {educationData.map((edu, index) => (
            <div
              key={index}
              className={`education-item ${index % 2 === 0 ? 'lefta-text' : 'lefta-image'}`}
              data-aos={index % 2 === 0 ? "fade-aright" : "fade-aleft"}
            >
              { edu.images ? (
                <>
                  <div className="education-text">
                    <h3>{edu.title}</h3>
                    <h4>{edu.institution}</h4>
                    <p className="education-year">{edu.year}</p>
                    <p className="education-description">{edu.description}</p>
                  </div>
                  <div className="education-image-container">
                    <div className="image-carousel">
                      {edu.images.map((img, imgIndex) => (
                        <div
                          key={imgIndex}
                          className={`carousel-slide ${imgIndex === currentSlide ? 'active' : ''}`}
                        >
                          {/* {console.log(images)} */}
                          <img
                            src={img}
                            alt={`${edu.title} ${imgIndex + 1}`}
                            className="education-image"
                          />
                        </div>
                      ))}
                      <div className="carousel-dots">
                        {edu.images.map((_, dotIndex) => (
                          <span
                            key={dotIndex}
                            className={`dot ${dotIndex === currentSlide ? 'active' : ''}`}
                            onClick={() => handleDotClick(dotIndex)}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </>
              ) : index % 2 === 0 ? (
                <>
                  <div className="education-text">
                    <h3>{edu.title}</h3>
                    <h4>{edu.institution}</h4>
                    <p className="education-year">{edu.year}</p>
                    <p className="education-description">{edu.description}</p>
                  </div>
                  <div className="education-image-container">
                    <div className="image-carousel">
                      {edu.images.map((img, imgIndex) => (
                        <div
                          key={imgIndex}
                          className={`carousel-slide ${imgIndex === currentSlide ? 'active' : ''}`}
                        >
                          <img
                            src={img}
                            alt={`${edu.title} ${imgIndex + 1}`}
                            className="education-image"
                          />
                        </div>
                      ))}
                      <div className="carousel-dots">
                        {edu.images.map((_, dotIndex) => (
                          <span
                            key={dotIndex}
                            className={`dot ${dotIndex === currentSlide ? 'active' : ''}`}
                            onClick={() => handleDotClick(dotIndex)}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className="education-image-container">
                    <div className="image-carousel">
                      {edu.images.map((img, imgIndex) => (
                        <div
                          key={imgIndex}
                          className={`carousel-slide ${imgIndex === currentSlide ? 'active' : ''}`}
                        >
                          <img
                            src={img}
                            alt={`${edu.title} ${imgIndex + 1}`}
                            className="education-image"
                          />
                        </div>
                      ))}
                      <div className="carousel-dots">
                        {edu.images.map((_, dotIndex) => (
                          <span
                            key={dotIndex}
                            className={`dot ${dotIndex === currentSlide ? 'active' : ''}`}
                            onClick={() => handleDotClick(dotIndex)}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="education-text">
                    <h3>{edu.title}</h3>
                    <h4>{edu.institution}</h4>
                    <p className="education-year">{edu.year}</p>
                    <p className="education-description">{edu.description}</p>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EducationCard;