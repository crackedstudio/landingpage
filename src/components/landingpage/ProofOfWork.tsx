import CountUpValue from "../CountUpValue";

const stats = [
    { end: 9314, label: "Unique on-chain users (Tweetle + Blokaz)", prefix: "", suffix: "" },
    { end: 50745, label: "Total contract interactions", prefix: "", suffix: "" },
    { end: 14059, label: "Blokaz players onboarded", prefix: "", suffix: "" },
    { end: 880, label: "Blokaz active players (last 7 days)", prefix: "", suffix: "" },
    { end: 2811, label: "Tweetle games created", prefix: "", suffix: "" },
    { end: 5, label: "Chains with live deployments", prefix: "", suffix: "" },
    { end: 100, label: "Developers mentored across Africa", prefix: "", suffix: "+" },
];

const validators = [
    "Starknet",
    "CoreDAO",
    "Avalanche",
    "Gates Foundation",
    "BlockheaderWeb3",
    "BlockFuseLabs",
];

const ProofOfWork = () => {
    return (
        <section id="traction" className="py-20 lg:py-32 bg-black relative overflow-hidden">
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
                <div className="border-2 border-[#16A349] p-8 mb-12 bg-black text-center relative glitch-box overflow-hidden">
                    <div className="absolute inset-0 glitch-scan"></div>
                    <div className="absolute top-4 right-4 opacity-10 watermark-flicker">
                        <img src="/assets/svg/watermark-black-white.svg" alt="" className="w-20 h-20" />
                    </div>
                    <p className="text-[#16A349] text-sm md:text-base font-black uppercase tracking-[0.2em] mb-4 relative z-10">
                        PROOF OF WORK
                    </p>
                    <h2 className="text-5xl md:text-6xl font-black mb-4 text-[#F2F2F2] relative z-10 glitch-text">
                        THE NUMBERS ARE <span className="text-[#16A349] glitch-word" data-text="ON-CHAIN">ON-CHAIN</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 mb-8">
                    {stats.map((stat, index) => (
                        <div
                            key={stat.label}
                            className={`border-2 ${index % 2 === 0 ? "border-[#16A349]" : "border-[#00FF66]"} p-6 bg-black text-center glitch-box relative overflow-hidden`}
                        >
                            <div className="absolute inset-0 glitch-scan"></div>
                            <div className={`text-4xl md:text-5xl font-black mb-3 relative z-10 ${index % 2 === 0 ? "text-[#16A349]" : "text-[#00FF66]"}`}>
                                <CountUpValue end={stat.end} prefix={stat.prefix} suffix={stat.suffix} />
                            </div>
                            <p className="text-[#F2F2F2] text-sm font-medium uppercase tracking-wide relative z-10">
                                {stat.label}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="border-2 border-[#16A349] p-4 bg-black glitch-box relative overflow-hidden">
                    <div className="absolute inset-0 glitch-scan"></div>
                    <div className="marquee-track whitespace-nowrap relative z-10 text-[#F2F2F2] font-black uppercase tracking-[0.2em]">
                        {validators.concat(validators).map((item, index) => (
                            <span key={`${item}-${index}`} className="inline-block mr-10">
                                {index === 0 ? "Backed and validated by:" : item}
                                {index === 0 ? "" : ""}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProofOfWork;
