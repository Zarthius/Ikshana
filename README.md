# Project Ikshana — Saadhak Foundation

Polished static website for **Project Ikshana**, Saadhak Foundation’s mental-health and child-safety initiative.

**Stack:** Vite + React + TypeScript + MUI (Material UI)

## Quick start

```bash
cd /workspace/ikshana-site
npm install
npm run dev
```

Open the URL Vite prints (usually `http://localhost:5173`).

## Production build

```bash
npm run build    # outputs to dist/
npm run preview  # serve the static build locally
```

## Brand colors (from `/workspace/ikshana-assets/brand-notes.md`)

| Role | Hex |
|------|-----|
| Primary (lotus magenta-pink) | `#E82464` |
| Secondary (golden yellow) | `#FFD416` |
| Accent coral | `#DE866A` |
| Accent hot pink | `#E30653` |
| Soft blush bg | `#EAE1E6` |
| Cream | `#FBF2D3` |
| Text | `#39272F` |
| Dark navy (hero/footer) | `#0F233B` |

Typography: **Poppins** (with Montserrat as fallback).

## Images wired (`public/images/`)

| File | Use |
|------|-----|
| `logo.jpg` (from fb-profile-logo) | Navbar, hero badge, footer, team accent |
| `cover.jpg` | Hero backdrop |
| `pocso-1.jpg` … `pocso-4.jpg` | Gallery + POCSO program card (`pocso-2`) |
| `human-diary.jpg` | Human Diary program card (small source) |
| `certificate.jpg` (fb-certificate-post) | Gallery moment |
| `anniversary.jpg` | Gallery accent (small) |
| `logo-small.jpg`, `fb-photo-1.jpg` | Available extras (not primary UI) |

## Site sections

Hero · About · Programs (Human Diary + POCSO) · Moments gallery · Team · Contact · Footer

## Notes

- Fully static — no backend.
- Quotes/captions drawn from Saadhak Foundation public posts (see brand-notes.md).
- Not affiliated with unrelated “Ikshana Foundation” organisations.
