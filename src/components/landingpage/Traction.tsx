const Traction = () => {
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
                        TRACTION & <span className="text-[#16A349] glitch-word" data-text="VALIDATION">VALIDATION</span>
                    </h2>
                    <p className="text-[#F2F2F2] text-lg font-medium max-w-2xl mx-auto relative z-10">
                        Tweetle provides concrete evidence that our approach works
                    </p>
                </div>

                {/* Metrics Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
                    <div className="border-2 border-[#16A349] p-6 bg-black text-center glitch-box relative overflow-hidden">
                        <div className="absolute inset-0 glitch-scan"></div>
                        <div className="text-4xl md:text-5xl font-black text-[#16A349] mb-2 relative z-10">170</div>
                        <p className="text-[#F2F2F2] text-sm font-medium relative z-10 uppercase">Unique On-Chain Users</p>
                    </div>
                    <div className="border-2 border-[#00FF66] p-6 bg-black text-center glitch-box relative overflow-hidden">
                        <div className="absolute inset-0 glitch-scan"></div>
                        <div className="text-4xl md:text-5xl font-black text-[#00FF66] mb-2 relative z-10">16,595</div>
                        <p className="text-[#F2F2F2] text-sm font-medium relative z-10 uppercase">Total Contract Calls</p>
                    </div>
                    <div className="border-2 border-[#16A349] p-6 bg-black text-center glitch-box relative overflow-hidden">
                        <div className="absolute inset-0 glitch-scan"></div>
                        <div className="text-4xl md:text-5xl font-black text-[#16A349] mb-2 relative z-10">~98</div>
                        <p className="text-[#F2F2F2] text-sm font-medium relative z-10 uppercase">Transactions Per User</p>
                    </div>
                    <div className="border-2 border-[#00FF66] p-6 bg-black text-center glitch-box relative overflow-hidden">
                        <div className="absolute inset-0 glitch-scan"></div>
                        <div className="text-4xl md:text-5xl font-black text-[#00FF66] mb-2 relative z-10">2,811</div>
                        <p className="text-[#F2F2F2] text-sm font-medium relative z-10 uppercase">Games Created</p>
                    </div>
                    <div className="border-2 border-[#16A349] p-6 bg-black text-center glitch-box relative overflow-hidden">
                        <div className="absolute inset-0 glitch-scan"></div>
                        <div className="text-4xl md:text-5xl font-black text-[#16A349] mb-2 relative z-10">~16.5</div>
                        <p className="text-[#F2F2F2] text-sm font-medium relative z-10 uppercase">Games Per User</p>
                    </div>
                    <div className="border-2 border-[#00FF66] p-6 bg-black text-center glitch-box relative overflow-hidden">
                        <div className="absolute inset-0 glitch-scan"></div>
                        <div className="text-4xl md:text-5xl font-black text-[#00FF66] mb-2 relative z-10">250+</div>
                        <p className="text-[#F2F2F2] text-sm font-medium relative z-10 uppercase">Peak Games/Day</p>
                    </div>
                </div>

                {/* Key Narratives */}
                <div className="border-2 border-[#16A349] p-8 bg-black mb-8 glitch-box relative overflow-hidden">
                    <div className="absolute inset-0 glitch-scan"></div>
                    <h3 className="text-3xl md:text-4xl font-black mb-6 text-center text-[#16A349] uppercase relative z-10 glitch-text">
                        KEY SIGNALS
                    </h3>
                    <div className="space-y-4 relative z-10">
                        <div className="border-2 border-[#16A349] p-4 bg-black glitch-box relative overflow-hidden">
                            <div className="absolute inset-0 glitch-scan"></div>
                            <div className="flex items-start gap-4 relative z-10">
                                <div className="border-2 border-[#16A349] w-6 h-6 bg-[#16A349] flex-shrink-0 glitch-pulse"></div>
                                <div>
                                    <h4 className="text-lg font-black mb-2 text-[#16A349] uppercase">Deep Engagement</h4>
                                    <p className="text-[#F2F2F2] text-sm font-medium">
                                        ~98 transactions per user on average → deep engagement, not shallow trials. Early cohorts show "super-user" behavior and repeated game creation.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="border-2 border-[#00FF66] p-4 bg-black glitch-box relative overflow-hidden">
                            <div className="absolute inset-0 glitch-scan"></div>
                            <div className="flex items-start gap-4 relative z-10">
                                <div className="border-2 border-[#00FF66] w-6 h-6 bg-[#00FF66] flex-shrink-0 glitch-pulse"></div>
                                <div>
                                    <h4 className="text-lg font-black mb-2 text-[#00FF66] uppercase">Stickiness</h4>
                                    <p className="text-[#F2F2F2] text-sm font-medium">
                                        20–25 DAU during peaks with mini-spikes aligning to promotion. ~16.5 games per user average — exceptionally high for prediction/mini-games.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="border-2 border-[#16A349] p-4 bg-black glitch-box relative overflow-hidden">
                            <div className="absolute inset-0 glitch-scan"></div>
                            <div className="flex items-start gap-4 relative z-10">
                                <div className="border-2 border-[#16A349] w-6 h-6 bg-[#16A349] flex-shrink-0 glitch-pulse"></div>
                                <div>
                                    <h4 className="text-lg font-black mb-2 text-[#16A349] uppercase">Virality</h4>
                                    <p className="text-[#F2F2F2] text-sm font-medium">
                                        Every game is a shareable unit that drives new installs and players. Social sharing aligns tightly with on-chain activity, implying high K-factor during campaigns.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="border-2 border-[#00FF66] p-4 bg-black glitch-box relative overflow-hidden">
                            <div className="absolute inset-0 glitch-scan"></div>
                            <div className="flex items-start gap-4 relative z-10">
                                <div className="border-2 border-[#00FF66] w-6 h-6 bg-[#00FF66] flex-shrink-0 glitch-pulse"></div>
                                <div>
                                    <h4 className="text-lg font-black mb-2 text-[#00FF66] uppercase">Early PMF</h4>
                                    <p className="text-[#F2F2F2] text-sm font-medium">
                                        Deep retention, repeatable spikes with distribution, and viral share mechanics indicate early product-market fit. Tweetle validates the Cracked thesis: culturally driven, low-friction web3 experiences can reach and retain users.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Traction;

