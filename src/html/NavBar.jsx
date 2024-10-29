import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher.jsx';

export default function NavBar({ closeDetailClick, showDetailBar = false, detailTitle }) {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white/70 backdrop-blur-md shadow-md fixed w-full top-0 left-0 z-10">
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <div className="text-2xl font-extrabold text-black-600 font-logo">
          3DGS - RESEARCH PROJECT
        </div>

        {/* Menu Icon (Mobile) */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-gray-800 focus:outline-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}
              />
            </svg>
          </button>
        </div>

        {/* Menu Links */}
        <ul
          className={`md:flex md:items-center space-y-4 md:space-y-0 md:space-x-6 font-body ${isOpen ? 'block' : 'hidden'} md:block`}>
          <li>
            <a
              href="https://threejs-journey.com"
              className="text-gray-800 hover:underline"
              target="_blank">
              {t('navigation.tutorial')}
            </a>
          </li>
          <li>
            <a
              href="https://github.com/MrNeRF/awesome-3D-gaussian-splatting"
              className="text-gray-800 hover:underline"
              target="_blank">
              {t('navigation.papers')}
            </a>
          </li>
          <li>
            <a
              href="https://drei.docs.pmnd.rs/getting-started/introduction"
              className="text-gray-800 hover:underline"
              target="_blank">
              {t('navigation.docs')}
            </a>
          </li>
          <li>
            <a
              href="https://threejs-portfolio-murauer.vercel.app/"
              className="text-gray-800 hover:underline"
              target="_blank">
              {t('navigation.about')}
            </a>
          </li>
          <li>
            <LanguageSwitcher />
          </li>
        </ul>
      </div>
      {showDetailBar && (
        <div className="bg-black/80 text-white h-12 flex items-center p-2">
          <div className="flex-shrink-0">
            <img
              onClick={closeDetailClick}
              src="./icons/close_icon.svg"
              alt="close_icon"
              className="cursor-pointer w-5 h-5 hover:opacity-80 ml-2"
            />
          </div>
          <div className="flex-grow text-center">
            <h1 className="font-bold text-lg">{detailTitle}</h1>
          </div>
        </div>

      )}
    </nav>
  );
}
