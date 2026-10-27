import './globals.css';
import { siteContent } from '@/content/site-content';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/Button';

export const metadata = {
  title: siteContent.seo.title,
  description: siteContent.seo.description,
  openGraph: {
    title: siteContent.seo.title,
    description: siteContent.seo.description,
    images: [siteContent.seo.ogImage],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <meta name="robots" content="noindex, nofollow" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Barlow+Condensed:wght@600;700&display=swap" rel="stylesheet" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: siteContent.brand.name,
              description: siteContent.seo.description,
              url: "https://askgeospatial.vercel.app",
              telephone: siteContent.brand.phonePrimary,
              address: {
                "@type": "PostalAddress",
                streetAddress: "Km 42, Lekki-Epe Expressway, Beside Keewas Hotel, Ayeteju Bus Stop",
                addressLocality: "Ibeju-Lekki",
                addressRegion: "Lagos",
                addressCountry: "NG"
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 6.4535,
                longitude: 3.8890
              },
              sameAs: [
                siteContent.brand.whatsappLink
              ]
            })
          }}
        />
      </head>
      <body className="bg-white text-slate-900 font-sans min-h-screen flex flex-col">
        {/* Sticky Header */}
        <header className="sticky top-0 z-50 bg-white shadow-sm flex items-center justify-between px-6 py-3 border-b border-border">
          <Link href="#" className="flex items-center space-x-2">
            <Image src={siteContent.brand.logoLight} alt="ASK Geospatial" width={120} height={30} priority />
          </Link>
          <nav className="hidden md:flex space-x-6">
            <Link href="#hero" className="text-slate-700 hover:text-primary">Home</Link>
            <Link href="#services" className="text-slate-700 hover:text-primary">Services</Link>
            <Link href="#workflow" className="text-slate-700 hover:text-primary">How We Work</Link>
            <Link href="#contact" className="text-slate-700 hover:text-primary">Contact</Link>
          </nav>
          <Button variant="primary" asChild>
            <a href="#contact" className="hidden md:inline-block">Request Quote</a>
          </Button>
        </header>
        {children}
        {/* Footer */}
        <footer className="bg-dark text-white py-6 mt-auto">
          <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
            <Link href="#" className="flex items-center space-x-2">
              <Image src={siteContent.brand.logoMark} alt="ASK" width={30} height={30} />
              <span className="text-sm">© {new Date().getFullYear()} ASK Geospatial</span>
            </Link>
            <div className="text-sm mt-2 md:mt-0">
              {siteContent.brand.address}<br />
              <a href={`tel:${siteContent.brand.phonePrimary}`} className="hover:underline">{siteContent.brand.phonePrimary}</a> |
              <a href={`tel:${siteContent.brand.phoneSecondary}`} className="hover:underline">{siteContent.brand.phoneSecondary}</a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}

