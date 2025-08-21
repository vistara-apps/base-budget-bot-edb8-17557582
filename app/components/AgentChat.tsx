"use client";

import { useState } from "react";
import { ActionButton } from "./ActionButton";

interface AgentChatProps {
  isConnected: boolean;
}

interface Message {
  id: string;
  type: "user" | "agent";
  content: string;
  timestamp: Date;
}

export function AgentChat({ isConnected }: AgentChatProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      type: "agent",
      content: "Hi! I'm your Budget Bot AI assistant. I can help you optimize subscriptions, find hidden fees, analyze DeFi positions, and negotiate bills. What would you like to work on today?",
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSendMessage = async () => {
    if (!inputValue.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      type: "user",
      content: inputValue,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue("");
    setIsLoading(true);

    // Simulate AI response
    setTimeout(() => {
      const agentMessage: Message = {
        id: (Date.now() + 1).toString(),
        type: "agent",
        content: getAIResponse(inputValue),
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, agentMessage]);
      setIsLoading(false);
    }, 1500);
  };

  const getAIResponse = (input: string): string => {
    const lowerInput = input.toLowerCase();
    
    if (lowerInput.includes("subscription") || lowerInput.includes("cancel")) {
      return "I found 3 subscriptions in your account. Adobe Creative ($52.99/mo) hasn't been used in 30 days - that's $635/year! Would you like me to help you cancel it? I can provide step-by-step instructions or direct links.";
    }
    
    if (lowerInput.includes("fee") || lowerInput.includes("hidden")) {
      return "I've detected $602/year in hidden fees from your transaction history. The biggest culprits are ATM fees ($182/year) and overdraft fees ($420/year). I can suggest fee-free ATM locations and help you set up overdraft protection.";
    }
    
    if (lowerInput.includes("defi") || lowerInput.includes("staking") || lowerInput.includes("yield")) {
      return "Your current DeFi positions are earning 4.2% APY on average. I found opportunities to increase this to 6.8% by moving your USDC from Aave to a higher-yield protocol. Would you like me to analyze the risks and provide migration steps?";
    }
    
    if (lowerInput.includes("bill") || lowerInput.includes("negotiate")) {
      return "I can help negotiate your recurring bills! Based on your spending patterns, I estimate potential savings of $200-400/year on internet, phone, and utility bills. Which bill would you like me to help negotiate first?";
    }
    
    return "I can help you with subscription optimization, hidden fee detection, DeFi analysis, and bill negotiation. Could you be more specific about what you'd like assistance with?";
  };

  if (!isConnected) {
    return (
      <div className="text-center py-12">
        <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
          <span className="text-accent text-2xl">🤖</span>
        </div>
        <h2 className="text-xl font-semibold mb-2">AI Assistant Ready</h2>
        <p className="text-muted">
          Connect your wallet to start chatting with your personal budget optimization AI.
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-96 animate-fade-in">
      <div className="flex-1 overflow-y-auto space-y-3 mb-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={message.type === "agent" ? "agent-message" : "user-message"}
          >
            <p className="text-sm">{message.content}</p>
            <span className="text-xs text-muted mt-1 block">
              {message.timestamp.toLocaleTimeString()}
            </span>
          </div>
        ))}
        {isLoading && (
          <div className="agent-message">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
              <div className="w-2 h-2 bg-accent rounded-full animate-pulse" style={{ animationDelay: "0.2s" }}></div>
              <div className="w-2 h-2 bg-accent rounded-full animate-pulse" style={{ animationDelay: "0.4s" }}></div>
            </div>
          </div>
        )}
      </div>

      <div className="flex space-x-2">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
          placeholder="Ask about subscriptions, fees, DeFi, or bills..."
          className="flex-1 bg-surface border border-white/20 rounded-md px-3 py-2 text-sm text-text placeholder:text-muted focus:border-accent focus:outline-none"
          disabled={isLoading}
        />
        <ActionButton
          variant="primary"
          onClick={handleSendMessage}
          disabled={!inputValue.trim() || isLoading}
        >
          Send
        </ActionButton>
      </div>

      <div className="flex flex-wrap gap-2 mt-3">
        <button
          onClick={() => setInputValue("Show me my subscriptions")}
          className="text-xs bg-surface/50 hover:bg-surface border border-white/10 rounded-full px-3 py-1 text-muted hover:text-text transition-colors"
        >
          Check subscriptions
        </button>
        <button
          onClick={() => setInputValue("Find hidden fees")}
          className="text-xs bg-surface/50 hover:bg-surface border border-white/10 rounded-full px-3 py-1 text-muted hover:text-text transition-colors"
        >
          Find hidden fees
        </button>
        <button
          onClick={() => setInputValue("Analyze my DeFi positions")}
          className="text-xs bg-surface/50 hover:bg-surface border border-white/10 rounded-full px-3 py-1 text-muted hover:text-text transition-colors"
        >
          DeFi analysis
        </button>
      </div>
    </div>
  );
}
