"use client";

import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "./ui/card";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    type CarouselApi,
} from "./ui/carousel";
import Image from "next/image";
import { useState } from "react";

type Client = {
    image: string;
    name: string;
    designation: string;
};

const clients: Client[] = [
    { image: "/client-1.png", name: "John Doe", designation: "CEO, Company A" },
    { image: "/client-2.png", name: "Jane Smith", designation: "Marketing Head, Company B" },
    { image: "/client-3.png", name: "Alice Brown", designation: "CTO, Company C" },
    { image: "/client-1.png", name: "Bob Johnson", designation: "Product Manager, Company D" },
    { image: "/client-2.png", name: "Emma Wilson", designation: "Designer, Company E" },
];

export function Testimonials() {
    const [carouselApi, setCarouselApi] = useState<CarouselApi | null>(null);

    return (
        <div className="relative w-full 2xl:max-w-[1620px] mx-auto md:w-[89.5%] 2xl:w-[84.5%] py-16 space-y-6">
            {/* Header Row: Title Left, Controls Right */}
            <div className="flex items-center justify-between px-4 md:px-0 mb-8">
                <h2 className="text-[50px] leading-[50px] font-bold tracking-[2px] text-white uppercase">
                    What Our Clients Say
                </h2>

                <div className="flex gap-4">
                    <button
                        className="border-l border-t border-b border-[#FFFFFF33] bg-white/5 backdrop-blur-xl text-white p-3 rounded-[10px] hover:bg-white/40 transition"
                        onClick={() => carouselApi?.scrollPrev()}
                    >
                        <ArrowLeftIcon className="2xl:w-6 2xl:h-6 w-5 h-5" />
                    </button>
                    <button
                        className="border-l border-t border-b border-[#FFFFFF33] bg-[#00AA71] backdrop-blur-xl text-white p-3 rounded-[10px] hover:bg-white/40 transition"
                        onClick={() => carouselApi?.scrollNext()}
                    >
                        <ArrowRightIcon className="2xl:w-6 2xl:h-6 w-5 h-5" />
                    </button>
                </div>
            </div>

            {/* Carousel */}
            <Carousel
                opts={{ align: "start" }}
                setApi={(api) => setCarouselApi(api)}
                className="w-full"
            >
                <CarouselContent className="flex gap-0">
                    {clients.map((client, index) => (
                        <CarouselItem key={index} className="flex-none md:basis-1/2 lg:basis-1/3">
                            <Card className="hover:shadow-lg transition-shadow duration-300 bg-transparent border-none w-[98%]">
                                <CardContent className="flex flex-col items-center justify-center p-0 aspect-square">
                                    {/* Client Image */}
                                    <div className="w-full h-[80%] rounded-[20px] overflow-hidden mb-4">
                                        <Image
                                            src={client.image}
                                            alt={client.name}
                                            width={2000}
                                            height={2000}
                                            className="object-cover w-full h-full"
                                        />
                                    </div>

                                    <div className="flex flex-col w-full items-start justify-start">

                                        {/* Client Name */}
                                        <CardTitle className="text-[30px] text-white tracking-[2px] text-left">
                                            <h3>
                                                {client.name}
                                            </h3>
                                        </CardTitle>

                                        {/* Client Designation */}
                                        <CardDescription className="text-sm text-[#3BE29A] text-left font-light tracking-[1.5px]">
                                            {client.designation}
                                        </CardDescription>

                                    </div>

                                </CardContent>
                            </Card>
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>
        </div>
    );
}
