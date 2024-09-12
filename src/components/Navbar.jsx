import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { Link } from 'react-router-dom'; 
import '../styles/Navbar.css'

export default function Navbar({darkMode,setDarkMode}) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    // const [darkMode, setDarkMode] = useState(true);

    const navItems = ['Home', 'Skills', 'Projects', 'Contact'];

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [darkMode]);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className='container'>
                <div className='logo'>
                    <Link to="/">
                        Ganeshdarshan Bhat
                    </Link>
                </div>
                <div className='nav-links'>
                    <ul className={isMenuOpen ? 'nav-menu active' : 'nav-menu'}>
                        {navItems.map((item) => (
                            <li key={item}>
                                <a href={`#${item.toLowerCase()}`} onClick={toggleMenu}>
                                    {item}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className='controls'>
                    <button onClick={toggleDarkMode}>
                        {darkMode ? <Sun className='icon' /> : <Moon className='icon' />}
                    </button>
                    <button onClick={toggleMenu} className='menu-btn'>
                        {isMenuOpen ? <X className='icon' /> : <Menu className='icon' />}
                    </button>
                </div>
            </div>
        </nav>
    );
}
