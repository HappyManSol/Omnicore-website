# OmniCore Solutions Website

A production-ready Next.js 14 website for OmniCore Solutions, a Web2 + Web3 consultancy. Built with TypeScript, Tailwind CSS, and shadcn/ui components.

## Features

- ✅ **Next.js 14** with App Router and Server Components
- ✅ **TypeScript** for type safety
- ✅ **Tailwind CSS** with custom brand colors (Ink, Blue, Purple)
- ✅ **shadcn/ui** components with custom theming
- ✅ **Responsive Design** with mobile-first approach
- ✅ **SEO Optimized** with metadata, Open Graph, JSON-LD structured data
- ✅ **Contact Form** with Zod validation, Resend email, and Mailchimp integration
- ✅ **Vercel Analytics** for performance monitoring
- ✅ **Accessibility** features (ARIA labels, keyboard navigation, semantic HTML)
- ✅ **Performance Optimized** (font optimization, image optimization, lazy loading)

## Pages

- **Home** - Hero, services preview, values, and CTA sections
- **Services** - Comprehensive service offerings with competition statement
- **About** - Company mission, values, and impact
- **Case Studies** - Filterable portfolio with Web2/Web3 projects
- **Contact** - Form with email and Mailchimp integration

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **UI Components:** shadcn/ui
- **Form Validation:** Zod + React Hook Form
- **Email:** Resend
- **Marketing:** Mailchimp
- **Analytics:** Vercel Analytics
- **Icons:** Lucide React

## Getting Started

### Prerequisites

- Node.js 18+ and npm
- Resend API key ([get one here](https://resend.com))
- Mailchimp API key ([get one here](https://mailchimp.com))

### Installation

1. **Clone the repository:**

\`\`\`bash
git clone <repository-url>
cd OmniCore
\`\`\`

2. **Install dependencies:**

\`\`\`bash
npm install
\`\`\`

3. **Set up environment variables:**

Copy the example environment file and fill in your values:

\`\`\`bash
cp .env.example .env.local
\`\`\`

Edit `.env.local` with your actual API keys:

\`\`\`env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
RESEND_API_KEY=your_resend_api_key
MAILCHIMP_API_KEY=your_mailchimp_api_key
MAILCHIMP_SERVER_PREFIX=your_server_prefix
MAILCHIMP_AUDIENCE_ID=your_audience_id
\`\`\`

4. **Add images:**

Place your images in the \`public/images\` directory:
- Logo: \`public/logo.png\`
- OG Image: \`public/og-image.jpg\`
- Favicons: \`public/favicon.ico\`, \`public/favicon-16x16.png\`, \`public/apple-touch-icon.png\`
- Case study images: \`public/images/case-studies/[name].jpg\`

See \`public/images/README.md\` for detailed image requirements.

5. **Run the development server:**

\`\`\`bash
npm run dev
\`\`\`

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Environment Variables

### Required Variables

| Variable | Description | Where to Get |
|----------|-------------|--------------|
| \`NEXT_PUBLIC_SITE_URL\` | Your website URL | Your domain or Vercel URL |
| \`RESEND_API_KEY\` | Resend API key for emails | [resend.com/api-keys](https://resend.com/api-keys) |

### Optional Variables (Mailchimp)

| Variable | Description | Where to Get |
|----------|-------------|--------------|
| \`MAILCHIMP_API_KEY\` | Mailchimp API key | [Mailchimp API Keys](https://mailchimp.com/help/about-api-keys/) |
| \`MAILCHIMP_SERVER_PREFIX\` | Data center prefix (e.g., us1) | From your Mailchimp URL |
| \`MAILCHIMP_AUDIENCE_ID\` | Audience/List ID | Mailchimp > Audience > Settings |

**Note:** If Mailchimp variables are not provided, the contact form will still work but contacts won't be added to Mailchimp.

## Deployment to Vercel

### Step 1: Push to GitHub

1. Initialize git (if not already done):

\`\`\`bash
git init
git add .
git commit -m "Initial commit"
\`\`\`

2. Create a new repository on GitHub

3. Push your code:

\`\`\`bash
git remote add origin <your-github-repo-url>
git branch -M main
git push -u origin main
\`\`\`

### Step 2: Deploy to Vercel

1. **Sign up/Login** to [Vercel](https://vercel.com)

2. **Import Project:**
   - Click "Add New" > "Project"
   - Select your GitHub repository
   - Click "Import"

3. **Configure Project:**
   - Framework Preset: Next.js (auto-detected)
   - Root Directory: ./
   - Build Command: \`npm run build\`
   - Output Directory: .next
   - Install Command: \`npm install\`

4. **Add Environment Variables:**

   In the Vercel dashboard, add the following environment variables:

   \`\`\`
   NEXT_PUBLIC_SITE_URL=https://your-domain.vercel.app
   RESEND_API_KEY=your_resend_api_key
   MAILCHIMP_API_KEY=your_mailchimp_api_key
   MAILCHIMP_SERVER_PREFIX=your_server_prefix
   MAILCHIMP_AUDIENCE_ID=your_audience_id
   \`\`\`

5. **Deploy:**
   - Click "Deploy"
   - Wait for the build to complete
   - Your site will be live at \`https://your-project.vercel.app\`

### Step 3: Configure Custom Domain (Optional)

1. Go to your project settings in Vercel
2. Navigate to "Domains"
3. Add your custom domain
4. Follow the DNS configuration instructions
5. Update \`NEXT_PUBLIC_SITE_URL\` environment variable with your custom domain

### Step 4: Verify Deployment

1. **Test the contact form** - Submit a test message
2. **Check Vercel Analytics** - Verify it's tracking pageviews
3. **Test SEO** - Check Open Graph tags with [OpenGraph.xyz](https://opengraph.xyz)
4. **Run Lighthouse** - Aim for scores ≥90 in all categories

## Testing Resend Email Integration

### Setting up Resend

1. Sign up at [resend.com](https://resend.com)
2. Verify your domain or use their test domain
3. Create an API key
4. Update the \`from\` address in \`src/lib/resend.ts\` to match your verified domain

### Testing Emails

In development, Resend will send emails to the address you configure. For production:

1. Verify your sending domain in Resend
2. Update the \`to\` address in \`src/lib/resend.ts\` with your actual business email
3. Test the contact form in production

## Testing Mailchimp Integration

### Setting up Mailchimp

1. Create a Mailchimp account
2. Create an audience (list)
3. Get your API key from Account > Extras > API keys
4. Find your server prefix (e.g., us1) from your Mailchimp dashboard URL
5. Get your Audience ID from Audience > Settings > Audience name and defaults

### Testing Contact Additions

1. Submit the contact form
2. Check your Mailchimp audience to verify the contact was added
3. The contact will be tagged with "contact-form"

## Performance Optimization

The site is optimized for Lighthouse scores ≥90:

- ✅ Font optimization with \`next/font\` and \`display: swap\`
- ✅ Image optimization with Next.js Image component
- ✅ Code splitting and lazy loading
- ✅ Minimal JavaScript bundle size
- ✅ Server-side rendering for faster initial load
- ✅ Optimized Tailwind CSS (purges unused styles)

## Accessibility Features

- Semantic HTML5 elements
- ARIA labels for interactive elements
- Skip to main content link
- Keyboard navigation support
- Focus management in mobile menu
- Form validation with screen reader announcements
- WCAG AA color contrast standards

## Project Structure

\`\`\`
OmniCore/
├── src/
│   ├── app/                      # Next.js app directory
│   │   ├── layout.tsx           # Root layout with fonts & analytics
│   │   ├── page.tsx             # Home page
│   │   ├── services/page.tsx    # Services page
│   │   ├── about/page.tsx       # About page
│   │   ├── case-studies/page.tsx # Case studies page
│   │   ├── contact/page.tsx     # Contact page
│   │   ├── api/contact/route.ts # Contact form API
│   │   ├── sitemap.ts           # Dynamic sitemap
│   │   ├── robots.ts            # Robots.txt
│   │   └── globals.css          # Global styles
│   ├── components/
│   │   ├── ui/                  # shadcn/ui components
│   │   ├── layout/              # Header & Footer
│   │   ├── home/                # Home page components
│   │   ├── contact-form.tsx     # Contact form
│   │   ├── case-study-card.tsx  # Case study card
│   │   └── json-ld.tsx          # Structured data
│   ├── lib/
│   │   ├── utils.ts             # Utility functions
│   │   ├── resend.ts            # Email service
│   │   ├── mailchimp.ts         # Mailchimp service
│   │   └── constants.ts         # Site constants & content
│   └── schemas/
│       └── contact.ts           # Zod validation schema
├── public/
│   └── images/                  # Static images
├── .env.example                 # Environment variables template
├── next.config.js               # Next.js configuration
├── tailwind.config.ts           # Tailwind configuration
├── components.json              # shadcn/ui configuration
└── package.json                 # Dependencies
\`\`\`

## Customization

### Brand Colors

Edit \`tailwind.config.ts\` to customize colors:

\`\`\`typescript
colors: {
  ink: { DEFAULT: '#1a1a2e', /* ... */ },
  blue: { DEFAULT: '#4361ee', /* ... */ },
  purple: { DEFAULT: '#9333ea', /* ... */ },
}
\`\`\`

### Content

All content is centralized in \`src/lib/constants.ts\`:

- Company information
- Navigation links
- Mission & values
- Services
- Case studies

### Fonts

Fonts are configured in \`src/app/layout.tsx\`:

- Primary: Inter
- Display: Plus Jakarta Sans

## Scripts

- \`npm run dev\` - Start development server
- \`npm run build\` - Build for production
- \`npm run start\` - Start production server
- \`npm run lint\` - Run ESLint

## Support

For questions or issues:

- Email: hello@omnicore.solutions
- Documentation: See this README and inline code comments

## License

Proprietary - © 2024 OmniCore Solutions. All rights reserved.

