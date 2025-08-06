export default function BizLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <div className="container mx-auto p-4">{children}</div>
      </body>
    </html>
  );
}
