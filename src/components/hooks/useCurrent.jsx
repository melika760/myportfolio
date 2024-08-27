import { useEffect, useState } from 'react';

const useCurrent = () => {
  const [section, setSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      let currentSection = 'home';

      sections.forEach((sec) => {
        const sectionId = sec.getAttribute('id');
        if (!sectionId) return;

        const offsetTop = sec.offsetTop - 100; 
        const offsetBottom = offsetTop + sec.offsetHeight + 100; 

        if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
          currentSection = sectionId;
        }
      });


      if (currentSection !== section) {
        setSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [section]);

  return { section, setSection };
};

export default useCurrent;
