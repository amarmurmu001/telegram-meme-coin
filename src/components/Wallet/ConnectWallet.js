import { useWeb3 } from '../../hooks/useWeb3';
import { Button } from '../../components/ui/button';
import { Wallet } from 'lucide-react';

function ConnectWallet() {
  const { connect, isConnected, address } = useWeb3();

  return (
    <Button 
      onClick={connect}
      className="w-full flex items-center justify-center gap-2 px-4 py-6 bg-blue-500 hover:bg-blue-600 rounded-full"
      size="lg"
    >
      <Wallet className="w-6 h-6" />
      {isConnected ? `${address.slice(0, 6)}...${address.slice(-4)}` : 'Connect wallet'}
    </Button>
  );
}

export default ConnectWallet; 