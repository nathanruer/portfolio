export interface Project {
  id: number;
  title: string;
  shortDescription: string;
  fullDescription: string;
  image: string;
  technologies: string[];
  demoUrl?: string;
  githubUrl?: string;
  role: string;
  challenges: string[];
  learnings: string[];
  url: string;
}

export const projectsFR: Project[] = [
  {
    id: 1,
    title: "Crypto News Feed",
    shortDescription: "Application web affichant les dernières actualités crypto en temps réel",
    fullDescription: "Application fullstack permettant de suivre les actualités crypto en temps réel, avec React, TypeScript, TailwindCSS, Supabase et Node.js.",
    image: "#1E40AF",
    technologies: ["React", "TypeScript", "Tailwind", "Supabase", "Node.js"],
    demoUrl: "https://crypto-news.example.com",
    githubUrl: "https://github.com/nathanruer/crypto-news",
    role: "Développeur Fullstack",
    challenges: [
      "Gérer l'actualisation des news en temps réel sans surcharge du backend",
      "Filtrage des news par catégorie et mots-clés"
    ],
    learnings: [
      "Maîtrise de Supabase et flux temps réel",
      "Optimisation des requêtes côté frontend"
    ],
    url: "/crypto-news-feed"
  },
  {
    id: 2,
    title: "Web3 Swap App",
    shortDescription: "DApp pour échanger des cryptos via Paraswap",
    fullDescription: "Application Web3 permettant de swapper des cryptos avec les smart contracts Paraswap, intégration wallets, affichage des prix et transactions en temps réel.",
    image: "#F59E0B",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind", "Ethers.js", "Wagmi"],
    demoUrl: "https://web3-swap.example.com",
    githubUrl: "https://github.com/nathanruer/web3-swap",
    role: "Développeur Web3",
    challenges: [
      "Interaction sécurisée avec les smart contracts",
      "Synchronisation des prix et slippage en temps réel"
    ],
    learnings: [
      "Compréhension des smart contracts et wallets crypto",
      "Gestion des erreurs blockchain côté frontend"
    ],
    url: "/web3-swap-app"
  },
  {
    id: 3,
    title: "CarHub App",
    shortDescription: "Site pour réserver une voiture parmi un catalogue",
    fullDescription: "Application d'entraînement personnelle permettant de gérer un catalogue de voitures, réservation et affichage dynamique, développée en React, TypeScript et TailwindCSS.",
    image: "#059669",
    technologies: ["React", "TypeScript", "Tailwind"],
    role: "Développeur Frontend",
    challenges: [
      "Gestion de l'état complexe sans backend complet",
      "Création de composants réutilisables"
    ],
    learnings: [
      "Structuration d'un projet React complet",
      "Pratique du CSS moderne avec Tailwind"
    ],
    url: "/carhub-app"
  },
  {
    id: 4,
    title: "Airbnb Clone",
    shortDescription: "Clone d'Airbnb avec authentification et gestion des logements",
    fullDescription: "Clone fonctionnel d'Airbnb utilisant Next.js, NextAuth, Google Auth, Prisma, TypeScript, React et Tailwind. Intègre les cartes via Leaflet.",
    image: "#7C3AED",
    technologies: ["Next.js", "React", "TypeScript", "NextAuth", "Prisma", "Tailwind", "Leaflet"],
    githubUrl: "https://github.com/nathanruer/airbnb-clone",
    role: "Développeur Fullstack",
    challenges: [
      "Gestion de l'authentification et sécurisation des sessions",
      "Affichage dynamique des logements sur carte"
    ],
    learnings: [
      "Intégration NextAuth avec Google Auth",
      "Maîtrise de Prisma et base de données relationnelle"
    ],
    url: "/airbnb-clone"
  },
  {
    id: 5,
    title: "Messenger Clone",
    shortDescription: "Clone de Messenger avec authentification et chat en temps réel",
    fullDescription: "Clone d'application de messagerie utilisant Next.js, NextAuth, Prisma, TypeScript, React et Tailwind, avec authentification sécurisée et gestion des messages.",
    image: "#DC2626",
    technologies: ["Next.js", "React", "TypeScript", "NextAuth", "Prisma", "Tailwind"],
    githubUrl: "https://github.com/nathanruer/messenger-clone",
    role: "Développeur Fullstack",
    challenges: [
      "Gestion de l'état en temps réel pour le chat",
      "Synchronisation des messages entre utilisateurs"
    ],
    learnings: [
      "WebSockets et communication en temps réel",
      "Gestion des relations entre tables Prisma"
    ],
    url: "/messenger-clone"
  },
  {
    id: 6,
    title: "Twitter Clone",
    shortDescription: "Clone de Twitter avec fonctionnalités principales",
    fullDescription: "Clone fonctionnel de Twitter développé avec Next.js, TypeScript, React, NextAuth et TailwindCSS, permettant de poster des tweets, suivre des utilisateurs et afficher un feed.",
    image: "#1DA1F2",
    technologies: ["Next.js", "React", "TypeScript", "NextAuth", "Tailwind"],
    githubUrl: "https://github.com/nathanruer/twitter-clone",
    role: "Développeur Fullstack",
    challenges: [
      "Gestion du feed en temps réel",
      "Optimisation des performances pour les listes longues"
    ],
    learnings: [
      "Techniques de pagination et infinite scroll",
      "Structuration d'une application Next.js"
    ],
    url: "/twitter-clone"
  },
  {
    id: 7,
    title: "Crypto Prices Binance",
    shortDescription: "Affichage en temps réel des prix des principales cryptos via Binance",
    fullDescription: "Web app utilisant Next.js, TypeScript et Tailwind pour afficher les prix en temps réel des plus grosses cryptos via l'API Binance.",
    image: "#FBBF24",
    technologies: ["Next.js", "TypeScript", "Tailwind", "Binance API"],
    githubUrl: "https://github.com/nathanruer/crypto-prices-binance",
    role: "Développeur Frontend",
    challenges: [
      "Récupération des données en temps réel",
      "Affichage responsive pour mobile et desktop"
    ],
    learnings: [
      "Gestion des appels API en temps réel",
      "Optimisation de l'affichage dynamique"
    ],
    url: "/crypto-prices-binance"
  },
  {
    id: 8,
    title: "Petits projets Smart Contracts",
    shortDescription: "Exemples de smart contracts en Solidity, Python et JavaScript",
    fullDescription: "Divers petits projets pour s'entraîner avec les smart contracts sur Ethereum, utilisant Solidity, Python et JavaScript.",
    image: "#F97316",
    technologies: ["Solidity", "Python", "JavaScript", "Ethereum"],
    githubUrl: "https://github.com/nathanruer/smart-contracts",
    role: "Développeur Blockchain",
    challenges: [
      "Compréhension des standards ERC",
      "Test et déploiement de smart contracts"
    ],
    learnings: [
      "Débogage des smart contracts",
      "Interaction avec blockchain depuis le frontend"
    ],
    url: "/petits-projets-smart-contracts"
  }
];

export const projectsEN: Project[] = [
  {
    id: 1,
    title: "Crypto News Feed",
    shortDescription: "Web app displaying the latest crypto news in real-time",
    fullDescription: "Fullstack app to follow crypto news in real-time using React, TypeScript, TailwindCSS, Supabase and Node.js.",
    image: "#1E40AF",
    technologies: ["React", "TypeScript", "Tailwind", "Supabase", "Node.js"],
    demoUrl: "https://crypto-news.example.com",
    githubUrl: "https://github.com/nathanruer/crypto-news",
    role: "Fullstack Developer",
    challenges: [
      "Handle real-time news updates without overloading backend",
      "Filter news by categories and keywords"
    ],
    learnings: [
      "Learned Supabase and real-time handling",
      "Frontend query optimization"
    ],
    url: "/crypto-news-feed"
  },
  {
    id: 2,
    title: "Web3 Swap App",
    shortDescription: "Web3 frontend app for swapping crypto via Paraswap",
    fullDescription: "Web3 DApp for swapping cryptocurrencies using Paraswap smart contracts, wallet integration, real-time price display, and transaction handling.",
    image: "#F59E0B",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind", "Ethers.js", "Wagmi"],
    demoUrl: "https://web3-swap.example.com",
    githubUrl: "https://github.com/nathanruer/web3-swap",
    role: "Web3 Developer",
    challenges: [
      "Secure interaction with smart contracts",
      "Real-time price sync and slippage handling"
    ],
    learnings: [
      "Deep understanding of smart contracts and crypto wallets",
      "Handling blockchain errors on frontend"
    ],
    url: "/web3-swap-app"
  },
  {
    id: 3,
    title: "CarHub App",
    shortDescription: "App to browse and reserve cars",
    fullDescription: "Personal training app to manage a car catalog, reservations and dynamic display built with React, TypeScript and TailwindCSS.",
    image: "#059669",
    technologies: ["React", "TypeScript", "Tailwind"],
    role: "Frontend Developer",
    challenges: [
      "Manage complex state without a full backend",
      "Create reusable components"
    ],
    learnings: [
      "Structuring a complete React project",
      "Practice modern CSS with Tailwind"
    ],
    url: "/carhub-app"
  },
  {
    id: 4,
    title: "Airbnb Clone",
    shortDescription: "Airbnb clone with auth and property management",
    fullDescription: "Functional Airbnb clone built with Next.js, NextAuth, Google Auth, Prisma, TypeScript, React and Tailwind. Integrates maps with Leaflet.",
    image: "#7C3AED",
    technologies: ["Next.js", "React", "TypeScript", "NextAuth", "Prisma", "Tailwind", "Leaflet"],
    githubUrl: "https://github.com/nathanruer/airbnb-clone",
    role: "Fullstack Developer",
    challenges: [
      "Authentication and session security",
      "Dynamic property display on maps"
    ],
    learnings: [
      "NextAuth integration with Google Auth",
      "Mastering Prisma and relational databases"
    ],
    url: "/airbnb-clone"
  },
  {
    id: 5,
    title: "Messenger Clone",
    shortDescription: "Messenger clone with authentication and real-time chat",
    fullDescription: "Messaging app clone using Next.js, NextAuth, Prisma, TypeScript, React and Tailwind, with secure authentication and message management.",
    image: "#DC2626",
    technologies: ["Next.js", "React", "TypeScript", "NextAuth", "Prisma", "Tailwind"],
    githubUrl: "https://github.com/nathanruer/messenger-clone",
    role: "Fullstack Developer",
    challenges: [
      "Real-time chat state management",
      "Message synchronization between users"
    ],
    learnings: [
      "WebSockets and real-time communication",
      "Managing relations in Prisma"
    ],
    url: "/messenger-clone"
  },
  {
    id: 6,
    title: "Twitter Clone",
    shortDescription: "Functional Twitter clone",
    fullDescription: "Twitter clone built with Next.js, TypeScript, React, NextAuth and TailwindCSS, with posting, following, and feed display.",
    image: "#1DA1F2",
    technologies: ["Next.js", "React", "TypeScript", "NextAuth", "Tailwind"],
    githubUrl: "https://github.com/nathanruer/twitter-clone",
    role: "Fullstack Developer",
    challenges: [
      "Real-time feed management",
      "Performance optimization for long lists"
    ],
    learnings: [
      "Pagination and infinite scroll techniques",
      "Structuring a Next.js app"
    ],
    url: "/twitter-clone"
  },
  {
    id: 7,
    title: "Crypto Prices Binance",
    shortDescription: "Display real-time prices of top cryptocurrencies via Binance API",
    fullDescription: "Web app using Next.js, TypeScript and Tailwind to display live prices of top cryptocurrencies using Binance API.",
    image: "#FBBF24",
    technologies: ["Next.js", "TypeScript", "Tailwind", "Binance API"],
    githubUrl: "https://github.com/nathanruer/crypto-prices-binance",
    role: "Frontend Developer",
    challenges: [
      "Fetch real-time data",
      "Responsive display for mobile and desktop"
    ],
    learnings: [
      "Real-time API handling",
      "Dynamic display optimization"
    ],
    url: "/crypto-prices-binance"
  },
  {
    id: 8,
    title: "Small Smart Contract Projects",
    shortDescription: "Smart contract examples in Solidity, Python and JavaScript",
    fullDescription: "Various small projects to practice smart contracts on Ethereum using Solidity, Python and JavaScript.",
    image: "#F97316",
    technologies: ["Solidity", "Python", "JavaScript", "Ethereum"],
    githubUrl: "https://github.com/nathanruer/smart-contracts",
    role: "Blockchain Developer",
    challenges: [
      "Understanding ERC standards",
      "Smart contract testing and deployment"
    ],
    learnings: [
      "Smart contract debugging",
      "Frontend interaction with blockchain"
    ],
    url: "/small-smart-contract-projects"
  }
];