
import React from 'react';

export const Hero: React.FC = () => {
  return (
    <section className="relative h-[60vh] md:h-[80vh] flex items-center justify-center overflow-hidden pt-16">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://picsum.photos/id/111/1920/1080" 
          alt="Main Banner" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto animate-fade-in-up">
        <p className="text-amber-400 font-medium tracking-[0.3em] mb-4 uppercase">Special Summer Gift</p>
        <h1 className="text-4xl md:text-7xl font-serif text-white mb-6 leading-tight">
          당신만을 위한 <br />
          프리미엄 혜택의 시작
        </h1>
        <p className="text-slate-200 text-lg md:text-xl mb-10 max-w-2xl mx-auto font-light">
          오직 이번 시즌에만 제공되는 특별한 쿠폰으로 <br />
          럭스 프리미어의 감각적인 서비스를 경험해 보세요.
        </p>
        <a 
          href="#coupon" 
          className="inline-block bg-amber-600 hover:bg-amber-500 text-white px-8 py-4 rounded-full text-lg font-medium transition-all transform hover:scale-105 shadow-xl"
        >
          쿠폰 다운로드 받기
        </a>
      </div>
    </section>
  );
};
