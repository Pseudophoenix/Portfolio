import { NavLink } from 'react-router-dom';
import './CardMenu.css';

const CardMenu = () => {
  return (
    <div className="menu-container">
      <ul className="menu">
        <li style={{ '--clr': '#00ade1' }}>
          <NavLink to="/home" data-text="&nbsp;Intro">&nbsp;Intro&nbsp;</NavLink>
        </li>
        <li style={{ '--clr': '#ff4443' }}>
          <NavLink to="/about" data-text="&nbsp;About">&nbsp;About&nbsp;</NavLink>
        </li>
        <li style={{ '--clr': '#ffdd1c' }}>
          <NavLink to="/services" data-text="&nbsp;Education">&nbsp;Education&nbsp;</NavLink>
        </li>
        <li style={{ '--clr': '#ff0dff' }}>
          <NavLink to="/blog" data-text="&nbsp;Blog">&nbsp;Blog&nbsp;</NavLink>
        </li>
        <li style={{ '--clr': '#7bfb00' }}>
          <NavLink to="/team" data-text="&nbsp;Project">&nbsp;Project&nbsp;</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default CardMenu;