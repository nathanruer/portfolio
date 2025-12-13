export interface ProjectContent {
  title: string;
  shortDescription: string;
  fullDescription: string;
  challenges: string[];
  learnings: string[];
  disclaimer?: string;
}

export interface FullProject {
  id: number;
  order: number;

  imageUrl?: string | string[];
  demoUrl?: string;
  githubUrl?: string;

  technologies: string[];

  fr: ProjectContent;
  en: ProjectContent;
}

export type LocalizedProject = Omit<FullProject, 'fr' | 'en' | 'order'> & ProjectContent;

const PROJECT_DISCLAIMERS = {
  NOT_UPDATED: {
    fr: "Ce projet n'est plus activement mis à jour et n'est pas destiné à être utilisé en production.",
    en: "This project is no longer actively maintained and is not intended for production use.",
  },
} as const;

const projects: FullProject[] = [
  {
    id: 1,
    order: 1,
    imageUrl: [
      "/images/running-tracker/running-tracker-1.png", 
      "/images/running-tracker/running-tracker-2.png", 
      "/images/running-tracker/running-tracker-3.png", 
      "/images/running-tracker/running-tracker-4.png", 
      "/images/running-tracker/running-tracker-5.png", 
      "/images/running-tracker/running-tracker-6.png", 
      "/images/running-tracker/running-tracker-7.png"
    ],
    demoUrl: "https://nathanruer-running-tracker.vercel.app/",
    githubUrl: "https://github.com/nathanruer/running-tracker",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "PostgreSQL",
      "Prisma",
      "TanStack Query",
      "Tailwind CSS",
      "Radix UI",
      "React Hook Form",
      "Zod",
      "Recharts",
      "Strava API",
    ],
    fr: {
      title: "Running Tracker avec Coach IA",
      shortDescription:
        "Application Full Stack de suivi d'entraînements de course avec coach IA personnalisé et intégration Strava.",
      fullDescription:
        "Application web moderne de suivi d'entraînements de course à pied avec coach IA intégré. Développée avec Next.js 16 et React 19, l'application permet aux utilisateurs de suivre leurs séances d'entraînement (durée, distance, allure, fréquence cardiaque), d'importer leurs activités depuis Strava, et de recevoir des recommandations personnalisées d'un coach IA basé sur Groq (llama-3). Le coach analyse l'historique complet des entraînements, le profil physiologique de l'utilisateur (VMA, FC max, poids, objectifs) et génère des plans d'entraînement sur mesure.",
      challenges: [
        "Conception d'un système d'authentification sécurisé avec JWT et intégration OAuth Strava (gestion des refresh tokens).",
        "Architecture de prompts pour le coach IA capable de générer des recommandations cohérentes et validées (calculs distance/allure automatiquement corrigés).",
        "Optimisation des performances avec TanStack Query (infinite scroll, placeholders, invalidation intelligente des caches).",
        "Modélisation d'un schéma de données flexible supportant à la fois les séances complétées et planifiées avec leurs métriques respectives.",
        "Import et normalisation de données depuis sources multiples (Strava API, CSV en masse via papaparse).",
      ],
      learnings: [
        "Maîtrise de l'architecture Next.js 16 (App Router, Server/Client Components, API Routes serverless).",
        "Développement d'une application Full Stack moderne avec TypeScript strict et validation Zod.",
        "Intégration avancée d'IA générative avec gestion du contexte conversationnel et validation des sorties JSON.",
        "Gestion d'état complexe avec TanStack Query (pagination infinie, optimistic updates, synchronisation).",
        "Intégration OAuth complète avec gestion automatique du cycle de vie des tokens d'accès.",
        "Utilisation avancée de Prisma pour la modélisation relationnelle et les migrations PostgreSQL.",
        "Développement d'une UI accessible et performante avec Radix UI et système de design cohérent.",
      ],
    },
    en: {
      title: "Running Tracker with AI Coach",
      shortDescription:
        "Full Stack running training tracker with personalized AI coach and Strava integration.",
      fullDescription:
        "Modern web application for running training tracking with integrated AI coach. Built with Next.js 16 and React 19, the application enables users to track their training sessions (duration, distance, pace, heart rate), import activities from Strava, and receive personalized recommendations from an AI coach powered by Groq (llama-3). The coach analyzes the complete training history, user physiological profile (VO2max, max HR, weight, goals) and generates tailored training plans.",
      challenges: [
        "Designing a secure authentication system with JWT and Strava OAuth integration (refresh token management).",
        "Architecting prompts for the AI coach capable of generating coherent and validated recommendations (automatic distance/pace calculation corrections).",
        "Performance optimization with TanStack Query (infinite scroll, placeholders, intelligent cache invalidation).",
        "Modeling a flexible data schema supporting both completed and planned sessions with their respective metrics.",
        "Importing and normalizing data from multiple sources (Strava API, bulk CSV via papaparse).",
      ],
      learnings: [
        "Mastery of Next.js 16 architecture (App Router, Server/Client Components, serverless API Routes).",
        "Full Stack application development with strict TypeScript and Zod validation.",
        "Advanced generative AI integration with conversational context management and JSON output validation.",
        "Complex state management with TanStack Query (infinite pagination, optimistic updates, synchronization).",
        "Complete OAuth integration with automatic access token lifecycle management.",
        "Advanced use of Prisma for relational modeling and PostgreSQL migrations.",
        "Developing an accessible and performant UI with Radix UI and consistent design system.",
      ],
    },
  },

  {
    id: 2,
    order: 2,
    imageUrl: ["/images/hyperliquid-bot/hyperliquid-bot-1.png", "/images/hyperliquid-bot/hyperliquid-bot-2.png"],
    githubUrl: "https://github.com/nathanruer/hyperliquid-fastapi-gateway",
    technologies: [
      "Python",
      "FastAPI",
      "Hyperliquid SDK",
      "WebSocket",
      "Telegram Bot API",
      "Pydantic",
      "Uvicorn",
    ],
    fr: {
      title: "Bot de trading Hyperliquid avec API REST",
      shortDescription:
        "Infrastructure de trading complète avec API FastAPI, monitoring WebSocket et notifications Telegram automatisées.",
      fullDescription:
        "Infrastructure de trading professionnelle pour Hyperliquid construite avec FastAPI. L'architecture se compose d'une API REST sécurisée pour le trading programmatique (ouverture/fermeture de positions, consultation du compte) et d'un worker autonome de monitoring. Le système écoute en temps réel les trades via WebSocket et envoie des notifications Telegram détaillées incluant les métriques de performance. Architecture modulaire permettant un déploiement et un scaling indépendants des composants.",
      challenges: [
        "Architecture modulaire avec séparation API/Worker pour déploiement indépendant et scaling horizontal.",
        "Système de sécurité multi-couches : API Key authentication, rate limiting, CORS et mode read-only.",
        "Gestion des connexions WebSocket persistantes avec reconnexion automatique et buffer de messages.",
        "Intégration sécurisée du SDK Hyperliquid et gestion des clés privées Ethereum.",
      ],
      learnings: [
        "Maîtrise de FastAPI avec documentation auto-générée et validation Pydantic.",
        "Architecture microservices en Python avec séparation des responsabilités.",
        "WebSocket en production : monitoring temps réel et gestion d'événements asynchrones.",
        "Développement de bots Telegram pour alertes automatisées.",
        "Patterns de sécurité avancés : middleware custom, rate limiting et validation stricte.",
        "Gestion de clés cryptographiques Ethereum et signature de transactions.",
      ],
    },
    en: {
      title: "Hyperliquid Trading Bot with REST API",
      shortDescription:
        "Complete trading infrastructure with FastAPI API, WebSocket monitoring, and automated Telegram notifications.",
      fullDescription:
        "Professional trading infrastructure for Hyperliquid built with FastAPI. The architecture consists of a secured REST API for programmatic trading (opening/closing positions, account consultation) and an autonomous monitoring worker. The system listens to trades in real-time via WebSocket and sends detailed Telegram notifications including performance metrics. Modular architecture enabling independent deployment and scaling of components.",
      challenges: [
        "Modular architecture with API/Worker separation for independent deployment and horizontal scaling.",
        "Multi-layer security system: API Key authentication, rate limiting, CORS, and read-only mode.",
        "Managing persistent WebSocket connections with automatic reconnection and message buffering.",
        "Secure Hyperliquid SDK integration and Ethereum private key management.",
      ],
      learnings: [
        "FastAPI mastery with auto-generated documentation and Pydantic validation.",
        "Python microservices architecture with separation of responsibilities.",
        "Production WebSocket: real-time monitoring and asynchronous event handling.",
        "Telegram bot development for automated alerts.",
        "Advanced security patterns: custom middleware, rate limiting, and strict validation.",
        "Ethereum cryptographic key management and transaction signing.",
      ],
    },
  },

  {
    id: 3,
    order: 3,
    imageUrl: "/images/uniswapV3-quotes-frontend.png",
    demoUrl: "https://nathanruer-frontend-uniswapv3-quotes.vercel.app/",
    githubUrl: "https://github.com/nathanruer/frontend-uniswapV3-quotes",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Wagmi",
      "Viem",
      "RainbowKit",
      "TanStack Query",
      "Ethers.js",
      "Uniswap V3 SDK",
      "Multicall3",
    ],
    fr: {
      title: "Calculateur de cotations Uniswap V3 multi-chaînes",
      shortDescription:
        "DApp de calcul optimisé de cotations Uniswap V3 avec routing multi-path intelligent et support multi-chaînes.",
      fullDescription:
        "Application DeFi spécialisée dans le calcul optimisé de cotations Uniswap V3 sur plusieurs chaînes. Le système implémente un routing multi-path intelligent testant automatiquement 68 routes possibles (directs + multi-hop via USDC/WETH/WBTC) pour identifier le meilleur prix. Utilise Multicall3 pour agréger toutes les requêtes en un seul appel RPC, réduisant le temps de calcul de 98%. L'application gère nativement ETH avec conversion automatique vers WETH, intègre la recherche dynamique d'ERC20 on-chain, et supporte Ethereum, Base et Sepolia avec RainbowKit pour la connexion wallet.",
      challenges: [
        "Encodage Uniswap V3 packed bytes avec gestion multi-hop récursive et conversion des fee tiers.",
        "Optimisation RPC avec Multicall3 : agrégation de 68 calls en un seul batch (temps réduit de 13s à 200ms).",
        "Architecture de routing multi-path avec génération automatique des routes et sélection du meilleur prix.",
        "Gestion native ETH avec mapping automatique vers WETH pour compatibilité pools.",
        "Recherche ERC20 dynamique on-chain avec validation d'adresse et filtrage par chaîne.",
      ],
      learnings: [
        "Maîtrise d'Uniswap V3 : QuoterV2, concentrated liquidity pools et routing multi-hop.",
        "Patterns d'optimisation DeFi : batch RPC avec Multicall3 et tolérance aux erreurs.",
        "Stack Web3 type-safe avec Wagmi, Viem et TanStack Query pour cache blockchain.",
        "Architecture multi-chaînes avec configuration par chainId et gestion du network switch.",
        "Développement DApp complet avec RainbowKit et gestion des states asynchrones.",
        "Compréhension des protocoles DeFi : read vs write operations et rôle des Quoter contracts.",
      ],
    },
    en: {
      title: "Multi-chain Uniswap V3 Quote Calculator",
      shortDescription:
        "DApp for optimized Uniswap V3 quote calculation with intelligent multi-path routing and multi-chain support.",
      fullDescription:
        "DeFi application specialized in optimized Uniswap V3 quote calculations across multiple chains. The system implements intelligent multi-path routing that automatically tests 68 possible routes (direct + multi-hop via USDC/WETH/WBTC) to identify the best price. Uses Multicall3 to aggregate all requests into a single RPC call, reducing calculation time by 98%. The application natively handles ETH with automatic WETH conversion, integrates dynamic on-chain ERC20 lookup, and supports Ethereum, Base, and Sepolia with RainbowKit for wallet connection.",
      challenges: [
        "Uniswap V3 packed bytes encoding with recursive multi-hop handling and fee tier conversion.",
        "RPC optimization with Multicall3: aggregating 68 calls into a single batch (time reduced from 13s to 200ms).",
        "Multi-path routing architecture with automatic route generation and best price selection.",
        "Native ETH handling with automatic WETH mapping for pool compatibility.",
        "Dynamic on-chain ERC20 lookup with address validation and chain filtering.",
      ],
      learnings: [
        "Uniswap V3 mastery: QuoterV2, concentrated liquidity pools, and multi-hop routing.",
        "DeFi optimization patterns: batch RPC with Multicall3 and error tolerance.",
        "Type-safe Web3 stack with Wagmi, Viem, and TanStack Query for blockchain cache.",
        "Multi-chain architecture with chainId-based configuration and network switch handling.",
        "Complete DApp development with RainbowKit and asynchronous state management.",
        "Understanding DeFi protocols: read vs write operations and Quoter contract roles.",
      ],
    },
  },

  {
    id: 4,
    order: 4,
    imageUrl: "/images/crypto-news-feed.png",
    demoUrl: "https://crypto-news-feed.vercel.app/",
    githubUrl: "https://github.com/nathanruer/crypto-news-feed",
    technologies: [
      "React",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "Shadcn/ui",
      "Radix UI",
      "WebSocket",
      "React Query",
      "React Hook Form",
      "Zod",
    ],
    fr: {
      title: "Fil d'actualité crypto en temps réel",
      shortDescription:
        "Agrégateur temps réel de news crypto avec WebSocket résilient et interface à double colonne (Articles/Tweets).",
      fullDescription:
        "Application web temps réel de news crypto construite avec React 18 et Vite. L'architecture repose sur un custom hook WebSocket avec reconnexion automatique et gestion de la mémoire par sliding window. L'interface propose une disposition à deux colonnes avec recherche indépendante multi-champs, modes d'affichage (récents/historique), et animations pour les nouveaux éléments. Les cartes incluent des liens directs vers les exchanges (Binance, Bybit) pour accéder rapidement aux paires de trading. Design system avec shadcn/ui et performances optimisées via memoization.",
      challenges: [
        "Custom hook WebSocket robuste avec reconnexion automatique et prévention des memory leaks.",
        "Architecture state management à trois niveaux avec dual-buffer et séparation articles/tweets.",
        "Optimisation du rendu de listes dynamiques avec memoization et sliding window.",
        "Interface à deux colonnes avec états indépendants et gestion des interactions imbriquées.",
      ],
      learnings: [
        "Maîtrise des WebSocket client-side : lifecycle complet et stratégies de reconnexion.",
        "Patterns React avancés : custom hooks complexes, useRef et memoization pour performance.",
        "State management sans librairie externe : dual-buffer pattern et computed state.",
        "UI temps réel performante avec animations smooth et gestion de listes longues.",
        "Intégration shadcn/ui avec tokens HSL et design system cohérent.",
      ],
    },
    en: {
      title: "Real-time crypto news feed",
      shortDescription:
        "Real-time crypto news aggregator with resilient WebSocket and dual-column interface (Articles/Tweets).",
      fullDescription:
        "Real-time crypto news web application built with React 18 and Vite. The architecture relies on a custom WebSocket hook with automatic reconnection and sliding window memory management. The interface features a two-column layout with independent multi-field search, display modes (recent/history), and animations for new items. Cards include direct links to exchanges (Binance, Bybit) for quick access to trading pairs. Design system with shadcn/ui and performance optimized via memoization.",
      challenges: [
        "Robust custom WebSocket hook with automatic reconnection and memory leak prevention.",
        "Three-level state management architecture with dual-buffer and articles/tweets separation.",
        "Optimizing dynamic list rendering with memoization and sliding window.",
        "Two-column interface with independent states and nested interaction handling.",
      ],
      learnings: [
        "Client-side WebSocket mastery: complete lifecycle and reconnection strategies.",
        "Advanced React patterns: complex custom hooks, useRef, and memoization for performance.",
        "State management without external library: dual-buffer pattern and computed state.",
        "Performant real-time UI with smooth animations and long list handling.",
        "shadcn/ui integration with HSL tokens and consistent design system.",
      ],
    },
  },

  {
    id: 5,
    order: 5,
    githubUrl: "https://github.com/nathanruer/test-lucid-agent",
    technologies: [
      "TypeScript",
      "Bun",
      "Lucid Agents",
      "Starknet.js",
      "Coinbase X402",
      "Ekubo API",
      "Playwright",
      "Zod",
    ],
    fr: {
      title: "Agent IA monétisé Starknet (x402)",
      shortDescription:
        "Agent autonome monétisé exposant des données Starknet : analyse de portefeuilles, prix de tokens et métriques DeFi.",
      fullDescription:
        "Agent d'IA autonome construit avec Lucid Agent Kit, exposant des endpoints API monétisés pour l'écosystème Starknet. L'agent combine scraping Playwright de Starkscan pour l'analyse de portfolio et intégration API Ekubo pour le pricing DeFi. Implémente le protocole x402 de Coinbase pour la monétisation native : chaque requête nécessite un micropaiement on-chain (Base/Starknet) avant l'accès aux données. Architecture hybride on-chain/off-chain avec fallback automatique et cache in-memory. Fonctionnalités incluant l'analyse de portefeuilles avec valorisation USD, prix de tokens en temps réel, classement par volume/TVL, et directory des tokens échangeables.",
      challenges: [
        "Intégration complète du protocole x402 pour monétisation on-chain des appels API.",
        "Architecture hybride avec fallback automatique entre RPC on-chain et scraping Playwright.",
        "Système d'enrichissement de prix avec résolution Ekubo et fetching parallèle VWAP.",
        "Web scraping robuste de Starkscan avec gestion des timeouts et parsing HTML dynamique.",
      ],
      learnings: [
        "Développement d'agents autonomes avec Lucid Agent Kit et configuration des payments x402.",
        "Monétisation d'APIs Web3 natives via protocole x402 et facilitator Coinbase.",
        "Intégration complète de l'écosystème Starknet : Ekubo API, RPC et explorers.",
        "Patterns d'architecture résilient avec fallback multi-niveaux et caching avec expiration.",
        "Web scraping production-grade avec Playwright et extraction robuste de données.",
      ],
    },
    en: {
      title: "Monetized Starknet AI Agent (x402)",
      shortDescription:
        "Autonomous monetized agent exposing Starknet data: portfolio analysis, token prices, and DeFi metrics.",
      fullDescription:
        "Autonomous AI agent built with Lucid Agent Kit, exposing monetized API endpoints for the Starknet ecosystem. The agent combines Playwright scraping of Starkscan for portfolio discovery and Ekubo API integration for DeFi pricing. Implements Coinbase's x402 protocol for native monetization: each request requires an on-chain micropayment (Base/Starknet) before data access. Hybrid on-chain/off-chain architecture with automatic fallback and in-memory cache. Features include portfolio analysis with USD valuation, real-time token prices, volume/TVL rankings, and tradeable token directory.",
      challenges: [
        "Complete x402 protocol integration for on-chain API call monetization.",
        "Hybrid architecture with automatic fallback between on-chain RPC and Playwright scraping.",
        "Price enrichment system with Ekubo resolution and parallel VWAP fetching.",
        "Robust Starkscan web scraping with timeout handling and dynamic HTML parsing.",
      ],
      learnings: [
        "Autonomous agent development with Lucid Agent Kit and x402 payment configuration.",
        "Native Web3 API monetization via x402 protocol and Coinbase facilitator.",
        "Complete Starknet ecosystem integration: Ekubo API, RPC, and explorers.",
        "Resilient architecture patterns with multi-level fallback and cache expiration.",
        "Production-grade web scraping with Playwright and robust data extraction.",
      ],
    },
  },

  {
    id: 6,
    order: 6,
    githubUrl: "https://github.com/nathanruer/test-x402",
    technologies: ["Next.js", "TypeScript", "Shadcn", "Thirdweb", "Coinbase X402"],
    fr: {
      title: "Intégration du paywall X402 (Coinbase)",
      shortDescription:
        "Démonstration d'implémentation du protocole X402 de Coinbase pour paywall on-chain sur Base Sepolia.",
      fullDescription:
        "Projet de démonstration Next.js intégrant le protocole X402 de Coinbase pour créer un paywall d'API on-chain. Utilise Thirdweb pour la connexion wallet et la gestion des transactions, garantissant que seul un paiement vérifié on-chain débloque l'accès au contenu premium. Implémentation du facilitator Web3 pour l'autorisation des règlements.",
      challenges: [
        "Synchronisation client-serveur pour les cycles verify/settle.",
        "Validation sécurisée des paiements on-chain.",
        "Configuration du facilitator Web3 pour autorisation des règlements.",
      ],
      learnings: [
        "Architecture X402 : initiation vs règlement du paywall.",
        "Intégration Thirdweb pour micro-paiements Web3.",
        "Application Layer 2 pour monétisation d'APIs.",
      ],
    },
    en: {
      title: "X402 paywall integration (Coinbase)",
      shortDescription:
        "Demonstration of Coinbase X402 protocol implementation for on-chain paywall on Base Sepolia.",
      fullDescription:
        "Next.js demonstration project integrating the Coinbase X402 protocol to create an on-chain API paywall. Uses Thirdweb for wallet connection and transaction management, ensuring that only verified on-chain payment unlocks access to premium content. Implementation of Web3 facilitator for settlement authorization.",
      challenges: [
        "Client-server synchronization for verify/settle cycles.",
        "Secure on-chain payment validation.",
        "Web3 facilitator configuration for settlement authorization.",
      ],
      learnings: [
        "X402 architecture: paywall initiation vs settlement.",
        "Thirdweb integration for Web3 micro-payments.",
        "Layer 2 application for API monetization.",
      ],
    },
  },

  {
    id: 7,
    order: 7,
    imageUrl: "/images/crypto-prices-binance.png",
    demoUrl: "https://crypto-screener-application-nathanruer.vercel.app/",
    githubUrl: "https://github.com/nathanruer/crypto-prices-binance",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Binance API"],
    fr: {
      title: "Dashboard de prix crypto",
      shortDescription:
        "Dashboard d'affichage et de suivi des prix des cryptomonnaies en temps quasi-réel via l'API Binance.",
      fullDescription:
        "Application web construite avec React et TypeScript utilisant l'API WebSocket de Binance pour obtenir et afficher les prix des principales paires de trading avec une latence réduite. Le dashboard permet le monitoring en direct des variations de prix avec mises à jour continues. Interface responsive avec Tailwind CSS présentant les données de marché de manière claire et structurée. Projet d'apprentissage axé sur la maîtrise des flux de données temps réel et leur rendu performant côté client.",
      challenges: [
        "Maintenir une connexion WebSocket stable avec stratégie de reconnexion automatique.",
        "Normalisation et parsing des messages bruts JSON de l'API Binance.",
        "Optimisation du rendu pour les mises à jour fréquentes sans dégradation des performances.",
        "Gestion de la mémoire avec accumulation de données et nettoyage périodique.",
      ],
      learnings: [
        "Gestion des protocoles WebSocket dans React avec hooks personnalisés.",
        "Patterns d'optimisation pour affichage temps réel : memoization et throttling.",
        "Architecture de state management pour flux de données financières.",
        "Intégration API Binance et compréhension des structures de données market streams.",
        "Conception d'interfaces pour visualisation de données financières dynamiques.",
      ],
    },
    en: {
      title: "Crypto prices dashboard",
      shortDescription:
        "Near real-time dashboard for tracking and displaying cryptocurrency prices via the Binance API.",
      fullDescription:
        "Web app built with React and TypeScript utilizing the Binance WebSocket API to fetch and display prices of major trading pairs with low latency. The dashboard enables live monitoring of price variations with continuous updates. Responsive interface built with Tailwind CSS presenting market data in a clear and structured manner. Learning project focused on mastering real-time data streams and performant client-side rendering.",
      challenges: [
        "Maintaining stable WebSocket connection with automatic reconnection strategy.",
        "Normalizing and parsing raw JSON messages from the Binance API.",
        "Optimizing rendering for frequent updates without performance degradation.",
        "Managing memory with data accumulation and periodic cleanup.",
      ],
      learnings: [
        "Managing WebSocket protocols in React with custom hooks.",
        "Optimization patterns for real-time display: memoization and throttling.",
        "State management architecture for financial data streams.",
        "Binance API integration and understanding market stream data structures.",
        "Interface design for dynamic financial data visualization.",
      ],
    },
  },

  {
    id: 8,
    order: 8,
    imageUrl: "/images/digital-noise.png",
    demoUrl: "https://nathanruer-digital-noise.vercel.app/",
    githubUrl: "https://github.com/nathanruer/digital-noise",
    technologies: [
      "React",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "Radix UI",
      "Shadcn/ui",
      "GSAP",
      "Lenis",
      "React Hook Form",
      "Zod",
    ],
    fr: {
      title: "Digital Noise - Portfolio néo-brutaliste expérimental",
      shortDescription:
        "Landing page créative avec design néo-brutaliste, curseur personnalisé, smooth scroll Lenis, système de confettis custom et animations GSAP avancées.",
      fullDescription:
        "Projet expérimental de design web axé sur l'esthétique néo-brutaliste : ombres dures sans blur, zéro border-radius, palette haute saturation et typographies géométriques. Construit avec React 18 et Vite pour des builds ultra-rapides. Implémente un curseur personnalisé via requestAnimationFrame avec détection hover et expansion dynamique. Intégration Lenis pour smooth scrolling avec easing custom. Animations GSAP orchestrées avec ScrollTrigger pour parallax, entrées stagger et mouse-tracking avec elastic bounce. Système de confettis custom built-from-scratch avec génération programmatique de particules et trajectoires randomisées. Design system complet avec shadows néo-brutalistes, grain texture overlay et scrollbar stylée. Interface incluant loader animé, marquee infini, service cards interactives et manifesto section. Stack UI moderne avec Shadcn/ui, React Hook Form et Zod.",
      challenges: [
        "Développement d'un curseur personnalisé performant via requestAnimationFrame avec easing interpolation, détection hover sur tous les éléments interactifs, et mix-blend-difference pour contraste automatique sur tous backgrounds.",
        "Orchestration d'animations GSAP complexes : ScrollTrigger pour parallax multi-vitesse, timeline sequences avec stagger, mouse-tracking tilt avec elastic bounce, et cleanup proper pour éviter les memory leaks.",
        "Création d'un système de confettis from scratch : génération programmatique de particules DOM, calcul de trajectoires avec angles randomisés, animations GSAP simultanées, et removal automatique post-animation.",
        "Implémentation d'un design system néo-brutaliste cohérent : shadows dures multi-niveaux, zéro border-radius global, palette saturée avec HSL variables, grain texture overlay et typography system custom.",
        "Optimisation des performances d'animation avec réduction du reflow/repaint et utilisation de transform/opacity pour animations GPU.",
      ],
      learnings: [
        "Maîtrise de GSAP pour animations avancées : ScrollTrigger, timeline sequencing avec custom easings, et best practices pour cleanup et performance.",
        "Développement d'interactions custom : curseur requestAnimationFrame, mouse-tracking avec event delegation, et système de particules from scratch.",
        "Architecture design néo-brutaliste : principes du mouvement (honesty in materials, bold expression, anti-minimalism) et implémentation technique des éléments caractéristiques.",
        "Intégration Lenis smooth scroll avec synchronisation GSAP ScrollTrigger et optimisations performance.",
        "Patterns de performance web : requestAnimationFrame pour animations fluides et gestion des ressources graphiques.",
        "Composition d'effets visuels complexes avec CSS blend modes et layering.",
      ],
    },
    en: {
      title: "Digital Noise - Experimental Neo-Brutalist Portfolio",
      shortDescription:
        "Creative landing page with neo-brutalist design, custom cursor, Lenis smooth scroll, custom confetti system, and advanced GSAP animations.",
      fullDescription:
        "Experimental web design project focused on neo-brutalist aesthetics: hard shadows without blur, zero border-radius, high saturation palette, and geometric typography. Built with React 18 and Vite for ultra-fast builds. Implements custom cursor via requestAnimationFrame with hover detection and dynamic expansion. Lenis integration for smooth scrolling with custom easing. Orchestrated GSAP animations with ScrollTrigger for parallax, staggered entrances, and mouse-tracking with elastic bounce. Custom-built confetti system with programmatic particle generation and randomized trajectories. Complete design system with neo-brutalist shadows, grain texture overlay, and styled scrollbar. Interface includes animated loader, infinite marquee, interactive service cards, and manifesto section. Modern UI stack with Shadcn/ui, React Hook Form, and Zod.",
      challenges: [
        "Developing a performant custom cursor via requestAnimationFrame with easing interpolation, hover detection on all interactive elements, and mix-blend-difference for automatic contrast on all backgrounds.",
        "Orchestrating complex GSAP animations: ScrollTrigger for multi-speed parallax, timeline sequences with stagger, mouse-tracking tilt with elastic bounce, and proper cleanup to prevent memory leaks.",
        "Creating a confetti system from scratch: programmatic DOM particle generation, trajectory calculations with randomized angles, simultaneous GSAP animations, and automatic post-animation removal.",
        "Implementing a cohesive neo-brutalist design system: multi-level hard shadows, global zero border-radius, saturated palette with HSL variables, grain texture overlay, and custom typography system.",
        "Optimizing animation performance with reduced reflow/repaint and using transform/opacity for GPU-accelerated animations.",
      ],
      learnings: [
        "GSAP mastery for advanced animations: ScrollTrigger, timeline sequencing with custom easings, and best practices for cleanup and performance.",
        "Custom interaction development: requestAnimationFrame cursor, mouse-tracking with event delegation, and particle system from scratch.",
        "Neo-brutalist design architecture: movement principles (honesty in materials, bold expression, anti-minimalism) and technical implementation of characteristic elements.",
        "Lenis smooth scroll integration with GSAP ScrollTrigger synchronization and performance optimizations.",
        "Web performance patterns: requestAnimationFrame for smooth animations and graphics resource management.",
        "Complex visual effects composition with CSS blend modes and layering.",
      ],
    },
  },

  {
    id: 9,
    order: 9,
    githubUrl: "https://github.com/nathanruer/messenger-clone",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "NextAuth",
      "Prisma",
      "Tailwind CSS",
      "Pusher (WebSockets)",
    ],
    fr: {
      title: "Clone Messenger",
      shortDescription:
        "Application de messagerie en temps réel avec notifications et gestion des conversations de groupe.",
      fullDescription:
        "Clone d'une application de messagerie utilisant Next.js et Pusher pour le chat en temps réel. Le projet intègre l'authentification avec NextAuth, gère les conversations de groupe et les messages privés avec système de notifications. L'architecture backend utilise Prisma avec base de données relationnelle pour la persistance. Interface construite avec Tailwind CSS présentant les conversations, messages et statuts de lecture.",
      challenges: [
        "Gestion de l'état temps réel pour le chat avec affichage instantané des nouveaux messages.",
        "Intégration WebSocket Pusher pour communication bidirectionnelle fiable et notifications live.",
        "Synchronisation des messages multi-utilisateurs avec statuts de lecture et typing indicators.",
      ],
      learnings: [
        "Implémentation complète de WebSocket avec Pusher pour communications temps réel.",
        "Architecture de relations complexes avec Prisma : utilisateurs, conversations, messages et participants.",
        "Sécurisation des routes et accès aux conversations via NextAuth.",
        "Patterns de state management pour applications de messagerie temps réel.",
      ],
      disclaimer: PROJECT_DISCLAIMERS.NOT_UPDATED.fr,
    },
    en: {
      title: "Messenger clone",
      shortDescription:
        "Real-time messaging application with notifications and group conversation management.",
      fullDescription:
        "A messaging application clone using Next.js and Pusher for real-time chat. The project integrates authentication with NextAuth, manages group conversations and private messages with notification system. Backend architecture uses Prisma with relational database for persistence. Interface built with Tailwind CSS featuring conversations, messages, and read status displays.",
      challenges: [
        "Managing real-time state for chat with instant display of new messages.",
        "Integrating Pusher WebSocket for reliable bidirectional communication and live notifications.",
        "Synchronizing messages across multiple users with read statuses and typing indicators.",
      ],
      learnings: [
        "Complete WebSocket implementation with Pusher for real-time communications.",
        "Complex relationship architecture with Prisma: users, conversations, messages, and participants.",
        "Securing routes and conversation access via NextAuth.",
        "State management patterns for real-time messaging applications.",
      ],
      disclaimer: PROJECT_DISCLAIMERS.NOT_UPDATED.en,
    },
  },

  {
    id: 10,
    order: 10,
    imageUrl: "/images/airbnb-clone.png",
    demoUrl: "https://airbnb-clone-nathanruer.vercel.app/",
    githubUrl: "https://github.com/nathanruer/airbnb-clone",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "NextAuth",
      "MongoDB",
      "Prisma",
      "Tailwind CSS",
      "Leaflet",
    ],
    fr: {
      title: "Clone Airbnb",
      shortDescription:
        "Réplique fonctionnelle d'Airbnb avec authentification, réservation et affichage cartographique des logements.",
      fullDescription:
        "Clone fonctionnel et complet d'Airbnb utilisant Next.js 13 et TypeScript. Le projet intègre un système d'authentification avec NextAuth (supportant Google OAuth), la gestion complète des logements (création, édition, suppression), un système de réservation avec calcul automatique des coûts et vérification des disponibilités, et l'affichage dynamique des propriétés sur carte interactive Leaflet. L'architecture backend utilise Prisma avec MongoDB pour la persistance des données. Interface responsive avec Tailwind CSS présentant recherche par destination, filtres de prix et calendrier de réservation.",
      challenges: [
        "Système d'authentification sécurisé avec NextAuth et gestion des sessions côté serveur.",
        "Logique de réservation avec validation des dates pour prévenir les conflits de disponibilités.",
        "Calcul dynamique des coûts avec tarification par nuit et frais de service.",
        "Affichage cartographique performant avec Leaflet et clustering des markers selon les filtres.",
        "Upload et gestion des images de propriétés avec optimisation et stockage.",
      ],
      learnings: [
        "Intégration complète de NextAuth avec providers OAuth externes (Google).",
        "Architecture Full Stack avec Next.js API Routes et gestion d'état client/serveur.",
        "Maîtrise de Prisma pour opérations CRUD complexes sur MongoDB avec relations.",
        "Implémentation de systèmes de réservation avec gestion de disponibilités et conflits.",
        "Intégration de cartes interactives avec Leaflet et customisation des layers.",
        "Patterns de conception pour applications de marketplace : listings, bookings et reviews.",
      ],
      disclaimer: PROJECT_DISCLAIMERS.NOT_UPDATED.fr,
    },
    en: {
      title: "Airbnb clone",
      shortDescription:
        "Functional Airbnb replica with authentication, booking, and map display of properties.",
      fullDescription:
        "Complete and functional Airbnb clone built using Next.js 13 and TypeScript. The project integrates an authentication system with NextAuth (supporting Google OAuth), complete property management (creation, editing, deletion), a booking system with automatic cost calculation and availability verification, and dynamic display of properties on an interactive Leaflet map. Backend architecture uses Prisma with MongoDB for data persistence. Responsive interface with Tailwind CSS featuring destination search, price filters, and booking calendar.",
      challenges: [
        "Secure authentication system with NextAuth and server-side session management.",
        "Booking logic with date validation to prevent availability conflicts.",
        "Dynamic cost calculation with per-night pricing and service fees.",
        "Performant map display with Leaflet and marker clustering based on filters.",
        "Property image upload and management with optimization and storage.",
      ],
      learnings: [
        "Complete NextAuth integration with external OAuth providers (Google).",
        "Full Stack architecture with Next.js API Routes and client/server state management.",
        "Mastering Prisma for complex CRUD operations on MongoDB with relationships.",
        "Implementing booking systems with availability management and conflict resolution.",
        "Interactive map integration with Leaflet and layer customization.",
        "Design patterns for marketplace applications: listings, bookings, and reviews.",
      ],
      disclaimer: PROJECT_DISCLAIMERS.NOT_UPDATED.en,
    },
  },

  {
    id: 11,
    order: 11,
    githubUrl: "https://github.com/nathanruer/twitter-clone",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "NextAuth",
      "MongoDB",
      "Tailwind CSS",
      "React Hook Form",
    ],
    fr: {
      title: "Clone Twitter",
      shortDescription:
        "Clone du réseau social Twitter (X) avec fonctionnalités principales : tweets, likes, et abonnements.",
      fullDescription:
        "Clone fonctionnel de Twitter développé avec Next.js 13, TypeScript et MongoDB. Le projet permet aux utilisateurs de s'authentifier, de poster des tweets, de les aimer, de commenter et de suivre d'autres utilisateurs. Le feed dynamique affiche les tweets des comptes suivis avec système de likes et retweets. Interface construite avec Tailwind CSS et formulaires gérés par React Hook Form avec validation. Architecture backend avec API Routes Next.js et Prisma pour la persistance des données.",
      challenges: [
        "Architecture de feed dynamique affichant les tweets des comptes suivis avec mises à jour optimistes.",
        "Implémentation d'infinite scroll performant avec pagination cursor-based pour longues listes.",
        "Modélisation MongoDB des relations sociales : followers, following, et graphe de connexions.",
        "Système d'interactions complexes : likes, retweets, comments avec compteurs temps réel.",
      ],
      learnings: [
        "Techniques de pagination avancées : infinite scroll et cursor-based pagination.",
        "Architecture Next.js Full Stack avec API Routes et Server/Client Components.",
        "Maîtrise de React Hook Form pour formulaires complexes et validation en temps réel.",
        "Modélisation de relations sociales dans MongoDB avec Prisma.",
        "Patterns d'optimistic updates pour interactions sociales fluides.",
      ],
      disclaimer: PROJECT_DISCLAIMERS.NOT_UPDATED.fr,
    },
    en: {
      title: "Twitter clone",
      shortDescription:
        "Functional Twitter (X) social network clone with core features: tweets, likes, and following.",
      fullDescription:
        "A functional Twitter clone developed with Next.js 13, TypeScript and MongoDB. The project allows users to authenticate, post tweets, like them, comment, and follow other users. Dynamic feed displays tweets from followed accounts with likes and retweets system. Interface built with Tailwind CSS and forms managed by React Hook Form with validation. Backend architecture with Next.js API Routes and Prisma for data persistence.",
      challenges: [
        "Dynamic feed architecture displaying tweets from followed accounts with optimistic updates.",
        "Performant infinite scroll implementation with cursor-based pagination for long lists.",
        "MongoDB modeling of social relationships: followers, following, and connection graph.",
        "Complex interaction system: likes, retweets, comments with real-time counters.",
      ],
      learnings: [
        "Advanced pagination techniques: infinite scroll and cursor-based pagination.",
        "Full Stack Next.js architecture with API Routes and Server/Client Components.",
        "Mastering React Hook Form for complex forms and real-time validation.",
        "Social relationship modeling in MongoDB with Prisma.",
        "Optimistic update patterns for smooth social interactions.",
      ],
      disclaimer: PROJECT_DISCLAIMERS.NOT_UPDATED.en,
    },
  },

  {
    id: 12,
    order: 12,
    imageUrl: "/images/carhub-app.png",
    demoUrl: "https://carhub-nathanruer.vercel.app/",
    githubUrl: "https://github.com/nathanruer/carhub-app",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Headless UI",
      "RapidAPI",
    ],
    fr: {
      title: "Catalogue automobile interactif",
      shortDescription:
        "Plateforme interactive pour la recherche et la visualisation de voitures (type catalogue automobile).",
      fullDescription:
        "Application catalogue automobile développée en React et Next.js pour l'apprentissage. Le catalogue présente des voitures récupérées via RapidAPI avec système de recherche et filtrage multi-critères (marque, modèle, année, carburant, transmission). Interface responsive construite avec Tailwind CSS et composants Headless UI pour l'accessibilité. Affichage détaillé des véhicules avec spécifications techniques et images dynamiques.",
      challenges: [
        "Architecture de state management côté client pour filtrage multi-critères sans backend dédié.",
        "Création de composants UI génériques et réutilisables : modales, dropdowns, filtres.",
        "Intégration RapidAPI avec gestion des clés et rate limiting.",
      ],
      learnings: [
        "Structuration de projet React avec composition de composants et separation of concerns.",
        "Patterns de gestion d'état avancés dans Next.js sans librairie externe.",
        "Maîtrise de Headless UI pour composants accessibles et customisables.",
        "Intégration d'APIs tierces et gestion des erreurs côté client.",
      ],
      disclaimer: PROJECT_DISCLAIMERS.NOT_UPDATED.fr,
    },
    en: {
      title: "Interactive car catalog",
      shortDescription:
        "Interactive platform for searching and viewing cars (automotive catalog type).",
      fullDescription:
        "Automotive catalog application developed in React and Next.js for learning purposes. The catalog presents cars fetched via RapidAPI with search system and multi-criteria filtering (make, model, year, fuel, transmission). Responsive interface built with Tailwind CSS and Headless UI components for accessibility. Detailed vehicle display with technical specifications and dynamic images.",
      challenges: [
        "Client-side state management architecture for multi-criteria filtering without dedicated backend.",
        "Creating generic and reusable UI components: modals, dropdowns, filters.",
        "RapidAPI integration with key management and rate limiting.",
      ],
      learnings: [
        "React project structuring with component composition and separation of concerns.",
        "Advanced state management patterns in Next.js without external library.",
        "Mastering Headless UI for accessible and customizable components.",
        "Third-party API integration and client-side error handling.",
      ],
      disclaimer: PROJECT_DISCLAIMERS.NOT_UPDATED.en,
    },
  },

  {
    id: 13,
    order: 13,
    technologies: ["Python", "FTX API (REST & WS)", "Pandas", "NumPy", "Asyncio", "Jupyter"],
    fr: {
      title: "Bot de trading algorithmique",
      shortDescription:
        "Bot Python pour le trading sur FTX basé sur l'analyse technique et les annonces de marché.",
      fullDescription:
        "Robot de trading haute fréquence développé en Python utilisant les APIs WebSocket et REST de FTX pour exécution automatique d'ordres. La stratégie combine analyse technique (indicateurs RSI, MACD, Bollinger Bands) et monitoring d'annonces macroéconomiques pour anticipation de volatilité. Le bot gère de manière autonome les ordres, positions et risques avec système de stop-loss dynamique. Architecture asynchrone avec Asyncio pour traitement parallèle des flux de données market et exécution rapide des trades. Analyse des données historiques avec Pandas et NumPy dans Jupyter pour backtesting des stratégies.",
      challenges: [
        "Optimisation de la latence entre réception WebSocket des market data et exécution REST des ordres.",
        "Système de monitoring d'annonces avec parsing automatique et scoring d'impact sur volatilité.",
        "Gestion des risques temps réel avec stop-loss adaptatif et sizing dynamique des positions.",
        "Architecture asynchrone robuste avec gestion des reconnexions et tolérance aux pannes.",
      ],
      learnings: [
        "Maîtrise d'Asyncio pour concurrence et flux de données asynchrones en Python.",
        "Concepts de trading algorithmique : exécution optimale, slippage, order book dynamics.",
        "Analyse quantitative avec Pandas et NumPy pour traitement de données market.",
        "Développement de stratégies de trading : indicateurs techniques et event-driven trading.",
        "Patterns de résilience pour systèmes critiques : retry logic, circuit breakers et monitoring.",
      ],
    },
    en: {
      title: "Algorithmic trading bot",
      shortDescription:
        "Python bot for high-frequency trading on FTX based on technical analysis and market news.",
      fullDescription:
        "High-frequency trading robot developed in Python using FTX WebSocket and REST APIs for automated order execution. The strategy combines technical analysis (RSI, MACD, Bollinger Bands indicators) and monitoring of macroeconomic announcements for volatility anticipation. The bot autonomously manages orders, positions, and risks with dynamic stop-loss system. Asynchronous architecture with Asyncio for parallel processing of market data streams and fast trade execution. Historical data analysis with Pandas and NumPy in Jupyter for strategy backtesting.",
      challenges: [
        "Latency optimization between WebSocket market data reception and REST order execution.",
        "Announcement monitoring system with automatic parsing and volatility impact scoring.",
        "Real-time risk management with adaptive stop-loss and dynamic position sizing.",
        "Robust asynchronous architecture with reconnection handling and fault tolerance.",
      ],
      learnings: [
        "Asyncio mastery for concurrency and asynchronous data streams in Python.",
        "Algorithmic trading concepts: optimal execution, slippage, order book dynamics.",
        "Quantitative analysis with Pandas and NumPy for market data processing.",
        "Trading strategy development: technical indicators and event-driven trading.",
        "Resilience patterns for critical systems: retry logic, circuit breakers, and monitoring.",
      ],
    },
  },

  {
    id: 14,
    order: 14,
    githubUrl: "https://github.com/nathanruer/Wallet-Interaction",
    technologies: [
      "Solidity",
      "Python (Brownie)",
      "JavaScript (Hardhat)",
      "Ethereum (EVM)",
      "ERC Standards",
    ],
    fr: {
      title: "Architecture blockchain et standards de contrat",
      shortDescription:
        "Collection de contrats intelligents (Smart Contracts) pour l'apprentissage, mettant en œuvre des standards ERC (ERC-20, NFT).",
      fullDescription:
        "Projets d'architecture et développement de smart contracts pour la machine virtuelle Ethereum. Collection de contrats implémentant les standards ERC-20 (tokens fongibles) et ERC-721 (NFTs) avec logique métier custom. Développement avec Solidity et maîtrise complète du cycle de vie des contrats : écriture, compilation, déploiement et vérification. Tests unitaires exhaustifs avec frameworks Brownie (Python) et Hardhat (JavaScript). Configuration d'environnements de développement locaux avec Ganache et Hardhat Network pour debugging. Focus sur la sécurité avec analyse des patterns de vulnérabilités courantes (reentrancy, overflow, access control).",
      challenges: [
        "Implémentation sécurisée des standards ERC avec gestion des edge cases et patterns de sécurité.",
        "Architecture de tests unitaires complets : cas nominaux, limites et attaques potentielles.",
        "Configuration d'environnements de développement multi-framework : Brownie et Hardhat.",
        "Déploiement et vérification de contrats sur testnets avec gestion des configurations réseau.",
        "Debugging de transactions failed et analyse des gas costs pour optimisation.",
      ],
      learnings: [
        "Maîtrise de Solidity avec focus sur la sécurité et patterns anti-vulnérabilités.",
        "Compréhension approfondie des standards ERC : ERC-20, ERC-721 et leurs extensions.",
        "Frameworks de développement blockchain : Brownie (Python) et Hardhat (JavaScript/TypeScript).",
        "Test-driven development pour smart contracts avec assertions complexes.",
        "Architecture EVM : gas optimization, storage patterns et event logging.",
        "Interaction frontend-blockchain via ethers.js et Web3 providers.",
      ],
    },
    en: {
      title: "Blockchain architecture and contract standards",
      shortDescription:
        "Collection of Smart Contracts for learning, implementing ERC standards (ERC-20, NFT).",
      fullDescription:
        "Architecture and development projects for smart contracts on the Ethereum Virtual Machine. Collection of contracts implementing ERC-20 (fungible tokens) and ERC-721 (NFTs) standards with custom business logic. Development with Solidity and complete mastery of contract lifecycle: writing, compilation, deployment, and verification. Exhaustive unit testing with Brownie (Python) and Hardhat (JavaScript) frameworks. Configuration of local development environments with Ganache and Hardhat Network for debugging. Security focus with analysis of common vulnerability patterns (reentrancy, overflow, access control).",
      challenges: [
        "Secure implementation of ERC standards with edge case handling and security patterns.",
        "Comprehensive unit test architecture: nominal cases, boundaries, and potential attacks.",
        "Multi-framework development environment configuration: Brownie and Hardhat.",
        "Contract deployment and verification on testnets with network configuration management.",
        "Debugging failed transactions and gas cost analysis for optimization.",
      ],
      learnings: [
        "Solidity mastery with focus on security and anti-vulnerability patterns.",
        "Deep understanding of ERC standards: ERC-20, ERC-721, and their extensions.",
        "Blockchain development frameworks: Brownie (Python) and Hardhat (JavaScript/TypeScript).",
        "Test-driven development for smart contracts with complex assertions.",
        "EVM architecture: gas optimization, storage patterns, and event logging.",
        "Frontend-blockchain interaction via ethers.js and Web3 providers.",
      ],
    },
  },

  {
    id: 15,
    order: 15,
    githubUrl: "https://github.com/nathanruer/web3-frontend",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Ethers.js",
      "Wagmi",
      "RainbowKit",
    ],
    fr: {
      title: "Web3 swap app",
      shortDescription:
        "DApp frontend pour l'échange de cryptomonnaies sur le réseau Ethereum via Uniswap.",
      fullDescription:
        "Application Décentralisée (DApp) permettant l'échange de tokens ERC-20 en interagissant avec les smart contracts Uniswap sur Ethereum. Interface Next.js construite avec TypeScript et Tailwind CSS. Le frontend intègre RainbowKit pour la connexion wallet (MetaMask, WalletConnect, Coinbase Wallet), Wagmi pour les hooks Web3 type-safe, et Ethers.js pour les interactions blockchain. Fonctionnalités incluant estimation de prix en temps réel, calcul de slippage avec protection, approbation de tokens et soumission sécurisée des transactions swap. Affichage des balances, gestion des erreurs blockchain et feedback utilisateur pour chaque étape du processus.",
      challenges: [
        "Intégration complète de RainbowKit avec gestion multi-wallet et changement de réseau.",
        "Architecture d'approbation de tokens avec gestion des allowances et confirmation utilisateur.",
        "Calcul et affichage du slippage en temps réel avec protection contre les mouvements de prix.",
        "Gestion des états de transaction : pending, success, failed avec feedback utilisateur approprié.",
      ],
      learnings: [
        "Stack Web3 moderne : Wagmi pour hooks React type-safe et Ethers.js pour interactions EVM.",
        "Intégration complète de RainbowKit pour expérience wallet connection fluide.",
        "Architecture de DApp : read operations (balances, prices) vs write operations (approve, swap).",
        "Compréhension des DEX protocols : Uniswap Router, token allowances et swap mechanics.",
        "Patterns de gestion d'erreurs blockchain : revert reasons, gas estimation fails et user rejections.",
      ],
    },
    en: {
      title: "Web3 Swap App",
      shortDescription:
        "Frontend DApp for exchanging cryptocurrencies on the Ethereum network via Uniswap.",
      fullDescription:
        "Decentralized Application (DApp) enabling ERC-20 token exchange by interacting with Uniswap smart contracts on Ethereum. Next.js interface built with TypeScript and Tailwind CSS. The frontend integrates RainbowKit for wallet connection (MetaMask, WalletConnect, Coinbase Wallet), Wagmi for type-safe Web3 hooks, and Ethers.js for blockchain interactions. Features include real-time price estimation, slippage calculation with protection, token approval, and secure swap transaction submission. Balance display, blockchain error handling, and user feedback for each process step.",
      challenges: [
        "Complete RainbowKit integration with multi-wallet management and network switching.",
        "Token approval architecture with allowance management and user confirmation.",
        "Real-time slippage calculation and display with price movement protection.",
        "Transaction state management: pending, success, failed with appropriate user feedback.",
      ],
      learnings: [
        "Modern Web3 stack: Wagmi for type-safe React hooks and Ethers.js for EVM interactions.",
        "Complete RainbowKit integration for smooth wallet connection experience.",
        "DApp architecture: read operations (balances, prices) vs write operations (approve, swap).",
        "Understanding of DEX protocols: Uniswap Router, token allowances, and swap mechanics.",
        "Blockchain error handling patterns: revert reasons, gas estimation failures, and user rejections.",
      ],
    },
  },
];

function getProjectsByLanguage(lang: 'fr' | 'en'): LocalizedProject[] {
  return projects
    .sort((a, b) => a.order - b.order)
    .map((project) => {
      const { fr, en, order, ...baseProject } = project;
      const content = lang === 'fr' ? fr : en;
      return {
        ...baseProject,
        ...content,
      };
    });
}

function getProjectById(id: number, lang: 'fr' | 'en'): LocalizedProject | undefined {
  const project = projects.find((p) => p.id === id);
  if (!project) return undefined;

  const { fr, en, order, ...baseProject } = project;
  const content = lang === 'fr' ? fr : en;
  return {
    ...baseProject,
    ...content,
  };
}
export { projects };

export const projectsFR: LocalizedProject[] = getProjectsByLanguage('fr');
export const projectsEN: LocalizedProject[] = getProjectsByLanguage('en');

export { getProjectsByLanguage, getProjectById };
