import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';
import {
    HeaderContainer,
    Nav,
    Logo,
    NavLinks,
    NavLink,
    MobileMenuButton,
    MobileMenu,
    MobileNavLink,
} from './Header.styles';

const Header = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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

    const linkVariants = {
        closed: { opacity: 0, x: 50 },
        open: (i) => ({
            opacity: 1,
            x: 0,
            transition: {
                delay: i * 0.1,
            },
        }),
    };

    const navItems = ['Inicio', 'Nosotros', 'Servicios', 'Hardware', 'Software', 'Contacto'];

    return (
        <HeaderContainer>
            <Nav className="container">
                <Logo
                    as={motion.div}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <span>LARCAD</span> 
                </Logo>

                {/* Desktop Menu */}
                <NavLinks>
                    {navItems.map((item, index) => (
                        <NavLink
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            as={motion.a}
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            {item}
                        </NavLink>
                    ))}
                </NavLinks>

                {/* Mobile Menu Button */}
                <MobileMenuButton
                    onClick={toggleMobileMenu}
                    as={motion.button}
                    whileTap={{ scale: 0.9 }}
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
                        {navItems.map((item, index) => (
                            <MobileNavLink
                                key={item}
                                href={`#${item.toLowerCase()}`}
                                onClick={closeMobileMenu}
                                as={motion.a}
                                custom={index}
                                variants={linkVariants}
                                initial="closed"
                                animate="open"
                                exit="closed"
                            >
                                {item}
                            </MobileNavLink>
                        ))}
                    </MobileMenu>
                )}
            </AnimatePresence>
        </HeaderContainer>
    );
};

export default Header;
