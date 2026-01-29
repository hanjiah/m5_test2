
import React, { useState } from 'react';

interface CouponSectionProps {
  isIssued: boolean;
  onIssue: () => void;
}

export const CouponSection: React.FC<CouponSectionProps> = ({ isIssued, onIssue }) => {
  const [loading, setLoading] = useState(false);

  const handleClick = () => {
    if (isIssued) return;
    setLoading(true);
    setTimeout(() => {
      onIssue();
      setLoading(false);
    }, 1200);
  };

  return (
    <section id="coupon" className="py-24 bg-slate-50">
      <div className="max-w-xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-serif font-bold mb-12 text-slate-800">Your Exclusive Coupon</h2>
        
        <div className="relative overflow-hidden bg-white rounded-2xl shadow-2xl border border-slate-200 group">
          {/* Coupon Design Element */}
          <div className="absolute top-0 left-0 w-2 h-full bg-amber-600"></div>
          <div className="absolute top-0 right-0 w-2 h-full bg-amber-600"></div>
          
          <div className="p-10">
            <div className="flex justify-between items-center mb-6">
              <span className="text-xs font-bold tracking-widest text-slate-400 uppercase">Season Special</span>
              <span className="text-amber-700 font-serif font-bold italic">Luxe Premier</span>
            </div>
            
            <div className="py-6 border-y border-dashed border-slate-200">
              <h3 className="text-5xl font-bold text-slate-800 mb-2">30% OFF</h3>
              <p className="text-slate-500 tracking-wide">SUMMER COLLECTION 2024</p>
            </div>
            
            <div className="mt-8">
              <button
                onClick={handleClick}
                disabled={isIssued || loading}
                className={`w-full py-4 rounded-lg text-lg font-bold transition-all duration-300 flex items-center justify-center space-x-2 ${
                  isIssued 
                    ? 'bg-emerald-500 text-white cursor-default' 
                    : loading 
                    ? 'bg-amber-400 text-white cursor-wait'
                    : 'bg-slate-900 text-white hover:bg-amber-700 active:scale-95 shadow-lg'
                }`}
              >
                {loading ? (
                  <>
                    <svg className="animate-spin h-5 w-5 mr-3 text-white" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    <span>처리 중...</span>
                  </>
                ) : isIssued ? (
                  <>
                    <svg className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>발급 완료</span>
                  </>
                ) : (
                  <span>쿠폰 받기</span>
                )}
              </button>
              
              {isIssued && (
                <p className="mt-4 text-emerald-600 text-sm font-medium animate-fade-in-up">
                  쿠폰함으로 발송되었습니다. 즐거운 쇼핑 되세요!
                </p>
              )}
            </div>
          </div>
          
          {/* Coupon Decorative Circles */}
          <div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-slate-50 rounded-full border border-slate-200"></div>
          <div className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-slate-50 rounded-full border border-slate-200"></div>
        </div>
        
        <p className="mt-12 text-slate-400 text-sm italic">
          * 발행된 쿠폰은 마이페이지 > 쿠폰 내역에서 확인하실 수 있습니다.
        </p>
      </div>
    </section>
  );
};
