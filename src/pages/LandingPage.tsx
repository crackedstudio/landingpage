import { useEffect, useState } from "react";
import CountUpValue from "../components/CountUpValue";
import ProductsShowcase from "../components/landingpage/ProductsShowcase";
import RigShowcase from "../components/landingpage/RigShowcase";
import ProofOfWork from "../components/landingpage/ProofOfWork";
import HumanTeam from "../components/landingpage/HumanTeam";
import MarketOpportunity from "../components/landingpage/MarketOpportunity";
import { TwitterIcon } from "../components/BrutalistIcons";

const heroStats = [
    { value: 6, label: "Live Products", prefix: "", suffix: "" },
    { value: 5, label: "Chains Deployed", prefix: "", suffix: "" },
    { value: 11, label: "AI Signals (The Rig)", prefix: "", suffix: "" },
    { value: 100, label: "Developers Mentored", prefix: "", suffix: "+" },
];

const heroSignals = ["Vanta", "Flare", "Prism", "Forge", "Echo", "Spark"];

const LandingPage = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileOpen, setIsMobileOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setIsScrolled(window.scrollY > 24);

        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });

        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const navLinks = [
        { label: "Products", href: "#products" },
        { label: "The Rig", href: "#rig" },
        { label: "Team", href: "#team" },
    ];

    return (
        <div className="min-h-screen overflow-hidden relative bg-black glitch-container">
            <div className="noise-overlay"></div>
            <div className="scanlines"></div>
            <div className="crt-overlay"></div>

            <header className={`sticky-nav ${isScrolled ? "sticky-nav-scrolled" : ""}`}>
                <div className="container-responsive relative z-20">
                    <nav className="border-2 border-[#16A349] bg-black/90 backdrop-blur-md px-4 py-4 md:px-6 glitch-box relative overflow-hidden">
                        <div className="absolute inset-0 glitch-scan"></div>
                        <div className="flex items-center justify-between gap-4 relative z-10">
                            <a href="#top" className="text-[#F2F2F2] font-black text-lg md:text-2xl uppercase tracking-[0.18em] glitch-text-hover">
                                CRACKED STUDIOS
                            </a>

                            <div className="hidden md:flex items-center gap-3">
                                {navLinks.map((link) => (
                                    <a
                                        key={link.label}
                                        href={link.href}
                                        className="border-2 border-[#16A349] px-4 py-3 bg-black text-[#00FF66] font-black text-sm uppercase tracking-wider glitch-text-hover"
                                    >
                                        {link.label}
                                    </a>
                                ))}
                            </div>

                            <div className="hidden lg:flex items-center gap-4">
                                <span className={`text-[#F2F2F2] text-xs uppercase tracking-[0.25em] font-mono transition-opacity duration-300 ${isScrolled ? "opacity-100" : "opacity-70"}`}>
                                    Play. Build. Belong.
                                </span>
                            </div>

                            <button
                                type="button"
                                className="md:hidden border-2 border-[#16A349] px-4 py-3 bg-black text-[#00FF66] glitch-hover"
                                onClick={() => setIsMobileOpen((current) => !current)}
                                aria-label="Toggle navigation"
                            >
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            </button>
                        </div>

                        {isMobileOpen ? (
                            <div className="md:hidden grid gap-3 mt-4 relative z-10">
                                {navLinks.map((link) => (
                                    <a
                                        key={link.label}
                                        href={link.href}
                                        onClick={() => setIsMobileOpen(false)}
                                        className="border-2 border-[#16A349] px-4 py-3 bg-black text-[#00FF66] font-black text-sm uppercase tracking-wider"
                                    >
                                        {link.label}
                                    </a>
                                ))}
                            </div>
                        ) : null}
                    </nav>
                </div>
            </header>

            <section id="top" className="relative min-h-screen bg-black overflow-hidden hero-section">
                <div
                    className="absolute inset-0 grid-bg"
                    style={{
                        backgroundImage: `
                        linear-gradient(#16A349 1px, transparent 1px),
                        linear-gradient(90deg, #16A349 1px, transparent 1px)
                    `,
                        backgroundSize: "48px 48px",
                        opacity: 0.08,
                        transform: "rotate(0.5deg)",
                    }}
                ></div>

                <div className="absolute inset-0 fractured-shapes">
                    <div className="fracture fracture-1"></div>
                    <div className="fracture fracture-2"></div>
                    <div className="fracture fracture-3"></div>
                </div>

                <div className="container-responsive relative z-10 min-h-screen flex flex-col pt-8 md:pt-10">
                    <div className="flex-1 grid lg:grid-cols-2 gap-8 items-center hero-content-grid">
                        <div className="space-y-6 transform -rotate-1 offset-left">
                            <div className="border-4 border-[#16A349] p-8 bg-black cube-container glitch-box relative overflow-hidden">
                                <div className="absolute inset-0 glitch-scan"></div>
                                <div className="cube-3d-wrapper">
                                    <img
                                        src="/assets/svg/icon-green-white.svg"
                                        alt="Cracked Studios Logo"
                                        className="w-full max-w-xs mx-auto cube-rotate"
                                    />
                                </div>
                                <div className="fragment fragment-1"></div>
                                <div className="fragment fragment-2"></div>
                                <div className="fragment fragment-3"></div>
                            </div>

                            <div className="border-2 border-[#16A349] p-6 bg-black glitch-box wordmark-container relative overflow-hidden">
                                <div className="absolute inset-0 glitch-scan"></div>
                                <img
                                    src="/assets/svg/wordmark-white.svg"
                                    alt="Cracked Studios"
                                    className="w-full h-auto relative z-10 wordmark-glitch"
                                />
                            </div>

                            <div className="border-2 border-[#16A349] p-6 bg-black glitch-box relative overflow-hidden">
                                <div className="absolute inset-0 glitch-scan"></div>
                                <p className="text-[#16A349] text-sm font-black uppercase tracking-[0.2em] mb-3 relative z-10">
                                    Lagos, Nigeria · Global Products
                                </p>
                                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 relative z-10">
                                    {heroSignals.map((signal, index) => (
                                        <div key={signal} className={`border-2 ${index % 2 === 0 ? "border-[#16A349]" : "border-[#00FF66]"} p-3 bg-black`}>
                                            <p className={`text-sm font-black uppercase ${index % 2 === 0 ? "text-[#16A349]" : "text-[#00FF66]"}`}>{signal}</p>
                                            <p className="text-[#F2F2F2] text-xs font-medium uppercase">Signal Active</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="space-y-6 transform rotate-1 offset-right">
                            <div className="border-4 border-[#16A349] p-8 bg-black relative glitch-box hero-text-container overflow-hidden">
                                <div className="absolute inset-0 glitch-scan"></div>
                                <div className="absolute top-4 right-4 opacity-10 watermark-flicker">
                                    <img
                                        src="/assets/svg/watermark-black-white.svg"
                                        alt=""
                                        className="w-24 h-24"
                                    />
                                </div>
                                <p className="text-[#16A349] text-sm md:text-base font-black uppercase tracking-[0.24em] mb-4 relative z-10">
                                    Play. Build. Belong.
                                </p>
                                <h1 className="text-6xl md:text-8xl lg:text-9xl font-black leading-none relative z-10 glitch-text">
                                    <span className="block text-[#00FF66] mb-2 glitch-word" data-text="THE STUDIO THAT">
                                        THE STUDIO THAT
                                    </span>
                                    <span className="block text-[#16A349] glitch-word" data-text="DOESN'T SLEEP.">
                                        DOESN&apos;T SLEEP.
                                    </span>
                                </h1>
                            </div>

                            <div className="border-2 border-[#16A349] p-6 bg-black glitch-box description-box relative overflow-hidden">
                                <div className="absolute inset-0 glitch-scan"></div>
                                <p className="text-lg md:text-xl text-[#F2F2F2] leading-relaxed font-medium relative z-10">
                                    Cracked Studios is a human-AI hybrid web3 studio building games, consumer apps, DeFi products, and developer infrastructure.
                                </p>
                                <p className="text-lg md:text-xl text-[#F2F2F2] leading-relaxed font-medium mt-4 relative z-10">
                                    Six live products. Eleven AI agents. One team that ships.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <a
                                    href="#products"
                                    className="border-2 border-[#16A349] px-8 py-4 bg-[#16A349] text-black font-black text-lg uppercase tracking-wider glitch-button relative group overflow-hidden text-center"
                                >
                                    <div className="absolute inset-0 glitch-scan"></div>
                                    <span className="relative z-10">EXPLORE PRODUCTS</span>
                                </a>
                            </div>

                            <div className="grid grid-cols-2 xl:grid-cols-4 gap-4">
                                {heroStats.map((stat, index) => (
                                    <div
                                        key={stat.label}
                                        className={`border-2 ${index % 2 === 0 ? "border-[#16A349]" : "border-[#00FF66]"} p-4 bg-black glitch-box relative overflow-hidden`}
                                    >
                                        <div className="absolute inset-0 glitch-scan"></div>
                                        <div className={`text-3xl md:text-4xl font-black mb-2 relative z-10 ${index % 2 === 0 ? "text-[#16A349]" : "text-[#00FF66]"}`}>
                                            <CountUpValue end={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
                                        </div>
                                        <p className="text-[#F2F2F2] text-xs font-medium uppercase tracking-wide relative z-10">
                                            {stat.label}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 scroll-indicator">
                        <div className="border-2 border-[#16A349] w-8 h-12 bg-black flex items-center justify-center glitch-box relative overflow-hidden">
                            <div className="absolute inset-0 glitch-scan"></div>
                            <div className="w-2 h-4 bg-[#00FF66] animate-bounce glitch-pulse"></div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="relative">
                <ProductsShowcase />
                <RigShowcase />
                <ProofOfWork />
                <HumanTeam />
                <MarketOpportunity />
            </div>

            <footer className="relative bg-black py-20">
                <div className="container-responsive">
                    <div className="border-4 border-[#16A349] p-10 mb-8 bg-black relative glitch-box">
                        <div className="absolute inset-0 glitch-scan"></div>
                        <div className="absolute top-8 right-8 opacity-5 watermark-flicker">
                            <img
                                src="/assets/svg/watermark-black-white.svg"
                                alt=""
                                className="w-32 h-32"
                            />
                        </div>
                        <div className="grid md:grid-cols-3 gap-8 relative z-10">
                            <div>
                                <h2 className="text-4xl md:text-5xl font-black mb-4 text-[#F2F2F2] glitch-text">
                                    CRACKED STUDIOS
                                </h2>
                                <p className="text-[#00FF66] text-lg font-black uppercase mb-2">
                                    Play. Build. Belong.
                                </p>
                                <p className="text-[#F2F2F2] text-base font-medium">
                                    Lagos, Nigeria · Global Products
                                </p>
                            </div>

                            <div>
                                <p className="text-[#16A349] text-lg font-black uppercase mb-4">PRODUCTS</p>
                                <div className="grid gap-3">
                                    <a href="https://blokaz.xyz" target="_blank" rel="noopener noreferrer" className="text-[#F2F2F2] font-medium hover:text-[#00FF66]">
                                        Blokaz
                                    </a>
                                    <a href="https://uzoza.xyz" target="_blank" rel="noopener noreferrer" className="text-[#F2F2F2] font-medium hover:text-[#00FF66]">
                                        Uzoza
                                    </a>
                                    <a href="https://otterpay.xyz" target="_blank" rel="noopener noreferrer" className="text-[#F2F2F2] font-medium hover:text-[#00FF66]">
                                        Otterpay
                                    </a>
                                    <a href="https://bitdrum.xyz" target="_blank" rel="noopener noreferrer" className="text-[#F2F2F2] font-medium hover:text-[#00FF66]">
                                        BitDrum
                                    </a>
                                    <a href="https://noahprotocol.xyz" target="_blank" rel="noopener noreferrer" className="text-[#F2F2F2] font-medium hover:text-[#00FF66]">
                                        Noah Protocol
                                    </a>
                                </div>
                            </div>

                            <div>
                                <p className="text-[#16A349] text-lg font-black uppercase mb-4">CONNECT</p>
                                <div className="grid gap-3">
                                    <a href="https://x.com/TweetleHQ" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-[#F2F2F2] font-medium hover:text-[#00FF66]">
                                        <TwitterIcon className="w-5 h-5" color="currentColor" />
                                        Twitter/X
                                    </a>
                                    <a href="https://github.com/Crackedstudio/" target="_blank" rel="noopener noreferrer" className="text-[#F2F2F2] font-medium hover:text-[#00FF66]">
                                        GitHub
                                    </a>
                                    <a href="https://t.me/+sRQ1KKINUzlhZjc8" target="_blank" rel="noopener noreferrer" className="text-[#F2F2F2] font-medium hover:text-[#00FF66]">
                                        Telegram
                                    </a>
                                    <a href="mailto:support@crackedstudios.xyz" className="text-[#F2F2F2] font-medium hover:text-[#00FF66]">
                                        support@crackedstudios.xyz
                                    </a>
                                    <a href="mailto:otaiki@crackedstudios.xyz" className="text-[#F2F2F2] font-medium hover:text-[#00FF66]">
                                        otaiki@crackedstudios.xyz
                                    </a>
                                    <a href="mailto:eagle@crackedstudios.xyz" className="text-[#F2F2F2] font-medium hover:text-[#00FF66]">
                                        eagle@crackedstudios.xyz
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="border-t-2 border-[#16A349] pt-8 text-center">
                        <p className="text-[#16A349] font-black text-lg uppercase mb-2">
                            © 2026 CRACKED STUDIOS · BUILT WITH THE RIG
                        </p>
                        <p className="text-[#F2F2F2] font-medium">
                            All products are live or in active development.
                        </p>
                    </div>
                </div>
            </footer>


            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bungee+Shade&family=Orbitron:wght@400;500;600;700;800;900&family=Press+Start+2P&family=Space+Grotesk:wght@400;500;600;700&display=swap');

        * {
          font-family: 'Space Grotesk', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', sans-serif;
        }

        h1, h2, h3, h4, h5, h6, .font-display {
          font-family: 'Bungee Shade', 'Orbitron', 'Space Grotesk', sans-serif;
          font-weight: 400;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }

        .font-black, h1, h2 {
          font-weight: 700;
        }

        .font-mono {
          font-family: 'Orbitron', monospace;
        }

        .container-responsive {
          padding-left: 1.25rem;
          padding-right: 1.25rem;
          max-width: 1280px;
          margin-left: auto;
          margin-right: auto;
        }

        .sticky-nav {
          position: sticky;
          top: 0;
          z-index: 40;
          padding-top: 1rem;
          transition: all 0.3s ease;
        }

        .sticky-nav-scrolled {
          padding-top: 0.5rem;
        }

        .glitch-container {
          position: relative;
        }

        .noise-overlay {
          position: fixed;
          inset: 0;
          pointer-events: none;
          opacity: 0.08;
          background-image:
            radial-gradient(circle at 20% 20%, rgba(255,255,255,0.9) 0 0.7px, transparent 0.7px),
            radial-gradient(circle at 80% 40%, rgba(255,255,255,0.7) 0 0.7px, transparent 0.7px);
          background-size: 20px 20px, 26px 26px;
          mix-blend-mode: screen;
        }

        .scanlines {
          position: fixed;
          inset: 0;
          pointer-events: none;
          background: linear-gradient(to bottom, rgba(255,255,255,0.025), rgba(255,255,255,0) 8%, rgba(255,255,255,0.02) 16%);
          background-size: 100% 7px;
          opacity: 0.18;
        }

        .crt-overlay {
          position: fixed;
          inset: 0;
          pointer-events: none;
          box-shadow: inset 0 0 120px rgba(0, 0, 0, 0.55);
        }

        .glitch-box {
          position: relative;
          overflow: hidden;
        }

        .glitch-box::before,
        .glitch-box::after {
          content: '';
          position: absolute;
          inset: 0;
          background: inherit;
          clip-path: inset(0 0 0 0);
        }

        .glitch-box:hover::before {
          animation: glitch-1 0.3s infinite;
          left: -2px;
          text-shadow: 2px 0 #00FF66;
        }

        .glitch-box:hover::after {
          animation: glitch-2 0.3s infinite;
          left: 2px;
          text-shadow: -2px 0 #16A349;
        }

        .glitch-scan {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 2px;
          background: linear-gradient(90deg, transparent, #00FF66, transparent);
          animation: scanLine 3s linear infinite;
          opacity: 0.6;
        }

        .cube-rotate {
          animation: cubeRotate 20s linear infinite;
          transform-style: preserve-3d;
        }

        .cube-container:hover .cube-rotate {
          animation-duration: 5s;
        }

        .fragment {
          position: absolute;
          width: 20px;
          height: 20px;
          background: #00FF66;
          opacity: 0;
          animation: fragmentFloat 4s ease-in-out infinite;
        }

        .fragment-1 { top: 20%; left: 10%; animation-delay: 0s; }
        .fragment-2 { top: 60%; right: 15%; animation-delay: 1.3s; }
        .fragment-3 { bottom: 20%; left: 20%; animation-delay: 2.6s; }

        .glitch-text {
          position: relative;
        }

        .glitch-word {
          position: relative;
          display: inline-block;
        }

        .glitch-word::before,
        .glitch-word::after {
          content: attr(data-text);
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }

        .glitch-word::before {
          left: -2px;
          text-shadow: 2px 0 #00FF66;
          animation: glitch-text-1 3s infinite;
        }

        .glitch-word::after {
          left: 2px;
          text-shadow: -2px 0 #16A349;
          animation: glitch-text-2 3s infinite;
        }

        .wordmark-glitch {
          animation: wordmarkFlicker 4s ease-in-out infinite;
        }

        .watermark-flicker {
          animation: watermarkFlicker 3s ease-in-out infinite;
        }

        .glitch-hover:hover {
          animation: glitch-hover 0.3s;
        }

        .glitch-text-hover:hover {
          text-shadow: 2px 0 #00FF66, -2px 0 #16A349, 0 2px #00FF66, 0 -2px #16A349;
          animation: glitch-hover 0.3s;
        }

        .glitch-button {
          position: relative;
          transition: all 0.3s;
        }

        .glitch-button:hover {
          box-shadow: 0 0 10px #00FF66, 0 0 20px #00FF66, 0 0 30px #16A349;
          animation: glitch-hover 0.3s;
        }

        .glitch-button-outline:hover {
          background: #16A349;
          color: black;
          box-shadow: 0 0 10px #00FF66, 0 0 20px #00FF66;
        }

        .glitch-pulse {
          animation: glitchPulse 2s ease-in-out infinite;
        }

        .signal-card-pulse {
          animation: signalPulse 2.8s ease-in-out infinite;
        }

        .offset-left {
          transform: translateX(-10px) rotate(-0.5deg);
        }

        .offset-right {
          transform: translateX(10px) rotate(0.5deg);
        }

        .hero-content-grid {
          transform: perspective(1000px) rotateX(2deg);
        }

        .fractured-shapes {
          pointer-events: none;
        }

        .fracture {
          position: absolute;
          border: 1px solid #16A349;
          opacity: 0.05;
          animation: fractureFloat 8s ease-in-out infinite;
        }

        .fracture-1 {
          width: 200px;
          height: 200px;
          top: 10%;
          left: 5%;
          transform: rotate(45deg);
        }

        .fracture-2 {
          width: 150px;
          height: 150px;
          bottom: 20%;
          right: 10%;
          transform: rotate(-30deg);
          animation-delay: 2s;
        }

        .fracture-3 {
          width: 100px;
          height: 100px;
          top: 50%;
          right: 20%;
          transform: rotate(60deg);
          animation-delay: 4s;
        }

        .marquee-track {
          display: inline-block;
          min-width: 200%;
          animation: marquee 24s linear infinite;
        }

        @keyframes glitch-1 {
          0%, 100% { clip-path: inset(20% 0 60% 0); transform: translate(0); }
          20% { clip-path: inset(60% 0 20% 0); transform: translate(-2px, 2px); }
          40% { clip-path: inset(40% 0 40% 0); transform: translate(-2px, -2px); }
          60% { clip-path: inset(80% 0 10% 0); transform: translate(2px, 2px); }
          80% { clip-path: inset(10% 0 80% 0); transform: translate(2px, -2px); }
        }

        @keyframes glitch-2 {
          0%, 100% { clip-path: inset(60% 0 20% 0); transform: translate(0); }
          20% { clip-path: inset(20% 0 60% 0); transform: translate(2px, -2px); }
          40% { clip-path: inset(80% 0 10% 0); transform: translate(-2px, 2px); }
          60% { clip-path: inset(10% 0 80% 0); transform: translate(2px, 2px); }
          80% { clip-path: inset(40% 0 40% 0); transform: translate(-2px, -2px); }
        }

        @keyframes scanLine {
          0% { transform: translateY(0); opacity: 0.6; }
          50% { opacity: 1; }
          100% { transform: translateY(100vh); opacity: 0.6; }
        }

        @keyframes cubeRotate {
          0% { transform: rotateY(0deg) rotateX(0deg); }
          25% { transform: rotateY(90deg) rotateX(10deg); }
          50% { transform: rotateY(180deg) rotateX(0deg); }
          75% { transform: rotateY(270deg) rotateX(-10deg); }
          100% { transform: rotateY(360deg) rotateX(0deg); }
        }

        @keyframes fragmentFloat {
          0%, 100% { transform: translate(0, 0) rotate(0deg) scale(1); opacity: 0; }
          10% { opacity: 0.8; }
          50% { transform: translate(30px, -50px) rotate(180deg) scale(1.2); opacity: 0.6; }
          90% { opacity: 0.8; }
        }

        @keyframes glitch-text-1 {
          0%, 100% { clip-path: inset(40% 0 60% 0); transform: translate(0); }
          20% { clip-path: inset(60% 0 20% 0); transform: translate(-2px, 2px); }
          40% { clip-path: inset(20% 0 60% 0); transform: translate(-2px, -2px); }
          60% { clip-path: inset(80% 0 10% 0); transform: translate(2px, 2px); }
          80% { clip-path: inset(10% 0 80% 0); transform: translate(2px, -2px); }
        }

        @keyframes glitch-text-2 {
          0%, 100% { clip-path: inset(60% 0 20% 0); transform: translate(0); }
          20% { clip-path: inset(20% 0 60% 0); transform: translate(2px, -2px); }
          40% { clip-path: inset(80% 0 10% 0); transform: translate(-2px, 2px); }
          60% { clip-path: inset(10% 0 80% 0); transform: translate(2px, 2px); }
          80% { clip-path: inset(40% 0 40% 0); transform: translate(-2px, -2px); }
        }

        @keyframes wordmarkFlicker {
          0%, 100% { opacity: 1; filter: brightness(1); }
          50% { opacity: 0.95; filter: brightness(1.1); }
        }

        @keyframes watermarkFlicker {
          0%, 100% { opacity: 0.1; transform: rotate(0deg); }
          50% { opacity: 0.15; transform: rotate(2deg); }
        }

        @keyframes glitch-hover {
          0%, 100% { transform: translate(0); }
          20% { transform: translate(-2px, 2px); }
          40% { transform: translate(-2px, -2px); }
          60% { transform: translate(2px, 2px); }
          80% { transform: translate(2px, -2px); }
        }

        @keyframes glitchPulse {
          0%, 100% { opacity: 1; box-shadow: 0 0 5px #00FF66; }
          50% { opacity: 0.7; box-shadow: 0 0 15px #00FF66, 0 0 25px #16A349; }
        }

        @keyframes signalPulse {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-3px); }
        }

        @keyframes fractureFloat {
          0%, 100% { transform: translate(0, 0) rotate(var(--rotation, 0deg)); }
          50% { transform: translate(20px, -20px) rotate(calc(var(--rotation, 0deg) + 10deg)); }
        }

        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }

        @media (max-width: 768px) {
          .offset-left,
          .offset-right,
          .hero-content-grid {
            transform: none;
          }
        }
      `}</style>
        </div>
    );
};

export default LandingPage;
