import About from "../components/landingpage/About";
import Games from "../components/landingpage/Games";
import Parterns from "../components/landingpage/Parterns";
import Build from "../components/landingpage/Build";
import Traction from "../components/landingpage/Traction";
import {
    DiscordIcon,
    TwitterIcon,
    ContactIcon,
} from "../components/BrutalistIcons";

const LandingPage = () => {
    return (
        <div className="min-h-screen overflow-hidden relative bg-black glitch-container">
            {/* Noise Texture Overlay */}
            <div className="noise-overlay"></div>

            {/* Scanlines Effect */}
            <div className="scanlines"></div>

            {/* CRT Distortion Overlay */}
            <div className="crt-overlay"></div>

            {/* Hero Section - Glitch-Tech Design */}
            <section className="relative min-h-screen bg-black overflow-hidden hero-section">
                {/* Asymmetric Grid Background with Glitch */}
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

                {/* Fractured Geometric Shapes */}
                <div className="absolute inset-0 fractured-shapes">
                    <div className="fracture fracture-1"></div>
                    <div className="fracture fracture-2"></div>
                    <div className="fracture fracture-3"></div>
                </div>

                <div className="container-responsive relative z-10 min-h-screen flex flex-col">
                    {/* Navigation - Glitch-Tech */}
                    <nav className="py-6 border-b-2 border-[#16A349] mb-8 glitch-nav">
                        <div className="flex justify-between items-center">
                            <div className="border-2 border-[#16A349] px-6 py-3 bg-black cube-logo-container glitch-hover">
                                <img
                                    src="/assets/svg/icon-green-white.svg"
                                    alt="Cracked Studios"
                                    className="h-8 w-auto cube-logo"
                                />
                            </div>
                            <ul className="hidden md:flex gap-0">
                                <li className="border-2 border-r-0 border-[#16A349] px-6 py-3 bg-black text-[#00FF66] font-black text-sm uppercase tracking-wider glitch-text-hover">
                                    MENU
                                </li>
                                <li className="border-2 border-r-0 border-[#16A349] px-6 py-3 bg-black text-[#00FF66] font-black text-sm uppercase tracking-wider glitch-text-hover">
                                    GAMES
                                </li>
                                <li className="border-2 border-[#16A349] px-6 py-3 bg-black text-[#00FF66] font-black text-sm uppercase tracking-wider glitch-text-hover">
                                    CONTACT
                                </li>
                            </ul>
                            <button className="md:hidden border-2 border-[#16A349] px-4 py-3 bg-black text-[#00FF66] glitch-hover">
                                <svg
                                    className="w-6 h-6"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={3}
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                </svg>
                            </button>
                        </div>
                    </nav>

                    {/* Hero Content - Asymmetric Glitch Layout */}
                    <div className="flex-1 grid lg:grid-cols-2 gap-8 items-center hero-content-grid">
                        {/* Left Column - Logo & Tagline with 3D Effects */}
                        <div className="space-y-6 transform -rotate-1 offset-left">
                            {/* Cube Logo with Rotation Animation */}
                            <div className="border-4 border-[#16A349] p-8 bg-black cube-container glitch-box relative overflow-hidden">
                                <div className="absolute inset-0 glitch-scan"></div>
                                <div className="cube-3d-wrapper">
                                    <img
                                        src="/assets/svg/icon-green-white.svg"
                                        alt="Cracked Studios Logo"
                                        className="w-full max-w-xs mx-auto cube-rotate"
                                    />
                                </div>
                                {/* 3D Fragment Animation */}
                                <div className="fragment fragment-1"></div>
                                <div className="fragment fragment-2"></div>
                                <div className="fragment fragment-3"></div>
                            </div>

                            {/* Wordmark with Glitch Effect */}
                            <div className="border-2 border-[#16A349] p-6 bg-black glitch-box wordmark-container">
                                <div className="absolute inset-0 glitch-scan"></div>
                                <img
                                    src="/assets/svg/wordmark-white.svg"
                                    alt="Cracked Studios"
                                    className="w-full h-auto relative z-10 wordmark-glitch"
                                />
                            </div>

                            {/* Tagline Box with Crack Animation */}
                            <div className="border-2 border-[#16A349] p-6 bg-[#16A349] text-black crack-animation relative overflow-hidden">
                                <div className="absolute inset-0 crack-line"></div>
                                <p className="text-2xl md:text-3xl font-black uppercase tracking-wider relative z-10">
                                    WEB3 PRODUCTS COMPANY
                                </p>
                            </div>
                        </div>

                        {/* Right Column - Main Message with Glitch Effects */}
                        <div className="space-y-6 transform rotate-1 offset-right">
                            {/* Play Build Belong - Glitch Typography */}
                            <div className="border-4 border-[#16A349] p-8 bg-black relative glitch-box hero-text-container overflow-hidden">
                                <div className="absolute inset-0 glitch-scan"></div>
                                {/* Watermark decoration with flicker */}
                                <div className="absolute top-4 right-4 opacity-10 watermark-flicker">
                                    <img
                                        src="/assets/svg/watermark-black-white.svg"
                                        alt=""
                                        className="w-24 h-24"
                                    />
                                </div>
                                <h1 className="text-6xl md:text-8xl lg:text-9xl font-black leading-none relative z-10 glitch-text">
                                    <span
                                        className="block text-[#00FF66] mb-2 glitch-word"
                                        data-text="PLAY."
                                    >
                                        PLAY.
                                    </span>
                                    <span
                                        className="block text-[#16A349] mb-2 glitch-word"
                                        data-text="BUILD."
                                    >
                                        BUILD.
                                    </span>
                                    <span
                                        className="block text-[#00FF66] glitch-word"
                                        data-text="BELONG."
                                    >
                                        BELONG.
                                    </span>
                                </h1>
                                <p className="text-3xl md:text-4xl font-black text-[#F2F2F2] mt-4 relative z-10 glitch-text">
                                    THAT'S{" "}
                                    <span
                                        className="text-[#16A349] glitch-word"
                                        data-text="CRACKED"
                                    >
                                        CRACKED
                                    </span>
                                    .
                                </p>
                            </div>

                            {/* Description Box with Distortion */}
                            <div className="border-2 border-[#16A349] p-6 bg-black glitch-box description-box">
                                <div className="absolute inset-0 glitch-scan"></div>
                                <p className="text-lg md:text-xl text-[#F2F2F2] leading-relaxed font-medium relative z-10">
                                    Cracked Studios is a web3 products company creating the next generation of decentralized games, consumer applications, and developer tooling. Our mission is simple and ambitious:{" "}
                                    <span className="text-[#00FF66] font-black glitch-hover">
                                        make web3 fun, accessible, and culturally resonant for the next billion users
                                    </span>.
                                </p>
                                <p className="text-lg md:text-xl text-[#F2F2F2] leading-relaxed font-medium mt-4 relative z-10">
                                    We are a lean, execution-driven team based in Nigeria building global products that combine{" "}
                                    <span className="text-[#16A349] font-black glitch-hover">
                                        frictionless onboarding
                                    </span>
                                    ,{" "}
                                    <span className="text-[#00FF66] font-black glitch-hover">
                                        sticky gameplay
                                    </span>
                                    , and a{" "}
                                    <span className="text-[#16A349] font-black glitch-hover">
                                        modern content-first growth engine
                                    </span>.
                                </p>
                            </div>

                            {/* CTA Buttons - Glitch Hover Effects */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <button className="border-2 border-[#16A349] px-8 py-4 bg-[#16A349] text-black font-black text-lg uppercase tracking-wider glitch-button relative group overflow-hidden">
                                    <div className="absolute inset-0 glitch-scan"></div>
                                    <span className="relative z-10">
                                        EXPLORE GAMES
                                    </span>
                                    <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-30 transition-opacity">
                                        <img
                                            src="/assets/svg/icon-green-black.svg"
                                            alt=""
                                            className="w-8 h-8"
                                        />
                                    </div>
                                </button>
                                <button className="border-2 border-[#16A349] px-8 py-4 bg-black text-[#00FF66] font-black text-lg uppercase tracking-wider glitch-button glitch-button-outline relative overflow-hidden">
                                    <div className="absolute inset-0 glitch-scan"></div>
                                    <span className="relative z-10">
                                        DISCOVER TOOLS
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Scroll Indicator - Glitch Style */}
                    <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 scroll-indicator">
                        <div className="border-2 border-[#16A349] w-8 h-12 bg-black flex items-center justify-center glitch-box relative overflow-hidden">
                            <div className="absolute inset-0 glitch-scan"></div>
                            <div className="w-2 h-4 bg-[#00FF66] animate-bounce glitch-pulse"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <div className="relative">
                <About />
                <Games />
                <Traction />
                <Build />
                <Parterns />
            </div>

            {/* Footer - Glitch-Tech */}
            <footer className="relative bg-black py-20">
                <div className="container-responsive">
                    {/* Main Footer Content */}
                    <div className="border-4 border-[#16A349] p-12 mb-8 bg-black relative glitch-box">
                        <div className="absolute inset-0 glitch-scan"></div>
                        {/* Watermark decoration */}
                        <div className="absolute top-8 right-8 opacity-5 watermark-flicker">
                            <img
                                src="/assets/svg/watermark-black-white.svg"
                                alt=""
                                className="w-32 h-32"
                            />
                        </div>
                        <h2 className="text-5xl md:text-7xl font-black mb-8 text-center relative z-10 glitch-text">
                            <span
                                className="block text-[#00FF66] mb-2 glitch-word"
                                data-text="PLAY."
                            >
                                PLAY.
                            </span>
                            <span
                                className="block text-[#16A349] mb-2 glitch-word"
                                data-text="BUILD."
                            >
                                BUILD.
                            </span>
                            <span
                                className="block text-[#00FF66] glitch-word"
                                data-text="BELONG."
                            >
                                BELONG.
                            </span>
                        </h2>
                        <p className="text-3xl md:text-4xl font-black text-[#F2F2F2] text-center mb-4 relative z-10 glitch-text">
                            THAT'S{" "}
                            <span
                                className="text-[#16A349] glitch-word"
                                data-text="CRACKED"
                            >
                                CRACKED
                            </span>
                            .
                        </p>
                    </div>

                    {/* Description Box */}
                    <div className="border-2 border-[#16A349] p-8 mb-8 bg-black glitch-box">
                        <div className="absolute inset-0 glitch-scan"></div>
                        <p className="text-lg md:text-xl text-[#F2F2F2] leading-relaxed font-medium text-center max-w-3xl mx-auto relative z-10">
                            To be the global creative hub where fun meets utility in web3 — a place where people <span className="text-[#00FF66] font-black">play</span>, <span className="text-[#16A349] font-black">build</span>, and <span className="text-[#00FF66] font-black">belong</span>. We design products that are easy to use, fun to play, rewarding to use, and culturally resonant.
                        </p>
                    </div>

                    {/* CTA Buttons */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto mb-12">
                        <a
                            href="https://t.me/+sRQ1KKINUzlhZjc8"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="border-2 border-[#16A349] px-8 py-4 bg-[#16A349] text-black font-black text-lg uppercase tracking-wider glitch-button relative overflow-hidden text-center"
                        >
                            <div className="absolute inset-0 glitch-scan"></div>
                            <span className="relative z-10">
                                JOIN THE COMMUNITY
                            </span>
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
                        <a
                            href="mailto:crackedstudios@crackedstudios.xyz"
                            className="border-2 border-[#16A349] px-8 py-4 bg-black text-[#00FF66] font-black text-lg uppercase tracking-wider glitch-button glitch-button-outline relative overflow-hidden text-center"
                        >
                            <div className="absolute inset-0 glitch-scan"></div>
                            <span className="relative z-10">WORK WITH US</span>
                        </a>
                    </div>

                    {/* Community Links - Glitch Style */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-12 max-w-5xl mx-auto">
                        <a
                            href="#"
                            className="border-2 border-[#16A349] p-6 bg-black text-center glitch-box glitch-button relative group overflow-hidden"
                        >
                            <div className="absolute inset-0 glitch-scan"></div>
                            <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-30 transition-opacity">
                                <img
                                    src="/assets/svg/icon-green-black.svg"
                                    alt=""
                                    className="w-6 h-6"
                                />
                            </div>
                            <div className="flex justify-center mb-2 relative z-10">
                                <DiscordIcon
                                    className="w-10 h-10"
                                    color="#00FF66"
                                />
                            </div>
                            <span className="text-[#00FF66] font-black text-lg uppercase tracking-wider relative z-10">
                                Discord
                            </span>
                        </a>
                        <a
                            href="https://x.com/TweetleHQ"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="border-2 border-[#16A349] p-6 bg-black text-center glitch-box glitch-button relative group overflow-hidden"
                        >
                            <div className="absolute inset-0 glitch-scan"></div>
                            <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-30 transition-opacity">
                                <img
                                    src="/assets/svg/icon-green-black.svg"
                                    alt=""
                                    className="w-6 h-6"
                                />
                            </div>
                            <div className="flex justify-center mb-2 relative z-10">
                                <TwitterIcon
                                    className="w-10 h-10"
                                    color="#00FF66"
                                />
                            </div>
                            <span className="text-[#00FF66] font-black text-lg uppercase tracking-wider relative z-10">
                                Twitter
                            </span>
                        </a>
                        <a
                            href="https://github.com/Crackedstudio/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="border-2 border-[#16A349] p-6 bg-black text-center glitch-box glitch-button relative group overflow-hidden"
                        >
                            <div className="absolute inset-0 glitch-scan"></div>
                            <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-30 transition-opacity">
                                <img
                                    src="/assets/svg/icon-green-black.svg"
                                    alt=""
                                    className="w-6 h-6"
                                />
                            </div>
                            <div className="flex justify-center mb-2 relative z-10">
                                <svg
                                    className="w-10 h-10"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                    color="#00FF66"
                                >
                                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                                </svg>
                            </div>
                            <span className="text-[#00FF66] font-black text-lg uppercase tracking-wider relative z-10">
                                GitHub
                            </span>
                        </a>
                        <a
                            href="https://t.me/+sRQ1KKINUzlhZjc8"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="border-2 border-[#16A349] p-6 bg-black text-center glitch-box glitch-button relative group overflow-hidden"
                        >
                            <div className="absolute inset-0 glitch-scan"></div>
                            <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-30 transition-opacity">
                                <img
                                    src="/assets/svg/icon-green-black.svg"
                                    alt=""
                                    className="w-6 h-6"
                                />
                            </div>
                            <div className="flex justify-center mb-2 relative z-10">
                                <svg
                                    className="w-10 h-10"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                    color="#00FF66"
                                >
                                    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                                </svg>
                            </div>
                            <span className="text-[#00FF66] font-black text-lg uppercase tracking-wider relative z-10">
                                Telegram
                            </span>
                        </a>
                        <a
                            href="mailto:crackedstudios@crackedstudios.xyz"
                            className="border-2 border-[#16A349] p-6 bg-black text-center glitch-box glitch-button relative group overflow-hidden"
                        >
                            <div className="absolute inset-0 glitch-scan"></div>
                            <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-30 transition-opacity">
                                <img
                                    src="/assets/svg/icon-black-white.svg"
                                    alt=""
                                    className="w-6 h-6"
                                />
                            </div>
                            <div className="flex justify-center mb-2 relative z-10">
                                <ContactIcon
                                    className="w-10 h-10"
                                    color="#00FF66"
                                />
                            </div>
                            <span className="text-[#00FF66] font-black text-lg uppercase tracking-wider relative z-10">
                                Contact
                            </span>
                        </a>
                    </div>

                    {/* Copyright */}
                    <div className="border-t-2 border-[#16A349] pt-8 text-center">
                        <p className="text-[#16A349] font-black text-lg uppercase mb-2">
                            © 2024 CRACKED STUDIOS. ALL RIGHTS RESERVED.
                        </p>
                        <p className="text-[#F2F2F2] font-medium">
                            Making web3 fun, accessible, and culturally resonant for the next billion users.
                        </p>
                    </div>
                </div>
            </footer>

            {/* Glitch-Tech Styles & Font System */}
            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bungee+Shade&family=Orbitron:wght@400;500;600;700;800;900&family=Press+Start+2P&family=Space+Grotesk:wght@400;500;600;700&display=swap');
        
        * {
          font-family: 'Space Grotesk', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', sans-serif;
        }
        
        /* Display/Heading Fonts - Glitchy, Tech-Inspired */
        h1, h2, h3, h4, h5, h6, .font-brutal, .font-display {
          font-family: 'Bungee Shade', 'Orbitron', 'Space Grotesk', sans-serif;
          font-weight: 400;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }
        
        /* Extra bold headings */
        .font-black, h1, h2 {
          font-weight: 700;
        }
        
        /* Body text - Space Grotesk for readability */
        p, span, li, a, button, .font-body {
          font-family: 'Space Grotesk', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
          font-weight: 400;
          letter-spacing: -0.01em;
        }
        
        .font-medium {
          font-weight: 500;
        }
        
        strong, b, .font-bold {
          font-weight: 700;
        }
        
        /* Utility classes */
        .container-responsive { 
          padding-left: 1.25rem; 
          padding-right: 1.25rem; 
          max-width: 1180px; 
          margin-left: auto; 
          margin-right: auto; 
        }
        .section-padding { 
          padding-top: 4rem; 
          padding-bottom: 4rem; 
        }
        
        /* ===== GLITCH-TECH EFFECTS ===== */
        
        /* Noise Texture Overlay */
        .noise-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.03'/%3E%3C/svg%3E");
          pointer-events: none;
          z-index: 1000;
          mix-blend-mode: overlay;
        }
        
        /* Scanlines Effect */
        .scanlines {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: repeating-linear-gradient(
            0deg,
            rgba(0, 0, 0, 0.15),
            rgba(0, 0, 0, 0.15) 1px,
            transparent 1px,
            transparent 2px
          );
          pointer-events: none;
          z-index: 999;
          animation: scanlineMove 8s linear infinite;
        }
        
        @keyframes scanlineMove {
          0% { transform: translateY(0); }
          100% { transform: translateY(4px); }
        }
        
        /* CRT Distortion */
        .crt-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: radial-gradient(ellipse at center, transparent 0%, rgba(0, 0, 0, 0.4) 100%);
          pointer-events: none;
          z-index: 998;
        }
        
        /* Glitch Container */
        .glitch-container {
          position: relative;
        }
        
        /* Glitch Box Effect */
        .glitch-box {
          position: relative;
          overflow: hidden;
        }
        
        .glitch-box::before,
        .glitch-box::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
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
        
        /* Glitch Scan Line */
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
        
        @keyframes scanLine {
          0% { transform: translateY(0); opacity: 0.6; }
          50% { opacity: 1; }
          100% { transform: translateY(100vh); opacity: 0.6; }
        }
        
        /* Cube Rotation Animation */
        .cube-rotate {
          animation: cubeRotate 20s linear infinite;
          transform-style: preserve-3d;
        }
        
        @keyframes cubeRotate {
          0% { transform: rotateY(0deg) rotateX(0deg); }
          25% { transform: rotateY(90deg) rotateX(10deg); }
          50% { transform: rotateY(180deg) rotateX(0deg); }
          75% { transform: rotateY(270deg) rotateX(-10deg); }
          100% { transform: rotateY(360deg) rotateX(0deg); }
        }
        
        .cube-container:hover .cube-rotate {
          animation-duration: 5s;
        }
        
        /* 3D Fragment Animation */
        .fragment {
          position: absolute;
          width: 20px;
          height: 20px;
          background: #00FF66;
          opacity: 0;
          animation: fragmentFloat 4s ease-in-out infinite;
        }
        
        .fragment-1 {
          top: 20%;
          left: 10%;
          animation-delay: 0s;
        }
        
        .fragment-2 {
          top: 60%;
          right: 15%;
          animation-delay: 1.3s;
        }
        
        .fragment-3 {
          bottom: 20%;
          left: 20%;
          animation-delay: 2.6s;
        }
        
        @keyframes fragmentFloat {
          0%, 100% {
            transform: translate(0, 0) rotate(0deg) scale(1);
            opacity: 0;
          }
          10% {
            opacity: 0.8;
          }
          50% {
            transform: translate(30px, -50px) rotate(180deg) scale(1.2);
            opacity: 0.6;
          }
          90% {
            opacity: 0.8;
          }
        }
        
        /* Crack Animation */
        .crack-animation {
          position: relative;
        }
        
        .crack-line {
          position: absolute;
          width: 2px;
          height: 0;
          background: linear-gradient(to bottom, transparent, #00FF66, transparent);
          left: 30%;
          top: 0;
          animation: crackGrow 3s ease-in-out infinite;
          opacity: 0.7;
        }
        
        @keyframes crackGrow {
          0% { height: 0; opacity: 0; }
          50% { height: 100%; opacity: 0.7; }
          100% { height: 100%; opacity: 0; }
        }
        
        /* Glitch Text Effect */
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
          clip-path: inset(0 0 0 0);
          animation: glitch-text-1 3s infinite;
        }
        
        .glitch-word::after {
          left: 2px;
          text-shadow: -2px 0 #16A349;
          clip-path: inset(0 0 0 0);
          animation: glitch-text-2 3s infinite;
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
        
        /* Wordmark Glitch */
        .wordmark-glitch {
          animation: wordmarkFlicker 4s ease-in-out infinite;
        }
        
        @keyframes wordmarkFlicker {
          0%, 100% { opacity: 1; filter: brightness(1); }
          50% { opacity: 0.95; filter: brightness(1.1); }
        }
        
        /* Watermark Flicker */
        .watermark-flicker {
          animation: watermarkFlicker 3s ease-in-out infinite;
        }
        
        @keyframes watermarkFlicker {
          0%, 100% { opacity: 0.1; transform: rotate(0deg); }
          50% { opacity: 0.15; transform: rotate(2deg); }
        }
        
        /* Glitch Hover Effects */
        .glitch-hover:hover {
          animation: glitch-hover 0.3s;
        }
        
        @keyframes glitch-hover {
          0%, 100% { transform: translate(0); }
          20% { transform: translate(-2px, 2px); }
          40% { transform: translate(-2px, -2px); }
          60% { transform: translate(2px, 2px); }
          80% { transform: translate(2px, -2px); }
        }
        
        .glitch-text-hover:hover {
          text-shadow: 
            2px 0 #00FF66,
            -2px 0 #16A349,
            0 2px #00FF66,
            0 -2px #16A349;
          animation: glitch-hover 0.3s;
        }
        
        /* Glitch Button */
        .glitch-button {
          position: relative;
          transition: all 0.3s;
        }
        
        .glitch-button:hover {
          box-shadow: 
            0 0 10px #00FF66,
            0 0 20px #00FF66,
            0 0 30px #16A349;
          animation: glitch-hover 0.3s;
        }
        
        .glitch-button-outline:hover {
          background: #16A349;
          color: black;
          box-shadow: 
            0 0 10px #00FF66,
            0 0 20px #00FF66;
        }
        
        /* Glitch Pulse */
        .glitch-pulse {
          animation: glitchPulse 2s ease-in-out infinite;
        }
        
        @keyframes glitchPulse {
          0%, 100% { 
            opacity: 1;
            box-shadow: 0 0 5px #00FF66;
          }
          50% { 
            opacity: 0.7;
            box-shadow: 0 0 15px #00FF66, 0 0 25px #16A349;
          }
        }
        
        /* Asymmetric Layout */
        .offset-left {
          transform: translateX(-10px) rotate(-0.5deg);
        }
        
        .offset-right {
          transform: translateX(10px) rotate(0.5deg);
        }
        
        .hero-content-grid {
          transform: perspective(1000px) rotateX(2deg);
        }
        
        /* Fractured Shapes */
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
          animation-delay: 0s;
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
        
        @keyframes fractureFloat {
          0%, 100% { transform: translate(0, 0) rotate(var(--rotation, 0deg)); }
          50% { transform: translate(20px, -20px) rotate(calc(var(--rotation, 0deg) + 10deg)); }
        }
      `}</style>
        </div>
    );
};

export default LandingPage;
