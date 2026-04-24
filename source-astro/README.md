# Boise Code Camp - Astro Migration

This is a migration of the Boise Code Camp website from a Vue 3 SPA to an Astro-based static/hybrid site.

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## Testing

The migration is verified using Playwright.

```bash
# Run tests
npx playwright test
```

## Architecture
- **Framework:** Astro 6
- **UI:** Vue 3 (Composition API) components reused from the original project.
- **Styling:** Bootstrap 5 (Sass) and Material Design Icons.
- **Data:** Initialized client-side via `src/components/Init.vue` fetching from Sessionize.
