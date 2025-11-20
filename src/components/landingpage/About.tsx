import {
    GamesIcon,
    AppsIcon,
    ToolsIcon,
} from "../BrutalistIcons";

const About = () => {
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
                    transform: "rotate(-0.3deg)",
                }}
            ></div>

            <div className="container-responsive relative z-10">
                {/* Main Content - Glitch-Tech */}
                <div className="grid lg:grid-cols-2 gap-8 mb-12">
                    {/* Left Column - Offset */}
                    <div className="space-y-6 transform -rotate-0.5 offset-left">
                        <div className="border-4 border-[#16A349] p-8 bg-black relative glitch-box overflow-hidden">
                            <div className="absolute inset-0 glitch-scan"></div>
                            <div className="absolute top-4 right-4 opacity-10 watermark-flicker">
                                <img src="/assets/svg/watermark-black-white.svg" alt="" className="w-16 h-16" />
                            </div>
                            <h2 className="text-5xl md:text-6xl font-black mb-6 text-[#F2F2F2] relative z-10 glitch-text">
                                WHO WE ARE
                            </h2>
                            <h3 className="text-3xl md:text-4xl font-black mb-6 text-[#16A349] relative z-10 glitch-text">
                                GAMES + APPS + TOOLS
                            </h3>
                        </div>

                        <div className="border-2 border-[#16A349] p-6 bg-black glitch-box relative overflow-hidden">
                            <div className="absolute inset-0 glitch-scan"></div>
                            <p className="text-lg md:text-xl text-[#F2F2F2] leading-relaxed font-medium mb-6 relative z-10">
                                Cracked Studios is a web3 products company creating the next generation of decentralized games, consumer applications, and developer tooling. Our mission is simple and ambitious:{" "}
                                <span className="text-[#00FF66] font-black glitch-hover">make web3 fun, accessible, and culturally resonant for the next billion users</span>.
                            </p>
                            <p className="text-lg md:text-xl text-[#F2F2F2] leading-relaxed font-medium mb-4 relative z-10">
                                We are a lean, execution-driven team based in Nigeria building global products that combine frictionless onboarding, sticky gameplay, and a modern content-first growth engine. Our work centers on the idea that{" "}
                                <span className="text-[#16A349] font-black glitch-hover">adoption happens when technology is wrapped in culture</span>, not when complexity is doubled down.
                            </p>
                            <p className="text-lg md:text-xl text-[#F2F2F2] leading-relaxed font-medium relative z-10">
                                Philosophy:{" "}
                                <span className="text-[#00FF66] font-black glitch-hover">Lower the barriers, amplify the vibes, and keep people coming back</span>.
                            </p>
                        </div>

                        {/* Category Tags - Glitch Style */}
                        <div className="grid grid-cols-3 gap-4">
                            <div className="border-2 border-[#16A349] p-4 bg-[#16A349] text-black text-center glitch-box relative overflow-hidden">
                                <div className="absolute inset-0 glitch-scan"></div>
                                <div className="flex justify-center mb-2 relative z-10">
                                    <GamesIcon className="w-8 h-8" color="black" />
                                </div>
                                <span className="font-black text-sm uppercase relative z-10">Games</span>
                            </div>
                            <div className="border-2 border-[#00FF66] p-4 bg-[#00FF66] text-black text-center glitch-box relative overflow-hidden">
                                <div className="absolute inset-0 glitch-scan"></div>
                                <div className="flex justify-center mb-2 relative z-10">
                                    <AppsIcon className="w-8 h-8" color="black" />
                                </div>
                                <span className="font-black text-sm uppercase relative z-10">Apps</span>
                            </div>
                            <div className="border-2 border-[#16A349] p-4 bg-[#16A349] text-black text-center glitch-box relative overflow-hidden">
                                <div className="absolute inset-0 glitch-scan"></div>
                                <div className="flex justify-center mb-2 relative z-10">
                                    <ToolsIcon className="w-8 h-8" color="black" />
                                </div>
                                <span className="font-black text-sm uppercase relative z-10">Tools</span>
                            </div>
                        </div>

                        <button className="w-full border-2 border-[#16A349] px-8 py-4 bg-black text-[#00FF66] font-black text-lg uppercase tracking-wider glitch-button glitch-button-outline relative group overflow-hidden">
                            <div className="absolute inset-0 glitch-scan"></div>
                            <span className="relative z-10">EXPLORE ECOSYSTEM</span>
                            <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-30 transition-opacity">
                                <img src="/assets/svg/icon-green-black.svg" alt="" className="w-6 h-6" />
                            </div>
                        </button>
                    </div>

                    {/* Right Column - Founding Team - Offset */}
                    <div className="space-y-6 transform rotate-0.5 offset-right">
                        <div className="border-2 border-[#16A349] p-6 bg-black glitch-box relative overflow-hidden">
                            <div className="absolute inset-0 glitch-scan"></div>
                            <h3 className="text-3xl md:text-4xl font-black mb-8 text-center text-[#16A349] relative z-10 glitch-text">
                                FOUNDING TEAM
                            </h3>
                            <div className="space-y-4 relative z-10">
                                <div className="border-2 border-[#16A349] p-4 bg-black glitch-box relative overflow-hidden">
                                    <div className="absolute inset-0 glitch-scan"></div>
                                    <h4 className="font-black text-lg mb-2 text-[#16A349] uppercase relative z-10">
                                        ABDULSAMAD SADIQ
                                    </h4>
                                    <p className="text-[#00FF66] text-sm font-black mb-2 relative z-10">Co-Founder</p>
                                    <p className="text-[#F2F2F2] text-sm font-medium relative z-10">
                                        Product & community lead. Deep experience shipping user-facing web3 products and community growth across Africa.
                                    </p>
                                </div>
                                <div className="border-2 border-[#00FF66] p-4 bg-black glitch-box relative overflow-hidden">
                                    <div className="absolute inset-0 glitch-scan"></div>
                                    <h4 className="font-black text-lg mb-2 text-[#00FF66] uppercase relative z-10">
                                        MANOAH LUKA
                                    </h4>
                                    <p className="text-[#16A349] text-sm font-black mb-2 relative z-10">Co-Founder</p>
                                    <p className="text-[#F2F2F2] text-sm font-medium relative z-10">
                                        Engineering lead. Systems, smart contract design, and rapid prototyping experience; hacker/hackathon background.
                                    </p>
                                </div>
                                <div className="border-2 border-[#16A349] p-4 bg-black glitch-box relative overflow-hidden">
                                    <div className="absolute inset-0 glitch-scan"></div>
                                    <h4 className="font-black text-lg mb-2 text-[#16A349] uppercase relative z-10">
                                        CALEB PETERSON
                                    </h4>
                                    <p className="text-[#00FF66] text-sm font-black mb-2 relative z-10">Co-Founder</p>
                                    <p className="text-[#F2F2F2] text-sm font-medium relative z-10">
                                        Design & growth lead. Product design, brand, and marketing execution focused on cultural resonance and viral distribution.
                                    </p>
                                </div>
                            </div>
                            <p className="text-[#F2F2F2] text-sm font-medium mt-4 relative z-10 text-center">
                                The team has won multiple hackathons collectively, mentored 100+ developers across bootcamps, and has a proven track record of shipping fast, iterating based on feedback, and driving virality.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Highlights Section - Glitch Style */}
                <div className="border-2 border-[#16A349] p-8 bg-black mb-8 glitch-box relative overflow-hidden">
                    <div className="absolute inset-0 glitch-scan"></div>
                    <h3 className="text-4xl md:text-5xl font-black mb-4 text-center text-[#16A349] uppercase relative z-10 glitch-text">
                        WHY CRACKED STUDIOS?
                    </h3>
                    <p className="text-[#F2F2F2] text-center font-medium max-w-2xl mx-auto mb-8 relative z-10">
                        Key differentiators that set us apart in the web3 ecosystem
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="border-2 border-[#16A349] bg-black glitch-box relative overflow-hidden">
                        <div className="absolute inset-0 glitch-scan"></div>
                        <div className="p-6 relative z-10">
                            <div className="border-2 border-[#16A349] p-2 mb-4 bg-[#16A349] text-black text-center">
                                <p className="font-black text-sm uppercase">PROVEN TRACTION & PMF</p>
                            </div>
                            <h4 className="text-xl font-black mb-2 text-[#16A349] uppercase">
                                VALIDATED MODEL
                            </h4>
                            <p className="text-[#F2F2F2] text-sm font-medium">
                                Tweetle shows the model works: viral mechanics + sticky gameplay with early product-market fit.
                            </p>
                        </div>
                    </div>

                    <div className="border-2 border-[#00FF66] bg-black glitch-box relative overflow-hidden">
                        <div className="absolute inset-0 glitch-scan"></div>
                        <div className="p-6 relative z-10">
                            <div className="border-2 border-[#00FF66] p-2 mb-4 bg-[#00FF66] text-black text-center">
                                <p className="font-black text-sm uppercase">ECOSYSTEM MINDSET</p>
                            </div>
                            <h4 className="text-xl font-black mb-2 text-[#00FF66] uppercase">
                                MULTI-PRODUCT PIPELINE
                            </h4>
                            <p className="text-[#F2F2F2] text-sm font-medium">
                                Multi-product pipeline increases optionality and cross-sell opportunities across games, apps, and tools.
                            </p>
                        </div>
                    </div>

                    <div className="border-2 border-[#16A349] bg-black glitch-box relative overflow-hidden">
                        <div className="absolute inset-0 glitch-scan"></div>
                        <div className="p-6 relative z-10">
                            <div className="border-2 border-[#16A349] p-2 mb-4 bg-[#16A349] text-black text-center">
                                <p className="font-black text-sm uppercase">CULTURE + ENGINEERING</p>
                            </div>
                            <h4 className="text-xl font-black mb-2 text-[#16A349] uppercase">
                                RARE COMBINATION
                            </h4>
                            <p className="text-[#F2F2F2] text-sm font-medium">
                                Engineered products with viral cultural packaging. African talent, global products. Based in Nigeria, built for global audiences.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
