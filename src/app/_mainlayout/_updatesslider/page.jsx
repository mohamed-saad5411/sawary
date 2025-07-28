'use client'
import React, { useEffect, useState } from "react";
import fstlogo from '../../../../public/assets/img/4693-residential-in-alexandria-sawary-compound-FkFWrzJfEA.webp'
import seclogo from '../../../../public/assets/img/4693-residential-in-alexandria-sawary-compound-c4ip4I6ywT.webp'
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";


export default function UpdatesSlider() {
    const [display, setDisplay] = useState(true);


    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: window.innerWidth > 600 ? 2 : 1,
        slidesToScroll: 1
    };


    return <>
        <section className=" px-2 py-8">
            <div className="text-center my-4">
                <h3 className="text-4xl font-semibold pb-4 text-shadow-lg">أحدث التطورات العقارية </h3>
            </div>
            {/* == START SLIDER == */}
            <div className="slider-container bg-[#5a4e4e] text-center">
                <div className="bg- w-11/12 p-2 m-auto "
                    style={{
                        // width: width + "px",
                        display: display ? "block" : "none"
                    }}
                >
                    <Slider {...settings}>
                        <div className="p-1">
                            <div className="bg-gray-200 p-2 rounded-md md:flex ">
                                <Image src={seclogo} className="max-h-[12rem] w-[20rem]" />
                                <div className="md:ms-3 flex flex-col justify-between">
                                    <div className="">
                                        <h3 className="text-2xl font-semibold ">name</h3>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, necessitatibus.</p>
                                    </div>
                                    <button className="bg-yellow-400 px-4 py-1 rounded-md text-md mt-4">details</button>
                                </div>
                            </div>
                        </div>
                        <div className="p-1">
                            <div className="bg-gray-200 p-2 rounded-md md:flex ">
                                <Image src={seclogo} className="max-h-[12rem] w-[20rem]" />
                                <div className="md:ms-3 flex flex-col justify-between">
                                    <div className="">
                                        <h3 className="text-2xl font-semibold ">name</h3>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, necessitatibus.</p>
                                    </div>
                                    <button className="bg-yellow-400 px-4 py-1 rounded-md text-md mt-4">details</button>
                                </div>
                            </div>
                        </div>
                        <div className="p-1">
                            <div className="bg-gray-200 p-2 rounded-md md:flex ">
                                <Image src={seclogo} className="max-h-[12rem] w-[20rem]" />
                                <div className="md:ms-3 flex flex-col justify-between">
                                    <div className="">
                                        <h3 className="text-2xl font-semibold ">name</h3>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, necessitatibus.</p>
                                    </div>
                                    <button className="bg-yellow-400 px-4 py-1 rounded-md text-md mt-4">details</button>
                                </div>
                            </div>
                        </div>
                        <div className="p-1">
                            <div className="bg-gray-200 p-2 rounded-md md:flex ">
                                <Image src={seclogo} className="max-h-[12rem] w-[20rem]" />
                                <div className="md:ms-3 flex flex-col justify-between">
                                    <div className="">
                                        <h3 className="text-2xl font-semibold ">name</h3>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, necessitatibus.</p>
                                    </div>
                                    <button className="bg-yellow-400 px-4 py-1 rounded-md text-md mt-4">details</button>
                                </div>
                            </div>
                        </div>
                        <div className="p-1">
                            <div className="bg-gray-200 p-2 rounded-md md:flex ">
                                <Image src={seclogo} className="max-h-[12rem] w-[20rem]" />
                                <div className="md:ms-3 flex flex-col justify-between">
                                    <div className="">
                                        <h3 className="text-2xl font-semibold ">name</h3>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, necessitatibus.</p>
                                    </div>
                                    <button className="bg-yellow-400 px-4 py-1 rounded-md text-md mt-4">details</button>
                                </div>
                            </div>
                        </div>
                        <div className="p-1">
                            <div className="bg-gray-200 p-2 rounded-md md:flex ">
                                <Image src={seclogo} className="max-h-[12rem] w-[20rem]" />
                                <div className="md:ms-3 flex flex-col justify-between">
                                    <div className="">
                                        <h3 className="text-2xl font-semibold ">name</h3>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, necessitatibus.</p>
                                    </div>
                                    <button className="bg-yellow-400 px-4 py-1 rounded-md text-md mt-4">details</button>
                                </div>
                            </div>
                        </div>
                    </Slider>
                </div>
                <button className="btn md:w-1/4 my-4 m-auto"><Link href={'/updates'}>See More</Link></button>

            </div>
            {/* == END SLIDER == */}
        </section>
    </>
}
