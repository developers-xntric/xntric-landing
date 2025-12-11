"use client";
import Link from "next/link";
import ClientsLogos from "./clients-logos";
import Image from "next/image";
import { Button } from "./ui/moving-border";

const Hero = ({ id }: { id?: string }) => {
    return (
        <section id={id} className="relative  text-white overflow-hidden ">
            {/* Background SVGs */}
            <div className="absolute top-[-80px] left-[-550px] -z-10">
                <Image
                    src="/left-hero-bg.svg"
                    alt="Hero Background"
                    width={400}
                    height={400}
                    className="w-full h-full object-cover"
                />
            </div>
            <div className="absolute bottom-[70px] right-[-550px] -z-10">
                <Image
                    src="/right-hero-bg.svg"
                    alt="Hero Background"
                    width={400}
                    height={400}
                    className="w-full h-full object-cover"
                />
            </div>

            <div className=" 2xl:max-w-[1380px] mx-auto md:w-[80%] py-24 flex flex-col lg:flex-row items-center justify-between gap-5 2xl:gap-0  ">
                {/* Left Content */}
                <div className="lg:w-2/3 space-y-6">
                    <h1 className="text-4xl lg:text-[50px] xl:text-[60px] 2xl:text-[75px] font-bold md:leading-[55px] 2xl:leading-[75px] uppercase max-w-[600px] 2xl:max-w-[700px]">
                        High-Performance <br /> Websites Designed for Growth.
                    </h1>
                    <p className="text-[20px] text-white font-light tracking-[1.5px]">
                        We build scalable, conversion-focused websites that elevate brands
                        and accelerate business results.
                    </p>


                    <div className="flex gap-4">

                        <Link
                            href="#"
                            className="px-8  2xl:px-12 pb-3 pt-3 tracking-[1.5px] rounded-md text-white 2xl:text-[18px] transition uppercase bg-[#00AA71] hover:bg-transparent hover:text-[#00AA71] hover:border-[#00AA71] hover:border"

                        >
                            Book a Free Consultation
                        </Link>
                        <Link
                            href="#"
                            className="px-8 2xl:px-14 pb-3 pt-3 tracking-[1.5px] rounded-md hover:text-white 2xl:text-[18px] transition uppercase hover:bg-[#00AA71] bg-transparent text-[#00AA71] border-[#00AA71] border"

                        >
                            View Portfolio
                        </Link>
                    </div>
                </div>

                <Button
                    className=" "
                >


                    {/* Right Form with Glass Effect */}
                    <div className="relative lg:w-1/2 bg-linear-to-r from-white/10 to-transparent backdrop-blur-xl rounded-[20px] py-12 px-6 w-full max-w-md shadow-xl flex flex-col items-center space-y-8 before:content-[''] before:absolute before:top-0 before:left-0 before:w-[50px] before:h-[50px] before:bg-white/20 before:blur-[90px] before:rounded-full before:-translate-x-1/2 before:-translate-y-1/2">


                        <h2 style={{
                            fontFamily: "Futuru",
                            background: "linear-gradient(264deg, #00AA71 0%, #FFF 36.57%)",
                            backgroundClip: "text",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                        }} className="text-4xl md:text-[40px] font-bold uppercase text-center">LET'S GET STARTED</h2>
                        <form className="space-y-4 w-full">
                            <div className="flex gap-4">

                                <input
                                    type="text"
                                    placeholder="Full Name"
                                    className="w-full px-4 py-3 rounded-lg bg-transparent placeholder-white text-white border border-white/30 focus:outline-none focus:border-[#00AA71] font-light tracking-[1.5px]"
                                />
                                <input
                                    type="email"
                                    placeholder="Email Address"
                                    className="w-full px-4 py-3 rounded-lg bg-transparent placeholder-white text-white border border-white/30 focus:outline-none focus:border-[#00AA71] font-light tracking-[1.5px]"
                                />
                            </div>
                            <div className="flex gap-4">

                                <input
                                    type="text"
                                    placeholder="Company Name"
                                    className="w-full px-4 py-3 rounded-lg bg-transparent placeholder-white text-white border border-white/30 focus:outline-none focus:border-[#00AA71] font-light tracking-[1.5px]"
                                />
                                <input
                                    type="text"
                                    placeholder="Phone Number"
                                    className="w-full px-4 py-3 rounded-lg bg-transparent placeholder-white text-white border border-white/30 focus:outline-none focus:border-[#00AA71] font-light tracking-[1.5px]"
                                />
                            </div>
                            <div className="flex items-center justify-center gap-4 mt-10">

                                <Link
                                    href="#"
                                    type="submit"
                                    className="px-12 pb-3 pt-2 tracking-[1.5px] rounded-md text-white xl:text-[18px] transition uppercase bg-[#00AA71] text-center hover:bg-transparent hover:text-[#00AA71] hover:border-[#00AA71] hover:border w-full"

                                >
                                    Book a Free Consultation
                                </Link>
                            </div>
                        </form>
                    </div>
                </Button>
            </div>

            <ClientsLogos />
        </section>
    );
};

export default Hero;
