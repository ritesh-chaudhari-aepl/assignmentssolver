// import Header from '@/pages/header'
// import Header from '@/components/header/Header'
import './globals.css'

export const metadata = {
  title: 'Assignment Solver',
  description: 'Solve you homework issues in a minute',
}

export default function RootLayout({ children }) {
  return (
    <>
    <html lang="en">
      <body>
        {/* <Header/> */}
        <main className='bg-darkBg'>{children}</main>
      </body>
    </html>
    </>
  )
}
