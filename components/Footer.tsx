
import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-400 py-12">
      <div className="max-w-7xl mx-auto px-4 text-center md:text-left">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-b border-slate-800 pb-12">
          <div>
            <span className="text-xl font-serif font-bold text-white tracking-widest block mb-4">LUXE PREMIER</span>
            <p className="text-sm leading-relaxed">
              우리는 일상의 평범함을 비범함으로 바꾸는 <br />
              고품격 프리미엄 서비스를 지향합니다.
            </p>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">Contact</h4>
            <ul className="text-sm space-y-2">
              <li>서울특별시 강남구 테헤란로 123</li>
              <li>고객센터: 1588-0000</li>
              <li>이메일: info@luxepremier.com</li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">Follow Us</h4>
            <div className="flex justify-center md:justify-start space-x-4">
              <a href="#" className="hover:text-amber-500 transition-colors">Instagram</a>
              <a href="#" className="hover:text-amber-500 transition-colors">Facebook</a>
              <a href="#" className="hover:text-amber-500 transition-colors">YouTube</a>
            </div>
          </div>
        </div>
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center text-xs">
          <p>© 2024 Luxe Premier. All Rights Reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">이용약관</a>
            <a href="#" className="hover:text-white font-bold">개인정보처리방침</a>
            <a href="#" className="hover:text-white">쿠키설정</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
