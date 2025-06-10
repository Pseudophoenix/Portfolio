import React from 'react';
import './Profile.css'; // You'll need to create this CSS file

const Profile = () => {
  return (
    <div className="profile-container">
      <header className="profile-header">
        <h1>
          Hi <span role="img" aria-label="wave">👋</span>, I'm Alok
        </h1>
        {/* <h3>
          A passionate software developer from India
        </h3> */}
        <div className="badges tech-icons" >
          <span className="badge">Open Source Contributor</span>
          <span className="badge">Full Stack Developer</span>
        </div>
      </header>

      <section className="about-section">
        <h2>About Me</h2>
        <ul className="about-list">
          <li>🔭 I'm currently working on exciting projects in web and mobile development</li>
          <li>🌱 Learning advanced cloud technologies and system design</li>
          <li>👯 Looking to collaborate on open-source projects</li>
          <li>💬 Ask me about full-stack development, DevOps, or tech in general</li>
          <li>📫 How to reach me: <a href="mailto:waynerooney0089@gmail.com">waynerooney0089@gmail.com</a></li>
          <li>😄 Pronouns: He/Him</li>
        </ul>
      </section>

      {/* <section className="tech-stack">
        <h2>Tech Stack</h2>
        
        <div className="tech-category">
          <h3>Languages</h3>
          <div className="tech-icons">
            <span>C++</span>
            <span>Java</span>
            <span>Python</span>
            <span>JavaScript</span>
            <span>PHP</span>
            <span>Dart</span>
          </div>
        </div>

        <div className="tech-grid">
          <div className="tech-column">
            <h4>Web Frontend</h4>
            <div className="tech-icons">
              <span>HTML</span>
              <span>CSS</span>
              <span>React</span>
              <span>Next.js</span>
              <span>Tailwind</span>
            </div>
          </div>

          <div className="tech-column">
            <h4>Backend</h4>
            <div className="tech-icons">
              <span>Node.js</span>
              <span>Django</span>
              <span>Flask</span>
              <span>Express</span>
            </div>
          </div>

          <div className="tech-column">
            <h4>Mobile</h4>
            <div className="tech-icons">
              <span>Flutter</span>
            </div>
          </div>

          <div className="tech-column">
            <h4>Databases</h4>
            <div className="tech-icons">
              <span>MySQL</span>
              <span>MongoDB</span>
            </div>
          </div>
        </div>

        <div className="tech-category">
          <h3>Cloud & DevOps</h3>
          <div className="tech-icons">
            <span>AWS</span>
            <span>GCP</span>
            <span>Docker</span>
            <span>Kubernetes</span>
            <span>GitHub Actions</span>
            <span>Cloudflare</span>
            <span>Vercel</span>
          </div>
        </div>
      </section>

      <section className="connect-section">
        <h2>Connect With Me</h2>
        <div className="social-links">
          <a href="https://www.linkedin.com/in/alok-choudhary-9465401ab/" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a href="https://github.com/Pseudophoenix" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href="mailto:waynerooney0089@gmail.com">
            Email
          </a>
        </div>
      </section>

      <section className="projects-section">
        <h2>Projects</h2>
        <p>All of my projects are available at <a href="https://pseudophoenix.github.io" target="_blank" rel="noopener noreferrer">pseudophoenix.github.io</a></p>
      </section>

      <section className="achievements-section">
        <h2>Achievements</h2>
        <div className="achievements-grid">
          <div className="achievement">
            <span>100 Days of Code</span>
          </div>
          <div className="achievement">
            <span>50 Days Streak</span>
          </div>
          <div className="achievement">
            <span>Pandas Certification</span>
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default Profile;