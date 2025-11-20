const Roadmap = () => {
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
                        <img src="/assets/svg/watermark-black-white.svg" alt="" className="w-20 h-20" />
                    </div>
                    <h2 className="text-5xl md:text-6xl font-black mb-4 text-[#F2F2F2] relative z-10 glitch-text">
                        ROADMAP — <span className="text-[#16A349] glitch-word" data-text="NEXT 6-12 MONTHS">NEXT 6-12 MONTHS</span>
                    </h2>
                </div>

                {/* Roadmap Timeline */}
                <div className="space-y-8">
                    {/* Q1 */}
                    <div className="border-2 border-[#16A349] p-6 bg-black glitch-box relative overflow-hidden">
                        <div className="absolute inset-0 glitch-scan"></div>
                        <div className="border-2 border-[#16A349] p-2 mb-4 bg-[#16A349] text-black inline-block relative z-10">
                            <p className="font-black text-sm uppercase">Q1 — FOUNDATION & RAPID SHIPPING</p>
                        </div>
                        <div className="grid md:grid-cols-2 gap-4 relative z-10">
                            <div className="flex items-start gap-3">
                                <div className="border-2 border-[#16A349] w-4 h-4 bg-[#16A349] flex-shrink-0 mt-1 glitch-pulse"></div>
                                <p className="text-[#F2F2F2] text-sm font-medium">Finish <span className="text-[#16A349] font-black">Speedstar</span> alpha prototype</p>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="border-2 border-[#00FF66] w-4 h-4 bg-[#00FF66] flex-shrink-0 mt-1 glitch-pulse"></div>
                                <p className="text-[#F2F2F2] text-sm font-medium">Expand <span className="text-[#00FF66] font-black">Tikka</span> early-access to community partners</p>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="border-2 border-[#16A349] w-4 h-4 bg-[#16A349] flex-shrink-0 mt-1 glitch-pulse"></div>
                                <p className="text-[#F2F2F2] text-sm font-medium">Finalize Cracked NFT Pass mechanics and mint flow</p>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="border-2 border-[#00FF66] w-4 h-4 bg-[#00FF66] flex-shrink-0 mt-1 glitch-pulse"></div>
                                <p className="text-[#F2F2F2] text-sm font-medium">Begin <span className="text-[#00FF66] font-black">Roxy</span> core gameplay prototyping and initial UX tests</p>
                            </div>
                        </div>
                    </div>

                    {/* Q2 */}
                    <div className="border-2 border-[#00FF66] p-6 bg-black glitch-box relative overflow-hidden">
                        <div className="absolute inset-0 glitch-scan"></div>
                        <div className="border-2 border-[#00FF66] p-2 mb-4 bg-[#00FF66] text-black inline-block relative z-10">
                            <p className="font-black text-sm uppercase">Q2 — GROWTH & PRODUCTIZATION</p>
                        </div>
                        <div className="grid md:grid-cols-2 gap-4 relative z-10">
                            <div className="flex items-start gap-3">
                                <div className="border-2 border-[#16A349] w-4 h-4 bg-[#16A349] flex-shrink-0 mt-1 glitch-pulse"></div>
                                <p className="text-[#F2F2F2] text-sm font-medium">Launch Speedstar closed beta with tournaments and bounties</p>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="border-2 border-[#00FF66] w-4 h-4 bg-[#00FF66] flex-shrink-0 mt-1 glitch-pulse"></div>
                                <p className="text-[#F2F2F2] text-sm font-medium">Public launch of <span className="text-[#00FF66] font-black">Tikka</span> with creator tools and integrated raffle marketplace</p>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="border-2 border-[#16A349] w-4 h-4 bg-[#16A349] flex-shrink-0 mt-1 glitch-pulse"></div>
                                <p className="text-[#F2F2F2] text-sm font-medium">Roxy alpha with guilds and leaderboard mechanics</p>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="border-2 border-[#00FF66] w-4 h-4 bg-[#00FF66] flex-shrink-0 mt-1 glitch-pulse"></div>
                                <p className="text-[#F2F2F2] text-sm font-medium">Intensify content campaigns and ambassador activations</p>
                            </div>
                        </div>
                    </div>

                    {/* Q3 */}
                    <div className="border-2 border-[#16A349] p-6 bg-black glitch-box relative overflow-hidden">
                        <div className="absolute inset-0 glitch-scan"></div>
                        <div className="border-2 border-[#16A349] p-2 mb-4 bg-[#16A349] text-black inline-block relative z-10">
                            <p className="font-black text-sm uppercase">Q3 — INFRASTRUCTURE & SCALE</p>
                        </div>
                        <div className="grid md:grid-cols-2 gap-4 relative z-10">
                            <div className="flex items-start gap-3">
                                <div className="border-2 border-[#16A349] w-4 h-4 bg-[#16A349] flex-shrink-0 mt-1 glitch-pulse"></div>
                                <p className="text-[#F2F2F2] text-sm font-medium">RealTrack testnet for pilot partners (agri-supply chain traceability)</p>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="border-2 border-[#00FF66] w-4 h-4 bg-[#00FF66] flex-shrink-0 mt-1 glitch-pulse"></div>
                                <p className="text-[#F2F2F2] text-sm font-medium">Implement cross-product identity & XP system (pass + reputation sync)</p>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="border-2 border-[#16A349] w-4 h-4 bg-[#16A349] flex-shrink-0 mt-1 glitch-pulse"></div>
                                <p className="text-[#F2F2F2] text-sm font-medium">Mobile-first UX rollouts and performance optimizations</p>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="border-2 border-[#00FF66] w-4 h-4 bg-[#00FF66] flex-shrink-0 mt-1 glitch-pulse"></div>
                                <p className="text-[#F2F2F2] text-sm font-medium">Local ambassador activations in strategic hotspots</p>
                            </div>
                        </div>
                    </div>

                    {/* Q4 */}
                    <div className="border-2 border-[#00FF66] p-6 bg-black glitch-box relative overflow-hidden">
                        <div className="absolute inset-0 glitch-scan"></div>
                        <div className="border-2 border-[#00FF66] p-2 mb-4 bg-[#00FF66] text-black inline-block relative z-10">
                            <p className="font-black text-sm uppercase">Q4 — DAO & ECOSYSTEM EXPANSION</p>
                        </div>
                        <div className="grid md:grid-cols-2 gap-4 relative z-10">
                            <div className="flex items-start gap-3">
                                <div className="border-2 border-[#16A349] w-4 h-4 bg-[#16A349] flex-shrink-0 mt-1 glitch-pulse"></div>
                                <p className="text-[#F2F2F2] text-sm font-medium">Launch <span className="text-[#16A349] font-black">CrackedDAO</span> early contributor program</p>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="border-2 border-[#00FF66] w-4 h-4 bg-[#00FF66] flex-shrink-0 mt-1 glitch-pulse"></div>
                                <p className="text-[#F2F2F2] text-sm font-medium">Activate cross-product reward systems and marketplace mechanics</p>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="border-2 border-[#16A349] w-4 h-4 bg-[#16A349] flex-shrink-0 mt-1 glitch-pulse"></div>
                                <p className="text-[#F2F2F2] text-sm font-medium">Form strategic partnerships with blockchains, guilds, and regional hubs</p>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="border-2 border-[#00FF66] w-4 h-4 bg-[#00FF66] flex-shrink-0 mt-1 glitch-pulse"></div>
                                <p className="text-[#F2F2F2] text-sm font-medium">Host the first Cracked Community Event / online summit</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Roadmap;

