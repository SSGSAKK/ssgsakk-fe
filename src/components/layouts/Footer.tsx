import React from "react";
import FooterCallcenterLogo from "@/images/svgs/FooterCallcenterLogo";
import { FooterNavigationType } from "@/types/navigationType";
import { footerNavigationData } from "@/libs/footerNavigationData";
import Link from "next/link";

const Footer = () => {
    return (
        <div className="w-full">
            <div className="w-full bg-[#717178] flex flex-row px-[15px] py-[12px] justify-between">
                <div className="flex flex-row">
                    <FooterCallcenterLogo />
                    <div>
                        <p className="text-white font-Pretendard text-[10px]">SSG.COM 고객센터 / 전자금융거래 분쟁처리</p>
                        <div className="flex flex-row items-center">
                            <p className="text-white font-Pretendard text-[12px]">1577-3419 /</p>
                            <p className="text-white font-Pretendard text-[10px]"> ssg@ssg.com</p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-row  items-center">
                    <button className="text-white bg-[#66666D] rounded  border-1 border-solid border-[#606066] font-Pretendard text-[10px] mr-[1px] my-[2px] px-[12px] py-[5px]">
                        전화걸기
                    </button>
                    <button className="text-white bg-[#66666D] rounded  border-1 border-solid border-[#606066] font-Pretendard text-[10px]  my-[2px] px-[12px] py-[5px]">
                        1:1 고객센터
                    </button>
                </div>
            </div>
            <div className="w-full flex bg-[#DBDBE0] px-[13px]">
                {footerNavigationData.map((category: FooterNavigationType) => (
                    <Link
                        href={category.url}
                        key={category.id}
                        className={`
                        w-full items-center justify-center flex
                        text-[#565656] font-Pretendard my-[8px] px-[10px] text-[11px] ${category.id < 4 ? "border-r-2 border-[#B8B8BE]" : "border-r-0"}`}
                        target={category.id === 3 || category.id === 4 ? "_blank" : "_self"}
                    >
                        {category.title}
                    </Link>
                ))}
            </div>
            <div className="w-full px-[20px] py-[10px]">
                <div className="mb-[8px]">
                    <p className="font-Pretendard text-[11px] text-[#414141]">(주)에스에스지닷컴</p>
                    <p className="font-Pretendard text-[10px] text-[#888888]">대표자: 이인영 | 사업자등록번호: 870-88-01143</p>
                    <p className="font-Pretendard text-[10px] text-[#888888]">통신판매업 신고번호: 제2022-서울강남-03751호</p>
                    <p className="font-Pretendard text-[10px] text-[#888888]">개인정보보호 책임자: 김우진 | 주소: 서울특별시 강남구 테헤란로 231</p>
                    <p className="font-Pretendard text-[10px] text-[#888888]">호스팅서비스 사업자 : (주)에스에스지닷컴</p>
                </div>
                <div className="mb-[17px]">
                    <p className="font-Pretendard text-[11px] text-[#414141]">우리은행 채무지급보증 안내</p>
                    <p className="font-Pretendard text-[10px] text-[#888888]">당사는 고객님이 현금 결제한 금액에 대해 우리은행과</p>
                    <p className="font-Pretendard text-[10px] text-[#888888]">채무지급 보증 계약을 체결하여 안전거래를 보장하고 있습니다.</p>
                </div>
                <div className="flex flex-row justify-center">
                    <p className="px-[5px] border-r-2 font-Pretendard text-[10px] text-[#414141]">회사소개</p>
                    <p className="px-[5px] border-r-2 font-Pretendard text-[10px] text-[#414141]">이용약관</p>
                    <p className="px-[5px] border-r-2 font-Pretendard text-[10px] text-[#FF5452]">개인정보처리방침</p>
                    <p className="px-[5px] border-r-2 font-Pretendard text-[10px] text-[#414141]">청소년보호방침</p>
                    <p className="px-[5px] border-r-2 font-Pretendard text-[10px] text-[#414141]">소비자분쟁해결기준</p>
                    <p className="px-[5px] font-Pretendard text-[10px] text-[#414141]">입점상담</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;
