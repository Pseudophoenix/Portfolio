import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CardMenu from './CardMenu';
import { HomeCard, SkillsCard, EducationCard, ProjectCard, BlogCard } from './Cards';
import { useState } from 'react';

function App() {
  const [isNavBarClosed, setIsNavBarClosed] = useState(true);

  return (
    <div style={{
      margin:0,
      // width:"100%",
      display: 'flex',
      flexDirection: 'row',
      // alignItems: 'end',
      justifyContent: 'center',
      // // height: '100vh',
      color: 'white',
      overflow:'hidden',
      // textAlign: 'center',
      padding: '2rem',
        // height: 'calc(110vh - 0px)'
    }}>
    <Router>
      <div style={{ 
        // display: 'flex', flexDirection: 'column' 
          height: '100%'
        }}>
        <CardMenu 
          isNavBarClosed={isNavBarClosed} 
          setIsNavBarClosed={setIsNavBarClosed}  // ✅ Pass the setter directly
        />
      </div>

      <Routes>
        {/* Pass UPDATED STATE CONSISTENTLY to all cards */}
        {/* <Route path="/" element={<CardMenu isNavBarClosed={isNavBarClosed} setIsNavBarClosed={setIsNavBarClosed} />} /> */}
        <Route path="/home" element={<HomeCard isNavBarClosed={isNavBarClosed} setIsNavBarClosed={setIsNavBarClosed} />} />
        <Route path="/Skills" element={<SkillsCard isNavBarClosed={isNavBarClosed} setIsNavBarClosed={setIsNavBarClosed} />} />
        <Route path="/education" element={<EducationCard isNavBarClosed={isNavBarClosed} setIsNavBarClosed={setIsNavBarClosed} />} />
        <Route path="/blog" element={<BlogCard isNavBarClosed={isNavBarClosed} setIsNavBarClosed={setIsNavBarClosed} />} />
        <Route path="/project" element={<ProjectCard isNavBarClosed={isNavBarClosed} setIsNavBarClosed={setIsNavBarClosed} />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;