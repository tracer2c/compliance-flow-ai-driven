import React from 'react';
import { User, Bot, ExternalLink, Calendar, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

export interface ChatMessageData {
  role: 'user' | 'assistant';
  content: string;
  actions?: Array<{
    type: 'link' | 'button' | 'contact';
    label: string;
    url?: string;
    onClick?: () => void;
  }>;
  cards?: Array<{
    title: string;
    description: string;
    features?: string[];
    price?: string;
    highlight?: boolean;
  }>;
}

interface ChatMessageProps {
  message: ChatMessageData;
}

const ChatMessage: React.FC<ChatMessageProps> = ({ message }) => {
  const isUser = message.role === 'user';

  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'} space-x-2`}>
      {!isUser && (
        <div className="h-7 w-7 rounded-full bg-gradient-to-r from-primary to-teal-500 flex items-center justify-center flex-shrink-0 mt-1">
          <Bot className="h-4 w-4 text-white" />
        </div>
      )}
      
      <div className={`max-w-[80%] ${isUser ? 'order-first' : ''}`}>
        <div
          className={`rounded-lg px-3 py-2 text-sm ${
            isUser
              ? 'bg-gradient-to-r from-primary to-teal-500 text-white ml-auto'
              : 'bg-muted/50 text-foreground'
          }`}
        >
          <div className="whitespace-pre-wrap">{message.content}</div>
        </div>

        {/* Action Cards */}
        {message.cards && message.cards.length > 0 && (
          <div className="mt-3 space-y-2">
            {message.cards.map((card, index) => (
              <Card
                key={index}
                className={`p-3 border ${
                  card.highlight
                    ? 'border-primary/20 bg-gradient-to-r from-primary/5 to-teal-500/5'
                    : 'border-border/50 bg-card/50'
                }`}
              >
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-semibold text-sm">{card.title}</h4>
                  {card.price && (
                    <span className="text-sm font-bold text-primary">{card.price}</span>
                  )}
                </div>
                <p className="text-xs text-muted-foreground mb-2">{card.description}</p>
                {card.features && (
                  <ul className="text-xs space-y-1">
                    {card.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-2">
                        <div className="h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </Card>
            ))}
          </div>
        )}

        {/* Action Buttons */}
        {message.actions && message.actions.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-2">
            {message.actions.map((action, index) => (
              <Button
                key={index}
                variant={action.type === 'contact' ? 'default' : 'outline'}
                size="sm"
                className={`text-xs h-8 ${
                  action.type === 'contact'
                    ? 'bg-gradient-to-r from-primary to-teal-500 hover:from-primary/90 hover:to-teal-500/90'
                    : 'hover:bg-primary/5 hover:text-primary hover:border-primary/20'
                }`}
                onClick={() => {
                  if (action.url) {
                    window.open(action.url, '_blank');
                  } else if (action.onClick) {
                    action.onClick();
                  }
                }}
              >
                {action.type === 'link' && <ExternalLink className="h-3 w-3 mr-1" />}
                {action.type === 'contact' && <Calendar className="h-3 w-3 mr-1" />}
                {action.label}
              </Button>
            ))}
          </div>
        )}
      </div>

      {isUser && (
        <div className="h-7 w-7 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
          <User className="h-4 w-4 text-primary" />
        </div>
      )}
    </div>
  );
};

export default ChatMessage;