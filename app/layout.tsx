import styles from './globals.module.scss'
import { Inter } from 'next/font/google'
import Navbar from "../components/navbar/Navbar"
import Footer from "../components/footer/Footer"

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={styles.wholesite} >
        <Navbar/>
        <main className={styles.customcontainer}>
        {children}
        </main>
  
        </body>
    </html>
  )
}