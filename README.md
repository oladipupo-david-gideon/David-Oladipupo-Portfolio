# David Oladipupo - Portfolio

My personal portfolio website, built with plain HTML, CSS, and JavaScript (no framework or build step).

**[View the live site](https://david-personal-portfolio.netlify.app/)**

> Built with AI assistance. I led the design and content decisions, then reviewed and tested the result.

## What's on the site

A single page with these sections: Home (hero), About, Skills, Projects, Certifications, and Contact. It includes links to my GitHub and LinkedIn, and a download link for my resume.

## Design

An arctic theme: a polar night sky with an aurora, falling snow, snow-capped mountains, and a snowflake that draws itself. The palette is deep navy, ice blue, violet, and white.

## Features

* **Letter-by-letter name reveal** in the hero. JavaScript splits the name into letters and CSS animates them into place
* **Animated hero scene** made with CSS and inline SVG: aurora ribbons, drifting mountain layers, mist, and a self-drawing snowflake. Stars and snow are created in JavaScript
* **Auto-hiding navigation bar** that hides when you scroll down and reappears when you scroll up, with a frosted background once you leave the top
* **Rotating role line** in the hero, done with CSS only
* **Scroll-triggered reveal animations** using the Intersection Observer API
* **Glowing card borders** that spin on hover, using CSS `@property`
* **Theme variables:** colors and fonts are defined as CSS custom properties in one `:root` block, so styling changes in one place
* **Responsive layout** that adapts down to phone widths
* **Reduced-motion support:** a `prefers-reduced-motion` rule turns off animations for visitors who ask for it
* **Smooth scrolling** between sections

## Performance

Tested with Google PageSpeed Insights on October 20, 2026:

| | Mobile | Desktop |
|---|---|---|
| Performance | 91 | 99 |
| Accessibility | 100 | 100 |
| Best Practices | 100 | 100 |
| SEO | 100 | 100 |

Scores vary a little from run to run.

## Tech

* HTML5, CSS3, and vanilla JavaScript
* [Syne](https://fonts.google.com/specimen/Syne), [Instrument Serif](https://fonts.google.com/specimen/Instrument+Serif), and [DM Sans](https://fonts.google.com/specimen/DM+Sans) from Google Fonts
* Hosted on Netlify as a static site

## Project files

```
index.html     Page content and structure
style.css      Styling, theme variables, animations, and breakpoints
script.js      Name reveal, stars and snow, and scroll reveals
Oladipupo_David.pdf   Resume (linked from the Resume buttons)
```

## Run locally

No install is needed. Open `index.html` in a browser. If you prefer a local server, run this in the project folder and open `http://localhost:8000`:

```bash
python -m http.server 8000
```

## Known limitations

* On screens 560px wide or narrower, the nav shows only the four section links (the logo and Resume button are hidden to keep it to one row). The Resume button is still in the Contact section.
* The glowing card borders need a recent browser (they use CSS `@property`). In older browsers the cards still work, with a plain border.
* Fonts load from Google Fonts, so they won't appear offline.

## License

MIT. See the `LICENSE` file.
