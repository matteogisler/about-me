import { Project } from './types';

export const projectsData: Project[] = [
  {
    id: 1,
    title: "Web3 iOS Wallet",
    description: "A secure and user-friendly iOS wallet for managing cryptocurrencies and interacting with decentralized applications. Features include multi-chain support, biometric authentication, and transaction history.",
    image: "https://images.pexels.com/photos/8370752/pexels-photo-8370752.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    technologies: ["Swift", "Web3.swift", "Blockchain", "iOS"],
    demo: "https://example.com/wallet-demo",
    github: "https://github.com/matteogisler/web3-wallet",
    achievement: "2nd Place Hackathon Winner"
  },
  {
    id: 2,
    title: "AI Calorie Tracker",
    description: "A calorie tracking application that uses the OpenAI API for advanced food recognition. Users can scan meals with their camera for instant nutritional information and personalized recommendations.",
    image: "https://images.pexels.com/photos/4397840/pexels-photo-4397840.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    technologies: ["React Native", "OpenAI", "TensorFlow", "Firebase"],
    demo: "https://example.com/calorie-tracker",
    github: "https://github.com/matteogisler/ai-calorie-tracker"
  },
  {
    id: 3,
    title: "NFT Marketplace",
    description: "A decentralized marketplace for creating, buying, and selling NFTs with support for multiple blockchains. Features include auctions, direct sales, and a creator dashboard.",
    image: "https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    technologies: ["React", "Solidity", "IPFS", "Ethereum"],
    github: "https://github.com/matteogisler/nft-marketplace"
  },
  {
    id: 4,
    title: "DeFi Dashboard",
    description: "An all-in-one dashboard for tracking DeFi investments across multiple protocols. Features include portfolio analytics, yield farming tracking, and market insights.",
    image: "https://images.pexels.com/photos/7788009/pexels-photo-7788009.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    technologies: ["Vue.js", "Web3.js", "GraphQL", "TheGraph"],
    github: "https://github.com/matteogisler/defi-dashboard"
  }
];