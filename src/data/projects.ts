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
        "Architecture en couches propre (séparation domain/services/infrastructure) pour une base de code maintenable.",
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
        "Clean layered architecture (domain/services/infrastructure separation) for maintainable codebase.",
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
        "Bot de trading et monitoring pour Hyperliquid avec API REST FastAPI et notifications Telegram en temps réel.",
      fullDescription:
        "Infrastructure de trading complète pour la plateforme Hyperliquid, composée d'une API REST FastAPI et d'un worker de notifications Telegram. L'API expose des endpoints sécurisés pour ouvrir/fermer des positions market, consulter l'état du compte (positions, margin, valeur du portefeuille) et gérer le trading programmatique. Le worker autonome écoute en temps réel via WebSocket les trades exécutés sur plusieurs adresses et envoie des notifications Telegram détaillées (coin, prix, taille, side, PnL). Architecture modulaire avec séparation API/Worker/Services permettant un déploiement et un scaling indépendants.",
      challenges: [
        "Conception d'une architecture modulaire séparant API REST et Worker pour un déploiement indépendant et un scaling horizontal.",
        "Implémentation d'un système de sécurité robuste (API Key authentication, rate limiting, CORS, mode read-only).",
        "Gestion des connexions WebSocket persistantes pour le monitoring en temps réel avec reconnexion automatique.",
        "Intégration du SDK Hyperliquid et gestion des clés privées Ethereum (eth-account) de manière sécurisée.",
        "Mise en place de middleware personnalisés pour l'authentification, le rate limiting et la gestion centralisée des exceptions.",
        "Validation stricte des données entrantes/sortantes avec Pydantic pour garantir la cohérence des trades.",
      ],
      learnings: [
        "Maîtrise de FastAPI pour la construction d'APIs REST performantes avec documentation auto-générée (Swagger/ReDoc).",
        "Architecture microservices en Python avec séparation des responsabilités (API/Workers/Services).",
        "Intégration de WebSocket pour le monitoring en temps réel et gestion des événements asynchrones.",
        "Développement de bots Telegram pour les notifications et alertes automatisées.",
        "Implémentation de patterns de sécurité avancés (API Key middleware, rate limiting avec SlowAPI, validation Pydantic).",
        "Gestion des clés cryptographiques Ethereum et signature de transactions via eth-account.",
        "Configuration avancée avec gestion d'environnements multiples et validation des settings au démarrage.",
        "Logging structuré et monitoring pour la supervision d'applications de trading critiques.",
      ],
    },
    en: {
      title: "Hyperliquid Trading Bot with REST API",
      shortDescription:
        "Trading and monitoring bot for Hyperliquid with FastAPI REST API and real-time Telegram notifications.",
      fullDescription:
        "Complete trading infrastructure for the Hyperliquid platform, consisting of a FastAPI REST API and a Telegram notification worker. The API exposes secured endpoints to open/close market positions, query account state (positions, margin, portfolio value) and manage programmatic trading. The autonomous worker listens in real-time via WebSocket to trades executed on multiple addresses and sends detailed Telegram notifications (coin, price, size, side, PnL). Modular architecture with API/Worker/Services separation enabling independent deployment and horizontal scaling.",
      challenges: [
        "Designing a modular architecture separating REST API and Worker for independent deployment and horizontal scaling.",
        "Implementing a robust security system (API Key authentication, rate limiting, CORS, read-only mode).",
        "Managing persistent WebSocket connections for real-time monitoring with automatic reconnection.",
        "Integrating the Hyperliquid SDK and securely handling Ethereum private keys (eth-account).",
        "Setting up custom middleware for authentication, rate limiting, and centralized exception handling.",
        "Strict validation of incoming/outgoing data with Pydantic to ensure trade consistency.",
      ],
      learnings: [
        "Mastery of FastAPI for building performant REST APIs with auto-generated documentation (Swagger/ReDoc).",
        "Python microservices architecture with separation of concerns (API/Workers/Services).",
        "WebSocket integration for real-time monitoring and asynchronous event handling.",
        "Telegram bot development for automated notifications and alerts.",
        "Implementation of advanced security patterns (API Key middleware, rate limiting with SlowAPI, Pydantic validation).",
        "Managing Ethereum cryptographic keys and transaction signing via eth-account.",
        "Advanced configuration with multi-environment management and startup settings validation.",
        "Structured logging and monitoring for supervising critical trading applications.",
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
        "DApp Next.js 16 avec optimisation multi-path pour quotes Uniswap V3, recherche ERC20 dynamique et support multi-chaînes (Ethereum/Base).",
      fullDescription:
        "Application DeFi construite avec Next.js 16 et React 19, spécialisée dans le calcul optimisé de cotations Uniswap V3. Implémente un système de routing multi-path intelligent qui teste automatiquement 68 routes possibles (paths directs + multi-hop via USDC/WETH/WBTC) pour identifier le meilleur prix. Utilise Multicall3 pour batching RPC : agrège toutes les requêtes en un seul appel (temps réduit de 98%). L'encodage des paths suit le format packed bytes d'Uniswap V3 via Viem. Gère nativement ETH avec conversion automatique vers WETH pour compatibilité pools. Support multi-chaînes (Ethereum, Base, Sepolia) avec configs RPC Infura et token lists filtrées par chainId. L'interface permet la recherche dynamique d'ERC20 (lecture on-chain de symbol/decimals), affiche les prix USD via CoinGecko, et intègre RainbowKit pour la connexion wallet. Stack Web3 type-safe avec Wagmi, Viem et TanStack Query.",
      challenges: [
        "Implémentation du système d'encodage de paths Uniswap V3 au format packed bytes : token (20 bytes) + fee (3 bytes) + token, avec gestion multi-hop récursive et conversion des fee tiers en hex 3-bytes (3000 → 0x000bb8).",
        "Optimisation RPC critique via Multicall3 : agrégation de 68 calls (4 direct paths × 4 fee tiers + 64 multi-hop routes) en 1 seul appel batch avec allowFailure: true pour gérer les pools inexistants (temps réduit de ~13s à ~200ms).",
        "Architecture de quote multi-path : génération automatique de toutes les routes possibles (direct + via USDC/WETH/WBTC), parsing des résultats Multicall avec decodeFunctionResult, et sélection du meilleur amountOut parmi les paths valides.",
        "Gestion de l'abstraction native ETH : mapping de l'adresse spéciale 0xEeee...eeeC vers WETH par chaîne pour compatibilité Uniswap V3, avec logique séparée pour affichage balance (useBalance sans token) vs quotes (conversion automatique WETH).",
        "Recherche ERC20 dynamique multi-chaînes : validation d'adresse avec regex, calls symbol()/decimals() via useReadContract de Wagmi, gestion des états loading/error, et filtrage par chainId actif pour éviter les erreurs cross-chain.",
        "Intégration multi-chaînes avec configurations spécifiques : addresses QuoterV2/Multicall3 par réseau, RPC endpoints Infura avec projectId, token lists filtrées, et reset automatique des states lors du switch de chaîne.",
      ],
      learnings: [
        "Maîtrise avancée d'Uniswap V3 : architecture QuoterV2 pour quotes read-only, fonctionnement des concentrated liquidity pools, stratégie de routing multi-hop, et understanding des fee tiers (100/500/3000/10000 bps).",
        "Patterns d'optimisation DeFi production-grade : batch RPC avec Multicall3 (utilisé par 1inch/Matcha), allowFailure pour tolérance aux erreurs, et encodage ABI manuel avec Viem (encodeFunctionData/decodeFunctionResult).",
        "Stack Web3 moderne type-safe : Wagmi pour hooks React (useReadContract, useBalance, useAccount), Viem pour interactions EVM avec types Hex/Address stricts, et TanStack Query pour cache/invalidation des données blockchain.",
        "Architecture multi-chaînes robuste : configuration par chainId (RPC, addresses, tokens), détection automatique de network switch (useChainId), et gestion des inconsistances cross-chain (token addresses différentes).",
        "Développement DApp front-end complet : RainbowKit pour wallet connection (MetaMask, Coinbase, WalletConnect), gestion states asynchrones (loading, error, success), et debouncing (300ms) pour prévenir quote spam.",
        "Compréhension approfondie des protocoles DeFi : différence entre read operations (staticcall) et write (transactions), rôle des Quoter contracts (off-chain simulations), et nécessité du WETH wrapping pour native ETH.",
        "Integration Next.js 16 + React 19 : Server Components pour layouts statiques, 'use client' pour composants interactifs, et patterns Provider pour context Web3 (WagmiProvider, QueryClientProvider, RainbowKitProvider).",
        "Patterns React avancés pour Web3 : custom hooks encapsulant logique blockchain (useSwapQuote, useTokenPrice, useTokenAddressLookup), useMemo pour calculs USD dérivés, et useEffect avec cleanup pour requêtes async.",
      ],
    },
    en: {
      title: "Multi-chain Uniswap V3 Quote Calculator",
      shortDescription:
        "Next.js 16 DApp with multi-path optimization for Uniswap V3 quotes, dynamic ERC20 lookup, and multi-chain support (Ethereum/Base).",
      fullDescription:
        "DeFi application built with Next.js 16 and React 19, specialized in optimized Uniswap V3 quote calculations. Implements an intelligent multi-path routing system that automatically tests 68 possible routes (direct paths + multi-hop via USDC/WETH/WBTC) to identify the best price. Uses Multicall3 for RPC batching: aggregates all requests into a single call (98% time reduction). Path encoding follows Uniswap V3's packed bytes format via Viem. Natively handles ETH with automatic WETH conversion for pool compatibility. Multi-chain support (Ethereum, Base, Sepolia) with Infura RPC configs and chainId-filtered token lists. The interface enables dynamic ERC20 lookup (on-chain symbol/decimals reads), displays USD prices via CoinGecko, and integrates RainbowKit for wallet connection. Type-safe Web3 stack with Wagmi, Viem, and TanStack Query.",
      challenges: [
        "Implementing Uniswap V3 packed bytes path encoding: token (20 bytes) + fee (3 bytes) + token, with recursive multi-hop handling and fee tier conversion to 3-byte hex (3000 → 0x000bb8).",
        "Critical RPC optimization via Multicall3: aggregating 68 calls (4 direct paths × 4 fee tiers + 64 multi-hop routes) into 1 batch call with allowFailure: true to handle non-existent pools (time reduced from ~13s to ~200ms).",
        "Multi-path quote architecture: automatic generation of all possible routes (direct + via USDC/WETH/WBTC), parsing Multicall results with decodeFunctionResult, and selecting best amountOut among valid paths.",
        "Native ETH abstraction handling: mapping special address 0xEeee...eeeC to WETH per chain for Uniswap V3 compatibility, with separate logic for balance display (useBalance without token) vs quotes (automatic WETH conversion).",
        "Dynamic multi-chain ERC20 lookup: address validation with regex, symbol()/decimals() calls via Wagmi's useReadContract, loading/error state management, and active chainId filtering to prevent cross-chain errors.",
        "Multi-chain integration with specific configurations: QuoterV2/Multicall3 addresses per network, Infura RPC endpoints with projectId, filtered token lists, and automatic state reset on chain switch.",
      ],
      learnings: [
        "Advanced Uniswap V3 mastery: QuoterV2 architecture for read-only quotes, concentrated liquidity pool mechanics, multi-hop routing strategy, and understanding of fee tiers (100/500/3000/10000 bps).",
        "Production-grade DeFi optimization patterns: batch RPC with Multicall3 (used by 1inch/Matcha), allowFailure for error tolerance, and manual ABI encoding with Viem (encodeFunctionData/decodeFunctionResult).",
        "Modern type-safe Web3 stack: Wagmi for React hooks (useReadContract, useBalance, useAccount), Viem for EVM interactions with strict Hex/Address types, and TanStack Query for blockchain data cache/invalidation.",
        "Robust multi-chain architecture: chainId-based configuration (RPC, addresses, tokens), automatic network switch detection (useChainId), and handling of cross-chain inconsistencies (different token addresses).",
        "Complete DApp frontend development: RainbowKit for wallet connection (MetaMask, Coinbase, WalletConnect), async state management (loading, error, success), and debouncing (300ms) to prevent quote spam.",
        "Deep understanding of DeFi protocols: difference between read operations (staticcall) and writes (transactions), role of Quoter contracts (off-chain simulations), and necessity of WETH wrapping for native ETH.",
        "Next.js 16 + React 19 integration: Server Components for static layouts, 'use client' for interactive components, and Provider patterns for Web3 context (WagmiProvider, QueryClientProvider, RainbowKitProvider).",
        "Advanced React patterns for Web3: custom hooks encapsulating blockchain logic (useSwapQuote, useTokenPrice, useTokenAddressLookup), useMemo for derived USD calculations, and useEffect with cleanup for async requests.",
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
        "Agrégateur temps réel de news crypto avec WebSocket résilient, recherche avancée et système de filtrage à double colonne (Articles/Tweets).",
      fullDescription:
        "Application web moderne construite avec React 18 et Vite, offrant un flux temps réel de news sur les cryptomonnaies via WebSocket (wss://news.treeofalpha.com). L'architecture repose sur un custom hook WebSocket avancé avec reconnexion automatique, gestion de la mémoire par sliding window, et détection de doublons par ID. L'interface propose une disposition responsive à deux colonnes (Articles | Tweets) avec recherche indépendante multi-champs (titre, contenu, symboles), modes d'affichage (50 récents vs historique complet), et animations smooth pour les nouveaux éléments. Les NewsCard incluent des boutons d'action pour accéder directement aux paires de trading sur les exchanges (Binance et Bybit, Spot et Futures). Le système de design utilise shadcn/ui et des tokens HSL personnalisés avec support dark mode. Performance optimisée via useMemo/useCallback, debouncing des erreurs, et cleanup automatique des ressources.",
      challenges: [
        "Conception d'un custom hook WebSocket robuste avec reconnexion automatique, gestion des erreurs avec debouncing, et cleanup pour prévenir les memory leaks (isMountedRef, refs WebSocket).",
        "Architecture de state management à trois niveaux : dual-buffer (50 visibles + historique complet) et séparation articles/tweets avec type discrimination automatique.",
        "Optimisation des performances pour le rendu de listes dynamiques : useMemo pour filtrage multi-champs, useCallback pour callbacks, sliding window pour limiter les items DOM, et animations CSS GPU-accelerated.",
        "Gestion de la complexité UI : deux colonnes avec états indépendants (search, view mode), click propagation pour actions imbriquées (cards + boutons), et dropdown auto-close avec click outside detection.",
        "Décodage et parsing des actions d'échange : logique de mapping exchange codes → URLs (BINFUT, BIN, BYBIT, etc.) avec gestion des edge cases et intégration seamless dans les NewsCards.",
      ],
      learnings: [
        "Maîtrise avancée des WebSocket côté client : lifecycle complet (connect, message, error, close), stratégies de reconnexion, gestion des états de connexion, et debouncing des logs d'erreur.",
        "Patterns React avancés : custom hooks avec logique complexe, useRef pour éviter re-renders, useMemo/useCallback pour performance, et cleanup lifecycle approprié.",
        "Architecture de state management sans librairie externe : dual-buffer pattern, computed state avec memoization, et state local multi-niveaux (hook, component, UI).",
        "Développement d'UI temps réel performante : animations smooth avec Set-based tracking, filtrage memoized, et gestion de listes longues (sliding window + virtual limits).",
        "Intégration complète de shadcn/ui et Radix UI : composants accessibles, customisation tokens HSL, et design system cohérent.",
        "Optimisation de l'expérience utilisateur : micro-interactions (hover, focus), visual feedback (connection status, new item highlight), et responsive design mobile-first.",
        "Build moderne avec Vite et SWC : HMR ultra-rapide, compilation TypeScript optimisée, et tree-shaking automatique.",
      ],
    },
    en: {
      title: "Real-time crypto news feed",
      shortDescription:
        "Real-time crypto news aggregator with resilient WebSocket, advanced search, and dual-column filtering system (Articles/Tweets).",
      fullDescription:
        "Modern web application built with React 18 and Vite, providing a real-time cryptocurrency news stream via WebSocket (wss://news.treeofalpha.com). The architecture relies on an advanced custom WebSocket hook with automatic reconnection, sliding window memory management, and duplicate detection by ID. The interface features a responsive two-column layout (Articles | Tweets) with independent multi-field search (title, content, symbols), display modes (50 recent vs complete history), and smooth animations for new items. NewsCards include action buttons for direct access to trading pairs on exchanges (Binance and Bybit, Spot and Futures). The design system uses shadcn/ui and custom HSL tokens with dark mode support. Performance optimized via useMemo/useCallback, error debouncing, and automatic resource cleanup.",
      challenges: [
        "Designing a robust custom WebSocket hook with automatic reconnection, debounced error handling, and cleanup to prevent memory leaks (isMountedRef, WebSocket refs).",
        "Three-level state management architecture: dual-buffer (50 visible + complete history) and articles/tweets separation with automatic type discrimination.",
        "Performance optimization for dynamic list rendering: useMemo for multi-field filtering, useCallback for callbacks, sliding window to limit DOM items, and GPU-accelerated CSS animations.",
        "Managing UI complexity: two columns with independent state (search, view mode), click propagation for nested actions (cards + buttons), and auto-close dropdown with click outside detection.",
        "Exchange action decoding and parsing: mapping logic for exchange codes → URLs (BINFUT, BIN, BYBIT, etc.) with edge case handling and seamless NewsCard integration.",
      ],
      learnings: [
        "Advanced client-side WebSocket mastery: complete lifecycle (connect, message, error, close), reconnection strategies, connection state management, and error log debouncing.",
        "Advanced React patterns: custom hooks with complex logic, useRef to avoid re-renders, useMemo/useCallback for performance, and proper cleanup lifecycle.",
        "State management architecture without external libraries: dual-buffer pattern, computed state with memoization, and multi-level local state (hook, component, UI).",
        "Performant real-time UI development: smooth animations with Set-based tracking, memoized filtering, and long list handling (sliding window + virtual limits).",
        "Complete shadcn/ui and Radix UI integration: accessible components, HSL token customization, and consistent design system.",
        "User experience optimization: micro-interactions (hover, focus), visual feedback (connection status, new item highlight), and mobile-first responsive design.",
        "Modern build with Vite and SWC: ultra-fast HMR, optimized TypeScript compilation, and automatic tree-shaking.",
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
        "Agent autonome monétisé (Lucid/x402) exposant des endpoints Starknet : portfolio holdings, prix tokens Ekubo, et top tokens par métriques.",
      fullDescription:
        "Agent d'IA autonome construit avec Lucid Agent Kit, exposant 4 endpoints API monétisés pour les données Starknet. L'agent combine scraping Playwright de Starkscan pour la découverte de portfolio et intégration API Ekubo pour le pricing DeFi (VWAP). Implémente le protocole x402 de Coinbase pour la monétisation native : chaque appel retourne HTTP 402 Payment Required, obligeant un micropaiement on-chain (Base/Starknet) avant l'accès aux données. Architecture hybride on-chain/off-chain avec fallback automatique : lecture RPC Starknet.js pour balances, scraper Starkscan en cas d'échec, et cache in-memory pour les prix. Les endpoints incluent get_portfolio (holdings + USD value), get_token_price (VWAP Ekubo), list_priceable_tokens (directory), et get_top_tokens (classement par volume/TVL). Configuration flexible via variables d'env (facilitator URL, payment network, default price). Mode développement sans paiement pour debugging local.",
      challenges: [
        "Intégration complète du protocole x402 dans le cycle de vie de l'agent : configuration du facilitator Coinbase, gestion du payment network (Base/Starknet), et validation des micropaiements avant retour des données.",
        "Architecture hybride de récupération de données avec stratégie de fallback : tentative RPC on-chain via Starknet.js, fallback automatique vers scraping Playwright en cas d'échec, et normalisation des formats de données hétérogènes.",
        "Système d'enrichissement de prix multi-sources : résolution des tokens via directory Ekubo (adresse/symbole), fetching parallèle des prix VWAP par paire, calcul des valeurs USD, et cache avec TTL pour optimiser les appels API.",
        "Web scraping robuste de Starkscan avec Playwright : gestion des timeouts, parsing HTML dynamique, extraction des balances/symboles, et détection des erreurs de chargement.",
      ],
      learnings: [
        "Développement d'agents autonomes avec Lucid Agent Kit : création d'entrypoints typés (input/output schemas Zod), configuration des payments x402, et déploiement sur Bun runtime.",
        "Monétisation d'APIs Web3 natives via x402 : intégration du facilitator Coinbase, gestion des réseaux L2 (Base/Starknet), et implémentation de paywalls on-chain pour économie inter-agents.",
        "Intégration Starknet complète : interaction avec l'API Ekubo pour pricing DeFi, lecture de balances on-chain, et understanding de l'écosystème Starknet (explorers, DEXs, tokens).",
        "Patterns d'architecture résilient : stratégies de fallback multi-niveaux, gestion d'erreurs avec retry, caching avec expiration, et orchestration de sources de données hétérogènes (on-chain, API, scraping).",
        "Web scraping production-grade avec Playwright : navigation headless, attente d'éléments dynamiques, extraction robuste de données, et gestion des edge cases (pages vides, timeouts).",
      ],
    },
    en: {
      title: "Monetized Starknet AI Agent (x402)",
      shortDescription:
        "Autonomous monetized agent (Lucid/x402) exposing Starknet endpoints: portfolio holdings, Ekubo token prices, and top tokens by metrics.",
      fullDescription:
        "Autonomous AI agent built with Lucid Agent Kit, exposing 4 monetized API endpoints for Starknet data. The agent combines Playwright scraping of Starkscan for portfolio discovery and Ekubo API integration for DeFi pricing (VWAP). Implements Coinbase's x402 protocol for native monetization: each call returns HTTP 402 Payment Required, requiring an on-chain micropayment (Base/Starknet) before data access. Hybrid on-chain/off-chain architecture with automatic fallback: Starknet.js RPC reads for balances, Starkscan scraper on failure, and in-memory cache for prices. Endpoints include get_portfolio (holdings + USD value), get_token_price (Ekubo VWAP), list_priceable_tokens (directory), and get_top_tokens (ranked by volume/TVL). Flexible configuration via env variables (facilitator URL, payment network, default price). Development mode without payments for local debugging.",
      challenges: [
        "Complete x402 protocol integration into agent lifecycle: Coinbase facilitator configuration, payment network management (Base/Starknet), and micropayment validation before data return.",
        "Hybrid data retrieval architecture with fallback strategy: on-chain RPC attempts via Starknet.js, automatic fallback to Playwright scraping on failure, and normalization of heterogeneous data formats.",
        "Multi-source price enrichment system: token resolution via Ekubo directory (address/symbol), parallel VWAP price fetching per pair, USD value calculations, and TTL cache to optimize API calls.",
        "Robust Starkscan web scraping with Playwright: timeout handling, dynamic HTML parsing, balance/symbol extraction, and loading error detection.",
      ],
      learnings: [
        "Autonomous agent development with Lucid Agent Kit: typed entrypoint creation (Zod input/output schemas), x402 payment configuration, and Bun runtime deployment.",
        "Native Web3 API monetization via x402: Coinbase facilitator integration, L2 network management (Base/Starknet), and on-chain paywall implementation for inter-agent economy.",
        "Complete Starknet integration: Ekubo API integration for DeFi pricing, on-chain balance reading, and understanding of the Starknet ecosystem (explorers, DEXs, tokens).",
        "Resilient architecture patterns: multi-level fallback strategies, error handling with retry, cache with expiration, and orchestration of heterogeneous data sources (on-chain, API, scraping).",
        "Production-grade web scraping with Playwright: headless navigation, dynamic element waiting, robust data extraction, and edge case handling (empty pages, timeouts).",
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
        "Application Next.js (DApp) de démonstration implémentant un mécanisme de Paywall on-chain basé sur le protocole X402 de Coinbase, sur Base Sepolia.",
      fullDescription:
        "Projet Next.js intégrant le protocole X402 de Coinbase pour créer un Paywall d'API on-chain sur Base Sepolia. Il utilise Thirdweb pour la connexion au portefeuille et la gestion des transactions, garantissant que seul un paiement vérifié débloque le contenu premium.",
      challenges: [
        "Gestion de la synchronisation client-serveur (verify / settle).",
        "Sécurisation et validation des paiements on-chain.",
        "Mise en place du facilitator Web3 pour l'autorisation des règlements X402.",
      ],
      learnings: [
        "Maîtrise de l'architecture X402 (initiation vs. règlement du Paywall).",
        "Intégration avancée des outils Thirdweb pour les interactions de micro-paiement.",
        "Application des Layer 2 pour la monétisation d'API Web3.",
      ],
    },
    en: {
      title: "X402 paywall integration (Coinbase)",
      shortDescription:
        "A demo Next.js (DApp) implementing an on-chain Paywall mechanism based on the Coinbase X402 protocol, deployed on Base Sepolia.",
      fullDescription:
        "Next.js project integrating the Coinbase X402 protocol to create an on-chain API Paywall on Base Sepolia. It leverages Thirdweb for wallet connection and transaction management, ensuring only a verified payment unlocks premium content.",
      challenges: [
        "Managing client-server synchronization (verify / settle).",
        "Securing and validating on-chain payments.",
        "Implementing the Web3 `Facilitator` for X402 settlement authorization.",
      ],
      learnings: [
        "Mastering X402 architecture (Paywall initiation vs. settlement).",
        "Advanced integration of Thirdweb tools for micro-payment interactions.",
        "Application of Layer 2 for Web3 API monetization.",
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
        "Application web construite avec React et TypeScript utilisant l'API WebSocket de Binance pour obtenir et afficher les prix des principales paires de trading avec une latence réduite. Ce projet d'apprentissage visait à maîtriser la gestion des flux de données externes. Le dashboard se concentre sur l'affichage dynamique des variations de prix, le tout dans une interface rapide et responsive avec Tailwind CSS.",
      challenges: [
        "Maintenir une connexion WebSocket stable et gérer les reconnexions en cas d'interruption.",
        "Normalisation et traitement des flux de données brutes reçues de l'API Binance en temps réel.",
      ],
      learnings: [
        "Gestion des appels API en temps réel et des protocoles WebSocket dans React.",
        "Optimisation de l'affichage dynamique de données financières complexes côté client.",
      ],
    },
    en: {
      title: "Crypto prices dashboard",
      shortDescription:
        "Near real-time dashboard for tracking and displaying cryptocurrency prices via the Binance API.",
      fullDescription:
        "Web app built with React and TypeScript utilizing the Binance API to fetch and display the prices of major trading pairs with low latency. This learning project focused on mastering external data stream management. The dashboard focuses on the dynamic display of price variations, all within a fast and responsive Tailwind CSS interface.",
      challenges: [
        "Maintaining a stable WebSocket connection and handling reconnections upon interruption.",
        "Normalizing and processing raw data streams received from the Binance API in real-time.",
      ],
      learnings: [
        "Handling real-time API calls and WebSocket protocols in React.",
        "Optimizing the dynamic display of complex financial data on the client-side.",
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
      ],
      learnings: [
        "Maîtrise de GSAP pour animations avancées : ScrollTrigger, timeline sequencing avec custom easings, et best practices pour cleanup et performance.",
        "Développement d'interactions custom : curseur requestAnimationFrame, mouse-tracking avec event delegation, et système de particules from scratch.",
        "Architecture design néo-brutaliste : principes du mouvement (honesty in materials, bold expression, anti-minimalism) et implémentation technique des éléments caractéristiques.",
        "Intégration Lenis smooth scroll avec synchronisation GSAP ScrollTrigger et optimisations performance.",
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
      ],
      learnings: [
        "GSAP mastery for advanced animations: ScrollTrigger, timeline sequencing with custom easings, and best practices for cleanup and performance.",
        "Custom interaction development: requestAnimationFrame cursor, mouse-tracking with event delegation, and particle system from scratch.",
        "Neo-brutalist design architecture: movement principles (honesty in materials, bold expression, anti-minimalism) and technical implementation of characteristic elements.",
        "Lenis smooth scroll integration with GSAP ScrollTrigger synchronization and performance optimizations.",
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
        "Clone d'une application de messagerie utilisant Next.js et Pusher (WebSockets) pour le chat en temps réel. Le projet intègre l'authentification avec NextAuth, gère les conversations de groupe et les messages privés. L'architecture backend utilise Prisma et une base de données relationnelle pour la persistance des données.",
      challenges: [
        "Gérer l'état en temps réel pour le chat et l'affichage des nouveaux messages sans rechargement de page.",
        "Mettre en place des WebSockets (Pusher) pour une communication bidirectionnelle fiable.",
        "Synchronisation des messages entre plusieurs utilisateurs et gestion des statuts 'vu'.",
      ],
      learnings: [
        "Implémentation des WebSockets et des communications en temps réel (Pusher).",
        "Gestion des relations complexes (Un Utilisateur a plusieurs Conversations, une Conversation a plusieurs Messages, etc.) avec Prisma.",
        "Sécurisation des routes et des accès aux conversations privées via NextAuth.",
      ],
      disclaimer: PROJECT_DISCLAIMERS.NOT_UPDATED.fr,
    },
    en: {
      title: "Messenger clone",
      shortDescription:
        "Real-time messaging application with notifications and group conversation management.",
      fullDescription:
        "A messaging application clone using Next.js and Pusher (WebSockets) for real-time chat. The project integrates authentication with NextAuth, manages group conversations and private messages. The backend architecture uses Prisma and a relational database for data persistence.",
      challenges: [
        "Managing real-time chat state and displaying new messages without page reload.",
        "Implementing WebSockets (Pusher) for reliable, bidirectional communication.",
        "Synchronizing messages between multiple users and managing 'seen' statuses.",
      ],
      learnings: [
        "Implementation of WebSockets and real-time communication (Pusher).",
        "Managing complex relationships (A User has many Conversations, a Conversation has many Messages, etc.) with Prisma.",
        "Securing routes and access to private conversations via NextAuth.",
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
        "Clone fonctionnel et complet d'Airbnb utilisant le stack moderne Next.js 13 et TypeScript. Ce projet inclut un système d'authentification robuste avec NextAuth (supportant Google Auth), la gestion des logements (création, édition), un système de réservation avec calcul des coûts, et l'affichage dynamique des propriétés sur une carte interactive grâce à Leaflet.",
      challenges: [
        "Sécuriser l'authentification des utilisateurs (NextAuth) et gérer les sessions.",
        "Implémenter une logique de dates de réservation complexes pour éviter les doubles réservations.",
        "Affichage dynamique et performant des logements sur carte (Leaflet) en fonction des filtres.",
      ],
      learnings: [
        "Intégration complète de NextAuth avec des fournisseurs externes comme Google.",
        "Maîtrise de Prisma pour les opérations CRUD complexes sur une base de données MongoDB.",
        "Gestion des relations entre les tables (Utilisateurs, Logements, Réservations) dans un environnement Full Stack.",
      ],
      disclaimer: PROJECT_DISCLAIMERS.NOT_UPDATED.fr,
    },
    en: {
      title: "Airbnb clone",
      shortDescription:
        "Functional Airbnb replica with authentication, booking, and map display of properties.",
      fullDescription:
        "Complete and functional Airbnb clone built using the modern Next.js 13 and TypeScript stack. This project includes a robust authentication system with NextAuth (supporting Google Auth), property management (creation, editing), a booking system with cost calculation, and dynamic display of properties on an interactive map using Leaflet.",
      challenges: [
        "Securing user authentication (NextAuth) and managing sessions.",
        "Implementing complex booking date logic to prevent double bookings.",
        "Dynamic and performant display of properties on maps (Leaflet) based on filters.",
      ],
      learnings: [
        "Full integration of NextAuth with external providers like Google.",
        "Mastering Prisma for complex CRUD operations on a MongoDB database.",
        "Managing relationships between tables (Users, Properties, Reservations) in a Full Stack environment.",
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
        "Clone fonctionnel de Twitter développé avec Next.js 13, TypeScript et MongoDB. Le projet permet aux utilisateurs de s'authentifier, de poster des 'tweets', de les aimer, et de suivre d'autres utilisateurs. L'interface utilisateur est construite avec Tailwind CSS et utilise des formulaires gérés par React Hook Form.",
      challenges: [
        "Gestion du feed en temps réel et affichage des tweets des personnes abonnées.",
        "Optimisation des performances pour le chargement des longues listes de tweets (pagination ou infinite scroll).",
        "Conception d'un modèle de données flexible dans MongoDB pour les relations 'suivi/followers'.",
      ],
      learnings: [
        "Mise en œuvre de techniques de pagination et infinite scroll côté client et serveur.",
        "Structuration d'une application Next.js (gestion des API routes et des Server/Client Components).",
        "Maîtrise des formulaires complexes et de la validation avec React Hook Form.",
      ],
      disclaimer: PROJECT_DISCLAIMERS.NOT_UPDATED.fr,
    },
    en: {
      title: "Twitter clone",
      shortDescription:
        "Functional Twitter (X) social network clone with core features: tweets, likes, and following.",
      fullDescription:
        "A functional Twitter clone developed with Next.js 13, TypeScript and MongoDB. The project allows users to authenticate, post 'tweets', like them, and follow other users. The UI is built with Tailwind CSS and utilizes forms managed by React Hook Form.",
      challenges: [
        "Managing the real-time feed and displaying tweets from followed users.",
        "Optimizing performance for loading long lists of tweets (pagination or infinite scroll).",
        "Designing a flexible data model in MongoDB for 'following/followers' relationships.",
      ],
      learnings: [
        "Implementing pagination and infinite scroll techniques client-side and server-side.",
        "Structuring a Next.js application (managing API routes and Server/Client Components).",
        "Mastering complex forms and validation with React Hook Form.",
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
        "Application d'entraînement personnelle servant de catalogue automobile. Développée en React et Next.js, elle présente un catalogue de voitures récupérées via RapidAPI et permet la recherche, le filtrage par critères (marque, modèle, année) et l'affichage détaillé des véhicules. L'interface utilise Tailwind CSS et des composants headless pour l'accessibilité.",
      challenges: [
        "Gestion d'un état global complexe sans backend dédié (pour le filtrage et la recherche).",
        "Création de composants UI génériques et réutilisables (modales, filtres).",
        "Intégration et gestion des clés API avec un service tiers (RapidAPI).",
      ],
      learnings: [
        "Structuration d'un projet React complet autour de la composition des composants.",
        "Pratique avancée de la gestion d'état dans une application Next.js.",
        "Utilisation des librairies Headless UI pour construire des composants accessibles.",
      ],
      disclaimer: PROJECT_DISCLAIMERS.NOT_UPDATED.fr,
    },
    en: {
      title: "Interactive car catalog",
      shortDescription:
        "Interactive platform for searching and viewing cars (automotive catalog type).",
      fullDescription:
        "A personal training application serving as an automotive catalog. Developed in React and Next.js, it presents a car catalog fetched via RapidAPI and allows searching, filtering by criteria (make, model, year), and dynamic display of vehicle details. The interface uses Tailwind CSS and headless components for accessibility.",
      challenges: [
        "Managing complex global state without a dedicated backend (for filtering and searching).",
        "Creating generic and reusable UI components (modals, filters).",
        "Integrating and managing API keys with a third-party service (RapidAPI).",
      ],
      learnings: [
        "Structuring a complete React project around component composition.",
        "Advanced practice of state management in a Next.js application.",
        "Using Headless UI libraries to build accessible components.",
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
        "Développement d'un robot de trading haute fréquence en Python utilisant les APIs WebSocket et REST de FTX (avant sa fermeture) pour exécuter des ordres. La stratégie était basée sur l'analyse technique (indicateurs classiques) couplée à une veille d'annonces/news pour anticiper les mouvements de volatilité (stratégie dite d'arbitrage d'information). Le bot gérait les ordres, les positions, et le risque de manière autonome.",
      challenges: [
        "Optimisation de la latence entre la réception des données (Websocket) et l'exécution des ordres (REST).",
        "Conception d'un système robuste pour le suivi et l'analyse des annonces macroéconomiques pertinentes.",
        "Mise en œuvre d'une gestion des risques (stop-loss et taille des ordres) en temps réel et tolérant aux pannes.",
      ],
      learnings: [
        "Gestion de la concurrence et des flux de données asynchrones avec Python (Asyncio).",
        "Maîtrise des concepts de trading algorithmique : exécution, slippage, carnet d'ordres.",
        "Utilisation avancée des librairies de calcul scientifique Pandas et NumPy pour l'analyse des données de marché.",
      ],
    },
    en: {
      title: "Algorithmic trading bot",
      shortDescription:
        "Python bot for high-frequency trading on FTX based on technical analysis and market news.",
      fullDescription:
        "Development of a high-frequency trading robot in Python using the FTX WebSocket and REST APIs (prior to its closure) to execute orders. The strategy was based on technical analysis (classic indicators) coupled with monitoring news/announcements to anticipate volatility movements (information arbitrage strategy). The bot autonomously managed orders, positions, and risk.",
      challenges: [
        "Optimizing latency between data reception (WebSocket) and order execution (REST).",
        "Designing a robust system for tracking and analyzing relevant macroeconomic announcements.",
        "Implementing real-time and fault-tolerant risk management (stop-loss and order sizing).",
      ],
      learnings: [
        "Managing concurrency and asynchronous data streams with Python (Asyncio).",
        "Mastery of algorithmic trading concepts: execution, slippage, order book dynamics.",
        "Advanced use of scientific computing libraries Pandas and NumPy for market data analysis.",
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
        "Divers projets d'architecture et de développement pour la machine virtuelle Ethereum (EVM). Ce travail se concentre sur l'implémentation sécurisée des standards de token (ERC-20, ERC-721) et la maîtrise du cycle de vie des contrats, y compris la rédaction de tests unitaires robustes. Les outils utilisés sont Solidity, Brownie (Python) et Hardhat (JavaScript) pour le déploiement et la vérification.",
      challenges: [
        "Compréhension approfondie et implémentation sécurisée des standards de token ERC.",
        "Écrire des tests unitaires robustes pour garantir la sécurité et la logique des contrats.",
        "Mettre en place un environnement de développement local (Ganache/Hardhat network).",
      ],
      learnings: [
        "Développement sécurisé en Solidity et compréhension des failles courantes.",
        "Utilisation des frameworks Python (Brownie) et JavaScript (Hardhat) pour le cycle de vie des smart contracts.",
        "Interaction avec les contrats déployés depuis un environnement frontend de test.",
      ],
    },
    en: {
      title: "Blockchain architecture and contract standards",
      shortDescription:
        "Collection of Smart Contracts for learning, implementing ERC standards (ERC-20, NFT).",
      fullDescription:
        "Various architecture and development projects for the Ethereum Virtual Machine (EVM). This work focuses on the secure implementation of token standards (ERC-20, ERC-721) and mastering the contract lifecycle, including writing robust unit tests. The tools used are Solidity, Brownie (Python), and Hardhat (JavaScript) for deployment and verification.",
      challenges: [
        "In-depth understanding and secure implementation of ERC token standards.",
        "Writing robust unit tests to guarantee contract security and logic.",
        "Setting up a local development environment (Ganache/Hardhat network).",
      ],
      learnings: [
        "Secure development in Solidity and understanding common vulnerabilities.",
        "Using Python (Brownie) and JavaScript (Hardhat) frameworks for the smart contract lifecycle.",
        "Interacting with deployed contracts from a frontend testing environment.",
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
        "Application Décentralisée (DApp) permettant l'échange de tokens (swap) en interagissant avec les smart contracts Uniswap sur le réseau Ethereum. Le frontend gère l'intégration des portefeuilles Web3 (Wagmi, RainbowKit), l'estimation des prix en temps réel, le calcul du slippage et la soumission sécurisée des transactions via Ethers.js.",
      challenges: [
        "Établir une connexion sécurisée et stable avec le portefeuille de l'utilisateur (wallet connection).",
        "Gérer et afficher le slippage et les estimations de gaz en temps réel.",
        "Interaction asynchrone avec les fonctions des smart contracts (lecture et écriture de données).",
      ],
      learnings: [
        "Maîtrise des librairies Wagmi et Ethers.js pour l'interaction avec l'EVM.",
        "Compréhension des smart contracts de DEX (Decentralized Exchange) comme Uniswap.",
        "Gestion des erreurs de transaction blockchain complexes côté frontend.",
      ],
    },
    en: {
      title: "Web3 Swap App",
      shortDescription:
        "Frontend DApp for exchanging cryptocurrencies on the Ethereum network via Uniswap.",
      fullDescription:
        "A Decentralized Application (DApp) allowing token exchange (swap) by interacting with the Uniswap smart contracts on the Ethereum network. The frontend handles Web3 wallet integration (Wagmi, RainbowKit), real-time price estimation, slippage calculation, and secure transaction submission via Ethers.js.",
      challenges: [
        "Establishing a secure and stable connection with the user's wallet (wallet connection).",
        "Managing and displaying slippage and gas estimations in real-time.",
        "Asynchronously interacting with smart contract functions (reading and writing data).",
      ],
      learnings: [
        "Mastery of Wagmi and Ethers.js libraries for interacting with the EVM.",
        "Understanding of DEX (Decentralized Exchange) smart contracts like Uniswap.",
        "Handling complex blockchain transaction errors on the frontend.",
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
