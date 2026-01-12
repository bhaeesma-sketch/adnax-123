import Link from 'next/link';
import { generateWhatsAppUrl, generateGeneralEnquiryMessage } from '@/lib/whatsapp';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section - "Designed to Evolve" */}
      <section className="relative bg-gradient-to-b from-[#0E0E0E] to-[#1A1A1A] py-32 lg:py-48">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 font-heading leading-tight tracking-tight">
              "Designed to Evolve"
            </h1>
          </div>
        </div>
      </section>

      {/* Equipment Sourcing Section */}
      <section className="py-20 lg:py-32 bg-[#0E0E0E]" id="equipment-sourcing">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-heading">
                Equipment Sourcing
              </h2>
              <div className="w-24 h-1 bg-[#F2B705] mx-auto"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {[
                {
                  title: 'Backhoe Loaders',
                  description: 'Heavy-duty backhoe loaders for construction and excavation work.',
                },
                {
                  title: 'Wheel Loaders',
                  description: 'Powerful wheel loaders for material handling and construction sites.',
                },
                {
                  title: 'Skid Steer Loaders',
                  description: 'Compact and versatile skid steer loaders for tight spaces.',
                },
                {
                  title: 'Telehandlers',
                  description: 'High-reach telehandlers for construction and material handling.',
                },
                {
                  title: 'Excavators',
                  description: 'Heavy-duty excavators for earthmoving and construction projects.',
                },
                {
                  title: 'Other Equipment',
                  description: 'Wide range of construction and industrial machinery.',
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-[#2A2A2A] rounded-lg p-8 border border-[#2A2A2A] hover:border-[#F2B705]/50 transition-all duration-300"
                >
                  <h3 className="text-xl font-bold text-white mb-4 font-heading">
                    {item.title}
                  </h3>
                  <p className="text-[#B3B3B3] leading-relaxed mb-6">
                    {item.description}
                  </p>
                  <Link
                    href="/equipment"
                    className="text-[#F2B705] hover:text-[#E0A904] font-semibold inline-flex items-center"
                  >
                    View Catalogue →
                  </Link>
                </div>
              ))}
            </div>

            <div className="text-center">
              <Link
                href="/equipment"
                className="inline-block bg-[#F2B705] hover:bg-[#E0A904] text-[#0E0E0E] font-semibold py-4 px-8 rounded-lg transition-colors duration-200 text-lg"
              >
                View Full Equipment Catalogue
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery / Client Achievements Section */}
      <section className="py-20 lg:py-32 bg-[#1A1A1A]" id="gallery">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-heading">
                Inspiring Success: A Gallery of Our Clients' Achievements
              </h2>
              <div className="w-24 h-1 bg-[#F2B705] mx-auto"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <div
                  key={item}
                  className="bg-[#2A2A2A] rounded-lg overflow-hidden border border-[#2A2A2A] hover:border-[#F2B705]/50 transition-all duration-300 aspect-square flex items-center justify-center"
                >
                  <div className="text-center p-8">
                    <div className="w-20 h-20 bg-[#F2B705]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-10 h-10 text-[#F2B705]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                      </svg>
                    </div>
                    <p className="text-[#B3B3B3] text-sm">
                      Client Achievement {item}
                    </p>
                    <p className="text-white font-semibold mt-2">
                      Success Story
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section - Matching themorfly.com */}
      <section className="py-20 lg:py-32 bg-[#0E0E0E]" id="contact">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-heading">
                Contact Us
              </h2>
              <div className="w-24 h-1 bg-[#F2B705] mx-auto mb-8"></div>
            </div>

            <div className="text-center mb-12">
              <h3 className="text-2xl font-bold text-white mb-4 font-heading">
                Better yet, see us in person!
              </h3>
              <p className="text-lg text-[#B3B3B3] mb-8">
                We love our customers, so feel free to visit during normal business hours.
              </p>
              
              <a
                href={generateWhatsAppUrl(generateGeneralEnquiryMessage())}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#25D366] hover:bg-[#20BA5A] text-white font-semibold py-4 px-8 rounded-lg transition-colors duration-200 text-lg mb-12"
              >
                Message us on WhatsApp
              </a>
            </div>

            <div className="bg-[#2A2A2A] rounded-2xl p-8 md:p-12 border border-[#2A2A2A]">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-white mb-6 font-heading">
                  ADNEX
                </h3>
                <div className="space-y-3 text-[#B3B3B3]">
                  <p>Muscat, Oman / GCC Region</p>
                  <p>
                    <a href="mailto:info@adnex.com" className="text-[#F2B705] hover:text-[#E0A904] transition-colors">
                      info@adnex.com
                    </a>
                  </p>
                  <p>+968 9861 5132</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}