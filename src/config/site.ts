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
      Frontend: {
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
      Backend: {
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
      "Data-Monitor": {
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
      Frontend: {
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
      Backend: {
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
      Frontend: {
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
      Frontend: {
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
      Frontend: {
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

export const resourceProducts: Product[] = [
  {
    name: "Downloadables",
    description: "Multi-platform utilities and productivity tools",
    categories: {
      Android: {
        environments: [
          {
            name: "Resilio Sync v2.8.1",
            url: "https://static.oneyumi.com/resilio/android/resilio_2.8.1.apk",
            description: "Fast, private file sharing and sync",
          },
          {
            name: "Rustdesk v1.4.4",
            url: "https://static.oneyumi.com/resilio/android/rustdesk-1.4.4-aarch64-signed.apk",
            description: "Remote desktop software",
          },
          {
            name: "v2rayNG v1.10.2",
            url: "https://static.oneyumi.com/resilio/android/v2rayNG_1.10.2.apk",
            description: "V2Ray client for Android",
          },
          {
            name: "好好看影视 v3.3.9 无广告",
            url: "https://static.oneyumi.com/resilio/android/%E5%A5%BD%E5%A5%BD%E7%9C%8B%E5%BD%B1%E8%A7%86%20v3.3.9%E6%97%A0%E5%B9%BF%E5%91%8A%E7%BA%AF%E5%87%80%E7%89%88.apk",
            description: "ncat no ads",
          },
          {
            name: "网飞猫 v3.4.0 去广告版",
            url: "https://static.oneyumi.com/resilio/android/%E7%BD%91%E9%A3%9E%E7%8C%AB%20Ver.3.4.0%20%E5%8E%BB%E5%B9%BF%E5%91%8A%E7%89%88.apk",
            description: "ncat no ads",
          },
        ],
      },
      macOS: {
        environments: [
          {
            name: "RustDesk",
            url: "/downloads/macos/rustdesk.dmg",
            description: "Remote desktop software",
          },
          {
            name: "Resilio Sync",
            url: "https://static.oneyumi.com/resilio/",
            description: "Fast, private file sharing and sync",
          },
        ],
      },
    },
  },
];
