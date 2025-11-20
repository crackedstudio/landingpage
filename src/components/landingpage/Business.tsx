const Business = () => {
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
                    transform: "rotate(-0.1deg)",
                }}
            ></div>

            <div className="container-responsive relative z-10">
                {/* Competitive Landscape */}
                <div className="border-2 border-[#16A349] p-8 mb-12 bg-black glitch-box relative overflow-hidden">
                    <div className="absolute inset-0 glitch-scan"></div>
                    <h2 className="text-4xl md:text-5xl font-black mb-6 text-center text-[#16A349] uppercase relative z-10 glitch-text">
                        COMPETITIVE LANDSCAPE
                    </h2>
                    <p className="text-[#F2F2F2] text-lg font-medium mb-6 text-center max-w-3xl mx-auto relative z-10">
                        We do not primarily compete in a "who has the best blockchain tech" sense. Our competition is <span className="text-[#16A349] font-black">friction</span> and the user experience barriers that prevent mainstream adoption.
                    </p>
                    <div className="grid md:grid-cols-2 gap-4 relative z-10">
                        <div className="border-2 border-[#16A349] p-4 bg-black glitch-box relative overflow-hidden">
                            <div className="absolute inset-0 glitch-scan"></div>
                            <h3 className="text-lg font-black mb-2 text-[#16A349] uppercase relative z-10">ON-CHAIN, BUT FEELS LIKE WEB2</h3>
                            <p className="text-[#F2F2F2] text-sm font-medium relative z-10">
                                Seamless onboarding, minimal wallet friction
                            </p>
                        </div>
                        <div className="border-2 border-[#00FF66] p-4 bg-black glitch-box relative overflow-hidden">
                            <div className="absolute inset-0 glitch-scan"></div>
                            <h3 className="text-lg font-black mb-2 text-[#00FF66] uppercase relative z-10">CULTURE-FIRST MARKETING</h3>
                            <p className="text-[#F2F2F2] text-sm font-medium relative z-10">
                                Memeable creative that drives virality
                            </p>
                        </div>
                        <div className="border-2 border-[#16A349] p-4 bg-black glitch-box relative overflow-hidden">
                            <div className="absolute inset-0 glitch-scan"></div>
                            <h3 className="text-lg font-black mb-2 text-[#16A349] uppercase relative z-10">MULTI-PRODUCT ECOSYSTEM</h3>
                            <p className="text-[#F2F2F2] text-sm font-medium relative z-10">
                                Cross-product growth and shared progression
                            </p>
                        </div>
                        <div className="border-2 border-[#00FF66] p-4 bg-black glitch-box relative overflow-hidden">
                            <div className="absolute inset-0 glitch-scan"></div>
                            <h3 className="text-lg font-black mb-2 text-[#00FF66] uppercase relative z-10">SPEED OF EXECUTION</h3>
                            <p className="text-[#F2F2F2] text-sm font-medium relative z-10">
                                Rapid iteration and shipping cadence uncommon in Web3
                            </p>
                        </div>
                    </div>
                    <p className="text-[#F2F2F2] text-base font-medium mt-6 text-center max-w-2xl mx-auto relative z-10">
                        Most competitors are either too technical (pure Web3 UX) or lack decentralized ownership (pure Web2). We merge both.
                    </p>
                </div>

                {/* Revenue Model */}
                <div className="border-2 border-[#00FF66] p-8 mb-12 bg-black glitch-box relative overflow-hidden">
                    <div className="absolute inset-0 glitch-scan"></div>
                    <h2 className="text-4xl md:text-5xl font-black mb-6 text-center text-[#00FF66] uppercase relative z-10 glitch-text">
                        REVENUE MODEL
                    </h2>
                    <p className="text-[#F2F2F2] text-lg font-medium mb-6 text-center max-w-3xl mx-auto relative z-10">
                        We prioritize early, fair, and natural monetization that never undermines fun.
                    </p>
                    <div className="space-y-6 relative z-10">
                        <div className="border-2 border-[#00FF66] p-6 bg-black glitch-box relative overflow-hidden">
                            <div className="absolute inset-0 glitch-scan"></div>
                            <h3 className="text-xl font-black mb-4 text-[#00FF66] uppercase relative z-10">CORE: CRACKED NFT PASS</h3>
                            <p className="text-[#F2F2F2] text-base font-medium relative z-10">
                                A universal pass across the ecosystem granting eligibility for bounties, ranked modes, exclusive cosmetics, and community events. Gameplay remains enjoyable for free; passes unlock competitive/monetizable experiences.
                            </p>
                        </div>
                        <div className="grid md:grid-cols-3 gap-4">
                            <div className="border-2 border-[#16A349] p-4 bg-black glitch-box relative overflow-hidden">
                                <div className="absolute inset-0 glitch-scan"></div>
                                <h4 className="text-lg font-black mb-2 text-[#16A349] uppercase relative z-10">GAMES</h4>
                                <p className="text-[#F2F2F2] text-sm font-medium relative z-10">
                                    Cosmetic sales, tournament entry fees, seasonal passes, staking & yield mechanics
                                </p>
                            </div>
                            <div className="border-2 border-[#00FF66] p-4 bg-black glitch-box relative overflow-hidden">
                                <div className="absolute inset-0 glitch-scan"></div>
                                <h4 className="text-lg font-black mb-2 text-[#00FF66] uppercase relative z-10">APPS</h4>
                                <p className="text-[#F2F2F2] text-sm font-medium relative z-10">
                                    Platform fees, premium creator tools, boosted features
                                </p>
                            </div>
                            <div className="border-2 border-[#16A349] p-4 bg-black glitch-box relative overflow-hidden">
                                <div className="absolute inset-0 glitch-scan"></div>
                                <h4 className="text-lg font-black mb-2 text-[#16A349] uppercase relative z-10">TOOLS/INFRA</h4>
                                <p className="text-[#F2F2F2] text-sm font-medium relative z-10">
                                    API subscriptions, integrations, enterprise licensing
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Go-To-Market Strategy */}
                <div className="border-2 border-[#16A349] p-8 bg-black glitch-box relative overflow-hidden">
                    <div className="absolute inset-0 glitch-scan"></div>
                    <h2 className="text-4xl md:text-5xl font-black mb-6 text-center text-[#16A349] uppercase relative z-10 glitch-text">
                        GO-TO-MARKET STRATEGY
                    </h2>
                    <p className="text-[#F2F2F2] text-lg font-medium mb-6 text-center max-w-3xl mx-auto relative z-10">
                        A repeatable, data-driven GTM playbook centered on hype, communities, and creators
                    </p>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 relative z-10">
                        <div className="border-2 border-[#16A349] p-4 bg-black glitch-box relative overflow-hidden">
                            <div className="absolute inset-0 glitch-scan"></div>
                            <div className="flex items-start gap-3 relative z-10">
                                <div className="border-2 border-[#16A349] w-6 h-6 bg-[#16A349] flex-shrink-0 glitch-pulse"></div>
                                <p className="text-[#F2F2F2] text-sm font-medium">
                                    <span className="text-[#16A349] font-black">Hype-driven launches</span> — ship fast, create shareable moments, drive urgency
                                </p>
                            </div>
                        </div>
                        <div className="border-2 border-[#00FF66] p-4 bg-black glitch-box relative overflow-hidden">
                            <div className="absolute inset-0 glitch-scan"></div>
                            <div className="flex items-start gap-3 relative z-10">
                                <div className="border-2 border-[#00FF66] w-6 h-6 bg-[#00FF66] flex-shrink-0 glitch-pulse"></div>
                                <p className="text-[#F2F2F2] text-sm font-medium">
                                    <span className="text-[#00FF66] font-black">Ambassador & hotspot network</span> — activate regionally concentrated builders and creators
                                </p>
                            </div>
                        </div>
                        <div className="border-2 border-[#16A349] p-4 bg-black glitch-box relative overflow-hidden">
                            <div className="absolute inset-0 glitch-scan"></div>
                            <div className="flex items-start gap-3 relative z-10">
                                <div className="border-2 border-[#16A349] w-6 h-6 bg-[#16A349] flex-shrink-0 glitch-pulse"></div>
                                <p className="text-[#F2F2F2] text-sm font-medium">
                                    <span className="text-[#16A349] font-black">Influencer amplification</span> — partner with creators on TikTok, X, IG, Twitch
                                </p>
                            </div>
                        </div>
                        <div className="border-2 border-[#00FF66] p-4 bg-black glitch-box relative overflow-hidden">
                            <div className="absolute inset-0 glitch-scan"></div>
                            <div className="flex items-start gap-3 relative z-10">
                                <div className="border-2 border-[#00FF66] w-6 h-6 bg-[#00FF66] flex-shrink-0 glitch-pulse"></div>
                                <p className="text-[#F2F2F2] text-sm font-medium">
                                    <span className="text-[#00FF66] font-black">Viral content engine</span> — consistent, memetic, and culturally-aligned output
                                </p>
                            </div>
                        </div>
                        <div className="border-2 border-[#16A349] p-4 bg-black glitch-box relative overflow-hidden">
                            <div className="absolute inset-0 glitch-scan"></div>
                            <div className="flex items-start gap-3 relative z-10">
                                <div className="border-2 border-[#16A349] w-6 h-6 bg-[#16A349] flex-shrink-0 glitch-pulse"></div>
                                <p className="text-[#F2F2F2] text-sm font-medium">
                                    <span className="text-[#16A349] font-black">Ecosystem partnerships</span> — partner with chains and tooling to expand distribution
                                </p>
                            </div>
                        </div>
                        <div className="border-2 border-[#00FF66] p-4 bg-black glitch-box relative overflow-hidden">
                            <div className="absolute inset-0 glitch-scan"></div>
                            <div className="flex items-start gap-3 relative z-10">
                                <div className="border-2 border-[#00FF66] w-6 h-6 bg-[#00FF66] flex-shrink-0 glitch-pulse"></div>
                                <p className="text-[#F2F2F2] text-sm font-medium">
                                    <span className="text-[#00FF66] font-black">Repeatable & measured</span> — test, measure funnels, refine the playbook for each product
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Business;

