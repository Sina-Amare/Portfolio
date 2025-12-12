# Sina Amareh — Software Developer Portfolio

> Engineering intelligent systems where clarity meets imagination

A modern, terminal-themed portfolio website showcasing backend development and AI/LLM engineering expertise. Built with Next.js 13 and featuring interactive terminal components, smooth animations, and a developer-focused aesthetic.

[![Live Demo](https://img.shields.io/badge/Live-Portfolio-00d4ff?style=for-the-badge)](https://portfolio-fawn-chi-dw3293ov37.vercel.app/)
[![Next.js](https://img.shields.io/badge/Next.js-13.5-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)](https://typescriptlang.org/)

---

## ✨ Features

- **Terminal-Themed UI** — Interactive terminals with secret commands (`neofetch`, `npm run hire`, `help`)
- **Smooth Animations** — GSAP scroll triggers + Framer Motion transitions
- **Working Contact Form** — Telegram Bot integration for instant notifications
- **Git Graph Background** — Animated career timeline visualization
- **Command Palette** — Press `Cmd/Ctrl + K` for quick navigation
- **Mobile Optimized** — Responsive design with performance-tuned animations
- **Accessibility** — Keyboard navigation, ARIA labels, `prefers-reduced-motion` support

---

## 🛠️ Tech Stack

| Category       | Technologies            |
| -------------- | ----------------------- |
| **Framework**  | Next.js 13 (App Router) |
| **Language**   | TypeScript              |
| **Styling**    | TailwindCSS             |
| **Animations** | Framer Motion, GSAP     |
| **3D Effects** | Custom Card3D component |
| **Icons**      | React Icons             |
| **Deployment** | Vercel                  |

---

## 🚀 Quick Start

```bash
# Clone
git clone https://github.com/Sina-Amare/Portfolio.git
cd Portfolio

# Install
npm install

# Run dev server
npm run dev

# Build for production
npm run build
```

### Environment Variables

Create `.env.local` for the contact form:

```env
TELEGRAM_BOT_TOKEN=your_bot_token
TELEGRAM_CHAT_ID=your_chat_id
```

---

## 📁 Project Structure

```
├── app/
│   ├── (site)/
│   │   ├── components/
│   │   │   ├── Hero.tsx           # Landing section
│   │   │   ├── Navigation.tsx     # Navbar + mobile menu
│   │   │   ├── Footer.tsx         # Site footer
│   │   │   └── sections/          # Page sections
│   │   ├── layout.tsx             # Root layout
│   │   └── page.tsx               # Home page
│   └── api/
│       └── contact/               # Telegram contact API
├── components/
│   ├── ui/                        # Reusable UI components
│   ├── effects/                   # Visual effects (cursor, background)
│   └── 3d/                        # 3D card effects
├── styles/
│   └── globals.css                # Global styles + animations
└── public/
    └── assets/                    # Static assets
```

---

## 🎨 Design System

| Element        | Value                                         |
| -------------- | --------------------------------------------- |
| **Background** | `#0D1117`                                     |
| **Primary**    | Purple `#9333EA` → Cyan `#06B6D4` gradient    |
| **Success**    | `#50fa7b`                                     |
| **Error**      | `#ff5555`                                     |
| **Fonts**      | Poppins (headings), Inter (body), Mono (code) |

---

## 📱 Sections

| Section        | Description                                             |
| -------------- | ------------------------------------------------------- |
| **Hero**       | Animated greeting, social links, CTA buttons            |
| **About**      | Profile image, interactive terminal with `cat about.md` |
| **Projects**   | Showcase cards with live demos (placeholder data)       |
| **Skills**     | Category tabs with skill cards + experience terminal    |
| **Experience** | Timeline with career/education milestones               |
| **Contact**    | Working form + social links                             |

---

## 🎁 Easter Eggs

- `help` — List available commands

---

## 👤 Author

**Sina Amareh**  
Software Developer & AI Engineer

- 🌐 [Portfolio](https://portfolio-fawn-chi-dw3293ov37.vercel.app/)
- 💼 [LinkedIn](https://www.linkedin.com/in/sina-amareh-909987286/)
- 🐙 [GitHub](https://github.com/Sina-Amare)
- ✈️ [Telegram](https://t.me/sinaam_00)

---

## 📄 License

MIT © Sina Amareh

---

Built with ❤️ using Next.js, TypeScript & TailwindCSS
