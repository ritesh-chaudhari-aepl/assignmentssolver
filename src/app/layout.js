// import Header from '@/pages/header'
// import Header from '@/components/header/Header'
import './globals.css'

export const metadata = {
  title: 'Tutorlancer',
  description: 'Solve you homework issues in a minute',
}

export default function RootLayout({ children }) {
  return (
    <>
    <html lang="en">
      <body>
        {/* <Header/> */}
        <main>{children}</main>
      </body>
    </html>
    </>
  )
}
