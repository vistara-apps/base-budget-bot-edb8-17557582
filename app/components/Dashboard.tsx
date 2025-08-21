"use client";

import { useState } from "react";
import { DataCard } from "./DataCard";
import { ActionButton } from "./ActionButton";
import { NotificationBanner } from "./NotificationBanner";

interface DashboardProps {
  isConnected: boolean;
}

export function Dashboard({ isConnected }: DashboardProps) {
  const [subscriptions] = useState([
    { name: "Netflix", amount: 15.99, lastUsed: "2 days ago", status: "active" },
    { name: "Spotify", amount: 9.99, lastUsed: "1 hour ago", status: "active" },
    { name: "Adobe Creative", amount: 52.99, lastUsed: "30 days ago", status: "unused" },
  ]);

  const [fees] = useState([
    { type: "ATM Fee", amount: 3.50, frequency: "Weekly", impact: "$182/year" },
    { type: "Overdraft Fee", amount: 35.00, frequency: "Monthly", impact: "$420/year" },
  ]);

  const [defiPositions] = useState([
    { protocol: "Aave", asset: "USDC", amount: 1250.00, apy: 4.2, earnings: "$52.50" },
    { protocol: "Compound", asset: "ETH", amount: 0.5, apy: 3.8, earnings: "$38.20" },
  ]);

  if (!isConnected) {
    return (
      <div className="text-center py-12">
        <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
          <span className="text-primary text-2xl">🔗</span>
        </div>
        <h2 className="text-xl font-semibold mb-2">Connect Your Wallet</h2>
        <p className="text-muted mb-6">
          Connect your Base wallet to start analyzing your finances and optimizing your budget.
        </p>
        <div className="space-y-3 text-sm text-muted">
          <div className="flex items-center space-x-2">
            <span className="text-success">✓</span>
            <span>Detect hidden fees and subscriptions</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-success">✓</span>
            <span>Analyze DeFi positions and yields</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-success">✓</span>
            <span>AI-powered bill negotiation</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6 animate-fade-in">
      <NotificationBanner
        type="warning"
        message="Found $602/year in potential savings from unused subscriptions and fees!"
      />

      <div>
        <h2 className="text-lg font-semibold mb-3">Subscriptions</h2>
        <div className="space-y-3">
          {subscriptions.map((sub, index) => (
            <DataCard key={index} variant="subscription">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-medium">{sub.name}</h3>
                  <p className="text-sm text-muted">Last used: {sub.lastUsed}</p>
                </div>
                <div className="text-right">
                  <p className="font-semibold">${sub.amount}/mo</p>
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    sub.status === "unused" 
                      ? "bg-warning/20 text-warning" 
                      : "bg-success/20 text-success"
                  }`}>
                    {sub.status}
                  </span>
                </div>
              </div>
              {sub.status === "unused" && (
                <ActionButton variant="secondary" className="mt-3 w-full">
                  Cancel Subscription
                </ActionButton>
              )}
            </DataCard>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-lg font-semibold mb-3">Hidden Fees</h2>
        <div className="space-y-3">
          {fees.map((fee, index) => (
            <DataCard key={index} variant="fee">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-medium">{fee.type}</h3>
                  <p className="text-sm text-muted">{fee.frequency}</p>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-danger">${fee.amount}</p>
                  <p className="text-xs text-muted">{fee.impact}</p>
                </div>
              </div>
            </DataCard>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-lg font-semibold mb-3">DeFi Positions</h2>
        <div className="space-y-3">
          {defiPositions.map((position, index) => (
            <DataCard key={index} variant="defi">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-medium">{position.protocol}</h3>
                  <p className="text-sm text-muted">{position.amount} {position.asset}</p>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-success">{position.apy}% APY</p>
                  <p className="text-xs text-muted">{position.earnings} earned</p>
                </div>
              </div>
            </DataCard>
          ))}
        </div>
      </div>
    </div>
  );
}
