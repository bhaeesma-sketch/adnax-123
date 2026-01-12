'use client';

import { useState, useEffect } from 'react';

export default function CookieNotice() {
  const [showNotice, setShowNotice] = useState(false);

  useEffect(() => {
    // Check if user has already accepted cookies
    const cookieAccepted = localStorage.getItem('cookieAccepted');
    if (!cookieAccepted) {
      setShowNotice(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookieAccepted', 'true');
    setShowNotice(false);
  };

  if (!showNotice) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-[#2A2A2A] border-t border-[#2A2A2A] shadow-2xl">
      <div className="container mx-auto px-4 lg:px-8 py-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex-1">
            <h4 className="text-white font-semibold mb-1 font-heading">This website uses cookies.</h4>
            <p className="text-[#B3B3B3] text-sm">
              We use cookies to analyze website traffic and optimize your website experience. By accepting our use of cookies, your data will be aggregated with all other user data.
            </p>
          </div>
          <button
            onClick={acceptCookies}
            className="bg-[#F2B705] hover:bg-[#E0A904] text-[#0E0E0E] font-semibold py-2 px-6 rounded-lg transition-colors duration-200 whitespace-nowrap"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
