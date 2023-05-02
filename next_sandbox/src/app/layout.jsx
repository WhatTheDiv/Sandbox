import './globals.css'

export const metadata = {
  title: 'Sandbox',
  description: 'Sandbox created by Pat Cannon',
  name: "viewport",
  content: "width=device-width, initial-scale=1.0"

}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
