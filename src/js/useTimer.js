import { useEffect, useState } from 'react';

const useTimer = () => {
  const [checker, setChecker] = useState(0);
  const [waiting, setWaiting] = useState(null);

  useEffect(() => {
    console.log(checker);
    const timer = setTimeout(() => {
      setChecker(checker - 1);
    }, 2000);
    if (checker === -5) {
      setChecker(0);
      clearTimeout(timer);
    }
    if (waiting != null && waiting > checker) {
      clearTimeout(timer);
      setChecker(waiting);
      setWaiting(null);
    } else if (waiting != null && waiting < checker) {
      setChecker(waiting);
      setWaiting(null);
    }
  }, [checker]);
  return { checker, setWaiting };
};

export default useTimer;
