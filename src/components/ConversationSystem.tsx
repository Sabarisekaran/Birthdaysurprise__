import { useEffect, useState } from 'react';

export interface ConversationState {
  pandaMessage: string;
  teddyMessage: string;
  pandaExpression: 'default' | 'happy' | 'wave' | 'heart' | 'point' | 'thinking' | 'question';
  teddyExpression: 'default' | 'wave' | 'happy' | 'surprised' | 'thank-you' | 'shy';
  showPandaBubble: boolean;
  showTeddyBubble: boolean;
}

const INITIAL_STATE: ConversationState = {
  pandaMessage: 'Happy Birthday Harshi 🎉',
  teddyMessage: 'Happy Birthday Harshi 🎉',
  pandaExpression: 'happy',
  teddyExpression: 'happy',
  showPandaBubble: true,
  showTeddyBubble: true,
};

const AFTER_CLICK_STATE: ConversationState = {
  pandaMessage: 'You are very special Harshi ❤️',
  teddyMessage: 'Tq! You remembered me 🥺',
  pandaExpression: 'heart',
  teddyExpression: 'thank-you',
  showPandaBubble: true,
  showTeddyBubble: true,
};

const STAGE_TWO_STATE: ConversationState = {
  pandaMessage: 'Hey! Let\'s make this beautiful!',
  teddyMessage: '',
  pandaExpression: 'happy',
  teddyExpression: 'thank-you',
  showPandaBubble: true,
  showTeddyBubble: false,
};

const STAGE_THREE_STATE: ConversationState = {
  pandaMessage: 'Harshi, can you color the cake and us?',
  teddyMessage: '',
  pandaExpression: 'point',
  teddyExpression: 'thank-you',
  showPandaBubble: true,
  showTeddyBubble: false,
};

const STAGE_FOUR_STATE: ConversationState = {
  pandaMessage: 'Tap the heart brush below!',
  teddyMessage: '',
  pandaExpression: 'question',
  teddyExpression: 'thank-you',
  showPandaBubble: true,
  showTeddyBubble: false,
};

export const useConversation = (firstClickHappened: boolean): ConversationState => {
  const [state, setState] = useState<ConversationState>(INITIAL_STATE);

  useEffect(() => {
    const timers: ReturnType<typeof setTimeout>[] = [];

    if (!firstClickHappened) {
      setState(INITIAL_STATE);
      return undefined;
    }

    setState(AFTER_CLICK_STATE);

    timers.push(setTimeout(() => setState(STAGE_TWO_STATE), 30000));
    timers.push(setTimeout(() => setState(STAGE_THREE_STATE), 33000));
    timers.push(setTimeout(() => setState(STAGE_FOUR_STATE), 36000));

    return () => {
      timers.forEach((timer) => clearTimeout(timer));
    };
  }, [firstClickHappened]);

  return state;
};

export default useConversation;
