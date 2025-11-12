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
    NOT_UPDATED: {
        fr: "Ce projet n'est plus activement mis à jour et n'est pas destiné à être utilisé en production.",
        en: "This project is no longer actively maintained and is not intended for production use.",
    },
};

export const projectsBase: ProjectBase[] = [
    {
        id: 1,
        imageUrl: "/images/crypto-news-feed.png",
        technologies: ["React", "TypeScript", "Tailwind CSS", "Node.js"],
        demoUrl: "https://crypto-news-feed.vercel.app/",
        githubUrl: "https://github.com/nathanruer/crypto-news-feed",
    },
    {
        id: 2,
        imageUrl: "/images/uniswapV3-quotes-frontend.png",
        technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Shadcn", "Ethers.js", "Wagmi", "RainbowKit", "Viem", "Foundry"],
        demoUrl:"https://nathanruer-frontend-uniswapv3-quotes.vercel.app/",
        githubUrl: "https://github.com/nathanruer/frontend-uniswapV3-quotes",
    },
    {
        id: 3,
        technologies: ["Daydreams/Lucid Agents", "Ekubo API", "TypeScript", "Node.js", "Coinbase X402"],
        githubUrl: "https://github.com/nathanruer/test-lucid-agent",
    },
    {
        id: 4, 
        technologies: ["Next.js", "TypeScript", "Shadcn", "Thirdweb", "Coinbase X402"],
        githubUrl: "https://github.com/nathanruer/test-x402",
    },
    {
        id: 5,
        technologies: ["Python", "FTX API (REST & WS)", "Pandas", "NumPy", "Asyncio", "Jupyter"],
    },
    {
        id: 6,
        imageUrl: "/images/crypto-prices-binance.png",
        technologies: ["React", "TypeScript", "Tailwind CSS", "Binance API"],
        demoUrl: "https://crypto-screener-application-nathanruer.vercel.app/",
        githubUrl: "https://github.com/nathanruer/crypto-prices-binance",
    },
    {
        id: 7,
        technologies: ["Next.js 13", "React", "TypeScript", "NextAuth", "Prisma", "Tailwind CSS", "Pusher (WebSockets)"],
        githubUrl: "https://github.com/nathanruer/messenger-clone",
    },
    {
        id: 8,
        imageUrl: "/images/airbnb-clone.png",
        technologies: ["Next.js 13", "React", "TypeScript", "NextAuth", "MongoDB", "Prisma", "Tailwind CSS", "Leaflet"],
        demoUrl: "https://airbnb-clone-nathanruer.vercel.app/",
        githubUrl: "https://github.com/nathanruer/airbnb-clone",
    },
    {
        id: 9,
        technologies: ["Next.js 13", "React", "TypeScript", "NextAuth", "MongoDB", "Tailwind CSS", "React Hook Form"],
        githubUrl: "https://github.com/nathanruer/twitter-clone",
    },
    {
        id: 10,
        imageUrl: "/images/carhub-app.png",
        technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Headless UI", "RapidAPI"],
        demoUrl: "https://carhub-nathanruer.vercel.app/",
        githubUrl: "https://github.com/nathanruer/carhub-app",
    },
    {
        id: 11,
        technologies: ["Solidity", "Python (Brownie)", "JavaScript (Hardhat)", "Ethereum (EVM)", "ERC Standards"],
        githubUrl: "https://github.com/nathanruer/Wallet-Interaction",
    },
    {
        id: 12,
        technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Ethers.js", "Wagmi", "RainbowKit"],
        githubUrl: "https://github.com/nathanruer/web3-frontend",
    },
];


export const projectsFR_LANG: ProjectLang[] = [
  {
      title: "Fil d'actualité crypto en temps réel",
      shortDescription: "Application web affichant un flux continu de news sur les cryptomonnaies via une connexion WebSocket.",
      fullDescription: "Développement d'une interface utilisateur réactive (Front-end) pour visualiser un flux continu de news sur le marché des cryptomonnaies. L'application utilise une connexion WebSocket pour établir un canal de communication bidirectionnel et à faible latence, assurant que les utilisateurs reçoivent les mises à jour instantanément. Le projet se concentre sur l'efficacité de l'affichage des données en streaming et la fourniture d'une expérience utilisateur optimale, notamment dans la gestion du volume des données en temps réel.",
      challenges: [
        "Assurer la stabilité et l'efficacité de la connexion WebSocket face à un volume élevé de messages entrants.",
        "Optimiser les performances du rendu UI pour maintenir la fluidité malgré l'arrivée constante de nouvelles données (gestion de listes virtuelles).",
        "Mettre en œuvre des mécanismes de gestion des pannes et de reconnexion automatique pour garantir la continuité du service."
      ],
      learnings: [
        "Maîtrise des protocoles de communication temps réel et de l'implémentation de WebSocket côté client.",
        "Gestion de l'état de l'application et des mises à jour asynchrones avec les outils du framework (ex. Hooks, Context API, ou librairie dédiée).",
        "Principes de conception d'interfaces réactives et d'optimisation du rendu pour les applications de streaming de données."
      ]
  },
  {
    title: "Frontend d'estimation de cotations Uniswap V3",
    shortDescription: "Application front-end pour le calcul et l'affichage des taux de swap en temps réel des pools de liquidité Uniswap V3.",
    fullDescription: "Application web construite avec Next.js et TypeScript, focalisée sur l'interaction avec la blockchain. Elle utilise Wagmi/Viem pour la connexion aux portefeuilles et la lecture des données de contrats, ainsi que les utilitaires Ethers.js pour dériver et afficher les taux de change (quotes) précis à partir des pools Uniswap V3. Le projet met en avant la gestion de données blockchain en temps réel et l'intégration d'une UI réactive avec Tailwind CSS.",
    challenges: [
        "Maîtriser le modèle mathématique complexe d'Uniswap V3 pour calculer les prix à partir de la racine carrée du prix (sqrtPriceX96).",
        "Assurer la synchronisation et la performance des données en temps réel via les hooks Wagmi (polling ou WebSockets).",
        "Intégrer les librairies Web3 modernes (Viem) pour des interactions efficaces avec l'EVM."
    ],
    learnings: [
        "Utilisation avancée de Wagmi et Viem pour construire une DApp front-end de qualité professionnelle.",
        "Compréhension pratique de l'architecture d'un DEX (Decentralized Exchange) et de la lecture des données on-chain.",
        "Développement d'une interface utilisateur performante capable de gérer et d'afficher des données financières critiques."
    ],
  },
  {
    title: "Agent IA monétisé (x402) - Daydreams/Lucid",
    shortDescription: "Agent d'IA (Daydreams/Lucid) intégrant le protocole x402 (Coinbase) pour monétiser les appels d'API à la requête, sur Starknet.",
    fullDescription: "Développement d'un agent d'IA modulaire (Daydreams/Lucid Agents) exposant des points d'entrée d'API pour la lecture des données Starknet (solde de portefeuilles, prix Ekubo, etc...). Ce projet met en œuvre l'intégration native du protocole x402 de Coinbase pour sécuriser et monétiser chaque appel d'API. L'agent est configuré pour renvoyer le statut HTTP 402 Payment Required, obligeant le client (un autre agent ou une application) à effectuer un micropaiement on-chain pour débloquer l'accès à la donnée. Il sert de preuve de concept pour une économie d'API/services inter-agents basée sur l'usage réel.",
    challenges: [
        "Intégration de la logique de Paywall x402 dans un agent IA (Lucid/Daydreams).",
        "Assurer la synchronisation entre la logique de l'agent et le règlement du micropaiement on-chain.",
        "Gérer l'intégration de sources de données disparates (on-chain, API Ekubo, scraping).",
    ],
    learnings: [
        "Maîtrise du développement d'agents autonomes et de leur monétisation via x402.",
        "Application des Layer 2 (Starknet) pour des transactions financières rapides et à faible coût.",
        "Techniques pour le développement d'APIs payantes natives au Web3.",
    ],
  },
  {
      title: "Test d'intégration du paywall X402 (Coinbase)",
      shortDescription: "Application Next.js (DApp) de démonstration implémentant un mécanisme de Paywall on-chain basé sur le protocole X402 de Coinbase, sur Base Sepolia.",
      fullDescription: "Projet Next.js intégrant le protocole X402 de Coinbase pour créer un Paywall d'API on-chain sur Base Sepolia. Il utilise Thirdweb pour la connexion au portefeuille et la gestion des transactions, garantissant que seul un paiement vérifié débloque le contenu premium.",
      challenges: [
        "Gestion de la synchronisation client-serveur (verify / settle).",
        "Sécurisation et validation des paiements on-chain.",
        "Mise en place du facilitator Web3 pour l'autorisation des règlements X402.",
      ],
      learnings: [
        "Maîtrise de l'architecture X402 (initiation vs. règlement du Paywall).",
        "Intégration avancée des outils Thirdweb pour les interactions de micro-paiement.",
        "Application des Layer 2 pour la monétisation d'API Web3.",
      ]
  },
  {
    title: "Bot de trading algorithmique",
    shortDescription: "Bot Python pour le trading sur FTX basé sur l'analyse technique et les annonces de marché.",
    fullDescription: "Développement d'un robot de trading haute fréquence en Python utilisant les APIs WebSocket et REST de FTX (avant sa fermeture) pour exécuter des ordres. La stratégie était basée sur l'analyse technique (indicateurs classiques) couplée à une veille d'annonces/news pour anticiper les mouvements de volatilité (stratégie dite d'arbitrage d'information). Le bot gérait les ordres, les positions, et le risque de manière autonome.",
    challenges: [
      "Optimisation de la latence entre la réception des données (Websocket) et l'exécution des ordres (REST).",
      "Conception d'un système robuste pour le suivi et l'analyse des annonces macroéconomiques pertinentes.",
      "Mise en œuvre d'une gestion des risques (stop-loss et taille des ordres) en temps réel et tolérant aux pannes."
    ],
    learnings: [
      "Gestion de la concurrence et des flux de données asynchrones avec Python (Asyncio).",
      "Maîtrise des concepts de trading algorithmique : exécution, slippage, carnet d'ordres.",
      "Utilisation avancée des librairies de calcul scientifique Pandas et NumPy pour l'analyse des données de marché."
    ]
  },
  {
    title: "Dashboard de prix crypto",
    shortDescription: "Dashboard d'affichage et de suivi des prix des cryptomonnaies en temps quasi-réel via l'API Binance.",
    fullDescription: "Application web construite avec React et TypeScript utilisant l'API WebSocket de Binance pour obtenir et afficher les prix des principales paires de trading avec une latence réduite. Ce projet d'apprentissage visait à maîtriser la gestion des flux de données externes. Le dashboard se concentre sur l'affichage dynamique des variations de prix, le tout dans une interface rapide et responsive avec Tailwind CSS.",
    challenges: [
      "Maintenir une connexion WebSocket stable et gérer les reconnexions en cas d'interruption.",
      "Normalisation et traitement des flux de données brutes reçues de l'API Binance en temps réel."
    ],
    learnings: [
      "Gestion des appels API en temps réel et des protocoles WebSocket dans React.",
      "Optimisation de l'affichage dynamique de données financières complexes côté client."
    ]
  },
  {
    title: "Clone Messenger",
    shortDescription: "Application de messagerie en temps réel avec notifications et gestion des conversations de groupe.",
    fullDescription: "Clone d'une application de messagerie utilisant Next.js et Pusher (WebSockets) pour le chat en temps réel. Le projet intègre l'authentification avec NextAuth, gère les conversations de groupe et les messages privés. L'architecture backend utilise Prisma et une base de données relationnelle pour la persistance des données.",
    challenges: [
      "Gérer l'état en temps réel pour le chat et l'affichage des nouveaux messages sans rechargement de page.",
      "Mettre en place des WebSockets (Pusher) pour une communication bidirectionnelle fiable.",
      "Synchronisation des messages entre plusieurs utilisateurs et gestion des statuts 'vu'."
    ],
    learnings: [
      "Implémentation des WebSockets et des communications en temps réel (Pusher).",
      "Gestion des relations complexes (Un Utilisateur a plusieurs Conversations, une Conversation a plusieurs Messages, etc.) avec Prisma.",
      "Sécurisation des routes et des accès aux conversations privées via NextAuth."
    ],
    disclaimer: PROJECT_DISCLAIMERS.NOT_UPDATED.fr,
  },
  {
    title: "Clone Airbnb",
    shortDescription: "Réplique fonctionnelle d'Airbnb avec authentification, réservation et affichage cartographique des logements.",
    fullDescription: "Clone fonctionnel et complet d'Airbnb utilisant le stack moderne Next.js 13 et TypeScript. Ce projet inclut un système d'authentification robuste avec NextAuth (supportant Google Auth), la gestion des logements (création, édition), un système de réservation avec calcul des coûts, et l'affichage dynamique des propriétés sur une carte interactive grâce à Leaflet.",
    challenges: [
      "Sécuriser l'authentification des utilisateurs (NextAuth) et gérer les sessions.",
      "Implémenter une logique de dates de réservation complexes pour éviter les doubles réservations.",
      "Affichage dynamique et performant des logements sur carte (Leaflet) en fonction des filtres."
    ],
    learnings: [
      "Intégration complète de NextAuth avec des fournisseurs externes comme Google.",
      "Maîtrise de Prisma pour les opérations CRUD complexes sur une base de données MongoDB.",
      "Gestion des relations entre les tables (Utilisateurs, Logements, Réservations) dans un environnement Full Stack."
    ],
    disclaimer: PROJECT_DISCLAIMERS.NOT_UPDATED.fr,
  },
  {
    title: "Clone Twitter",
    shortDescription: "Clone du réseau social Twitter (X) avec fonctionnalités principales : tweets, likes, et abonnements.",
    fullDescription: "Clone fonctionnel de Twitter développé avec Next.js 13, TypeScript et MongoDB. Le projet permet aux utilisateurs de s'authentifier, de poster des 'tweets', de les aimer, et de suivre d'autres utilisateurs. L'interface utilisateur est construite avec Tailwind CSS et utilise des formulaires gérés par React Hook Form.",
    challenges: [
      "Gestion du feed en temps réel et affichage des tweets des personnes abonnées.",
      "Optimisation des performances pour le chargement des longues listes de tweets (pagination ou infinite scroll).",
      "Conception d'un modèle de données flexible dans MongoDB pour les relations 'suivi/followers'."
    ],
    learnings: [
      "Mise en œuvre de techniques de pagination et infinite scroll côté client et serveur.",
      "Structuration d'une application Next.js (gestion des API routes et des Server/Client Components).",
      "Maîtrise des formulaires complexes et de la validation avec React Hook Form."
    ],
    disclaimer: PROJECT_DISCLAIMERS.NOT_UPDATED.fr,
  },
  {
    title: "Catalogue automobile interactif",
    shortDescription: "Plateforme interactive pour la recherche et la visualisation de voitures (type catalogue automobile).",
    fullDescription: "Application d'entraînement personnelle servant de catalogue automobile. Développée en React et Next.js, elle présente un catalogue de voitures récupérées via RapidAPI et permet la recherche, le filtrage par critères (marque, modèle, année) et l'affichage détaillé des véhicules. L'interface utilise Tailwind CSS et des composants headless pour l'accessibilité.",
    challenges: [
      "Gestion d'un état global complexe sans backend dédié (pour le filtrage et la recherche).",
      "Création de composants UI génériques et réutilisables (modales, filtres).",
      "Intégration et gestion des clés API avec un service tiers (RapidAPI)."
    ],
    learnings: [
      "Structuration d'un projet React complet autour de la composition des composants.",
      "Pratique avancée de la gestion d'état dans une application Next.js.",
      "Utilisation des librairies Headless UI pour construire des composants accessibles."
    ],
    disclaimer: PROJECT_DISCLAIMERS.NOT_UPDATED.fr,
  },
  {
    title: "Architecture blockchain et standards de contrat",
    shortDescription: "Collection de contrats intelligents (Smart Contracts) pour l'apprentissage, mettant en œuvre des standards ERC (ERC-20, NFT).",
    fullDescription: "Divers projets d'architecture et de développement pour la machine virtuelle Ethereum (EVM). Ce travail se concentre sur l'implémentation sécurisée des standards de token (ERC-20, ERC-721) et la maîtrise du cycle de vie des contrats, y compris la rédaction de tests unitaires robustes. Les outils utilisés sont Solidity, Brownie (Python) et Hardhat (JavaScript) pour le déploiement et la vérification.",
    challenges: [
      "Compréhension approfondie et implémentation sécurisée des standards de token ERC.",
      "Écrire des tests unitaires robustes pour garantir la sécurité et la logique des contrats.",
      "Mettre en place un environnement de développement local (Ganache/Hardhat network)."
    ],
    learnings: [
      "Développement sécurisé en Solidity et compréhension des failles courantes.",
      "Utilisation des frameworks Python (Brownie) et JavaScript (Hardhat) pour le cycle de vie des smart contracts.",
      "Interaction avec les contrats déployés depuis un environnement frontend de test."
    ]
  },
    {
    title: "Web3 swap app",
    shortDescription: "DApp frontend pour l'échange de cryptomonnaies sur le réseau Ethereum via Uniswap.",
    fullDescription: "Application Décentralisée (DApp) permettant l'échange de tokens (swap) en interagissant avec les smart contracts Uniswap sur le réseau Ethereum. Le frontend gère l'intégration des portefeuilles Web3 (Wagmi, RainbowKit), l'estimation des prix en temps réel, le calcul du slippage et la soumission sécurisée des transactions via Ethers.js.",
    challenges: [
      "Établir une connexion sécurisée et stable avec le portefeuille de l'utilisateur (wallet connection).",
      "Gérer et afficher le slippage et les estimations de gaz en temps réel.",
      "Interaction asynchrone avec les fonctions des smart contracts (lecture et écriture de données)."
    ],
    learnings: [
      "Maîtrise des librairies Wagmi et Ethers.js pour l'interaction avec l'EVM.",
      "Compréhension des smart contracts de DEX (Decentralized Exchange) comme Uniswap.",
      "Gestion des erreurs de transaction blockchain complexes côté frontend."
    ]
  },
];


export const projectsEN_LANG: ProjectLang[] = [
  {
      title: "Real-time crypto news feed",
      shortDescription: "Web application displaying a continuous stream of cryptocurrency news using a WebSocket connection.",
      fullDescription: "Development of a responsive user interface (Front-end) to visualize a continuous stream of cryptocurrency market news. The application utilizes a WebSocket connection to establish a low-latency, bi-directional communication channel, ensuring users receive instant updates. The project focused on the efficiency of streaming data display and providing an optimal user experience, particularly in handling the volume of real-time data.",
      challenges: [
        "Ensuring the stability and efficiency of the WebSocket connection under a high volume of incoming messages.",
        "Optimizing UI rendering performance to maintain smoothness despite the constant arrival of new data (e.g., virtualized lists).",
        "Implementing robust failure handling and automatic reconnection mechanisms to ensure service continuity."
      ],
      learnings: [
        "Mastery of real-time communication protocols and the client-side implementation of WebSocket.",
        "Application state management and asynchronous updates using framework tools (e.g., Hooks, Context API, or dedicated library).",
        "Principles of reactive interface design and rendering optimization for data streaming applications."
      ]
  },
  {
    title: "Uniswap V3 quotes frontend estimation",
    shortDescription: "Front-end application for the calculation and display of real-time swap rates from Uniswap V3 liquidity pools.",
    fullDescription: "Web application built with Next.js and TypeScript, focused on blockchain interaction. It uses Wagmi/Viem for wallet connection and reading contract data, as well as Ethers.js utilities to derive and display accurate exchange rates (quotes) from Uniswap V3 pools. The project highlights real-time blockchain data management and the integration of a reactive UI with Tailwind CSS.",
    challenges: [
        "Mastering the complex Uniswap V3 mathematical model to calculate prices from the square root of the price (sqrtPriceX96).",
        "Ensuring the synchronization and performance of real-time data via Wagmi hooks (polling or WebSockets).",
        "Integrating modern Web3 libraries (Viem) for efficient interactions with the EVM."
    ],
    learnings: [
        "Advanced use of Wagmi and Viem to build a professional-grade front-end DApp.",
        "Practical understanding of a DEX (Decentralized Exchange) architecture and on-chain data reading.",
        "Developing a performant user interface capable of managing and displaying critical financial data."
    ],
  },
  {
    title: "Monetized AI agent (x402) - Daydreams/Lucid",
    shortDescription: "AI Agent (Daydreams/Lucid) integrating the x402 protocol (Coinbase) to monetize API calls on a per-request basis, deployed on Starknet.",
    fullDescription: "Development of a modular AI agent (Daydreams/Lucid Agents) exposing API endpoints for reading Starknet data (wallet balances, Ekubo prices, etc...). This project implements the native integration of the x402 protocol to secure and monetize every API call. The agent is configured to return the HTTP status 402 Payment Required, requiring the client (another agent or application) to perform an on-chain micropayment to unlock data access. It serves as a proof of concept for a per-usage API/service economy between agents based on real-time value exchange.",
    challenges: [
        "Integrating the x402 Paywall logic within an AI Agent (Lucid/Daydreams).",
        "Assuring synchronization between the agent's logic and the on-chain micropayment settlement.",
        "Managing the integration of disparate data sources (on-chain, Ekubo API, scraping).",
    ],
    learnings: [
        "Mastery of autonomous agent development and monetization via x402.",
        "Application of Layer 2s (Starknet) for fast, low-cost financial transactions.",
        "Techniques for developing Web3-native paid APIs.",
    ],
  },
  {
      title: "X402 paywall integration Test (Coinbase)",
      shortDescription: "A demo Next.js (DApp) implementing an on-chain Paywall mechanism based on the Coinbase X402 protocol, deployed on Base Sepolia.",
      fullDescription: "Next.js project integrating the Coinbase X402 protocol to create an on-chain API Paywall on Base Sepolia. It leverages Thirdweb for wallet connection and transaction management, ensuring only a verified payment unlocks premium content.",
      challenges: [
        "Managing client-server synchronization (verify / settle).",
        "Securing and validating on-chain payments.",
        "Implementing the Web3 `Facilitator` for X402 settlement authorization.",
      ],
      learnings: [
        "Mastering X402 architecture (Paywall initiation vs. settlement).",
        "Advanced integration of Thirdweb tools for micro-payment interactions.",
        "Application of Layer 2 for Web3 API monetization.",
      ]
  },
  {
    title: "Algorithmic trading bot",
    shortDescription: "Python bot for high-frequency trading on FTX based on technical analysis and market news.",
    fullDescription: "Development of a high-frequency trading robot in Python using the FTX WebSocket and REST APIs (prior to its closure) to execute orders. The strategy was based on technical analysis (classic indicators) coupled with monitoring news/announcements to anticipate volatility movements (information arbitrage strategy). The bot autonomously managed orders, positions, and risk.",
    challenges: [
      "Optimizing latency between data reception (WebSocket) and order execution (REST).",
      "Designing a robust system for tracking and analyzing relevant macroeconomic announcements.",
      "Implementing real-time and fault-tolerant risk management (stop-loss and order sizing)."
    ],
    learnings: [
      "Managing concurrency and asynchronous data streams with Python (Asyncio).",
      "Mastery of algorithmic trading concepts: execution, slippage, order book dynamics.",
      "Advanced use of scientific computing libraries Pandas and NumPy for market data analysis."
    ]
  },
  {
    title: "Crypto prices dashboard",
    shortDescription: "Near real-time dashboard for tracking and displaying cryptocurrency prices via the Binance API.",
    fullDescription: "Web app built with React and TypeScript utilizing the Binance API to fetch and display the prices of major trading pairs with low latency. This learning project focused on mastering external data stream management. The dashboard focuses on the dynamic display of price variations, all within a fast and responsive Tailwind CSS interface.",
    challenges: [
      "Maintaining a stable WebSocket connection and handling reconnections upon interruption.",
      "Normalizing and processing raw data streams received from the Binance API in real-time."
    ],
    learnings: [
      "Handling real-time API calls and WebSocket protocols in React.",
      "Optimizing the dynamic display of complex financial data on the client-side."
    ]
  },
  {
    title: "Messenger clone",
    shortDescription: "Real-time messaging application with notifications and group conversation management.",
    fullDescription: "A messaging application clone using Next.js and Pusher (WebSockets) for real-time chat. The project integrates authentication with NextAuth, manages group conversations and private messages. The backend architecture uses Prisma and a relational database for data persistence.",
    challenges: [
      "Managing real-time chat state and displaying new messages without page reload.",
      "Implementing WebSockets (Pusher) for reliable, bidirectional communication.",
      "Synchronizing messages between multiple users and managing 'seen' statuses."
    ],
    learnings: [
      "Implementation of WebSockets and real-time communication (Pusher).",
      "Managing complex relationships (A User has many Conversations, a Conversation has many Messages, etc.) with Prisma.",
      "Securing routes and access to private conversations via NextAuth."
    ],
    disclaimer: PROJECT_DISCLAIMERS.NOT_UPDATED.en,
  },
  {
    title: "Airbnb clone",
    shortDescription: "Functional Airbnb replica with authentication, booking, and map display of properties.",
    fullDescription: "Complete and functional Airbnb clone built using the modern Next.js 13 and TypeScript stack. This project includes a robust authentication system with NextAuth (supporting Google Auth), property management (creation, editing), a booking system with cost calculation, and dynamic display of properties on an interactive map using Leaflet.",
    challenges: [
      "Securing user authentication (NextAuth) and managing sessions.",
      "Implementing complex booking date logic to prevent double bookings.",
      "Dynamic and performant display of properties on maps (Leaflet) based on filters."
    ],
    learnings: [
      "Full integration of NextAuth with external providers like Google.",
      "Mastering Prisma for complex CRUD operations on a MongoDB database.",
      "Managing relationships between tables (Users, Properties, Reservations) in a Full Stack environment."
    ],
    disclaimer: PROJECT_DISCLAIMERS.NOT_UPDATED.en,
  },
  {
    title: "Twitter clone",
    shortDescription: "Functional Twitter (X) social network clone with core features: tweets, likes, and following.",
    fullDescription: "A functional Twitter clone developed with Next.js 13, TypeScript and MongoDB. The project allows users to authenticate, post 'tweets', like them, and follow other users. The UI is built with Tailwind CSS and utilizes forms managed by React Hook Form.",
    challenges: [
      "Managing the real-time feed and displaying tweets from followed users.",
      "Optimizing performance for loading long lists of tweets (pagination or infinite scroll).",
      "Designing a flexible data model in MongoDB for 'following/followers' relationships."
    ],
    learnings: [
      "Implementing pagination and infinite scroll techniques client-side and server-side.",
      "Structuring a Next.js application (managing API routes and Server/Client Components).",
      "Mastering complex forms and validation with React Hook Form."
    ],
    disclaimer: PROJECT_DISCLAIMERS.NOT_UPDATED.en,
  },
  {
    title: "Interactive car catalog",
    shortDescription: "Interactive platform for searching and viewing cars (automotive catalog type).",
    fullDescription: "A personal training application serving as an automotive catalog. Developed in React and Next.js, it presents a car catalog fetched via RapidAPI and allows searching, filtering by criteria (make, model, year), and dynamic display of vehicle details. The interface uses Tailwind CSS and headless components for accessibility.",
    challenges: [
      "Managing complex global state without a dedicated backend (for filtering and searching).",
      "Creating generic and reusable UI components (modals, filters).",
      "Integrating and managing API keys with a third-party service (RapidAPI)."
    ],
    learnings: [
      "Structuring a complete React project around component composition.",
      "Advanced practice of state management in a Next.js application.",
      "Using Headless UI libraries to build accessible components."
    ],
    disclaimer: PROJECT_DISCLAIMERS.NOT_UPDATED.en,
  },
  {
    title: "Blockchain architecture and contract standards",
    shortDescription: "Collection of Smart Contracts for learning, implementing ERC standards (ERC-20, NFT).",
    fullDescription: "Various architecture and development projects for the Ethereum Virtual Machine (EVM). This work focuses on the secure implementation of token standards (ERC-20, ERC-721) and mastering the contract lifecycle, including writing robust unit tests. The tools used are Solidity, Brownie (Python), and Hardhat (JavaScript) for deployment and verification.",
    challenges: [
      "In-depth understanding and secure implementation of ERC token standards.",
      "Writing robust unit tests to guarantee contract security and logic.",
      "Setting up a local development environment (Ganache/Hardhat network)."
    ],
    learnings: [
      "Secure development in Solidity and understanding common vulnerabilities.",
      "Using Python (Brownie) and JavaScript (Hardhat) frameworks for the smart contract lifecycle.",
      "Interacting with deployed contracts from a frontend testing environment."
    ]
  },
  {
    title: "Web3 Swap App",
    shortDescription: "Frontend DApp for exchanging cryptocurrencies on the Ethereum network via Uniswap.",
    fullDescription: "A Decentralized Application (DApp) allowing token exchange (swap) by interacting with the Uniswap smart contracts on the Ethereum network. The frontend handles Web3 wallet integration (Wagmi, RainbowKit), real-time price estimation, slippage calculation, and secure transaction submission via Ethers.js.",
    challenges: [
      "Establishing a secure and stable connection with the user's wallet (wallet connection).",
      "Managing and displaying slippage and gas estimations in real-time.",
      "Asynchronously interacting with smart contract functions (reading and writing data)."
    ],
    learnings: [
      "Mastery of Wagmi and Ethers.js libraries for interacting with the EVM.",
      "Understanding of DEX (Decentralized Exchange) smart contracts like Uniswap.",
      "Handling complex blockchain transaction errors on the frontend."
    ]
  },
];


const mergeProjects = (base: ProjectBase[], langData: ProjectLang[]): Project[] => {
    if (base.length !== langData.length) {
        console.error("Erreur de données: Les tableaux de base et de langue n'ont pas la même longueur.");
        // Retourne le tableau de base si les longueurs ne correspondent pas, pour éviter un crash
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