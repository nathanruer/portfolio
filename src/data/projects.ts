export interface ProjectBase {
  id: number;
  imageUrl?: string; 
  technologies: string[];
  demoUrl?: string;
  githubUrl?: string;
}

export interface ProjectLang {
  title: string;
  shortDescription: string;
  fullDescription: string;
  challenges: string[];
  learnings: string[];
  disclaimer?: string; 
}

export type Project = ProjectBase & ProjectLang;


const PROJECT_DISCLAIMERS = {
    AIRBNB: {
        fr: "Ce projet est un clone d'entraînement. Il n'est plus activement mis à jour et n'est pas destiné à être utilisé en production.",
        en: "This project is a training clone. It is no longer actively maintained and is not intended for production use.",
    },
};

export const projectsBase: ProjectBase[] = [
    {
        id: 1,
        imageUrl: "/images/crypto-news-feed.png",
        technologies: ["React", "TypeScript", "Tailwind", "Supabase", "Node.js"],
        demoUrl: "https://crypto-news-feed-v2.vercel.app/",
        githubUrl: "https://github.com/nathanruer/crypto-news-feed-v2",
    },
    {
        id: 2,
        imageUrl: "/images/crypto-prices-binance.png",
        technologies: ["Next.js", "TypeScript", "Tailwind", "Binance API"],
        demoUrl: "https://crypto-screener-application-nathanruer.vercel.app/",
        githubUrl: "https://github.com/nathanruer/crypto-prices-binance",
    },
    {
        id: 3,
        technologies: ["Python", "FTX API (REST & WS)", "Pandas", "NumPy", "Asyncio"],
    },
    {
        id: 4,
        imageUrl: "/images/airbnbclone.png",
        technologies: ["Next.js", "React", "TypeScript", "NextAuth", "MongoDB", "Prisma", "Tailwind"],
        demoUrl: "https://airbnb-clone-nathanruer.vercel.app/",
        githubUrl: "https://github.com/nathanruer/airbnb-clone",
    },
    {
        id: 5,
        technologies: ["Next.js", "React", "TypeScript", "NextAuth", "Prisma", "Tailwind"],
        githubUrl: "https://github.com/nathanruer/messenger-clone",
    },
    {
        id: 6,
        technologies: ["Next.js", "React", "TypeScript", "NextAuth", "Tailwind"],
        githubUrl: "https://github.com/nathanruer/twitter-clone",
    },
    {
        id: 7,
        imageUrl: "/images/carhub-app.png",
        technologies: ["React", "Next.js", "TypeScript", "Tailwind"],
        demoUrl: "https://carhub-nathanruer.vercel.app/",
        githubUrl: "https://github.com/nathanruer/carhub-app",
    },
    {
        id: 8,
        imageUrl: "/images/web3-swap-app.png",
        technologies: ["Next.js", "React", "TypeScript", "Tailwind", "Ethers.js", "Wagmi"],
        demoUrl: "https://web3-swap-app-v3.vercel.app/",
        githubUrl: "https://github.com/nathanruer/web3-swap-app-v3",
    },
    {
        id: 9,
        imageUrl: "/images/smart-contracts-frontend.png",
        technologies: ["Solidity", "Python", "JavaScript", "Ethereum"],
        githubUrl: "https://github.com/nathanruer/web3-frontend",
    },
];


const projectsFR_LANG: ProjectLang[] = [
  {
    title: "Crypto News Feed",
    shortDescription: "Application web affichant les dernières actualités crypto en temps réel",
    fullDescription: "Application fullstack permettant de suivre les actualités crypto en temps réel, avec React, TypeScript, TailwindCSS, Supabase et Node.js.",
    challenges: [
      "Gérer l'actualisation des news en temps réel sans surcharge du backend",
      "Filtrage des news par catégorie et mots-clés"
    ],
    learnings: [
      "Maîtrise de Supabase et flux temps réel",
      "Optimisation des requêtes côté frontend"
    ]
  },
  {
    title: "Crypto Prices Binance",
    shortDescription: "Affichage en temps réel des prix des principales cryptos via Binance",
    fullDescription: "Web app utilisant Next.js, TypeScript et Tailwind pour afficher les prix en temps réel des plus grosses cryptos via l'API Binance.",
    challenges: [
      "Récupération des données en temps réel",
      "Affichage responsive pour mobile et desktop"
    ],
    learnings: [
      "Gestion des appels API en temps réel",
      "Optimisation de l'affichage dynamique"
    ]
  },
  {
    title: "Bot de Trading Algorithmique (FTX)",
    shortDescription: "Bot Python pour le trading sur FTX basé sur les données de marché et les annonces.",
    fullDescription: "Développement d'un robot de trading haute fréquence en Python utilisant les APIs WebSocket et REST de FTX pour exécuter des ordres. La stratégie était basée sur l'analyse technique (indicateurs classiques) couplée à une veille d'annonces/news pour anticiper les mouvements de volatilité (stratégie dite d'arbitrage d'information). Le bot gérait les ordres, les positions, et le risque de manière autonome.",
    challenges: [
      "Optimisation de la latence entre la réception des données et l'exécution des ordres.",
      "Conception d'un système robuste pour le suivi des annonces macroéconomiques pertinentes.",
      "Mise en œuvre d'une gestion des risques (stop-loss et taille des ordres) en temps réel."
    ],
    learnings: [
      "Gestion de la concurrence et des flux de données asynchrones avec Python (Asyncio).",
      "Maîtrise des concepts de trading algorithmique : exécution, slippage, carnet d'ordres.",
    ]
  },
  {
    title: "Airbnb Clone",
    shortDescription: "Clone d'Airbnb avec authentification et gestion des logements",
    fullDescription: "Clone fonctionnel d'Airbnb utilisant Next.js, NextAuth, Google Auth, Prisma, TypeScript, React et Tailwind.",
    challenges: [
      "Gestion de l'authentification et sécurisation des sessions",
      "Affichage dynamique des logements sur carte"
    ],
    learnings: [
      "Intégration NextAuth avec Google Auth",
      "Maîtrise de Prisma et base de données relationnelle"
    ],
    disclaimer: PROJECT_DISCLAIMERS.AIRBNB.fr,
  },
  {
    title: "Messenger Clone",
    shortDescription: "Clone de Messenger avec authentification et chat en temps réel",
    fullDescription: "Clone d'application de messagerie utilisant Next.js, NextAuth, Prisma, TypeScript, React et Tailwind, avec authentification sécurisée et gestion des messages.",
    challenges: [
      "Gestion de l'état en temps réel pour le chat",
      "Synchronisation des messages entre utilisateurs"
    ],
    learnings: [
      "WebSockets et communication en temps réel",
      "Gestion des relations entre tables Prisma"
    ]
  },
  {
    title: "Twitter Clone",
    shortDescription: "Clone de Twitter avec fonctionnalités principales",
    fullDescription: "Clone fonctionnel de Twitter développé avec Next.js, TypeScript, React, NextAuth et TailwindCSS, permettant de poster des tweets, suivre des utilisateurs et afficher un feed.",
    challenges: [
      "Gestion du feed en temps réel",
      "Optimisation des performances pour les listes longues"
    ],
    learnings: [
      "Techniques de pagination et infinite scroll",
      "Structuration d'une application Next.js"
    ]
  },
  {
    title: "CarHub App",
    shortDescription: "Site pour réserver une voiture parmi un catalogue",
    fullDescription: "Application d'entraînement personnelle permettant de gérer un catalogue de voitures, réservation et affichage dynamique, développée en React, TypeScript et TailwindCSS.",
    challenges: [
      "Gestion de l'état complexe sans backend complet",
      "Création de composants réutilisables"
    ],
    learnings: [
      "Structuration d'un projet React complet",
      "Pratique du CSS moderne avec Tailwind"
    ]
  },
  {
    title: "Web3 Swap App",
    shortDescription: "DApp pour échanger des cryptos via Uniswap",
    fullDescription: "Application Web3 permettant de swapper des cryptos avec les smart contracts Uniswap, intégration wallets, affichage des prix et transactions en temps réel.",
    challenges: [
      "Interaction sécurisée avec les smart contracts",
      "Synchronisation des prix et slippage en temps réel"
    ],
    learnings: [
      "Compréhension des smart contracts et wallets crypto",
      "Gestion des erreurs blockchain côté frontend"
    ]
  },
  {
    title: "Petits projets Smart Contracts",
    shortDescription: "Exemples de smart contracts en Solidity, Python et JavaScript",
    fullDescription: "Divers petits projets pour s'entraîner avec les smart contracts sur Ethereum, utilisant Solidity, Python et JavaScript.",
    challenges: [
      "Compréhension des standards ERC",
      "Test et déploiement de smart contracts"
    ],
    learnings: [
      "Débogage des smart contracts",
      "Interaction avec blockchain depuis le frontend"
    ]
  },
];


const projectsEN_LANG: ProjectLang[] = [
  {
    title: "Crypto News Feed",
    shortDescription: "Web app displaying the latest crypto news in real-time",
    fullDescription: "Fullstack app to follow crypto news in real-time using React, TypeScript, TailwindCSS, Supabase and Node.js.",
    challenges: [
      "Handle real-time news updates without overloading backend",
      "Filter news by categories and keywords"
    ],
    learnings: [
      "Learned Supabase and real-time handling",
      "Frontend query optimization"
    ]
  },
  {
    title: "Crypto Prices Binance",
    shortDescription: "Display real-time prices of top cryptocurrencies via Binance API",
    fullDescription: "Web app using Next.js, TypeScript and Tailwind to display live prices of top cryptocurrencies using Binance API.",
    challenges: [
      "Fetch real-time data",
      "Responsive display for mobile and desktop"
    ],
    learnings: [
      "Real-time API handling",
      "Dynamic display optimization"
    ]
  },
  {
    title: "Algorithmic Trading Bot (FTX)",
    shortDescription: "Python bot for trading on FTX based on market data and news announcements.",
    fullDescription: "Development of a high-frequency trading robot in Python using the FTX WebSocket and REST APIs to execute orders. The strategy was based on technical analysis (classic indicators) coupled with monitoring news/announcements to anticipate volatility movements (known as an information arbitrage strategy). The bot autonomously managed orders, positions, and risk.",
    challenges: [
      "Optimizing latency between data reception and order execution.",
      "Designing a robust system for tracking relevant macroeconomic announcements.",
      "Implementing real-time risk management (stop-loss and order sizing)."
    ],
    learnings: [
      "Managing concurrency and asynchronous data streams with Python (Asyncio).",
      "Mastery of algorithmic trading concepts: execution, slippage, order book dynamics.",
    ]
  },
  {
    title: "Airbnb Clone",
    shortDescription: "Airbnb clone with auth and property management",
    fullDescription: "Functional Airbnb clone built with Next.js, NextAuth, Google Auth, Prisma, TypeScript, React and Tailwind. Integrates maps with Leaflet.",
    challenges: [
      "Authentication and session security",
      "Dynamic property display on maps"
    ],
    learnings: [
      "NextAuth integration with Google Auth",
      "Mastering Prisma and relational databases"
    ],
    disclaimer: PROJECT_DISCLAIMERS.AIRBNB.en,
  },
  {
    title: "Messenger Clone",
    shortDescription: "Messenger clone with authentication and real-time chat",
    fullDescription: "Messaging app clone using Next.js, NextAuth, Prisma, TypeScript, React and Tailwind, with secure authentication and message management.",
    challenges: [
      "Real-time chat state management",
      "Message synchronization between users"
    ],
    learnings: [
      "WebSockets and real-time communication",
      "Managing relations in Prisma"
    ]
  },
  {
    title: "Twitter Clone",
    shortDescription: "Functional Twitter clone",
    fullDescription: "Twitter clone built with Next.js, TypeScript, React, NextAuth and TailwindCSS, with posting, following, and feed display.",
    challenges: [
      "Real-time feed management",
      "Performance optimization for long lists"
    ],
    learnings: [
      "Pagination and infinite scroll techniques",
      "Structuring a Next.js app"
    ]
  },
  {
    title: "CarHub App",
    shortDescription: "App to browse and reserve cars",
    fullDescription: "Personal training app to manage a car catalog, reservations and dynamic display built with React, TypeScript and TailwindCSS.",
    challenges: [
      "Manage complex state without a full backend",
      "Create reusable components"
    ],
    learnings: [
      "Structuring a complete React project",
      "Practice modern CSS with Tailwind"
    ]
  },
  {
    title: "Web3 Swap App",
    shortDescription: "Web3 frontend app for swapping crypto via Uniswap",
    fullDescription: "Web3 DApp for swapping cryptocurrencies using Uniswap smart contracts, wallet integration, real-time price display, and transaction handling.",
    challenges: [
      "Secure interaction with smart contracts",
      "Real-time price sync and slippage handling"
    ],
    learnings: [
      "Deep understanding of smart contracts and crypto wallets",
      "Handling blockchain errors on frontend"
    ]
  },
  {
    title: "Small Smart Contract Projects",
    shortDescription: "Smart contract examples in Solidity, Python and JavaScript",
    fullDescription: "Various small projects to practice smart contracts on Ethereum using Solidity, Python and JavaScript.",
    challenges: [
      "Understanding ERC standards",
      "Smart contract testing and deployment"
    ],
    learnings: [
      "Smart contract debugging",
      "Frontend interaction with blockchain"
    ]
  },
];


const mergeProjects = (base: ProjectBase[], langData: ProjectLang[]): Project[] => {
    if (base.length !== langData.length) {
        console.error("Erreur de données: Les tableaux de base et de langue n'ont pas la même longueur.");
        return base as any; 
    }

    return base.map((baseProject, index) => {
        const langProject = langData[index];
        return {
            ...baseProject,
            ...langProject
        } as Project;
    });
};


export const projectsFR: Project[] = mergeProjects(projectsBase, projectsFR_LANG);
export const projectsEN: Project[] = mergeProjects(projectsBase, projectsEN_LANG);