import './globals.css'
import css from './layout.module.scss'
import React, { ReactNode } from 'react';
import ScrollToTop from '@/components/ScrollToTop/ScrollToTop';

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="fr">
      <body className={css.layout}>
        {children}
        <ScrollToTop />
      </body>
    </html>
  )
}
