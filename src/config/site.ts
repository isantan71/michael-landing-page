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
export interface Link {
  name: string;
  urls: string[];
  description?: string;
}

export interface SectionWithPort {
  port: number;
  links?: Link[];
}

export interface SectionWithoutPort {
  links?: Link[];
}

export interface Product {
  name: string;
  description: string;
  sections: {
    [key: string]: SectionWithPort | SectionWithoutPort;
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
    sections: {
      frontend: {
        port: 3008,
        links: [
          {
            name: "prod",
            urls: ["https://moviefans.345321.xyz/"],
            description: "Live production environment",
          },
          {
            name: "staging",
            urls: ["https://moviefans-staging.345321.xyz/"],
            description: "Staging environment for testing",
          },
        ],
      },
      backend: {
        port: 8008,
        links: [
          {
            name: "prod",
            urls: ["https://baidu-python-moviefans.345321.xyz/docs"],
            description: "Deployed on Baidu-lightvm",
          },
          {
            name: "staging",
            urls: ["https://staging-python-moviefans.vercel.app/docs"],
            description: "Deployed on Vercel, 0xMichaelRan",
          },
        ],
      },
      "Data Monitor": {
        links: [
          {
            name: "prod dashboard",
            urls: ["https://example.google.xyz/"],
            description: "database viewing dashbaord",
          },
          {
            name: "staging dashboard",
            urls: ["https://staging.google.xyz/"],
            description: "database viewing dashbaord",
          },
        ],
      },
    },
  },
  {
    name: "Super Swiss",
    description: "AI-powered Swiss army knife toolkit",
    sections: {
      Frontend: {
        port: 3012,
        links: [
          {
            name: "prod",
            urls: ["https://superswiss.vercel.app"],
            description: "Live production environment",
          },
          {
            name: "staging",
            urls: ["https://superswiss-staging.vercel.app"],
            description: "Staging environment for testing",
          },
        ],
      },
      Backend: {
        port: 8012,
        links: [
          {
            name: "prod",
            urls: ["https://api.superswiss.vercel.app"],
            description: "Backend API endpoint",
          },
        ],
      },
    },
  },
  {
    name: "OneYumi",
    description: "Modern web application platform",
    sections: {
      Frontend: {
        port: 3000,
        links: [
          {
            name: "prod",
            urls: ["https://www.oneyumi.com/"],
            description: "Live production environment",
          },
          {
            name: "staging",
            urls: ["https://staging--oneyumi.netlify.app/"],
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
    sections: {
      Frontend: {
        port: 3013,
        links: [
          {
            name: "prod",
            urls: ["https://michael.345321.xyz/"],
            description: "Deployed on Netlify, isantan71",
          },
          {
            name: "staging",
            urls: ["https://staging--michael345.netlify.app/"],
            description: "Deployed on Netlify, isantan71",
          },
        ],
      },
    },
  },
  {
    name: "Church Noodlism",
    description: "Flying noodlism church official website",
    sections: {
      Frontend: {
        links: [
          {
            name: "prod",
            urls: ["https://church.noodlism.345321.xyz/"],
            description: "Deployed on Vercel, dominy0193",
          },
          {
            name: "staging",
            urls: ["https://staging-church-noodlism.vercel.app/"],
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
    sections: {
      Android: {
        links: [
          {
            name: "Resilio Sync v2.8.1",
            urls: ["/downloads/android/ResilioSync_2.8.1.apk"],
            description: "Fast, private file sharing and sync",
          },
          {
            name: "Rustdesk v1.4.4",
            urls: ["/downloads/android/rustdesk-1.4.4-aarch64-signed.apk"],
            description: "Remote desktop software",
          },
          {
            name: "v2rayNG v1.10.2",
            urls: ["/downloads/android/v2rayNG_1.10.32_arm64-v8a.apk"],
            description: "V2Ray client for Android",
          },
          {
            name: "好好看影视 v3.3.9 无广告",
            urls: ["/downloads/android/好好看影视 v3.3.9无广告纯净版.apk"],
            description: "Movies app no ads",
          },
          {
            name: "网飞猫 v3.4.0 去广告版",
            urls: ["/downloads/android/网飞猫 Ver.3.4.0 去广告版.apk"],
            description: "ncat.app no ads",
          },
        ],
      },
      "Mac OS": {
        links: [
          {
            name: "Resilio Sync",
            urls: ["/downloads/macos/Resilio-Sync-2.8.1.dmg"],
            description: "Fast, private file sharing and sync",
          },
        ],
      },
    },
  },
];
