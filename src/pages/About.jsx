import React, { useState } from 'react';
import './CardAnimation.css'; // We'll create this CSS file next

const CardAnimation = () => {
  const [showCard, setShowCard] = useState(false);

  const toggleCard = () => {
    setShowCard(!showCard);
  };

  return (
    <div className="container">
      <ul className="menu">
        <li style={{ '--clr': '#00ade1' }} onMouseOver={toggleCard} onMouseLeave={toggleCard}>
          <a href="#" data-text="&nbsp;Home">&nbsp;Home&nbsp;</a>
        </li>
        <li style={{ '--clr': '#00ade1' }} onMouseOver={toggleCard} onMouseLeave={toggleCard}>
          <a href="#" data-text="&nbsp;Home">&nbsp;Home&nbsp;</a>
        </li>
        <li style={{ '--clr': '#00ade1' }} onMouseOver={toggleCard} onMouseLeave={toggleCard}>
          <a href="#" data-text="&nbsp;Home">&nbsp;Home&nbsp;</a>
        </li>
        <li style={{ '--clr': '#00ade1' }} onMouseOver={toggleCard} onMouseLeave={toggleCard}>
          <a href="#" data-text="&nbsp;Home">&nbsp;Home&nbsp;</a>
        </li>
      </ul>

      <div className={`card `}>
        <div className={`card-content ${showCard ? 'card-visible' : ''}`}>
          <h3>Welcome Home!</h3>
          <p>This card appeared from the right when you clicked the menu item.</p>
          <button onClick={toggleCard}>Close</button>
        </div>
        <div className="card-content">
          <h3>Welcome Home!</h3>
          <p>This card appeared from the right when you clicked the menu item.</p>
          <button onClick={toggleCard}>Close</button>
        </div>
        <div className="card-content">
          <h3>Welcome Home!</h3>
          <p>This card appeared from the right when you clicked the menu item.</p>
          <button onClick={toggleCard}>Close</button>
        </div>
      </div>
    </div>
  );
};

export default CardAnimation;