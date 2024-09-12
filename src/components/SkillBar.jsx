import React, { useState, useEffect, useRef } from 'react';
import '../styles/Skills.css';

export default function SkillBar({ lang, perc, icon }) {
  const [isVisible, setIsVisible] = useState(false);
  const skillRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    if (skillRef.current) {
      observer.observe(skillRef.current);
    }

    return () => {
      if (skillRef.current) observer.disconnect();
    };
  }, []);

  return (
    <div className="skill" ref={skillRef}>
      <div className='skill-icon-container'>
        <div className="skill-icon">
            <span dangerouslySetInnerHTML={{ __html: icon }} />
        </div>
        <span className="skill-name">{lang}</span>
      </div>
      <div className="skill-bar-outer">
        <div
          className="skill-bar-inner"
          style={{
            width: isVisible ? perc : '0%',
            transition: 'width 1.5s ease-in-out',
          }}
        ></div>
      </div>
    </div>
  );
}
