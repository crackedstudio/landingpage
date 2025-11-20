const Funding = () => {
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
                    transform: "rotate(0.1deg)",
                }}
            ></div>

            <div className="container-responsive relative z-10">
                {/* Section Header - Glitch-Tech */}
                <div className="border-4 border-[#16A349] p-8 mb-12 bg-black text-center relative glitch-box overflow-hidden">
                    <div className="absolute inset-0 glitch-scan"></div>
                    <div className="absolute top-4 right-4 opacity-10 watermark-flicker">
                        <img src="/assets/svg/watermark-black-white.svg" alt="" className="w-20 h-20" />
                    </div>
                    <h2 className="text-5xl md:text-6xl font-black mb-4 text-[#F2F2F2] relative z-10 glitch-text">
                        FUNDING ASK — <span className="text-[#16A349] glitch-word" data-text="$50,000">$50,000</span> PRE-SEED
                    </h2>
                    <p className="text-[#F2F2F2] text-lg font-medium max-w-2xl mx-auto mb-6 relative z-10">
                        Raise $50,000 to establish operational stability, accelerate product development, and kickstart high-impact marketing
                    </p>
                    <a
                        href="https://cracked-studios-e0pybs3.gamma.site/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block border-2 border-[#16A349] px-8 py-4 bg-[#16A349] text-black font-black text-lg uppercase tracking-wider glitch-button relative group overflow-hidden relative z-10"
                    >
                        <div className="absolute inset-0 glitch-scan"></div>
                        <span className="relative z-10">VIEW FULL PITCH DECK</span>
                        <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-20 transition-opacity">
                            <img src="/assets/svg/icon-green-black.svg" alt="" className="w-6 h-6" />
                        </div>
                    </a>
                </div>

                {/* Use of Funds */}
                <div className="grid md:grid-cols-2 gap-8 mb-12">
                    <div className="border-2 border-[#16A349] p-6 bg-black glitch-box relative overflow-hidden">
                        <div className="absolute inset-0 glitch-scan"></div>
                        <h3 className="text-2xl font-black mb-4 text-[#16A349] uppercase relative z-10">
                            USE OF FUNDS
                        </h3>
                        <div className="space-y-4 relative z-10">
                            <div className="border-2 border-[#16A349] p-4 bg-black glitch-box relative overflow-hidden">
                                <div className="absolute inset-0 glitch-scan"></div>
                                <div className="flex items-center justify-between mb-2 relative z-10">
                                    <span className="text-[#F2F2F2] font-black text-sm uppercase">Team & Developer Costs</span>
                                    <span className="text-[#16A349] font-black">≈ 45%</span>
                                </div>
                                <p className="text-[#F2F2F2] text-sm font-medium relative z-10">
                                    Pay core devs, part-time contributors, and contractors to maintain rapid shipping cadence.
                                </p>
                            </div>
                            <div className="border-2 border-[#00FF66] p-4 bg-black glitch-box relative overflow-hidden">
                                <div className="absolute inset-0 glitch-scan"></div>
                                <div className="flex items-center justify-between mb-2 relative z-10">
                                    <span className="text-[#F2F2F2] font-black text-sm uppercase">Marketing & Growth</span>
                                    <span className="text-[#00FF66] font-black">≈ 30%</span>
                                </div>
                                <p className="text-[#F2F2F2] text-sm font-medium relative z-10">
                                    Content production, influencer partnerships, paid amplification for initial launches, and community activations.
                                </p>
                            </div>
                            <div className="border-2 border-[#16A349] p-4 bg-black glitch-box relative overflow-hidden">
                                <div className="absolute inset-0 glitch-scan"></div>
                                <div className="flex items-center justify-between mb-2 relative z-10">
                                    <span className="text-[#F2F2F2] font-black text-sm uppercase">Physical Base & Operations</span>
                                    <span className="text-[#16A349] font-black">≈ 15%</span>
                                </div>
                                <p className="text-[#F2F2F2] text-sm font-medium relative z-10">
                                    Secure office space, internet, reliable power (generators/UPS), and essential equipment to ensure stable development operations.
                                </p>
                            </div>
                            <div className="border-2 border-[#00FF66] p-4 bg-black glitch-box relative overflow-hidden">
                                <div className="absolute inset-0 glitch-scan"></div>
                                <div className="flex items-center justify-between mb-2 relative z-10">
                                    <span className="text-[#F2F2F2] font-black text-sm uppercase">Product Acceleration</span>
                                    <span className="text-[#00FF66] font-black">≈ 10%</span>
                                </div>
                                <p className="text-[#F2F2F2] text-sm font-medium relative z-10">
                                    Hosting, testnet costs, tooling, and small-capital expenses to scale early launches.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="border-2 border-[#00FF66] p-6 bg-black glitch-box relative overflow-hidden">
                        <div className="absolute inset-0 glitch-scan"></div>
                        <h3 className="text-2xl font-black mb-4 text-[#00FF66] uppercase relative z-10">
                            FUNDING PHILOSOPHY
                        </h3>
                        <p className="text-[#F2F2F2] text-base font-medium mb-4 relative z-10">
                            This raise is intentionally modest and focused on <span className="text-[#00FF66] font-black">operational runway</span> to hit meaningful product milestones and revenue inflection points.
                        </p>
                        <p className="text-[#F2F2F2] text-base font-medium relative z-10">
                            Funds will enable the team to build and iterate until products begin to generate revenue via NFT passes, premium features, tournaments, and cross-product economies.
                        </p>
                    </div>
                </div>

                {/* Market Opportunity */}
                <div className="border-2 border-[#16A349] p-8 bg-black glitch-box relative overflow-hidden">
                    <div className="absolute inset-0 glitch-scan"></div>
                    <h3 className="text-3xl md:text-4xl font-black mb-6 text-center text-[#16A349] uppercase relative z-10 glitch-text">
                        MARKET OPPORTUNITY
                    </h3>
                    <div className="grid md:grid-cols-2 gap-4 relative z-10">
                        <div className="border-2 border-[#16A349] p-4 bg-black glitch-box relative overflow-hidden">
                            <div className="absolute inset-0 glitch-scan"></div>
                            <h4 className="text-lg font-black mb-2 text-[#16A349] uppercase relative z-10">WEB3 GAMING</h4>
                            <p className="text-[#F2F2F2] text-sm font-medium relative z-10">
                                Estimated at <span className="text-[#16A349] font-black">{'>'}$25B (2024)</span> and projected to exceed <span className="text-[#16A349] font-black">$120B+ by 2032</span> (strong CAGR).
                            </p>
                        </div>
                        <div className="border-2 border-[#00FF66] p-4 bg-black glitch-box relative overflow-hidden">
                            <div className="absolute inset-0 glitch-scan"></div>
                            <h4 className="text-lg font-black mb-2 text-[#00FF66] uppercase relative z-10">GLOBAL GAMING</h4>
                            <p className="text-[#F2F2F2] text-sm font-medium relative z-10">
                                <span className="text-[#00FF66] font-black">$187B revenue (2024)</span> and <span className="text-[#00FF66] font-black">3.3B players</span>, showing a massive addressable audience.
                            </p>
                        </div>
                        <div className="border-2 border-[#16A349] p-4 bg-black glitch-box relative overflow-hidden">
                            <div className="absolute inset-0 glitch-scan"></div>
                            <h4 className="text-lg font-black mb-2 text-[#16A349] uppercase relative z-10">AFRICA</h4>
                            <p className="text-[#F2F2F2] text-sm font-medium relative z-10">
                                Nigeria led with <span className="text-[#16A349] font-black">$520M</span> in VC equity funding (2024); seed-stage ticket growth shows healthy early-stage activity.
                            </p>
                        </div>
                        <div className="border-2 border-[#00FF66] p-4 bg-black glitch-box relative overflow-hidden">
                            <div className="absolute inset-0 glitch-scan"></div>
                            <h4 className="text-lg font-black mb-2 text-[#00FF66] uppercase relative z-10">ONBOARDING PROBLEM</h4>
                            <p className="text-[#F2F2F2] text-sm font-medium relative z-10">
                                <span className="text-[#00FF66] font-black">{'>'}30%</span> of mainstream gamers avoid Web3 due to confusing onboarding — a direct opportunity for frictionless products.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Funding;

