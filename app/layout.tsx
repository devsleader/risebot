import { Space_Grotesk } from 'next/font/google';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import 'aos/dist/aos.css';
import "/public/style/swiper/swiper-bundle.min.css";
import "/public/assets/font/font-awesome.css";
import "/public/assets/font/risebot.css";
import "/public/assets/font/font-awesome.css";
// import "/public/style/bootstrap/css/bootstrap.css"
import "/public/style/dist/app.css";

import React from 'react';

export const metadata = {
    title: 'Rise-Bot',
    description: 'The Most Endearing And Lovable Mascot The Crypto World Has Ever Seen',
};

const grotesk = Space_Grotesk({
    weight: ['300', '400', '500', '600', '700'],
    subsets: ['latin'],
    variable: "--grotesk",
    display: 'swap',
});

interface RootLayoutProps {
    children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
    return (
        <html lang="en">
             <head>
                <link rel="icon" href="/assets/images/logo/preload.png" />
            </head>
            <body className={`${grotesk.variable} header-fixed page-loaded`}>{children}</body>
        </html>
    );
}
