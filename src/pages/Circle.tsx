import { useEffect } from 'react';

function Circle() {
  useEffect(() => {
    window.open('https://circlechatbot.vercel.app/', '_blank');
  }, []);

  return null; // Render nothing or a loading indicator
}

export default Circle;