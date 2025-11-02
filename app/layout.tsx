import './globals.css'

export const metadata = {
  title: 'Support Draft Manager',
  description: 'Access and copy customer support response templates instantly',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white">
        {children}
      </body>
    </html>
  )
}
