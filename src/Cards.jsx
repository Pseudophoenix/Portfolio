import { useLocation } from 'react-router-dom';
import './Cards.css';
import { useState } from 'react';
import { FaX, FaBars } from 'react-icons/fa6';
import { NavLink } from 'react-router-dom';
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
      {/* <h2>Home</h2> */}
      <div className="card-content">
        <h3>Alok!</h3>
      </div>
    </div>
  );
};

const AboutCard = ({ isNavBarClosed, setIsNavBarClosed }) => {
  const location = useLocation();
  const isActive = location.pathname === '/about';

  return (
    <div className={`card ${isActive ? 'card-visible' : ''}`} >
      <div className='card-header' style={{ background: '#ff4443', '--clr': '#ff4443' }}>
        <h2>About</h2>
        <NavLink to="/" className={isNavBarClosed ? 'cross-button-closed' : 'cross-button-open'} onClick={() => setIsNavBarClosed(!isNavBarClosed)}><FaBars /></NavLink>
      </div>
      <div className='card-body'>
      </div>
    </div>
  );
};

const EducationCard = ({ isNavBarClosed, setIsNavBarClosed }) => {
  const location = useLocation();
  const isActive = location.pathname === '/services';

  return (
    <div className={`card ${isActive ? 'card-visible' : ''}`}>
      <div className='card-header' style={{ background: '#ffdd1c', '--clr': '#ffdd1c' }}>
        <h2>Education</h2>
        <NavLink to="/" className={isNavBarClosed ? 'cross-button-closed' : 'cross-button-open'} onClick={() => setIsNavBarClosed(!isNavBarClosed)}><FaBars /></NavLink>
      </div>
      <div className='card-body'>
        <h2 style={{ color: 'black' }}>Education</h2>
        <div className="card-content">
          <h3></h3>
          <p></p>
        </div>
      </div>

    </div>
  );
};


const BlogCard = ({ isNavBarClosed, setIsNavBarClosed }) => {
  const location = useLocation();
  const isActive = location.pathname === '/team';

  return (
    <div className={`card ${isActive ? 'card-visible' : ''}`}>
      <div className='card-header' style={{ background: '#ff0dff', '--clr': '#ff0dff' }}>
        <h2>Blog</h2>
        <NavLink to="/" className={isNavBarClosed ? 'cross-button-closed' : 'cross-button-open'} onClick={() => setIsNavBarClosed(!isNavBarClosed)}><FaBars /></NavLink>
      </div>
      <div className='card-body'>
        <h2 style={{ color: 'black' }}>Blog</h2>
        <div className="card-content">
          <h3></h3>
        </div>
      </div>

    </div>
  );
};


const ProjectCard = ({ isNavBarClosed, setIsNavBarClosed }) => {
  const location = useLocation();
  const isActive = location.pathname === '/team';

  return (
    <div className={`card ${isActive ? 'card-visible' : ''}`}>
      <div className='card-header' style={{ background: '#7bfb00', '--clr': '#7bfb00' }}>
        <h2>Project</h2>
        <NavLink to="/" className={isNavBarClosed ? 'cross-button-closed' : 'cross-button-open'} onClick={() => setIsNavBarClosed(!isNavBarClosed)}><FaBars /></NavLink>
      </div>
      <div className='card-body'>
        <h2>Project</h2>
        <div className="card-content">
          <h3></h3>
        </div>
      </div>

    </div>
  );
};

export { HomeCard, AboutCard, EducationCard, ProjectCard, BlogCard };