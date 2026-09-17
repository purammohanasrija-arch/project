# Mohana Srija Puram — Portfolio Website

> Futuristic AI/ML & Software Developer Portfolio

## Tech Stack

- **React 18** + **Vite 5**
- **Tailwind CSS 3**
- **Framer Motion 11**
- **Lucide React** (icons)

## Project Structure

```
portfolio/
├── public/
│   ├── favicon.svg
│   ├── _redirects          ← Netlify SPA routing
│   ├── resume/
│   │   └── Mohana-Srija-Puram-Resume.pdf   ← ⚠️ Add your PDF here
│   └── certificates/       ← ⚠️ Add certificate PDFs here
├── src/
│   ├── components/
│   │   ├── LoadingScreen.jsx
│   │   ├── Navbar.jsx
│   │   ├── ParticleBackground.jsx
│   │   └── RecruiterMode.jsx
│   ├── sections/
│   │   ├── Hero.jsx
│   │   ├── QuickStats.jsx
│   │   ├── JourneyExplorer.jsx
│   │   ├── Projects.jsx
│   │   ├── Skills.jsx
│   │   ├── ExperienceTimeline.jsx
│   │   ├── Certifications.jsx
│   │   ├── ResumeSection.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── data/
│   │   └── portfolioData.js   ← All your resume data lives here
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── netlify.toml
└── package.json
```

## Local Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev
# → Opens at http://localhost:5173

# Production build
npm run build

# Preview production build locally
npm run preview
```

## Files You Need to Add Before Deployment

### 1. Resume PDF
Place your actual resume at:
```
public/resume/Mohana-Srija-Puram-Resume.pdf
```

### 2. Certificate PDFs (optional)
Place certificate files in:
```
public/certificates/
```
Then update the `certifications` array in `src/data/portfolioData.js` to add a `file` property pointing to `/certificates/your-file.pdf`.

## Deployment — Netlify (Recommended)

### Method 1: Netlify Drag & Drop (Easiest — No account needed)
1. Run `npm run build`
2. Go to [netlify.com/drop](https://app.netlify.com/drop)
3. Drag the `dist/` folder onto the page
4. Your site is live instantly! ✅

### Method 2: Netlify CLI
```bash
# Login (opens browser)
netlify login

# Deploy (from project root)
netlify deploy --prod --dir=dist
```

### Method 3: GitHub + Netlify (Best for continuous deployment)
1. Create a GitHub repo and push this code
2. Go to [app.netlify.com](https://app.netlify.com) → "Add new site" → "Import from Git"
3. Connect your GitHub repo
4. Build settings (auto-detected from netlify.toml):
   - Build command: `npm run build`
   - Publish directory: `dist`
5. Click "Deploy site" ✅

## Updating Portfolio Data

All your personal data is in one place:
```
src/data/portfolioData.js
```

Edit this file to update:
- Personal info and links
- Education details
- Skills
- Projects
- Internships
- Certifications
- Stats

## Environment Variables

For enabling real email delivery on the contact form, create a `.env` file:
```env
VITE_FORMSPREE_ENDPOINT=https://formspree.io/f/YOUR_FORM_ID
```
See `.env.example` for all available variables.

## Contact Form Setup (Optional)

To enable real email delivery:
1. Sign up at [formspree.io](https://formspree.io)
2. Create a new form
3. Add the endpoint to your `.env`
4. Update `src/sections/Contact.jsx` to POST to `VITE_FORMSPREE_ENDPOINT`
