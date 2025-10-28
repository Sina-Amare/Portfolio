# Sina Amareh - Backend Developer Portfolio

> "Building systems where clarity meets creativity"

A state-of-the-art portfolio website featuring a unique "Code Compiles Reality" concept where code snippets dynamically generate UI elements in real-time. Built with modern web technologies and designed specifically for showcasing backend development expertise.

## 🎨 Design Concept

This portfolio presents itself as a **live development environment** where code generates the interface in real-time. Every interaction feels like you're building and deploying a system - perfect for a backend developer's portfolio.

### Key Visual Elements
- **Dark Theme**: Base color `#0D1117` with subtle grid pattern
- **Gradient Accents**: Purple (#9333EA) to Cyan (#06B6D4) gradients throughout
- **Glassmorphism**: Frosted glass effects with backdrop blur
- **Terminal Aesthetic**: Code blocks, syntax highlighting, and developer-focused UI
- **3D Background**: Subtle Vanta.js NET effect on hero section
- **Animated Metrics**: Live system status panel with real-time updates

## ✨ Features

### 🏠 Home/Hero Page
- **3D Interactive Background**: Vanta.js NET effect (subtle, performance-optimized)
- **Live System Status Panel**: Animated metrics showing API response time, uptime, and active connections
- **Typewriter Code Effect**: Animated code block that "compiles" on completion
- **Cursor Spotlight**: Subtle gradient that follows mouse movement (desktop only)
- **Social Links**: With API endpoint-style tooltips
- **Responsive Design**: Optimized for all screen sizes

### 👨‍💻 About Page - "Developer Console"
- **Terminal-Style Profile**: CRT monitor scan lines effect on profile image
- **Live Journey Code**: Python class showcasing experience as executable code
- **Animated Tech Stack**: Icons "import" with terminal loading animations
- **Skills Display**: 2 years experience, 1 year employment prominently featured
- **Technologies**: Django, FastAPI, PostgreSQL, Redis, Docker, Python, Git, Nginx

### 💼 Projects Page - "API Documentation"
- **Projects as Endpoints**: Each project presented as an API endpoint
- **HTTP Method Badges**: GET/POST/PUT/DELETE with status codes
- **Flip Card Design**: Click to reveal detailed project information
- **Terminal-Style Filters**: Filter projects by technology
- **cURL Examples**: Command-line examples for each project
- **6 Backend-Focused Projects**:
  1. E-commerce Backend API (Django + PostgreSQL + Redis)
  2. Real-time Analytics API (FastAPI + WebSocket + InfluxDB)
  3. Multi-tenant SaaS Backend (Django + PostgreSQL isolation)
  4. GraphQL API Gateway (FastAPI + Strawberry GraphQL)
  5. CI/CD Pipeline Automation (Docker + GitHub Actions)
  6. Database Performance Optimization (PostgreSQL optimization)

### 🎯 Skills Page - "System Monitor Dashboard"
- **Category Tabs**: Backend, Databases, DevOps, Tools
- **Animated Progress Bars**: Fill on scroll with ASCII-style indicators
- **Code Examples**: Hover previews showing actual code snippets
- **Proficiency Meters**: Styled as CPU/RAM usage bars
- **Experience Tracking**: Years of experience for each skill
- **Live Metrics**: Average skill level and total experience display

### 📬 Contact Page - "Initialize Connection"
- **SSH Connection Simulation**: Terminal-style connection establishment
- **API Endpoints Display**: Available contact methods as REST endpoints
- **Python-Style Form**: Form fields styled as Python class attributes
- **Real-time Validation**: Instant feedback on form submission
- **Success/Error States**: Terminal-style response messages (200 OK, etc.)
- **Social Link Cards**: As API endpoints with hover effects
- **Direct Email**: Prominent email contact display

### 🎯 Navigation & UI Components
- **Command Palette**: Press `Cmd/Ctrl + K` for keyboard-driven navigation
- **Smooth Page Transitions**: Fade effects between routes
- **Sticky Navigation**: With blur effect on scroll
- **Active Page Indicators**: Gradient underline for current page
- **Footer**: System info panel with tech stack badges

## 🛠️ Technology Stack

### Frontend
- **Framework**: Next.js 13 (App Router)
- **Language**: TypeScript
- **Styling**: TailwindCSS
- **Animations**: Framer Motion
- **3D Effects**: Vanta.js, Three.js
- **Icons**: React Icons, Simple Icons

### Development
- **Package Manager**: npm
- **Linting**: ESLint
- **Formatting**: Prettier
- **Version Control**: Git

### Backend Focus (Portfolio Content)
- Python
- Django & Django REST Framework
- FastAPI
- PostgreSQL
- Redis
- Docker
- CI/CD (GitHub Actions)
- Nginx

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/sina-amareh/portfolio.git
cd portfolio

# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

### Development Commands

```bash
# Run dev server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Lint code
npm run lint

# Format code
npm run format
```

## 📁 Project Structure

```
portfolio/
├── app/
│   └── (site)/
│       ├── components/
│       │   ├── Hero.tsx          # Home page hero section
│       │   ├── Navigation.tsx     # Main navigation with command palette
│       │   ├── Footer.tsx         # Footer with system info
│       │   └── SystemStatus.tsx   # Live system metrics panel
│       ├── about/
│       │   └── page.tsx           # About page (Developer Console)
│       ├── projects/
│       │   └── page.tsx           # Projects page (API Documentation)
│       ├── skills/
│       │   └── page.tsx           # Skills page (System Dashboard)
│       ├── contact/
│       │   └── page.tsx           # Contact page (Connection Interface)
│       ├── layout.tsx             # Root layout
│       └── page.tsx               # Home page
├── components/
│   └── ui/
│       ├── GlassCard.tsx          # Reusable glassmorphic card
│       ├── TerminalWindow.tsx     # Terminal-style code blocks
│       ├── SystemMetric.tsx       # Animated metric display
│       ├── SkillBar.tsx           # Animated progress bars
│       ├── CommandPalette.tsx     # Keyboard navigation
│       ├── CursorEffect.tsx       # Custom cursor spotlight
│       └── Tooltip.tsx            # Tooltip component
├── hooks/
│   ├── useScrollAnimation.ts      # Scroll-triggered animations
│   └── useMagneticEffect.ts       # Magnetic button effect
├── styles/
│   ├── globals.css                # Global styles & animations
│   └── animations.css             # Custom animations
└── public/
    └── assets/                    # Static assets
```

## 🎨 Design System

### Color Palette
- **Base**: `#0D1117` (Dark)
- **Purple**: `#9333EA` (Primary accent)
- **Cyan**: `#06B6D4` (Secondary accent)
- **Terminal Green**: `#50fa7b` (Success states)
- **Warning Orange**: `#ffb86c` (Highlights)
- **Error Red**: `#ff5555` (Errors)
- **Comment Gray**: `#6272a4` (Secondary text)

### Typography
- **Headers**: Poppins, JetBrains Mono
- **Body**: Inter
- **Code**: JetBrains Mono

### Animations
- **Code Compilation**: Typewriter effect with completion animation
- **Tech Stack Imports**: Sequential loading with fade-in
- **Skill Bars**: Progressive fill on scroll
- **Card Flips**: 3D rotation on click
- **Hover Effects**: Smooth scale and glow transitions

## ⚡ Performance

- **Lighthouse Score Target**: >90 across all metrics
- **Code Splitting**: Route-based lazy loading
- **Image Optimization**: Next.js Image component
- **Font Loading**: Variable fonts with preload
- **3D Effects**: Lazy-loaded Vanta.js, disabled on mobile
- **Animations**: GPU-accelerated CSS transforms

## ♿ Accessibility

- **WCAG AAA** color contrast where possible
- **Keyboard Navigation**: Full keyboard support with command palette
- **ARIA Labels**: All interactive elements properly labeled
- **Focus Indicators**: High-contrast focus states
- **Reduced Motion**: Respects `prefers-reduced-motion`
- **Screen Reader**: Semantic HTML throughout

## 📱 Responsive Design

- **Mobile First**: Optimized for mobile devices
- **Breakpoints**: 
  - Mobile: < 768px (simplified animations, no 3D)
  - Tablet: 768px - 1024px (optimized features)
  - Desktop: > 1024px (full experience)
- **Touch Optimized**: Large touch targets on mobile

## 🎁 Easter Eggs

1. **Command Palette**: Press `Cmd/Ctrl + K` for quick navigation
2. **Konami Code**: Type the classic Konami code for a surprise
3. **Console Commands**: Type `sudo make me proud` in browser console
4. **Triple-Click Logo**: Shows fake commit history
5. **Logo Hover**: Hover 5 times for glitch effect

## 📄 License

This project is open source and available under the MIT License.

## 👤 Author

**Sina Amareh**
- Backend Architect & System Designer
- 2 years of experience | 1 year employment
- Location: Remote (UTC+3:30)

### Connect
- GitHub: [@sina-amareh](https://github.com/sina-amareh)
- LinkedIn: [/in/sina-amareh](https://linkedin.com/in/sina-amareh)
- Twitter: [@sina_amareh](https://twitter.com/sina_amareh)
- Email: hello@sina-amareh.dev

## 🙏 Acknowledgments

- Design inspiration from Awwwards, Dribbble, and modern developer portfolios
- Vanta.js for 3D background effects
- Framer Motion for smooth animations
- The Next.js and React communities

---

Built with ❤️ using Next.js, TypeScript, and TailwindCSS
