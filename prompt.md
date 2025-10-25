# Task 2.3 — Modern Developer Hero Implementation (Abu Said Template Adaptation)

## Objective

Recreate the hero section exactly like the **Abu Said** developer portfolio layout — a full-screen dark neon theme with gradient text, developer-focused layout, and animated or portrait-based right side. All old hero code, background blobs, or previous themes must be **completely removed**.

---

## Implementation Details

### 1. Structure

- **Full-screen layout** using `min-h-screen flex items-center justify-between px-10 md:px-20`.
- **Two columns:**

  - **Left (55%)** → Headline, subtitle, CTA buttons, social links.
  - **Right (45%)** → Code block animation _or_ portrait area.

- **Max width:** `max-w-[1600px] mx-auto`.
- Mobile: stack vertically with `flex-col-reverse gap-10`.

---

### 2. Background and Theme

- Full dark base with vibrant lighting effects:

  ```css
  bg-[radial-gradient(circle_at_top_left,#1b1f2a_0%,#0a0b10_100%)]
  ```

- Add a **soft grid overlay** for a professional look:

  ```css
  bg-[url('/assets/grid.svg')] bg-opacity-10 bg-blend-overlay
  ```

- Add glow lighting overlay:

  ```css
  after:content-[''] after:absolute after:inset-0 after:bg-gradient-to-r after:from-[#ff4fa3]/20 after:to-[#3fb5a3]/20 after:mix-blend-screen
  ```

---

### 3. Typography

#### Headline

```jsx
<h1 className="text-6xl md:text-7xl font-extrabold leading-tight text-white">
  Hello,
  <br />
  This is <span className="text-[#ff4fa3]">Sina Amareh</span>,<br />
  I'm a <span className="text-[#3fb5a3]">Software Engineer & System Designer</span>.
</h1>
```

- Font: **Poppins** (headings), **Inter** (body text)
- Optional typing animation for the last line (CSS keyframes or Framer Motion).

#### Subtext

```jsx
<p className="text-gray-400 mt-6 text-lg max-w-[45ch] leading-relaxed">
  I design and build intelligent, scalable systems that merge logic, creativity, and engineering
  precision.
</p>
```

---

### 4. Call-to-Action Buttons

```jsx
<div className="flex gap-6 mt-10">
  <button className="px-8 py-3 rounded-xl text-white font-semibold bg-gradient-to-r from-[#ff4fa3] to-[#3fb5a3] hover:scale-105 shadow-[0_0_20px_#ff4fa366] transition-all duration-300">
    Contact Me
  </button>
  <button className="px-8 py-3 rounded-xl text-[#ff4fa3] border border-[#ff4fa3] hover:bg-[#ff4fa310] hover:scale-105 transition-all duration-300">
    Get Resume
  </button>
</div>
```

---

### 5. Social Icons

Below CTAs, add social icons in pink/cyan tones:

```jsx
<div className="flex gap-5 mt-6 text-2xl text-[#ff4fa3]">
  <FaGithub className="hover:text-[#3fb5a3] cursor-pointer" />
  <FaLinkedin className="hover:text-[#3fb5a3] cursor-pointer" />
  <FaTwitter className="hover:text-[#3fb5a3] cursor-pointer" />
</div>
```

---

### 6. Right Column (Visual Zone)

#### Option A — Code Block (Preferred for Abu Said Style)

```jsx
<div className="w-full md:w-[520px] bg-[#0f111a] rounded-xl border border-[#23263a] p-6 shadow-[0_0_40px_#3fb5a333] font-mono text-sm text-gray-200">
  <pre>
    <code>
      {`const developer = {
  name: 'Sina Amareh',
  focus: ['Backend', 'System Architecture', 'AI Integration'],
  traits: ['Problem Solver', 'Creative Thinker', 'Engineer'],
  hireable: true
}`}
    </code>
  </pre>
</div>
```

Add typing/fade-in animation for realism.

#### Option B — Portrait Variant

```jsx
<Image
  src="/sina.png"
  alt="Sina Amareh"
  width={450}
  height={450}
  className="rounded-full ring-[3px] ring-[#3fb5a3] shadow-[0_0_40px_#ff4fa366] hover:scale-105 transition-transform duration-300"
/>
```

- Include a gentle parallax or tilt effect using Framer Motion.

---

### 7. Navbar Harmony

- Transparent navbar overlaying hero.
- Active link underline gradient: `from-[#ff4fa3] to-[#3fb5a3]`.
- Subtle hover glow on links.

---

### 8. Cleanup

- Remove **all prior Hero components, background blobs, and light themes.**
- Confirm only new Hero section is active in `app/(site)/page.tsx`.
- Run `npm run lint` and ensure **zero warnings**.

---

### 9. Validation

✅ Perfect full-screen symmetry.
✅ Strong visual contrast on dark base.
✅ Buttons, text, and icons glow softly.
✅ Typing/motion smooth at 60 FPS.
✅ Fully responsive across breakpoints.
✅ No code remnants from older hero.

---

### 10. Commit

```bash
git add -A
git commit -m "feat(task-2.3): implemented Abu Said-style developer hero with neon gradient, animated code block, and full-screen layout"
```

---

### 11. Self-Check Instruction for Agent

Before finalizing:

- Visually review the hero layout for symmetry, font spacing, and glow balance.
- If any visual feels off (misaligned buttons, text spacing, or glow intensity), fix automatically before final commit.
- Generate documentation after successful test at: `docs/tasks/2.3_modern_hero_layout.md`.
