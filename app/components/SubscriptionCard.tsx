"use client";

import { Calendar, DollarSign, Trash2 } from 'lucide-react';
import { DataCard } from './DataCard';
import { ActionButton } from './ActionButton';
import { Subscription } from '../types';

interface SubscriptionCardProps {
  subscription: Subscription;
  onCancel: (id: string) => void;
}

export function SubscriptionCard({ subscription, onCancel }: SubscriptionCardProps) {
  const getStatusColor = () => {
    switch (subscription.status) {
      case 'active':
        return 'text-success';
      case 'unused':
        return 'text-warning';
      case 'cancelled':
        return 'text-muted';
      default:
        return 'text-text';
    }
  };

  return (
    <DataCard variant="subscription">
      <div className="flex justify-between items-start mb-3">
        <div>
          <h3 className="font-medium text-text">{subscription.name}</h3>
          <p className="text-sm text-muted">{subscription.frequency}</p>
        </div>
        <div className="text-right">
          <p className="font-semibold">${subscription.amount}</p>
          <span className={`text-xs px-2 py-1 rounded-full ${
            subscription.status === 'active' 
              ? "bg-success/20 text-success" 
              : "bg-warning/20 text-warning"
          }`}>
            {subscription.status}
          </span>
        </div>
      </div>
      
      <div className="flex items-center justify-between">
        <span className={`${getStatusColor()} capitalize text-sm`}>
          {subscription.status}
        </span>
        
        {subscription.status === 'active' && (
          <ActionButton
            variant="secondary"
            onClick={() => onCancel(subscription.id)}
            className="text-xs px-3 py-1"
          >
            <Trash2 size={14} className="mr-1 inline" /> Cancel
          </ActionButton>
        )}
      </div>
      
      {subscription.lastUsed && (
        <div className="flex items-center space-x-1 text-muted text-sm mt-2">
          <Calendar size={12} />
          <span>Last used: {subscription.lastUsed}</span>
        </div>
      )}
    </DataCard>
  );
}
