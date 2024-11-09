import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './components/Layout/MainLayout';
import HomePage from './pages/Home';
import LeaderboardPage from './pages/Leaderboard';
import FriendsPage from './pages/Friends';
import EarnPage from './pages/Earn';

function App() {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/leaderboard" element={<LeaderboardPage />} />
          <Route path="/friends" element={<FriendsPage />} />
          <Route path="/earn" element={<EarnPage />} />
        </Routes>
      </MainLayout>
    </Router>
  );
}

export default App;
