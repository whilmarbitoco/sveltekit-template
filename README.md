# Svelte + shadcn-svelte UI Template

A modern, production-ready UI template built with SvelteKit 5, Tailwind CSS 4, and shadcn-svelte components.

## Features

- ⚡ **SvelteKit 5** - Latest Svelte framework with enhanced performance
- 🎨 **Tailwind CSS 4** - Utility-first CSS with latest features
- 🧩 **shadcn-svelte** - Beautiful, accessible component library
- 📝 **TypeScript** - Full type safety
- 🎯 **Lucide Icons** - Modern icon library
- ✨ **Prettier** - Code formatting with Svelte and Tailwind plugins

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

```sh
npm install
```

### Development

```sh
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Building

```sh
npm run build
npm run preview
```

## Project Structure

```
src/
├── lib/
│   ├── components/    # Reusable components
│   ├── hooks/         # Custom Svelte hooks
│   └── utils.ts       # Utility functions
└── routes/            # SvelteKit routes
```

## Adding shadcn-svelte Components

```sh
npx shadcn-svelte@latest add [component-name]
```

Visit [shadcn-svelte.com](https://shadcn-svelte.com) for available components.

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run check` - Type check
- `npm run format` - Format code with Prettier
