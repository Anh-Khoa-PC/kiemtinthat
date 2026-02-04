import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Kiểm Tin Thật - Phát hiện tin giả, bảo vệ sự thật',
  description: 'Kiểm Tin Thật giúp bạn kiểm tra độ tin cậy của tin tức và thông tin trên Internet một cách nhanh chóng và chính xác.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}
