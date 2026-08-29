---
name: PixelCraft Studio
description: Neo-brutalist web agency landing page
colors:
  accent: "#e85d26"
  accent-alt: "#c4f73a"
  accent-bg: "rgba(232, 93, 38, 0.08)"
  neutral-bg: "#f7f5f3"
  neutral-bg-alt: "#edeae6"
  neutral-card: "#ffffff"
  neutral-text: "#2c2c2c"
  neutral-heading: "#0a0a0a"
  neutral-muted: "#6b6b6b"
  neutral-border: "#0a0a0a"
  neutral-border-light: "#d4d0cb"
  dark-accent: "#f06e3d"
  dark-accent-alt: "#b8f02a"
  dark-bg: "#0d0d0d"
  dark-bg-alt: "#171717"
  dark-card: "#1c1c1c"
  dark-text: "#a3a3a3"
  dark-heading: "#f5f5f5"
  dark-muted: "#737373"
  dark-border: "#2a2a2a"
  dark-border-light: "#222222"
  code-string: "#06d6a0"
  code-number: "#fbbf24"
  code-boolean: "#ef476f"
  code-red: "#ef4444"
  code-yellow: "#fbbf24"
  code-green: "#22c55e"
typography:
  display:
    fontFamily: "'Bricolage Grotesque', system-ui, sans-serif"
    fontSize: "clamp(3.5rem, 10vw, 7rem)"
    fontWeight: 800
    lineHeight: 0.9
    letterSpacing: "-0.04em"
  heading:
    fontFamily: "'Bricolage Grotesque', system-ui, sans-serif"
    fontSize: "clamp(2rem, 4vw, 3.5rem)"
    fontWeight: 800
    lineHeight: 1.1
    letterSpacing: "-0.03em"
  body:
    fontFamily: "'IBM Plex Sans', system-ui, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.6
  mono:
    fontFamily: "'JetBrains Mono', monospace"
    fontSize: "0.875em"
    fontWeight: 400
    lineHeight: 1.7
rounded:
  sm: "4px"
  pill: "100px"
spacing:
  section: "6rem 1.5rem"
  section-sm: "4rem 1.25rem"
  container: "1200px"
  border-thick: "3px"
  border: "2px"
  border-thin: "1px"
components:
  button-primary:
    backgroundColor: "{colors.neutral-heading}"
    textColor: "{colors.neutral-bg}"
    rounded: "{rounded.sm}"
    padding: "0.875rem 1.75rem"
    size: "font-size 1rem, font-weight 600"
  button-primary-hover:
    backgroundColor: "{colors.accent}"
    textColor: "#fff"
    rounded: "{rounded.sm}"
  button-secondary:
    backgroundColor: "{colors.neutral-card}"
    textColor: "{colors.neutral-heading}"
    rounded: "{rounded.sm}"
    padding: "0.875rem 1.75rem"
  button-secondary-hover:
    backgroundColor: "{colors.accent-alt}"
    textColor: "{colors.neutral-heading}"
  card-service:
    backgroundColor: "{colors.neutral-card}"
    textColor: "{colors.neutral-text}"
    rounded: "{rounded.sm}"
    padding: "2.5rem 2rem"
  card-project:
    backgroundColor: "{colors.neutral-card}"
    textColor: "{colors.neutral-text}"
    rounded: "{rounded.sm}"
  nav-cta:
    backgroundColor: "{colors.neutral-heading}"
    textColor: "{colors.neutral-bg}"
    rounded: "{rounded.sm}"
    padding: "0.625rem 1.25rem"
  tag:
    backgroundColor: "{colors.neutral-bg}"
    textColor: "{colors.neutral-muted}"
    rounded: "{rounded.pill}"
    padding: "0.25rem 0.75rem"
  badge:
    backgroundColor: "{colors.neutral-card}"
    textColor: "{colors.accent}"
    rounded: "{rounded.pill}"
    padding: "0.5rem 1.25rem"
---

# Design System: PixelCraft Studio

## Overview

**Creative North Star: "The Blueprint Workshop"**

PixelCraft Studio embraces a neo-brutalist design language inspired by raw architectural blueprints and maker-culture aesthetics. The system rejects soft shadows and subtle gradients in favor of hard edges, bold borders, and solid offset shadows that evoke the physicality of drafting — each element feels stamped, cut, and assembled rather than rendered.

The visual identity is built on a warm paper-and-ink foundation with a burnt orange primary accent and a shocking lime green secondary accent. Typography pairs a bold, geometric grotesque for headlines with a humanist sans-serif for body text, creating tension between the architectural and the approachable.

Every interactive element responds with a tactile "press-down" motion: the shadow collapses and the element translates diagonally, as if a physical block is being pushed into place. Grid lines, crosshairs, corner brackets, and repeating patterns reinforce the blueprint metaphor throughout.

**Key Characteristics:**
- Solid 2–3px borders on every surface (no soft or invisible edges)
- Neo-brutalist offset shadows in border color, never blurred
- Warm paper background with high-contrast ink-like text
- Burnt orange primary accent, lime green secondary accent
- Bold geometric headings (Bricolage Grotesque) meeting humanist body text (IBM Plex Sans)
- Monospace accents for numbers and data
- Blueprint-inspired decorative elements: grid patterns, corner brackets, crosshairs
- Tactile hover interactions: shadow collapse + diagonal translate

## Colors

The palette is anchored in warm paper tones with stark near-black ink and two high-energy accent colors. Light and dark modes maintain the same visual language while inverting the light/dark relationship.

### Primary

- **Burnt Orange** (`#e85d26`, dark mode `#f06e3d`): The single accent color used sparingly — on CTAs (via hover/active states), section label underlines, icon backgrounds, code syntax highlighting, and accent borders. The One Accent Rule: orange appears on ≤15% of any given screen; its energy comes from restraint.

### Secondary

- **Lime Green** (`#c4f73a`, dark mode `#b8f02a`): A bold secondary accent used on status badges (the "Accepting Q4 Projects" badge), process step icon backgrounds, code function syntax, stat cards on hover, and as the CTA section background. Functions as the "highlighter" color — attention-grabbing but clearly subordinate.

### Neutral

- **Ink** (`#0a0a0a`, dark mode `#2a2a2a`): The border color. Used for every stroke, outline, and shadow definition. In light mode it's a near-black; in dark mode it becomes a medium-dark gray that still reads as "ink on paper." The Universal Border Rule: every surface has a visible border; no floating elements exist.
- **Paper** (`#f7f5f3`): The page background in light mode. A warm off-white that grounds the system in physical materiality.
- **Shadow Paper** (`#edeae6`): A slightly deeper warm tone used as the background for alternating sections (Services, Portfolio) and as hover states on cards.
- **Card White** (`#ffffff`): The surface for cards, the code block, and badges — slightly brighter than the page background to create separation without shadows.
- **Text** (`#2c2c2c`, dark mode `#a3a3a3`): Body text color. Darker than heading text for a deliberate top-down hierarchy.
- **Heading** (`#0a0a0a`, dark mode `#f5f5f5`): The darkest element on the page. Used for headlines, the brand name, and primary button text.
- **Muted** (`#6b6b6b`, dark mode `#737373`): Secondary text — subtitles, descriptions, labels. Always paired with accent or heading for emphasis.
- **Border Light** (`#d4d0cb`, dark mode `#222222`): Subtle grid lines and decorative elements. Visible but deferential.

### Code Syntax Colors

- **String** (`#06d6a0`): Green — used in the code block for string literals
- **Number** (`#fbbf24`): Amber — numeric values
- **Boolean** (`#ef476f`): Pink-red — boolean values
- **Window dots** (`#ef4444`, `#fbbf24`, `#22c55e`): Red/yellow/green — standard traffic-light window controls

### Named Rules

**The One Accent Rule.** Burnt orange is the primary accent and should appear on ≤15% of any given screen. Its rarity is the point. Lime green is the secondary and appears even less. When both compete for attention, orange wins.

**The Universal Border Rule.** Every surface has a visible border. No element floats without being outlined; depth comes from offset shadows and color contrast, not from the absence of edges.

## Typography

**Display Font:** Bricolage Grotesque (with `system-ui, sans-serif` fallback)
**Body Font:** IBM Plex Sans (with `system-ui, sans-serif` fallback)
**Label/Mono Font:** JetBrains Mono (with `monospace` fallback)

**Character:** The pairing is deliberately asymmetrical. Bricolage Grotesque is a bold, geometric grotesque with condensed proportions and extreme weights — it reads like a stencil or letterpress stamp. IBM Plex Sans is a humanist sans-serif with typewriter DNA that softens the geometric harshness. JetBrains Mono appears only on numbers, code snippets, and process step markers, lending technical authority.

### Hierarchy

- **Display** (800, `clamp(3.5rem, 10vw, 7rem)`, 0.9): The brand name "PIXELCRAFT" in the hero. Uppercase, tight tracking. Used for single-word impact only.
- **Headline** (800, `clamp(2rem, 4vw, 3.5rem)`, 1.1, -0.03em): Section titles and the CTA heading. Bold, condensed, commanding.
- **Section Title** (800, `clamp(2rem, 4vw, 3rem)`, 1.1, -0.03em): Slightly narrower clamp than headline; used for Services, About, Portfolio, Testimonials section headers.
- **Subtitle/Lead** (400, `1.125rem`, 1.7): Hero description text. Paired with a left accent border for visual anchor.
- **Body** (400, `16px`, 1.6): Default body text. Comfortable reading line-height.
- **Small Body** (500, `0.938rem`, 1.65): Card descriptions, testimonial text.
- **Caption** (600–700, `0.75rem–0.813rem`, 1.6): Tags, stat labels, navigation links.
- **Label** (700, `0.813rem`, uppercase, 0.1em letterSpacing): Section labels ("SERVICES", "WORK"), nav links. Always uppercase with wide tracking.
- **Mono** (500, `0.625rem–0.875rem`): Process step numbers, code snippets. Monospace only for data and code.

## Layout

The page follows a full-width section model with a centered content container. Each full-width section (Hero, Services, About, Portfolio, Testimonials, CTA, Footer) spans the full viewport width, while content is constrained to a 1200px max-width container with 1.5rem horizontal padding (1.25rem on mobile).

Sections alternate between paper background (`--bg`) and shadow paper (`--bg-alt`) to create visual rhythm. Some sections carry a 4px top accent bar (Services, Portfolio) or bold top/bottom border framing (CTA) as structural markers.

Grid-based card layouts use `gap: 0` with visible 3px borders between cells — cards touch each other and are separated only by their shared borders, creating a unified block with internal divisions.

Breakpoints: `768px` (mobile layout changes), `900px` (card grid collapses from 3-column to 1-column).

## Elevation & Depth

No blur shadows. Depth is communicated entirely through solid offset shadows in border color and tonal layering.

### Shadow Vocabulary

- **Solid Offset (Small)** (`3px 3px 0px 0px var(--border)`): Card-level elevation. Used on stat cards, tech pills, process icons.
- **Solid Offset (Default)** (`4px 4px 0px 0px var(--border)`): Primary elevation. Used on buttons, service cards, the code block's outer frame.
- **Solid Offset (Large)** (`6px 6px 0px 0px var(--border)`): Hero elevation. Used on the code block and composition blocks — the most elevated elements on the page.
- **Inverse Shadow**: On hover, all elements collapse their shadow to `2px 2px 0px 0px` and translate by `2px, 2px`. On active/click, shadow collapses to `0px` and translate becomes `4px, 4px`. This creates the "press-down into the page" tactile metaphor.
- **Bottom Bar Shadow** (`0 -4px 0px 0px var(--border)`): The mobile bottom app bar uses an upward-facing solid shadow to separate from page content.

**The Flat-By-Default Rule.** All elements sit flush at rest. Shadows only appear as decorative framing; they shrink on hover and vanish on active, as if the element is being pressed flat against the surface.

## Shapes

The form language is aggressively geometric. Corner radius is minimal: 4px everywhere, or 100px for pill-shaped badges and tags. There are no soft curves or organic shapes.

- **Cards**: 4px radius, 3px solid border, solid offset shadow. Touch each other with no gap — the shared border is the separator.
- **Buttons**: 4px radius. Primary buttons inherit the heading color (near-black) with offset shadow; secondary buttons use white card background with border.
- **Badges**: Pill-shaped (100px radius). Service badge is card-colored with accent text; status badge is lime green with heading text.
- **Tags**: Pill-shaped, card-colored background with border.
- **Icons**: Square with 4px radius, or full square (0px radius) in some contexts like the bottom bar CTA.
- **Avatars**: The only circular element — 50% border-radius on testimonial avatars, providing the sole organic shape in an otherwise rectilinear system.

Decorative geometry: corner brackets (3px accent border on each corner of the hero), floating geometric shapes (crosses, circles, squares, triangles, plus signs), blueprint grid background (60px spacing in light mode, 40px on mobile).

## Components

### Buttons

- **Shape:** 4px radius, solid border
- **Primary:** Near-black background (`--text-h`), page background text, 3px border in heading color, solid offset shadow (4px). Padding: 0.875rem 1.75rem. On hover: background swaps to burnt orange (`--accent`), border follows, shadow collapses to 2px, element translates (2px, 2px). On active: shadow to 0px, translate to (4px, 4px).
- **Secondary:** White card background, heading text, 2px border in border color. On hover: background swaps to lime green, border swaps to heading color, shadow collapses.
- **Nav CTA:** Same as primary but smaller (0.625rem 1.25rem padding).
- **CTA Section Button:** Larger (1rem 2.5rem padding), uses heading font (Bricolage Grotesque), 700 weight.

### Cards (Service / Project / Testimonial)

- **Shape:** 4px radius, 3px solid border, 3px solid offset shadow (default), no gap between cards (shared border)
- **Background:** White card surface (`--bg-card`)
- **Hover:** Background shifts to shadow paper (`--bg-alt`), z-index promotion (cards stack above neighbors), shadow collapses to 2px and element translates (2px, 2px). Service cards get a 4px top accent bar reveal; testimonial cards get a left accent border from lime to orange.
- **Internal structure:** Grid or flex layout with number watermarks (800 weight, 3.5rem, 12% opacity), icon blocks (3.25rem square, lime green background, 2px border), and text hierarchy.

### Section Labels

- **Style:** Uppercase, 700 weight, 0.813rem, accent color, 0.1em tracking
- **Decoration:** 3px solid accent border underneath, 0.5rem gap with optional icon
- **Position:** Top of each section, centered (or left-aligned in about section)

### Tags

- **Shape:** Pill (100px radius), 2px border
- **Style:** Card background, muted text, 0.75rem font, 0.25rem 0.75rem padding
- **Hover:** Border shifts to accent color, text becomes accent, background becomes accent-tinted (`--accent-bg`)

### Badges

- **Service Badge:** Pill shape, card background, accent text, 2px border, offset shadow (3px), uppercase, 0.813rem
- **Status Badge:** 4px radius, lime green background, heading text, 2px border, offset shadow (3px), pulsing dot indicator
- **Hover:** Both badges collapse shadow and translate (2px, 2px)

### Navigation

- **Desktop:** Sticky header, 3px bottom border, brand name (800 weight, 1.375rem, condensed tracking), nav links with underline animation (accent color, scales from right to left on hover)
- **Mobile:** Bottom app bar fixed, 3px top border, upward shadow, icon + label layout, floating action CTA button
- **Theme Toggle:** Square button, card background, 2px border, offset shadow, lime green on hover

### Code Block

- **Shape:** 4px radius, 3px border, large solid offset shadow (6px)
- **Structure:** Dark window dots (red/yellow/green, 12px squares, 2px border), mono code text, syntax highlighting with color-coded tokens
- **Cursor:** Blinking accent-colored bar

### Marquee

- **Style:** Full-width band, accent background, 3px top/bottom border, gradient fade edges
- **Content:** Uppercase heading text, 0.875rem, 0.12em tracking, infinite horizontal scroll

### Footer

- **Structure:** 3-column grid (brand, links, socials) on desktop, single column on mobile
- **Links:** Muted text with accent underline animation (grows from 0 to full on hover)
- **Social Icons:** Square with 4px radius, 2px border, muted color. Hover: fills with accent color, text becomes background color, shadow + translate.

## Do's and Don'ts

### Do:
- **Do** use solid offset shadows in border color for all elevation — never blurred shadows.
- **Do** maintain 2–3px borders on every interactive surface and card.
- **Do** keep the accent color restrained — it should feel special, not omnipresent.
- **Do** use uppercase with wide letter-spacing for labels and navigation.
- **Do** pair the bold geometric heading font (Bricolage Grotesque 800) with the humanist body font (IBM Plex Sans).
- **Do** reserve JetBrains Mono for numbers, code, and process markers only.
- **Do** implement hover interactions with shadow collapse + diagonal translate for the tactile "press" feel.
- **Do** use alternating section backgrounds (paper vs shadow paper) for visual rhythm.
- **Do** group cards with zero gap and shared borders for unified grid blocks.

### Don't:
- **Don't** use border-radius values between 4px and 100px — only sharp(0px), small(4px), or pill(100px).
- **Don't** use box-shadow with blur or spread — only solid offset shadows (`Xpx Ypx 0px 0px`).
- **Don't** introduce gradients except where already established (marquee fade edges, pattern overlays).
- **Don't** add new accent colors — the system has orange and lime green; everything else is neutral.
- **Don't** use font sizes outside the established scale: clamp(3.5rem, 10vw, 7rem) → clamp(2rem, 4vw, 3.5rem) → 1.125rem → 1rem → 0.938rem → 0.813rem → 0.75rem → 0.625rem.
- **Don't** float cards or elements without visible borders or shadows — every surface must be bounded.
- **Don't** increase border thickness beyond 3px for structural elements or 4px for section dividers.
