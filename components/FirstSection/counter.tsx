import { useState } from 'react';
import ScrollTrigger from 'react-scroll-trigger';
import CountUp from 'react-countup';

const Counter = () => {
  const [counterOn, setCounterOn] = useState(false);
  return (
    <ScrollTrigger
      onEnter={() => setCounterOn(true)}
      onExit={() => setCounterOn(false)}
    >
      {counterOn && <CountUp start={298156} end={299156} duration={4} delay={0} />}
    </ScrollTrigger>
  );
};

export default Counter;
