'use client'
import React from 'react';
import AOS from 'aos'
import { useEffect, useState } from "react"
import AddClassBody from "../elements/AddClassBody"
import BackToTop from '../elements/BackToTop'
import DonutProgress from '../elements/DonutProgress'
import PopupBid from "../elements/PopupBid"
import Breadcrumb from './Breadcrumb'
import Footer1 from './footer/Footer1'
import Footer2 from './footer/Footer2'
import Header1 from "./header/Header1"
import Header2 from './header/Header2'

// Define the props interface
interface LayoutProps {
    headerStyle: number;
    footerStyle: number;
    breadcrumbTitle?: string;
    children: React.ReactNode;
}

export default function Layout({ headerStyle, footerStyle, breadcrumbTitle, children }: LayoutProps) {
    const [scroll, setScroll] = useState<number>(0)
    // Moblile Menu
    const [isMobileMenu, setMobileMenu] = useState(false)
    const handleMobileMenu = () => setMobileMenu(!isMobileMenu)

    const [isConnect, setConnect] = useState(false)
    const handleConnect = () => setConnect(!isConnect)

    useEffect(() => {
        AOS.init()

        const handleScroll = () => {
            const scrollCheck = window.scrollY > 100 ? 1 : 0
            if (scrollCheck !== scroll) {
                setScroll(scrollCheck)
            }
        }

        document.addEventListener("scroll", handleScroll)
        return () => {
            document.removeEventListener("scroll", handleScroll)
        }
    }, [scroll])
    return (
        <>
            <AddClassBody />
            <DonutProgress />
            <div id="wrapper">
                {headerStyle === 0 && <Header1 scroll={scroll} isMobileMenu={isMobileMenu} handleMobileMenu={handleMobileMenu} isConnect={isConnect} handleConnect={handleConnect} />}
                {headerStyle === 1 ? <Header1 scroll={scroll} isMobileMenu={isMobileMenu} handleMobileMenu={handleMobileMenu} isConnect={isConnect} handleConnect={handleConnect} /> : null}
                {headerStyle === 2 ? <Header2 scroll={scroll} isMobileMenu={isMobileMenu} handleMobileMenu={handleMobileMenu} isConnect={isConnect} handleConnect={handleConnect} /> : null}

                {breadcrumbTitle && breadcrumbTitle !== "Home Page" && <Breadcrumb breadcrumbTitle={breadcrumbTitle} />}

                {children}

                {footerStyle === 0 ? <Footer1 /> : null}
                {footerStyle === 1 ? <Footer1 /> : null}
                {footerStyle === 2 ? <Footer2 /> : null}
                <PopupBid isConnect={isConnect} handleConnect={handleConnect} />

            </div>
            <BackToTop scroll={scroll} />
        </>
    )
}