import { useNavigate } from 'react-router-dom';

function FootprintMap({ onClose }) {
  const navigate = useNavigate();

  const handleGotIt = () => {
    onClose();
    navigate('/');
  };

  return (
    <div className="fixed inset-0 bg-black z-50 flex flex-col min-h-screen animate-fadeIn">
      {/* Header */}
      <div className="p-4 text-blue-500 text-sm font-medium animate-fadeIn">
        FOOTPRINT MAP
      </div>

      {/* Main Content */}
      <div className="flex flex-col p-4 h-[70vh]">
        <h1 className="text-3xl font-bold mb-12 text-center animate-fadeIn delay-100">
          NEW TRAILS<br />ARE COMING...
        </h1>

        {/* Trail Map with animated dots */}
        <div className="flex-1 flex items-center justify-center">
          <svg className="w-full max-w-[200px]" viewBox="0 0 100 300" fill="none">
            {/* Dotted Line with dash animation */}
            <path
              d="M50,20 C50,80 80,140 50,200 S20,260 50,280"
              stroke="white"
              strokeWidth="2"
              strokeDasharray="4 4"
              className="animate-pulse"
            />
            
            {/* Flags and dots with staggered animations */}
            <rect x="45" y="10" width="10" height="8" fill="#4B5563" className="animate-fadeIn"/>
            <rect x="75" y="120" width="10" height="8" fill="#3B82F6" className="animate-fadeIn delay-100"/>
            <rect x="45" y="180" width="10" height="8" fill="#3B82F6" className="animate-fadeIn delay-200"/>
            <rect x="15" y="220" width="10" height="8" fill="#3B82F6" className="animate-fadeIn delay-300"/>
            <rect x="45" y="270" width="10" height="8" fill="#3B82F6" className="animate-fadeIn delay-400"/>
            
            <circle cx="50" cy="20" r="3" fill="white" className="animate-pulse"/>
            <circle cx="80" cy="130" r="3" fill="white" className="animate-pulse delay-100"/>
            <circle cx="50" cy="190" r="3" fill="white" className="animate-pulse delay-200"/>
            <circle cx="20" cy="230" r="3" fill="white" className="animate-pulse delay-300"/>
            <circle cx="50" cy="280" r="3" fill="white" className="animate-pulse delay-400"/>
          </svg>
        </div>
      </div>

      {/* Got It Button with slide-up animation */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-black animate-slideUp">
        <button 
          onClick={handleGotIt}
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-lg py-4 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
        >
          Got it
        </button>
      </div>
    </div>
  );
}

export default FootprintMap;