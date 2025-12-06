export const metadata = {
  title: 'GM Studios | The Collective',
  description: 'Unite fragmented communities into a singular, high-trust force.',
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* Head tag elements like title and metadata are handled by Next.js metadata export */}
      <body>
       
          <div className="main-content-wrapper">
            {children}
          </div>
          
      </body>
    </html>
  );
}