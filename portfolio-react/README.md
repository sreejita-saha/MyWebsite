# Sreejita's Portfolio — React + ReactBits

## Setup (do this once)

```bash
# 1. Install dependencies
npm install

# 2. Install ReactBits components (each command drops a file into src/components/)
npx jsrepo add github/DavidHDev/react-bits/src/content/Animations/SplashCursor
npx jsrepo add github/DavidHDev/react-bits/src/content/Animations/GradualBlur
npx jsrepo add github/DavidHDev/react-bits/src/content/Animations/StarBorder
npx jsrepo add github/DavidHDev/react-bits/src/content/Components/GlassSurface
npx jsrepo add github/DavidHDev/react-bits/src/content/Components/StaggeredMenu

# 3. Run the dev server
npm run dev
```

Open http://localhost:5173 in your browser.

## Activating the ReactBits components

After running the jsrepo commands above, each component is sitting in `src/components/`.
Find the comment in each file that says "Stand-in until installed" and:

1. **Delete** the stand-in function (the few lines above it)
2. **Uncomment** the import line at the top of the file

### SplashCursor (App.jsx)
- Uncomment: `import SplashCursor from './components/SplashCursor.jsx'`
- It's already being used in the JSX — nothing else to change.

### GradualBlur + StarBorder (Hero.jsx)
- Uncomment the two import lines at the top
- Delete the two stand-in functions below them

### GlassSurface (Projects.jsx)
- Uncomment the import line at the top
- Delete the stand-in function

### StarBorder (Contact.jsx)
- Uncomment the import line
- Delete the stand-in function

### StaggeredMenu (Nav.jsx)
- Uncomment the import
- Replace the `<ul>` with `<StaggeredMenu links={links} />`

## Deploy to GitHub Pages (free)

```bash
npm run build
```
This creates a `dist/` folder. Upload its contents to your GitHub Pages repo.

## Project structure

```
src/
├── App.jsx                  ← root, wires everything together
├── components/
│   ├── Nav.jsx              ← top nav with StaggeredMenu
│   ├── Nav.module.css
│   └── [ReactBits files]    ← added by jsrepo CLI
└── sections/
    ├── Hero.jsx             ← GradualBlur + StarBorder
    ├── Projects.jsx         ← GlassSurface cards
    ├── Experience.jsx
    ├── About.jsx
    └── Contact.jsx          ← StarBorder CTA
```
