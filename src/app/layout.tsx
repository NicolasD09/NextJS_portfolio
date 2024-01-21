import './globals.css'
import css from './layout.module.scss'
import React, { ReactNode } from 'react';

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="fr">
      <body className={css.layout}>
        {children}
      </body>
    </html>
  )
}
