import React, { useEffect, useState } from 'react';
import './BackToTop.css';

const BackToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const goTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <button className={`back-to-top ${visible ? 'visible' : ''}`} onClick={goTop} aria-label="Back to top">
      ↑
    </button>
  );
};

export default BackToTop;
