# HNG Stage 1a: Testable Profile Card

A fully functional, accessible, and responsive Profile Card component built for HNG Stage 1a. This project demonstrates clean, minimal, testable, and production-grade implementation of web fundamentals.

## Live Demo

Simply clone this repository and open `profile-card/index.html` in your web browser.

## Features

- **Semantic HTML Only**: Clean document structure with correct landmarks (`<article>`, `<header>`, `<nav>`, `<section>`, `<figure>`) without "div soup".
- **Responsive Layout**: Designed with a mobile-first approach. Uses CSS Flexbox to gracefully adjust to Tablet (768px) and Desktop (1024px) screen sizes.
- **Dynamic Time Ticker**: Vanilla JavaScript implementation using `Date.now()` that accurately updates time in milliseconds (interval of 1000ms), and adheres to accessibility standards using `aria-live="polite"`.
- **Interactive Avatar Upload**: Built-in support for users to change their profile avatar on the fly. Utilizes `input[type="file"]` generating a mock `URL.createObjectURL` bloblink without relying on server backend storage.
- **Strictly Testable Attributes**: Built firmly alongside acceptance criteria utilizing exact `data-testid` query selectors for seamless integration testing and DOM validation.
- **Deep Accessibility (A11Y)**: Meets WCAG text contrast logic, guarantees all active elements are efficiently tab-navigable (`:focus-visible` styling is custom configured), and includes appropriate `alt` screen reader tags.
- **Dark Mode Compatibility**: Employs `@media (prefers-color-scheme: dark)` standardizing the UI with the OS system choice.

## Technology Stack

- **HTML5**
- **CSS3** (Custom Properties, Flexbox, Media Queries)
- **Vanilla JavaScript** (ES6+)
- _Zero dependencies, zero frameworks._

## Project Structure

```text
hng-stage-1-FE/
└── profile-card/
    ├── index.html   # Main Semantic HTML Layout
    ├── styles.css   # Responsive layout rules & aesthetic system design
    └── script.js    # Time logic handler and ObjectURL avatar uploads
```

## Testing Checklist

Automated tests will query the DOM successfully for these `data-testid` attributes:

- `[data-testid="test-profile-card"]`
- `[data-testid="test-user-avatar"]`
- `[data-testid="test-user-name"]`
- `[data-testid="test-user-bio"]`
- `[data-testid="test-user-time"]`
- `[data-testid="test-user-social-links"]`
- `[data-testid="test-user-social-twitter"]`
- `[data-testid="test-user-hobbies"]`
- `[data-testid="test-user-dislikes"]`

## Author

Developed for HNG Tech Stage 1 Frontend task.
