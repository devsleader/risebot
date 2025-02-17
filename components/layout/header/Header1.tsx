'use client'
import Link from "next/link";
import { useEffect, useState } from 'react';
import Menu from "../Menu";
import MobileMenu from '../MobileMenu';
import React from "react";

interface Header1Props {
    scroll: number;
    isMobileMenu: boolean;
    handleMobileMenu: () => void;
    isConnect: boolean;
    handleConnect: () => void;
}

const Header1: React.FC<Header1Props> = ({ scroll, isMobileMenu, handleMobileMenu, isConnect, handleConnect }) => {
    const [isMobile, setIsMobile] = useState<boolean>(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 991);
        };

        // Initial check
        handleResize();

        // Event listener for window resize
        window.addEventListener('resize', handleResize);

        // Cleanup on unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <>
            <header id="header_main" className={`header ${scroll ? "is-fixed is-small" : ""}`}>
                <div className="container">
                    <div id="site-header-inner">
                        <div className="header__logo">
                            <Link href="/"><img src="assets/images/logo/logo.png" alt="" /></Link>
                        </div>
                        {isMobile ? (
                            <MobileMenu isMobileMenu={isMobileMenu} />
                        ) : (
                            <Menu />
                        )}

                        {/* /#main-nav */}
                        <a onClick={handleConnect} data-toggle="modal" data-target="#popup_bid" className="tf-button style1">
                            {isConnect ? "Disconnect" : "Connect"}
                        </a>
                        <div className={`mobile-button ${isMobileMenu ? "active" : ""}`} onClick={handleMobileMenu}><span /></div>{/* /.mobile-button */}
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header1;