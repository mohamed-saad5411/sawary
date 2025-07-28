'use client'
import React, { useEffect, useState } from "react";
import fstlogo from '../../../../public/assets/img/4693-residential-in-alexandria-sawary-compound-FkFWrzJfEA.webp'
import seclogo from '../../../../public/assets/img/4693-residential-in-alexandria-sawary-compound-c4ip4I6ywT.webp'
import Image from "next/image";
import Link from "next/link";


export default function Header() {


    return <>
        <header className="bg-[#5a4e4e] text-white px-2 py-4">
            <div className="min-h-[25rem]  w-11/12 m-auto grid md:grid-cols-4 items-center justify-center">
                <div className="">
                    <Image src={fstlogo} className="rounded-lg translate-x-[10%] md:translate-x-[0%]" />
                </div>
                <div className="text-center my-5 md:my-0 col-span-2 p-2">
                    <h1 className="text-4xl font-bold pb-4 text-shadow-lg">طريقة سهلة للعثور على عقار مثالي</h1>
                    <p>استكشف قوائم العقارات الواسعة حسب الفئة من خلال بحثنا سهل الاستخدام. ابحث عن شريكك المثالي!</p>
                </div>
                <div className="">
                    <Image src={seclogo} className="rounded-lg translate-x-[10%] md:translate-x-[0%]" />
                </div>
            </div>
        </header>

    </>
}
