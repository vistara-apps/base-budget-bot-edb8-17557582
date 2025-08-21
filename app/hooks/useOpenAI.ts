
"use client";

import { useState } from 'react';
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
  baseURL: "https://openrouter.ai/api/v1",
  dangerouslyAllowBrowser: true,
});

export function useOpenAI() {
  const [isLoading, setIsLoading] = useState(false);

  const analyzeFinancialData = async (data: any) => {
    setIsLoading(true);
    try {
      const response = await openai.chat.completions.create({
        model: "google/gemini-2.0-flash-001",
        messages: [
          {
            role: "system",
            content: "You are a financial analysis AI assistant. Analyze the provided data and provide insights about subscriptions, fees, and optimization opportunities. Be concise and actionable."
          },
          {
            role: "user",
            content: `Analyze this financial data: ${JSON.stringify(data)}`
          }
        ],
        max_tokens: 500,
      });

      return response.choices[0]?.message?.content || "No analysis available";
    } catch (error) {
      console.error('OpenAI API error:', error);
      return "Unable to analyze data at this time.";
    } finally {
      setIsLoading(false);
    }
  };

  const generateBillNegotiationStrategy = async (billData: any) => {
    setIsLoading(true);
    try {
      const response = await openai.chat.completions.create({
        model: "google/gemini-2.0-flash-001",
        messages: [
          {
            role: "system",
            content: "You are a bill negotiation expert. Provide a strategy for negotiating lower rates based on the bill information provided."
          },
          {
            role: "user",
            content: `Help me negotiate this bill: ${JSON.stringify(billData)}`
          }
        ],
        max_tokens: 300,
      });

      return response.choices[0]?.message?.content || "No strategy available";
    } catch (error) {
      console.error('OpenAI API error:', error);
      return "Unable to generate strategy at this time.";
    } finally {
      setIsLoading(false);
    }
  };

  return {
    analyzeFinancialData,
    generateBillNegotiationStrategy,
    isLoading,
  };
}
