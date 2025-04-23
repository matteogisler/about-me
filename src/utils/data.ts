import { Project } from './types';
import nutro from '../assets/Nutro.png' 
import geldgeier from '../assets/geldgeier.png' 
import smartContract from '../assets/smart-contract.jpg' 

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
    image: geldgeier,
    technologies: ["Next.js", "OpenAI", "OCR", "Firebase"],
  },
  {
    id: 3,
    title: "Smart Contract",
    description: "Built a basic smart contract using Solidity to understand core concepts of Ethereum development. The contract includes fundamental features such as state variables, functions for reading and writing data, and basic access control.",
    image: smartContract,
    technologies: ["Solidity", "Ethereum", "Remix IDE", "Blockchain"],
  }
];