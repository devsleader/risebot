'use client';

import { useState, useEffect, useRef } from 'react';
import CountUp from 'react-countup';

interface CounterUpProps {
  count: number;
  time: number;
}

const CounterUp: React.FC<CounterUpProps> = ({ count, time }) => {
  const [counterOn, setCounterOn] = useState<boolean>(false);
  const countUpRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setCounterOn(true);
          observer.disconnect(); // Stop observing after the first trigger
        }
      },
      { threshold: 0.1 }
    );

    if (countUpRef.current) {
      observer.observe(countUpRef.current);
    }

    return () => {
      if (countUpRef.current) {
        observer.unobserve(countUpRef.current);
      }
    };
  }, []);

  return (
    <div>
      <CountUp 
        end={counterOn ? count : 0}
        duration={time} 
        redraw={true}
      >
        {({ countUpRef }) => (
          <span ref={countUpRef}></span>
        )}
      </CountUp>
    </div>
  );
};

export default CounterUp; 