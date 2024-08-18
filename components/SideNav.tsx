'use client'
import { useEffect } from 'react';

const SideNav = ({ sections }) => {
  useEffect(() => {
    const handleScroll = () => {
      if(!window){
        return 
      }
      const fromTop = window.scrollY + 10; // Adjust this value based on your header height
      document.querySelectorAll('.nav-link').forEach((link:any) => {
        const section = document.querySelector(link.hash);
        if ( section.offsetTop + section.offsetHeight < fromTop+window.innerHeight+(section.offsetHeight/2)) {
          link.classList.remove('text-gray-400');
          link.classList.add('text-blue-600', 'font-bold');
          document.getElementById(link.hash.slice(1))?.classList.remove('opacity-10')
          document.getElementById(link.hash.slice(1))?.classList.add('opacity-100')
        } else {
          link.classList.remove('text-blue-600', 'font-bold');
          link.classList.add('text-gray-400');
          document.getElementById(link.hash.slice(1))?.classList.remove('opacity-100')
          document.getElementById(link.hash.slice(1))?.classList.add('opacity-10')
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className="fixed mt-20 left-0 p-4 space-y-4">
      <ul className="list-none">
        {sections.map((section, index) => (
          <li key={index}>
            <a
              href={`#${section.id}`}
              className="nav-link block p-2 text-gray-400 hover:text-blue-600 transition-colors duration-200 "
            >
              {section.title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default SideNav;
