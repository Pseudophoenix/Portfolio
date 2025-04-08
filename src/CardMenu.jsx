import { NavLink } from 'react-router-dom';
import './CardMenu.css';
import alok from './assets/alok.jpg';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
const CardMenu = ({ isNavBarClosed, setIsNavBarClosed }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const handleImageClick = () => {
    // If you want to navigate to home on click, you should use useNavigate hook
    navigate('/');
  };

  return (
    <div
      className={`menu-container ${isNavBarClosed ? 'menu-container-visible' : 'menu-container-hidden'}`}
      style={location.pathname === '/' ? { width: '100%' } : {}}
    >
      <ul className="menu">
        <li style={{ '--clr': '#00ade1' }}>
          <NavLink 
            to="/home" 
            data-text="&nbsp;Intro" 
            onClick={() => setIsNavBarClosed(!isNavBarClosed)}
          >
            &nbsp;Intro&nbsp;
          </NavLink>
        </li>
        <li style={{ '--clr': '#ff4443' }}>
          <NavLink 
            to="/about" 
            data-text="&nbsp;About" 
            onClick={() => setIsNavBarClosed(!isNavBarClosed)}
          >
            &nbsp;About&nbsp;
          </NavLink>
        </li>
        <li style={{ '--clr': '#ffdd1c' }}>
          <NavLink 
            to="/education" 
            data-text="&nbsp;Education" 
            onClick={() => setIsNavBarClosed(!isNavBarClosed)}
          >
            &nbsp;Education&nbsp;
          </NavLink>
        </li>
        <li style={{ '--clr': '#ff0dff' }}>
          <NavLink 
            to="/blog" 
            data-text="&nbsp;Blog" 
            onClick={() => setIsNavBarClosed(!isNavBarClosed)}
          >
            &nbsp;Blog&nbsp;
          </NavLink>
        </li>
        <li style={{ '--clr': '#7bfb00' }}>
          <NavLink 
            to="/project" 
            data-text="&nbsp;Project" 
            onClick={() => setIsNavBarClosed(!isNavBarClosed)}
          >
            &nbsp;Project&nbsp;
          </NavLink>
        </li>
      </ul>
      <div className="menu-background">
        <img 
          src={alok} 
          alt="Profile" 
          onClick={handleImageClick}
        />
      </div>
    </div>
  );
};

export default CardMenu;