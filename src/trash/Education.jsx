// <div className={`education-container ${isNavBarClosed ? 'sidebar-closed' : 'sidebar-open'}`}>
    //   <div className='education-header' style={{ background: '#ffdd1c' }}>
    //     <h2>Education</h2>
    //     {/* <NavLink
    //       to="/"
    //       className="cross-button"
    //       onClick={() => setIsNavBarClosed(!isNavBarClosed)}
    //     >
    //       <FaBars />
    //     </NavLink> */}
    //   </div>

    // // // import { useState } from 'react';
// // // import { NavLink } from 'react-router-dom';
// // // import { FaBars } from 'react-icons/fa';
// // // import './Education.css'; // You'll need to create this CSS file

// // // const Education = ({ isActive, isNavBarClosed, setIsNavBarClosed }) => {
// // //   const educationData = [
// // //     {
// // //       title: "College Degree",
// // //       institution: "University of Technology",
// // //       year: "2020 - 2024",
// // //       description: "Bachelor of Science in Computer Science with specialization in Artificial Intelligence. Graduated with honors and completed several research projects in machine learning.",
// // //       image: "college-image.jpg" // Replace with your actual image path
// // //     },
// // //     {
// // //       title: "Senior Secondary Education",
// // //       institution: "Modern Public School",
// // //       year: "2018 - 2020",
// // //       description: "Completed 12th grade with Physics, Chemistry, and Mathematics as main subjects. Achieved 95% in final examinations and participated in national science olympiad.",
// // //       image: "senior-secondary-image.jpg" // Replace with your actual image path
// // //     },
// // //     {
// // //       title: "Secondary Education",
// // //       institution: "St. Mary's High School",
// // //       year: "2016 - 2018",
// // //       description: "Completed 10th grade with distinction in Science and Mathematics. Active participant in school's computer club and robotics team.",
// // //       image: "secondary-image.jpg" // Replace with your actual image path
// // //     }
// // //   ];

// // //   return (
// // //     <div className={`card education-ard ${isActive ? 'card-visible' : ''}`}>
// // //       <div className='card-header' style={{ background: '#ffdd1c', '--clr': '#ffdd1c' }}>
// // //         <h2>Education</h2>
// // //         <NavLink 
// // //           to="/" 
// // //           className={isNavBarClosed ? 'cross-button-closed' : 'cross-button-open'} 
// // //           onClick={() => setIsNavBarClosed(!isNavBarClosed)}
// // //         >
// // //           <FaBars />
// // //         </NavLink>
// // //       </div>

// // //       <div className='card-body education-body'>
// // //         {educationData.map((edu, index) => (
// // //           <div 
// // //             key={index} 
// // //             className={`education-item ${index % 2 === 0 ? 'left-text' : 'left-image'}`}
// // //             data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
// // //           >
// // //             {index % 2 === 0 ? (
// // //               <>
// // //                 <div className="education-text">
// // //                   <h3>{edu.title}</h3>
// // //                   <h4>{edu.institution}</h4>
// // //                   <p className="education-year">{edu.year}</p>
// // //                   <p className="education-description">{edu.description}</p>
// // //                 </div>
// // //                 <div className="education-image-container">
// // //                   <img 
// // //                     src={edu.image} 
// // //                     alt={edu.title} 
// // //                     className="education-image"
// // //                   />
// // //                 </div>
// // //               </>
// // //             ) : (
// // //               <>
// // //                 <div className="education-image-container">
// // //                   <img 
// // //                     src={edu.image} 
// // //                     alt={edu.title} 
// // //                     className="education-image"
// // //                   />
// // //                 </div>
// // //                 <div className="education-text">
// // //                   <h3>{edu.title}</h3>
// // //                   <h4>{edu.institution}</h4>
// // //                   <p className="education-year">{edu.year}</p>
// // //                   <p className="education-description">{edu.description}</p>
// // //                 </div>
// // //               </>
// // //             )}
// // //           </div>
// // //         ))}
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default Education;

// // import { useState, useEffect } from 'react';
// // import { NavLink } from 'react-router-dom';
// // import { FaBars } from 'react-icons/fa';
// // import './Education.css';
// // import AOS from 'aos';
// // import 'aos/dist/aos.css';

// // const EducationCard = ({ isNavBarClosed, setIsNavBarClosed }) => {
// //   const [isActive, setIsActive] = useState(false);

// //   useEffect(() => {
// //     AOS.init({
// //       duration: 800,
// //       easing: 'ease-in-out',
// //       once: true
// //     });
// //     setIsActive(true);
// //     return () => setIsActive(false);
// //   }, []);

// //   const educationData = [
// //     {
// //       title: "College Degree",
// //       institution: "University of Technology",
// //       year: "2020 - 2024",
// //       description: "Bachelor of Science in Computer Science with specialization in Artificial Intelligence. Graduated with honors and completed several research projects in machine learning.",
// //       image: "college-image.jpg"
// //     },
// //     {
// //       title: "Senior Secondary Education",
// //       institution: "Modern Public School",
// //       year: "2018 - 2020",
// //       description: "Completed 12th grade with Physics, Chemistry, and Mathematics as main subjects. Achieved 95% in final examinations and participated in national science olympiad.",
// //       image: "senior-secondary-image.jpg"
// //     },
// //     {
// //       title: "Secondary Education",
// //       institution: "St. Mary's High School",
// //       year: "2016 - 2018",
// //       description: "Completed 10th grade with distinction in Science and Mathematics. Active participant in school's computer club and robotics team.",
// //       image: "secondary-image.jpg"
// //     }
// //   ];

// //   return (
// //     <div className={`card education-card ${isActive ? 'card-visible' : ''}`}>
// //       <div className='card-header' style={{ background: '#ffdd1c', '--clr': '#ffdd1c' }}>
// //         <h2>Education</h2>
// //         <NavLink 
// //           to="/" 
// //           className={isNavBarClosed ? 'cross-button-closed' : 'cross-button-open'} 
// //           onClick={() => setIsNavBarClosed(!isNavBarClosed)}
// //         >
// //           <FaBars />
// //         </NavLink>
// //       </div>

// //       <div className='card-body education-body'>
// //         {educationData.map((edu, index) => (
// //           <div 
// //             key={index} 
// //             className={`education-item ${index % 2 === 0 ? 'left-text' : 'left-image'}`}
// //             data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
// //             data-aos-delay={index * 100}
// //           >
// //             {index % 2 === 0 ? (
// //               <>
// //                 <div className="education-text">
// //                   <h3>{edu.title}</h3>
// //                   <h4>{edu.institution}</h4>
// //                   <p className="education-year">{edu.year}</p>
// //                   <p className="education-description">{edu.description}</p>
// //                 </div>
// //                 <div className="education-image-container">
// //                   <img 
// //                     src={edu.image} 
// //                     alt={edu.title} 
// //                     className="education-image"
// //                   />
// //                 </div>
// //               </>
// //             ) : (
// //               <>
// //                 <div className="education-image-container">
// //                   <img 
// //                     src={edu.image} 
// //                     alt={edu.title} 
// //                     className="education-image"
// //                   />
// //                 </div>
// //                 <div className="education-text">
// //                   <h3>{edu.title}</h3>
// //                   <h4>{edu.institution}</h4>
// //                   <p className="education-year">{edu.year}</p>
// //                   <p className="education-description">{edu.description}</p>
// //                 </div>
// //               </>
// //             )}
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // };

// // export default EducationCard;

// import { useState } from 'react';
// import { NavLink } from 'react-router-dom';
// import { FaBars } from 'react-icons/fa';
// import './Education.css';

// const EducationCard = ({ isNavBarClosed, setIsNavBarClosed }) => {
//   const educationData = [
//     {
//       title: "College Degree",
//       institution: "University of Technology",
//       year: "2020 - 2024",
//       description: "Bachelor of Science in Computer Science with specialization in Artificial Intelligence. Graduated with honors and completed several research projects in machine learning.",
//       image: "college-image.jpg"
//     },
//     {
//       title: "Senior Secondary Education",
//       institution: "Modern Public School",
//       year: "2018 - 2020",
//       description: "Completed 12th grade with Physics, Chemistry, and Mathematics as main subjects. Achieved 95% in final examinations and participated in national science olympiad.",
//       image: "senior-secondary-image.jpg"
//     },
//     {
//       title: "Secondary Education",
//       institution: "St. Mary's High School",
//       year: "2016 - 2018",
//       description: "Completed 10th grade with distinction in Science and Mathematics. Active participant in school's computer club and robotics team.",
//       image: "secondary-image.jpg"
//     }
//   ];

//   return (
//     <div className={`education-container ${isNavBarClosed ? 'sidebar-closed' : 'sidebar-open'}`}>
//       <div className='education-header' style={{ background: '#ffdd1c' }}>
//         <h2>Education</h2>
//         <NavLink 
//           to="/" 
//           className="cross-button" 
//           onClick={() => setIsNavBarClosed(!isNavBarClosed)}
//         >
//           <FaBars />
//         </NavLink>
//       </div>

//       <div className='education-content'>
//         {educationData.map((edu, index) => (
//           <div 
//             key={index} 
//             className={`education-item ${index % 2 === 0 ? 'left-text' : 'left-image'}`}
//             data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
//           >
//             {index % 2 === 0 ? (
//               <>
//                 <div className="education-text">
//                   <h3>{edu.title}</h3>
//                   <h4>{edu.institution}</h4>
//                   <p className="education-year">{edu.year}</p>
//                   <p className="education-description">{edu.description}</p>
//                 </div>
//                 <div className="education-image-container">
//                   <img 
//                     src={edu.image} 
//                     alt={edu.title} 
//                     className="education-image"
//                   />
//                 </div>
//               </>
//             ) : (
//               <>
//                 <div className="education-image-container">
//                   <img 
//                     src={edu.image} 
//                     alt={edu.title} 
//                     className="education-image"
//                   />
//                 </div>
//                 <div className="education-text">
//                   <h3>{edu.title}</h3>
//                   <h4>{edu.institution}</h4>
//                   <p className="education-year">{edu.year}</p>
//                   <p className="education-description">{edu.description}</p>
//                 </div>
//               </>
//             )}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default EducationCard;