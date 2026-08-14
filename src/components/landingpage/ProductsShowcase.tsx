import { products } from "../../data/products";

const statusStyles: Record<string, string> = {
    LIVE: "border-[#00FF66] bg-[#00FF66] text-black",
    TESTNET: "border-[#16A349] bg-[#16A349] text-black",
    RELAUNCHING: "border-[#F2F2F2] bg-[#111111] text-[#F2F2F2]",
    PIPELINE: "border-[#16A349] bg-black text-[#16A349]",
};

const ProductsShowcase = () => {
    return (
        <section id="products" className="py-20 lg:py-32 bg-black relative overflow-hidden">
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
                <div className="border-2 border-[#16A349] p-8 mb-12 bg-black text-center relative glitch-box overflow-hidden">
                    <div className="absolute inset-0 glitch-scan"></div>
                    <div className="absolute top-4 right-4 opacity-10 watermark-flicker">
                        <img src="/assets/svg/watermark-black-white.svg" alt="" className="w-20 h-20" />
                    </div>
                    <p className="text-[#16A349] text-sm md:text-base font-black uppercase tracking-[0.2em] mb-4 relative z-10">
                        WHAT WE&apos;VE BUILT
                    </p>
                    <h2 className="text-5xl md:text-6xl font-black mb-4 text-[#F2F2F2] relative z-10 glitch-text">
                        SEVEN PRODUCTS. FIVE CHAINS.
                    </h2>
                    <p className="text-[#F2F2F2] text-lg font-medium max-w-3xl mx-auto relative z-10">
                        All live or in flight across games, consumer apps, DeFi products, and developer infrastructure.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 mb-8">
                    {products.map((product, index) => (
                        <article
                            key={product.name}
                            className={`border-2 ${index % 2 === 0 ? "border-[#16A349]" : "border-[#00FF66]"} p-5 bg-black glitch-box relative overflow-hidden min-h-full`}
                        >
                            <div className="absolute inset-0 glitch-scan"></div>
                            <div className="relative z-10 flex items-start justify-between gap-4 mb-4">
                                <div className={`border-2 px-3 py-1 text-xs font-black uppercase tracking-wider ${statusStyles[product.status]}`}>
                                    {product.status}
                                </div>
                                <div className="border border-[#16A349] px-3 py-1 text-[#F2F2F2] text-xs font-mono uppercase tracking-wider">
                                    {product.chain}
                                </div>
                            </div>

                            <p className="text-[#16A349] text-xs font-black uppercase tracking-[0.18em] mb-3 relative z-10">
                                {product.category}
                            </p>
                            <h3 className={`text-3xl font-black mb-3 uppercase relative z-10 ${index % 2 === 0 ? "text-[#16A349]" : "text-[#00FF66]"}`}>
                                {product.name}
                            </h3>
                            <p className="text-[#F2F2F2] text-base font-medium mb-4 relative z-10">
                                {product.description}
                            </p>
                            <p className="text-[#B8B8B8] text-sm font-medium mb-5 relative z-10">
                                {product.differentiator}
                            </p>

                            {product.status === "LIVE" && product.url ? (
                                <a
                                    href={product.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-block border-2 border-[#16A349] px-4 py-3 bg-[#16A349] text-black font-black text-sm uppercase tracking-wider glitch-button relative group overflow-hidden"
                                >
                                    <div className="absolute inset-0 glitch-scan"></div>
                                    <span className="relative z-10">VISIT</span>
                                </a>
                            ) : (
                                <div className="inline-block border-2 border-[#16A349] px-4 py-3 bg-black text-[#00FF66] font-black text-sm uppercase tracking-wider relative z-10">
                                    IN ACTIVE DEVELOPMENT
                                </div>
                            )}
                        </article>
                    ))}
                </div>

                <div className="border-4 border-[#16A349] p-8 bg-black glitch-box relative overflow-hidden">
                    <div className="absolute inset-0 glitch-scan"></div>
                    <p className="text-center text-[#F2F2F2] text-xl md:text-2xl font-black uppercase tracking-wider relative z-10">
                        <span className="text-[#16A349]">BLOKAZ + NUKKO:</span> 96,781 ON-CHAIN INTERACTIONS · 23,453 PLAYERS · 12,859 NUKKO GAMES PLAYED
                    </p>
                </div>
            </div>
        </section>
    );
};

export default ProductsShowcase;
