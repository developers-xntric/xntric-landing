export default function WhyChooseUs({ id }: { id?: string }) {
    return (
        <section id={id} className="relative w-full min-h-[110vh] 2xl:min-h-[1100px] overflow-hidden flex items-center justify-center px-4 py-24">
            {/* Heading */}
            <div className="absolute top-8 left-1/2 transform -translate-x-1/2 z-10">
                <h2 className="text-white text-4xl md:text-5xl font-bold text-center tracking-wide">Why Businesses Choose Us (Credible, Decision‑Helping Stats)
</h2>
            </div>

            {/* Main Container for Circles */}
            <div className="relative w-full max-w-4xl h-96 md:h-[500px] flex items-center justify-center">
                {/* Central Large Circle */}
                <div className="absolute inset-0 flex items-center justify-center z-50">
                    {/* Circle background - scale this */}
                    <div
                        className="w-[405px] h-[405px] xl:w-[35vw] xl:h-[65vh] 2xl:w-[600px] 2xl:h-[600px] rounded-full bg-linear-to-br from-white via-white to-[#A1A1A14D] shadow-2xl animate-heartbeat"
                    ></div>

                    {/* Content - absolutely centered so it doesn't scale */}
                    <div className="absolute flex flex-col items-center justify-center text-center px-4 -space-y-6 2xl:-space-y-6  w-[60%] 2xl:w-[70%]">
                        <div className="text-[25px] md:text-[25px] xl:text-[35px] 2xl:text-[40px] leading-[40px] uppercase text-black font-bold">
                           +10–18% improvement in product engagement

                        </div>
                        {/* <div className="text-[25px] md:text-[65px] 2xl:text-[80px] uppercase font-bold text-black">
                            Experience
                        </div>
                        <div className="text-[25px] md:text-[25px] xl:text-[35px] 2xl:text-[35px] uppercase text-black mt-2 font-medium">
                            (Based on UX Score Metrics)
                        </div> */}
                        <p className="text-[17px] md:text-[14px] 2xl:text-[17px] font-regular text-black mt-10 leading-tight font-futuru tracking-[1px] w-[85%] 2xl:w-[85%] mx-auto">
                            Cleaner journeys + smarter PDP layout help customers discover more.
                        </p>
                    </div>
                </div>


                {/* Top Left Circle - Fast Delivery Timeline */}

                <div
                    className="absolute top-[-13%] left-[-4%] xl:left-[-20%] 2xl:left-[-300px] w-[250px] h-[250px] 2xl:w-[370px] 2xl:h-[370px] flex items-center justify-center bg-contain bg-center bg-no-repeat "
                    style={{ backgroundImage: "url('/left-top-circle-bg.png')" }}
                >
                    <div className="text-center px-4 flex flex-col space-y-4">
                        <div className="text-[25px] md:text-[26px] 2xl:text-[30px] uppercase font-bold text-black 2xl:leading-[36px] leading-[28px]">
                            25–40% less operational workload
                        </div>
                        <p className="text-[17px] md:text-[12px] 2xl:text-[15px] font-regular text-black leading-tight font-futuru tracking-[1px]">
                          Automations replace repeated catalog and merchandising tasks.

                        </p>
                    </div>
                </div>


                {/* Top Right Circle - Performance-First Websites */}
                <div className="absolute top-[-20%] right-[-8%] xl:right-[-20%] 2xl:right-[-300px] w-[300px] h-[300px] 2xl:w-[400px] 2xl:h-[400px] rounded-full bg-linear-to-br to-[#113D49] from-[#37C7EF] flex items-center justify-center">
                    <div className="text-center px-4 flex flex-col space-y-4">
                        <div className="text-[25px] md:text-[30px] 2xl:text-[28px] uppercase font-bold text-black 2xl:leading-[40px] leading-[28px]">   +7–14% lift in add‑to‑cart actions</div>
                        <p className="text-[17px] md:text-[12px] 2xl:text-[15px] font-regular text-black  leading-tight font-futuru tracking-[1px] w-[95%]">Better relevance and better timing lead to more buying intent.</p>
                    </div>
                </div>

                {/* Bottom Left Circle - Enterprise Scalability */}
                <div
                    className="absolute bottom-[-18%] 2xl:bottom-[-55%] left-[-5%] xl:left-[-20%] 2xl:left-[-30%] w-[290px] h-[290px] 2xl:w-[370px] 2xl:h-[370px] flex items-center justify-center  bg-cover bg-center bg-no-repeat"
                    style={{ backgroundImage: "url('/left-bottom-circle-bg.png')" }}
                >
                    <div className="text-center px-4 flex flex-col space-y-4">
                        <div className="text-[25px] md:text-[22px] 2xl:text-[28px] uppercase font-bold text-white leading-[27px] 2xl:leading-[35px] tracking-[2px]">
                           +12–20% increase in AOV
                        </div>
                        <p className="text-[17px] md:text-[12px] 2xl:text-[15px] font-light text-white leading-tight font-futuru tracking-[1.5px] w-[95%]">
                           Soft, behavior‑based cross‑sell & upsell that feels natural.

                        </p>
                    </div>
                </div>


                {/* Bottom Right Circle - CRO-Driven UX & UI */}

                <div className="absolute bottom-[-20%] 2xl:bottom-[-45%] right-[-7%] xl:right-[-20%] 2xl:right-[-250px] w-[300px] h-[300px] 2xl:w-[350px] 2xl:h-[350px] rounded-full bg-linear-to-br to-[#193B6E3B] from-[#193B6E] flex items-center justify-center shadow-lg ">
                    <div className="text-center px-4 flex flex-col space-y-4">
                        <div className="text-[25px] md:text-[26px] 2xl:text-[30px] uppercase font-bold text-white leading-[36px] tracking-[1px]">  Smart data‑layer = efficient ad spend</div>
                        <p className="text-[17px] md:text-[12px] 2xl:text-[15px] font-regular text-white  leading-tight font-futuru tracking-[1.5px]">Marketing platforms receive richer, more accurate event data
helping your campaigns optimize faster and improving overall <span className="font-bold">ROAS.</span></p>
                    </div>
                </div>
            </div>
        </section>
    )
}
