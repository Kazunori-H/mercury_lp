# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a static corporate landing page for Mercury Corporation (株式会社マーキュリー), a Japanese company website. The site is a single-page application with Japanese content and includes sections for company vision, business overview, company profile, and contact information.

## Project Structure

```
mercury_lp/
├── index.html          # Main HTML file with all content
├── css/                # Stylesheets directory (empty - needs creation)
├── js/                 # JavaScript directory (empty - needs creation)
└── images/             # Images directory (.gitkeep placeholder)
```

## Development Setup

This is a static HTML website with no build process or dependencies. To develop:

1. Open `index.html` directly in a browser, or
2. Use a local development server:
   ```bash
   # Python 3
   python -m http.server 8000

   # Node.js (if http-server is installed)
   npx http-server
   ```

## Architecture Notes

### Single-Page Structure
The entire site is in `index.html` with the following sections:
- Header with navigation (`#vision`, `#business`, `#company`, `#contact`)
- Hero section with main tagline
- Vision section (corporate philosophy and vision)
- Business section (service descriptions)
- Company profile section (corporate information table)
- Contact section (phone and email)
- Footer with company info and navigation links

### Missing Files
The HTML references external files that need to be created:
- `css/style.css` - Currently referenced but doesn't exist
- `js/script.js` - Currently referenced but doesn't exist (likely for mobile nav toggle)

### Content Update Markers
Throughout the HTML, placeholder text is marked with `<!-- ★要更新: ... -->` comments indicating content that needs to be updated with actual company information:
- Company catchphrases and descriptions
- Business details (currently generic placeholder text)
- Company profile details (establishment date, representative, capital, address)

### Contact Information
Current contact details (may be placeholders):
- Phone: 075-222-8811
- Email: contact@mercuryjpn.com

### Navigation
The site uses hash-based anchor navigation with a mobile hamburger menu (controlled by `.nav-toggle` button).

### Fonts and Dependencies
- Uses Google Fonts: Noto Sans JP (weights: 400, 500, 700)
- No JavaScript libraries or frameworks
- Vanilla JavaScript for interactions

## Development Guidelines

When working with this codebase:

1. **CSS Development**: Create `css/style.css` following the class names already defined in the HTML
2. **JavaScript Development**: Create `js/script.js` to implement the mobile navigation toggle functionality
3. **Japanese Content**: All user-facing content is in Japanese; maintain language consistency
4. **Responsive Design**: The HTML includes `<br class="pc-only">` tags suggesting mobile/desktop layouts
5. **Update Placeholders**: Look for `<!-- ★要更新: ... -->` comments to identify content that needs real data
