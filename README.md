# David Oladipupo - Portfolio

My personal portfolio website, built with plain HTML, CSS, and JavaScript (no framework or build step).

**[View the live site](https://david-personal-portfolio.netlify.app/)**

> Built with AI assistance. I led the design and content decisions, then reviewed and tested the result.

## What's on the site

A single page with five sections: About, Projects, Certifications, Skills, and Contact. It includes links to my GitHub and LinkedIn, and a download link for my resume.

## Features

* **Typing animation** in the hero section, written in JavaScript
* **Scroll-triggered reveal animations** using the Intersection Observer API, with a short stagger between elements
* **Auto-hiding navigation bar** that hides when you scroll down and reappears when you scroll up
* **Theme variables:** colors, fonts, and the transition speed are defined as 10 CSS custom properties in one `:root` block, so styling changes in one place
* **Responsive layout** with breakpoints at 1080px, 768px, and 480px
* **Reduced-motion support:** a `prefers-reduced-motion` rule turns off animations for visitors who ask for it
* **Smooth scrolling** between sections, and an animated background grid made with CSS

## Performance

Tested with Google PageSpeed Insights on October 4, 2026:

| | Mobile | Desktop |
|---|---|---|
| Performance | 93 | 99 |
| Accessibility | 100 | 100 |
| Best Practices | 100 | 100 |
| SEO | 100 | 100 |

Scores vary a little from run to run.

## Tech

* HTML5, CSS3, and vanilla JavaScript
* [Inter](https://fonts.google.com/specimen/Inter) and [Fira Code](https://fonts.google.com/specimen/Fira+Code) from Google Fonts
* Skill icons from [Devicon](https://devicon.dev/), loaded from a CDN
* Hosted on Netlify as a static site

## Project files

```
index.html     Page content and structure
style.css      Styling, theme variables, animations, and breakpoints
script.js      Typing animation, scroll reveals, and the hiding navbar
Oladipupo_David.pdf   Resume (linked from the Download Resume button)
```

## Run locally

No install is needed. Open `index.html` in a browser. If you prefer a local server, run this in the project folder and open `http://localhost:8000`:

```bash
python -m http.server 8000
```

## Known limitations

* On screens 768px wide or narrower, the navigation links are hidden and there is no menu button, so phone visitors scroll instead of using the nav.
* Skill icons load from an external CDN, so they won't appear offline.

## License

MIT. See the `LICENSE` file.
