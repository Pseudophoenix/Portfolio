import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CardMenu from './CardMenu';
import { HomeCard, AboutCard, ServicesCard, TeamCard } from './Cards';
function App() {
  return (
    <Router>
      <CardMenu></CardMenu>
      <Routes>
        <Route path="/" element={<HomeCard />} />
        <Route path="/home" element={<HomeCard />} />
        <Route path="/about" element={<AboutCard />} />
        <Route path="/services" element={<ServicesCard />} />
        <Route path="/team" element={<TeamCard />} />
      </Routes>
    </Router>
  );
}

export default App;