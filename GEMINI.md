# Boise Code Camp - Project Context

This repository contains the official website for **Boise Code Camp**, a free annual community tech conference. The project consists of two architectures, with the Vue 3 SPA as the primary production site.

## Repository Overview

- **`vue/`**: The primary production site using a Vue 3 SPA architecture.
- **`source-astro/`**: An experimental migration site using Astro 6 and Vue 3 components.
- **`inf/`**: Infrastructure as Code (IaC) using Pulumi (Azure) for static hosting and CDN.
- **`boisecodecamp.github.io/`**: A git submodule pointing to the GitHub Pages repository where the built site is deployed.
- **`sponsors/`**: Contains sponsor assets and a `sponors.csv` file used by the builds.

---

## Core Technologies

- **Frameworks**: Vue 3 (Composition API), Astro 6
- **Styling**: Bootstrap 5, SCSS, Material Design Icons (`@mdi/font`)
- **Data Fetching**: Axios (integrating with Sessionize API)
- **Infrastructure**: Pulumi (Azure Blob Storage, CDN)
- **Testing**: Playwright (verification for the Astro version)

---

## Development & Build Commands

### Vue SPA (`vue/`)
```bash
cd vue
npm install
npm run serve      # Dev server (http://localhost:8080)
npm run build      # Production build to vue/dist
npm run lint       # ESLint with autofix
```

### Astro Site (`source-astro/`)
```bash
cd source-astro
npm install
npm run dev        # Dev server (http://localhost:4321)
npm run build      # Production build to source-astro/dist
npm run preview    # Preview production build locally
npx playwright test # Run verification tests
```

### Infrastructure (`inf/`)
```bash
cd inf
npm install
pulumi up          # Deploy/update Azure infrastructure
```

---

## Key Design Patterns

### Centralized State & Config (`AppState.js`)
Both `vue/` and `source-astro/` use a reactive `AppState.js` file as the **Single Source of Truth**. This file contains:
- **`SESSIONIZE_KEY`**: API key for fetching the year's speaker and session data.
- **`STORAGE_KEY`**: Used to bust `localStorage` cache for Sessionize data.
- **Event Details**: Date, venue, address, and registration URLs.
- **Sponsor List**: Synchronized with the latest event data.

### Data Flow
1. **Sessionize Service**: Fetches data from the Sessionize API and stores it in `AppState`.
2. **Caching**: Fetched data is cached in `localStorage` for 24 hours.
3. **Components**: Vue components reactively consume data from `AppState`.

---

## Annual Update Workflow

To update the site for a new year, follow this checklist in `AppState.js` (for both `vue/` and `source-astro/`):

1.  **Bump `STORAGE_KEY`**: (e.g., `BOISECODECAMP2026`) to clear visitor caches.
2.  **Update `SESSIONIZE_KEY`**: Get the new key from the Sessionize dashboard.
3.  **Update Event Info**: `currentYear`, `event.date`, `event.venue`, and `event.address`.
4.  **Update URLs**: `cfs` (Call for Speakers) and `register` (Eventbrite).
5.  **Refresh Keynote**: Fill in the `keynote` speaker details when confirmed.

---

## Deployment Process

1.  **Integrate**: Work is merged into the `main` branch.
2.  **Deploy**: Pushing to the **`production`** branch triggers a GitHub Action.
3.  **Build**: The action builds `vue/` (`npm run build`).
4.  **Publish**: The contents of `vue/dist/` are pushed to the `boisecodecamp.github.io` submodule repo (GitHub Pages).
