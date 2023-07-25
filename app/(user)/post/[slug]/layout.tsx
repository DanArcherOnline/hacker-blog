import { Inter, Lato, Source_Serif_4 } from 'next/font/google'
import './globals.css'

const lato = Lato({
  weight: ['100', '300', '400', '700', '900'],
  subsets: ['latin'],
  variable: '--font-lato'
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter'
})

const sourceSerif4 = Source_Serif_4({
  subsets: ['latin'],
  variable: '--font-source-serif-4'
})



export const metadata = {
  title: 'Dan Archer Hacking',
  description: 'A Cyber Security Blog Post',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en">
      <body className={`${lato.className} ${inter.variable} ${sourceSerif4.variable}`}>
        {children}
      </body>
    </html>
  )
}
