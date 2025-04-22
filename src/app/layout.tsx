export const metadata = {
  title: 'The Website of Saumya Sarma | ',
}
import "./global.css"
import Navbar from "@/components/Navbar/page.jsx";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap" rel="stylesheet" />

      </head>
      <body>
        <main id="root-main">
          <Navbar />
          {children}
        </main>
      </body>
    </html>
  )
}
