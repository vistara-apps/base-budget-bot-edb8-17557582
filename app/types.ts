export interface DeFiPosition {
  id: string;
  protocol: string;
  asset: string;
  amount: number;
  apy: number;
  earnings: string;
  risk: 'low' | 'medium' | 'high';
  lastUpdated: Date;
}

export interface Subscription {
  id: string;
  name: string;
  amount: number;
  frequency: 'monthly' | 'yearly';
  lastUsed: string;
  status: 'active' | 'unused' | 'cancelled';
}

export interface Fee {
  id: string;
  type: string;
  amount: number;
  frequency: string;
  impact: string;
  category: 'banking' | 'transaction' | 'service';
}

export interface User {
  userId: string;
  farcasterId?: string;
  connectedWallets: string[];
  notificationPreferences: {
    fees: boolean;
    subscriptions: boolean;
    defi: boolean;
    bills: boolean;
  };
  subscriptionTier: 'free' | 'premium' | 'enterprise';
}

export interface Notification {
  id: string;
  userId: string;
  type: 'fee' | 'subscription' | 'defi' | 'bill';
  message: string;
  readStatus: boolean;
  createdAt: Date;
}
