import { colors } from '../design-system/atoms/ColorPalette';

import Link from '../design-system/atoms/Link';

interface LayoutProps {
    children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
    return (
        <div className="shell-main" style={{
            display: 'flex',
            flexDirection: 'column',
            minHeight: '100vh',
            fontFamily: 'sans-serif',
            backgroundColor: colors.background, // Use CSS variable for background
          }}>
            <header style={{
              backgroundColor: colors.accentRed, // Use primary color for header
              color: colors.surface,           // Use surface color for text
              padding: '1rem',
              fontSize: '1.5rem',
              display: 'flex',
              justifyContent: 'space-around',
              alignItems: 'center'
            }}>
              <a style={{ textDecoration: 'none', color: colors.surface }} href="/home">💰 Finance Dashboard</a>
              <div style={{ display: 'flex', flexDirection: 'row', gap: '24px'}}>
                <Link className='link--nav' href="/home" style={{ color: colors.surface }}>Home</Link>
                <Link className='link--nav' href="/expenditures">Expenditures</Link>
                <Link className='link--nav' href="/reports">Reports</Link>
                <Link className='link--nav' href="/settings">Settings</Link>
                <Link className='link--nav' href="/payment-tracker">Payment Tracker</Link>
              </div>
            </header>
      
            <main style={{ flex: 1, padding: '2rem', maxWidth: '1250px', margin: 'auto', width: '100%' }}>
              {children}
            </main>
      
            <footer style={{
              backgroundColor: colors.surface, // Use surface color for footer
              padding: '1rem',
              textAlign: 'center',
              fontSize: '0.9rem',
              color: colors.muted              // Use muted color for footer text
            }}>
              © {new Date().getFullYear()} MyFinance App
            </footer>
          </div>
    );
}