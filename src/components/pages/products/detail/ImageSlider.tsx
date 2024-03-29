"use client";
import React from "react";
import { ImageType } from "@/types/productType";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import SwiperCore from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";

type Props = {
  imageList: ImageType[];
};

const ImageSlider = ({ imageList }: Props) => {
  SwiperCore.use([Pagination]);

  return (
    <div className="h-[373px] ">
      <Swiper
        pagination={{ type: "fraction" }}
        loop={true} // 슬라이드 루프
        spaceBetween={30} // 슬라이스 사이 간격
        slidesPerView={1} // 보여질 슬라이스 수
      >
        {imageList.map((image, index) => (
          <SwiperSlide key={image.id}>
            <div className="h-[373px] relative">
              <Image
                fill
                src={image.url}
                alt={`상품이미지${index + 1}`}
                priority={index === 0 ? true : false}
              ></Image>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ImageSlider;
