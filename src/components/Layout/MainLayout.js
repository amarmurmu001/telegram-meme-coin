import BottomNavigation from '../Navigation/BottomNavigation';

function MainLayout({ children }) {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-lg mx-auto pb-16">
        {children}
        <BottomNavigation />
      </div>
    </div>
  );
}

export default MainLayout; 