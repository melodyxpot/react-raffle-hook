import { useEffect, useRef, useState } from 'react';

export interface RaffleOptions {
  participants: (string | number)[];
  winnerCount?: number;
  countdownTime?: number;
  onStart?: () => void;
  onFinish?: (winners: (string | number)[]) => void;
}

export function useRaffle({
  participants,
  winnerCount = 1,
  countdownTime = 3000,
  onStart,
  onFinish,
}: RaffleOptions) {
  const [isRunning, setIsRunning] = useState(false);
  const [countdown, setCountdown] = useState(countdownTime);
  const [winners, setWinners] = useState<(string | number)[]>([]);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const startRaffle = () => {
    if (participants.length === 0) return;
    setIsRunning(true);
    setCountdown(countdownTime);
    onStart?.();

    timerRef.current = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1000) {
          clearInterval(timerRef.current!);
          const result = [...participants]
            .sort(() => Math.random() - 0.5)
            .slice(0, winnerCount);
          setWinners(result);
          setIsRunning(false);
          onFinish?.(result);
          return 0;
        }
        return prev - 1000;
      });
    }, 1000);
  };

  const resetRaffle = () => {
    setWinners([]);
    setCountdown(countdownTime);
    setIsRunning(false);
  };

  useEffect(() => () => {
    if (timerRef.current) clearInterval(timerRef.current);
  }, []);

  return {
    participants,
    winners,
    isRunning,
    countdown,
    startRaffle,
    resetRaffle,
  };
}
