
import { SubscriptionData, FeeData, DeFiPosition } from '../types';

export const mockSubscriptions: SubscriptionData[] = [
  {
    id: '1',
    name: 'Netflix',
    amount: 15.99,
    frequency: 'monthly',
    category: 'Entertainment',
    status: 'active',
    lastUsed: new Date('2024-01-15'),
  },
  {
    id: '2',
    name: 'Spotify Premium',
    amount: 9.99,
    frequency: 'monthly',
    category: 'Music',
    status: 'active',
    lastUsed: new Date('2024-01-20'),
  },
  {
    id: '3',
    name: 'Adobe Creative Suite',
    amount: 52.99,
    frequency: 'monthly',
    category: 'Software',
    status: 'inactive',
    lastUsed: new Date('2023-11-10'),
  },
  {
    id: '4',
    name: 'Gym Membership',
    amount: 29.99,
    frequency: 'monthly',
    category: 'Fitness',
    status: 'active',
    lastUsed: new Date('2024-01-18'),
  },
];

export const mockFees: FeeData[] = [
  {
    id: '1',
    type: 'ATM Fee',
    amount: 3.50,
    frequency: '5x/month',
    impact: 'medium',
    description: 'Out-of-network ATM usage',
  },
  {
    id: '2',
    type: 'Overdraft Fee',
    amount: 35.00,
    frequency: '1x/month',
    impact: 'high',
    description: 'Account overdraft protection',
  },
  {
    id: '3',
    type: 'International Transaction',
    amount: 2.99,
    frequency: '3x/month',
    impact: 'low',
    description: 'Foreign transaction fees',
  },
];

export const mockDeFiPositions: DeFiPosition[] = [
  {
    positionId: '1',
    userId: 'user1',
    protocol: 'Aave',
    asset: 'USDC',
    amountStaked: 5000,
    currentAPY: 3.2,
    estimatedEarnings: 156.75,
    lastUpdated: new Date(),
    risk: 'low',
  },
  {
    positionId: '2',
    userId: 'user1',
    protocol: 'Compound',
    asset: 'ETH',
    amountStaked: 2.5,
    currentAPY: 4.8,
    estimatedEarnings: 342.50,
    lastUpdated: new Date(),
    risk: 'medium',
  },
  {
    positionId: '3',
    userId: 'user1',
    protocol: 'Uniswap V3',
    asset: 'ETH/USDC',
    amountStaked: 8000,
    currentAPY: 12.5,
    estimatedEarnings: 1200.00,
    lastUpdated: new Date(),
    risk: 'high',
  },
];
