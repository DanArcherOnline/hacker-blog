export const metadata = {
  title: 'DanArcherHacking Admin Portal',
  description: 'CMS for DanArcherHacking',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
