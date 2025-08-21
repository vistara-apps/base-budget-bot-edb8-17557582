"use client";

import {
  useMiniKit,
  useAddFrame,
  useOpenUrl,
  usePrimaryButton,
} from "@coinbase/onchainkit/minikit";
import {
  Name,
  Identity,
  Address,
  Avatar,
  EthBalance,
} from "@coinbase/onchainkit/identity";
import {
  ConnectWallet,
  Wallet,
  WalletDropdown,
  WalletDropdownDisconnect,
} from "@coinbase/onchainkit/wallet";
import { useEffect, useMemo, useState, useCallback } from "react";
import { AppShell } from "./components/AppShell";
import { AgentChat } from "./components/AgentChat";
import { Dashboard } from "./components/Dashboard";

export default function App() {
  const { setFrameReady, isFrameReady, context } = useMiniKit();
  const [frameAdded, setFrameAdded] = useState(false);
  const [activeTab, setActiveTab] = useState("dashboard");
  const [isConnected, setIsConnected] = useState(false);

  const addFrame = useAddFrame();
  const openUrl = useOpenUrl();

  useEffect(() => {
    if (!isFrameReady) {
      setFrameReady();
    }
  }, [setFrameReady, isFrameReady]);

  const handleAddFrame = useCallback(async () => {
    const frameAdded = await addFrame();
    setFrameAdded(Boolean(frameAdded));
  }, [addFrame]);

  usePrimaryButton(
    { text: isConnected ? "Optimize Budget" : "Connect Wallet" },
    () => {
      if (isConnected) {
        setActiveTab("chat");
      }
    }
  );

  const saveFrameButton = useMemo(() => {
    if (context && !context.client.added) {
      return (
        <button
          onClick={handleAddFrame}
          className="text-accent text-sm font-medium px-3 py-1 rounded-md hover:bg-accent/10 transition-colors"
        >
          + Save
        </button>
      );
    }

    if (frameAdded) {
      return (
        <div className="flex items-center space-x-1 text-sm font-medium text-success animate-fade-in">
          <span>✓ Saved</span>
        </div>
      );
    }

    return null;
  }, [context, frameAdded, handleAddFrame]);

  return (
    <AppShell>
      <header className="flex justify-between items-center mb-6 h-12">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">BB</span>
          </div>
          <div>
            <h1 className="text-xl font-semibold text-text">Budget Bot</h1>
            <p className="text-sm text-muted">AI Financial Assistant</p>
          </div>
        </div>
        <div className="flex items-center space-x-3">
          <Wallet className="z-10">
            <ConnectWallet
              onConnect={() => setIsConnected(true)}
              onDisconnect={() => setIsConnected(false)}
            >
              <Name className="text-inherit" />
            </ConnectWallet>
            <WalletDropdown>
              <Identity className="px-4 pt-3 pb-2" hasCopyAddressOnClick>
                <Avatar />
                <Name />
                <Address />
                <EthBalance />
              </Identity>
              <WalletDropdownDisconnect />
            </WalletDropdown>
          </Wallet>
          {saveFrameButton}
        </div>
      </header>

      <nav className="flex space-x-1 mb-6 bg-surface/50 rounded-lg p-1">
        <button
          onClick={() => setActiveTab("dashboard")}
          className={`flex-1 py-2 px-3 rounded-md text-sm font-medium transition-colors ${
            activeTab === "dashboard"
              ? "bg-primary text-white"
              : "text-muted hover:text-text"
          }`}
        >
          Dashboard
        </button>
        <button
          onClick={() => setActiveTab("chat")}
          className={`flex-1 py-2 px-3 rounded-md text-sm font-medium transition-colors ${
            activeTab === "chat"
              ? "bg-primary text-white"
              : "text-muted hover:text-text"
          }`}
        >
          AI Assistant
        </button>
      </nav>

      <main className="flex-1">
        {activeTab === "dashboard" && <Dashboard isConnected={isConnected} />}
        {activeTab === "chat" && <AgentChat isConnected={isConnected} />}
      </main>

      <footer className="mt-6 pt-4 flex justify-center">
        <button
          className="text-muted text-xs hover:text-text transition-colors"
          onClick={() => openUrl("https://base.org/builders/minikit")}
        >
          Built on Base with MiniKit
        </button>
      </footer>
    </AppShell>
  );
}
