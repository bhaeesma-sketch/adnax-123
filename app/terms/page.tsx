import Link from 'next/link';

export default function Terms() {
  return (
    <div className="min-h-screen bg-[#0E0E0E]">
      <section className="bg-gradient-to-b from-[#0E0E0E] to-[#1A1A1A] py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 font-heading">
              Terms of Service
            </h1>
            <p className="text-xl text-[#B3B3B3]">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto prose prose-invert">
            <div className="bg-[#2A2A2A] rounded-lg p-8 border border-[#2A2A2A]">
              <p className="text-[#B3B3B3] leading-relaxed mb-6">
                Please read these Terms of Service carefully before using ADNEX's website and services.
              </p>

              <h2 className="text-2xl font-bold text-white mb-4 mt-8 font-heading">Use of Website</h2>
              <p className="text-[#B3B3B3] leading-relaxed mb-4">
                The ADNEX website serves as a catalogue and information platform. All equipment listings, 
                specifications, and availability information are provided for informational purposes only.
              </p>
              <ul className="text-[#B3B3B3] space-y-2 mb-6">
                <li>• Equipment availability is subject to confirmation</li>
                <li>• Pricing is not displayed publicly and is discussed via WhatsApp</li>
                <li>• All transactions are finalized through direct communication, not through the website</li>
              </ul>

              <h2 className="text-2xl font-bold text-white mb-4 mt-8 font-heading">No Guarantees</h2>
              <p className="text-[#B3B3B3] leading-relaxed mb-4">
                ADNEX does not guarantee:
              </p>
              <ul className="text-[#B3B3B3] space-y-2 mb-6">
                <li>• Availability of any listed equipment</li>
                <li>• Pricing or delivery timelines</li>
                <li>• Equipment condition beyond what is stated in direct communication</li>
              </ul>
              <p className="text-[#B3B3B3] leading-relaxed mb-6">
                All terms, pricing, and conditions are finalized through WhatsApp communication and formal agreements.
              </p>

              <h2 className="text-2xl font-bold text-white mb-4 mt-8 font-heading">Import/Export Services</h2>
              <p className="text-[#B3B3B3] leading-relaxed mb-6">
                Import and export services are subject to applicable laws and regulations in Oman and GCC countries. 
                ADNEX handles documentation and logistics, but compliance with customs and regulatory requirements 
                is the responsibility of both parties as agreed in service contracts.
              </p>

              <h2 className="text-2xl font-bold text-white mb-4 mt-8 font-heading">WhatsApp Communication</h2>
              <p className="text-[#B3B3B3] leading-relaxed mb-6">
                ADNEX uses WhatsApp Business for client communication. All business terms, quotations, and agreements 
                are established through WhatsApp or formal written contracts. The website is not responsible for 
                transactions conducted through WhatsApp.
              </p>

              <h2 className="text-2xl font-bold text-white mb-4 mt-8 font-heading">Limitation of Liability</h2>
              <p className="text-[#B3B3B3] leading-relaxed mb-6">
                ADNEX's liability is limited to the terms agreed upon in direct communication and service contracts. 
                The website is provided "as is" without warranties of any kind.
              </p>

              <h2 className="text-2xl font-bold text-white mb-4 mt-8 font-heading">Contact</h2>
              <p className="text-[#B3B3B3] leading-relaxed">
                For questions about these Terms of Service, please contact ADNEX via WhatsApp.
              </p>

              <div className="mt-8 pt-8 border-t border-[#2A2A2A]">
                <Link
                  href="/contact"
                  className="text-[#F2B705] hover:text-[#E0A904] transition-colors"
                >
                  ← Back to Contact
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
