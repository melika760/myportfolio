import { useEffect, useState } from 'react';

const useCurrent = () => {
  const [section, setSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      const scrollPosition = window.scrollY;

      sections.forEach((sec) => {
        const offsetTop = sec.offsetTop;
        const offsetBottom = offsetTop + sec.offsetHeight;

        if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
          setSection(sec.getAttribute('id'));
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return { section };
};

export default useCurrent;
