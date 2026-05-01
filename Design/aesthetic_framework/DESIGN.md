---
name: Aesthetic Framework
colors:
  surface: '#fcf9f2'
  surface-dim: '#dcdad3'
  surface-bright: '#fcf9f2'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f6f3ec'
  surface-container: '#f1eee7'
  surface-container-high: '#ebe8e1'
  surface-container-highest: '#e5e2db'
  on-surface: '#1c1c18'
  on-surface-variant: '#444748'
  inverse-surface: '#31312c'
  inverse-on-surface: '#f3f0e9'
  outline: '#747878'
  outline-variant: '#c4c7c7'
  surface-tint: '#5f5e5e'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#1c1b1b'
  on-primary-container: '#858383'
  inverse-primary: '#c8c6c5'
  secondary: '#785a00'
  on-secondary: '#ffffff'
  secondary-container: '#ffd167'
  on-secondary-container: '#765900'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#002118'
  on-tertiary-container: '#548f7b'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e5e2e1'
  primary-fixed-dim: '#c8c6c5'
  on-primary-fixed: '#1c1b1b'
  on-primary-fixed-variant: '#474746'
  secondary-fixed: '#ffdf9b'
  secondary-fixed-dim: '#edc157'
  on-secondary-fixed: '#251a00'
  on-secondary-fixed-variant: '#5b4300'
  tertiary-fixed: '#b1efd8'
  tertiary-fixed-dim: '#96d3bd'
  on-tertiary-fixed: '#002118'
  on-tertiary-fixed-variant: '#0d503f'
  background: '#fcf9f2'
  on-background: '#1c1c18'
  surface-variant: '#e5e2db'
typography:
  h1:
    fontFamily: Syne
    fontSize: 80px
    fontWeight: '800'
    lineHeight: '1.0'
    letterSpacing: -0.03em
  h2:
    fontFamily: Syne
    fontSize: 48px
    fontWeight: '800'
    lineHeight: '1.1'
    letterSpacing: -0.03em
  h3:
    fontFamily: Syne
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  body-lg:
    fontFamily: DM Mono
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
    letterSpacing: 0em
  body-md:
    fontFamily: DM Mono
    fontSize: 15px
    fontWeight: '400'
    lineHeight: '1.6'
    letterSpacing: 0em
  label-caps:
    fontFamily: DM Mono
    fontSize: 13px
    fontWeight: '500'
    lineHeight: '1.0'
    letterSpacing: 0.1em
spacing:
  container-max: 1200px
  gutter: 32px
  section-padding: 120px
  stack-sm: 8px
  stack-md: 24px
  stack-lg: 48px
---

## Brand & Style

This design system is defined by a "Minimal Neobrutalist" aesthetic. It strips away the chaos often associated with traditional brutalism, opting instead for a structural, honest, and high-contrast environment that feels airy and intentional. The interface celebrates raw engineering—visible borders, monospaced data, and hard shadows—while maintaining a sophisticated warmth through a light-toned background and generous negative space.

The emotional response is one of clarity and confidence. By combining the geometric aggression of bold typography with a soft, warm-neutral palette, the system feels both cutting-edge and approachable. It is designed for users who value functional transparency and architectural rigor over decorative gradients or soft blurs.

## Colors

The palette is anchored by a warm off-white base, providing a "paper-like" quality that prevents the high-contrast black elements from feeling overly clinical. 

- **Foundational Neutrals:** The background and surface colors use subtle shifts in warmth to define containment without relying on shadows alone.
- **Structural Black:** Used for text, borders, and primary CTAs to provide a rock-solid visual hierarchy.
- **Accents:** A trio of desaturated yet optimistic tones (Yellow, Mint, Blush) are used sparingly for highlights, status indicators, and categorization, ensuring the "minimal" aspect of the system remains intact.

## Typography

The typographic strategy relies on the tension between the expressive, geometric forms of **Syne** and the utilitarian, technical feel of **DM Mono**. 

Headings must be set with extremely tight letter-spacing to emphasize their architectural weight. Large display type should be treated as a design element itself, often serving as the primary visual interest in the absence of photography. Body copy utilizes the monospaced rhythm to reinforce the "raw" aesthetic, ensuring that even dense information feels organized and systematic. Labels and eyebrows are always uppercase with increased tracking to differentiate them from body prose.

## Layout & Spacing

This design system uses a fixed-width grid approach centered on a 1200px maximum container. The philosophy centers on "Generous Breathability"—using significant vertical padding between sections (120px+) to allow the bold elements to stand out without cluttering the viewport.

Spacing follows a rigid 8px base unit. Grid gutters are wide (32px) to maintain the airy feel. Content should be organized into clear vertical stacks separated by bold horizontal rules or substantial white space, rather than subtle dividers.

## Elevation & Depth

Depth in this system is strictly 2D and physical, rather than atmospheric. It rejects Gaussian blurs and soft ambient shadows in favor of "Hard-Shadow" neobrutalism.

- **The Shadow Layer:** All interactive surfaces and primary containers utilize a 4px offset shadow (100% opacity black). This creates a "cut-out" effect where elements appear to be physically layered slabs.
- **Interaction States:** On hover, elements "lift" by translating -2px on the Y-axis while the shadow expands to 6px. This creates a tactile, mechanical feedback loop.
- **The Texture:** The hero background utilizes a subtle dot-grid texture to ground the layout, preventing the airy whitespace from feeling "empty" or unfinished.

## Shapes

The shape language is dominated by the right angle. Every container, button, and input field must have 0px border-radius to maintain the "structural" and "raw" intent of the system. 

The only exception to this rule is the **Pill Tag**, used for status labels or categories. The extreme contrast between the sharp-edged layout and the perfectly circular ends of the pills makes these small elements immediately recognizable as metadata.