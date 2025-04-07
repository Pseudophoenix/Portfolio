import { NavLink } from 'react-router-dom';
import './CardMenu.css';

const CardMenu = ({isNavBarClosed,setIsNavBarClosed}) => {
  
  return (
    <div className={`menu-container ${!isNavBarClosed?'menu-container-hidden':'menu-container-visible'}`} >
      {/* <button className={isNavBarClosed?'nav-button-closed':'nav-button-open'} onClick={()=>setIsNavBarClosed(!isNavBarClosed)}>X</button> */}
      <ul className="menu">
        <li style={{ '--clr': '#00ade1' }}>
          <NavLink to="/home" data-text="&nbsp;Intro" onClick={()=>setIsNavBarClosed(!isNavBarClosed)}>&nbsp;Intro&nbsp;</NavLink>
        </li>
        <li style={{ '--clr': '#ff4443' }}>
          <NavLink to="/about" data-text="&nbsp;About" onClick={()=>setIsNavBarClosed(!isNavBarClosed)}>&nbsp;About&nbsp;</NavLink>
        </li>
        <li style={{ '--clr': '#ffdd1c' }}>
          <NavLink to="/education" data-text="&nbsp;Education" onClick={()=>setIsNavBarClosed(!isNavBarClosed)}>&nbsp;Education&nbsp;</NavLink>
        </li>
        <li style={{ '--clr': '#ff0dff' }}>
          <NavLink to="/blog" data-text="&nbsp;Blog" onClick={()=>setIsNavBarClosed(!isNavBarClosed)}>&nbsp;Blog&nbsp;</NavLink>
        </li>
        <li style={{ '--clr': '#7bfb00' }}>
          <NavLink to="/project" data-text="&nbsp;Project" onClick={()=>setIsNavBarClosed(!isNavBarClosed)}>&nbsp;Project&nbsp;</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default CardMenu;