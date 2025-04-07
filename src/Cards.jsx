import { useLocation } from 'react-router-dom';
import './Cards.css';
const HomeCard = () => {
  const location = useLocation();
  const isActive = location.pathname === '/' || location.pathname === '/home';

  return (
    <div className={`card ${isActive ? 'card-visible' : ''}`}>
      <div className='card-header'>
        <h2>Intro</h2>
      </div>
      {/* <div className='card-body'> */}
        {/* <h2>Home</h2> */}
        <div className="card-content">
          <h3>Welcome Home!</h3>
          {/* <AboutCard></AboutCard> */}
          {/* <p>This is the home card content. You can put anything here.</p> */}
        {/* </div> */}
      </div>
    </div>
  );
};

const AboutCard = () => {
  const location = useLocation();
  const isActive = location.pathname === '/about';

  return (
    <div className={`card ${isActive ? 'card-visible' : ''}`} >
        <div className='card-header' style={{ background: '#ff6493' }}>
          <h2>About</h2>
        </div>
        <div className='card-body'>
          
        </div>
    </div>
  );
};

const ServicesCard = () => {
  const location = useLocation();
  const isActive = location.pathname === '/services';

  return (
    <div className={`card ${isActive ? 'card-visible' : ''}`}>
      <div className='card-header' style={{ background: '#ffdd1c' }}>
        <h2>Services</h2>
      </div>
      <div className='card-body'>
        <h2>Services</h2>
        <div className="card-content">
          <h3>Our Services</h3>

          <p>Discover what we can do for you.</p>
        </div>
      </div>

    </div>
  );
};

const TeamCard = () => {
  const location = useLocation();
  const isActive = location.pathname === '/team';

  return (
    <div className={`card ${isActive ? 'card-visible' : ''}`}>
      <div className='card-header' style={{ background: '#7bfb00' }}>
        <h2>Team</h2>
      </div>
      <div className='card-body'>
        <h2>Team</h2>
        <div className="card-content">
          <h3>Our Team</h3>

          <p>Discover what we can do for you.</p>
        </div>
      </div>

    </div>
  );
};

export { HomeCard, AboutCard, ServicesCard, TeamCard };