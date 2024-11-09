import { useNavigate, useLocation } from 'react-router-dom';
import { Home, Trophy, Users, ClipboardList } from 'lucide-react';

function BottomNavigation() {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-black border-t border-gray-800 animate-slideUp">
      <div className="flex justify-around items-center px-4 py-2">
        <button 
          className={`flex flex-col items-center gap-1 transition-all duration-300 ${
            isActive('/') ? 'text-blue-500 scale-110' : 'text-gray-500 hover:text-gray-300'
          }`}
          onClick={() => navigate('/')}
        >
          <Home className="w-5 h-5" />
          <span className="text-xs">Home</span>
        </button>
        
        <button 
          className={`flex flex-col items-center gap-1 transition-all duration-300 ${
            isActive('/leaderboard') ? 'text-blue-500 scale-110' : 'text-gray-500 hover:text-gray-300'
          }`}
          onClick={() => navigate('/leaderboard')}
        >
          <Trophy className="w-5 h-5" />
          <span className="text-xs">Leaderboard</span>
        </button>
        
        <button 
          className={`flex flex-col items-center gap-1 transition-all duration-300 ${
            isActive('/friends') ? 'text-blue-500 scale-110' : 'text-gray-500 hover:text-gray-300'
          }`}
          onClick={() => navigate('/friends')}
        >
          <Users className="w-5 h-5" />
          <span className="text-xs">Friends</span>
        </button>
        
        <button 
          className={`flex flex-col items-center gap-1 transition-all duration-300 ${
            isActive('/earn') ? 'text-blue-500 scale-110' : 'text-gray-500 hover:text-gray-300'
          }`}
          onClick={() => navigate('/earn')}
        >
          <ClipboardList className="w-5 h-5" />
          <span className="text-xs">Earn</span>
        </button>
      </div>
    </nav>
  );
}

export default BottomNavigation; 