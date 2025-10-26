خواهش می‌کنم. این مشکل رایجی است، گاهی ایجنت روی گرادیان‌های نوری (blobs) تمرکز می‌کند و لایه پس‌زمینه اصلی را فراموش می‌کند.

از این پرامپت انگلیسی استفاده کنید. این پرامپت بسیار مستقیم است و به ایجنت می‌گوید که استایل فعلی (هاله‌های نوری) عالی است و فقط باید پس‌زمینه اصلی و گرید را به آن اضافه کند.

پرامپت انگلیسی فوری (Forceful Prompt)
Hello. The current style with the gradient glows (the purple and teal blobs) is perfect. Please keep that exactly as it is.

My request is to ADD a base background underneath those glows. Please focus only on this change:

Main Background Color: Set the body or the main wrapper div background color to a solid dark color, like #0D1117 or black.

Grid Pattern Overlay: Add a subtle, repeating grid pattern on top of that dark color. The grid lines must be very faint (e.g., rgba(255, 255, 255, 0.05)).

Here is a specific CSS example of the grid pattern I want. Please apply this to the body or the main background container:

CSS

body {
/_ 1. The dark base color _/
background-color: #0D1117;

/_ 2. The subtle grid pattern overlay _/
background-image:
linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px),
linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
background-size: 40px 40px; /_ Adjust grid size if needed _/

/_ Ensure this doesn't remove the existing glows _/
}
Please force the application of this solid dark background AND the grid pattern, while keeping the existing gradient blobs.
