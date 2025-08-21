"use client";

import { TrendingUp, Shield, AlertTriangle } from 'lucide-react';
import { DataCard } from './DataCard';
import { ActionButton } from './ActionButton';
import { DeFiPosition } from '../types';

interface DeFiPositionCardProps {
  position: DeFiPosition;
  onOptimize?: (positionId: string) => void;
}

export function DeFiPositionCard({ position, onOptimize }: DeFiPositionCardProps) {
  const getRiskColor = (risk: string) => {
    switch (risk) {
      case 'low': return 'text-success';
      case 'medium': return 'text-warning';
      case 'high': return 'text-danger';
      default: return 'text-muted';
    }
  };

  const getRiskIcon = (risk: string) => {
    switch (risk) {
      case 'low': return <Shield className="w-4 h-4" />;
      case 'medium': return <TrendingUp className="w-4 h-4" />;
      case 'high': return <AlertTriangle className="w-4 h-4" />;
      default: return null;
    }
  };

  return (
    <DataCard variant="defi">
      <div className="flex justify-between items-start mb-3">
        <div>
          <h3 className="font-medium text-text">{position.protocol}</h3>
          <p className="text-sm text-muted">{position.amount} {position.asset}</p>
        </div>
        <div className="text-right">
          <p className="font-semibold text-success">{position.apy}% APY</p>
          <p className="text-xs text-muted">{position.earnings} earned</p>
        </div>
      </div>
      
      <div className="flex items-center justify-between">
        <div className={`flex items-center space-x-1 ${getRiskColor(position.risk)}`}>
          {getRiskIcon(position.risk)}
          <span className="text-xs capitalize">{position.risk} risk</span>
        </div>
        
        {onOptimize && (
          <ActionButton 
            variant="secondary" 
            onClick={() => onOptimize(position.id)}
            className="text-xs px-3 py-1"
          >
            Optimize
          </ActionButton>
        )}
      </div>
    </DataCard>
  );
}
