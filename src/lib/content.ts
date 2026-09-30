// Site-wide content data for Mushroom Hub
// Keep content separated from UI components for easy updates

export const SITE_CONFIG = {
  name: "Mushroom Hub",
  tagline: "Growing Mushrooms. Supporting Farmers. Connecting Markets.",
  description:
    "Mushroom Hub is building a farmer-centric mushroom production and market-linkage ecosystem that makes mushroom cultivation easier, more reliable and more profitable.",
  coreStatement:
    "Produce locally, support farmers, aggregate efficiently and sell through organized markets.",
  location: "Dhanbad, Jharkhand, India",
  founder: "Piyush Ranjan",
  founderRole: "Founder & Promoter",
  shareholding: "90%",
  stage: "Idea / Pre-launch Stage – 2026",
  initialArea: "Dhanbad, Jharkhand",
  phone: "+91 XXXXX XXXXX",
  email: "contact@mushroomhub.in",
  whatsapp: "+91XXXXXXXXXX",
  whatsappDisplay: "+91 XXXXX XXXXX",
  socialLinks: {
    instagram: "#",
    facebook: "#",
    linkedin: "#",
    twitter: "#",
    youtube: "#",
  },
};

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "For Farmers", href: "/farmers" },
  { label: "Products & Services", href: "/services" },
  { label: "How It Works", href: "/how-it-works" },
  { label: "Market / Buyers", href: "/buyers" },
  { label: "Sustainability", href: "/sustainability" },
  { label: "Impact", href: "/impact" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
];

export const HERO_STATS = [
  { value: "2026", label: "Project Launch Stage", note: "Pilot year" },
  { value: "20", label: "Initial Pilot Farmers", note: "Targeted" },
  {
    value: "100+",
    label: "Farmers Through Training & Networks",
    note: "Targeted reach",
  },
  {
    value: "3",
    label: "Direct Employment Opportunities",
    note: "Initial phase",
  },
  { value: "Dhanbad", label: "Initial Operating Location", note: "Jharkhand" },
];

export const PROBLEMS = [
  {
    title: "Poor-Quality Production Inputs",
    description:
      "Farmers may not have easy access to standardized mushroom bags, quality spawn and reliable production materials.",
    icon: "PackageX",
  },
  {
    title: "Technical Difficulty",
    description:
      "Farmers may lack practical knowledge about substrate preparation, sterilization, spawning, environmental management and disease control.",
    icon: "GraduationCap",
  },
  {
    title: "Production Risk",
    description:
      "Improper preparation and cultivation can cause contamination, crop failure and financial losses.",
    icon: "AlertTriangle",
  },
  {
    title: "Lack of Organized Markets",
    description:
      "Individual farmers may struggle to find reliable buyers and consistent market opportunities.",
    icon: "Store",
  },
  {
    title: "Small-Scale Production",
    description:
      "Small quantities can make production, collection, transportation and marketing less efficient.",
    icon: "TrendingDown",
  },
  {
    title: "Post-Harvest Losses",
    description:
      "Fresh mushrooms have a short shelf life, making timely collection and market linkage important.",
    icon: "Clock",
  },
];

export const SOLUTION_STEPS = [
  {
    title: "Agricultural Residues",
    description: "Source suitable local agricultural residues as raw material",
    icon: "Wheat",
  },
  {
    title: "Substrate Preparation",
    description: "Process and prepare growing substrate from raw materials",
    icon: "FlaskConical",
  },
  {
    title: "Sterilization",
    description: "Sterilize substrate to eliminate contaminants",
    icon: "ShieldCheck",
  },
  {
    title: "Ready-to-Grow Bags",
    description: "Produce standardized mushroom growing bags",
    icon: "Package",
  },
  {
    title: "Farmer Onboarding",
    description: "Assess and onboard interested farmers",
    icon: "UserPlus",
  },
  {
    title: "Technical Training",
    description: "Provide practical mushroom cultivation training",
    icon: "GraduationCap",
  },
  {
    title: "Cultivation",
    description: "Farmers cultivate mushrooms with ongoing support",
    icon: "Sprout",
  },
  {
    title: "Production Monitoring",
    description: "Monitor and guide through the growing cycle",
    icon: "Activity",
  },
  {
    title: "Harvest",
    description: "Timely harvesting of fresh mushrooms",
    icon: "HandCoins",
  },
  {
    title: "Collection & Aggregation",
    description: "Collect produce and aggregate for volume",
    icon: "Truck",
  },
  {
    title: "Quality Control",
    description: "Clean, grade and maintain quality standards",
    icon: "BadgeCheck",
  },
  {
    title: "Organized Buyers",
    description: "Connect with retailers, restaurants and wholesalers",
    icon: "ShoppingBag",
  },
];

export const SERVICES = [
  {
    title: "Ready-to-Grow Mushroom Bags",
    description:
      "Standardized mushroom-growing bags prepared using suitable agricultural residues, designed to reduce the initial technical and infrastructure burden for farmers.",
    benefits: [
      "Reduced setup complexity",
      "Standardized production inputs",
      "Easier entry into mushroom cultivation",
      "Consistent production process",
    ],
    icon: "Package",
  },
  {
    title: "Quality Spawn & Production Inputs",
    description:
      "Provide suitable quality spawn and essential production materials for pilot production and participating farmers.",
    benefits: [
      "Quality-checked spawn",
      "Essential cultivation materials",
      "Reliable production inputs",
    ],
    icon: "FlaskConical",
  },
  {
    title: "Technical Training",
    description:
      "Comprehensive training covering the entire mushroom cultivation cycle from substrate preparation to post-harvest handling.",
    benefits: [
      "Substrate preparation & sterilization",
      "Spawning & incubation",
      "Environmental management",
      "Disease & contamination awareness",
      "Harvesting & post-harvest handling",
    ],
    icon: "GraduationCap",
  },
  {
    title: "Farmer Onboarding",
    description:
      "Structured process for joining Mushroom Hub as a farmer partner, including assessment, registration and initial setup support.",
    benefits: [
      "Guided registration process",
      "Space & resource assessment",
      "Customized onboarding plan",
    ],
    icon: "UserPlus",
  },
  {
    title: "Production Monitoring",
    description:
      "Cultivation guidance and production monitoring throughout the growing cycle to help maintain optimal growing conditions.",
    benefits: [
      "Regular check-ins",
      "Growth stage guidance",
      "Issue identification",
      "Corrective advice",
    ],
    icon: "Activity",
  },
  {
    title: "Mushroom Collection & Aggregation",
    description:
      "Collect produce from participating farmers and aggregate it to create more consistent supply volumes.",
    benefits: [
      "Scheduled collection",
      "Volume aggregation",
      "Reduced individual transport burden",
    ],
    icon: "Truck",
  },
  {
    title: "Quality Control",
    description:
      "Clean, grade and maintain quality standards for mushrooms before market linkage to ensure buyer satisfaction.",
    benefits: [
      "Cleaning & grading",
      "Quality standards",
      "Professional packaging",
      "Market-ready produce",
    ],
    icon: "BadgeCheck",
  },
  {
    title: "Market Linkage",
    description:
      "Connect participating farmers and aggregated produce with organized buyers including retailers, restaurants, wholesalers and institutional customers.",
    benefits: [
      "Vegetable retailers",
      "Restaurants & hotels",
      "Wholesalers & supermarkets",
      "Institutional & bulk buyers",
    ],
    icon: "ShoppingBag",
  },
  {
    title: "Agricultural Waste Utilization",
    description:
      "Suitable agricultural residues can be converted into mushroom-growing substrates. Future exploration of spent mushroom substrate as an agricultural resource is also planned.",
    benefits: [
      "Productive use of crop residues",
      "Circular resource approach",
      "Future substrate recycling",
    ],
    icon: "Recycle",
  },
];

export const HOW_IT_WORKS = [
  {
    step: 1,
    title: "Produce",
    description: "Prepare standardized ready-to-grow mushroom bags",
    icon: "Factory",
  },
  {
    step: 2,
    title: "Support",
    description: "Train, onboard and provide technical guidance to farmers",
    icon: "HeartHandshake",
  },
  {
    step: 3,
    title: "Grow",
    description: "Farmers cultivate mushrooms with ongoing support",
    icon: "Sprout",
  },
  {
    step: 4,
    title: "Collect",
    description: "Timely collection of fresh mushrooms from farmers",
    icon: "Truck",
  },
  {
    step: 5,
    title: "Aggregate",
    description: "Combine produce for consistent supply volumes",
    icon: "Warehouse",
  },
  {
    step: 6,
    title: "Quality Check",
    description: "Clean, grade and ensure market-ready quality",
    icon: "BadgeCheck",
  },
  {
    step: 7,
    title: "Connect to Market",
    description: "Link with organized buyers and consumers",
    icon: "ShoppingBag",
  },
];

export const ADVANTAGES = [
  {
    title: "Standardized Production",
    description:
      "Ready-to-grow mushroom bags prepared using standardized processes.",
    icon: "Boxes",
  },
  {
    title: "Farmer-Centric Model",
    description:
      "Farmers can begin cultivation without developing the complete production infrastructure themselves.",
    icon: "Users",
  },
  {
    title: "End-to-End Support",
    description:
      "Production inputs, technical guidance, cultivation support, harvesting assistance and market linkage.",
    icon: "ArrowRightLeft",
  },
  {
    title: "Aggregated Supply",
    description:
      "Produce from multiple farmers can be aggregated to create more consistent volume and quality.",
    icon: "Layers",
  },
  {
    title: "Market-Linked Production",
    description:
      "Production can be planned around market demand to reduce the risk of unsold produce.",
    icon: "Target",
  },
  {
    title: "Agricultural Waste Utilization",
    description:
      "Suitable agricultural residues can be converted into productive mushroom-growing substrates.",
    icon: "Recycle",
  },
  {
    title: "Scalable Network",
    description:
      "The model can expand from one production hub to multiple hubs and farmer networks.",
    icon: "Network",
  },
  {
    title: "Technology-Enabled Future",
    description:
      "Planned digital capabilities including farmer onboarding, production tracking, crop monitoring and market coordination.",
    tag: "Future",
    icon: "Smartphone",
  },
];

export const ROADMAP = [
  {
    phase: "Phase 1",
    title: "Pilot Launch – Dhanbad",
    status: "current",
    items: [
      "Establish Mushroom Hub pilot unit",
      "Standardize ready-to-grow mushroom bags",
      "Conduct pilot production trials",
      "Validate yield, quality & contamination control",
      "Develop SOPs",
      "Onboard pilot farmers & provide training",
      "Establish local market linkages",
      "Develop basic farmer-support system",
    ],
  },
  {
    phase: "Phase 2",
    title: "Jharkhand Expansion",
    status: "planned",
    items: [
      "Expand farmer network across Jharkhand",
      "Expand market relationships",
      "Increase production capacity",
      "Strengthen supply chain",
    ],
  },
  {
    phase: "Phase 3",
    title: "Eastern India",
    status: "future",
    items: [
      "Expand to selected markets in Eastern India",
      "Build multiple farmer networks",
      "Diversify mushroom varieties",
      "Strengthen technology platform",
    ],
  },
  {
    phase: "Phase 4",
    title: "Multi-State Network",
    status: "future",
    items: [
      "Multiple production hubs",
      "Pan-regional farmer networks",
      "Comprehensive technology platform",
      "Diversified product portfolio",
    ],
  },
];

export const FAQS = [
  {
    question: "What is Mushroom Hub?",
    answer:
      "Mushroom Hub is a farmer-centric mushroom production and market-linkage platform based in Dhanbad, Jharkhand. It aims to provide farmers with ready-to-grow mushroom bags, technical training, production support, mushroom aggregation and organized market connections.",
  },
  {
    question: "Who can become a Mushroom Hub farmer partner?",
    answer:
      "Any farmer or individual interested in mushroom cultivation in the initial area of operation (Dhanbad, Jharkhand) can express interest in becoming a farmer partner. Previous mushroom farming experience is not mandatory — training and technical support will be provided.",
  },
  {
    question: "What are ready-to-grow mushroom bags?",
    answer:
      "Ready-to-grow mushroom bags are standardized growing bags prepared using suitable agricultural residues and quality spawn. They are designed to reduce the technical and infrastructure burden for farmers, making it easier to begin mushroom cultivation.",
  },
  {
    question: "Do I need previous mushroom farming experience?",
    answer:
      "No. Mushroom Hub plans to provide technical training and cultivation support to help farmers learn mushroom farming from the basics.",
  },
  {
    question: "What technical support does Mushroom Hub provide?",
    answer:
      "Mushroom Hub aims to provide training on substrate preparation, sterilization, spawning, incubation, environmental management, disease awareness, harvesting and basic post-harvest handling. Production monitoring and guidance are also planned.",
  },
  {
    question: "How does mushroom collection work?",
    answer:
      "Mushroom Hub plans to collect produce from participating farmers through scheduled collection, aggregate it to create consistent supply volumes, and then connect it with organized buyers.",
  },
  {
    question: "Who can buy mushrooms from Mushroom Hub?",
    answer:
      "Mushroom Hub aims to connect with vegetable retailers, restaurants, wholesalers, supermarkets, hotels, institutional buyers and bulk purchasers. Availability and supply quantities will depend on production and participating farmer capacity.",
  },
  {
    question: "Where is Mushroom Hub currently operating?",
    answer:
      "Mushroom Hub is currently in the idea / pre-launch stage (2026) with initial pilot operations planned in Dhanbad, Jharkhand.",
  },
  {
    question: "Can restaurants and wholesalers partner with Mushroom Hub?",
    answer:
      "Yes, Mushroom Hub welcomes interest from restaurants, wholesalers and other organized buyers. Please use the buyer inquiry form or contact us to discuss potential supply arrangements.",
  },
  {
    question: "How does Mushroom Hub use agricultural residues?",
    answer:
      "Mushroom Hub intends to convert suitable agricultural residues into mushroom-growing substrates. This approach aims to make productive use of locally available crop residues. Future exploration of spent mushroom substrate as an agricultural resource is also planned.",
  },
  {
    question: "Is Mushroom Hub currently commercially operational?",
    answer:
      "No. The project is currently at the idea / pre-launch stage in 2026, with initial pilot operations planned in Dhanbad, Jharkhand. Commercial operations have not yet started. Figures presented on the website regarding farmer reach, employment and project expansion are planned targets unless explicitly identified as achieved.",
  },
];

export const IMPACT_DATA = {
  directFarmers: { value: "20", label: "Direct Pilot Farmers", note: "Targeted" },
  indirectFarmers: {
    value: "100+",
    label: "Indirect Farmers",
    note: "Through training, knowledge sharing and farmer networks",
  },
  directJobs: {
    value: "3",
    label: "Direct Employment Opportunities",
    note: "In the initial phase",
  },
  indirectJobs: {
    value: "10+",
    label: "Indirect Opportunities",
    note: "Through transportation, input supply, aggregation and market activities",
  },
  impacts: [
    "Additional income opportunities for farmers",
    "Rural employment",
    "Better access to production inputs",
    "Improved technical knowledge",
    "Better market access",
    "More efficient aggregation",
    "Productive use of agricultural residues",
  ],
};

export const CAREERS = [
  {
    title: "Mushroom Production & Technical Assistant",
    type: "Full Time",
    hours: "8 hours/day",
    count: 1,
    qualification:
      "Diploma/Graduate in Agriculture, Horticulture, Life Sciences or related field.",
    experience: "Practical mushroom cultivation experience preferred.",
    responsibilities: [
      "Substrate preparation",
      "Sterilization",
      "Spawning",
      "Production monitoring",
      "Quality control",
      "Technical support",
    ],
    salary: "₹20,000/month",
    status: "Proposed Pilot Position",
  },
  {
    title: "Farmer & Field Support Executive",
    type: "Part Time",
    hours: "4 hours/day",
    count: 1,
    qualification: "Graduate/Diploma.",
    experience:
      "Agriculture, farmer outreach or rural development preferred.",
    responsibilities: [
      "Farmer onboarding",
      "Training",
      "Field visits",
      "Production monitoring",
      "Collection coordination",
    ],
    salary: "₹10,000/month",
    status: "Proposed Pilot Position",
  },
  {
    title: "Sales & Market Development Executive",
    type: "Part Time",
    hours: "4 hours/day",
    count: 1,
    qualification: "Graduate.",
    experience: "Sales, marketing or agribusiness preferred.",
    responsibilities: [
      "Buyer identification",
      "Customer acquisition",
      "Market linkage",
      "Order coordination",
      "Product promotion",
    ],
    salary: "₹10,000/month",
    status: "Proposed Pilot Position",
  },
];

export const FUNDING = {
  currentStage: "Idea / Pre-launch – 2026",
  commercialSales: "Not yet started",
  salesTillDate: "Not applicable",
  profitLoss: "Not applicable – Pre-revenue stage",
  previousFunding: "No",
  patent: "No patent or copyright filed at present",
  trademark:
    "Trademark registration for the Mushroom Hub brand is planned as the business progresses toward commercial launch.",
  totalCost: "₹6,00,000",
  grantProposed: "₹5,00,000",
  ownerContribution: "₹1,00,000",
  breakdown: [
    {
      category: "Manpower",
      grant: "₹1,00,000",
      owner: "₹20,000",
      total: "₹1,20,000",
    },
    {
      category: "Capital Expenditure",
      grant: "₹2,00,000",
      owner: "₹40,000",
      total: "₹2,40,000",
    },
    {
      category: "Working Capital",
      grant: "₹1,00,000",
      owner: "₹20,000",
      total: "₹1,20,000",
    },
    {
      category: "Marketing & Trials",
      grant: "₹50,000",
      owner: "₹10,000",
      total: "₹60,000",
    },
    {
      category: "Contingency",
      grant: "₹50,000",
      owner: "₹10,000",
      total: "₹60,000",
    },
  ],
};

export const EQUIPMENT = [
  {
    name: "Mushroom Substrate Sterilization Unit",
    capacity: "100–200 kg/batch",
    quantity: "1 unit",
    purpose: "Sterilization of substrate",
    value: "₹0.80 lakh",
  },
  {
    name: "Substrate Preparation & Mixing Equipment",
    capacity: "100–200 kg/batch",
    quantity: "1 set",
    purpose:
      "Preparation and uniform mixing of agricultural residues and substrate components",
    value: "₹0.50 lakh",
  },
  {
    name: "Mushroom Incubation & Environmental Control System",
    capacity: "",
    quantity: "1 pilot unit",
    purpose: "Temperature, humidity and ventilation management",
    value: "₹0.50 lakh",
  },
  {
    name: "Mushroom Processing & Packaging Equipment",
    capacity: "",
    quantity: "1 set",
    purpose: "Cleaning, grading and hygienic packaging",
    value: "₹0.40 lakh",
  },
  {
    name: "Weighing & Quality-Control Equipment",
    capacity: "",
    quantity: "1 set",
    purpose: "Accurate weighing and basic quality monitoring",
    value: "₹0.20 lakh",
  },
];

export const WORKING_CAPITAL = [
  { item: "Raw Materials & Agricultural Residues", amount: "₹0.30 lakh" },
  { item: "Mushroom Spawn & Production Inputs", amount: "₹0.25 lakh" },
  { item: "Packaging Materials", amount: "₹0.15 lakh" },
  { item: "Utilities & Operations", amount: "₹0.15 lakh" },
  { item: "Transportation & Collection", amount: "₹0.15 lakh" },
  { item: "Cleaning & Consumables", amount: "₹0.20 lakh" },
];

export const MARKETING_BUDGET = [
  { item: "Pilot Production Trials", amount: "₹0.15 lakh" },
  { item: "Farmer Demonstration & Training", amount: "₹0.10 lakh" },
  { item: "Market Testing", amount: "₹0.10 lakh" },
  { item: "Branding & Promotional Materials", amount: "₹0.10 lakh" },
  { item: "Digital Marketing & Customer Acquisition", amount: "₹0.05 lakh" },
  { item: "Packaging & Product Presentation Trials", amount: "₹0.10 lakh" },
];

export const Q1_MILESTONES = [
  "Establish pilot unit in Dhanbad",
  "Standardize ready-to-grow mushroom bag process",
  "Use locally available agricultural residues where suitable",
  "Conduct production trials",
  "Validate yield & quality",
  "Improve contamination control",
  "Understand production cost",
  "Develop SOPs for substrate preparation, sterilization, spawning, incubation & cultivation",
  "Onboard first pilot farmer group",
  "Provide practical training",
  "Establish initial local market linkages",
  "Develop farmer-support system",
  "Develop market-linkage system",
  "Collect production/cost/farmer feedback data",
];

export const KNOWLEDGE_CATEGORIES = [
  "Mushroom Cultivation",
  "Farmer Training",
  "Mushroom Nutrition",
  "Post-Harvest Handling",
  "Agricultural Waste Utilization",
  "Market Information",
  "Mushroom Business",
  "Farmer Success Stories",
  "Company Updates",
];

export const BLOG_POSTS = [
  {
    title: "Introduction to Oyster Mushroom Cultivation",
    category: "Mushroom Cultivation",
    excerpt:
      "Learn the basics of oyster mushroom cultivation, from substrate preparation to harvesting.",
    date: "Coming Soon",
    isSample: true,
  },
  {
    title: "Benefits of Mushroom Farming for Small Farmers",
    category: "Farmer Training",
    excerpt:
      "Understand how mushroom cultivation can create additional income opportunities for small-scale farmers.",
    date: "Coming Soon",
    isSample: true,
  },
  {
    title: "Nutritional Value of Fresh Mushrooms",
    category: "Mushroom Nutrition",
    excerpt:
      "Explore the nutritional benefits of including fresh mushrooms in your diet.",
    date: "Coming Soon",
    isSample: true,
  },
  {
    title: "Agricultural Waste to Mushroom Substrate",
    category: "Agricultural Waste Utilization",
    excerpt:
      "How suitable agricultural residues can be converted into productive mushroom-growing substrates.",
    date: "Coming Soon",
    isSample: true,
  },
];

export const BUSINESS_PILLARS = [
  {
    title: "Input",
    description: "Ready-to-grow bags + quality spawn + production inputs",
    icon: "Package",
  },
  {
    title: "Support",
    description: "Training + technical guidance + crop monitoring",
    icon: "HeartHandshake",
  },
  {
    title: "Aggregation",
    description: "Collection + quality control + consolidated supply",
    icon: "Layers",
  },
  {
    title: "Market",
    description:
      "Retailers + restaurants + wholesalers + institutional buyers",
    icon: "ShoppingBag",
  },
];

export const FARMER_JOURNEY = [
  { step: 1, title: "Register / Contact Mushroom Hub" },
  { step: 2, title: "Farmer Assessment & Onboarding" },
  { step: 3, title: "Training & Technical Guidance" },
  { step: 4, title: "Receive Ready-to-Grow Bags / Production Inputs" },
  { step: 5, title: "Cultivate With Technical Support" },
  { step: 6, title: "Production Monitoring" },
  { step: 7, title: "Harvest" },
  { step: 8, title: "Collection & Aggregation" },
  { step: 9, title: "Market Linkage" },
  { step: 10, title: "Payment / Transaction Tracking" },
];

export const FOUNDER_RESPONSIBILITIES = [
  "Overall business strategy",
  "Mushroom production",
  "Mushroom Hub model development",
  "Farmer engagement",
  "Operations",
  "Market development",
  "Business expansion",
];

export const TEAMS = [
  {
    name: "Technical & Production Team",
    responsibilities: [
      "Substrate preparation",
      "Sterilization",
      "Spawn inoculation",
      "Quality control",
      "Mushroom production",
    ],
  },
  {
    name: "Farmer & Market Support Team",
    responsibilities: [
      "Farmer onboarding",
      "Technical assistance",
      "Collection of produce",
      "Customer coordination",
      "Market linkage",
    ],
  },
];

export const FUTURE_TEAM_AREAS = [
  "Production",
  "Farmer support",
  "Quality control",
  "Sales & marketing",
  "Technology",
  "Supply-chain management",
];
