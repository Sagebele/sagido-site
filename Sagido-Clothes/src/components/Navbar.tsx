import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faSearch, faHeart, faShoppingBasket, faBars } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect } from 'react';
import "../styles/Header.css";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`sticky top-0 left-0 right-0 z-50  px-3 py-4 transition-all duration-300 ${
      isScrolled ? 'backdrop-blur-md' : 'bg-transparent'
    }`}>
      <div className=" max-w-7xl mx-auto flex items-center justify-between">
        <div className="hidden md:flex items-center space-x-8">
          <a href="#" className="text-zinc-900 nav-a">Explore</a>
          <a href="#" className="text-zinc-900 nav-a">Women</a>
          <a href="#" className="text-zinc-900 nav-a">Men</a>
          <a href="#" className="text-zinc-900 nav-a">Junior</a>
        </div>

        <div className="pl-8 md:pl-0 text-2xl font-semibold md:text-3xl text-zinc-900 hover:cursor-pointer  transition">
          <a href="#">Sagido</a>
        </div>

        <div className="hidden md:flex items-center space-x-8">
          <a href="#" className="text-zinc-900 nav-a">USA $</a>
          <a href="#" className="text-zinc-900 nav-a"><FontAwesomeIcon icon={faSearch} /></a>
          <a href="#" className="text-zinc-900 nav-a"><FontAwesomeIcon icon={faUser} /></a>
          <a href="#" className="text-zinc-900 nav-a"><FontAwesomeIcon icon={faHeart} /></a>
          <a href="#" className="text-zinc-900 nav-a"><FontAwesomeIcon icon={faShoppingBasket} /></a>
        </div>
        <div className="md:hidden items-center space-x-4" >
          <a href="#" className="text-zinc-900 nav-a"><FontAwesomeIcon icon={faHeart} /></a>
          <a href="#" className="text-zinc-900 nav-a"><FontAwesomeIcon icon={faSearch} /></a>
          <a href="#" className="text-zinc-900 nav-a"><FontAwesomeIcon icon={faShoppingBasket} /></a>
          <button
            className="text-white p-2 rounded-lg hover:bg-white/10"
            aria-label="Open menu"
          >
            <FontAwesomeIcon icon={faBars} />
          </button>

        </div>
        
      </div>
    </nav>
  );
};

export default Navbar;