import { Project } from './types';
import nutro from '../assets/Nutro.png' 
import ui from '../assets/ui.jpg' 
import smartContract from '../assets/smart-contract.jpg' 
import optitrade from '../assets/optitrade.png' 

export const projectsData: Project[] = [
  {
    id: 1,
    title: "AI Calorie Tracker ",
    description: "A calorie tracking application that uses the OpenAI API for advanced food recognition. Users can scan meals with their camera for instant nutritional information and personalized recommendations.",
    image: nutro,
    technologies: ["Flutter", "OpenAI", "Firebase", "iOS"],
    achievement: "2nd Place Hackathon Winner"
  },
  {
    id: 2,
    title: "Expense Management Tool",
    description: "Developed and integrated a feature into an expense management tool that allows users to scan receipts using OCR and AI. The Next.js web application automatically extracts and populates form data, streamlining the expense submission process.",
    image: ui,
    technologies: ["Next.js", "OpenAI", "OCR", "Firebase"],
  },
  {
    id: 3,
    title: "Smart Contract",
    description: "Built a basic smart contract using Solidity to understand core concepts of Ethereum development. The contract includes fundamental features such as state variables, functions for reading and writing data, and basic access control.",
    image: smartContract,
    technologies: ["Solidity", "Ethereum", "Remix IDE", "Blockchain"],
  },
  {
    id: 4,
    title: "DeFi Trading Dashboard",
    description: "A clean, modern mock DeFi trading platform built in Next.js and TypeScript with Tailwind CSS. It pulls real-time crypto market data from a third-party API, displays interactive price charts, and features a mock order panel for a polished UX-focused demo.",
    image: optitrade,
    technologies: ["Typescript", "Next.js", "Tailwind CSS", "API"],
  }
];