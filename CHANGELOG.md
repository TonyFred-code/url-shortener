# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [0.1.0] - 2026-04-29

### Added

- Created and added page section components into `App` component
- Created `Header`, `Hero`, `Form`, `Features`, `Boost`, and `Footer`
  components to store their respective section content
- Added project custom theme colors in `@theme`
- Added project font-family
- Installed and configure eslint and prettier for linting and formatting
- Installed and configure tailwindCSS for styling

### Fixed

- Added missing export keyword in `App` component declaration

---

## [0.1.1] - 2026-05-01

### Added

- Added accessibility tags/attributes to navigation lists

### Fixed

- Made package private to prevent accidental package deployment on npm

### Removed

- Cleaned up commented out code
- Removed redundant classname attributes and class tokens

### Changed

- Switch logic to change state of mobileMenuOpen boolean to functional form

---

## [0.2.0] - 2026-05-03

### Added

- Added env for authentication format
- Included active state variant for primary blue color in theme
- Created custom hook for managing shortened URLs
- Created `History` component for showcasing shortened URLs
- Installed lucide react icons for loading spinner icon

### Changed

- Updated form submission to include `tinyurl` api for creating shortened URL

---

## [1.0.0] - 2026-05-05

### Added

- Added comment highlighting frontend exposure of api auth in build bundle
- Added individual component for `Footer` component social link icons
- Added specific off-white/light gray color for form section background
- Added aria-attributes to ensure visually closed mobile menu is also closed
  from keyboard users and the accessibility tree

### Changed

- Refactored font family utility by separating font-weight from font-family
- Included a try-catch guard against malformed JSON parse in useUrlHistory hook
- Updated initialization of useUrlHistory state hook to prevent unnecessary
  localStorage access
- Refactored url history update to prevent stale value access
- Updated name of custom url history hook following standard casing
  (`useURLHistory` -> `useUrlHistory`)
- Updated aria-attributes on mobile menu toggle button

### Fixed

- Corrected conditional rendering of `History` component in `Form` component

### Removed

- Removed template README document
- Removed social links svg files
- Removed unused formStates constant file

---

## [1.0.1] - 2026-05-05

### Added

- Included `sr-only` names for footer section social links

### Changed

- Included API used in README `build-with` section
- Included directions on setting up environment variables for local development
