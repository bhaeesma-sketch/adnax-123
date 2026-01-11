import { generateWhatsAppUrl, generateGeneralEnquiryMessage } from '@/lib/whatsapp';

export default function Services() {
  return (
    <div className="min-h-screen bg-[#0E0E0E]">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#0E0E0E] to-[#1A1A1A] py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 font-heading">
              Import & Export Services
            </h1>
            <p className="text-xl text-[#B3B3B3] leading-relaxed">
              Comprehensive import and export solutions for heavy equipment across the GCC region
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Overview */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-6 font-heading">
                Our Services
              </h2>
              <p className="text-lg text-[#B3B3B3] leading-relaxed mb-4">
                ADNEX specializes in the import and export of heavy equipment, providing end-to-end 
                solutions for contractors and construction firms operating in Oman and the GCC region.
              </p>
              <p className="text-lg text-[#B3B3B3] leading-relaxed">
                We handle the complexities of cross-border logistics, documentation, and compliance, 
                ensuring your equipment reaches its destination efficiently and in compliance with 
                regional regulations.
              </p>
            </div>

            {/* Service Details */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
              <div className="bg-[#2A2A2A] rounded-lg p-8 border border-[#2A2A2A]">
                <div className="w-12 h-12 bg-[#F2B705] rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-[#0E0E0E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-3 font-heading">
                  Equipment Import
                </h3>
                <p className="text-[#B3B3B3] leading-relaxed">
                  Sourcing and importing heavy equipment from international markets. We manage customs 
                  clearance, documentation, and delivery logistics to Oman and GCC destinations.
                </p>
              </div>

              <div className="bg-[#2A2A2A] rounded-lg p-8 border border-[#2A2A2A]">
                <div className="w-12 h-12 bg-[#F2B705] rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-[#0E0E0E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-3 font-heading">
                  Documentation & Compliance
                </h3>
                <p className="text-[#B3B3B3] leading-relaxed">
                  Comprehensive handling of import/export documentation, certificates of origin, 
                  customs declarations, and compliance with GCC regulations.
                </p>
              </div>

              <div className="bg-[#2A2A2A] rounded-lg p-8 border border-[#2A2A2A]">
                <div className="w-12 h-12 bg-[#F2B705] rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-[#0E0E0E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-3 font-heading">
                  Logistics Coordination
                </h3>
                <p className="text-[#B3B3B3] leading-relaxed">
                  End-to-end logistics coordination including shipping, freight forwarding, 
                  port handling, and final delivery to your location.
                </p>
              </div>

              <div className="bg-[#2A2A2A] rounded-lg p-8 border border-[#2A2A2A]">
                <div className="w-12 h-12 bg-[#F2B705] rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-[#0E0E0E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-3 font-heading">
                  Quality Assurance
                </h3>
                <p className="text-[#B3B3B3] leading-relaxed">
                  Verification of equipment condition, specifications, and compliance before 
                  shipment. We ensure quality standards are met throughout the process.
                </p>
              </div>
            </div>

            {/* Process */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-8 font-heading">
                How It Works
              </h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 bg-[#F2B705] text-[#0E0E0E] rounded-full flex items-center justify-center font-bold mr-4">
                    1
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2 font-heading">Enquiry & Requirements</h3>
                    <p className="text-[#B3B3B3]">Contact ADNEX via WhatsApp with your equipment requirements, specifications, and delivery location.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 bg-[#F2B705] text-[#0E0E0E] rounded-full flex items-center justify-center font-bold mr-4">
                    2
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2 font-heading">Sourcing & Quotation</h3>
                    <p className="text-[#B3B3B3]">We source suitable equipment and provide detailed quotations including equipment cost, shipping, and documentation fees.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 bg-[#F2B705] text-[#0E0E0E] rounded-full flex items-center justify-center font-bold mr-4">
                    3
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2 font-heading">Documentation & Shipping</h3>
                    <p className="text-[#B3B3B3]">We handle all import/export documentation, coordinate shipping, and provide tracking information.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 bg-[#F2B705] text-[#0E0E0E] rounded-full flex items-center justify-center font-bold mr-4">
                    4
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2 font-heading">Delivery & Handover</h3>
                    <p className="text-[#B3B3B3]">Equipment is delivered to your specified location with all necessary documentation and certificates.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Coverage */}
            <div className="mb-16 bg-[#2A2A2A] rounded-lg p-8 border border-[#2A2A2A]">
              <h2 className="text-2xl font-bold text-white mb-4 font-heading">
                Service Coverage
              </h2>
              <p className="text-[#B3B3B3] mb-4">
                ADNEX provides import and export services to and from:
              </p>
              <ul className="grid grid-cols-2 md:grid-cols-3 gap-3 text-[#B3B3B3]">
                <li>• Oman</li>
                <li>• UAE</li>
                <li>• Saudi Arabia</li>
                <li>• Qatar</li>
                <li>• Kuwait</li>
                <li>• Bahrain</li>
              </ul>
            </div>

            {/* CTA */}
            <div className="bg-[#2A2A2A] rounded-lg p-8 border border-[#F2B705]/30 text-center">
              <h2 className="text-2xl font-bold text-white mb-4 font-heading">
                Start Your Import/Export Project
              </h2>
              <p className="text-[#B3B3B3] mb-6">
                Contact ADNEX via WhatsApp to discuss your requirements and receive a detailed quotation.
              </p>
              <a
                href={generateWhatsAppUrl(generateGeneralEnquiryMessage())}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#F2B705] hover:bg-[#E0A904] text-[#0E0E0E] font-semibold py-3 px-8 rounded-lg transition-colors duration-200"
              >
                Contact on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
