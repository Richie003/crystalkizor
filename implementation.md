# MASTER PROMPT: Build the Crystal Kizor Personal Brand Website

## ROLE & OBJECTIVE

Act as a senior product designer, creative director, brand strategist, and expert frontend engineer.

Your task is to design and build a premium, visually distinctive, fully responsive, single-page personal brand website for **Crystal Kizor**, based on the supplied Web Developer Stage 1 Assessment brief.

Do not create a generic portfolio template. Think critically about the brand, its audiences, the relationships between its initiatives, and the best way to communicate the entire ecosystem through one cohesive digital experience.

The final result should look like the work of a highly skilled designer and frontend developer: editorial, intentional, technically sound, fast, accessible, and polished down to the smallest details.

Do not stop at planning or producing a mockup. Inspect the project, implement the website, run it, test it, and fix issues.

---

## 1. UNDERSTAND THE BRAND BEFORE BUILDING

Crystal Kizor is an architect, designer, entrepreneur, speaker, researcher, and creator building across several brands and initiatives.

Her ecosystem includes:

1. **Studio COKA** — Architecture, interior design, and construction focused on thoughtful, climate-responsive design.
2. **AKO Alliance** — An initiative focused on expanding access to education and creating opportunities for children and young people.
3. **ELEvated** — Contemporary furniture and product design rooted in African context, materials, and ideas.
4. **The Effective Architect (TEA)** — An architecture education and media platform helping architects and built-environment professionals learn, grow, and build better careers.
5. **Speaking Engagements** — Talks and conversations about architecture, climate-responsive design, African cities, design, entrepreneurship, and the built environment.
6. **Alive and Free** — A Christian youth movement helping young people explore truth, healing, freedom, identity, purpose, and life in Christ.
7. **Crystal Kizor: Personal Work** — Architecture, research, writing, authorship, media, ideas, and other work that sits directly under the personal brand.

### The central challenge

Do not simply display seven logos or seven identical cards.

Develop a coherent brand narrative in which Crystal Kizor is the central identity connecting these different expressions of her work.

The website must quickly answer four questions:

- Who is Crystal Kizor?
- What does she do?
- What is she building?
- Where should each visitor go next?

Proposed positioning direction:

"An architect and multidisciplinary entrepreneur shaping spaces, ideas, products, and initiatives that create lasting impact."

Treat this as a starting point, not mandatory final copy. Improve the language if you can communicate the same meaning more distinctly.

Do not invent credentials, awards, project results, statistics, testimonials, personal history, or business relationships that are not supported by the supplied materials.

---

## 2. FIRST ACTION: INSPECT THE EXISTING PROJECT AND ASSETS

Before writing code:

- Inspect the existing repository, package.json, folder structure, installed dependencies, and current application entry point.
- Locate and review the supplied asset folder.
- Identify Crystal's professional photographs, logos, brand marks, project images, and existing links.
- Check image dimensions and aspect ratios so images can be used appropriately.
- Review any supplied brand information and use it as the primary source of truth.
- Preserve existing working project configuration wherever practical.

Do not immediately replace the project with a fresh scaffold.

If an asset folder exists, use its actual contents. Match photographs to the relevant sections and use supplied logos where available.

Do not invent local file paths or assume assets exist without inspecting them.

If an image or destination link is missing, use a clearly marked placeholder or a carefully chosen temporary image. Never represent a placeholder as an actual Crystal Kizor project.

Use remote imagery only when appropriate, and do not rely on fragile external image URLs for the entire visual experience.

---

## 3. CREATIVE DIRECTION

### Overall aesthetic

Create a premium editorial experience inspired by:

- Contemporary African architecture and design.
- Architectural monographs and independent design publications.
- Refined personal-brand websites.
- Minimalist editorial typography.
- Natural materials, spatial composition, and thoughtful use of whitespace.
- A balance of professional authority, warmth, intellect, and purpose.

The design should feel confident, cultured, modern, human, and distinctive.

Avoid:

- Generic SaaS landing-page layouts.
- Excessive rounded cards.
- Gradients used merely for decoration.
- Glassmorphism and excessive blur effects.
- Overused purple-and-blue AI aesthetics.
- Unnecessary icons everywhere.
- Excessive animation or distracting parallax.
- Stock photography that misrepresents the brands.
- Repeating the same card layout for every section.
- Large amounts of filler text.
- Fake statistics, fake testimonials, or fabricated portfolio projects.

### Initial color direction

Use a restrained palette such as:

- Warm ivory: #F5F1E8
- Deep forest green: #243C32
- Muted clay: #B76E4A
- Charcoal: #252723
- White or warm off-white for contrast.

Treat these as proposed design tokens. Adapt them if the supplied brand assets establish a stronger direction.

Use color to create hierarchy, not decoration.

### Typography

Use an expressive editorial serif for large headlines and a clean sans-serif for navigation, body copy, labels, and UI.

Potential pairings include:

- Instrument Serif + DM Sans
- Cormorant Garamond + Manrope
- Playfair Display + Inter

Choose one pairing and use it consistently. Load fonts efficiently, preferably with optimized local assets or a reliable font provider.

Create a clear type scale for desktop and mobile. Headline wrapping, line length, letter spacing, and line height must be deliberately designed.

### Layout

Use:

- Asymmetric editorial grids.
- Large, carefully cropped photographs.
- Generous but controlled whitespace.
- Strong alignment and consistent page gutters.
- Alternating image/text compositions.
- Full-width imagery where it adds narrative value.
- Thin dividers and restrained visual details.
- Clear distinctions between section headings, descriptions, metadata, and actions.

Avoid making every section visually identical.

---

## 4. PAGE STRUCTURE AND CONTENT STRATEGY

Build one cohesive single-page website with a carefully planned narrative.

### A. Navigation

Create a refined, minimal navigation bar.

Include:

- Crystal Kizor wordmark or supplied logo.
- Work / Ventures.
- About.
- Ideas or Journal.
- Speaking.
- A visually distinct Contact or Let's Connect action.

Use smooth anchor navigation.

The header may become subtly sticky after scrolling, provided it does not consume excessive mobile screen space.

If a mobile menu is required, implement a proper accessible menu with working open/close interactions, keyboard support, and appropriate focus behavior.

### B. Hero section

The hero must establish Crystal's identity immediately.

Use the strongest supplied professional portrait or a compelling architectural photograph that supports the positioning.

Include:

- A small editorial eyebrow, such as "ARCHITECT · DESIGNER · ENTREPRENEUR", if appropriate.
- A distinctive, confident headline.
- A concise paragraph describing her multidisciplinary work.
- A primary CTA that takes visitors to the ventures section.
- A secondary CTA for speaking, collaborations, or contact.
- A deliberate visual composition with a carefully controlled image crop.
- Optional subtle scroll cue.

Possible headline direction:

"Designing spaces. Building ideas. Creating impact."

You may develop a stronger original alternative, but do not use vague inspirational language that could belong to any personal brand.

The first screen must communicate substance, not just aesthetics.

On desktop, consider a sophisticated split composition, editorial grid, or layered image arrangement. On mobile, reorder and resize elements intentionally instead of simply stacking the desktop layout.

### C. Personal introduction

Introduce Crystal as the connecting identity behind the ecosystem.

Explain the relationship between architecture, design, education, entrepreneurship, research, and impact.

Keep the copy concise, human, and grounded in the provided information.

Do not fabricate a biography. If the source material does not support a particular personal claim, omit it.

### D. Ventures and initiatives

This is a core section of the website.

Present the seven initiatives through a clear conceptual hierarchy rather than seven identical cards.

Organize them into meaningful themes where appropriate, such as:

1. Design and the Built Environment
  - Studio COKA
  - ELEvated

1. Education and Opportunity
  - The Effective Architect
  - AKO Alliance

1. Ideas and Public Engagement
  - Speaking engagements
  - Research, writing, authorship, and media

1. Faith and Personal Development
  - Alive and Free

These groupings are proposed for navigation and presentation only. Do not imply formal ownership structures, partnerships, or organizational relationships that have not been provided.

Each initiative should have:

- Its correct name and capitalization.
- A concise, accurate description.
- A suitable supplied image, logo, or considered visual treatment.
- A clear action appropriate to its audience.
- A real destination URL if one has been supplied or verified.
- A graceful fallback if no destination is available.

Examples of actions:

- Explore the studio.
- Discover the collection.
- Learn about the initiative.
- Explore learning resources.
- Invite Crystal to speak.
- Read her work.
- Discover the movement.

Create visual variation between groups. For example, use a larger editorial feature for a major venture, a horizontal composition for another, and smaller text-led links for research or speaking.

Do not artificially rank the ventures by importance without evidence.

### E. Ideas, research, and authorship

This section represents Crystal's personal intellectual work rather than another business directory.

Create an editorial section for research, writing, architecture, media, and ideas.

Use actual supplied articles, links, or media when available.

If there are no real articles, design the section so it can accommodate future work without inventing article titles, dates, or publication claims.

Make the visual treatment feel closer to an independent journal or architectural publication than a generic blog template.

### F. Speaking and collaboration

Create a strong section for speaking engagements, public conversations, and professional collaborations.

Clearly communicate the subject areas Crystal speaks about, based on the brief.

Include a clear CTA for speaking invitations or collaboration enquiries.

Use a real email address or booking link only if supplied or verified. Do not invent contact information.

### G. Closing CTA and footer

End with a thoughtful, confident invitation to connect.

Include:

- A concise closing headline.
- A working contact action.
- Supplied social links.
- Navigation to relevant sections.
- Appropriate brand or copyright information only where supported.

The footer should feel like a deliberate conclusion to the page, not an afterthought.

---

## 5. INTERACTION DESIGN: SMOOTH SCROLL AND ANIMATIONS

Motion should reinforce the editorial experience, hierarchy, and sense of craft.

Use smooth scrolling, subtle transitions, and restrained reveal effects. Every animation should serve a purpose.

### Smooth scrolling

Implement smooth anchor scrolling with appropriate CSS and JavaScript only where necessary.

Requirements:

- Navigation links should reach the correct sections.
- Account for a sticky header when scrolling to anchor targets.
- Respect the user's reduced-motion preferences.
- Disable or simplify smooth scrolling when `prefers-reduced-motion: reduce` is enabled.
- Avoid interfering with native browser navigation or keyboard accessibility.

### Animation direction

Use a lightweight animation library such as Motion for React if it is already installed or genuinely useful. Otherwise, prefer CSS transitions and the Intersection Observer API.

Implement selected effects:

1. Hero entrance:
  - Subtle fade and vertical movement for text.
  - Carefully timed image reveal.
  - Stagger related elements slightly.

1. Scroll-triggered reveals:
  - Reveal selected section headings, images, and content as they enter the viewport.
  - Keep durations short and easing smooth.
  - Avoid making visitors wait for important content.

1. Image interactions:
  - Subtle image scale or crop transitions on hover.
  - Do not zoom so aggressively that content becomes obscured.
  - Provide equivalent accessible behavior for touch users.

1. Initiative interactions:
  - Refined arrow movement, underline transitions, or border changes.
  - Make the entire card clickable only when this improves usability and does not conflict with nested links.

1. Header behavior:
  - Subtle background or border change on scroll if appropriate.
  - Avoid distracting hide/show behavior that makes navigation difficult to find.

1. Optional scroll progress or section indicator:
  - Add only if it contributes to navigation and does not clutter the design.

### Animation safeguards

- No excessive parallax.
- No continuous decorative motion.
- No unnecessary animation dependency.
- No large layout shifts caused by entrance effects.
- No content that remains invisible if JavaScript fails.
- No animations that compromise accessibility or performance.

Use consistent easing, durations, and reveal distances throughout the page.

---

## 6. TECHNICAL STACK

Use the following stack unless the existing project provides a strong reason to retain a different compatible setup:

- React
- TypeScript
- Vite
- Tailwind CSS
- Motion for React, only if justified
- Lucide icons, where icons genuinely improve usability

Use the Tailwind version already installed if possible. If configuring a new project, select a compatible version and follow its correct setup instructions.

Do not mix incompatible Tailwind configuration approaches or install packages unnecessarily.

### Code architecture

Build reusable components such as:

- Header
- MobileNavigation
- HeroSection
- IntroductionSection
- VenturesSection
- InitiativeFeature
- IdeasSection
- SpeakingSection
- ContactSection
- Footer

Use structured data for repetitive initiative content, with strongly typed TypeScript interfaces.

Keep components focused and avoid turning the entire application into one enormous component.

Separate content from presentation where practical so descriptions, links, images, and ordering can be changed easily.

Use semantic HTML and maintainable class organization.

Avoid:

- Excessive component abstraction.
- Duplicate markup.
- Unnecessary global state.
- Dead code.
- Unused dependencies.
- TypeScript `any` where a meaningful type can be defined.
- Console errors and warnings.
- Fake functionality.

---

## 7. RESPONSIVE DESIGN

The website must work beautifully across desktop, tablet, and mobile.

Test at approximately:

- 360–390px mobile width.
- 430px large mobile width.
- 768px tablet width.
- 1024px laptop width.
- 1440px desktop width.

These are test targets, not a reason to hardcode fixed layouts.

Requirements:

- No horizontal overflow.
- No clipped text or broken headlines.
- No distorted images.
- No tiny mobile text.
- No inaccessible hover-only functionality.
- No oversized mobile hero that hides the site's purpose.
- No awkward spacing between sections.
- No overlapping fixed elements.
- No buttons or links that are difficult to tap.

Use fluid typography, responsive grids, appropriate image aspect ratios, and breakpoint-specific composition changes.

Prioritize the mobile experience instead of treating it as a compressed desktop design.

---

## 8. ACCESSIBILITY AND PERFORMANCE

Treat accessibility and performance as core requirements.

### Accessibility

- Use semantic landmarks and heading hierarchy.
- Provide descriptive alternative text for meaningful images.
- Use empty alt text for purely decorative imagery.
- Ensure keyboard navigation works throughout.
- Provide visible focus states.
- Maintain sufficient color contrast.
- Label interactive controls correctly.
- Support reduced-motion preferences.
- Use accessible mobile menu behavior.
- Avoid conveying essential information through color alone.

### Performance

- Optimize supplied images and use modern formats where practical.
- Use responsive image sizing and appropriate `srcset` or equivalent.
- Set image dimensions or aspect ratios to reduce layout shifts.
- Lazy-load below-the-fold images.
- Prioritize the hero image and avoid unnecessarily lazy-loading the main visual.
- Minimize JavaScript and third-party dependencies.
- Avoid expensive scroll handlers and excessive DOM animations.
- Use efficient font loading.
- Keep the page functional on slower mobile connections.

Aim for strong Lighthouse performance, accessibility, best-practice, and SEO results, but do not fabricate scores or optimize for scores at the expense of real usability.

---

## 9. SEO AND SHARING

Implement appropriate metadata:

- Descriptive page title.
- Relevant meta description.
- Canonical URL only if the final production URL is known.
- Open Graph title, description, and image.
- Theme color.
- Favicon using an available asset where appropriate.

Use a logical heading hierarchy and meaningful link text.

Ensure the site has a sensible appearance when shared on messaging apps and social platforms.

Do not add structured data containing unverified facts.

---

## 10. CONTENT AND LINK INTEGRITY

The supplied assessment brief is the primary source of truth.

- Preserve brand names and capitalization, including ELEvated and The Effective Architect (TEA).
- Do not fabricate statistics, client names, case studies, endorsements, achievements, biographies, or contact details.
- Do not make up links or assume a domain belongs to an initiative.
- Use verified URLs from the supplied assets or confirmed public sources.
- If an initiative has no verified link, use an appropriate in-page destination or clearly marked development placeholder.
- Do not leave dead `href="#"` links in the finished website.
- Ensure every CTA performs its stated action.
- Do not use generic placeholder text in the final copy.
- Do not add unrelated features merely to make the project appear more complex.

The goal is to demonstrate strong judgment about what belongs on the page.

---

## 11. IMPLEMENTATION WORKFLOW

Work in the following order:

### Step 1: Audit

Inspect the repository, assets, dependencies, and available content.

### Step 2: Plan

Define the page hierarchy, content mapping, visual system, and responsive strategy.

### Step 3: Implement

Build the complete landing page, reusable components, responsive layouts, navigation, interactions, and animations.

### Step 4: Validate

Run the available development server and production build.

Check for:

- TypeScript errors.
- Build errors.
- Broken imports.
- Missing assets.
- Broken links.
- Console errors.
- Horizontal overflow.
- Responsive layout issues.
- Accessibility problems.
- Animation and reduced-motion bugs.
- Incorrect image crops.
- Inconsistent spacing or typography.

### Step 5: Refine

Do not stop after the page merely works.

Inspect the actual rendered page and improve:

- Hero composition.
- Headline wrapping.
- Image selection and crop.
- Visual hierarchy.
- Section transitions.
- Spacing rhythm.
- Navigation behavior.
- Animation timing.
- Mobile composition.
- Footer quality.

If browser automation or screenshot tools are available, use them to inspect the rendered page at desktop and mobile sizes. Fix the issues you observe rather than assuming the implementation is correct.

### Step 6: Deliver

Provide:

1. A completed, working website.
2. A concise summary of the design decisions.
3. The final technology stack.
4. Instructions for running the project locally.
5. A list of any missing assets or unresolved external links.
6. Build and test results, stating only checks actually performed.
7. Deployment instructions or a live URL if deployment tools and credentials are available.

Do not claim to have deployed the site unless the deployment has succeeded and the URL has been verified.

Do not stop at giving me instructions or snippets. Complete the implementation within the available project environment.

---

## 12. FINAL QUALITY BAR

Before considering the project complete, ask yourself:

- Does the first screen immediately communicate who Crystal Kizor is?
- Is the relationship between the seven initiatives understandable?
- Does the page feel like a unified personal brand instead of a business directory?
- Can different visitors quickly find their next step?
- Does the visual direction feel premium, editorial, and distinctive?
- Are the actual supplied assets being used intelligently?
- Do smooth scrolling and animations feel refined rather than gimmicky?
- Is the site fully responsive and accessible?
- Does it load efficiently?
- Does every visible interaction work?
- Can the developer confidently explain the implementation?
- Does the finished page feel custom-designed rather than generated from a generic template?

Prioritize clarity, design judgment, technical reliability, and attention to detail over feature count.

**Begin by auditing the existing project and supplied assets. Then make the design decisions, implement the complete experience, run the application, inspect the result, and refine it until it meets this standard.**