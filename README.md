# Arnav Sharma - Luxury Minimalist Portfolio

An ultra-premium, editorial-style personal portfolio designed for **Arnav Sharma**, B.Tech Computer Science Engineering (Artificial Intelligence) student. 

Built using a **Midnight Blue** (`#0B1D33`) and **Golden Beige** (`#D4B483`) default dark palette, with a togglable **Warm Off-White** (`#F8F7F3`) light palette. The design draws inspiration from modern magazine layouts and companies like Apple, Vercel, and Linear, emphasizing rich typography, massive spacing, and elegant micro-interactions.

---

## 🎨 Design Philosophy & Aesthetics

* **Massive Typography**: Using `Space Grotesk` for headings and `Inter` for highly-readable body text.
* **Asymmetric Composition**: Clean layout with off-center alignment, vertical sidebar labels, and elements extending slightly beyond boundaries.
* **Midnight & Gold Accents**: Tailored theme with a soft gold outline, glowing interactive elements, and monochrome image transitions.
* **Premium Micro-Interactions**:
  * Custom cursor comprising a trailing outer golden ring that expands over buttons/links.
  * Intersection-observed scroll reveals (fade-ups, slide-ins).
  * Numeric counters that animate stats on scroll.
  * An integrated, blurred-backdrop fullscreen image lightbox for viewing credentials and certificates.

---

## 🛠️ Stack & Implementation

* **Frontend Structure**: Semantic HTML5 layout.
* **Style System**: Pure CSS3 variables, flexible flexbox/grid layout systems, and custom keyframes.
* **Logic Systems**: Pure Vanilla JavaScript. Zero external frameworks, heavy runtime libraries, or CSS systems.
* **Icons & Fonts**: Google Fonts, Font Awesome.

---

## 📁 Repository Structure

```
portfolionew/
│
├── index.html              # Main semantic HTML structure
├── style.css               # Clean custom styling & theme tokens
├── script.js               # Clean cursor, scroll, lightbox & toggles logic
│
├── assets/
│   ├── ArnavSharmaUpdatedResume.pdf
│   │
│   └── images/
│       ├── profile/        # Home portrait, Work portrait, Logo
│       ├── projects/       # Featured project screenshots
│       ├── internship experience/  # Internship certificates
│       ├── job simulations/        # Simulated trainings (Forage)
│       ├── nptel certifications/   # National certification credentials
│       └── hackathons,quizes and conpetitions/ # Hackathons, quizzes, and contests
│
└── README.md               # Documentation
```

---

## 🚀 How to Run Locally

Since this is a lightweight, high-performance static website, you can run it directly:

1. **Direct Preview**: Open `index.html` in any web browser.
2. **VS Code Live Server**: Right-click `index.html` and choose **Open with Live Server**.
3. **Local Dev Server**: 
   Using python:
   ```bash
   python -m http.server 8000
   ```
   Or using node:
   ```bash
   npx http-server .
   ```
