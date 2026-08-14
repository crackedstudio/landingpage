export type ProductStatus = "LIVE" | "TESTNET" | "RELAUNCHING" | "PIPELINE";

export interface Product {
    name: string;
    status: ProductStatus;
    chain: string;
    url: string | null;
    description: string;
    differentiator: string;
    category: string;
}

export const products: Product[] = [
    {
        name: "Blokaz",
        status: "LIVE",
        chain: "Celo Mainnet",
        url: "https://blokaz.xyz",
        description: "Provably fair on-chain block puzzle with USDC prize pools",
        differentiator:
            "Every game session committed on-chain before play begins. No server can manipulate the outcome.",
        category: "Game",
    },
    {
        name: "Nukko",
        status: "LIVE",
        chain: "Celo Mainnet",
        url: "https://nukko.xyz",
        description: "Planet drop merge game built for MiniPay",
        differentiator:
            "6,896 players and 12,859 games played on-chain, with stablecoin revenue paid straight to treasury.",
        category: "Game",
    },
    {
        name: "Uzoza",
        status: "LIVE",
        chain: "Base Mainnet",
        url: "https://uzoza.xyz",
        description: "AI facial analysis + on-chain score minting",
        differentiator:
            "7-dimension scientific scoring with global leaderboard and NFT attestation.",
        category: "AI Consumer App",
    },
    {
        name: "Otterpay",
        status: "LIVE",
        chain: "Starknet Mainnet",
        url: "https://otterpay.xyz",
        description: "Yield-bearing payment app — send, receive, earn. Zero gas.",
        differentiator:
            "Every idle balance auto-earns via Vesu lending. Fully gasless. Social login.",
        category: "DeFi / Fintech",
    },
    {
        name: "BitDrum",
        status: "TESTNET",
        chain: "Somnia Shannon",
        url: "https://bitdrum.xyz",
        description: "Vault-backed BTC prediction markets, 1-minute resolution",
        differentiator:
            "Protocol-owned vault guarantees a counterparty for every trade instantly — no bootstrapping.",
        category: "DeFi",
    },
    {
        name: "Noah Protocol",
        status: "TESTNET",
        chain: "Starknet + Avalanche",
        url: "https://noahprotocol.xyz",
        description: "ZK identity — verify once, use everywhere, zero PII stored",
        differentiator:
            "7th Place — Starknet Re{define} Privacy Track 2025. Top 100 Avalanche Build Game.",
        category: "Infrastructure",
    },
    {
        name: "Tweetle",
        status: "RELAUNCHING",
        chain: "TBD",
        url: null,
        description: "On-chain prediction mini-game with validated product-market fit",
        differentiator:
            "Tweetle recorded 16,595 contract interactions, 2,811 games created, and roughly 98 transactions per user.",
        category: "Game",
    },
    {
        name: "Neon Sentinel",
        status: "PIPELINE",
        chain: "TBD",
        url: null,
        description: "Incoming flagship game title",
        differentiator:
            "Launches into a pre-warmed ecosystem with existing community and Rig infrastructure.",
        category: "Game",
    },
];
