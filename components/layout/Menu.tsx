'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function Menu() {
    const pathname = usePathname()
    const [currentMenuItem, setCurrentMenuItem] = useState<string>("")

    useEffect(() => {
        setCurrentMenuItem(pathname || "")
    }, [pathname])

    const checkCurrentMenuItem = (path: string): string => currentMenuItem === path ? "current-menu-item" : ""
    const checkParentActive = (paths: string[]): string => paths.some(path => currentMenuItem.startsWith(path)) ? "current-menu-item" : ""

    return (
        <nav id="main-nav" className="main-nav">
            <ul id="menu-primary-menu" className="menu">

                <li className={`menu-item menu-item-has-children ${checkParentActive(["/home-02", "/home-03"])}`}>
                    <Link href="#">Home</Link>
                    <ul className="sub-menu">
                        <li className={`menu-item ${checkCurrentMenuItem("/")}`}>
                            <Link href="/">Home 1</Link>
                        </li>
                        <li className={`menu-item ${checkCurrentMenuItem("/home-02")}`}>
                            <Link href="/home-02">Home 2</Link>
                        </li>
                        <li className={`menu-item ${checkCurrentMenuItem("/home-03")}`}>
                            <Link href="/home-03">Home 3</Link>
                        </li>
                    </ul>
                </li>

                <li className={`menu-item menu-item-has-children ${checkParentActive(["/project-grid", "/project-grid-2", "/project-grid-3", "/project-grid-4", "/project-grid-5", "/project-list", "/project-details", "/submit-project"])}`}>
                    <Link href="#">Project</Link>
                    <ul className="sub-menu">
                        <li className={`menu-item ${checkCurrentMenuItem("/project-grid")}`}>
                            <Link href="/project-grid">Project 01</Link>
                        </li>
                        <li className={`menu-item ${checkCurrentMenuItem("/project-grid-2")}`}>
                            <Link href="/project-grid-2">Project 02</Link>
                        </li>
                        <li className={`menu-item ${checkCurrentMenuItem("/project-grid-3")}`}>
                            <Link href="/project-grid-3">Project 03</Link>
                        </li>
                        <li className={`menu-item ${checkCurrentMenuItem("/project-grid-4")}`}>
                            <Link href="/project-grid-4">Project 04</Link>
                        </li>
                        <li className={`menu-item ${checkCurrentMenuItem("/project-grid-5")}`}>
                            <Link href="/project-grid-5">Project 05</Link>
                        </li>
                        <li className={`menu-item ${checkCurrentMenuItem("/project-list")}`}>
                            <Link href="/project-list">Project List</Link>
                        </li>
                        <li className={`menu-item ${checkCurrentMenuItem("/project-details")}`}>
                            <Link href="/project-details">Project Details</Link>
                        </li>
                        <li className={`menu-item ${checkCurrentMenuItem("/submit-project")}`}>
                            <Link href="/submit-project">Submit Project</Link>
                        </li>
                    </ul>
                </li>
                <li className={`menu-item menu-item-has-children ${checkParentActive(["/token", "/connect-wallet", "/team-details", "/submit-IGO-on-chain", "/faq", "/login", "/register", "/forgot-password"])}`}>
                    <Link href="#">Page</Link>
                    <ul className="sub-menu">
                        <li className={`menu-item ${checkCurrentMenuItem("/token")}`}>
                            <Link href="/token">Token</Link>
                        </li>
                        <li className={`menu-item ${checkCurrentMenuItem("/connect-wallet")}`}>
                            <Link href="/connect-wallet">Connect Wallet</Link>
                        </li>
                        <li className={`menu-item ${checkCurrentMenuItem("/team-details")}`}>
                            <Link href="/team-details">Team Details</Link>
                        </li>
                        <li className={`menu-item ${checkCurrentMenuItem("/submit-IGO-on-chain")}`}>
                            <Link href="/submit-IGO-on-chain">Submit IGO on chain</Link>
                        </li>
                        <li className={`menu-item ${checkCurrentMenuItem("/faq")}`}>
                            <Link href="/faq">FAQs</Link>
                        </li>
                        <li className={`menu-item ${checkCurrentMenuItem("/login")}`}>
                            <Link href="/login">Login</Link>
                        </li>
                        <li className={`menu-item ${checkCurrentMenuItem("/register")}`}>
                            <Link href="/register">Register</Link>
                        </li>
                        <li className={`menu-item ${checkCurrentMenuItem("/forgot-password")}`}>
                            <Link href="/forgot-password">Forget Password</Link>
                        </li>
                    </ul>
                </li>
                <li className={`menu-item ${pathname === "/roadmap" ? "current-menu-item" : ""}`}>
                    <Link href="/roadmap">Roadmap</Link>
                </li>
                <li className={`menu-item menu-item-has-children ${checkParentActive(["/blog-grid", "/blog-list", "/blog-details"])}`}>
                    <Link href="#">Blog</Link>
                    <ul className="sub-menu">
                        <li className={`menu-item ${checkCurrentMenuItem("/blog-grid")}`}>
                            <Link href="/blog-grid">Blog Grid</Link>
                        </li>
                        <li className={`menu-item ${checkCurrentMenuItem("/blog-list")}`}>
                            <Link href="/blog-list">Blog List</Link>
                        </li>
                        <li className={`menu-item ${checkCurrentMenuItem("/blog-details")}`}>
                            <Link href="/blog-details">Blog Detail</Link>
                        </li>
                    </ul>
                </li>
                
                
                <li className={`menu-item ${pathname === "/contact" ? "current-menu-item" : ""}`}>
                    <Link href="/contact">Contact</Link>
                </li>
            </ul>
        </nav>
    )
}