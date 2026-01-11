import { generateWhatsAppUrl, generateGeneralEnquiryMessage } from '@/lib/whatsapp';

export default function HowItWorks() {
  return (
    <div className="min-h-screen bg-[#0E0E0E]">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#0E0E0E] to-[#1A1A1A] py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 font-heading">
              How It Works
            </h1>
            <p className="text-xl text-[#B3B3B3] leading-relaxed">
              Simple, direct process for sourcing heavy equipment through ADNEX
            </p>
          </div>
        </div>
      </section>

      {/* Main Process */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Step by Step */}
            <div className="space-y-12 mb-16">
              <div className="flex flex-col md:flex-row items-start">
                <div className="flex-shrink-0 w-16 h-16 bg-[#F2B705] text-[#0E0E0E] rounded-full flex items-center justify-center font-bold text-2xl mr-6 mb-4 md:mb-0">
                  1
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-white mb-4 font-heading">
                    Browse Equipment Catalogue
                  </h2>
                  <p className="text-lg text-[#B3B3B3] leading-relaxed mb-4">
                    Explore our online catalogue of heavy equipment. Filter by category (Backhoe Loaders, 
                    Wheel Loaders, Skid Steer Loaders, Telehandlers, and Others) to find machinery that 
                    matches your project requirements.
                  </p>
                  <p className="text-[#B3B3B3]">
                    Each listing includes equipment specifications, condition (New, Used, Refurbished), 
                    year of manufacture, and availability status. No pricing is displayed publicly—all 
                    pricing is discussed directly via WhatsApp.
                  </p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row items-start">
                <div className="flex-shrink-0 w-16 h-16 bg-[#F2B705] text-[#0E0E0E] rounded-full flex items-center justify-center font-bold text-2xl mr-6 mb-4 md:mb-0">
                  2
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-white mb-4 font-heading">
                    Click "Enquire on WhatsApp"
                  </h2>
                  <p className="text-lg text-[#B3B3B3] leading-relaxed mb-4">
                    When you find equipment of interest, click the "Enquire on WhatsApp" button. This 
                    opens WhatsApp with a pre-filled message containing the equipment name, making it 
                    easy to start the conversation.
                  </p>
                  <p className="text-[#B3B3B3]">
                    You can also use the floating WhatsApp button on any page for general enquiries. 
                    ADNEX responds promptly to all WhatsApp messages during business hours.
                  </p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row items-start">
                <div className="flex-shrink-0 w-16 h-16 bg-[#F2B705] text-[#0E0E0E] rounded-full flex items-center justify-center font-bold text-2xl mr-6 mb-4 md:mb-0">
                  3
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-white mb-4 font-heading">
                    Direct Communication & Quotation
                  </h2>
                  <p className="text-lg text-[#B3B3B3] leading-relaxed mb-4">
                    Communicate directly with ADNEX via WhatsApp to discuss:
                  </p>
                  <ul className="space-y-2 text-[#B3B3B3] mb-4">
                    <li>• Detailed equipment specifications and condition</li>
                    <li>• Pricing and payment terms</li>
                    <li>• Availability and delivery timeline</li>
                    <li>• Import/export requirements (if applicable)</li>
                    <li>• Documentation and compliance needs</li>
                  </ul>
                  <p className="text-[#B3B3B3]">
                    ADNEX provides comprehensive quotations including all costs and timelines.
                  </p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row items-start">
                <div className="flex-shrink-0 w-16 h-16 bg-[#F2B705] text-[#0E0E0E] rounded-full flex items-center justify-center font-bold text-2xl mr-6 mb-4 md:mb-0">
                  4
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-white mb-4 font-heading">
                    Confirmation & Execution
                  </h2>
                  <p className="text-lg text-[#B3B3B3] leading-relaxed mb-4">
                    Once terms are agreed upon, ADNEX handles:
                  </p>
                  <ul className="space-y-2 text-[#B3B3B3] mb-4">
                    <li>• Equipment verification and preparation</li>
                    <li>• Import/export documentation and compliance</li>
                    <li>• Shipping and logistics coordination</li>
                    <li>• Delivery to your specified location</li>
                    <li>• Handover with all necessary documentation</li>
                  </ul>
                  <p className="text-[#B3B3B3]">
                    You receive regular updates via WhatsApp throughout the process.
                  </p>
                </div>
              </div>
            </div>

            {/* Key Points */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
              <div className="bg-[#2A2A2A] rounded-lg p-6 border border-[#2A2A2A]">
                <h3 className="text-xl font-bold text-white mb-3 font-heading flex items-center">
                  <svg className="w-6 h-6 text-[#F2B705] mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  No E-commerce Checkout
                </h3>
                <p className="text-[#B3B3B3]">
                  ADNEX operates as a hybrid platform. The website showcases equipment, but all 
                  transactions are finalized through direct WhatsApp communication. This ensures 
                  personalized service and flexibility for B2B negotiations.
                </p>
              </div>

              <div className="bg-[#2A2A2A] rounded-lg p-6 border border-[#2A2A2A]">
                <h3 className="text-xl font-bold text-white mb-3 font-heading flex items-center">
                  <svg className="w-6 h-6 text-[#F2B705] mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" />
                  </svg>
                  WhatsApp-First Approach
                </h3>
                <p className="text-[#B3B3B3]">
                  All enquiries route to WhatsApp Business for direct, real-time communication. 
                  This approach is preferred in the GCC B2B market for its immediacy and personal touch.
                </p>
              </div>
            </div>

            {/* Important Notes */}
            <div className="bg-[#2A2A2A] rounded-lg p-8 border border-[#2A2A2A] mb-16">
              <h3 className="text-xl font-bold text-white mb-4 font-heading flex items-center">
                <svg className="w-5 h-5 text-[#F2B705] mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
                Important Notes
              </h3>
              <ul className="space-y-3 text-[#B3B3B3]">
                <li className="flex items-start">
                  <span className="text-[#F2B705] mr-3 mt-1">•</span>
                  <span>Pricing is not displayed on the website and is discussed via WhatsApp</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#F2B705] mr-3 mt-1">•</span>
                  <span>Availability is subject to confirmation at the time of enquiry</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#F2B705] mr-3 mt-1">•</span>
                  <span>No price or delivery guarantees are made on the website</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#F2B705] mr-3 mt-1">•</span>
                  <span>All terms and conditions are finalized during WhatsApp communication</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#F2B705] mr-3 mt-1">•</span>
                  <span>ADNEX responds during business hours (Oman time zone)</span>
                </li>
              </ul>
            </div>

            {/* CTA */}
            <div className="bg-[#2A2A2A] rounded-lg p-8 border border-[#F2B705]/30 text-center">
              <h2 className="text-2xl font-bold text-white mb-4 font-heading">
                Ready to Get Started?
              </h2>
              <p className="text-[#B3B3B3] mb-6">
                Browse our equipment catalogue or contact ADNEX directly via WhatsApp to discuss your requirements.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/equipment"
                  className="inline-block bg-[#2A2A2A] hover:bg-[#2A2A2A]/80 border-2 border-[#F2B705] text-[#F2B705] font-semibold py-3 px-8 rounded-lg transition-colors duration-200"
                >
                  View Equipment
                </a>
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
        </div>
      </section>
    </div>
  );
}
