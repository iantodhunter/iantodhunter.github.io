# Portfolio Website

Simple portfolio site hosted on **GitHub Pages**.  
No frameworks — just plain **HTML, CSS, and JavaScript**.  

---

## Project Structure

/ (root)
├── index.html # homepage with interactive tiles
├── professional-background.html
├── facilitation.html
├── user-experience.html
├── prototyping.html
├── personal-background.html
├── global.css # global typography, colors, layout
├── global.js # tile hover/click animations
├── /assets # images, videos, svg
│ └── tiles.svg # homepage tile layout
└── README.md # this file

---

## Fonts

Loaded from Google Fonts:

- **Syne** → headings, titles  
- **Hedvig Letters Serif** → body content, captions  

---

## Typography

- **Display 1**  
  - Font: Syne, weight 200  
  - Size: ~96px  
  - Letter spacing: `0.5em`  

- **Display 2**  
  - Font: Syne  
  - Size: 48px  
  - Letter spacing: `-0.04em`  

- **H2**  
  - Font: Syne  
  - Size: 16px  

- **Body**  
  - Font: Hedvig Letters Serif  
  - Size: 14px  

- **Caption**  
  - Font: Hedvig Letters Serif  
  - Size: 10px  

---

## Colors

- **Primary gray (text)** → `#525252`  
- **Intermediate gray** → `#828282`  
- **Light gray** → `#E0E0E0`  
- **Background gray** → `#FFFDFF`  
- **Dark blue** → `#0F4471`  
- **Bright blue (optional)** → `#2335EB`  
- **Accent red (rare use only)** → `#FC3C3C`  

Rules:  
- Red only when explicitly specified.  
- Do not add new colors unless asked.  

---

## Layout

- **Desktop-first** design.  
- Minimum **120px margins** around main content area.  
- Generous spacing and padding.  
- Homepage tiles are **centered** within the viewport.  

---

## Homepage (`index.html`)

- Inline `tiles.svg` is used to define 5 irregular tile shapes.  
- Each tile links to one of the 5 subpages.  
- Hover:  
  - Show masked image behind the tile.  
  - Tile expands outward (morph effect).  
- Click:  
  - Tile expands to fill rectangle, then navigates to the linked page.  

---

## Subpages

- Pages:  
  - `professional-background.html`  
  - `facilitation.html`  
  - `user-experience.html`  
  - `prototyping.html`  
  - `personal-background.html`  

- Shared layout:  
  - Header (Display 2)  
  - Hero image  
  - Body text (serif, 14px)  
  - Secondary image or caption (optional)  
  - Back/Home link  

---

## Development Rules

- Stick to **plain HTML, CSS, and JS**.  
- Use **CSS variables** for colors, spacing, and fonts.  
- Keep file hierarchy flat and simple.  
- All assets go into `/assets`.  
- Do not use additional frameworks or libraries unless explicitly noted.  

---