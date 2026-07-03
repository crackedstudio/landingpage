import CountUpValue from "./CountUpValue";
import Reveal from "./Reveal";

const tractionStats = [
    { value: 9314, label: "Unique on-chain users (Tweetle + Blokaz)", prefix: "", suffix: "" },
    { value: 50745, label: "Total contract interactions", prefix: "", suffix: "" },
    { value: 14059, label: "Blokaz players onboarded", prefix: "", suffix: "" },
    { value: 880, label: "Blokaz active players (last 7 days)", prefix: "", suffix: "" },
    { value: 2811, label: "Tweetle games created", prefix: "", suffix: "" },
    { value: 5, label: "Chains with live deployments", prefix: "", suffix: "" },
    { value: 100, label: "Developers mentored across Africa", prefix: "", suffix: "+" },
];

const validators = [
    "Starknet",
    "CoreDAO",
    "Avalanche",
    "Gates Foundation",
    "BlockheaderWeb3",
    "BlockFuseLabs",
];

const Traction = () => {
    return (
        <section id="traction" className="section-block">
            <div className="site-shell">
                <Reveal>
                    <div className="section-heading">
                        <p className="section-label">Proof Of Work</p>
                        <h2>The numbers are on-chain.</h2>
                    </div>
                </Reveal>

                <div className="traction-grid">
                    {tractionStats.map((stat, index) => (
                        <Reveal key={stat.label} delay={index * 55}>
                            <article className="traction-card">
                                <p className="traction-value">
                                    <CountUpValue
                                        end={stat.value}
                                        prefix={stat.prefix}
                                        suffix={stat.suffix}
                                    />
                                </p>
                                <p className="traction-label">{stat.label}</p>
                            </article>
                        </Reveal>
                    ))}
                </div>
            </div>

            <div className="marquee-wrap" aria-label="Validation partners">
                <div className="marquee-track">
                    {[...validators, ...validators].map((item, index) => (
                        <span key={`${item}-${index}`}>{item}</span>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Traction;
