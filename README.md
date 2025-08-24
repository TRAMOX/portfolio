# PortfolioFlow - Dr. Vijaykumar Toutam

A modern, responsive portfolio website showcasing research, publications, and professional achievements of Dr. Vijaykumar Toutam, Principal Scientist at CSIR National Physical Laboratory.

##  Live Demo

[View Live Portfolio](https://TRAMOX.github.io/portfolio)

##  Features

- **Modern Design**: Clean, professional interface with smooth animations
- **Responsive Layout**: Optimized for all devices and screen sizes
- **Dark/Light Theme**: Toggle between themes with system preference detection
- **Interactive Sections**: Smooth scrolling navigation and engaging animations
- **Research Showcase**: Dedicated sections for publications, talks, and media
- **Contact Form**: Professional contact form with validation
- **Performance Optimized**: Fast loading with modern web technologies

##  Tech Stack

- **Frontend**: React 18 + TypeScript
- **Styling**: Tailwind CSS + CSS Variables
- **Animations**: Framer Motion
- **Routing**: Wouter (lightweight router)
- **Build Tool**: Vite
- **State Management**: React Query + React Hooks
- **UI Components**: Radix UI + Custom Components

##  Project Structure

```
PortfolioFlow/
├── src/
│   ├── components/     # Reusable UI components
│   ├── pages/         # Page components
│   ├── hooks/         # Custom React hooks
│   ├── lib/           # Utility functions and configurations
│   ├── App.tsx        # Main application component
│   ├── main.tsx       # Application entry point
│   └── index.css      # Global styles and Tailwind imports
├── public/            # Static assets
├── index.html         # HTML template
├── vite.config.ts     # Vite configuration
├── tailwind.config.js # Tailwind CSS configuration
├── tsconfig.json      # TypeScript configuration
└── package.json       # Dependencies and scripts
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/TRAMOX/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

##  Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run deploy` - Deploy to GitHub Pages
- `npm run type-check` - Run TypeScript type checking

## Deployment

### GitHub Pages

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Deploy to GitHub Pages**
   ```bash
   npm run deploy
   ```

3. **Configure GitHub Pages**
   - Go to your repository settings
   - Enable GitHub Pages
   - Set source to "gh-pages" branch

### Custom Domain

1. Add your domain to the `public` folder
2. Update `vite.config.ts` base path
3. Configure DNS settings

## 🎨 Customization

### Colors and Themes

Edit `src/index.css` to customize:
- CSS variables for light/dark themes
- Academic color palette
- Custom utility classes

### Content

Update content in:
- `src/components/hero-section.tsx` - Main introduction
- `src/components/about-section.tsx` - About information
- `src/components/publications-section.tsx` - Research publications
- `src/components/contact-section.tsx` - Contact details

### Styling

Modify `tailwind.config.js` for:
- Custom color schemes
- Font families
- Animation keyframes
- Extended utilities

##  Responsive Design

The portfolio is fully responsive with breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

##  Configuration Files

- **Vite**: `vite.config.ts` - Build and development settings
- **Tailwind**: `tailwind.config.js` - CSS framework configuration
- **TypeScript**: `tsconfig.json` - Type checking and compilation
- **PostCSS**: `postcss.config.js` - CSS processing

##  Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

##  License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

##  About

**Dr. Vijaykumar Toutam** is a Principal Scientist at CSIR National Physical Laboratory, specializing in:
- Additive Manufacturing
- 3D Printed Electronics
- Optical Sensors
- Energy Harvesters

---

⭐ **Star this repository if you find it helpful!**
