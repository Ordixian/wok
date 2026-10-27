import Image from 'next/image';
import { siteContent } from '@/content/site-content';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';

export default function HomePage() {
  return (
    <main className="space-y-16">
      {/* Hero */}
      <section id="hero" className="bg-ice py-20 px-4 md:px-12">
        <div className="container mx-auto flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-dark">
              Precision Land Surveying &amp; Geo‑Information Intelligence
            </h1>
            <p className="text-slate-700 text-lg">
              From boundary verification to engineering setting‑out, we deliver court‑admissible, SURCON‑registered surveys across the fast‑growing Ibeju‑Lekki corridor.
            </p>
            <div className="flex space-x-4">
              <Button variant="primary" asChild>
                <a href="#contact">Request a Quote</a>
              </Button>
              <Button variant="secondary" asChild>
                <a href={`tel:${siteContent.brand.phonePrimary}`}>Call +234 806 123 5341</a>
              </Button>
            </div>
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center">
            <Image src="/images/hero-placeholder.svg" alt="Survey crew on site" width={600} height={400} className="rounded-lg" />
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-white py-6 shadow-sm border-t border-b border-border">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center text-center md:text-left space-y-2 md:space-y-0">
          <div className="flex items-center space-x-2">
            <span className="inline-block w-3 h-3 bg-primary rounded-full" />
            <span className="text-sm">SURCON‑Registered Surveyor</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="inline-block w-3 h-3 bg-primary rounded-full" />
            <span className="text-sm">Member of NIS</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="inline-block w-3 h-3 bg-primary rounded-full" />
            <span className="text-sm">Principal: {siteContent.principal.name}</span>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="bg-white py-12">
        <div className="container mx-auto">
          <h2 className="text-3xl font-semibold text-center mb-8">Our Geospatial &amp; Survey Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {siteContent.services.map(svc => (
              <Card key={svc.id} title={svc.title} className="h-full">
                <p className="mb-2">{svc.description}</p>
                <ul className="list-disc list-inside text-sm text-slate-600">
                  {svc.items.map(item => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Workflow */}
      <section id="workflow" className="bg-ice py-12">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-6">From Field to Finish</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="p-4 bg-white rounded shadow">
              <h3 className="text-primary font-medium mb-2">01. Reconnaissance</h3>
              <p className="text-sm">Site visit, control point planning, equipment prep.</p>
            </div>
            <div className="p-4 bg-white rounded shadow">
              <h3 className="text-primary font-medium mb-2">02. Data Capture</h3>
              <p className="text-sm">Total Station, GNSS RTK, UAV mapping.</p>
            </div>
            <div className="p-4 bg-white rounded shadow">
              <h3 className="text-primary font-medium mb-2">03. Processing</h3>
              <p className="text-sm">CAD/GIS integration, quality checks.</p>
            </div>
            <div className="p-4 bg-white rounded shadow">
              <h3 className="text-primary font-medium mb-2">04. Delivery</h3>
              <p className="text-sm">Certified plan, digital GIS files, on‑site briefing.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Local Advantage */}
      <section className="bg-white py-12">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-4">Why Choose ASK Geospatial?</h2>
          <p className="text-slate-700 max-w-3xl mx-auto">
            Located at Km 42 Lekki‑Epe Expressway, we are on the ground where the fastest‑growing real‑estate corridor meets major infrastructure projects – Dangote Refinery, Lekki Free Trade Zone, Deep Sea Port and the new Coastal Highway. Our fully equipped field crew (Total Station, RTK GNSS rover, UAV) and office GIS team bridge rugged data capture with modern digital deliverables.
          </p>
        </div>
      </section>

      {/* Contact / Quote Form */}
      <section id="contact" className="bg-dark text-white py-16">
        <div className="container mx-auto max-w-xl">
          <h2 className="text-3xl font-semibold text-center mb-6">Request a Survey Quote</h2>
          <form action="https://formspree.io/f/REPLACE_WITH_ID" method="POST" className="space-y-4">
            <input type="text" name="name" placeholder="Your Name" required className="w-full px-3 py-2 rounded focus:outline-none" />
            <input type="email" name="email" placeholder="Email" required className="w-full px-3 py-2 rounded focus:outline-none" />
            <input type="tel" name="phone" placeholder="Phone" required className="w-full px-3 py-2 rounded focus:outline-none" />
            <select name="service" required className="w-full px-3 py-2 rounded focus:outline-none">
              <option value="">Select Service</option>
              {siteContent.services.map(svc => (
                <option key={svc.id} value={svc.title}>{svc.title}</option>
              ))}
            </select>
            <textarea name="message" placeholder={siteContent.contact.placeholderMessage} rows={4} className="w-full px-3 py-2 rounded focus:outline-none" />
            {/* Honeypot field – hidden via CSS */}
            <div className="hidden">
              <input type="text" name={siteContent.contact.honeypotField} />
            </div>
            <Button variant="primary" type="submit" className="w-full">{siteContent.contact.submitButton}</Button>
          </form>
          <div className="mt-6 text-center">
            <a href={siteContent.brand.whatsappLink} target="_blank" rel="noopener noreferrer" className="inline-block bg-green-600 hover:bg-green-500 text-white px-4 py-2 rounded">
              Chat on WhatsApp
            </a>
            <p className="mt-2 text-sm">Or click to call: <a href={`tel:${siteContent.brand.phonePrimary}`} className="underline">{siteContent.brand.phonePrimary}</a></p>
          </div>
          {/* Google Maps embed */}
          <div className="mt-8">
            <iframe
              src="https://www.google.com/maps/embed/v1/place?key=YOUR_API_KEY&q=Km+42+Lekki-Epe+Expressway+Ibeju-Lekki"
              width="100%"
              height="300"
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>
    </main>
  );
}
