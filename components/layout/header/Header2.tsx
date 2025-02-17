import React from "react";

interface Header2Props {
    scroll: number;
    isMobileMenu: boolean;
    handleMobileMenu: () => void;
    isConnect: boolean;
    handleConnect: () => void;
}

const Header2: React.FC<Header2Props> = ({ scroll, isMobileMenu, handleMobileMenu, isConnect, handleConnect }) => {
    return (
        <header>
            {/* Example usage of scroll */}
            <div className={scroll > 100 ? "header-scrolled" : "header"}>
                {/* Your header implementation */}
                <button onClick={handleConnect}>
                    {isConnect ? "Disconnect" : "Connect"}
                </button>
            </div>
        </header>
    );
};

export default Header2;