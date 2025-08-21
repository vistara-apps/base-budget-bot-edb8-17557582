export interface DeFiPosition {
  positionId: string;
  userId: string;
  protocol: string;
  asset: string;
  amountStaked: number;
  currentAPY: number;
  estimatedEarnings: number;
  risk: 'low' | 'medium' | 'high';
  lastUpdated: Date;
}

export interface Subscription {
  id: string;
  name: string;
  amount: number;
  frequency: 'monthly' | 'yearly';
  lastUsed: string;
  category: string;
  status: 'active' | 'unused' | 'cancelled';
}

export interface Fee {
  id: string;
  type: string;
  amount: number;
  frequency: string;
  impact: string;
  description: string;
  category?: 'banking' | 'transaction' | 'service';
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
