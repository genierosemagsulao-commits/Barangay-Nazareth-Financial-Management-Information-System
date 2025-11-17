export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Barangay Nazareth FMIS</title>
        <meta name="description" content="Financial Management Information System for Barangay Nazareth" />
      </head>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  )
}
