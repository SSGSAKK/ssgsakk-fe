"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

import HeartIcon from "@/components/UI/HeartIcon";
import Cart from "@/components/images/Cart";
import DeliveryLabel from "@/components/UI/DeliveryLabel";

interface ProductListProps {
    productSeq: number;
}

interface ProductData {
    productName: string;
    vendor: string;
    productPrice: number;
    averageRating: number;
    reviewCount: number;
    discountPercent: number;
    deliveryType: string;
    contents: Array<{
        priority: number;
        contentUrl: string;
        contentDescription: string;
    }>;
}

const ProductList = ({ productSeq }: ProductListProps) => {
    const [productData, setProductData] = useState<ProductData | null>(null);

    useEffect(() => {
        const fetchProductList = async (productId: number) => {
            const response = await fetch(`${process.env.BASE_URL}/products/${productId}`, { cache: "no-store" });
            const data = await response.json();
            console.log(data.result);
            setProductData(data.result);
        };
        fetchProductList(productSeq);
    }, [productSeq]);

    if (!productData) {
        return <div>Loading...</div>;
    }

    const handleLike = (id: any) => {
        console.log("like");
        console.log(id);
    };

    return (
        <>
            <div className="h-[350px] my-3 flex justify-start flex-col">
                <div className="w-auto h-auto">
                    <Image src={productData.contents[0].contentUrl} alt="productImage" width={200} height={200} />
                </div>
                <div className=" flex flex-row gap-2 justify-between py-2 items-center ">
                    <DeliveryLabel deliveryType={productData.deliveryType} />
                    <div className="flex flex-row gap-2 items-center">
                        <HeartIcon handleLike={() => handleLike(productSeq)} />
                        <Cart width={20} height={20} />
                    </div>
                </div>
                <div className="flex flex-row text-pretty">
                    <span className="font-Pretendard text-[13px] line-clamp-2">
                        <b>{productData.vendor} </b>
                        {productData.productName}
                    </span>
                </div>
                {productData.discountPercent === 0 ? (
                    <p className="font-Pretendard text-[16px] font-bold">{productData.productPrice.toLocaleString()}원</p>
                ) : (
                    <div className="flex flex-col">
                        <p className="font-Pretendard text-[12px] text-[#969696] line-through	">{productData.productPrice.toLocaleString()}원</p>
                        <div className="flex flex-row gap-1">
                            <p className="font-Pretendard text-[16px] font-bold text-primary-red">{productData.discountPercent}%</p>
                            <p className="font-Pretendard text-[16px] font-bold">
                                {Math.round(productData.productPrice * (1 - productData.discountPercent / 100)).toLocaleString()}원
                            </p>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
};

export default ProductList;