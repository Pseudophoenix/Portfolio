import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CardMenu from './CardMenu';
import { HomeCard, AboutCard, EducationCard, ProjectCard, BlogCard } from './Cards';
import { useState } from 'react';

function App() {
  const [isNavBarClosed, setIsNavBarClosed] = useState(true);

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'end',
      justifyContent: 'center',
      height: '100vh',
      color: 'white',
      // overflow:'hidden',
      textAlign: 'center',
      // padding: '2rem',
    }}>
    <Router>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <CardMenu 
          isNavBarClosed={isNavBarClosed} 
          setIsNavBarClosed={setIsNavBarClosed}  // ✅ Pass the setter directly
        />
      </div>

      <Routes>
        {/* Pass UPDATED STATE CONSISTENTLY to all cards */}
        <Route path="/" element={<CardMenu isNavBarClosed={isNavBarClosed} setIsNavBarClosed={setIsNavBarClosed} />} />
        <Route path="/home" element={<HomeCard isNavBarClosed={isNavBarClosed} setIsNavBarClosed={setIsNavBarClosed} />} />
        <Route path="/about" element={<AboutCard isNavBarClosed={isNavBarClosed} setIsNavBarClosed={setIsNavBarClosed} />} />
        <Route path="/education" element={<EducationCard isNavBarClosed={isNavBarClosed} setIsNavBarClosed={setIsNavBarClosed} />} />
        <Route path="/blog" element={<BlogCard isNavBarClosed={isNavBarClosed} setIsNavBarClosed={setIsNavBarClosed} />} />
        <Route path="/project" element={<ProjectCard isNavBarClosed={isNavBarClosed} setIsNavBarClosed={setIsNavBarClosed} />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;