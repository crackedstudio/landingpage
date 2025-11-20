import {
    StarknetIcon,
    CairoIcon,
    Web3Icon,
    SecurityIcon,
} from "../BrutalistIcons";

const Build = () => {
    return (
        <section className="py-20 lg:py-32 bg-black relative overflow-hidden">
            {/* Glitch Grid Background - Asymmetric */}
            <div
                className="absolute inset-0"
                style={{
                    backgroundImage: `
                        linear-gradient(#16A349 1px, transparent 1px),
                        linear-gradient(90deg, #16A349 1px, transparent 1px)
                    `,
                    backgroundSize: "48px 48px",
                    opacity: 0.08,
                    transform: "rotate(-0.2deg)",
                }}
            ></div>

            <div className="container-responsive relative z-10">
                {/* Section Header - Glitch-Tech */}
                <div className="border-2 border-[#16A349] p-8 mb-12 bg-black text-center relative glitch-box overflow-hidden">
                    <div className="absolute inset-0 glitch-scan"></div>
                    <div className="absolute top-4 right-4 opacity-10 watermark-flicker">
                        <img
                            src="/assets/svg/watermark-black-white.svg"
                            alt=""
                            className="w-20 h-20"
                        />
                    </div>
                    <h2 className="text-5xl md:text-6xl font-black mb-4 text-[#F2F2F2] relative z-10 glitch-text">
                        OUR{" "}
                        <span
                            className="text-[#16A349] glitch-word"
                            data-text="APPROACH"
                        >
                            APPROACH
                        </span>
                    </h2>
                    <p className="text-[#F2F2F2] text-lg font-medium max-w-2xl mx-auto relative z-10">
                        We fuse product-first design with a modern growth engine
                        and community-first culture
                    </p>
                </div>

                {/* Our Approach - Glitch Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
                    <div className="border-2 border-[#16A349] p-6 bg-black glitch-box relative overflow-hidden">
                        <div className="absolute inset-0 glitch-scan"></div>
                        <h3 className="text-2xl font-black mb-4 text-[#16A349] uppercase relative z-10">
                            VIRAL MARKETING + ON-CHAIN EXPERIENCES
                        </h3>
                        <p className="text-[#F2F2F2] text-base font-medium relative z-10">
                            We fuse product-first design with a modern growth
                            engine. Cracked products are built to create
                            shareable moments that perform organically on
                            short-form platforms.
                        </p>
                    </div>

                    <div className="border-2 border-[#00FF66] p-6 bg-black glitch-box relative overflow-hidden">
                        <div className="absolute inset-0 glitch-scan"></div>
                        <h3 className="text-2xl font-black mb-4 text-[#00FF66] uppercase relative z-10">
                            FAST, LEAN, ITERATIVE EXECUTION
                        </h3>
                        <p className="text-[#F2F2F2] text-base font-medium relative z-10">
                            We ship minimum-loved-products quickly, validate
                            with real users, and iterate fast. Being lean lets
                            us test more ideas with less capital and find
                            repeatable winners.
                        </p>
                    </div>

                    <div className="border-2 border-[#16A349] p-6 bg-black glitch-box relative overflow-hidden">
                        <div className="absolute inset-0 glitch-scan"></div>
                        <h3 className="text-2xl font-black mb-4 text-[#16A349] uppercase relative z-10">
                            COMMUNITY & CULTURE FIRST
                        </h3>
                        <p className="text-[#F2F2F2] text-base font-medium relative z-10">
                            A full-time content engine creates culture, not just
                            ads. We prioritize TikTok, Instagram, Twitter/X, and
                            Twitch to craft memeable content and authentic
                            creator-led campaigns targeted at Gen-Z and youth
                            culture.
                        </p>
                    </div>
                </div>

                {/* Technology Stack - Glitch Style */}
                <div className="border-2 border-[#16A349] p-8 mb-8 bg-black glitch-box relative overflow-hidden">
                    <div className="absolute inset-0 glitch-scan"></div>
                    <h3 className="text-3xl md:text-4xl font-black mb-8 text-center text-[#16A349] uppercase relative z-10 glitch-text">
                        POWERED BY ADVANCED TECHNOLOGY
                    </h3>
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 relative z-10">
                        <div className="border-2 border-[#16A349] p-6 bg-black text-center glitch-box relative overflow-hidden">
                            <div className="absolute inset-0 glitch-scan"></div>
                            <div className="border-2 border-[#16A349] w-16 h-16 bg-[#16A349] flex items-center justify-center mx-auto mb-4 relative z-10">
                                <StarknetIcon
                                    className="w-8 h-8"
                                    color="black"
                                />
                            </div>
                            <h4 className="font-black mb-2 text-[#16A349] uppercase text-sm relative z-10">
                                Fast Layers
                            </h4>
                            <p className="text-[#F2F2F2] text-xs font-medium relative z-10">
                                Scalable infrastructure
                            </p>
                        </div>

                        <div className="border-2 border-[#00FF66] p-6 bg-black text-center glitch-box relative overflow-hidden">
                            <div className="absolute inset-0 glitch-scan"></div>
                            <div className="border-2 border-[#00FF66] w-16 h-16 bg-[#00FF66] flex items-center justify-center mx-auto mb-4 relative z-10">
                                <CairoIcon className="w-8 h-8" color="black" />
                            </div>
                            <h4 className="font-black mb-2 text-[#00FF66] uppercase text-sm relative z-10">
                                SMART CONTRACTS
                            </h4>
                            <p className="text-[#F2F2F2] text-xs font-medium relative z-10">
                                On-chain logic
                            </p>
                        </div>

                        <div className="border-2 border-[#16A349] p-6 bg-black text-center glitch-box relative overflow-hidden">
                            <div className="absolute inset-0 glitch-scan"></div>
                            <div className="border-2 border-[#16A349] w-16 h-16 bg-[#16A349] flex items-center justify-center mx-auto mb-4 relative z-10">
                                <Web3Icon className="w-8 h-8" color="black" />
                            </div>
                            <h4 className="font-black mb-2 text-[#16A349] uppercase text-sm relative z-10">
                                WEB3
                            </h4>
                            <p className="text-[#F2F2F2] text-xs font-medium relative z-10">
                                Decentralized gaming
                            </p>
                        </div>

                        <div className="border-2 border-[#00FF66] p-6 bg-black text-center glitch-box relative overflow-hidden">
                            <div className="absolute inset-0 glitch-scan"></div>
                            <div className="border-2 border-[#00FF66] w-16 h-16 bg-[#00FF66] flex items-center justify-center mx-auto mb-4 relative z-10">
                                <SecurityIcon
                                    className="w-8 h-8"
                                    color="black"
                                />
                            </div>
                            <h4 className="font-black mb-2 text-[#00FF66] uppercase text-sm relative z-10">
                                SECURITY
                            </h4>
                            <p className="text-[#F2F2F2] text-xs font-medium relative z-10">
                                Audited contracts
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Build;
