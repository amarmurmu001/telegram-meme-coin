import { useState, useEffect } from 'react';
import { Trophy, ArrowRight } from 'lucide-react';
import { getLeaderboard } from '../../services/firebase';

function LeaderboardPage() {
  const [leaderboardData, setLeaderboardData] = useState([]);

  useEffect(() => {
    const fetchLeaderboard = async () => {
      const data = await getLeaderboard();
      setLeaderboardData(data);
    };

    fetchLeaderboard();
  }, []);

  return (
    <div className="p-4 animate-fadeIn">
      <h1 className="text-2xl font-bold mb-6 flex items-center gap-2">
        <Trophy className="w-6 h-6 text-yellow-500" />
        Leaderboard
      </h1>

      <div className="space-y-4">
        {leaderboardData.map((item, index) => (
          <div 
            key={index}
            className={`flex items-center justify-between p-4 rounded-xl bg-gray-800/50 
              animate-fadeIn transition-all duration-300 hover:bg-gray-800/70`}
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="flex items-center gap-4">
              <span className={`text-lg font-bold ${
                index === 0 ? 'text-yellow-500' :
                index === 1 ? 'text-gray-400' :
                index === 2 ? 'text-amber-600' : 'text-white'
              }`}>
                #{item.rank}
              </span>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center">
                  {item.name[0]}
                </div>
                <span>{item.name}</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-blue-500">{item.points}</span>
              <ArrowRight className="w-4 h-4" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default LeaderboardPage; 