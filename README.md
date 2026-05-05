# MediaSearch

MediaSearch is a React + Vite app for searching photos, videos, and GIFs, then saving favorites to a local collection with Redux.

## Features

- Search across photos, videos, and GIFs
- Switch media type with tabs
- Save items to a personal collection
- Remove items or clear the full collection
- Responsive UI built with Tailwind CSS

## Tech Stack

- React
- Vite
- Redux Toolkit
- React Router
- Tailwind CSS
- Axios


## Setup

1. Install dependencies:

```bash
npm install
```

2. Create a `.env` file in the project root and add your API keys:

```env
VITE_UNSPLASH_API_KEY=your_unsplash_key
VITE_PEXELS_API_KEY=your_pexels_key
VITE_GIPHY_API_KEY=your_giphy_key
```

3. Start the development server:

```bash
npm run dev
```

## Scripts

- `npm run dev` - start the local dev server
- `npm run build` - create a production build
- `npm run preview` - preview the production build locally
- `npm run lint` - run ESLint

## Notes

- Make sure the API keys are valid before searching.
- If the app opens on a different port, use the local URL shown in the terminal.