import { useState, useEffect } from 'react';
import Web3 from 'web3';

export function useWeb3() {
  const [web3, setWeb3] = useState(null);
  const [address, setAddress] = useState('');
  const [isConnected, setIsConnected] = useState(false);

  const connect = async () => {
    if (window.ethereum) {
      try {
        const accounts = await window.ethereum.request({ 
          method: 'eth_requestAccounts' 
        });
        const web3Instance = new Web3(window.ethereum);
        setWeb3(web3Instance);
        setAddress(accounts[0]);
        setIsConnected(true);
      } catch (error) {
        console.error('Error connecting to MetaMask', error);
      }
    } else {
      alert('Please install MetaMask!');
    }
  };

  useEffect(() => {
    if (window.ethereum) {
      window.ethereum.on('accountsChanged', (accounts) => {
        if (accounts.length > 0) {
          setAddress(accounts[0]);
          setIsConnected(true);
        } else {
          setAddress('');
          setIsConnected(false);
        }
      });
    }
  }, []);

  return { web3, connect, isConnected, address };
} 