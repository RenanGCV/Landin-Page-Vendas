'use client';

import { useEffect, useState } from 'react';
import Lottie from 'lottie-react';

export default function LottieWrapper() {
  const [animationData, setAnimationData] = useState(null);

  useEffect(() => {
    // Carrega o arquivo JSON diretamente
    fetch('/animations/wired-gradient-955-demand-hover-click.json')
      .then(response => response.json())
      .then(data => setAnimationData(data))
      .catch(error => console.error('Error loading animation:', error));
  }, []);

  if (!animationData) {
    return null;
  }

  return (
    <Lottie
      animationData={animationData}
      loop={true}
      autoplay={true}
      style={{
        width: '100%',
        height: '100%',
        filter: 'drop-shadow(0px 4px 20px rgba(0, 0, 0, 0.1))'
      }}
    />
  );
} 