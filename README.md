# Dammic Model Schools website

Next.js (TS) + Tailwind + Sanity CMS. Replace content easily in `app/` or through the CMS at `/studio`.

- Home, About, Academics, Admissions, Calendar, Gallery, News, Contact
- Brand: cream (#F4F1E8) & army green (#4B5320)
- Addresses and contact info pre-filled; Maps embedded

Local setup:
1) Install Node.js (LTS). In this folder run:
   npm install
   npm run dev
2) Create `.env.local` from `.env.local.example` and fill:
   SANITY_PROJECT_ID=... (from Sanity)
   SANITY_DATASET=production
   SANITY_API_VERSION=2025-01-01
   # Optional for drafts/preview
   SANITY_READ_TOKEN=...
   SANITY_PREVIEW_SECRET=...
3) Open the CMS at http://localhost:3000/studio and create content:
   - News Post: title, coverImage, excerpt, body
   - Gallery Image: image (+ optional title)

Create a Sanity project (one-time):
- Sign up at sanity.io, create a project + dataset (production)
- Copy the Project ID into `.env.local`

Deploy notes:
- Add `cdn.sanity.io` to Next image domains (already configured)
- Set env vars on your host (Vercel/Netlify/etc.)
