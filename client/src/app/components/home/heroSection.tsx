import React from "react";

const HeroSection = () => {
    return(
        <section className="h-[90vh] flex pt-46 justify-center text-center bg-[#0a0a0a] text-white px-6">
            <div className="container mx-auto px-4">
                <div>
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-[#0FAC7D]">Connecting Musicians to Gigs</h1>
                </div>
                <div className="pt-6">
                    <div className="text-base sm:text-lg md:text-xl text-gray-300 pt-2">
                        OpenMic is your go-to platform for discovering and booking live music talent.
                    </div> 
                    <div className="text-base sm:text-lg md:text-xl text-gray-300 pt-2">
                        Where Talent Meets Opportunity — Find Gigs. Book Musicians.
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroSection;