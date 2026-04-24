# BoiseCodeCamp - Primary Site

The primary website for [Boise Code Camp](https://boisecodecamp.com), a free annual community tech conference in Boise, ID.

## Repository Layout

```
vue/            Vue 3 SPA — primary production site
source-astro/   Astro 6 + Vue 3 — experimental migration site
inf/            Pulumi infrastructure (Azure)
boisecodecamp.github.io/  Built output (git submodule → GitHub Pages)
```

---

## Updating for a New Year

All year-specific content lives in `vue/src/AppState.js`. Update these fields:

| Field                          | Description                                                       |
| ------------------------------ | ----------------------------------------------------------------- |
| `STORAGE_KEY`                  | Bump the year (e.g. `BOISECODECAMP27`) to bust localStorage cache |
| `SESSIONIZE_KEY`               | New key from Sessionize for the year's event                      |
| `cfs`                          | Call-for-speakers URL                                             |
| `register`                     | Eventbrite registration URL                                       |
| `currentYear`                  | Four-digit year string                                            |
| `event.date`, `event.dTime`    | Event date                                                        |
| `event.venue`, `event.address` | Venue details                                                     |
| `keynote`                      | Uncomment and fill in keynote speaker block                       |
| `sponsors`                     | Update sponsor list                                               |

---

## Development

### Production Vue site (`vue/`)

```bash
cd vue
npm install

# Local dev server (http://localhost:8080 by default)
npm run serve

# Production build
npm run build

# Local preview of production build (requires a static server)
# e.g., npx serve dist
```

### Experimental Astro site (`source-astro/`)

```bash
cd source-astro
npm install

# Local dev server (http://localhost:4321)
npm run dev

# Production build
npm run build

# Local preview of production build
npm run preview
```

---

## Deployment

Deployment is triggered by pushing to the **`production`** branch. GitHub Actions (`.github/workflows/build-client.yml`) then:

1. Builds `vue/` with `npm ci && npm run build`
2. Pushes the contents of `vue/dist/` to the GitHub Pages repository

```bash
# Merge your changes to production and push
git checkout production
git merge main
git push origin production
```

The site is live at [boisecodecamp.com](https://boisecodecamp.com) within a few minutes of the workflow completing.
