import { Users, UserPlus, ArrowRight } from 'lucide-react';

function FriendsPage() {
  const friendsData = [
    { name: "Amar", status: "Online", points: "8,234" },
    { name: "Sourav", status: "Online", points: "7,890" },
    { name: "Veer", status: "Online", points: "6,543" },
    { name: "Rajan", status: "Offline", points: "5,678" },
    { name: "Shivam", status: "Online", points: "4,921" }
  ];

  return (
    <div className="p-4 animate-fadeIn">
      <h1 className="text-2xl font-bold mb-6 flex items-center gap-2">
        <Users className="w-6 h-6 text-blue-500" />
        Friends
      </h1>

      {/* Add Friend Button */}
      <button className="w-full flex items-center justify-between p-4 rounded-xl bg-blue-500 mb-6 
        transition-all duration-300 hover:bg-blue-600 animate-fadeIn">
        <div className="flex items-center gap-2">
          <UserPlus className="w-5 h-5" />
          <span>Invite Friends</span>
        </div>
        <ArrowRight className="w-5 h-5" />
      </button>

      <div className="space-y-4">
        {friendsData.map((friend, index) => (
          <div 
            key={index}
            className="flex items-center justify-between p-4 rounded-xl bg-gray-800/50 
              animate-fadeIn transition-all duration-300 hover:bg-gray-800/70"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center">
                  {friend.name[0]}
                </div>
                <div className={`absolute bottom-0 right-0 w-3 h-3 rounded-full 
                  ${friend.status === 'Online' ? 'bg-green-500' : 'bg-gray-500'} 
                  animate-pulse`} />
              </div>
              <div>
                <div className="font-medium">{friend.name}</div>
                <div className="text-sm text-gray-400">{friend.status}</div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-blue-500">{friend.points}</span>
              <ArrowRight className="w-4 h-4" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FriendsPage; 