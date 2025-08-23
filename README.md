# PortfolioFlow

A modern, responsive academic portfolio website for Dr. Vijaykumar Toutam, Principal Scientist at CSIR NPL. Built with React, TypeScript, and Tailwind CSS, featuring smooth animations and interactive hover effects.

## Features

- **Modern Design**: Clean, minimalist design with zoom lens hover effects
- **Responsive Layout**: Optimized for all device sizes
- **Interactive Elements**: Smooth transitions and engaging animations
- **Academic Focus**: Tailored for researchers and academics
- **Performance Optimized**: Fast loading and smooth scrolling
- **Professional Content**: Authentic research data and publications

## Tech Stack

- **Frontend**: React 18, TypeScript, Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Deployment**: Vercel/GitHub Pages ready

## Sections

- **Hero Section**: Introduction and research areas
- **Stats Section**: Research impact metrics
- **About Section**: Expertise, education, and awards
- **Research Section**: Research themes and featured projects
- **Publications Section**: Recent publications and patents
- **Talks Section**: Upcoming and recent presentations
- **Media Section**: Media coverage and news
- **Contact Section**: Professional links and contact information

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd PortfolioFlow
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:5000](http://localhost:5000) to view it in the browser.

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run check` - Type checking

## Project Structure

```
PortfolioFlow/
├── client/
│   ├── src/
│   │   ├── components/     # React components
│   │   ├── hooks/          # Custom hooks
│   │   ├── lib/            # Utility functions
│   │   ├── pages/          # Page components
│   │   └── index.css       # Global styles
│   └── index.html
├── server/                 # Express server
├── shared/                 # Shared types/schemas
└── package.json
```

## Deployment

### Vercel (Recommended)

1. Connect your GitHub repository to Vercel
2. Configure build settings:
   - Build Command: `npm run build`
   - Output Directory: `dist`
3. Deploy automatically on push

### GitHub Pages

1. Build the project: `npm run build`
2. Deploy the `dist` folder to GitHub Pages

## License

MIT License

## Contact

Dr. Vijaykumar Toutam  
Principal Scientist, CSIR NPL  
Email: vijaykumar.toutam@nplindia.org

## Customization

### Colors and Themes

Edit the CSS variables in `client/src/index.css`:

```css
:root {
  --academic-blue: hsl(221.2, 83.2%, 53.3%);
  --academic-muted: hsl(215.4, 16.3%, 46.9%);
  /* ... other variables */
}
```

### Content

Update the content in the respective component files:
- Hero Section: `client/src/components/hero-section.tsx`
- About Section: `client/src/components/about-section.tsx`
- Publications: `client/src/components/publications-section.tsx`
- Stats: `client/src/components/stats-section.tsx`

## 📊 Google Scholar Integration

The portfolio includes direct integration with Google Scholar:
- Profile link: [Dr. Vijaykumar Toutam](https://scholar.google.com/citations?user=NiXjAasAAAAJ&hl=en)
- Publication metrics and citations are displayed
- Direct links to research papers

## 🔧 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run check` - Type checking

### Adding New Sections

1. Create a new component in `client/src/components/`
2. Add it to the home page in `client/src/pages/home.tsx`
3. Update navigation in `client/src/components/navigation.tsx`

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints:
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## ⚡ Performance

- Optimized images and assets
- Code splitting and lazy loading
- Minimal bundle size
- Fast loading times

## 📄 License

This project is licensed under the MIT License.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📞 Contact

Dr. Vijaykumar Toutam
- Email: vijaykumar@nplindia.org
- Google Scholar: [Profile](https://scholar.google.com/citations?user=NiXjAasAAAAJ&hl=en)
- Institution: CSIR National Physical Laboratory
