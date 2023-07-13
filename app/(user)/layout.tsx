import { Lato } from 'next/font/google'
import './globals.css'

const lato = Lato({
  weight: ['100', '300', '400', '700', '900'],
  subsets: ['latin'],
  variable: '--font-lato'
})

export const metadata = {
  title: 'Dan Archer Hacking',
  description: "Dan Archer's Cyber Security Blog & Portfolio",
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${lato.className}`}>
        {children}
      </body>
    </html>
  )
}
