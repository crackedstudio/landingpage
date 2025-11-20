const Games = () => {
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
                    transform: "rotate(0.3deg)",
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
                        WHAT WE <span className="text-[#16A349] glitch-word" data-text="DO">DO</span>
                    </h2>
                    <p className="text-[#F2F2F2] text-lg font-medium max-w-2xl mx-auto relative z-10">
                        Cracked Studios builds across three interconnected verticals: Games, Applications, and Tooling & Infrastructure
                    </p>
                </div>

                {/* Products Grid - Games, Apps, Tools */}
                <div className="space-y-12 mb-12">
                    {/* Games Section */}
                    <div className="border-2 border-[#16A349] p-6 bg-black glitch-box relative overflow-hidden">
                        <div className="absolute inset-0 glitch-scan"></div>
                        <h3 className="text-3xl md:text-4xl font-black mb-6 text-[#16A349] uppercase relative z-10 glitch-text">
                            1) GAMES
                        </h3>
                        <p className="text-[#F2F2F2] text-lg font-medium mb-6 relative z-10">
                            Playable experiences designed to onboard mainstream users into web3 through fun mechanics and social loops.
                        </p>
                        <div className="grid md:grid-cols-3 gap-4 relative z-10">
                            <div className="border-2 border-[#16A349] p-4 bg-black glitch-box relative overflow-hidden">
                                <div className="absolute inset-0 glitch-scan"></div>
                                <div className="border-2 border-[#16A349] p-2 mb-3 bg-[#16A349] text-black text-center relative z-10">
                                    <p className="font-black text-xs uppercase">LIVE</p>
                                </div>
                                <h4 className="text-xl font-black mb-2 text-[#16A349] uppercase relative z-10">TWEETLE</h4>
                                <p className="text-[#F2F2F2] text-sm font-medium mb-4 relative z-10">
                                    On-chain prediction/mini-game with validated PMF and strong engagement signals. 170 unique on-chain users, 16,595+ contract calls.
                                </p>
                                <a
                                    href="https://tweetle.gg"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block w-full border-2 border-[#16A349] px-4 py-3 bg-[#16A349] text-black font-black text-sm uppercase tracking-wider glitch-button relative group overflow-hidden text-center"
                                >
                                    <div className="absolute inset-0 glitch-scan"></div>
                                    <span className="relative z-10">PLAY NOW</span>
                                    <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-20 transition-opacity">
                                        <img src="/assets/svg/icon-green-black.svg" alt="" className="w-4 h-4" />
                                    </div>
                                </a>
                            </div>
                            <div className="border-2 border-[#00FF66] p-4 bg-black glitch-box relative overflow-hidden">
                                <div className="absolute inset-0 glitch-scan"></div>
                                <div className="border-2 border-[#00FF66] p-2 mb-3 bg-[#00FF66] text-black text-center relative z-10">
                                    <p className="font-black text-xs uppercase">IN DEVELOPMENT</p>
                                </div>
                                <h4 className="text-xl font-black mb-2 text-[#00FF66] uppercase relative z-10">SPEEDSTAR</h4>
                                <p className="text-[#F2F2F2] text-sm font-medium relative z-10">
                                    A 3D web3 racing title where players stake, compete, and win bounties.
                                </p>
                            </div>
                            <div className="border-2 border-[#16A349] p-4 bg-black glitch-box relative overflow-hidden">
                                <div className="absolute inset-0 glitch-scan"></div>
                                <div className="border-2 border-[#16A349] p-2 mb-3 bg-[#16A349] text-black text-center relative z-10">
                                    <p className="font-black text-xs uppercase">IN DEVELOPMENT</p>
                                </div>
                                <h4 className="text-xl font-black mb-2 text-[#16A349] uppercase relative z-10">ROXY</h4>
                                <p className="text-[#F2F2F2] text-sm font-medium mb-4 relative z-10">
                                    A crypto-portfolio prediction game with guilds, leaderboards, and social competition.
                                </p>
                                <a
                                    href="https://roxy-seven.vercel.app"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block w-full border-2 border-[#16A349] px-4 py-3 bg-black text-[#16A349] font-black text-sm uppercase tracking-wider glitch-button glitch-button-outline relative group overflow-hidden text-center"
                                >
                                    <div className="absolute inset-0 glitch-scan"></div>
                                    <span className="relative z-10">VIEW PREVIEW</span>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Applications Section */}
                    <div className="border-2 border-[#00FF66] p-6 bg-black glitch-box relative overflow-hidden">
                        <div className="absolute inset-0 glitch-scan"></div>
                        <h3 className="text-3xl md:text-4xl font-black mb-6 text-[#00FF66] uppercase relative z-10 glitch-text">
                            2) APPLICATIONS
                        </h3>
                        <p className="text-[#F2F2F2] text-lg font-medium mb-6 relative z-10">
                            Consumer and creator apps that bring utility and social layers to our ecosystem.
                        </p>
                        <div className="grid md:grid-cols-2 gap-4 relative z-10">
                            <div className="border-2 border-[#00FF66] p-4 bg-black glitch-box relative overflow-hidden">
                                <div className="absolute inset-0 glitch-scan"></div>
                                <h4 className="text-xl font-black mb-2 text-[#00FF66] uppercase relative z-10">TIKKA</h4>
                                <p className="text-[#F2F2F2] text-sm font-medium relative z-10">
                                    A raffle engine enabling communities and individuals to organize raffles and build a raffle economy.
                                </p>
                            </div>
                            <div className="border-2 border-[#00FF66] p-4 bg-black glitch-box relative overflow-hidden">
                                <div className="absolute inset-0 glitch-scan"></div>
                                <h4 className="text-xl font-black mb-2 text-[#00FF66] uppercase relative z-10">ADDITIONAL APPS</h4>
                                <p className="text-[#F2F2F2] text-sm font-medium relative z-10">
                                    Additional social/utility apps in stealth or early development.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Tooling & Infrastructure Section */}
                    <div className="border-2 border-[#16A349] p-6 bg-black glitch-box relative overflow-hidden">
                        <div className="absolute inset-0 glitch-scan"></div>
                        <h3 className="text-3xl md:text-4xl font-black mb-6 text-[#16A349] uppercase relative z-10 glitch-text">
                            3) TOOLING & INFRASTRUCTURE
                        </h3>
                        <p className="text-[#F2F2F2] text-lg font-medium mb-6 relative z-10">
                            Developer tooling and infrastructure that powers Cracked products and can be externalized for ecosystem use.
                        </p>
                        <div className="grid md:grid-cols-2 gap-4 relative z-10">
                            <div className="border-2 border-[#16A349] p-4 bg-black glitch-box relative overflow-hidden">
                                <div className="absolute inset-0 glitch-scan"></div>
                                <h4 className="text-xl font-black mb-2 text-[#16A349] uppercase relative z-10">REALTRACK</h4>
                                <p className="text-[#F2F2F2] text-sm font-medium relative z-10">
                                    IoT + on-chain logistics for agricultural supply chain transparency and traceability.
                                </p>
                            </div>
                            <div className="border-2 border-[#16A349] p-4 bg-black glitch-box relative overflow-hidden">
                            <div className="absolute inset-0 glitch-scan"></div>
                                <h4 className="text-xl font-black mb-2 text-[#16A349] uppercase relative z-10">INTERNAL TOOLING</h4>
                                <p className="text-[#F2F2F2] text-sm font-medium relative z-10">
                                    Internal onboarding, analytics, identity and engagement pipelines that accelerate future product launches.
                                </p>
                            </div>
                        </div>
                    </div>
                        </div>

                {/* Multi-Product Ecosystem Section */}
                <div className="border-4 border-[#16A349] p-8 bg-black mb-8 glitch-box relative overflow-hidden">
                    <div className="absolute inset-0 glitch-scan"></div>
                    <h3 className="text-4xl md:text-5xl font-black mb-6 text-center text-[#16A349] uppercase relative z-10 glitch-text">
                        MULTI-PRODUCT ECOSYSTEM
                    </h3>
                    <p className="text-[#F2F2F2] text-lg font-medium mb-6 text-center max-w-3xl mx-auto relative z-10">
                        We intentionally operate as an ecosystem, not a single-product studio. Our architecture and product strategy enables:
                    </p>
                    <div className="grid md:grid-cols-2 gap-4 relative z-10">
                        <div className="border-2 border-[#16A349] p-4 bg-black glitch-box relative overflow-hidden">
                            <div className="absolute inset-0 glitch-scan"></div>
                            <div className="flex items-start gap-4 relative z-10">
                                <div className="border-2 border-[#16A349] w-6 h-6 bg-[#16A349] flex-shrink-0 glitch-pulse"></div>
                                <p className="text-[#F2F2F2] text-base font-medium">
                                    <span className="text-[#16A349] font-black">Shared identity & progression</span> across products (passes, XP, reputation)
                                </p>
                            </div>
                        </div>
                        <div className="border-2 border-[#00FF66] p-4 bg-black glitch-box relative overflow-hidden">
                            <div className="absolute inset-0 glitch-scan"></div>
                            <div className="flex items-start gap-4 relative z-10">
                                <div className="border-2 border-[#00FF66] w-6 h-6 bg-[#00FF66] flex-shrink-0 glitch-pulse"></div>
                                <p className="text-[#F2F2F2] text-base font-medium">
                                    <span className="text-[#00FF66] font-black">Cross-product reward loops</span> that increase retention and lifetime value
                                </p>
                            </div>
                        </div>
                        <div className="border-2 border-[#16A349] p-4 bg-black glitch-box relative overflow-hidden">
                            <div className="absolute inset-0 glitch-scan"></div>
                            <div className="flex items-start gap-4 relative z-10">
                                <div className="border-2 border-[#16A349] w-6 h-6 bg-[#16A349] flex-shrink-0 glitch-pulse"></div>
                                <p className="text-[#F2F2F2] text-base font-medium">
                                    <span className="text-[#16A349] font-black">Interoperable on-chain infrastructure</span> that reduces engineering duplication
                                </p>
                            </div>
                        </div>
                        <div className="border-2 border-[#00FF66] p-4 bg-black glitch-box relative overflow-hidden">
                                <div className="absolute inset-0 glitch-scan"></div>
                            <div className="flex items-start gap-4 relative z-10">
                                <div className="border-2 border-[#00FF66] w-6 h-6 bg-[#00FF66] flex-shrink-0 glitch-pulse"></div>
                                <p className="text-[#F2F2F2] text-base font-medium">
                                    <span className="text-[#00FF66] font-black">Cross-promotion mechanics</span> — launches feed each other, transferring hype and users
                        </p>
                    </div>
                        </div>
                    </div>
                    <p className="text-[#F2F2F2] text-lg font-medium mt-6 text-center max-w-2xl mx-auto relative z-10">
                        This model compounds virality and transforms each new product into a growth channel for the whole brand.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Games;
