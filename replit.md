# Overview

This is a modern full-stack web application built with React, TypeScript, and Express.js. The project appears to be a marketing website for "Automai," a Brazilian company providing automation and AI solutions for small and medium enterprises (PMEs). The application features a sophisticated landing page with multiple sections showcasing the company's services, mission, and contact information, with heavy emphasis on WhatsApp integration for customer engagement.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
The frontend is built using React with TypeScript and follows a component-based architecture pattern. Key design decisions include:

- **Vite Build Tool**: Chosen over Create React App for faster development builds and better performance
- **Wouter Router**: Lightweight routing solution instead of React Router, reducing bundle size
- **Shadcn/UI Components**: Modern component library built on Radix UI primitives for accessibility and customization
- **TailwindCSS**: Utility-first CSS framework for rapid UI development with dark mode support
- **React Query**: Server state management for API calls and caching
- **Component Structure**: Well-organized component hierarchy with reusable UI components and page-specific sections

## Backend Architecture
The backend follows a minimal Express.js server setup with TypeScript:

- **Express Server**: RESTful API server with middleware for logging and error handling
- **Development/Production Separation**: Vite integration for development mode with static serving in production
- **Storage Interface**: Abstracted storage layer with in-memory implementation and PostgreSQL preparation
- **Modular Route System**: Clean separation of concerns with dedicated route registration

## Data Storage Solutions
- **Drizzle ORM**: Type-safe ORM chosen for PostgreSQL integration with schema-first approach
- **PostgreSQL Database**: Production-ready database with Neon serverless support
- **In-Memory Storage**: Development storage implementation with interface for easy database switching
- **Schema Definition**: Centralized schema definitions using Drizzle with Zod validation

## Authentication and Authorization
Currently implements a basic user schema structure with:
- User management foundation with username/password fields
- UUID primary keys for scalability
- Prepared interfaces for CRUD operations
- Session management preparation with connect-pg-simple

## Design and Styling Decisions
- **Dark Theme Default**: Application defaults to dark mode with comprehensive CSS custom properties
- **Brazilian Portuguese**: Full Portuguese localization for target market
- **Mobile-First Responsive**: Tailwind responsive design patterns throughout
- **Purple Brand Color Scheme**: Custom purple gradient theme (`--automai-purple`) for brand consistency
- **Inter Font Family**: Modern, readable font choice for professional appearance

# External Dependencies

## Core Framework Dependencies
- **React 18**: Frontend framework with hooks and modern patterns
- **Express.js**: Backend server framework
- **TypeScript**: Type safety across the entire stack
- **Vite**: Build tool and development server

## Database and ORM
- **Drizzle ORM**: PostgreSQL ORM with TypeScript support
- **Neon Database**: Serverless PostgreSQL provider
- **connect-pg-simple**: PostgreSQL session store

## UI and Styling
- **Radix UI**: Accessible component primitives
- **TailwindCSS**: Utility-first CSS framework
- **Shadcn/UI**: Pre-built component library
- **Lucide React**: Modern icon library

## State Management and Data Fetching
- **TanStack React Query**: Server state management and caching
- **React Hook Form**: Form state management with validation
- **Hookform Resolvers**: Form validation integration

## Development Tools
- **ESBuild**: Fast bundling for production builds
- **PostCSS**: CSS processing with Autoprefixer
- **Replit Integration**: Development environment optimizations

## Third-Party Integrations
- **WhatsApp Business Integration**: Primary customer communication channel
- **Google Fonts**: Inter font family hosting
- **Meta Tags**: Social media optimization (Open Graph, Twitter Cards)

The application is designed to be easily deployable on platforms like Replit while maintaining production-ready architecture patterns.