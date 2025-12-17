# Nailed Studio & Academy Website

A modern, responsive website for Nailed Studio & Academy - a nail salon, training academy, and supply shop in St. George, Utah.

## Tech Stack

- **Next.js 14+** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **React**

## Design System

- **Colors:** Matte Black (#1a1a1a) background, Champagne Gold (#D4AF37) accents
- **Typography:** Playfair Display (serif) for headlines, Inter (sans-serif) for body text
- **Layout:** Mobile-first, 3-column silo structure on desktop

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Image Requirements

### Hero Section
- **Location:** `public/images/hero/exterior.jpg`
- **Aspect Ratio:** 16:9 (e.g., 1920x1080px)
- **Description:** Exterior image from the street looking at the business

### Silo Section Images
- **Location:** `public/images/silos/`
  - `training.jpg` - Training area or salon interior (16:9)
  - `services.jpg` - Service stations or salon interior (16:9)
  - `supplies.jpg` - Supply area or salon interior (16:9)

### Staff Images
- **Location:** `public/images/staff/[staff-member]/`
  - `[firstname].jpg` - Portrait orientation (e.g., `becky.jpg`, `jackie.jpg`, `lara.jpg`, etc.)
  - `portfolio/nail-1.jpg` through `nail-6.jpg` - 1:1 square images (5-6 per technician)

**Staff Members:**
- `owner/` - Becky Bunnell
- `jackie-neil/`
- `lara-cappeletti/`
- `mckenzie-cullen/`
- `tessie-naelese/`
- `kenzie-dominguez/`

### Gallery Section
- **Location:** `public/images/gallery/`
- **Files:** `interior-1.jpg` through `interior-4.jpg`
- **Aspect Ratio:** 16:9 (e.g., 1920x1080px)
- **Description:** 4 images of the inside of the nail salon

## Project Structure

```
app/
├── layout.tsx          # Root layout
├── page.tsx            # Home page
├── booking/            # Booking page
├── training/           # Training information page
├── supplies/           # Supply shop page
└── api/                # API routes for forms

components/
├── layout/             # Header, Footer
├── sections/           # Page sections (Hero, Silo, About, Gallery, Contact)
├── forms/              # Form components
└── ui/                 # Reusable UI components (Button, Accordion, Carousel, etc.)
```

## Features

- ✅ 3-column silo landing page design
- ✅ Mobile-first responsive design
- ✅ Accordions for mobile text blocks
- ✅ Swipeable carousels for image galleries
- ✅ Scroll-triggered animations
- ✅ Booking form with validation
- ✅ Training signup form
- ✅ Contact form
- ✅ Staff portfolio carousels
- ✅ Gallery carousel

## Form Integration

The forms currently log submissions to the console. To integrate with an email service:

1. Install an email service (e.g., Resend, SendGrid)
2. Update the API routes in `app/api/` to send emails
3. Add environment variables for API keys

Example with Resend:
```typescript
import { Resend } from 'resend';
const resend = new Resend(process.env.RESEND_API_KEY);

await resend.emails.send({
  from: 'onboarding@resend.dev',
  to: 'Nailedstudioandacademy@gmail.com',
  subject: 'New Booking Request',
  html: `<p>New booking request from ${body.name}</p>...`
});
```

## Build

```bash
npm run build
```

## Deploy

The site can be deployed to Vercel, Netlify, or any platform that supports Next.js.

