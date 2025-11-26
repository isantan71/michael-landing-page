# Michael's Landing Page

A modern, beautiful landing page built with Next.js 15, React 18, and Tailwind CSS. Features dynamic word cycling animations and a clean, minimalist design.

## Features

- ✨ Modern, responsive design
- 🎨 Tailwind CSS for styling
- ⚡ Next.js 15 with Turbopack for fast development
- 🔄 Dynamic word cycling animation
- 📱 Mobile-first responsive layout
- 🎯 TypeScript for type safety
- 🧹 Biome for code formatting and linting

## Tech Stack

- **Framework:** Next.js 15.3.2
- **UI Library:** React 18.3.1
- **Styling:** Tailwind CSS 3.4.17
- **Language:** TypeScript 5.8.3
- **Code Quality:** Biome 1.9.4, ESLint 9.27.0
- **Package Manager:** Yarn

## Getting Started

### Prerequisites

- Node.js 20.x or higher
- Yarn package manager

### Development

Run the development server:

```bash
yarn dev
```

The application will be available at [http://localhost:3013](http://localhost:3013)

The development server uses:
- Port: **3013**
- Host: **0.0.0.0** (accessible from network)
- Turbopack for faster builds

### Building for Production

Build the production bundle:

```bash
yarn build
```

Start the production server:

```bash
yarn start
```

The production server will run on port **3013**.

## Available Scripts

- `yarn dev` - Start development server with Turbopack
- `yarn build` - Build production bundle
- `yarn start` - Start production server
- `yarn lint` - Run TypeScript type checking and ESLint
- `yarn format` - Format code with Biome

## Project Structure

```
.
├── src/
│   └── app/
│       ├── page.tsx          # Main landing page
│       ├── layout.tsx         # Root layout
│       └── globals.css        # Global styles
├── public/                    # Static assets
├── tailwind.config.ts         # Tailwind configuration
├── tsconfig.json             # TypeScript configuration
├── biome.json                # Biome configuration
├── eslint.config.mjs         # ESLint configuration
└── package.json              # Project dependencies
```

## Key Components

### WordCycler
A dynamic component that cycles through words with smooth animations:
- Words: "beautiful", "lean and agile", "intuitive", "monetizable"
- Transition duration: 500ms
- Cycle interval: ~2.7 seconds

### ProductIcon
Reusable icon component for product cards with customizable colors.

### Logo
SVG-based logo component with a clean, modern design.

## Styling

The project uses Tailwind CSS with custom configurations. Key design elements:
- Clean, minimalist aesthetic
- Responsive breakpoints for mobile and desktop
- Smooth transitions and animations
- Pink accent colors for highlights

## Code Quality

- **TypeScript:** Full type safety across the codebase
- **Biome:** Fast, modern linter and formatter
- **ESLint:** Additional linting with Next.js best practices
