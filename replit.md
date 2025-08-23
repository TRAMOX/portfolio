# Dr. Sarah Chen - Academic Portfolio Website

## Overview

This is a modern, responsive academic portfolio website built for Dr. Sarah Chen, a Principal Scientist at CSIR NPL specializing in Additive Manufacturing, 3D Printed Electronics, Optical Sensors, and Energy Storage. The website showcases her research, publications, talks, team, and professional achievements with a clean, academic design inspired by modern portfolio websites. The site is optimized for both desktop and mobile viewing, with smooth animations and SEO-ready meta tags for academic indexing.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern component architecture
- **Routing**: Wouter for lightweight client-side routing with a single-page application structure
- **Styling**: Tailwind CSS with custom academic color scheme and shadcn/ui component library for consistent, accessible UI components
- **State Management**: TanStack React Query for server state management and data fetching
- **Build Tool**: Vite for fast development and optimized production builds
- **UI Components**: Comprehensive shadcn/ui component system with Radix UI primitives for accessibility

### Backend Architecture
- **Server Framework**: Express.js with TypeScript for the REST API server
- **Development Setup**: Development server with hot module replacement and error overlay integration
- **Static Serving**: Express serves the built React application in production
- **Route Structure**: RESTful API routes with `/api` prefix convention
- **Error Handling**: Centralized error handling middleware with structured error responses

### Data Storage Solutions
- **Database**: PostgreSQL configured through Drizzle ORM for type-safe database operations
- **ORM**: Drizzle ORM with Zod schema validation for runtime type checking
- **Connection**: Neon Database serverless PostgreSQL connection via environment variables
- **Migrations**: Drizzle Kit for database schema migrations and version control
- **Fallback Storage**: In-memory storage implementation for development/testing scenarios

### Authentication and Authorization
- **Session Management**: Connect-pg-simple for PostgreSQL-backed session storage
- **User Schema**: Basic user entity with username/password fields and UUID primary keys
- **Security**: Prepared for authentication implementation with user creation and lookup methods

### External Dependencies
- **Database Provider**: Neon Database for serverless PostgreSQL hosting
- **Development Tools**: Replit integration with cartographer and runtime error modal plugins
- **SEO Optimization**: Google Fonts (Inter), Open Graph meta tags, and academic citation metadata
- **Deployment**: Configured for production deployment with Express static serving and ESM build output

### Content Structure
The application features a comprehensive academic portfolio with sections for:
- Hero section with professional introduction and quick links
- Detailed biography with timeline and achievements
- Research themes and featured projects with visual layouts
- Publications list with citation metrics and patent information
- Talks and conferences with upcoming and past presentations
- Team members and international collaborations
- Media coverage and newsletter subscription
- Contact form and professional links
- SEO-optimized metadata for academic discoverability

### Design System
- **Typography**: Inter font family for clean, academic appearance
- **Color Scheme**: Custom academic blue theme with light/dark mode support
- **Components**: Reusable UI components following atomic design principles
- **Responsive Design**: Mobile-first approach with breakpoint-based layouts
- **Animations**: Subtle scroll animations and transitions for enhanced user experience