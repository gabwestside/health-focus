import type { Metadata } from 'next'
import { Geist } from 'next/font/google'
import './globals.css'

const geist = Geist({ subsets: ['latin'], variable: '--font-geist' })

export const metadata: Metadata = {
  title: { default: 'Cortex Saúde', template: '%s | Cortex Saúde' },
  description:
    'Questões, simulados e revisão inteligente para sua aprovação na área da saúde.',
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang='pt-BR' className={geist.variable}>
      <body>{children}</body>
    </html>
  )
}
