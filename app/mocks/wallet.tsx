import React, { ReactNode } from 'react';

interface WalletProps {
  children: ReactNode;
  className?: string;
}

export function Wallet({ children, className = '' }: WalletProps) {
  return <div className={className}>{children}</div>;
}

interface ConnectWalletProps {
  children: ReactNode;
  onConnect?: () => void;
  onDisconnect?: () => void;
}

export function ConnectWallet({ children, onConnect }: ConnectWalletProps) {
  return (
    <button 
      className="px-3 py-1 rounded-md bg-primary text-white text-sm font-medium"
      onClick={() => onConnect && onConnect()}
    >
      {children || 'Connect Wallet'}
    </button>
  );
}

export function WalletDropdown({ children }: { children: ReactNode }) {
  return <div className="hidden">{children}</div>;
}

export function WalletDropdownDisconnect() {
  return (
    <button className="w-full text-left px-4 py-2 text-sm text-red-500 hover:bg-gray-100">
      Disconnect
    </button>
  );
}

