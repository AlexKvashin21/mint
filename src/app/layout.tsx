import '../styles/globals.scss'
import type { Metadata } from "next";
import {Montserrat} from "next/font/google";

const montserrat = Montserrat({
    subsets: ['cyrillic'],
    weight: ['400', '500'],
    display: 'swap',
    variable: '--font-family',
    preload: true
})

export const metadata: Metadata = {
    title: "Fifty",
    description: "",
};

export default function RootLayout({children}: Readonly<{ children: React.ReactNode; }>) {
    return (
        <html lang='en'>
         <body className={montserrat.className}>
            {children}
            <div id='modal'></div>
         </body>
        </html>
    )
}
