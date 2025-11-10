# Albin Mathew - Portfolio

A modern, interactive portfolio website built with React, TypeScript, and Tailwind CSS.

## Features

- 🎨 Modern and responsive design
- 📱 Mobile-friendly interface
- 🚀 Smooth scrolling navigation with animations
- 💼 Complete resume information
- 🎯 Interactive sections for Education, Skills, Projects, Experience, and Certificates
- 📧 Contact form
- 🔗 Social media links (LinkedIn, GitHub)
- ✨ Scroll-triggered animations
- 🎭 Hover effects and transitions

## Tech Stack

- **React** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Vite** - Build tool and dev server

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## Deployment to Vercel

### Quick Deploy

1. Push your code to GitHub
2. Import your repository in [Vercel](https://vercel.com)
3. Vercel will auto-detect Vite settings
4. Deploy!

### Manual Configuration

If auto-detection doesn't work, use these settings:

- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Install Command**: `npm install`
- **Framework**: Vite

See [VERCEL_DEPLOYMENT.md](./VERCEL_DEPLOYMENT.md) for detailed deployment instructions.

## Project Structure

```
portfolio/
├── src/
│   ├── components/
│   │   ├── Header.tsx       # Navigation header
│   │   ├── About.tsx        # About section
│   │   ├── Education.tsx    # Education section
│   │   ├── Skills.tsx       # Skills section
│   │   ├── Projects.tsx     # Projects section
│   │   ├── Experience.tsx   # Work experience section
│   │   ├── Certificates.tsx # Certificates section
│   │   ├── Contact.tsx      # Contact section
│   │   └── ScrollToTop.tsx  # Scroll to top button
│   ├── hooks/
│   │   └── useScrollAnimation.ts # Scroll animation hook
│   ├── App.tsx              # Main app component
│   ├── main.tsx             # Entry point
│   └── index.css            # Global styles
├── index.html
├── package.json
├── tailwind.config.js       # Tailwind configuration
├── tsconfig.json            # TypeScript configuration
├── vite.config.ts           # Vite configuration
└── vercel.json              # Vercel deployment configuration
```

## Customization

You can easily customize the portfolio by editing the component files in `src/components/`. Each component contains the resume data and can be modified to match your preferences.

## License

This project is open source and available under the MIT License.

## Contact

- Email: albinmathew0602@gmail.com
- LinkedIn: [albinmathew2002](https://www.linkedin.com/in/albinmathew2002)
- GitHub: [AlbinMath](https://github.com/AlbinMath)
