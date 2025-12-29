export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen items-center justify-center">
        {children}
      </body>
    </html>
  );
}
