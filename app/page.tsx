import Link from 'next/link';
import { generateWhatsAppUrl, generateGeneralEnquiryMessage } from '@/lib/whatsapp';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section - "Designed to Evolve" Style */}
      <section className="relative bg-gradient-to-b from-[#0E0E0E] to-[#1A1A1A] py-32 lg:py-48">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 font-heading leading-tight tracking-tight">
              "Designed to Evolve"
            </h1>
            <p className="text-xl md:text-2xl text-[#B3B3B3] mb-12 leading-relaxed max-w-3xl mx-auto">
              Professional heavy equipment trading, import & export services across Oman and the GCC region.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/equipment"
                className="bg-[#F2B705] hover:bg-[#E0A904] text-[#0E0E0E] font-semibold py-4 px-8 rounded-lg transition-colors duration-200 text-lg"
              >
                View Equipment
              </Link>
              <a
                href={generateWhatsAppUrl(generateGeneralEnquiryMessage())}
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-[#F2B705] text-[#F2B705] hover:bg-[#F2B705] hover:text-[#0E0E0E] font-semibold py-4 px-8 rounded-lg transition-all duration-200 text-lg"
              >
                Contact on WhatsApp
              </a>
            </div>
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

            <p className="text-center text-[#B3B3B3] mt-12 text-lg">
              Partnering with contractors and construction firms across Oman and the GCC region
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 lg:py-32 bg-[#0E0E0E]" id="contact">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-heading">
                Contact Us
              </h2>
              <div className="w-24 h-1 bg-[#F2B705] mx-auto mb-8"></div>
              <p className="text-xl text-[#B3B3B3]">
                Better yet, see us in person!
              </p>
              <p className="text-lg text-[#B3B3B3] mt-4">
                We love our customers, so feel free to visit during normal business hours.
              </p>
            </div>

            <div className="bg-[#2A2A2A] rounded-2xl p-8 md:p-12 border border-[#2A2A2A]">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-6 font-heading">
                    ADNEX
                  </h3>
                  <div className="space-y-4 text-[#B3B3B3]">
                    <p>Oman & GCC Region</p>
                    <p>
                      <a href="mailto:info@adnex.com" className="text-[#F2B705] hover:text-[#E0A904] transition-colors">
                        info@adnex.com
                      </a>
                    </p>
                    <p>+968 9861 5132</p>
                  </div>
                </div>

                <div className="flex items-start justify-start md:justify-end">
                  <a
                    href={generateWhatsAppUrl(generateGeneralEnquiryMessage())}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center bg-[#25D366] hover:bg-[#20BA5A] text-white font-semibold py-4 px-8 rounded-lg transition-colors duration-200"
                  >
                    <svg
                      className="w-6 h-6 mr-2"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                    </svg>
                    Message us on WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}