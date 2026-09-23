import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';
import { FiArrowUpRight } from 'react-icons/fi';
import UNACHLogo from '../../img/UNACH.svg';
import {
    HeaderContainer,
    Nav,
    LogoContainer,
    LogoText,
    LogoSubtext,
    NavLinks,
    NavLink,
    HeaderCTA,
    MobileMenuButton,
    MobileMenu,
    MobileNavLink,
} from './Header.styles';

const Header = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    const closeMobileMenu = () => {
        setMobileMenuOpen(false);
    };

    const menuVariants = {
        closed: {
            x: '100%',
            transition: {
                type: 'tween',
                duration: 0.3,
            },
        },
        open: {
            x: 0,
            transition: {
                type: 'tween',
                duration: 0.3,
            },
        },
    };

    const navItems = [
        { name: 'Inicio', href: '#inicio' },
        { name: 'Nosotros', href: '#nosotros' },
        { name: 'Servicios', href: '#servicios' },
        { name: 'Hardware', href: '#hardware' },
        { name: 'Software', href: '#software' },
        { name: 'Contacto', href: '#contacto' },
    ];

    return (
        <HeaderContainer $scrolled={scrolled}>
            <Nav className="container">
                <LogoContainer
                    href="#inicio"
                    as={motion.a}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <img src={UNACHLogo} alt="UNACH" style={{ height: 38, width: 'auto' }} />
                    <div>
                        <LogoText>LARCAD</LogoText>
                    </div>
                </LogoContainer>

                {/* Desktop Menu */}
                <NavLinks>
                    {navItems.map((item, index) => (
                        <NavLink
                            key={item.name}
                            href={item.href}
                            as={motion.a}
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.05, duration: 0.4 }}
                        >
                            {item.name}
                        </NavLink>
                    ))}
                    
                    <HeaderCTA
                        href="#contacto"
                        as={motion.a}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3, duration: 0.4 }}
                    >
                        <span>Solicitar Acceso</span>
                        <FiArrowUpRight size={15} />
                    </HeaderCTA>
                </NavLinks>

                {/* Mobile Menu Button */}
                <MobileMenuButton
                    onClick={toggleMobileMenu}
                    aria-label="Abrir menú"
                >
                    {mobileMenuOpen ? <FaTimes /> : <FaBars />}
                </MobileMenuButton>
            </Nav>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <MobileMenu
                        as={motion.div}
                        initial="closed"
                        animate="open"
                        exit="closed"
                        variants={menuVariants}
                    >
                        {navItems.map((item) => (
                            <MobileNavLink
                                key={item.name}
                                href={item.href}
                                onClick={closeMobileMenu}
                            >
                                {item.name}
                            </MobileNavLink>
                        ))}
                        <MobileNavLink
                            href="#contacto"
                            onClick={closeMobileMenu}
                            style={{
                                background: 'linear-gradient(135deg, #3B82F6 0%, #2563EB 100%)',
                                color: '#FFFFFF',
                                fontWeight: 600,
                                textAlign: 'center',
                                marginTop: '1rem',
                            }}
                        >
                            Solicitar Acceso
                        </MobileNavLink>
                    </MobileMenu>
                )}
            </AnimatePresence>
        </HeaderContainer>
    );
};

export default Header;
