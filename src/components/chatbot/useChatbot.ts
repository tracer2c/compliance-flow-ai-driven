import { useState, useCallback } from 'react';
import { useLocation } from 'react-router-dom';
import { ChatMessageData } from './ChatMessage';
import { getChatResponse } from '@/lib/chatbot';

export const useChatbot = () => {
  const [messages, setMessages] = useState<ChatMessageData[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();

  const getPageContext = () => {
    const path = location.pathname;
    switch (path) {
      case '/':
        return 'User is on the homepage - focus on introducing TraceR2C and core value propositions';
      case '/solutions':
        return 'User is on the solutions page - focus on industry-specific solutions and use cases';
      case '/security':
        return 'User is on the security page - focus on compliance, certifications, and security features';
      case '/pricing':
        return 'User is on the pricing page - focus on pricing plans, features, and value comparison';
      case '/integrations':
        return 'User is on the integrations page - focus on available integrations and technical capabilities';
      case '/resources':
        return 'User is on the resources page - focus on guides, documentation, and learning materials';
      case '/company':
        return 'User is on the company page - focus on company history, mission, and team';
      case '/contact':
        return 'User is on the contact page - focus on getting in touch, demos, and support';
      default:
        return 'User is browsing the TraceR2C website';
    }
  };

  const sendMessage = useCallback(async (content: string) => {
    const userMessage: ChatMessageData = { role: 'user', content };
    setMessages(prev => [...prev, userMessage]);
    setIsLoading(true);

    try {
      const response = await getChatResponse(content, getPageContext());
      
      const assistantMessage: ChatMessageData = {
        role: 'assistant',
        content: response.message,
        cards: response.cards,
        actions: response.actions,
      };

      setMessages(prev => [...prev, assistantMessage]);
    } catch (error) {
      console.error('Chat error:', error);
      const errorMessage: ChatMessageData = {
        role: 'assistant',
        content: "I apologize, but I'm having trouble connecting right now. Please try again in a moment, or feel free to contact our support team directly.",
        actions: [
          {
            type: 'contact',
            label: 'Contact Support',
            url: '/contact'
          }
        ]
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  }, [location.pathname]);

  return {
    messages,
    isLoading,
    sendMessage,
  };
};