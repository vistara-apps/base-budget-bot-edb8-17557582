// Mock implementation of minikit hooks
import React, { ReactNode } from 'react';

export function useMiniKit() {
  return {
    setFrameReady: () => {},
    isFrameReady: true,
    context: {
      client: {
        added: false
      }
    }
  };
}

export function useAddFrame() {
  return async () => true;
}

export function useOpenUrl() {
  return (url: string) => {
    console.log(`Opening URL: ${url}`);
    // In a real implementation, this would open the URL
    return true;
  };
}

export function usePrimaryButton(options: { text: string }, callback: () => void) {
  // This is a mock implementation that doesn't do anything
  return;
}

interface MiniKitProviderProps {
  children: ReactNode;
  apiKey?: string;
  chain?: any;
  config?: any;
}

export function MiniKitProvider({ children }: MiniKitProviderProps) {
  return <>{children}</>;
}

