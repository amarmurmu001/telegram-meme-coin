import { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { getUser, updateUserBalance } from '../../services/firebase';
import FootprintMap from '../../components/FootprintMap';

function HomePage() {
  const [userData, setUserData] = useState(null);
  const [showMap, setShowMap] = useState(false);

  useEffect(() => {
    const fetchUserData = async () => {
      // Replace with actual user ID from auth
      const userId = 'current-user-id';
      const data = await getUser(userId);
      setUserData(data);
    };

    fetchUserData();
  }, []);

  return (
    <>
      <div className="flex flex-col p-4 bg-black text-white min-h-screen">
        {/* Header with fade-in */}
        <div className="flex justify-between items-center mb-4 animate-fadeIn">
          <button 
            className="text-sm flex items-center gap-2 transition-all duration-300 hover:text-blue-400"
            onClick={() => setShowMap(true)}
          >
            Check the footprint map
            <ArrowRight className="w-5 h-5 text-blue-500" />
          </button>
        </div>

        {/* Connect Wallet Button */}
        <button className="w-full bg-blue-500 text-white rounded-full py-3 mb-8 flex items-center justify-center gap-2 animate-fadeIn delay-100">
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M21 18v1c0 1.1-.9 2-2 2H5c-1.11 0-2-.9-2-2V5c0-1.1.89-2 2-2h14c1.1 0 2 .9 2 2v1h-9c-1.11 0-2 .9-2 2v8c0 1.1.89 2 2 2h9zm-9-2h10V8H12v8zm4-2.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z" />
          </svg>
          Connect wallet
        </button>

        {/* Peach Emoji and Counter */}
        <div className="flex flex-col items-center gap-4 mb-6 animate-fadeIn delay-200">
          <div className="text-6xl mb-2 animate-bounce">🍑</div>
          <div className="text-center">
            <div className="text-5xl font-bold">{userData?.balance || '0'}</div>
            <div className="text-xl mt-1">GANDUS</div>
          </div>
        </div>

        {/* Legend Rank with fade-in */}
        <div className="flex items-center justify-center gap-2 mb-6 text-gray-400 animate-fadeIn delay-300">
          <span>#1,22,599</span>
          <span>RANK</span>
          <ArrowRight className="w-4 h-4" />
        </div>

        {/* Action Buttons with staggered fade-in */}
        <div className="space-y-3">
          <button className="w-full flex items-center justify-between px-4 py-3 bg-gray-800/50 rounded-xl transition-all duration-300 hover:bg-gray-800/70 animate-fadeIn delay-400">
            <div className="flex items-center gap-3">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 12.75c1.63 0 3.07.39 4.24.9 1.08.48 1.76 1.56 1.76 2.73V18H6v-1.61c0-1.18.68-2.26 1.76-2.73 1.17-.52 2.61-.91 4.24-.91zM4 13c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm18 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zM12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4z" />
              </svg>
              Join our community
            </div>
            <ArrowRight className="w-5 h-5" />
          </button>

          <button className="w-full flex items-center justify-between px-4 py-3 bg-gray-800/50 rounded-xl transition-all duration-300 hover:bg-gray-800/70 animate-fadeIn delay-500">
            <div className="flex items-center gap-3">
              <span className="text-yellow-500">★</span>
              Check your rewards
            </div>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {showMap && <FootprintMap onClose={() => setShowMap(false)} />}
    </>
  );
}

export default HomePage;