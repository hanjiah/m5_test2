
import React from 'react';

export const EventDescription: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-800 mb-4">이벤트 상세 안내</h2>
          <div className="w-12 h-1 bg-amber-600 mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">01. 대상 고객</h3>
              <p className="text-slate-600 leading-relaxed">
                럭스 프리미어 신규 회원 가입 고객 및 <br />
                기존 멤버십 회원 누구나 참여 가능합니다.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">02. 이벤트 기간</h3>
              <p className="text-slate-600 leading-relaxed">
                2024년 6월 1일 ~ 2024년 8월 31일까지 <br />
                (쿠폰 소진 시 조기 종료될 수 있습니다.)
              </p>
            </div>
          </div>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">03. 사용 방법</h3>
              <p className="text-slate-600 leading-relaxed">
                쿠폰 발급 후 '내 쿠폰함'에서 확인 가능하며, <br />
                결제 단계에서 적용하여 즉시 할인 받으세요.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">04. 유의 사항</h3>
              <ul className="text-sm text-slate-500 list-disc pl-5 space-y-1">
                <li>1인 1회 발급 및 사용 가능합니다.</li>
                <li>타 쿠폰과 중복 사용이 불가능합니다.</li>
                <li>일부 품목은 제외될 수 있습니다.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
