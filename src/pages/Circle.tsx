import { useEffect } from 'react';

function Circle() {
  useEffect(() => {
    window.location.href = 'https://sillygoose.vercel.app/'; 
  }, []);

  return null; // Render nothing or a loading indicator
}

export default Circle;