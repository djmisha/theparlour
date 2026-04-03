# Ring 76 - San Diego Magic Club Website

The official website for Ring 76, the Honest Sid Gerhart Ring of the International Brotherhood of Magicians in San Diego.

## Tech Stack

- **Framework**: [Astro](https://astro.build/) with React integration
- **Styling**: Plain CSS
- **Deployment**: Static site generation, deployable to Netlify

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

The development server will start at `http://localhost:4321`.

### Build

```bash
npm run build
```

The static site will be generated in the `dist/` directory.

### Preview

```bash
npm run preview
```

Preview the production build locally.

## Project Structure

```
├── public/              # Static assets
│   ├── image/           # Images (heroes, logos, etc.)
│   ├── js/              # Client-side JavaScript modules
│   └── styles/          # CSS stylesheets
├── src/
│   ├── components/      # Reusable Astro components
│   ├── data/            # Static JSON data (events, officers, links, etc.)
│   ├── layouts/         # Page layouts
│   ├── pages/           # Route pages
│   └── styles/          # Source CSS files
├── astro.config.mjs     # Astro configuration
├── netlify.toml         # Netlify deployment config
├── package.json         # Dependencies and scripts
└── tsconfig.json        # TypeScript configuration
```

## Pages

| Route | Description |
|-------|-------------|
| `/` | Home - Hero, about, events, magic arts, benefits, library, contact |
| `/about` | Club history since 1948, values, membership info |
| `/board` | Current officers, responsibilities, elections |
| `/contact` | Membership application & payment |
| `/donate` | Donation options (time, items, money) |
| `/hall-of-fame` | Past presidents, award winners |
| `/links` | Magic resource directory (filterable) |
| `/membership` | Membership types & benefits |
| `/meetings` | Meeting schedule, location, expectations |
| `/newsletter` | Newsletter archive from 1988-present |

## Data Management

Database-driven content has been migrated to static JSON files in `src/data/`:

- `events.json` - Upcoming meetings and events
- `officers.json` - Board member information
- `links.json` - Magic links directory
- `hall-of-fame.json` - Awards and recognition data

To update content, edit the corresponding JSON file and rebuild the site.

## Deployment

### Netlify

The site is configured for Netlify deployment:

1. Connect the repository to Netlify
2. Build command: `npm run build`
3. Publish directory: `dist`

The `netlify.toml` file contains the deployment configuration.

## License

All rights reserved - I.B.M. Ring 76 - San Diego Magic Club
