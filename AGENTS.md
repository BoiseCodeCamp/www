# Boise Code Camp Website - Project Context

## Project Overview
This project is the primary website for [Boise Code Camp](https://boisecodecamp.com), an annual community-driven technology conference. It's a single-page application (SPA) built with Vue 3, using Vite for development and building.

### Key Technologies
- **Frontend Framework:** Vue 3 (Composition API)
- **Build Tool:** Vite
- **Styling:** Bootstrap 5, Sass, Material Design Icons (`@mdi/font`)
- **Data Source:** Sessionize (speaker and session data)
- **Infrastructure:** Pulumi (Azure Native provider)
- **Deployment:** GitHub Pages (via the `boisecodecamp.github.io` submodule/directory)

---

## Directory Structure
- `source/`: The main Vue.js application.
  - `src/`: Application source code (components, pages, services, etc.).
  - `public/`: Static assets and standard web files (robots.txt, favicon, etc.).
  - `package.json`: Frontend dependencies and scripts.
- `inf/`: Infrastructure as Code (IaC) using Pulumi for Azure hosting.
- `boisecodecamp.github.io/`: The target directory for built files, managed as a separate repository for GitHub Pages hosting.
- `.github/workflows/`: CI/CD workflows for building and deploying the site.

---

## Building and Running

### Frontend (source/ directory)
- **Install Dependencies:** `npm install`
- **Development Server:** `npm run serve` (runs at `http://localhost:8080` by default)
- **Build for Production:** `npm run build` (outputs to `source/dist`)
- **Linting:** `npm run lint`

### Infrastructure (inf/ directory)
- **Install Dependencies:** `npm install`
- **Deploy Infrastructure:** `pulumi up` (requires Pulumi CLI and appropriate Azure credentials)

---

## Development Conventions

### Coding Style
- **JavaScript Standard Style:** The project follows standard JS conventions, enforced by ESLint.
- **Vue 3 Composition API:** Preferred over the Options API for new components.
- **Naming:** Follows PascalCase for components and camelCase for methods/variables.

### Styling
- **Bootstrap 5:** Primary layout and utility framework.
- **Custom SCSS:** Located in `source/src/assets/scss/`.
- **Material Design Icons:** Use the `mdi mdi-*` classes for icons.

### Data Management
- **AppState:** Centralized state management using a simple reactive object in `source/src/AppState.js`.
- **Sessionize:** All session and speaker information is fetched from Sessionize. Keys are stored in `AppState.js`.

### Deployment Flow
The typical workflow involves building the application from the `source/` directory and then moving or symlinking the output to the `boisecodecamp.github.io/` directory before pushing to GitHub.
