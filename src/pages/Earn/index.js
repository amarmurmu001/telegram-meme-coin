import { ClipboardList, Gift, Share2, ArrowRight } from 'lucide-react';

function EarnPage() {
  const earnOptions = [
    {
      icon: <Gift className="w-6 h-6" />,
      title: "Daily Bonus",
      description: "Claim your daily GANDUS",
      amount: "+100",
      status: "Ready to claim"
    },
    {
      icon: <Share2 className="w-6 h-6" />,
      title: "Invite Friends",
      description: "Earn for each friend invited",
      amount: "+50",
      status: "Per friend"
    }
  ];

  return (
    <div className="p-4 animate-fadeIn">
      <h1 className="text-2xl font-bold mb-6 flex items-center gap-2">
        <ClipboardList className="w-6 h-6 text-blue-500" />
        Earn GANDUS
      </h1>

      <div className="space-y-4">
        {earnOptions.map((option, index) => (
          <button 
            key={index}
            className="w-full p-4 rounded-xl bg-gray-800/50 animate-fadeIn
              transition-all duration-300 hover:bg-gray-800/70"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-500">
                  {option.icon}
                </div>
                <div className="text-left">
                  <div className="font-medium">{option.title}</div>
                  <div className="text-sm text-gray-400">{option.description}</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="text-right">
                  <div className="text-blue-500 font-medium">{option.amount}</div>
                  <div className="text-xs text-gray-400">{option.status}</div>
                </div>
                <ArrowRight className="w-5 h-5" />
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}

export default EarnPage; 