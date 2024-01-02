import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { GoThere } from '@/components/Route/GoThere'
import { BotPress } from '@/components/Bot/botpress'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'Shafin Islam',
    template: '%s | SI'
  },
  
  description: 'A Next Js Project For Final Lab Exam',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <GoThere path='/profile' btnName='Profile'/><br />
        <GoThere path='/about' btnName='About' /> <br />
        <GoThere path='/TC' btnName='Terms and Condition' /> <br />
        {children}
        <BotPress/>
      </body>
    </html>
  )
}
