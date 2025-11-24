import './globals.css';
export const metadata = {
  title: 'Rightron',
  description: 'AI refund and rights assistant'
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
