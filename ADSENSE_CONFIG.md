# Google AdSense Configuration

## Setup Instructions

1. **Get your AdSense Publisher ID:**
   - Go to [Google AdSense](https://www.google.com/adsense/)
   - Sign in or create an account
   - Navigate to Account > Account Information
   - Copy your Publisher ID (format: `ca-pub-XXXXXXXXXXXXXXXXX`)

2. **Update the Publisher ID:**
   - Open `client/index.html`
   - Replace `ca-pub-XXXXXXXXXXXXXXXXX` with your actual Publisher ID

3. **Create Ad Units:**
   - In AdSense dashboard, go to Ads > By ad unit
   - Create the following ad units:
     - **Top Banner** - Display ad, Horizontal (728x90 or responsive)
     - **Bottom Banner** - Display ad, Horizontal (728x90 or responsive)
     - **Sidebar Middle** - Display ad, Rectangle (300x250)
     - **Sidebar Bottom** - Display ad, Rectangle (300x250)
     - **Sidebar Floating** - Display ad, Vertical (160x600 or 300x600)
     - **In-Content** - In-feed or In-article ad

4. **Update Ad Slots:**
   - Open `client/src/components/AdBlocks.tsx`
   - Replace the placeholder slot IDs with your actual ad unit slot IDs:
     - `AdBlockTop`: slot="YOUR_TOP_BANNER_SLOT_ID"
     - `AdBlockBottom`: slot="YOUR_BOTTOM_BANNER_SLOT_ID"
     - `AdBlockSidebarMiddle`: slot="YOUR_SIDEBAR_MIDDLE_SLOT_ID"
     - `AdBlockSidebarBottom`: slot="YOUR_SIDEBAR_BOTTOM_SLOT_ID"
     - `AdBlockSidebarFloating`: slot="YOUR_SIDEBAR_FLOATING_SLOT_ID"
     - `AdBlockInContent`: slot="YOUR_IN_CONTENT_SLOT_ID"

## Current Ad Placements

- **AdBlockTop**: Top of pages (horizontal banner)
- **AdBlockBottom**: Bottom of pages (horizontal banner)
- **AdBlockSidebarMiddle**: Middle of sidebar (rectangle)
- **AdBlockSidebarBottom**: Bottom of sidebar (rectangle)
- **AdBlockSidebarFloating**: Fixed floating sidebar (vertical skyscraper)
- **AdBlockInContent**: Within content areas (fluid/in-feed)

## Pages with Ads

The following pages currently use ad blocks:
- `client/src/pages/ImpostorGame.tsx`
- `client/src/pages/ComoJogar.tsx`
- `client/src/pages/OutrosJogos.tsx`

## Notes

- All Ezoic references have been removed
- AdSense script is loaded in `client/index.html`
- Ad blocks are responsive by default
- Ads will not show until you add your actual Publisher ID and Ad Unit Slot IDs
