# CIT331 AI & Tech Society Website

**Course:**  Web Technologies (Assignment 1)  
**Author:** Fasiha  
**Roll Number:** [0042]  
**Live Site:** [https://sheikhfasiha32-beep.github.io/assignment1-0042/](https://sheikhfasiha32-beep.github.io/assignment1-0042/)  

## Overview
The ** AI & Tech Society** website is a multi-page, responsive web application designed for a university student club. It serves to introduce the society, display upcoming tech events, and allow students to register online. The site is built entirely with hand-crafted semantic HTML5, custom CSS3, and plain JavaScript, adhering strictly to core web standards without external libraries or frameworks.

## Project Structure & Pages
- **`index.html`**: The home page featuring society introduction, a featured event card, and committee contacts.
- **`events.html`**: A list of four upcoming club events structured with semantic `<article>` tags and a responsive CSS Grid layout.
- **`register.html`**: An interactive event registration page containing an accessible HTML5 form, automated local validation, and client-side persistence via `localStorage`.

## Key Features
1. **Semantic HTML5**: Fully validated HTML structure using `<header>`, `<nav>`, `<main>`, `<article>`, `<section>`, `<aside>`, and `<footer>`.
2. **CSS3 Styling & Layout**: Styled using external CSS (`css/style.css`) incorporating CSS Variables, Flexbox navigation, CSS Grid card layouts, and responsive mobile-first `@media` queries.
3. **Client-Side Persistence**: JavaScript (`js/app.js`) intercepts form submissions, stores registrations as JSON objects in `localStorage`, and dynamically renders them into a structured table.

## How to Run Locally
1. Clone this repository:
   ```bash
   git clone https://github.com/sheikhfasiha32-beep/assignment1-0042.git