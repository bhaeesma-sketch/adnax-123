import Link from 'next/link';

export default function Privacy() {
  return (
    <div className="min-h-screen bg-[#0E0E0E]">
      <section className="bg-gradient-to-b from-[#0E0E0E] to-[#1A1A1A] py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 font-heading">
              Privacy Policy
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
                ADNEX is committed to protecting your privacy. This Privacy Policy explains how we collect, 
                use, and protect your information when you use our website and WhatsApp Business services.
              </p>

              <h2 className="text-2xl font-bold text-white mb-4 mt-8 font-heading">Information We Collect</h2>
              <p className="text-[#B3B3B3] leading-relaxed mb-4">
                When you interact with ADNEX through our website or WhatsApp Business, we may collect:
              </p>
              <ul className="text-[#B3B3B3] space-y-2 mb-6">
                <li>• Information you provide when contacting us via WhatsApp (name, phone number, enquiry details)</li>
                <li>• Website usage data through standard analytics tools</li>
                <li>• Equipment enquiry information</li>
              </ul>

              <h2 className="text-2xl font-bold text-white mb-4 mt-8 font-heading">How We Use Your Information</h2>
              <p className="text-[#B3B3B3] leading-relaxed mb-4">
                We use the information we collect to:
              </p>
              <ul className="text-[#B3B3B3] space-y-2 mb-6">
                <li>• Respond to your equipment enquiries</li>
                <li>• Provide import/export services</li>
                <li>• Improve our services and website</li>
                <li>• Communicate with you about your enquiries</li>
              </ul>

              <h2 className="text-2xl font-bold text-white mb-4 mt-8 font-heading">WhatsApp Business</h2>
              <p className="text-[#B3B3B3] leading-relaxed mb-6">
                When you contact ADNEX via WhatsApp, your communication is subject to WhatsApp's Privacy Policy. 
                We use WhatsApp Business to communicate with clients and do not share your WhatsApp information 
                with third parties except as necessary to provide our services.
              </p>

              <h2 className="text-2xl font-bold text-white mb-4 mt-8 font-heading">Data Security</h2>
              <p className="text-[#B3B3B3] leading-relaxed mb-6">
                We implement appropriate security measures to protect your information. However, no method of 
                transmission over the internet is 100% secure.
              </p>

              <h2 className="text-2xl font-bold text-white mb-4 mt-8 font-heading">Contact Us</h2>
              <p className="text-[#B3B3B3] leading-relaxed">
                If you have questions about this Privacy Policy, please contact ADNEX via WhatsApp.
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
