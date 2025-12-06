export const heroWords = [
  "beautiful",
  "lean and agile",
  "intuitive",
  "monetizable",
];

export const socialLinks = {
  twitter: "https://twitter.com/",
  github: "https://github.com/",
};

// Type definitions
export interface Environment {
  name: string;
  url: string;
  description?: string;
}

export interface CategoryWithPort {
  port: number;
  environments?: Environment[];
}

export interface CategoryWithoutPort {
  environments?: Environment[];
}

export interface Product {
  name: string;
  description: string;
  categories: {
    [key: string]: CategoryWithPort | CategoryWithoutPort;
  };
}

// Utility function to generate random color from string (deterministic)
export function generateColorFromString(str: string): string {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }

  // Generate vibrant colors using HSL
  const hue = Math.abs(hash % 360);
  const saturation = 65 + (Math.abs(hash >> 8) % 20); // 65-85%
  const lightness = 45 + (Math.abs(hash >> 16) % 15); // 45-60%

  return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
}

export const products: Product[] = [
  {
    name: "MovieFans",
    description: "Movie database and subtitle management platform",
    categories: {
      frontend: {
        port: 3008,
        environments: [
          {
            name: "prod",
            url: "https://moviefans.345321.xyz/",
            description: "Live production environment",
          },
          {
            name: "staging",
            url: "https://moviefans-staging.345321.xyz/",
            description: "Staging environment for testing",
          },
        ],
      },
      backend: {
        port: 8008,
        environments: [
          {
            name: "prod",
            url: "https://baidu-python-moviefans.345321.xyz/docs",
            description: "Deployed on Baidu-lightvm",
          },
          {
            name: "staging",
            url: "https://staging-python-moviefans.vercel.app/docs",
            description: "Deployed on Vercel, 0xMichaelRan",
          },
        ],
      },
      "daba-monitor": {
        environments: [
          {
            name: "prod dashboard",
            url: "https://example.google.xyz/",
            description: "database viewing dashbaord",
          },
          {
            name: "staging dashboard",
            url: "https://staging.google.xyz/",
            description: "database viewing dashbaord",
          },
        ],
      },
    },
  },
  {
    name: "Super Swiss",
    description: "AI-powered Swiss army knife toolkit",
    categories: {
      frontend: {
        port: 3012,
        environments: [
          {
            name: "prod",
            url: "https://superswiss.vercel.app",
            description: "Live production environment",
          },
          {
            name: "staging",
            url: "https://superswiss-staging.vercel.app",
            description: "Staging environment for testing",
          },
        ],
      },
      backend: {
        port: 8012,
        environments: [
          {
            name: "prod",
            url: "https://api.superswiss.vercel.app",
            description: "Backend API endpoint",
          },
        ],
      },
    },
  },
  {
    name: "OneYumi",
    description: "Modern web application platform",
    categories: {
      frontend: {
        port: 3000,
        environments: [
          {
            name: "prod",
            url: "https://www.oneyumi.com/",
            description: "Live production environment",
          },
          {
            name: "staging",
            url: "https://staging--oneyumi.netlify.app/",
            description: "Staging environment for testing",
          },
        ],
      },
    },
  },
];

export const playgroundProducts: Product[] = [
  {
    name: "Michael Landing Page",
    description: "Experimental AI chat interface with custom models",
    categories: {
      frontend: {
        port: 3013,
        environments: [
          {
            name: "prod",
            url: "https://michael.345321.xyz/",
            description: "Deployed on Netlify, isantan71",
          },
          {
            name: "staging",
            url: "https://staging--michael345.netlify.app/",
            description: "Deployed on Netlify, isantan71",
          },
        ],
      },
    },
  },
  {
    name: "Church Noodlism",
    description: "Flying noodlism church official website",
    categories: {
      frontend: {
        environments: [
          {
            name: "prod",
            url: "https://church.noodlism.345321.xyz/",
            description: "Deployed on Vercel, dominy0193",
          },
          {
            name: "staging",
            url: "https://staging-church-noodlism.vercel.app/",
            description: "Deployed on Vercel, dominy0193",
          },
        ],
      },
    },
  },
];
