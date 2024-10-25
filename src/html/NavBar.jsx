import { useState } from 'react';

export default function NavBar() {
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
              href="https://threejs-journey.com//"
              className="text-gray-800 hover:underline"
              target="_blank">
              Tutorial
            </a>
          </li>
          <li>
            <a
              href="https://github.com/MrNeRF/awesome-3D-gaussian-splatting"
              className="text-gray-800 hover:underline"
              target="_blank">
              Papers
            </a>
          </li>
          <li>
            <a
              href="https://drei.docs.pmnd.rs/getting-started/introduction"
              className="text-gray-800 hover:underline"
              target="_blank">
              Docs
            </a>
          </li>
          <li>
            <a
              href="https://threejs-portfolio-murauer.vercel.app/"
              className="text-gray-800 hover:underline"
              target="_blank">
              Portfolio
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
