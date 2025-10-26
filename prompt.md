Hello. The "Contact Me" button style is perfect. Do not change it.

I want to add a creative "gloss/shimmer" hover effect to the "Get Resume" button. The button should keep its current gradient background and glow.

The effect: When the user hovers over the button, a white, angled shimmer (like a light reflection) should sweep across it from left to right.

Please implement this using a `::after` pseudo-element.

1.  **Button Itself (`.get-resume-button`):**
    - Must have `position: relative;`
    - Must have `overflow: hidden;` (This is essential to clip the shimmer)

2.  **Pseudo-Element (`.get-resume-button::after`):**
    - `content: '';`
    - `position: absolute;`
    - `top: 0;`
    - `left: -150%;` (Starts off-screen to the left)
    - `width: 75%;`
    - `height: 100%;`
    - `background: linear-gradient(to right, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.4) 50%, rgba(255, 255, 255, 0) 100%);`
    - `transform: skewX(-25deg);` (Gives it the angled look)
    - `transition: left 0.7s ease-in-out;` (The animation)

3.  **Hover State (`.get-resume-button:hover::after`):**
    - `left: 150%;` (Moves it off-screen to the right, completing the sweep)

Please apply this effect precisely.
