"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

type Network = "BSC" | "ETH" | "BTC" | "XRP";

interface WalletOption {
  name: string;
  imagePath: string;
}

const networks: { id: Network; imagePath: string }[] = [
    { id: "BSC", imagePath: "/assets/images/common/wallet_1.png" },
    { id: "ETH", imagePath: "/assets/images/common/wallet_2.png" },
    { id: "BTC", imagePath: "/assets/images/common/wallet_3.png" },
    { id: "XRP", imagePath: "/assets/images/common/wallet_4.png" },
  ];

  const wallets: WalletOption[] = [
    { name: "MetaMask", imagePath: "/assets/images/common/wallet_5.png" },
    { name: "Coinbase Wallet", imagePath: "/assets/images/common/wallet_6.png" },
    { name: "WalletConnect", imagePath: "/assets/images/common/wallet_7.png" },
    { name: "Phantom", imagePath: "/assets/images/common/wallet_8.png" },
    { name: "Core", imagePath: "/assets/images/common/wallet_9.png" },
    { name: "Bitski", imagePath: "/assets/images/common/wallet_10.png" },
  ];

const MainConnectWalletSection = () => {
  const [activeNetwork, setActiveNetwork] = useState<Network>("BSC");

  return (
    <div className="inner-page">
      <section 
        className="tf-section tf-wallet pt60"
        data-aos="fade-up"
        data-aos-delay="500"
        data-aos-duration="800"
      >
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="wallet-form">
                <h4>Connect Wallet</h4>
                <p className="sub">
                  Please Choose a network & select a wallet to connect to this marketplace
                </p>
                <div className="spacing" />

                <div className="choose-network flat-tabs">
                  <h6>Choose network</h6>
                  <ul className="menu-tab">
                    {networks.map((network) => (
                      <li
                        key={network.id}
                        className={activeNetwork === network.id ? "active" : ""}
                        onClick={() => setActiveNetwork(network.id)}
                      >
                        <Image
                          src={network.imagePath}
                          alt={network.id}
                          width={24}
                          height={24}
                        />
                        <span>{network.id}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="connect-wallet">
                  <h6>Connect wallet</h6>
                  <ul>
                    {wallets.map((wallet) => (
                      <li key={wallet.name}>
                        <Link href="/connect">
                          <div className="flex items-center justify-between w-full">
                            <div className="flex items-center">
                              <Image
                                src={wallet.imagePath}
                                alt={wallet.name}
                                width={24}
                                height={24}
                              />
                              <span className="ml-2">{wallet.name}</span>
                              <span className="icon">
                              <svg
                                width="8"
                                height="14"
                                viewBox="0 0 8 14"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M1.1875 1.375L6.8125 7L1.1875 12.625"
                                  stroke="#798DA3"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                            </span>
                            </div>
                            
                          </div>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bottom">
                  By connecting your wallet, you agree to our{" "}
                  <Link href="/terms">Terms of Service</Link> and our{" "}
                  <Link href="/privacy">Privacy Policy</Link>.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MainConnectWalletSection;