export default function WhyChooseUs({ id }: { id?: string }) {
    return (
        <section id={id} className="relative w-full min-h-[110vh] 2xl:min-h-[1100px] overflow-hidden flex items-center justify-center px-4 py-24">
            {/* Heading */}
            <div className="absolute top-8 left-1/2 transform -translate-x-1/2 z-10">
                <h2 className="text-white text-4xl md:text-5xl font-bold text-center tracking-wide">WHY COMPANIES CHOOSE US</h2>
            </div>

            {/* Main Container for Circles */}
            <div className="relative w-full max-w-4xl h-96 md:h-[500px] flex items-center justify-center">
                {/* Central Large Circle */}
                <div className="absolute inset-0 flex items-center justify-center ">
                    {/* Circle background - scale this */}
                    <div
                        className="w-[405px] h-[405px] xl:w-[35vw] xl:h-[65vh] 2xl:w-[600px] 2xl:h-[600px] rounded-full bg-linear-to-br from-white via-white to-[#A1A1A14D] shadow-2xl animate-heartbeat"
                    ></div>

                    {/* Content - absolutely centered so it doesn't scale */}
                    <div className="absolute flex flex-col items-center justify-center text-center px-4 -space-y-6 2xl:-space-y-6  w-[60%] 2xl:w-[70%]">
                        <div className="text-[25px] md:text-[25px] xl:text-[35px] 2xl:text-[40px] uppercase text-black font-medium">
                            70% Better User
                        </div>
                        <div className="text-[25px] md:text-[65px] 2xl:text-[80px] uppercase font-bold text-black">
                            Experience
                        </div>
                        <div className="text-[25px] md:text-[25px] xl:text-[35px] 2xl:text-[35px] uppercase text-black mt-2 font-medium">
                            (Based on UX Score Metrics)
                        </div>
                        <p className="text-[17px] md:text-[14px] 2xl:text-[17px] font-regular text-black mt-10 leading-tight font-futuru tracking-[1px] w-[80%] 2xl:w-[80%] mx-auto">
                            Through optimized navigation, mobile-first architecture, and simplified interaction patterns, clients benefit from a 70% improvement in overall user experience, measured across engagement, bounce rate, and task completion time.
                        </p>
                    </div>
                </div>


                {/* Top Left Circle - Fast Delivery Timeline */}

                <div
                    className="absolute top-[-10%] left-[-4%] xl:left-[-20%] 2xl:left-[-300px] w-[250px] h-[250px] 2xl:w-[370px] 2xl:h-[370px] flex items-center justify-center bg-contain bg-center bg-no-repeat "
                    style={{ backgroundImage: "url('/left-top-circle-bg.png')" }}
                >
                    <div className="text-center px-4 flex flex-col space-y-4">
                        <div className="text-[25px] md:text-[26px] 2xl:text-[30px] uppercase font-bold text-black 2xl:leading-[36px] leading-[28px]">
                            Fast delivery timeline
                        </div>
                        <p className="text-[17px] md:text-[12px] 2xl:text-[15px] font-regular text-black leading-tight font-futuru tracking-[1px]">
                            Sprint-based approach and weekly updates.
                        </p>
                    </div>
                </div>


                {/* Top Right Circle - Performance-First Websites */}
                <div className="absolute top-[-20%] right-[-8%] xl:right-[-20%] 2xl:right-[-300px] w-[300px] h-[300px] 2xl:w-[400px] 2xl:h-[400px] rounded-full bg-linear-to-br to-[#113D49] from-[#37C7EF] flex items-center justify-center">
                    <div className="text-center px-4 flex flex-col space-y-4">
                        <div className="text-[25px] md:text-[36px] 2xl:text-[40px] uppercase font-bold text-black leading-[45px]">Performance-first websites</div>
                        <p className="text-[17px] md:text-[12px] 2xl:text-[15px] font-regular text-black  leading-tight font-futuru tracking-[1px]">Lighthouse 90+ scores, Core Web Vitals optimized.</p>
                    </div>
                </div>

                {/* Bottom Left Circle - Enterprise Scalability */}
                <div
                    className="absolute bottom-[-20%] 2xl:bottom-[-55%] left-[-5%] xl:left-[-20%] 2xl:left-[-30%] w-[290px] h-[290px] 2xl:w-[370px] 2xl:h-[370px] flex items-center justify-center  bg-cover bg-center bg-no-repeat"
                    style={{ backgroundImage: "url('/left-bottom-circle-bg.png')" }}
                >
                    <div className="text-center px-4 flex flex-col space-y-4">
                        <div className="text-[25px] md:text-[22px] 2xl:text-[28px] uppercase font-bold text-white leading-[27px] 2xl:leading-[35px] tracking-[2px]">
                            Enterprise scalability & secure infrastructure
                        </div>
                        <p className="text-[17px] md:text-[12px] 2xl:text-[15px] font-light text-white leading-tight font-futuru tracking-[1.5px]">
                            Suitable for multi-branch, multilingual, and high-traffic ecosystems.
                        </p>
                    </div>
                </div>


                {/* Bottom Right Circle - CRO-Driven UX & UI */}

                <div className="absolute bottom-[-20%] 2xl:bottom-[-45%] right-[-7%] xl:right-[-20%] 2xl:right-[-250px] w-[300px] h-[300px] 2xl:w-[350px] 2xl:h-[350px] rounded-full bg-linear-to-br to-[#193B6E3B] from-[#193B6E] flex items-center justify-center shadow-lg">
                    <div className="text-center px-4 flex flex-col space-y-4">
                        <div className="text-[25px] md:text-[26px] 2xl:text-[30px] uppercase font-bold text-white leading-[45px] tracking-[1px]">CRO-driven UX & UI</div>
                        <p className="text-[17px] md:text-[12px] 2xl:text-[15px] font-regular text-white  leading-tight font-futuru tracking-[1.5px]">Designed to convert visitors into real leads.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
