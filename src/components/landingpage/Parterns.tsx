import {
    ChainIcon,
    TournamentIcon,
    SDKIcon,
    InnovationIcon,
    CommunityIcon,
    RewardsIcon,
} from "../BrutalistIcons";

const Parterns = () => {
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
                    transform: "rotate(0.2deg)",
                }}
            ></div>

            <div className="container-responsive relative z-10">
                {/* Section Header - Glitch-Tech */}
                <div className="border-2 border-[#16A349] p-8 mb-12 bg-black text-center relative glitch-box overflow-hidden">
                    <div className="absolute inset-0 glitch-scan"></div>
                    <div className="absolute top-4 right-4 opacity-10 watermark-flicker">
                        <img src="/assets/svg/watermark-black-white.svg" alt="" className="w-20 h-20" />
                    </div>
                    <h2 className="text-5xl md:text-6xl font-black mb-4 text-[#F2F2F2] relative z-10 glitch-text">
                        THE <span className="text-[#16A349] glitch-word" data-text="CRACKEDDAO">CRACKEDDAO</span> & PARTNERSHIPS
                    </h2>
                    <p className="text-[#F2F2F2] text-lg font-medium max-w-2xl mx-auto relative z-10">
                        Our long-term vision for open contribution and strategic partnerships
                    </p>
                </div>

                {/* Main Content - Glitch Style */}
                <div className="grid lg:grid-cols-2 gap-8 mb-12">
                    <div className="space-y-6 transform -rotate-0.5 offset-left">
                        <div className="border-4 border-[#16A349] p-8 bg-black glitch-box relative overflow-hidden">
                            <div className="absolute inset-0 glitch-scan"></div>
                            <h3 className="text-4xl md:text-5xl font-black mb-6 text-[#F2F2F2] relative z-10 glitch-text">
                                LET'S BUILD THE FUTURE
                            </h3>
                            <h3 className="text-4xl md:text-5xl font-black mb-6 text-[#16A349] relative z-10 glitch-text">
                                TOGETHER
                            </h3>
                        </div>

                        <div className="border-2 border-[#16A349] p-6 bg-black glitch-box relative overflow-hidden">
                            <div className="absolute inset-0 glitch-scan"></div>
                            <h3 className="text-2xl font-black mb-4 text-[#16A349] uppercase relative z-10">CRACKEDDAO VISION</h3>
                            <p className="text-lg md:text-xl text-[#F2F2F2] leading-relaxed font-medium mb-4 relative z-10">
                                CrackedDAO is our planned open contributor network and incentive layer:
                            </p>
                            <ul className="space-y-2 relative z-10">
                                <li className="flex items-start gap-3">
                                    <div className="border-2 border-[#16A349] w-4 h-4 bg-[#16A349] flex-shrink-0 mt-1 glitch-pulse"></div>
                                    <p className="text-[#F2F2F2] text-sm font-medium">Allows builders to contribute to Cracked products</p>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="border-2 border-[#00FF66] w-4 h-4 bg-[#00FF66] flex-shrink-0 mt-1 glitch-pulse"></div>
                                    <p className="text-[#F2F2F2] text-sm font-medium">Tracks contribution via XP and on-chain reputation</p>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="border-2 border-[#16A349] w-4 h-4 bg-[#16A349] flex-shrink-0 mt-1 glitch-pulse"></div>
                                    <p className="text-[#F2F2F2] text-sm font-medium">Distributes rewards, grants, and spotlight to contributors</p>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="border-2 border-[#00FF66] w-4 h-4 bg-[#00FF66] flex-shrink-0 mt-1 glitch-pulse"></div>
                                    <p className="text-[#F2F2F2] text-sm font-medium">Creates an open innovation pipeline and decentralized product governance</p>
                                </li>
                            </ul>
                        </div>

                        {/* Partnership Types - Glitch Style */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                            <div className="border-2 border-[#16A349] p-4 bg-black text-center glitch-box relative overflow-hidden">
                                <div className="absolute inset-0 glitch-scan"></div>
                                <div className="flex justify-center mb-2 relative z-10">
                                    <ChainIcon className="w-10 h-10" color="#16A349" />
                                </div>
                                <h4 className="font-black text-sm mb-2 text-[#16A349] uppercase relative z-10">
                                    CHAIN PARTNERSHIPS
                                </h4>
                                <p className="text-[#F2F2F2] text-xs font-medium relative z-10">
                                    Multi-chain integration
                                </p>
                            </div>
                            <div className="border-2 border-[#00FF66] p-4 bg-black text-center glitch-box relative overflow-hidden">
                                <div className="absolute inset-0 glitch-scan"></div>
                                <div className="flex justify-center mb-2 relative z-10">
                                    <TournamentIcon className="w-10 h-10" color="#00FF66" />
                                </div>
                                <h4 className="font-black text-sm mb-2 text-[#00FF66] uppercase relative z-10">
                                    TOURNAMENT SPONSORS
                                </h4>
                                <p className="text-[#F2F2F2] text-xs font-medium relative z-10">
                                    Competitive events
                                </p>
                            </div>
                            <div className="border-2 border-[#16A349] p-4 bg-black text-center glitch-box relative overflow-hidden">
                                <div className="absolute inset-0 glitch-scan"></div>
                                <div className="flex justify-center mb-2 relative z-10">
                                    <SDKIcon className="w-10 h-10" color="#16A349" />
                                </div>
                                <h4 className="font-black text-sm mb-2 text-[#16A349] uppercase relative z-10">
                                    SDK INTEGRATION
                                </h4>
                                <p className="text-[#F2F2F2] text-xs font-medium relative z-10">
                                    Developer tools
                                </p>
                            </div>
                        </div>

                        <a
                            href="mailto:crackedstudios@crackedstudios.xyz"
                            className="w-full border-2 border-[#16A349] px-8 py-4 bg-[#16A349] text-black font-black text-lg uppercase tracking-wider glitch-button relative group overflow-hidden text-center"
                        >
                            <div className="absolute inset-0 glitch-scan"></div>
                            <span className="relative z-10">PARTNER WITH US</span>
                            <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-20 transition-opacity">
                                <img src="/assets/svg/icon-green-black.svg" alt="" className="w-6 h-6" />
                            </div>
                        </a>
                    </div>

                    {/* Why Partner - Glitch Style - Offset */}
                    <div className="space-y-6 transform rotate-0.5 offset-right">
                        <div className="border-2 border-[#16A349] p-8 bg-black glitch-box relative overflow-hidden">
                            <div className="absolute inset-0 glitch-scan"></div>
                            <h4 className="text-3xl md:text-4xl font-black mb-8 text-center text-[#16A349] uppercase relative z-10 glitch-text">
                                WHY PARTNER WITH US?
                            </h4>
                            <div className="space-y-4 relative z-10">
                                <div className="border-2 border-[#16A349] p-4 bg-black glitch-box relative overflow-hidden">
                                    <div className="absolute inset-0 glitch-scan"></div>
                                    <div className="flex items-start gap-4 relative z-10">
                                        <div className="border-2 border-[#16A349] w-12 h-12 bg-[#16A349] flex items-center justify-center flex-shrink-0">
                                            <InnovationIcon className="w-6 h-6" color="black" />
                                        </div>
                                        <div>
                                            <h5 className="text-lg font-black mb-2 text-[#16A349] uppercase">
                                                INNOVATION LEADER
                                            </h5>
                                            <p className="text-[#F2F2F2] text-sm font-medium">
                                                Cutting-edge blockchain gaming technology
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="border-2 border-[#00FF66] p-4 bg-black glitch-box relative overflow-hidden">
                                    <div className="absolute inset-0 glitch-scan"></div>
                                    <div className="flex items-start gap-4 relative z-10">
                                        <div className="border-2 border-[#00FF66] w-12 h-12 bg-[#00FF66] flex items-center justify-center flex-shrink-0">
                                            <CommunityIcon className="w-6 h-6" color="black" />
                                        </div>
                                        <div>
                                            <h5 className="text-lg font-black mb-2 text-[#00FF66] uppercase">
                                                GROWING COMMUNITY
                                            </h5>
                                            <p className="text-[#F2F2F2] text-sm font-medium">
                                                Active and engaged player base
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="border-2 border-[#16A349] p-4 bg-black glitch-box relative overflow-hidden">
                                    <div className="absolute inset-0 glitch-scan"></div>
                                    <div className="flex items-start gap-4 relative z-10">
                                        <div className="border-2 border-[#16A349] w-12 h-12 bg-[#16A349] flex items-center justify-center flex-shrink-0">
                                            <RewardsIcon className="w-6 h-6" color="black" />
                                        </div>
                                        <div>
                                            <h5 className="text-lg font-black mb-2 text-[#16A349] uppercase">
                                                PROVEN TRACK RECORD
                                            </h5>
                                            <p className="text-[#F2F2F2] text-sm font-medium">
                                                Successful game launches and community building
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* CTA Section - Glitch Style */}
                <div className="border-4 border-[#16A349] p-12 bg-black text-center glitch-box relative overflow-hidden">
                    <div className="absolute inset-0 glitch-scan"></div>
                    <h3 className="text-4xl md:text-5xl font-black mb-6 text-[#16A349] uppercase relative z-10 glitch-text">
                        READY TO PARTNER?
                    </h3>
                    <p className="text-[#F2F2F2] text-lg font-medium mb-8 max-w-2xl mx-auto relative z-10">
                        Let's discuss how we can work together to create amazing gaming experiences and grow our communities.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto relative z-10">
                        <a
                            href="mailto:crackedstudios@crackedstudios.xyz"
                            className="border-2 border-[#16A349] px-8 py-4 bg-[#16A349] text-black font-black text-lg uppercase tracking-wider glitch-button relative group overflow-hidden text-center"
                        >
                            <div className="absolute inset-0 glitch-scan"></div>
                            <span className="relative z-10">START PARTNERSHIP</span>
                            <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-20 transition-opacity">
                                <img src="/assets/svg/icon-green-black.svg" alt="" className="w-6 h-6" />
                            </div>
                        </a>
                        <a
                            href="https://cracked-studios-e0pybs3.gamma.site/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="border-2 border-[#16A349] px-8 py-4 bg-black text-[#00FF66] font-black text-lg uppercase tracking-wider glitch-button glitch-button-outline relative overflow-hidden text-center"
                        >
                            <div className="absolute inset-0 glitch-scan"></div>
                            <span className="relative z-10">VIEW PITCH DECK</span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Parterns;
