export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {/* Make sure AuthProvider wraps ALL content */}
          {children}
      </body>
    </html>
  );
}