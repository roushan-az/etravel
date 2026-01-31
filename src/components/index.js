/**
 * Components Index
 * Central export file for all application components
 * Organized by category for easy imports
 */

// Layout Components
export { default as Header } from './layout/Header';
export { default as Footer } from './layout/Footer';
export { default as ScrollToTop } from './layout/ScrollToTop';

// Card Components
export {
  PackageCard,
  StateCard,
  CityCard,
  FeatureCard,
  StatCard,
  ReviewCard,
} from './cards';

// Home Components
export {
  HeroCarousel,
  StatsSection,
  WhyChooseUs,
  CTASection,
  NewsletterSection,
} from './home';
