# mastershad.github.io

Personal portfolio / business-card site — [mastershad.github.io](https://mastershad.github.io). Built with React, available in English, German, Russian, and Ukrainian.

**[Live site](https://mastershad.github.io/)**

## Features

- Single-page profile: about, skills, experience, education, contact
- Language switcher (EN / DE / RU / UK) — remembers your choice via `localStorage`, defaults to your browser language
- Links to a full, detailed CV (`Lebenslauf.html`, German) for recruiters who want the long version

## Tech stack

- React 19 (functional components + Context API for i18n)
- Create React App / react-scripts
- Plain CSS, no UI framework
- React Testing Library for tests

## Project structure

```
src/
  i18n/
    translations.js      # all copy for en / de / ru / uk
    LanguageContext.js    # language state, browser-language detection, persistence
  components/
    NavBar.jsx, LanguageSwitcher.jsx
    Hero.jsx, About.jsx, Skills.jsx, Experience.jsx, Education.jsx, Contact.jsx
public/
  Lebenslauf.html          # full CV, linked from the hero section
```

## Running locally

```bash
npm install
npm start
```

Opens on [http://localhost:3000](http://localhost:3000).

## Tests

```bash
npm test
```

Covers the default language detection, switching between languages, and that the chosen language persists across reloads.

## Deployment

Deployed to GitHub Pages via the [`gh-pages`](https://www.npmjs.com/package/gh-pages) package:

```bash
npm run deploy
```
