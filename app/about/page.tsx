import Link from 'next/link';
import { generateWhatsAppUrl, generateGeneralEnquiryMessage } from '@/lib/whatsapp';

export default function About() {
  return (
    <div className="min-h-screen bg-[#0E0E0E]">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#0E0E0E] to-[#1A1A1A] py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 font-heading">
              About ADNEX
            </h1>
            <p className="text-xl text-[#B3B3B3] leading-relaxed">
              Connecting buyers with quality heavy equipment across Oman and the GCC region
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Company Story */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-6 font-heading">
                Our Story
              </h2>
              <div className="prose prose-invert max-w-none">
                <p className="text-lg text-[#B3B3B3] leading-relaxed mb-4">
                  ADNEX represents the nexus of Adnan and connection—bringing together heavy equipment sourcing, 
                  import, and export services with a focus on the Oman and GCC markets.
                </p>
                <p className="text-lg text-[#B3B3B3] leading-relaxed mb-4">
                  We understand that construction and industrial projects require reliable machinery, transparent 
                  communication, and efficient execution. Our platform bridges the gap between equipment buyers 
                  and quality suppliers, ensuring every transaction is handled with professionalism and trust.
                </p>
                <p className="text-lg text-[#B3B3B3] leading-relaxed">
                  Operating in the heavy equipment trading sector, we specialize in connecting contractors, 
                  construction firms, and machinery buyers with the right equipment for their projects. Our 
                  hybrid model combines the convenience of digital catalogues with the personal touch of 
                  direct WhatsApp communication.
                </p>
              </div>
            </div>

            {/* Values */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-8 font-heading">
                Our Values
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-[#2A2A2A] rounded-lg p-6 border border-[#2A2A2A]">
                  <h3 className="text-xl font-bold text-white mb-3 font-heading flex items-center">
                    <span className="text-[#F2B705] mr-3">✓</span>
                    Transparency
                  </h3>
                  <p className="text-[#B3B3B3]">
                    Clear communication about equipment condition, availability, and specifications. 
                    No hidden terms, no fake claims.
                  </p>
                </div>

                <div className="bg-[#2A2A2A] rounded-lg p-6 border border-[#2A2A2A]">
                  <h3 className="text-xl font-bold text-white mb-3 font-heading flex items-center">
                    <span className="text-[#F2B705] mr-3">✓</span>
                    Professionalism
                  </h3>
                  <p className="text-[#B3B3B3]">
                    Industrial-grade service standards. We treat every enquiry with the seriousness 
                    it deserves in the B2B context.
                  </p>
                </div>

                <div className="bg-[#2A2A2A] rounded-lg p-6 border border-[#2A2A2A]">
                  <h3 className="text-xl font-bold text-white mb-3 font-heading flex items-center">
                    <span className="text-[#F2B705] mr-3">✓</span>
                    Reliability
                  </h3>
                  <p className="text-[#B3B3B3]">
                    Trusted sourcing and execution. We verify equipment conditions and maintain 
                    accurate availability status.
                  </p>
                </div>

                <div className="bg-[#2A2A2A] rounded-lg p-6 border border-[#2A2A2A]">
                  <h3 className="text-xl font-bold text-white mb-3 font-heading flex items-center">
                    <span className="text-[#F2B705] mr-3">✓</span>
                    Export Focus
                  </h3>
                  <p className="text-[#B3B3B3]">
                    Specialized in import and export services, navigating logistics and documentation 
                    for smooth cross-border transactions.
                  </p>
                </div>
              </div>
            </div>

            {/* Market Focus */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-6 font-heading">
                Market Focus
              </h2>
              <div className="bg-[#2A2A2A] rounded-lg p-8 border border-[#2A2A2A]">
                <p className="text-lg text-[#B3B3B3] leading-relaxed mb-4">
                  ADNEX operates primarily in <strong className="text-white">Oman</strong> and the broader 
                  <strong className="text-white"> GCC region</strong>, serving:
                </p>
                <ul className="space-y-3 text-[#B3B3B3]">
                  <li className="flex items-start">
                    <span className="text-[#F2B705] mr-3 mt-1">•</span>
                    <span>Contractors and construction firms seeking reliable machinery</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#F2B705] mr-3 mt-1">•</span>
                    <span>Equipment buyers requiring import/export services</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#F2B705] mr-3 mt-1">•</span>
                    <span>Industrial operations needing heavy equipment sourcing</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* CTA */}
            <div className="bg-[#2A2A2A] rounded-lg p-8 border border-[#F2B705]/30 text-center">
              <h2 className="text-2xl font-bold text-white mb-4 font-heading">
                Connect with ADNEX
              </h2>
              <p className="text-[#B3B3B3] mb-6">
                Ready to source equipment or discuss your requirements?
              </p>
              <a
                href={generateWhatsAppUrl(generateGeneralEnquiryMessage())}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#F2B705] hover:bg-[#E0A904] text-[#0E0E0E] font-semibold py-3 px-8 rounded-lg transition-colors duration-200"
              >
                Start WhatsApp Conversation
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
