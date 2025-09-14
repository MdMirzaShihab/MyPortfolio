# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Structure

This is a **performance-optimized** React portfolio website built with Vite, featuring:
- **Tech Stack**: React 18, Vite, Tailwind CSS, Framer Motion, GSAP, Locomotive Scroll
- **Architecture**: Single-page application with React Router for navigation and code splitting
- **Project Structure**:
  - `src/components/` - All React components organized by function
  - `src/components/Projects/` - Individual project showcase components (lazy-loaded)
  - `src/hooks/` - Custom React hooks (useImagePreload)
  - `src/Constants/` - Application constants
  - `src/assets/` - Static assets (68MB+ of videos and images)
  - `src/components/index.js` - Central component exports

## Development Commands

```bash
# Development server
npm run dev

# Build for production (includes bundle analysis)
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint

# Update browserslist database
npx update-browserslist-db@latest
```

**Bundle Analysis**: After building, check `dist/stats.html` for detailed bundle analysis with gzip/brotli sizes.

## Performance Optimizations

This portfolio implements advanced performance optimizations:

### Code Splitting & Lazy Loading
- **Route-Based Splitting**: All project pages (`/Projects/*.jsx`) are lazy-loaded using `React.lazy()`
- **Bundle Chunks**: Manual chunks configured for vendor, animations, router, and scroll libraries
- **Dynamic Imports**: Locomotive Scroll loads conditionally only on desktop (>1024px width)

### Video Optimization
- **LazyVideo Component**: Custom component with Intersection Observer for on-demand video loading
- **Viewport-Based Loading**: Videos load only when within 50px of viewport
- **Preload Strategy**: Uses `preload="metadata"` to minimize initial bandwidth
- **Progressive Enhancement**: Smooth opacity transitions for loading states

### Image Preloading
- **Critical Resource Preloading**: Hero images preloaded via `useImagePreload` hook
- **Loading State Management**: Tracks image loading progress to prevent layout shifts
- **Optimized WebP Format**: All images use WebP format for smaller file sizes

### Component Optimization
- **React.memo**: Heavy components (Hero, ProjectSection) wrapped with memoization
- **GSAP Tree Shaking**: Imports optimized with `gsap/dist/gsap` for smaller bundles
- **Conditional Loading**: Animation libraries loaded only when needed

## Key Architecture Notes

- **Component Export Pattern**: All components exported from `src/components/index.js` with named exports in `main.jsx`
- **Routing**: React Router with nested routes + Suspense boundaries for lazy-loaded components
- **Animation Libraries**: GSAP (tree-shaken), Framer Motion, Locomotive Scroll (desktop only)
- **Styling**: Tailwind CSS with PostCSS configuration
- **Asset Strategy**: 68MB+ assets loaded on-demand via intersection observers

## Component Organization

- **Page Components**: Home, About, Contact, Projects in root components folder
- **Project Pages**: Lazy-loaded components in `components/Projects/` subfolder
- **Shared UI**: Nav, Footer, Alert components used across all pages
- **Performance Components**: LazyVideo for optimized media loading
- **Custom Hooks**: `useImagePreload` in `src/hooks/` for asset preloading
- **Central Exports**: `index.js` manages all component exports for clean imports

## Performance Best Practices

### When Adding New Components
- **Heavy Components**: Wrap with `React.memo()` if they render frequently or have expensive operations
- **Large Assets**: Use LazyVideo component for videos or create similar lazy loading for images
- **Route Components**: Consider lazy loading with `React.lazy()` for non-critical pages

### Asset Management
- **Video Files**: Keep under 15MB when possible, use LazyVideo for all video elements
- **Images**: Prefer WebP format, implement lazy loading for below-the-fold content
- **Preloading**: Only preload critical above-the-fold assets using `useImagePreload` hook

### Bundle Optimization
- **Library Imports**: Import specific modules (e.g., `gsap/dist/gsap`) instead of full libraries
- **Conditional Loading**: Load heavy libraries only when needed (screen size, user interaction)
- **Code Splitting**: Use React.lazy() for routes that aren't immediately visible

### Development Workflow
1. **After Changes**: Run `npm run build` to check bundle sizes
2. **Monitor Performance**: Check `dist/stats.html` for bundle analysis
3. **Test Loading**: Verify lazy loading works in dev environment
4. **Optimize Imports**: Ensure tree shaking works for added libraries

### Current Performance Metrics
- **Initial Bundle**: ~587KB JS (gzipped: ~209KB)
- **Lazy Chunks**: ~140B each for project pages
- **Asset Loading**: 68MB+ loaded on-demand
- **Expected Lighthouse Score**: 85+ performance