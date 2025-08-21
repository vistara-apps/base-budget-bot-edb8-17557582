import React, { ReactNode } from 'react';

interface IdentityProps {
  children: ReactNode;
  className?: string;
  hasCopyAddressOnClick?: boolean;
}

export function Identity({ children, className = '' }: IdentityProps) {
  return <div className={className}>{children}</div>;
}

export function Name({ className = '' }: { className?: string }) {
  return <div className={className}>User Name</div>;
}

export function Address() {
  return <div>0x1234...5678</div>;
}

export function Avatar() {
  return <div className="w-8 h-8 rounded-full bg-gray-300"></div>;
}

export function EthBalance() {
  return <div>0.00 ETH</div>;
}

