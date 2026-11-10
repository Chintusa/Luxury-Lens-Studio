# Luxury-Lens-Studio

[![React](https://img.shields.io/badge/React-19.1-61DAFB?style=flat-square&logo=react&logoColor=black)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-7.3-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-4.1-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![pnpm](https://img.shields.io/badge/pnpm-11-F69220?style=flat-square&logo=pnpm&logoColor=white)](https://pnpm.io/)

A world-class, editorial cinematography and luxury destination wedding photography studio web experience. Designed with a signature unified Noir Obsidian and Champagne Gold aesthetic.

---

## ✨ Features & Architecture

- **Unified Single Color Palette**: Editorial Noir Obsidian (`#080808`), Deep Charcoal, Champagne Gold (`#C8A97E`), and Warm Soft Gold (`#DFC9A8`).
- **100% Verified Visuals**: All broken 404 images replaced with verified high-resolution destination wedding and editorial photography assets.
- **Editorial Navigation**: Floating translucent navigation with gold crest branding, responsive drawer, and quick section anchors.
- **Cinematic Parallax Hero**: Immersive hero backdrop with editorial typography (*Cormorant Garamond* & *Playfair Display*).
- **Featured Stories**: Asymmetric editorial layout with Framer Motion animations.
- **Portfolio & Galleries**: Filterable curated wedding stories spanning Lake Como, Udaipur, Santorini, Paris, and Kyoto.
- **Films & Teasers**: Cinematic video preview showcase with full-screen theater mode.
- **Services & Investment Packages**: Transparent tiered packages for Royal Destination Weddings, Intimate Elopements, and High-Fashion Pre-Weddings.
- **Global Destinations**: Worldwide availability map and travel calendar for international commissions.
- **Bespoke Inquiries**: Interactive commission booking form with date pickers and guest counts.

---

## 📁 Repository Structure

```text
Luxury-Lens-Studio/
├── artifacts/
│   ├── studio/            # Primary React 19 + Vite 7 frontend application
│   ├── api-server/        # Backend API service
│   └── mockup-sandbox/    # Component & preview sandbox
├── lib/                   # Shared types, UI utilities, and schemas
├── scripts/               # Build and validation scripts
├── pnpm-workspace.yaml    # Workspace configuration & dependency policies
└── package.json           # Workspace root
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v20+)
- pnpm (v10+)

### Installation
```bash
# Clone the repository
git clone https://github.com/Chintusa/Luxury-Lens-Studio.git
cd Luxury-Lens-Studio

# Install all workspace dependencies
pnpm install

# Start the Studio development server
cd artifacts/studio
pnpm run dev
```

The studio will be live at `http://localhost:18425/`.

### Production Build
```bash
# Build all workspace packages and run typechecks
pnpm run build
```
Production artifacts are generated in `artifacts/studio/dist/public`.

---

## 📄 License
MIT License. © 2026 Luxury Lens Studio.

