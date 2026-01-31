# Components Documentation

This directory contains all reusable React components for the eTourTravel India application, organized by category for maintainability and ease of use.

## 📁 Directory Structure

```
components/
├── layout/          # Layout components (Header, Footer, ScrollToTop)
├── cards/           # Reusable card components
├── home/            # Homepage-specific components
└── index.js         # Central export file
```

---

## 🏗️ Layout Components

### Header.jsx
Sticky, responsive navigation header with:
- Top bar (phone & email)
- Logo with hover effect
- Desktop navigation with dropdown menus
- Functional search bar
- Mobile hamburger menu with slide-in animation
- Scroll detection (changes style)

**Usage:**
```jsx
import { Header } from '@/components';
<Header />
```

### Footer.jsx
Complete footer with:
- Newsletter subscription form
- Company info with logo
- Quick links and popular destinations
- Contact information
- Social media icons
- Copyright and legal links

**Usage:**
```jsx
import { Footer } from '@/components';
<Footer />
```

### ScrollToTop.jsx
Automatically scrolls to top on route changes.

**Usage:**
```jsx
import { ScrollToTop } from '@/components';
<ScrollToTop />
```

---

## 🎴 Card Components

### PackageCard.jsx
Displays tour package information with image, pricing, and ratings.

**Props:**
- `pkg` (object, required): Package data object
- `index` (number): Animation delay index
- `variant` ('default' | 'compact'): Display variant

**Usage:**
```jsx
import { PackageCard } from '@/components';

<PackageCard 
  pkg={packageData} 
  index={0} 
  variant="default" 
/>
```

**Package Object Structure:**
```javascript
{
  id: string,
  title: string,
  state: string,
  duration: string,
  price: number,
  originalPrice: number,
  image: string,
  rating: number,
  reviews: number,
  featured: boolean
}
```

### StateCard.jsx
Displays state/destination information with large image and overlay details.

**Props:**
- `state` (object, required): State data object
- `index` (number): Animation delay index
- `variant` ('default' | 'compact'): Display variant

**Usage:**
```jsx
import { StateCard } from '@/components';

<StateCard 
  state={stateData} 
  index={0} 
  variant="default" 
/>
```

### CityCard.jsx
Displays city information with attractions and best time to visit.

**Props:**
- `city` (object, required): City data object
- `index` (number): Animation delay index
- `showState` (boolean): Whether to show state name

**Usage:**
```jsx
import { CityCard } from '@/components';

<CityCard 
  city={cityData} 
  index={0} 
  showState={true} 
/>
```

### FeatureCard.jsx
Displays a feature or benefit with icon, title, and description.

**Props:**
- `icon` (Component, required): Lucide icon component
- `title` (string, required): Feature title
- `description` (string, required): Feature description
- `index` (number): Animation delay index
- `variant` ('default' | 'gradient'): Display variant

**Usage:**
```jsx
import { FeatureCard } from '@/components';
import { Award } from 'lucide-react';

<FeatureCard 
  icon={Award}
  title="Expert Curated"
  description="Handpicked tours by travel experts"
  index={0}
  variant="gradient"
/>
```

### StatCard.jsx
Displays a statistic with large number and label.

**Props:**
- `value` (string | number, required): Stat value
- `label` (string, required): Stat label
- `icon` (Component): Optional icon
- `index` (number): Animation delay index
- `variant` ('default' | 'compact'): Display variant

**Usage:**
```jsx
import { StatCard } from '@/components';
import { Package } from 'lucide-react';

<StatCard 
  value="500+"
  label="Tour Packages"
  icon={Package}
  index={0}
/>
```

### ReviewCard.jsx
Displays customer review with rating, text, and author info.

**Props:**
- `review` (object, required): Review data object
- `index` (number): Animation delay index

**Usage:**
```jsx
import { ReviewCard } from '@/components';

<ReviewCard 
  review={reviewData} 
  index={0} 
/>
```

**Review Object Structure:**
```javascript
{
  rating: number,        // 1-5
  text: string,
  name: string,
  date: string,
  location: string,
  avatar: string,
  verified: boolean
}
```

---

## 🏠 Home Components

### HeroCarousel.jsx
Auto-rotating hero carousel with navigation.

**Props:**
- `slides` (array, required): Array of slide objects
- `autoPlayInterval` (number): Auto-play interval in ms (default: 5000)

**Usage:**
```jsx
import { HeroCarousel } from '@/components';

const slides = [
  {
    image: 'url',
    title: 'Discover India',
    subtitle: '36 States • 500+ Packages',
    cta: 'Explore Now',
    ctaLink: '/states'
  }
];

<HeroCarousel slides={slides} autoPlayInterval={5000} />
```

**Features:**
- Auto-play with configurable interval
- Manual navigation (arrows + dots)
- Pause on hover
- Smooth transitions with Framer Motion
- Responsive design

### StatsSection.jsx
Displays key statistics in a grid layout.

**Props:**
- `stats` (array, required): Array of stat objects

**Usage:**
```jsx
import { StatsSection } from '@/components';

const stats = [
  { value: '36+', label: 'States Covered', icon: MapPin },
  { value: '500+', label: 'Tour Packages', icon: Package }
];

<StatsSection stats={stats} />
```

### WhyChooseUs.jsx
Displays company benefits in a feature grid.

**Props:**
- `title` (string): Section title (default: "Why Choose Us?")
- `features` (array, required): Array of feature objects

**Usage:**
```jsx
import { WhyChooseUs } from '@/components';
import { Award, Shield } from 'lucide-react';

const features = [
  { 
    icon: Award, 
    title: 'Expert Curated', 
    description: 'Handpicked tours by experts' 
  },
  { 
    icon: Shield, 
    title: 'Safe & Secure', 
    description: 'Verified partners' 
  }
];

<WhyChooseUs title="Why Book With Us?" features={features} />
```

### CTASection.jsx
Call-to-action section with gradient background.

**Props:**
- `title` (string, required): Section title
- `description` (string): Section description
- `primaryCTA` (object): Primary button config
- `secondaryCTA` (object): Secondary button config
- `variant` ('gradient' | 'dark' | 'solid'): Background variant

**Usage:**
```jsx
import { CTASection } from '@/components';
import { MapPin, ChevronRight } from 'lucide-react';

<CTASection 
  title="Ready to Explore India?"
  description="Start your journey today"
  primaryCTA={{ text: 'Explore', link: '/states', icon: MapPin }}
  secondaryCTA={{ text: 'Browse', link: '/search', icon: ChevronRight }}
  variant="gradient"
/>
```

### NewsletterSection.jsx
Email subscription form with validation and success state.

**Props:**
- `title` (string): Form title
- `description` (string): Form description
- `variant` ('standalone' | 'embedded'): Display variant

**Usage:**
```jsx
import { NewsletterSection } from '@/components';

<NewsletterSection 
  title="Subscribe to Our Newsletter"
  description="Get the latest deals"
  variant="standalone"
/>
```

**Features:**
- Email validation
- Success state animation
- Auto-reset after 3 seconds
- Responsive design
- Two variants (standalone with bg, embedded for footer)

---

## 🎨 Design Patterns

### Animations
All components use Framer Motion for smooth animations:
- **Initial state:** `opacity: 0, y: 20`
- **Animate:** `opacity: 1, y: 0`
- **Stagger delays:** `index * 0.1` for list items

### Hover Effects
- Scale transforms: `hover:scale-105` or `hover:scale-110`
- Shadow elevation: `hover:shadow-2xl`
- Color transitions: `hover:text-primary-600`
- Image zoom: `hover:scale-110` on parent `overflow-hidden`

### Responsive Breakpoints
- Mobile: `< 640px`
- Tablet: `640px - 1024px` (md)
- Desktop: `> 1024px` (lg)

### Color Scheme
- Primary: Orange gradient (#FF6B35)
- Text: Gray scale (900, 600, 400)
- Background: White, gray-50, gray-100

---

## 📦 Import Patterns

### Named Imports (Recommended)
```jsx
import { PackageCard, StateCard, HeroCarousel } from '@/components';
```

### Category Imports
```jsx
import { PackageCard } from '@/components/cards';
import { HeroCarousel } from '@/components/home';
```

### Direct Imports
```jsx
import PackageCard from '@/components/cards/PackageCard';
```

---

## 🔧 Development Guidelines

### Adding New Components

1. Create component file in appropriate directory
2. Add PropTypes validation
3. Include JSDoc comments
4. Export from category index.js
5. Update main index.js
6. Document in this README

### Component Structure
```jsx
import PropTypes from 'prop-types';

/**
 * ComponentName
 * Brief description
 * Used in: PageName
 */
export default function ComponentName({ prop1, prop2 }) {
  return (
    <div>
      {/* Component JSX */}
    </div>
  );
}

ComponentName.propTypes = {
  prop1: PropTypes.string.isRequired,
  prop2: PropTypes.number,
};
```

### Best Practices

1. **Always use PropTypes** for type checking
2. **Include default props** where appropriate
3. **Add JSDoc comments** for component description
4. **Use semantic HTML** elements
5. **Follow accessibility** guidelines (ARIA labels, alt text)
6. **Optimize images** with lazy loading
7. **Keep components pure** (no side effects in render)
8. **Use meaningful variable names**
9. **Add loading states** for async operations
10. **Handle error states** gracefully

---

## 🚀 Performance Tips

1. **Lazy load images:** Use `loading="lazy"` attribute
2. **Memoize expensive calculations:** Use `useMemo`
3. **Avoid inline functions:** Define handlers outside JSX
4. **Use key props:** For lists and dynamic content
5. **Optimize animations:** Use transform and opacity
6. **Code splitting:** Dynamic imports for large components

---

## 🧪 Testing

Components should be tested for:
- Rendering with required props
- Handling missing/invalid props
- User interactions (clicks, hovers)
- Responsive behavior
- Accessibility compliance

---

## 📝 License

MIT License - Free to use and modify
