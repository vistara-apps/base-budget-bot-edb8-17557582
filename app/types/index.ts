
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
  subscriptionTier: 'free' | 'basic' | 'premium';
}

export interface Transaction {
  transactionId: string;
  userId: string;
  date: Date;
  amount: number;
  merchant: string;
  category: string;
  isSubscription: boolean;
  isFee: boolean;
  description?: string;
}

export interface DeFiPosition {
  positionId: string;
  userId: string;
  protocol: string;
  asset: string;
  amountStaked: number;
  currentAPY: number;
  estimatedEarnings: number;
  lastUpdated: Date;
  risk: 'low' | 'medium' | 'high';
}

export interface Notification {
  notificationId: string;
  userId: string;
  type: 'fee' | 'subscription' | 'defi' | 'bill';
  message: string;
  readStatus: boolean;
  createdAt: Date;
  priority: 'low' | 'medium' | 'high';
}

export interface SubscriptionData {
  id: string;
  name: string;
  amount: number;
  frequency: 'monthly' | 'yearly' | 'weekly';
  lastUsed?: Date;
  category: string;
  status: 'active' | 'inactive' | 'cancelled';
}

export interface FeeData {
  id: string;
  type: string;
  amount: number;
  frequency: string;
  impact: 'low' | 'medium' | 'high';
  description: string;
}
