# VYBE Premium Integration Documentation

## Overview
This document describes the Premium integration implementation for the VYBE app with a dark glowing gold theme.

## Features Implemented

### 1. Premium Components

#### `PremiumButton`
A rectangular button with black base, gold gradient border, and shimmer animation.

**Props:**
- `onPress` - Function to call when pressed
- `text` - Button text (default: "Unlock Premium")
- `icon` - Emoji icon (default: 👑)
- `style` - Additional styles
- `compact` - Boolean for compact size

**Usage:**
```jsx
<PremiumButton 
  onPress={openSubscriptionFlow}
  text="Unlock Premium"
  icon="👑"
/>
```

#### `PremiumBadge`
Circular icon with gold glow + crown symbol.

**Props:**
- `size` - 'small' | 'medium' | 'large'
- `style` - Additional styles

**Usage:**
```jsx
<PremiumBadge size="medium" />
```

#### `PremiumFrame`
Creates a glowing gold frame around premium content (e.g., tournaments).

**Props:**
- `children` - Content to wrap
- `style` - Additional styles
- `animated` - Boolean for pulse animation (default: true)

**Usage:**
```jsx
<PremiumFrame animated={true}>
  <BattleCard {...battleData} />
</PremiumFrame>
```

#### `PremiumLockOverlay`
Displays a gold lock overlay with "Premium Required" message.

**Props:**
- `onPress` - Function to call when pressed
- `message` - Lock message (default: "Premium Required")
- `showButton` - Boolean to show unlock button (default: true)
- `style` - Additional styles

**Usage:**
```jsx
<PremiumLockOverlay 
  onPress={openSubscriptionFlow}
  message="Premium Required"
  showButton={true}
/>
```

### 2. Premium Context

**`PremiumContext`** provides premium state management across the app.

**API:**
- `isPremium` - Boolean indicating premium status
- `loading` - Boolean for loading state
- `activatePremium()` - Activates premium subscription
- `deactivatePremium()` - Deactivates premium subscription
- `openSubscriptionFlow()` - Opens subscription flow

**Usage:**
```jsx
import { usePremium } from '../context/PremiumContext';

function MyComponent() {
  const { isPremium, openSubscriptionFlow } = usePremium();
  
  return (
    <View>
      {!isPremium && (
        <PremiumButton onPress={openSubscriptionFlow} />
      )}
    </View>
  );
}
```

### 3. Theme Updates

Added premium colors to `THEME.colors`:
- `premium`: '#FFD700' (Gold)
- `premiumLight`: '#FFA500' (Light gold/orange)
- `premiumDark`: '#B8860B' (Dark goldenrod)
- `premiumGlow`: 'rgba(255, 215, 0, 0.3)'
- `gradientPremium`: ['#FFD700', '#FFA500', '#FFD700']
- `premiumColor`: '#FFD700' (for progress indicators)

### 4. Screen Integrations

#### **RewardsScreen**
- Premium badges marked with gold crown indicator
- Premium store items with gold lock overlay
- Locked items show "Unlock with Premium" button
- Premium badges highlighted with gold glow border

**Data Structure:**
```javascript
{
  id: 1,
  name: 'Champion',
  xpRequired: 20000,
  isPremium: true, // Mark as premium
  // ... other fields
}
```

#### **MissionsScreen**
- Premium missions marked with gold crown badge
- Weekly premium challenges
- Premium missions show lock overlay when not subscribed
- Gold glowing border on premium mission cards

**Data Structure:**
```javascript
{
  id: 2,
  title: 'Run 5 km',
  xp: 400,
  isPremium: true, // Mark as premium
  // ... other fields
}
```

#### **BattlesScreen**
- Premium tournaments highlighted with gold glowing frame
- "Premium Entry" badge on tournament cards
- Animated pulse effect on premium tournament frames

**Data Structure:**
```javascript
{
  id: 1,
  team1: { ... },
  team2: { ... },
  isPremium: true, // Mark as premium tournament
  // ... other fields
}
```

#### **PremiumSubscriptionScreen**
Complete subscription flow screen with:
- Premium benefits showcase
- Subscription plan selection (Monthly/Yearly)
- Premium badge hero section
- Active premium status display

## Color System

### Premium (Gold)
- **Use for:** Premium badges, premium feature borders, premium indicators
- **Color:** Indigo (#FFD700) with gold glow
- **Distinguishes from:** XP (Indigo), Points (Emerald)

### XP (Indigo)
- **Use for:** XP balance, XP progress bars, XP rewards
- **Color:** #5B9FFF (Indigo/Blue)

### Points (Emerald)
- **Use for:** Spendable points, store currency, redeemable rewards
- **Color:** #4FFFB0 (Emerald/Green)

## Implementation Checklist

### Rewards Page ✅
- [x] Premium badges with gold crown indicator
- [x] Premium store items with gold lock overlay
- [x] "Unlock with Premium" button on locked items
- [x] Gold glow effect on premium items

### Missions Page ✅
- [x] Premium missions marked with gold crown
- [x] Premium lock overlay on missions
- [x] Gold border on premium mission cards
- [x] Premium badge indicators

### Battles Page ✅
- [x] Premium tournaments with gold glowing frame
- [x] "Premium Entry" badge
- [x] Animated glow effect on premium tournaments

### Community Page
- [ ] Premium analytics/customization options (TODO)
- [ ] Gold lock overlay on premium features (TODO)

## Setup Instructions

### 1. Wrap App with PremiumProvider

In your `App.js` or main navigation file:

```jsx
import { PremiumProvider } from './src/context/PremiumContext';

export default function App() {
  return (
    <PremiumProvider>
      {/* Your app navigation */}
    </PremiumProvider>
  );
}
```

### 2. Using Premium Components

```jsx
import { usePremium } from '../context/PremiumContext';
import PremiumButton from '../components/PremiumButton';
import PremiumLockOverlay from '../components/PremiumLockOverlay';

function MyScreen() {
  const { isPremium, openSubscriptionFlow } = usePremium();

  return (
    <View>
      {!isPremium && (
        <PremiumLockOverlay onPress={openSubscriptionFlow} />
      )}
    </View>
  );
}
```

### 3. Marking Content as Premium

Add `isPremium: true` to any item that should be premium-locked:

```javascript
const badges = [
  {
    id: 1,
    name: 'Champion',
    isPremium: true, // This badge requires Premium
    // ... other fields
  }
];
```

## Testing Premium Features

To test premium features without payment integration:

```jsx
import { usePremium } from '../context/PremiumContext';

// In your component
const { activatePremium, deactivatePremium } = usePremium();

// Activate premium for testing
activatePremium();

// Deactivate to test locked state
deactivatePremium();
```

## Next Steps

1. **Payment Integration:**
   - Integrate with payment provider (Stripe, PayPal, In-App Purchases)
   - Implement actual subscription logic in `openSubscriptionFlow()`
   - Add receipt validation

2. **Backend Integration:**
   - API endpoints for premium status
   - Subscription management
   - Premium feature access control

3. **Community Page Premium Features:**
   - Premium analytics dashboard
   - Profile customization options
   - Advanced filters and sorting

4. **Additional Premium Features:**
   - Premium workout plans
   - Exclusive coaching content
   - Priority support
   - Ad-free experience

## Design Philosophy

The Premium integration follows these principles:

1. **Gold Glow Theme:** All premium features use gold (#FFD700) with subtle glow effects
2. **Non-Intrusive:** Premium features are highlighted but don't disrupt free user experience
3. **Clear Differentiation:** Gold for Premium, Indigo for XP, Emerald for Points
4. **Consistent Patterns:** Same visual language across all premium features
5. **Subtle Animation:** Shimmer and pulse effects add polish without being distracting

## Troubleshooting

### Premium status not persisting
- Check AsyncStorage permissions
- Verify PremiumProvider wraps entire app
- Ensure context is properly imported

### Premium components not showing
- Verify imports from correct paths
- Check that isPremium is properly passed
- Ensure conditional rendering logic is correct

### Gold colors not displaying
- Update theme.js with premium colors
- Import THEME.colors in components
- Check for conflicting styles

## Support

For questions or issues with Premium integration, contact the development team.
