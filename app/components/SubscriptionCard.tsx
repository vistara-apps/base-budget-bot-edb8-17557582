
"use client";

import { Calendar, DollarSign, Trash2 } from 'lucide-react';
import { DataCard } from './DataCard';
import { ActionButton } from './ActionButton';
import { SubscriptionData } from '../types';

interface SubscriptionCardProps {
  subscription: SubscriptionData;
  onCancel: (id: string) => void;
}

export function SubscriptionCard({ subscription, onCancel }: SubscriptionCardProps) {
  const getStatusColor = () => {
    switch (subscription.status) {
      case 'active':
        return 'text-success';
      case 'inactive':
        return 'text-warning';
      case 'cancelled':
        return 'text-muted';
      default:
        return 'text-text';
    }
  };

  return (
    <DataCard
      variant="subscription"
      title={subscription.name}
      value={`$${subscription.amount}`}
      subtitle={`${subscription.frequency} • ${subscription.category}`}
      status={subscription.status === 'active' ? 'active' : 'inactive'}
      action={
        subscription.status === 'active' && (
          <ActionButton
            variant="secondary"
            size="sm"
            icon={<Trash2 size={14} />}
            onClick={() => onCancel(subscription.id)}
          >
            Cancel
          </ActionButton>
        )
      }
    >
      <div className="flex items-center justify-between text-sm">
        <span className={`${getStatusColor()} capitalize`}>
          {subscription.status}
        </span>
        {subscription.lastUsed && (
          <div className="flex items-center space-x-1 text-muted">
            <Calendar size={12} />
            <span>Last used: {subscription.lastUsed.toLocaleDateString()}</span>
          </div>
        )}
      </div>
    </DataCard>
  );
}
